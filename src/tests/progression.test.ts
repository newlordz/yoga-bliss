import { describe, it, expect } from "vitest";
import {
  DEFAULT_PLAYER_PROGRESS,
  recordRoundOutcome,
  selectAdaptivePracticePoses,
} from "@/lib/progression";
import { STARTER_POSES } from "@/data/poses";

describe("Player Progression & Adaptive Practice", () => {
  it("records round outcome, accumulates XP and updates pose statistics", () => {
    const round = {
      earnedScore: 800,
      accuracy: 80,
      history: [
        { poseId: "mountain", isCorrect: true },
        { poseId: "cat", isCorrect: false },
        { poseId: "tree", isCorrect: true },
      ],
      maxStreakInRound: 2,
    };

    const { updatedProgress } = recordRoundOutcome(DEFAULT_PLAYER_PROGRESS, round);
    expect(updatedProgress.lifetimeXP).toBe(800);
    expect(updatedProgress.roundsPlayed).toBe(1);
    expect(updatedProgress.bestAccuracy).toBe(80);
    expect(updatedProgress.poseStats["mountain"].correct).toBe(1);
    expect(updatedProgress.poseStats["cat"].incorrect).toBe(1);
  });

  it("unlocks First Flow and Steady Focus (streak 5) achievements", () => {
    const round = {
      earnedScore: 500,
      accuracy: 100,
      history: [
        { poseId: "mountain", isCorrect: true },
        { poseId: "cat", isCorrect: true },
        { poseId: "cow", isCorrect: true },
        { poseId: "cobra", isCorrect: true },
        { poseId: "tree", isCorrect: true },
      ],
      maxStreakInRound: 5,
    };

    const { updatedProgress, newlyUnlocked } = recordRoundOutcome(
      DEFAULT_PLAYER_PROGRESS,
      round
    );

    expect(newlyUnlocked).toContain("first-flow");
    expect(newlyUnlocked).toContain("on-fire");
    expect(updatedProgress.unlockedAchievements).toContain("first-flow");
  });

  it("unlocks Sanskrit Initiate when scoring 80%+ on a Sanskrit drill", () => {
    const round = {
      earnedScore: 800,
      accuracy: 90,
      history: [
        { poseId: "mountain", isCorrect: true },
        { poseId: "cat", isCorrect: true },
      ],
      maxStreakInRound: 2,
      promptType: "sanskrit" as const,
    };

    const { newlyUnlocked } = recordRoundOutcome(DEFAULT_PLAYER_PROGRESS, round);
    expect(newlyUnlocked).toContain("sanskrit-initiate");
  });

  it("unlocks Samadhi on a perfect 10/10 round and Century Club on 1000 XP", () => {
    const history10 = Array.from({ length: 10 }).map((_, i) => ({
      poseId: STARTER_POSES[i].id,
      isCorrect: true,
    }));

    const round = {
      earnedScore: 1000,
      accuracy: 100,
      history: history10,
      maxStreakInRound: 10,
    };

    const { newlyUnlocked } = recordRoundOutcome(DEFAULT_PLAYER_PROGRESS, round);
    expect(newlyUnlocked).toContain("perfect-harmony");
    expect(newlyUnlocked).toContain("centurion");
  });

  it("does not unlock duplicate achievements", () => {
    const initial = {
      ...DEFAULT_PLAYER_PROGRESS,
      unlockedAchievements: ["first-flow"],
    };

    const round = {
      earnedScore: 500,
      accuracy: 100,
      history: [
        { poseId: "mountain", isCorrect: true },
        { poseId: "cat", isCorrect: true },
        { poseId: "cow", isCorrect: true },
        { poseId: "cobra", isCorrect: true },
        { poseId: "tree", isCorrect: true },
      ],
      maxStreakInRound: 3,
    };

    const { newlyUnlocked } = recordRoundOutcome(initial, round);
    expect(newlyUnlocked).not.toContain("first-flow");
  });

  it("reserves the tier trophies for poses that really are Pro and Legend", () => {
    const beginnerHistory = ["mountain-pose", "side-bending-pose", "low-lunge-pose", "childs-pose-balasana", "sphinx-ii", "half-moon-pose"].map(
      (poseId) => ({ poseId, isCorrect: true })
    );

    const { newlyUnlocked } = recordRoundOutcome(DEFAULT_PLAYER_PROGRESS, {
      earnedScore: 600,
      accuracy: 100,
      history: beginnerHistory,
      maxStreakInRound: 6,
    });

    expect(newlyUnlocked).not.toContain("pro-balance");
    expect(newlyUnlocked).not.toContain("legendary-mastery");

    const legendHistory = ["scorpion-pose", "lotus-peacock-pose", "chin-stand"].map((poseId) => ({
      poseId,
      isCorrect: true,
    }));

    const legendRun = recordRoundOutcome(DEFAULT_PLAYER_PROGRESS, {
      earnedScore: 300,
      accuracy: 100,
      history: legendHistory,
      maxStreakInRound: 3,
    });

    expect(legendRun.newlyUnlocked).toContain("legendary-mastery");
    expect(legendRun.newlyUnlocked).not.toContain("pro-balance");
  });

  it("unlocks Tree Master from the library id for Tree Pose", () => {
    const history = Array.from({ length: 10 }).map(() => ({
      poseId: "tree-yoga-pose-vrksasana",
      isCorrect: true,
    }));

    const { newlyUnlocked } = recordRoundOutcome(DEFAULT_PLAYER_PROGRESS, {
      earnedScore: 1000,
      accuracy: 100,
      history,
      maxStreakInRound: 10,
    });

    expect(newlyUnlocked).toContain("tree-master");
  });

  it("selects adaptive practice poses based on mistake frequency (min 2 attempts)", () => {
    const poseStats = {
      cat: { correct: 0, incorrect: 3 },
      cow: { correct: 1, incorrect: 2 },
      mountain: { correct: 5, incorrect: 0 },
      cobra: { correct: 0, incorrect: 1 },
    };

    const { selectedPoses, weakCount } = selectAdaptivePracticePoses(
      STARTER_POSES,
      poseStats,
      10
    );

    expect(weakCount).toBe(2);
    expect(selectedPoses.length).toBe(10);
    expect(selectedPoses[0].id).toBe("cat");
    expect(selectedPoses[1].id).toBe("cow");
  });

  it("provides safe fallback defaults for a new player with no history", () => {
    const { selectedPoses, weakCount } = selectAdaptivePracticePoses(
      STARTER_POSES,
      {},
      10
    );

    expect(weakCount).toBe(0);
    expect(selectedPoses.length).toBe(10);
  });
});
