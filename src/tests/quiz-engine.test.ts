import { describe, it, expect } from "vitest";
import { STARTER_POSES, ALL_POSES, POSES_BY_TIER } from "@/data/poses";
import {
  generateQuizRound,
  generateQuestionChoices,
  evaluateAnswer,
  calculateRoundResult,
} from "@/lib/quiz-engine";

describe("Quiz Engine Pure Invariants", () => {
  it("generates exactly 10 questions for the 10 starter poses", () => {
    const round = generateQuizRound(STARTER_POSES, 10);
    expect(round.questions.length).toBe(10);
    expect(round.totalQuestions).toBe(10);
    expect(round.languageMode).toBe("english");
  });

  it("supports dedicated Sanskrit question mode", () => {
    const round = generateQuizRound(STARTER_POSES, 10, "sanskrit");
    expect(round.languageMode).toBe("sanskrit");
    for (const q of round.questions) {
      expect(q.promptType).toBe("sanskrit");
      expect(q.promptTitle).toContain("Sanskrit");
    }
  });

  it("supports mixed English and Sanskrit recall mode", () => {
    const round = generateQuizRound(STARTER_POSES, 10, "mixed");
    expect(round.languageMode).toBe("mixed");
    const promptTypes = round.questions.map((q) => q.promptType);
    expect(promptTypes).toContain("english");
    expect(promptTypes).toContain("sanskrit");
  });

  it("ensures all 4 skill tiers (beginner, amateur, pro, legend) have valid playable pools", () => {
    expect(POSES_BY_TIER.beginner.length).toBeGreaterThanOrEqual(10);
    expect(POSES_BY_TIER.amateur.length).toBeGreaterThanOrEqual(10);
    expect(POSES_BY_TIER.pro.length).toBeGreaterThanOrEqual(10);
    expect(POSES_BY_TIER.legend.length).toBeGreaterThanOrEqual(10);

    const legendRound = generateQuizRound(POSES_BY_TIER.legend, 10);
    expect(legendRound.questions.length).toBe(10);
  });

  it("ensures each question has exactly 4 unique choices including the correct target", () => {
    const round = generateQuizRound(STARTER_POSES, 10);

    for (const q of round.questions) {
      expect(q.choices.length).toBe(4);

      const choiceIds = q.choices.map((c) => c.id);
      const uniqueIds = new Set(choiceIds);
      expect(uniqueIds.size).toBe(4);

      // Correct target must be in the choices
      expect(choiceIds).toContain(q.correctChoiceId);
      expect(q.correctChoiceId).toBe(q.targetPose.id);
    }
  });

  it("avoids repeating the target pose within the round", () => {
    const round = generateQuizRound(STARTER_POSES, 10);
    const targetIds = round.questions.map((q) => q.targetPose.id);
    const uniqueTargets = new Set(targetIds);
    expect(uniqueTargets.size).toBe(10);
  });

  it("never repeats a display label across the 4 choices", () => {
    for (const target of ALL_POSES) {
      const choices = generateQuestionChoices(target, ALL_POSES);

      expect(choices.length).toBe(4);
      expect(new Set(choices.map((c) => c.englishName.toLowerCase())).size).toBe(4);
      expect(new Set(choices.map((c) => c.sanskritName.toLowerCase())).size).toBe(4);
    }
  });

  it("scores +100 XP for correct answer and 0 for incorrect answer", () => {
    const dummyQuestion = {
      questionIndex: 0,
      targetPose: STARTER_POSES[0],
      choices: generateQuestionChoices(STARTER_POSES[0], STARTER_POSES),
      correctChoiceId: STARTER_POSES[0].id,
      promptType: "english" as const,
      promptTitle: "What is the English name for this pose?",
    };

    const correctFeedback = evaluateAnswer(dummyQuestion, STARTER_POSES[0].id, 0);
    expect(correctFeedback.isCorrect).toBe(true);
    expect(correctFeedback.earnedXP).toBe(100);

    const wrongChoiceId = STARTER_POSES[1].id;
    const wrongFeedback = evaluateAnswer(dummyQuestion, wrongChoiceId, 0);
    expect(wrongFeedback.isCorrect).toBe(false);
    expect(wrongFeedback.earnedXP).toBe(0);
  });

  it("awards +50 XP bonus on every 3rd consecutive correct answer", () => {
    const dummyQuestion = {
      questionIndex: 2,
      targetPose: STARTER_POSES[0],
      choices: generateQuestionChoices(STARTER_POSES[0], STARTER_POSES),
      correctChoiceId: STARTER_POSES[0].id,
      promptType: "english" as const,
      promptTitle: "What is the English name for this pose?",
    };

    const feedback = evaluateAnswer(dummyQuestion, STARTER_POSES[0].id, 2);
    expect(feedback.isCorrect).toBe(true);
    expect(feedback.streakBonus).toBe(50);
    expect(feedback.earnedXP).toBe(150);
  });

  it("calculates round result and awards +300 XP bonus for perfect 10/10", () => {
    const history10 = Array.from({ length: 10 }).map((_, i) => ({
      poseId: STARTER_POSES[i].id,
      isCorrect: true,
    }));

    const result = calculateRoundResult(history10, 1000, 150);
    expect(result.correctCount).toBe(10);
    expect(result.accuracy).toBe(100);
    expect(result.perfectBonus).toBe(300);
    expect(result.score).toBe(1000 + 300);
  });
});
