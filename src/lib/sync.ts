import { PlayerProgress, PoseStats } from "@/lib/progression";

export interface CloudProgressRecord {
  lifetimeXP: number;
  roundsPlayed: number;
  bestAccuracy: number;
  bestStreak: number;
  poseStats: Record<string, PoseStats>;
  unlockedAchievements: string[];
}

/**
 * Pure merge function for reconciling local progress and cloud progress.
 * Invariant: Never decreases lifetimeXP, bestAccuracy, bestStreak, or mastery counts.
 */
export function mergePlayerProgress(
  local: PlayerProgress,
  cloud: CloudProgressRecord | null | undefined
): PlayerProgress {
  if (!cloud) {
    return { ...local };
  }

  // Merged scalar metrics: strictly take max or sum
  const mergedLifetimeXP = Math.max(local.lifetimeXP, cloud.lifetimeXP);
  const mergedRoundsPlayed = Math.max(local.roundsPlayed, cloud.roundsPlayed);
  const mergedBestAccuracy = Math.max(local.bestAccuracy, cloud.bestAccuracy);
  const mergedBestStreak = Math.max(local.bestStreak, cloud.bestStreak);

  // Merge pose mastery maps
  const mergedPoseStats: Record<string, PoseStats> = {};
  const allPoseKeys = new Set([
    ...Object.keys(local.poseStats || {}),
    ...Object.keys(cloud.poseStats || {}),
  ]);

  allPoseKeys.forEach((poseId) => {
    const localStat = local.poseStats?.[poseId] || { correct: 0, incorrect: 0 };
    const cloudStat = cloud.poseStats?.[poseId] || { correct: 0, incorrect: 0 };

    mergedPoseStats[poseId] = {
      correct: Math.max(localStat.correct, cloudStat.correct),
      incorrect: Math.max(localStat.incorrect, cloudStat.incorrect),
    };
  });

  // Merge unlocked achievements
  const mergedAchievements = Array.from(
    new Set([
      ...(local.unlockedAchievements || []),
      ...(cloud.unlockedAchievements || []),
    ])
  );

  return {
    lifetimeXP: mergedLifetimeXP,
    roundsPlayed: mergedRoundsPlayed,
    bestAccuracy: mergedBestAccuracy,
    currentStreak: 0,
    bestStreak: mergedBestStreak,
    poseStats: mergedPoseStats,
    unlockedAchievements: mergedAchievements,
    lastPlayedAt: local.lastPlayedAt || new Date().toISOString(),
  };
}

/**
 * Safe Supabase configuration detector
 */
export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(url && anonKey && url.startsWith("http"));
}
