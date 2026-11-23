import { describe, it, expect } from "vitest";
import { mergePlayerProgress, CloudProgressRecord } from "@/lib/sync";
import { PlayerProgress, DEFAULT_PLAYER_PROGRESS } from "@/lib/progression";

describe("Cloud & Local Progression Pure Merge Function", () => {
  it("never decreases metrics when local values exceed cloud values", () => {
    const local: PlayerProgress = {
      ...DEFAULT_PLAYER_PROGRESS,
      lifetimeXP: 1200,
      roundsPlayed: 5,
      bestAccuracy: 90,
      bestStreak: 4,
      poseStats: {
        mountain: { correct: 5, incorrect: 1 },
      },
      unlockedAchievements: ["first-flow"],
    };

    const cloud: CloudProgressRecord = {
      lifetimeXP: 500,
      roundsPlayed: 2,
      bestAccuracy: 70,
      bestStreak: 2,
      poseStats: {
        mountain: { correct: 2, incorrect: 0 },
      },
      unlockedAchievements: [],
    };

    const merged = mergePlayerProgress(local, cloud);

    expect(merged.lifetimeXP).toBe(1200);
    expect(merged.roundsPlayed).toBe(5);
    expect(merged.bestAccuracy).toBe(90);
    expect(merged.bestStreak).toBe(4);
    expect(merged.poseStats["mountain"].correct).toBe(5);
    expect(merged.unlockedAchievements).toContain("first-flow");
  });

  it("never decreases metrics when cloud values exceed local values", () => {
    const local: PlayerProgress = {
      ...DEFAULT_PLAYER_PROGRESS,
      lifetimeXP: 300,
      bestAccuracy: 60,
      poseStats: {
        tree: { correct: 2, incorrect: 1 },
      },
      unlockedAchievements: [],
    };

    const cloud: CloudProgressRecord = {
      lifetimeXP: 2500,
      roundsPlayed: 10,
      bestAccuracy: 100,
      bestStreak: 8,
      poseStats: {
        tree: { correct: 10, incorrect: 3 },
      },
      unlockedAchievements: ["tree-master", "on-fire"],
    };

    const merged = mergePlayerProgress(local, cloud);

    expect(merged.lifetimeXP).toBe(2500);
    expect(merged.bestAccuracy).toBe(100);
    expect(merged.bestStreak).toBe(8);
    expect(merged.poseStats["tree"].correct).toBe(10);
    expect(merged.poseStats["tree"].incorrect).toBe(3);
    expect(merged.unlockedAchievements).toContain("tree-master");
    expect(merged.unlockedAchievements).toContain("on-fire");
  });

  it("unions unlocked achievements cleanly without duplicates", () => {
    const local: PlayerProgress = {
      ...DEFAULT_PLAYER_PROGRESS,
      unlockedAchievements: ["first-flow", "on-fire"],
    };

    const cloud: CloudProgressRecord = {
      lifetimeXP: 0,
      roundsPlayed: 0,
      bestAccuracy: 0,
      bestStreak: 0,
      poseStats: {},
      unlockedAchievements: ["on-fire", "tree-master"],
    };

    const merged = mergePlayerProgress(local, cloud);
    expect(merged.unlockedAchievements).toHaveLength(3);
    expect(merged.unlockedAchievements).toEqual(
      expect.arrayContaining(["first-flow", "on-fire", "tree-master"])
    );
  });
});
