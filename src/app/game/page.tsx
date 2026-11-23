"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { ALL_POSES, POSES_BY_TIER } from "@/data/poses";
import { Pose, SkillTier, QuestionLanguageMode, TIER_CONFIG } from "@/types/pose";
import {
  generateQuizRound,
  evaluateAnswer,
  calculateRoundResult,
  QuizRound,
  QuestionFeedback,
  RoundResult,
} from "@/lib/quiz-engine";
import {
  getLocalProgress,
  saveLocalProgress,
  recordRoundOutcome,
  selectAdaptivePracticePoses,
  ACHIEVEMENTS,
  PlayerProgress,
  DEFAULT_PLAYER_PROGRESS,
} from "@/lib/progression";
import {
  playCorrectChime,
  playIncorrectDampen,
  playStreakBonusFanfare,
  playRoundComplete,
  playClick,
  isSoundEnabled,
  setSoundEnabled,
} from "@/lib/audio";
import { PoseIllustration } from "@/components/game/PoseIllustration";

type GameView = "menu" | "play" | "results" | "codex" | "trophies";

export default function GameArcadePage() {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // High-level navigation
  const [view, setView] = useState<GameView>("menu");
  const [drillMode, setDrillMode] = useState<QuestionLanguageMode>("sanskrit");
  const [selectedTier, setSelectedTier] = useState<SkillTier | "all">("all");
  const [isTimed, setIsTimed] = useState(false);
  const [isAdaptive, setIsAdaptive] = useState(false);
  const [timerRemaining, setTimerRemaining] = useState(15);

  // Audio state
  const [soundOn, setSoundOn] = useState(() => (typeof window !== "undefined" ? isSoundEnabled() : true));

  // Player persistent data
  const [progress, setProgress] = useState<PlayerProgress>(() => {
    if (typeof window !== "undefined") return getLocalProgress();
    return DEFAULT_PLAYER_PROGRESS;
  });

  // Active round state
  const [round, setRound] = useState<QuizRound | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<QuestionFeedback | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [maxStreakInRound, setMaxStreakInRound] = useState(0);
  const [history, setHistory] = useState<{ poseId: string; isCorrect: boolean }[]>([]);
  const [finalResult, setFinalResult] = useState<RoundResult | null>(null);
  const [newlyUnlocked, setNewlyUnlocked] = useState<string[]>([]);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playClick();
  };

  // Start new game round
  const startGame = useCallback(
    (mode: QuestionLanguageMode, tier: SkillTier | "all", timed = false, adaptive = false) => {
      playClick();
      setDrillMode(mode);
      setSelectedTier(tier);
      setIsTimed(timed);
      setIsAdaptive(adaptive);
      setTimerRemaining(15);

      let pool: Pose[] = ALL_POSES;
      if (tier !== "all" && POSES_BY_TIER[tier]) {
        pool = POSES_BY_TIER[tier];
      }

      let posesToUse = pool;
      if (adaptive) {
        const saved = getLocalProgress();
        const { selectedPoses } = selectAdaptivePracticePoses(pool, saved.poseStats, 10);
        posesToUse = selectedPoses;
      }

      const newRound = generateQuizRound(posesToUse, 10, mode);
      setRound(newRound);
      setCurrentIndex(0);
      setSelectedChoiceId(null);
      setFeedback(null);
      setIsLocked(false);
      setScore(0);
      setCurrentStreak(0);
      setMaxStreakInRound(0);
      setHistory([]);
      setFinalResult(null);
      setNewlyUnlocked([]);
      setView("play");
    },
    []
  );

  const currentQuestion = round?.questions[currentIndex];
  const isSanskritPrompt = currentQuestion?.promptType === "sanskrit";

  // Handle choice selection
  const handleSelectChoice = useCallback(
    (choiceId: string) => {
      if (isLocked || !currentQuestion) return;

      setIsLocked(true);
      setSelectedChoiceId(choiceId);

      const evaluated = evaluateAnswer(currentQuestion, choiceId, currentStreak);
      setFeedback(evaluated);

      // Play procedural audio
      if (evaluated.isCorrect) {
        if (evaluated.streakBonus > 0) {
          playStreakBonusFanfare();
        } else {
          playCorrectChime();
        }
      } else {
        playIncorrectDampen();
      }

      const newStreak = evaluated.isCorrect ? currentStreak + 1 : 0;
      setCurrentStreak(newStreak);
      setMaxStreakInRound((prev) => Math.max(prev, newStreak));
      setScore((prev) => prev + evaluated.earnedXP);

      const nextHistory = [
        ...history,
        {
          poseId: currentQuestion.targetPose.id,
          isCorrect: evaluated.isCorrect,
        },
      ];
      setHistory(nextHistory);
    },
    [isLocked, currentQuestion, currentStreak, history]
  );

  // Advance or finish
  const handleContinue = useCallback(() => {
    if (!round) return;

    if (currentIndex + 1 < round.totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedChoiceId(null);
      setFeedback(null);
      setIsLocked(false);
      setTimerRemaining(15);
      playClick();
    } else {
      const finalCalc = calculateRoundResult(history, score);
      setFinalResult(finalCalc);
      playRoundComplete();

      const currentStored = getLocalProgress();
      const { updatedProgress, newlyUnlocked: unlocked } = recordRoundOutcome(currentStored, {
        earnedScore: finalCalc.score,
        accuracy: finalCalc.accuracy,
        history,
        maxStreakInRound,
        promptType: drillMode,
        tier: selectedTier,
      });

      saveLocalProgress(updatedProgress);
      setProgress(updatedProgress);
      setNewlyUnlocked(unlocked);
      setView("results");
    }
  }, [round, currentIndex, history, score, drillMode, selectedTier, maxStreakInRound]);

  // Keyboard controls in game
  useEffect(() => {
    if (view !== "play") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLocked && currentQuestion) {
        if (["1", "2", "3", "4"].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          if (currentQuestion.choices[idx]) {
            handleSelectChoice(currentQuestion.choices[idx].id);
          }
        }
      } else if (isLocked) {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
          e.preventDefault();
          handleContinue();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [view, isLocked, currentQuestion, handleSelectChoice, handleContinue]);

  // Countdown, and the miss that ends it. Keeping the expiry inside the same
  // callback means it can never fire from a state updater or re-arm on re-render.
  useEffect(() => {
    if (view !== "play" || !isTimed || isLocked || timerRemaining <= 0) return;

    const timeout = setTimeout(() => {
      const next = timerRemaining - 1;
      setTimerRemaining(next);
      if (next !== 0 || !currentQuestion) return;
      const wrongChoice = currentQuestion.choices.find((c) => c.id !== currentQuestion.correctChoiceId);
      handleSelectChoice(wrongChoice ? wrongChoice.id : currentQuestion.choices[0].id);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [view, isTimed, isLocked, timerRemaining, currentQuestion, handleSelectChoice]);

  if (!isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#152019] text-[#faf7f2]">
        <p className="font-mono text-sm tracking-widest uppercase">Loading Yoga Bliss...</p>
      </div>
    );
  }

  // ==========================================
  // VIEW: MAIN ARCADE MENU
  // ==========================================
  if (view === "menu") {
    return (
      <div className="flex min-h-screen flex-col bg-[#141f18] text-[#faf7f2] select-none">
        {/* Game Topbar */}
        <div className="flex items-center justify-between border-b border-[#233529] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-wider text-[#d4af37]">
              YOGA BLISS
            </span>
            <span className="rounded bg-[#233529] px-2 py-0.5 font-mono text-[10px] uppercase text-[#a3b899]">
              Desktop Edition
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-[#a3b899]">
              XP: <span className="font-bold text-[#faf7f2]">{progress.lifetimeXP}</span> • Rounds:{" "}
              <span className="font-bold text-[#faf7f2]">{progress.roundsPlayed}</span>
            </div>
            <button
              onClick={toggleSound}
              className="rounded border border-[#2d4434] bg-[#1a2820] px-3 py-1 font-mono text-xs text-[#d4af37] hover:bg-[#233529] cursor-pointer"
            >
              {soundOn ? "🔊 Sound ON" : "🔇 Sound OFF"}
            </button>
            <button
              onClick={() => {
                // window.close() only works inside the desktop shell; in a tab, go home instead.
                if (/Electron/i.test(navigator.userAgent)) {
                  window.close();
                } else {
                  window.location.href = "/";
                }
              }}
              className="rounded border border-[#a34828]/40 bg-[#3a1d17] px-2.5 py-1 font-mono text-xs text-[#e89078] hover:bg-[#522920] cursor-pointer"
              title="Quit Game"
            >
              ✕ Exit
            </button>
          </div>
        </div>

        {/* Hero Banner & Play Mode Grid */}
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 py-10">
          <div className="mb-8 text-center space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
              Asana Recognition &amp; Classical Sanskrit Training
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#f4efe8]">
              Select Your Practice Drill
            </h1>
            <p className="text-sm text-[#8c9f91] max-w-md mx-auto">
              Master visual yoga posture recognition by English common names and classical Sanskrit terminology.
            </p>
          </div>

          {/* Drill Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Sanskrit Recall Mode */}
            <button
              onClick={() => startGame("sanskrit", selectedTier)}
              className="group relative flex flex-col justify-between rounded-lg border-2 border-[#a34828] bg-[#221714] p-6 text-left transition-all hover:bg-[#2e1d18] hover:border-[#d96843] hover:shadow-lg cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#f4efe8] bg-[#a34828] px-2 py-0.5 rounded">
                    Traditional Terminology
                  </span>
                  <span className="text-xl">🕉️</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#faf7f2] group-hover:text-[#e89078]">
                  Sanskrit Recall Drill
                </h3>
                <p className="mt-2 text-xs text-[#a8958f] leading-relaxed">
                  Identify postures by their authentic classical Sanskrit names (*Vṛkṣāsana*, *Tāḍāsana*, *Balāsana*).
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#3d2722] font-mono text-xs text-[#d4af37] flex items-center justify-between">
                <span>10 Questions • +100 XP / Hit</span>
                <span className="group-hover:translate-x-1 transition-transform">Play Now &rarr;</span>
              </div>
            </button>

            {/* English Recall Mode */}
            <button
              onClick={() => startGame("english", selectedTier)}
              className="group relative flex flex-col justify-between rounded-lg border-2 border-[#2d5a3f] bg-[#16271c] p-6 text-left transition-all hover:bg-[#1d3325] hover:border-[#438a5e] hover:shadow-lg cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#faf7f2] bg-[#2d5a3f] px-2 py-0.5 rounded">
                    Foundational
                  </span>
                  <span className="text-xl">🌿</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#faf7f2] group-hover:text-[#76b58e]">
                  English Recall Drill
                </h3>
                <p className="mt-2 text-xs text-[#8ea393] leading-relaxed">
                  Learn everyday studio names (*Tree Pose*, *Downward Dog*, *Warrior II*) with immediate Sanskrit translation feedback.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#233d2c] font-mono text-xs text-[#d4af37] flex items-center justify-between">
                <span>10 Questions • +100 XP / Hit</span>
                <span className="group-hover:translate-x-1 transition-transform">Play Now &rarr;</span>
              </div>
            </button>
          </div>

          {/* Quick-Action Submodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <button
              onClick={() => startGame("mixed", selectedTier, false)}
              className="flex flex-col items-center justify-center p-3 rounded border border-[#233529] bg-[#17231c] hover:bg-[#1f3026] text-center cursor-pointer transition-colors"
            >
              <span className="text-lg mb-1">⚡</span>
              <span className="font-serif font-bold text-sm text-[#faf7f2]">Mixed Flow</span>
              <span className="font-mono text-[10px] text-[#8c9f91]">Alternating Modes</span>
            </button>

            <button
              onClick={() => startGame("sanskrit", selectedTier, true)}
              className="flex flex-col items-center justify-center p-3 rounded border border-[#233529] bg-[#17231c] hover:bg-[#1f3026] text-center cursor-pointer transition-colors"
            >
              <span className="text-lg mb-1">⏱️</span>
              <span className="font-serif font-bold text-sm text-[#faf7f2]">Time Attack</span>
              <span className="font-mono text-[10px] text-[#8c9f91]">15s Speedrun</span>
            </button>

            <button
              onClick={() => startGame("sanskrit", selectedTier, false, true)}
              className="flex flex-col items-center justify-center p-3 rounded border border-[#233529] bg-[#17231c] hover:bg-[#1f3026] text-center cursor-pointer transition-colors"
            >
              <span className="text-lg mb-1">🎯</span>
              <span className="font-serif font-bold text-sm text-[#faf7f2]">Weak Poses</span>
              <span className="font-mono text-[10px] text-[#8c9f91]">Adaptive Recall</span>
            </button>

            <button
              onClick={() => setView("trophies")}
              className="flex flex-col items-center justify-center p-3 rounded border border-[#233529] bg-[#17231c] hover:bg-[#1f3026] text-center cursor-pointer transition-colors"
            >
              <span className="text-lg mb-1">🏆</span>
              <span className="font-serif font-bold text-sm text-[#faf7f2]">Trophies</span>
              <span className="font-mono text-[10px] text-[#8c9f91]">{progress.unlockedAchievements.length} Unlocked</span>
            </button>
          </div>

          {/* Tier Difficulty Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-t border-[#233529] pt-6 font-mono text-xs">
            <span className="text-[#8c9f91] uppercase mr-2">Difficulty Tier:</span>
            {(["all", "beginner", "amateur", "pro", "legend"] as const).map((tierKey) => (
              <button
                key={tierKey}
                onClick={() => {
                  setSelectedTier(tierKey);
                  playClick();
                }}
                className={`px-3 py-1 rounded uppercase font-semibold transition-colors cursor-pointer ${
                  selectedTier === tierKey
                    ? "bg-[#d4af37] text-[#141f18]"
                    : "bg-[#1c2a21] text-[#a3b899] hover:bg-[#25392d]"
                }`}
              >
                {tierKey === "all" ? "All Tiers (141)" : `${TIER_CONFIG[tierKey].name} (${POSES_BY_TIER[tierKey].length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Game Footer */}
        <div className="border-t border-[#233529] px-6 py-3 text-center font-mono text-[11px] text-[#5c6e61]">
          Yoga Bliss Desktop • 100% Offline • Built with Web Audio &amp; 141 Illustrated Asanas • F11 for Fullscreen
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: TROPHIES ROOM
  // ==========================================
  if (view === "trophies") {
    return (
      <div className="flex min-h-screen flex-col bg-[#141f18] text-[#faf7f2]">
        <div className="flex items-center justify-between border-b border-[#233529] px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playClick();
                setView("menu");
              }}
              className="font-mono text-xs text-[#d4af37] hover:underline cursor-pointer"
            >
              &larr; Back to Main Menu
            </button>
            <span className="font-serif text-xl font-bold text-[#faf7f2]">Trophy Room</span>
          </div>
          <span className="font-mono text-xs text-[#a3b899]">
            {progress.unlockedAchievements.length} of {ACHIEVEMENTS.length} Trophies Unlocked
          </span>
        </div>

        <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((ach) => {
              const isUnlocked = progress.unlockedAchievements.includes(ach.id);
              return (
                <div
                  key={ach.id}
                  className={`p-4 rounded-lg border transition-all ${
                    isUnlocked
                      ? "border-[#d4af37] bg-[#242b1f] text-[#faf7f2]"
                      : "border-[#233529] bg-[#16211a] opacity-60 text-[#8c9f91]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-base text-[#faf7f2]">
                      {ach.title}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        isUnlocked
                          ? "bg-[#d4af37] text-[#141f18]"
                          : "bg-[#233529] text-[#5c6e61]"
                      }`}
                    >
                      {isUnlocked ? "UNLOCKED" : "LOCKED"}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed">{ach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: RESULTS SCORECARD
  // ==========================================
  if (view === "results" && finalResult) {
    const accuracy = finalResult.accuracy;
    const rank =
      accuracy === 100 ? "S" : accuracy >= 80 ? "A" : accuracy >= 60 ? "B" : "C";

    return (
      <div className="flex min-h-screen flex-col bg-[#141f18] text-[#faf7f2]">
        <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-8">
          <div className="rounded-xl border border-[#2d4434] bg-[#18261e] p-6 sm:p-8 shadow-2xl">
            {/* Rank badge */}
            <div className="flex items-center justify-between border-b border-[#2d4434] pb-4 mb-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  Drill Concluded
                </p>
                <h2 className="font-serif text-3xl font-bold text-[#faf7f2] mt-1">
                  Session Scorecard
                </h2>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#223528] font-serif text-3xl font-extrabold text-[#d4af37] shadow-inner">
                {rank}
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-3 border border-[#2d4434] bg-[#141f18] p-4 rounded-lg mb-6 text-center">
              <div>
                <p className="font-mono text-[10px] uppercase text-[#8c9f91]">Accuracy</p>
                <p className="font-serif text-2xl font-bold text-[#faf7f2] mt-1">{accuracy}%</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase text-[#8c9f91]">Score</p>
                <p className="font-serif text-2xl font-bold text-[#76b58e] mt-1">+{finalResult.score} XP</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase text-[#8c9f91]">Peak Streak</p>
                <p className="font-serif text-2xl font-bold text-[#d4af37] mt-1">{maxStreakInRound}</p>
              </div>
            </div>

            {/* Newly Unlocked Trophies Banner */}
            {newlyUnlocked.length > 0 && (
              <div className="mb-6 p-4 rounded-lg border border-[#d4af37] bg-[#2b2f1f] text-xs">
                <p className="font-mono text-[10px] uppercase font-bold text-[#d4af37] tracking-wider mb-2">
                  🏆 New Trophy Unlocked!
                </p>
                {newlyUnlocked.map((id) => {
                  const meta = ACHIEVEMENTS.find((a) => a.id === id);
                  return (
                    <div key={id} className="border-l-2 border-[#d4af37] pl-3 py-1 my-1">
                      <p className="font-serif font-bold text-sm text-[#faf7f2]">{meta?.title || id}</p>
                      <p className="text-[11px] text-[#c4b5a0]">{meta?.description}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Itemized Review List */}
            <div className="mb-6">
              <p className="font-mono text-[10px] uppercase text-[#8c9f91] mb-2 font-semibold">
                Posture Performance
              </p>
              <div className="max-h-48 overflow-y-auto rounded border border-[#2d4434] divide-y divide-[#233529] text-xs">
                {round?.questions.map((q, idx) => {
                  const wasCorrect = history[idx]?.isCorrect;
                  const wasSanskritPrompt = q.promptType === "sanskrit";
                  return (
                    <div
                      key={q.targetPose.id + idx}
                      className="flex items-center justify-between p-2.5 bg-[#141f18]"
                    >
                      <div>
                        <span className="font-medium text-[#faf7f2]">
                          {wasSanskritPrompt ? q.targetPose.sanskritName : q.targetPose.englishName}
                        </span>
                        <span className="ml-2 italic text-xs text-[#a8958f]">
                          ({wasSanskritPrompt ? q.targetPose.englishName : q.targetPose.sanskritName})
                        </span>
                      </div>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold ${
                          wasCorrect
                            ? "bg-[#2d5a3f]/40 text-[#76b58e]"
                            : "bg-[#a34828]/40 text-[#e89078]"
                        }`}
                      >
                        {wasCorrect ? "CORRECT" : "MISSED"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => startGame(drillMode, selectedTier, isTimed, isAdaptive)}
                className="flex-1 rounded-md bg-[#d4af37] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#141f18] hover:bg-[#e6c34e] cursor-pointer transition-colors"
              >
                Play Another Round &rarr;
              </button>
              <button
                onClick={() => {
                  playClick();
                  setView("menu");
                }}
                className="rounded-md border border-[#2d4434] bg-[#16271c] px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#faf7f2] hover:bg-[#1f3526] cursor-pointer transition-colors"
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: ACTIVE GAME ARENA
  // ==========================================
  if (!currentQuestion) return null;

  return (
    <div className="flex min-h-screen flex-col bg-[#141f18] text-[#faf7f2] select-none">
      {/* Game Top HUD */}
      <div className="flex items-center justify-between border-b border-[#233529] px-6 py-3 bg-[#111a14]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playClick();
              setView("menu");
            }}
            className="rounded border border-[#2d4434] bg-[#16271c] px-2.5 py-1 font-mono text-[11px] text-[#a3b899] hover:bg-[#203627] cursor-pointer"
          >
            &larr; Quit to Menu
          </button>
          <span className="font-mono text-xs text-[#8c9f91]">
            Question <strong className="text-[#faf7f2]">{currentIndex + 1}</strong> of{" "}
            <strong>{round?.totalQuestions}</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          {isTimed && (
            <span
              className={`px-2.5 py-0.5 rounded font-bold ${
                timerRemaining <= 5 ? "bg-[#a34828] text-white animate-pulse" : "bg-[#233529] text-[#d4af37]"
              }`}
            >
              ⏱️ {timerRemaining}s
            </span>
          )}

          {currentStreak > 1 && (
            <span className="font-bold text-[#d4af37] bg-[#d4af37]/15 px-2 py-0.5 rounded">
              Streak: {currentStreak}x 🔥
            </span>
          )}

          <span className="font-bold text-[#76b58e]">
            {score} XP
          </span>

          <button
            onClick={toggleSound}
            className="text-xs hover:opacity-80 cursor-pointer"
            title="Toggle Sound"
          >
            {soundOn ? "🔊" : "🔇"}
          </button>
        </div>
      </div>

      {/* Main Play Arena */}
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-4 py-3 sm:py-5">
        {/* Masthead Banner */}
        <div className="mb-2 sm:mb-3 text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#d4af37]">
            {isSanskritPrompt ? "Identify Classical Sanskrit Term" : "Identify Standard English Name"}
          </p>
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#f4efe8] mt-0.5">
            {currentQuestion.promptTitle}
          </h2>
        </div>

        {/* Pose Specimen Illustration */}
        <div className="mb-3 sm:mb-4 rounded-lg border border-[#2d4434] bg-[#1a271f] p-3 flex items-center justify-center">
          <PoseIllustration
            poseId={currentQuestion.targetPose.id}
            imageSrc={currentQuestion.targetPose.image}
            alt={currentQuestion.targetPose.imageAlt}
            className="h-48 sm:h-56 w-full"
            borderStyle="plain"
          />
        </div>

        {/* 4 Big Game Response Pads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-3">
          {currentQuestion.choices.map((choice, idx) => {
            const isSelected = selectedChoiceId === choice.id;
            const isTarget = choice.id === currentQuestion.correctChoiceId;
            const primaryLabel = isSanskritPrompt ? choice.sanskritName : choice.englishName;
            const secondaryLabel = isSanskritPrompt ? choice.englishName : choice.sanskritName;

            let btnStyle = "border border-[#2d4434] bg-[#18261e] text-[#faf7f2] hover:bg-[#203429] hover:border-[#438a5e]";

            if (isLocked) {
              if (isTarget) {
                btnStyle = "border-2 border-[#76b58e] bg-[#223d2c] text-[#76b58e] font-bold shadow-md";
              } else if (isSelected && !isTarget) {
                btnStyle = "border-2 border-[#a34828] bg-[#3a1d17] text-[#e89078] line-through opacity-80";
              } else {
                btnStyle = "border border-[#233529] bg-[#141f18] text-[#5c6e61] opacity-40";
              }
            }

            return (
              <button
                key={choice.id}
                onClick={() => handleSelectChoice(choice.id)}
                disabled={isLocked}
                className={`flex min-h-[50px] sm:min-h-[54px] items-center justify-between rounded-lg px-3.5 py-2 text-left transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#d4af37] w-5 text-center">
                    [{idx + 1}]
                  </span>
                  <div>
                    <span className={`block text-base ${isSanskritPrompt ? "font-serif italic font-bold" : "font-medium"}`}>
                      {primaryLabel}
                    </span>
                    {isLocked && (
                      <span className="block text-xs text-[#a8958f] mt-0.5">
                        {secondaryLabel}
                      </span>
                    )}
                  </div>
                </div>

                {isLocked && isTarget && (
                  <span className="font-mono text-xs uppercase font-bold text-[#76b58e]">
                    ✓ Correct
                  </span>
                )}
                {isLocked && isSelected && !isTarget && (
                  <span className="font-mono text-xs uppercase font-bold text-[#e89078]">
                    ✕ Miss
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Banner with Continue Button */}
        <div className="min-h-[72px]">
          {feedback && (
            <div
              className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                feedback.isCorrect
                  ? "border-[#76b58e] bg-[#1a2e21]"
                  : "border-[#a34828] bg-[#2e1a16]"
              }`}
            >
              <div>
                <p className="font-mono text-xs uppercase font-bold text-[#faf7f2]">
                  {feedback.isCorrect ? `✓ Correct (+${feedback.earnedXP} XP)` : "✕ Incorrect"}
                  {feedback.streakBonus > 0 && ` • +${feedback.streakBonus} Streak Bonus!`}
                </p>
                <p className="text-xs text-[#c4b5a0] mt-0.5">
                  {isSanskritPrompt ? (
                    <>
                      <span className="font-serif italic text-[#d4af37] font-bold">
                        {currentQuestion.targetPose.sanskritName}
                      </span>{" "}
                      is <strong>{currentQuestion.targetPose.englishName}</strong>.
                    </>
                  ) : (
                    <>
                      <strong>{currentQuestion.targetPose.englishName}</strong> is{" "}
                      <span className="font-serif italic text-[#d4af37] font-bold">
                        {currentQuestion.targetPose.sanskritName}
                      </span>.
                    </>
                  )}
                </p>
              </div>

              <button
                onClick={handleContinue}
                className="rounded bg-[#d4af37] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#141f18] hover:bg-[#e6c34e] cursor-pointer transition-colors shrink-0 ml-3"
              >
                Next &rarr; [Space]
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
