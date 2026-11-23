import { Pose, SkillTier, QuestionLanguageMode } from "@/types/pose";
import { getPoseTierById } from "@/data/poses";

export interface PoseStats {
  correct: number;
  incorrect: number;
}

export interface PlayerProgress {
  lifetimeXP: number;
  roundsPlayed: number;
  bestAccuracy: number;
  currentStreak: number;
  bestStreak: number;
  poseStats: Record<string, PoseStats>;
  unlockedAchievements: string[];
  lastPlayedAt: string | null;
}

export interface AchievementDefinition {
  id: string;
  title: string;
  description: string;
  tierRequirement?: string;
  category: "practice" | "sanskrit" | "mastery" | "streak";
}

export const ACHIEVEMENTS: AchievementDefinition[] = [
  {
    id: "first-flow",
    title: "First Flow",
    description: "Correctly identify 5 distinct yoga postures.",
    category: "practice",
  },
  {
    id: "sanskrit-initiate",
    title: "Sanskrit Initiate",
    description: "Achieve 80%+ accuracy on a dedicated Sanskrit recall drill.",
    category: "sanskrit",
  },
  {
    id: "on-fire",
    title: "Steady Focus",
    description: "Build an unbroken 5-answer correct streak during a drill.",
    category: "streak",
  },
  {
    id: "perfect-harmony",
    title: "Samādhi (10/10)",
    description: "Score a perfect 100% on a 10-question drill.",
    category: "mastery",
  },
  {
    id: "tree-master",
    title: "Tree Master",
    description: "Correctly identify Tree Pose (Vṛkṣāsana) 10 times.",
    category: "practice",
  },
  {
    id: "amateur-ascent",
    title: "Vinyasa Flow",
    description: "Score 70%+ on an Amateur-tier drill.",
    category: "practice",
  },
  {
    id: "pro-balance",
    title: "Arm Balance Virtuoso",
    description: "Correctly identify 5 distinct Pro-tier postures (e.g. Crow, Wheel, Headstand).",
    category: "mastery",
  },
  {
    id: "legendary-mastery",
    title: "Yoga Āchārya",
    description: "Correctly identify 3 Legend-tier pinnacle postures (e.g. Scorpion, Peacock, Firefly).",
    category: "mastery",
  },
  {
    id: "yoga-scholar",
    title: "Yoga Scholar",
    description: "Master visual recall for 25 distinct postures across the library.",
    category: "mastery",
  },
  {
    id: "centurion",
    title: "Century Club",
    description: "Accumulate 1,000 Lifetime XP through completed practice rounds.",
    category: "practice",
  },
];

const STORAGE_KEY = "yoga_bliss_player_progress_v1";
const LEGACY_STORAGE_KEY = "yoga_quest_player_progress_v1";

// Tree Pose appears under two ids: the starter alias and the full-library entry.
const TREE_POSE_IDS = ["tree", "tree-yoga-pose-vrksasana"];

export const DEFAULT_PLAYER_PROGRESS: PlayerProgress = {
  lifetimeXP: 0,
  roundsPlayed: 0,
  bestAccuracy: 0,
  currentStreak: 0,
  bestStreak: 0,
  poseStats: {},
  unlockedAchievements: [],
  lastPlayedAt: null,
};

/**
 * SSR-safe loader for local player progress
 */
export function getLocalProgress(): PlayerProgress {
  if (typeof window === "undefined" || !window.localStorage) {
    return DEFAULT_PLAYER_PROGRESS;
  }

  try {
    const raw =
      window.localStorage.getItem(STORAGE_KEY) ||
      window.localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return DEFAULT_PLAYER_PROGRESS;

    const parsed = JSON.parse(raw);
    return {
      lifetimeXP: Number(parsed.lifetimeXP) || 0,
      roundsPlayed: Number(parsed.roundsPlayed) || 0,
      bestAccuracy: Number(parsed.bestAccuracy) || 0,
      currentStreak: Number(parsed.currentStreak) || 0,
      bestStreak: Number(parsed.bestStreak) || 0,
      poseStats: parsed.poseStats && typeof parsed.poseStats === "object" ? parsed.poseStats : {},
      unlockedAchievements: Array.isArray(parsed.unlockedAchievements)
        ? parsed.unlockedAchievements
        : [],
      lastPlayedAt: parsed.lastPlayedAt || null,
    };
  } catch (err) {
    console.warn("Failed to read player progress from localStorage; using defaults:", err);
    return DEFAULT_PLAYER_PROGRESS;
  }
}

/**
 * SSR-safe saver for local player progress
 */
export function saveLocalProgress(progress: PlayerProgress): boolean {
  if (typeof window === "undefined" || !window.localStorage) {
    return false;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (err) {
    console.warn("Failed to save player progress to localStorage:", err);
    return false;
  }
}

/**
 * Resets local progress back to defaults
 */
export function resetLocalProgress(): boolean {
  if (typeof window === "undefined" || !window.localStorage) {
    return false;
  }

  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(LEGACY_STORAGE_KEY);
    return true;
  } catch (err) {
    console.warn("Failed to reset player progress:", err);
    return false;
  }
}

/**
 * Pure function to record a round's outcome and award achievements
 */
export function recordRoundOutcome(
  current: PlayerProgress,
  round: {
    earnedScore: number;
    accuracy: number;
    history: { poseId: string; isCorrect: boolean }[];
    maxStreakInRound: number;
    promptType?: QuestionLanguageMode;
    tier?: SkillTier | "all";
  }
): {
  updatedProgress: PlayerProgress;
  newlyUnlocked: string[];
} {
  const updatedPoseStats = { ...current.poseStats };

  // Update per-pose correct/incorrect tallies
  round.history.forEach(({ poseId, isCorrect }) => {
    const existing = updatedPoseStats[poseId] || { correct: 0, incorrect: 0 };
    updatedPoseStats[poseId] = {
      correct: existing.correct + (isCorrect ? 1 : 0),
      incorrect: existing.incorrect + (isCorrect ? 0 : 1),
    };
  });

  const lifetimeXP = current.lifetimeXP + round.earnedScore;
  const roundsPlayed = current.roundsPlayed + 1;
  const bestAccuracy = Math.max(current.bestAccuracy, round.accuracy);
  const bestStreak = Math.max(current.bestStreak, round.maxStreakInRound);

  // Check achievements idempotently
  const currentUnlocked = new Set(current.unlockedAchievements);
  const newlyUnlocked: string[] = [];

  const maybeUnlock = (id: string) => {
    if (!currentUnlocked.has(id)) {
      currentUnlocked.add(id);
      newlyUnlocked.push(id);
    }
  };

  // 1. First Flow: 5 distinct poses correctly answered
  const distinctCorrectCount = Object.keys(updatedPoseStats).filter(
    (id) => updatedPoseStats[id].correct > 0
  ).length;

  if (distinctCorrectCount >= 5) {
    maybeUnlock("first-flow");
  }

  // 2. Sanskrit Initiate: 80%+ on dedicated Sanskrit drill
  if (round.accuracy >= 80 && round.promptType === "sanskrit") {
    maybeUnlock("sanskrit-initiate");
  }

  // 3. Steady Focus (On Fire): 5-answer streak
  if (bestStreak >= 5) {
    maybeUnlock("on-fire");
  }

  // 4. Samadhi: Perfect 100% on a 10-question round
  if (round.accuracy === 100 && round.history.length === 10) {
    maybeUnlock("perfect-harmony");
  }

  // 5. Tree Master: Tree pose correctly identified 10 times
  const treeCorrectCount = TREE_POSE_IDS.reduce(
    (total, id) => total + (updatedPoseStats[id]?.correct || 0),
    0
  );
  if (treeCorrectCount >= 10) {
    maybeUnlock("tree-master");
  }

  // 6. Amateur Ascent: 70%+ in Amateur tier
  if (round.accuracy >= 70 && round.tier === "amateur") {
    maybeUnlock("amateur-ascent");
  }

  // 7. Pro Balance: 5 distinct Pro-tier postures correct
  const correctPoseIds = Object.keys(updatedPoseStats).filter((id) => updatedPoseStats[id].correct > 0);
  const proCorrectCount = correctPoseIds.filter(
    (id) => getPoseTierById(id) === "pro"
  ).length;
  if (proCorrectCount >= 5) {
    maybeUnlock("pro-balance");
  }

  // 8. Legendary Mastery: 3 distinct Legend-tier postures correct
  const legendCorrectCount = correctPoseIds.filter(
    (id) => getPoseTierById(id) === "legend"
  ).length;
  if (legendCorrectCount >= 3) {
    maybeUnlock("legendary-mastery");
  }

  // 9. Yoga Scholar: 25 distinct postures correct
  if (distinctCorrectCount >= 25) {
    maybeUnlock("yoga-scholar");
  }

  // 10. Century Club: 1,000 Lifetime XP
  if (lifetimeXP >= 1000) {
    maybeUnlock("centurion");
  }

  const updatedProgress: PlayerProgress = {
    lifetimeXP,
    roundsPlayed,
    bestAccuracy,
    currentStreak: 0,
    bestStreak,
    poseStats: updatedPoseStats,
    unlockedAchievements: Array.from(currentUnlocked),
    lastPlayedAt: new Date().toISOString(),
  };

  return {
    updatedProgress,
    newlyUnlocked,
  };
}

/**
 * Adaptive Practice Selection:
 * Selects weak poses based on incorrect-to-attempt ratio (min 2 attempts).
 * Fills from general pool if fewer than target count.
 */
export function selectAdaptivePracticePoses(
  allPoses: Pose[],
  poseStats: Record<string, PoseStats>,
  targetCount = 10
): {
  selectedPoses: Pose[];
  weakCount: number;
} {
  const ranked = allPoses
    .map((pose) => {
      const stats = poseStats[pose.id] || { correct: 0, incorrect: 0 };
      const totalAttempts = stats.correct + stats.incorrect;
      const errorRate = totalAttempts >= 2 ? stats.incorrect / totalAttempts : 0;
      return {
        pose,
        totalAttempts,
        errorRate,
        isWeak: totalAttempts >= 2 && errorRate > 0.3,
      };
    })
    .sort((a, b) => b.errorRate - a.errorRate);

  const weakPoses = ranked.filter((r) => r.isWeak).map((r) => r.pose);
  const remainingPoses = allPoses.filter((p) => !weakPoses.some((w) => w.id === p.id));

  const needed = Math.max(0, targetCount - weakPoses.length);
  const backfill = remainingPoses.slice(0, needed);

  const combined = [...weakPoses, ...backfill];
  return {
    selectedPoses: combined.slice(0, targetCount),
    weakCount: weakPoses.length,
  };
}
