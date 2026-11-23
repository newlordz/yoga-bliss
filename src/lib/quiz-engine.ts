import { Pose, QuestionLanguageMode } from "@/types/pose";

export interface QuizChoice {
  id: string;
  englishName: string;
  sanskritName: string;
}

export interface QuizQuestion {
  questionIndex: number;
  targetPose: Pose;
  choices: QuizChoice[];
  correctChoiceId: string;
  promptType: "english" | "sanskrit";
  promptTitle: string;
}

export interface QuizRound {
  questions: QuizQuestion[];
  totalQuestions: number;
  languageMode: QuestionLanguageMode;
}

export interface QuestionFeedback {
  isCorrect: boolean;
  selectedChoiceId: string;
  correctChoiceId: string;
  targetPose: Pose;
  earnedXP: number;
  streakBonus: number;
}

export interface RoundResult {
  score: number;
  correctCount: number;
  totalQuestions: number;
  accuracy: number;
  streakBonusTotal: number;
  perfectBonus: number;
  history: {
    poseId: string;
    isCorrect: boolean;
  }[];
}

export type RandomFn = () => number;

/**
 * Fisher-Yates array shuffle with injectable random function
 */
export function shuffleArray<T>(items: T[], randomFn: RandomFn = Math.random): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(randomFn() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * The library reuses some English and Sanskrit names for different records, so
 * two choices can render the exact same label. Never offer that to the player.
 */
function labelsAreDistinct(a: QuizChoice, b: QuizChoice): boolean {
  const normalize = (value: string) => value.trim().toLowerCase();
  return (
    normalize(a.englishName) !== normalize(b.englishName) &&
    normalize(a.sanskritName) !== normalize(b.sanskritName)
  );
}

/**
 * Generates 4 unique answer choices containing the target pose and 3 distractors
 */
export function generateQuestionChoices(
  targetPose: Pose,
  allPoses: Pose[],
  randomFn: RandomFn = Math.random
): QuizChoice[] {
  const toChoice = (pose: Pose): QuizChoice => ({
    id: pose.id,
    englishName: pose.englishName,
    sanskritName: pose.sanskritName,
  });

  const targetChoice = toChoice(targetPose);
  const shuffledOthers = shuffleArray(
    allPoses.filter((p) => p.id !== targetPose.id),
    randomFn
  );

  const distractors: QuizChoice[] = [];
  for (const pose of shuffledOthers) {
    if (distractors.length === 3) break;
    const choice = toChoice(pose);
    if ([targetChoice, ...distractors].every((taken) => labelsAreDistinct(taken, choice))) {
      distractors.push(choice);
    }
  }

  // Very small pools may not contain 3 differently labelled poses: top up by id.
  for (const pose of shuffledOthers) {
    if (distractors.length === 3) break;
    const choice = toChoice(pose);
    if (![targetChoice, ...distractors].some((taken) => taken.id === choice.id)) {
      distractors.push(choice);
    }
  }

  return shuffleArray([targetChoice, ...distractors], randomFn);
}

/**
 * Generates a full 10-question round with configurable language recall mode
 * - "english": Ask for the English name
 * - "sanskrit": Ask for the Sanskrit name (āsana)
 * - "mixed": Alternates or randomly mixes English and Sanskrit questions
 */
export function generateQuizRound(
  availablePoses: Pose[],
  roundSize = 10,
  languageMode: QuestionLanguageMode = "english",
  randomFn: RandomFn = Math.random
): QuizRound {
  if (availablePoses.length < 4) {
    throw new Error("At least 4 poses are required to generate a question with 4 choices.");
  }

  // Shuffle target pool to guarantee non-repeating targets
  const shuffledTargets = shuffleArray(availablePoses, randomFn);
  const targets = shuffledTargets.slice(0, Math.min(roundSize, shuffledTargets.length));

  const questions: QuizQuestion[] = targets.map((targetPose, index) => {
    const choices = generateQuestionChoices(targetPose, availablePoses, randomFn);

    let promptType: "english" | "sanskrit" = "english";
    if (languageMode === "sanskrit") {
      promptType = "sanskrit";
    } else if (languageMode === "mixed") {
      promptType = index % 2 === 0 ? "english" : "sanskrit";
    }

    const promptTitle =
      promptType === "sanskrit"
        ? "What is the classical Sanskrit name (āsana) for this posture?"
        : "What is the standard English name for this posture?";

    return {
      questionIndex: index,
      targetPose,
      choices,
      correctChoiceId: targetPose.id,
      promptType,
      promptTitle,
    };
  });

  return {
    questions,
    totalQuestions: questions.length,
    languageMode,
  };
}

/**
 * Pure scoring calculation with streak bonuses
 */
export function evaluateAnswer(
  question: QuizQuestion,
  selectedChoiceId: string,
  currentStreak = 0
): QuestionFeedback {
  const isCorrect = selectedChoiceId === question.correctChoiceId;
  const baseXP = isCorrect ? 100 : 0;

  // Streak bonus: +50 for every 3 consecutive correct answers
  let streakBonus = 0;
  if (isCorrect) {
    const nextStreak = currentStreak + 1;
    if (nextStreak > 0 && nextStreak % 3 === 0) {
      streakBonus = 50;
    }
  }

  return {
    isCorrect,
    selectedChoiceId,
    correctChoiceId: question.correctChoiceId,
    targetPose: question.targetPose,
    earnedXP: baseXP + streakBonus,
    streakBonus,
  };
}

/**
 * Pure calculation for final round statistics
 */
export function calculateRoundResult(
  history: { poseId: string; isCorrect: boolean }[],
  totalEarnedXP: number,
  streakBonusTotal = 0
): RoundResult {
  const totalQuestions = history.length;
  const correctCount = history.filter((h) => h.isCorrect).length;
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Perfect round bonus: +300 XP if 10/10
  const perfectBonus = totalQuestions === 10 && correctCount === 10 ? 300 : 0;
  const finalScore = totalEarnedXP + perfectBonus;

  return {
    score: finalScore,
    correctCount,
    totalQuestions,
    accuracy,
    streakBonusTotal,
    perfectBonus,
    history,
  };
}
