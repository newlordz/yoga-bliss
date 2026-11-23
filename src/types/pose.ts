export type PoseDifficulty =
  | "beginner"
  | "amateur"
  | "pro"
  | "legend"
  | "intermediate"
  | "advanced";

export type SkillTier = "beginner" | "amateur" | "pro" | "legend";

export type QuestionLanguageMode = "english" | "sanskrit" | "mixed";

export const TIER_CONFIG: Record<
  SkillTier,
  {
    name: string;
    description: string;
    level: number;
    badge: string;
  }
> = {
  beginner: {
    name: "Beginner",
    description: "Foundational, restorative, and grounding postures (Level 1)",
    level: 1,
    badge: "LVL 1",
  },
  amateur: {
    name: "Amateur",
    description: "Classic studio vinyasa, standing sequences, and core balance (Level 2)",
    level: 2,
    badge: "LVL 2",
  },
  pro: {
    name: "Pro",
    description: "Dynamic arm balances, deep spinal arches, and inversions (Level 3)",
    level: 3,
    badge: "LVL 3",
  },
  legend: {
    name: "Legend",
    description: "Master pinnacle postures, intricate binds, and peak asanas (Level 4)",
    level: 4,
    badge: "LVL 4",
  },
};

export type PoseCategory =
  | "standing"
  | "seated-twists"
  | "reclining"
  | "inversions"
  | "forward-bends"
  | "back-bends"
  | "arm-balances"
  | "seated"
  | "prone"
  | "supine"
  | "balancing";

export const CATEGORY_DISPLAY_MAP: Record<string, string> = {
  standing: "STANDING",
  "seated-twists": "SEATED/TWISTS",
  reclining: "RECLINING",
  inversions: "INVERSIONS",
  "forward-bends": "FORWARD BENDS",
  "back-bends": "BACK BENDS",
  "arm-balances": "ARM BALANCES",
  seated: "SEATED/TWISTS",
  prone: "BACK BENDS",
  supine: "RECLINING",
  balancing: "ARM BALANCES",
};

export interface Pose {
  id: string;
  englishName: string;
  sanskritName: string;
  difficulty: PoseDifficulty;
  category: PoseCategory;
  categories?: PoseCategory[];
  image: string;
  imageAlt: string;
  shortFact: string;
  benefits?: string;
  steps?: string;
  teacherCues?: string;
  modifications?: string;
  sourceUrl?: string;
}
