"use client";

import React, { useState, useEffect, useCallback, Suspense, useSyncExternalStore } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ALL_POSES, STARTER_POSES, POSES_BY_CATEGORY, POSES_BY_TIER } from "@/data/poses";
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
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { PoseIllustration } from "@/components/game/PoseIllustration";
import { useCurrentUser } from "@/lib/auth";
import { AuthModal } from "@/components/auth/AuthModal";

const TIER_ORDER: SkillTier[] = ["beginner", "amateur", "pro", "legend"];
const PROMPT_ORDER: QuestionLanguageMode[] = ["english", "sanskrit", "mixed"];

interface GameArenaProps {
  initialLanguageMode: QuestionLanguageMode;
  initialTier: SkillTier | "all";
  categoryParam: string | null;
  isAdaptiveMode: boolean;
}

function GameArena({
  initialLanguageMode,
  initialTier,
  categoryParam,
  isAdaptiveMode,
}: GameArenaProps) {
  // Active filters
  const [activeTier, setActiveTier] = useState<SkillTier | "all">(initialTier);
  const [activeLanguageMode, setActiveLanguageMode] = useState<QuestionLanguageMode>(
    initialLanguageMode
  );

  // Determine pool of available poses based on tier & category
  const getPool = useCallback((): Pose[] => {
    let pool: Pose[] = ALL_POSES.length >= 10 ? ALL_POSES : STARTER_POSES;

    if (activeTier !== "all" && POSES_BY_TIER[activeTier]) {
      pool = POSES_BY_TIER[activeTier];
    } else if (categoryParam && POSES_BY_CATEGORY[categoryParam as keyof typeof POSES_BY_CATEGORY]) {
      const catPoses = POSES_BY_CATEGORY[categoryParam as keyof typeof POSES_BY_CATEGORY];
      if (catPoses.length >= 4) pool = catPoses;
    }

    return pool.length >= 4 ? pool : STARTER_POSES;
  }, [activeTier, categoryParam]);

  // Game state
  const [round, setRound] = useState<QuizRound>(() =>
    generateQuizRound(getPool(), 10, activeLanguageMode)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<QuestionFeedback | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  // Score tracking
  const [score, setScore] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [maxStreakInRound, setMaxStreakInRound] = useState(0);
  const [history, setHistory] = useState<{ poseId: string; isCorrect: boolean }[]>([]);
  const [soundOn, setSoundOn] = useState(() => (typeof window !== "undefined" ? isSoundEnabled() : true));

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playClick();
  };
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Results & progression
  const [isRoundFinished, setIsRoundFinished] = useState(false);
  const [finalResult, setFinalResult] = useState<RoundResult | null>(null);
  const [newlyUnlockedAchievements, setNewlyUnlockedAchievements] = useState<string[]>([]);
  const [adaptiveWeakCount, setAdaptiveWeakCount] = useState<number | null>(null);
  const currentUser = useCurrentUser();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Preserve scroll position to prevent page from jumping downward
  const lockScrollPosition = () => {
    if (typeof window !== "undefined") {
      const currentY = window.scrollY;
      requestAnimationFrame(() => {
        window.scrollTo({ top: currentY, behavior: "instant" });
      });
    }
  };

  // Initialize round
  const startNewRound = useCallback(
    (tier = activeTier, lang = activeLanguageMode) => {
      const saved = getLocalProgress();

      let pool: Pose[] = ALL_POSES.length >= 10 ? ALL_POSES : STARTER_POSES;
      if (tier !== "all" && POSES_BY_TIER[tier]) {
        pool = POSES_BY_TIER[tier];
      } else if (categoryParam && POSES_BY_CATEGORY[categoryParam as keyof typeof POSES_BY_CATEGORY]) {
        const catPoses = POSES_BY_CATEGORY[categoryParam as keyof typeof POSES_BY_CATEGORY];
        if (catPoses.length >= 4) pool = catPoses;
      }

      let posesToUse = pool.length >= 4 ? pool : STARTER_POSES;
      if (isAdaptiveMode) {
        const { selectedPoses, weakCount } = selectAdaptivePracticePoses(posesToUse, saved.poseStats, 10);
        posesToUse = selectedPoses;
        setAdaptiveWeakCount(weakCount);
      } else {
        setAdaptiveWeakCount(null);
      }

      const newRound = generateQuizRound(posesToUse, 10, lang);
      setRound(newRound);
      setCurrentIndex(0);
      setSelectedChoiceId(null);
      setFeedback(null);
      setIsLocked(false);
      setScore(0);
      setCurrentStreak(0);
      setMaxStreakInRound(0);
      setHistory([]);
      setIsRoundFinished(false);
      setFinalResult(null);
      setNewlyUnlockedAchievements([]);
    },
    [activeTier, activeLanguageMode, categoryParam, isAdaptiveMode]
  );

  // Switch tier
  // Changing the focus re-generates the round, so confirm before discarding answers.
  const confirmDiscardRound = () => {
    if (isRoundFinished || history.length === 0) return true;
    return window.confirm("This starts a new drill and discards the " + history.length + " answered question(s). Continue?");
  };

  const handleTierChange = (newTier: SkillTier | "all") => {
    if (newTier === activeTier || !confirmDiscardRound()) return;
    setActiveTier(newTier);
    startNewRound(newTier, activeLanguageMode);
  };

  // Switch language mode
  const handleLanguageChange = (newLang: QuestionLanguageMode) => {
    if (newLang === activeLanguageMode || !confirmDiscardRound()) return;
    setActiveLanguageMode(newLang);
    startNewRound(activeTier, newLang);
  };

  // Current active question
  const currentQuestion = round?.questions[currentIndex];

  // Handle choice selection
  const handleSelectChoice = useCallback(
    (choiceId: string) => {
      if (isLocked || !currentQuestion) return;

      setIsLocked(true);
      setSelectedChoiceId(choiceId);

      // Unfocus clicked element so browser does not auto-scroll to it
      if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      lockScrollPosition();

      const evaluated = evaluateAnswer(currentQuestion, choiceId, currentStreak);
      setFeedback(evaluated);

      // Play audio feedback
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

  // Advance to next question or conclude round
  const handleContinue = useCallback(() => {
    if (!round) return;
    lockScrollPosition();

    if (currentIndex + 1 < round.totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedChoiceId(null);
      setFeedback(null);
      setIsLocked(false);
    } else {
      const finalCalc = calculateRoundResult(history, score);
      setFinalResult(finalCalc);
      setIsRoundFinished(true);
      playRoundComplete();

      const currentStored = getLocalProgress();
      const { updatedProgress, newlyUnlocked } = recordRoundOutcome(currentStored, {
        earnedScore: finalCalc.score,
        accuracy: finalCalc.accuracy,
        history,
        maxStreakInRound,
        promptType: activeLanguageMode,
        tier: activeTier,
      });

      // Always save to storage (which writes to active user account if logged in, or local guest)
      saveLocalProgress(updatedProgress);
      setNewlyUnlockedAchievements(newlyUnlocked);
    }
  }, [round, currentIndex, history, score, maxStreakInRound, activeLanguageMode, activeTier]);

  // Keyboard navigation: 1, 2, 3, 4 to select; Enter or Space to continue
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isRoundFinished) return;

      if (!isLocked && currentQuestion) {
        if (["1", "2", "3", "4"].includes(e.key)) {
          const index = parseInt(e.key, 10) - 1;
          if (currentQuestion.choices[index]) {
            handleSelectChoice(currentQuestion.choices[index].id);
          }
        }
      } else if (isLocked && feedback) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleContinue();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLocked, currentQuestion, feedback, isRoundFinished, handleSelectChoice, handleContinue]);

  // Loading / SSR hydration state
  if (!isClient || !round || !currentQuestion) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center" suppressHydrationWarning>
        <p className="font-mono text-xs text-[#5c6b61] uppercase tracking-wider">
          Loading Question Set...
        </p>
      </div>
    );
  }

  const isSanskritPrompt = currentQuestion.promptType === "sanskrit";

  // Results Screen
  if (isRoundFinished && finalResult) {
    const getPerformanceNote = (acc: number) => {
      if (acc === 100) return "10 out of 10. Flawless recall across all prompts.";
      if (acc >= 80) return "High accuracy. Foundational posture recall is solid.";
      if (acc >= 50) return "Moderate recall. Review missed postures in adaptive mode.";
      return "Sub-50% accuracy. Recommend browsing the Asana Atlas before next drill.";
    };

    return (
      <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
        <div className="border border-[#ded5c5] bg-[#ffffff] p-6 sm:p-8 rounded-md">
          <div className="flex items-center justify-between border-b border-[#e4ddd3] pb-3 mb-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[#a34828]">
              Session Scorecard
            </p>
            <span className="font-mono text-[10px] uppercase text-[#5c6b61] bg-[#f3eee5] px-2 py-0.5 rounded">
              Tier: {activeTier.toUpperCase()} • Mode: {activeLanguageMode.toUpperCase()}
            </span>
          </div>

          <h1 className="font-serif text-2xl font-normal sm:text-3xl text-[#1a241e] mb-1">
            {activeLanguageMode === "sanskrit" ? "Sanskrit Drill Complete" : "Drill Complete"}
          </h1>

          <p className="text-xs text-[#5c6b61] mb-6">
            {getPerformanceNote(finalResult.accuracy)}
          </p>

          {/* Clean ledger table for metrics */}
          <div className="grid grid-cols-3 border border-[#e4ddd3] rounded-md divide-x divide-[#e4ddd3] bg-[#faf7f2] mb-6 text-center py-3">
            <div>
              <p className="font-mono text-[10px] text-[#5c6b61] uppercase">Accuracy</p>
              <p className="font-serif text-2xl font-bold text-[#1a241e] mt-0.5">{finalResult.accuracy}%</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-[#5c6b61] uppercase">Points Earned</p>
              <p className="font-serif text-2xl font-bold text-[#1f3a2b] mt-0.5">+{finalResult.score}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-[#5c6b61] uppercase">Peak Streak</p>
              <p className="font-serif text-2xl font-bold text-[#a34828] mt-0.5">{maxStreakInRound}</p>
            </div>
          </div>

          {/* Unlocked Milestones Notice */}
          {newlyUnlockedAchievements.length > 0 && (
            <div className="mb-6 p-4 border border-[#4d7358] bg-[#faf7f2] rounded-md text-xs">
              <p className="font-mono text-[10px] uppercase font-bold text-[#1f3a2b] tracking-wider mb-2">
                New Milestone Recorded:
              </p>
              <div className="space-y-2">
                {newlyUnlockedAchievements.map((id) => {
                  const meta = ACHIEVEMENTS.find((a) => a.id === id);
                  return (
                    <div key={id} className="border-l-2 border-[#1f3a2b] pl-2.5 py-0.5">
                      <p className="font-serif font-bold text-sm text-[#1a241e]">
                        {meta?.title || id}
                      </p>
                      <p className="text-[11px] text-[#5c6b61]">
                        {meta?.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Itemized Posture Review */}
          <div className="mb-6">
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#5c6b61] mb-2 font-semibold">
              Itemized Review
            </p>
            <div className="border border-[#e4ddd3] rounded-md divide-y divide-[#f3eee5] text-xs max-h-52 overflow-y-auto">
              {round.questions.map((q, idx) => {
                const wasCorrect = history[idx]?.isCorrect;
                const wasSanskritPrompt = q.promptType === "sanskrit";
                return (
                  <div
                    key={q.targetPose.id + idx}
                    className="flex items-center justify-between px-3 py-2 bg-[#ffffff]"
                  >
                    <div>
                      <span className="font-medium text-[#1a241e]">
                        {wasSanskritPrompt ? q.targetPose.sanskritName : q.targetPose.englishName}
                      </span>
                      <span className="ml-1.5 font-serif italic text-[#a34828]">
                        ({wasSanskritPrompt ? q.targetPose.englishName : q.targetPose.sanskritName})
                      </span>
                    </div>
                    <span
                      className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                        wasCorrect
                          ? "bg-[#1f3a2b]/10 text-[#1f3a2b] font-bold"
                          : "bg-[#a34828]/10 text-[#a34828]"
                      }`}
                    >
                      {wasCorrect ? "CORRECT" : "MISSED"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Account Bank / Escrow Status */}
          {currentUser ? (
            <div className="mb-6 p-3 rounded-md border border-[#4d7358] bg-[#f3eee5] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-base">✓</span>
                <div>
                  <p className="font-bold text-[#1f3a2b]">
                    Points Banked to @{currentUser.username}
                  </p>
                  <p className="text-[11px] text-[#5c6b61]">
                    Lifetime Score: {currentUser.progress.lifetimeXP} XP
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="font-mono text-[10px] text-[#1f3a2b] font-bold uppercase underline hover:text-[#a34828] cursor-pointer"
              >
                View Profile
              </button>
            </div>
          ) : (
            <div className="mb-6 p-4 rounded-md border-2 border-dashed border-[#a34828] bg-[#fbf3ef] text-center">
              <span className="text-2xl">🎯</span>
              <h3 className="font-serif font-bold text-base text-[#1a241e] mt-1">
                Save Your Points (+{finalResult.score} XP)
              </h3>
              <p className="text-xs text-[#5c6b61] mt-1 mb-3 max-w-md mx-auto">
                You played as a Guest! In order for your points to count and take effect, create an account or sign in now.
              </p>
              <Button
                variant="terracotta"
                size="sm"
                onClick={() => setIsAuthModalOpen(true)}
                className="font-mono uppercase font-bold text-xs"
              >
                Sign In / Register to Bank Points &rarr;
              </Button>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => startNewRound()}
              className="text-xs uppercase tracking-wider font-semibold"
            >
              Run Another Drill
            </Button>

            <Link href="/" className="w-full sm:w-auto">
              <Button variant="outline" size="md" fullWidth className="text-xs uppercase tracking-wider">
                Back to Index
              </Button>
            </Link>
          </div>
        </div>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          guestPointsToClaim={finalResult.score}
        />
      </div>
    );
  }

  // Active Question Arena
  return (
    <div className="mx-auto max-w-2xl px-4 py-3 sm:py-5 sm:px-6">
      {/* Guest Mode Notice */}
      {!currentUser && (
        <div className="mb-3 px-3 py-1.5 rounded-md border border-[#a34828]/30 bg-[#fbf3ef] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span>👤</span>
            <span className="text-[#87361a] text-[11px] sm:text-xs">
              Guest Session: Points are held in escrow until you sign in.
            </span>
          </div>
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="font-mono text-[10px] uppercase font-bold text-[#a34828] hover:underline cursor-pointer ml-2 shrink-0"
          >
            Sign In / Register &rarr;
          </button>
        </div>
      )}

      {/* Session Focus Masthead Banner */}
      <div className="mb-3">
        {isSanskritPrompt ? (
          <div className="flex items-center justify-between border-l-4 border-[#a34828] bg-[#fbf3ef] px-3.5 py-1.5 rounded-r-md">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#a34828] font-bold">
                Sanskrit Recall Drill • Classical Terminology
              </p>
              <p className="text-xs text-[#38473e] font-serif italic mt-0.5">
                Identify the traditional Sanskrit āsana name for the posture shown below.
              </p>
            </div>
            <span className="font-mono text-[10px] text-[#a34828] border border-[#a34828]/40 px-2 py-0.5 rounded font-bold uppercase hidden sm:inline-block">
              Sanskrit Mode
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between border-l-4 border-[#1f3a2b] bg-[#f3eee5] px-3.5 py-1.5 rounded-r-md">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#1f3a2b] font-bold">
                English Recall Drill • Common Names
              </p>
              <p className="text-xs text-[#38473e] mt-0.5">
                Identify the standard English name for the posture shown below.
              </p>
            </div>
            <span className="font-mono text-[10px] text-[#1f3a2b] border border-[#1f3a2b]/40 px-2 py-0.5 rounded font-bold uppercase hidden sm:inline-block">
              English Mode
            </span>
          </div>
        )}
      </div>

      {/* Adaptive Missed-Poses Banner */}
      {isAdaptiveMode && (
        <div
          role="status"
          className={`mb-3 p-3 rounded-md border flex items-start gap-3 ${
            adaptiveWeakCount && adaptiveWeakCount > 0
              ? "border-[#a34828] bg-[#fbf3ef]"
              : "border-[#ded5c5] bg-[#faf7f2]"
          }`}
        >
          <span className="text-xl shrink-0 mt-0.5">
            {adaptiveWeakCount && adaptiveWeakCount > 0 ? "🎯" : "✨"}
          </span>
          <div className="space-y-1">
            <p className="font-serif font-bold text-sm text-[#1a241e]">
              {adaptiveWeakCount && adaptiveWeakCount > 0
                ? `Practicing Missed Poses (${adaptiveWeakCount} Prioritized)`
                : "Adaptive Mode: No Missed Poses on Record"}
            </p>
            <p className="text-xs text-[#5c6b61] leading-relaxed">
              {adaptiveWeakCount && adaptiveWeakCount > 0
                ? "This round prioritizes postures you previously missed or struggled with to reinforce your memory."
                : "You haven't recorded any missed postures on this browser yet! Serving standard postures. As you play and make mistakes, they will automatically appear here for review."}
            </p>
          </div>
        </div>
      )}

      {/* Session Controls: Skill Tier & Prompt Mode Selectors */}
      <div className="mb-6 space-y-3">
        {/* Tier Selector */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e4ddd3] pb-3">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#5c6b61]">
            <span className="uppercase font-semibold">Tier:</span>
            {(["all", ...TIER_ORDER] as (SkillTier | "all")[]).map((tierKey) => (
              <button
                key={tierKey}
                onClick={() => handleTierChange(tierKey)}
                className={`px-2 py-0.5 rounded uppercase transition-colors cursor-pointer ${
                  activeTier === tierKey
                    ? "bg-[#1f3a2b] text-[#faf7f2] font-bold"
                    : "bg-[#f3eee5] text-[#38473e] hover:bg-[#e8e0d2]"
                }`}
              >
                {tierKey === "all" ? "All" : TIER_CONFIG[tierKey].name}
              </button>
            ))}
          </div>

          {/* Language Mode Selector */}
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#5c6b61]">
            <span className="uppercase font-semibold">Prompt:</span>
            {(["english", "sanskrit", "mixed"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => handleLanguageChange(mode)}
                className={`px-2 py-0.5 rounded uppercase transition-colors cursor-pointer ${
                  activeLanguageMode === mode
                    ? mode === "sanskrit"
                      ? "bg-[#a34828] text-[#faf7f2] font-bold"
                      : "bg-[#1f3a2b] text-[#faf7f2] font-bold"
                    : "bg-[#f3eee5] text-[#38473e] hover:bg-[#e8e0d2]"
                }`}
              >
                {mode === "english" ? "English" : mode === "sanskrit" ? "Sanskrit" : "Mixed"}
              </button>
            ))}

            <button
              onClick={handleToggleSound}
              className={`ml-1 px-2 py-0.5 rounded text-[10px] font-mono border transition-colors cursor-pointer ${
                soundOn
                  ? "border-[#4d7358]/40 bg-[#f3eee5] text-[#1f3a2b] font-semibold"
                  : "border-[#e4ddd3] bg-[#faf7f2] text-[#87361a]"
              }`}
              title={soundOn ? "Mute Sound Effects" : "Enable Sound Effects"}
              aria-label="Toggle Sound"
            >
              {soundOn ? "🔊 Audio" : "🔇 Muted"}
            </button>
          </div>
        </div>

        {/* Counter and Scores Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-[#5c6b61]">
          <span>
            Question {currentIndex + 1} of {round.totalQuestions}
          </span>
          <div className="flex items-center gap-3">
            {currentStreak > 1 && (
              <span className="text-[#a34828] font-bold">
                Streak: {currentStreak}
              </span>
            )}
            <span className="text-[#1a241e] font-semibold">{score} XP</span>
          </div>
        </div>

        <ProgressBar
          value={currentIndex + 1}
          max={round.totalQuestions}
          label=""
          ariaLabel={`Question ${currentIndex + 1} of ${round.totalQuestions}`}
          className="h-1"
        />
      </div>

      {/* Main Flashcard Card */}
      <Card variant="elevated" className="p-4 sm:p-5 border-[#ded5c5]">
        <div className="mb-3 text-center">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#a34828]">
            {isSanskritPrompt ? "Identify the Sanskrit āsana" : "Identify the English Asana"}
          </p>
          <h2 className="font-serif text-lg sm:text-xl text-[#1a241e] mt-0.5">
            {currentQuestion.promptTitle}
          </h2>
        </div>

        {/* Visual Pose Display */}
        <div className="mb-3 sm:mb-3.5">
          <PoseIllustration
            poseId={currentQuestion.targetPose.id}
            imageSrc={currentQuestion.targetPose.image}
            alt={currentQuestion.targetPose.imageAlt}
            className="h-36 sm:h-44 w-full"
          />
        </div>

        {/* 4 Clean Answer Buttons with Monospace Keyboard Shortcuts */}
        <div
          role="group"
          aria-label="Pose answer choices"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-2.5"
        >
          {currentQuestion.choices.map((choice, idx) => {
            const isSelected = selectedChoiceId === choice.id;
            const isTarget = choice.id === currentQuestion.correctChoiceId;

            // Display primary label according to prompt type:
            // IN SANSKRIT DRILL: Sanskrit name is the BIG main choice!
            // IN ENGLISH DRILL: English name is the BIG main choice!
            const primaryLabel = isSanskritPrompt ? choice.sanskritName : choice.englishName;
            const secondaryLabel = isSanskritPrompt ? choice.englishName : choice.sanskritName;

            let buttonStyles =
              "border border-[#ded5c5] bg-[#faf7f2] text-[#1a241e] hover:bg-[#f3eee5]";

            if (isLocked) {
              if (isTarget) {
                buttonStyles = isSanskritPrompt
                  ? "border-2 border-[#a34828] bg-[#a34828]/15 text-[#87361a] font-semibold"
                  : "border-2 border-[#1f3a2b] bg-[#1f3a2b]/15 text-[#1f3a2b] font-semibold";
              } else if (isSelected && !isTarget) {
                buttonStyles = "border border-[#a34828] bg-[#a34828]/10 text-[#a34828] line-through";
              } else {
                buttonStyles = "border border-[#e4ddd3] bg-[#f8f5ee] text-[#5c6b61] opacity-50";
              }
            }

            return (
              <button
                key={choice.id}
                onClick={() => handleSelectChoice(choice.id)}
                disabled={isLocked}
                className={`flex min-h-[46px] sm:min-h-[50px] items-center justify-between rounded-md px-3 py-1.5 sm:px-3.5 sm:py-2 text-left transition-colors cursor-pointer disabled:cursor-default focus-visible:ring-2 focus-visible:ring-[#1f3a2b] ${buttonStyles}`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-[#5c6b61] w-4 text-center">
                    [{idx + 1}]
                  </span>
                  <div>
                    <span className={`block text-xs sm:text-sm ${isSanskritPrompt ? "font-serif italic font-bold text-[#1a241e]" : "font-medium"}`}>
                      {primaryLabel}
                    </span>
                    {isLocked && (
                      <span className="block text-[10px] text-[#5c6b61] font-sans">
                        {secondaryLabel}
                      </span>
                    )}
                  </div>
                </div>

                {isLocked && isTarget && (
                  <span className={`font-mono text-[10px] uppercase font-bold ${isSanskritPrompt ? "text-[#a34828]" : "text-[#1f3a2b]"}`}>
                    Correct
                  </span>
                )}
                {isLocked && isSelected && !isTarget && (
                  <span className="font-mono text-[10px] text-[#a34828] uppercase font-bold">
                    Miss
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Section with aria-live */}
        <div aria-live="polite" className="mt-1">
          {feedback && (
            <div
              className={`p-2.5 sm:p-3 border rounded-md transition-colors ${
                feedback.isCorrect
                  ? isSanskritPrompt
                    ? "bg-[#faf7f2] border-[#a34828] text-[#1a241e]"
                    : "bg-[#faf7f2] border-[#4d7358] text-[#1a241e]"
                  : "bg-[#faf7f2] border-[#a34828] text-[#1a241e]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase font-bold">
                      {feedback.isCorrect ? `Correct (+${feedback.earnedXP} XP)` : "Incorrect"}
                    </span>
                    {feedback.streakBonus > 0 && (
                      <span className="font-mono text-[10px] text-[#a34828] bg-[#a34828]/10 px-1.5 py-0.5 rounded">
                        +{feedback.streakBonus} Streak Bonus
                      </span>
                    )}
                  </div>
                  <p className="text-xs">
                    {isSanskritPrompt ? (
                      <>
                        <span className="font-serif italic text-[#a34828] font-bold text-sm">
                          {currentQuestion.targetPose.sanskritName}
                        </span>{" "}
                        translates to <strong>{currentQuestion.targetPose.englishName}</strong> in English.
                      </>
                    ) : (
                      <>
                        <strong>{currentQuestion.targetPose.englishName}</strong> is{" "}
                        <span className="font-serif italic text-[#a34828] font-bold">
                          {currentQuestion.targetPose.sanskritName}
                        </span>{" "}
                        in Sanskrit.
                      </>
                    )}
                  </p>
                  <p className="text-[11px] text-[#5c6b61]">
                    {currentQuestion.targetPose.shortFact}
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleContinue}
                  className="shrink-0 text-xs uppercase tracking-wider self-end sm:self-auto font-bold cursor-pointer"
                >
                  Continue &rarr;
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        guestPointsToClaim={score}
      />
    </div>
  );
}

function PlayPageContent() {
  const searchParams = useSearchParams();
  const isAdaptive = searchParams.get("mode") === "adaptive";
  const category = searchParams.get("category");

  // Query params come from the URL bar, so anything unknown falls back to the default.
  const rawTier = searchParams.get("tier");
  const tier: SkillTier | "all" =
    rawTier && (TIER_ORDER as string[]).includes(rawTier) ? (rawTier as SkillTier) : "all";
  const rawPrompt = searchParams.get("prompt");
  const prompt: QuestionLanguageMode =
    rawPrompt && (PROMPT_ORDER as string[]).includes(rawPrompt)
      ? (rawPrompt as QuestionLanguageMode)
      : "english";

  // Dynamic key guarantees that switching prompt modes (english vs sanskrit)
  // or tiers immediately re-mounts a freshly generated round with the correct mode!
  const arenaKey = `${prompt}-${tier}-${category || "all"}-${isAdaptive ? "adaptive" : "standard"}`;

  return (
    <GameArena
      key={arenaKey}
      initialLanguageMode={prompt}
      initialTier={tier}
      categoryParam={category}
      isAdaptiveMode={isAdaptive}
    />
  );
}

export default function PlayPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="font-mono text-xs text-[#5c6b61] uppercase tracking-wider">
            Loading Quiz...
          </p>
        </div>
      }
    >
      <PlayPageContent />
    </Suspense>
  );
}
