import { describe, it, expect } from "vitest";
import { ALL_POSES, STARTER_POSES, getPoseSkillTier } from "@/data/poses";
import { validatePosesDataset } from "@/lib/validators";

describe("Pose Content Layer & Validation", () => {
  it("contains exactly 10 starter poses", () => {
    expect(STARTER_POSES.length).toBe(10);
  });

  it("passes dev/runtime dataset validation with zero errors", () => {
    const result = validatePosesDataset(STARTER_POSES);
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it("contains all 10 required beginner poses", () => {
    const requiredSlugs = [
      "mountain",
      "childs-pose",
      "cat",
      "cow",
      "cobra",
      "downward-facing-dog",
      "tree",
      "chair",
      "warrior-i",
      "warrior-ii",
    ];

    const currentSlugs = STARTER_POSES.map((p) => p.id);
    for (const slug of requiredSlugs) {
      expect(currentSlugs).toContain(slug);
    }
  });

  it("catches duplicate IDs and empty fields properly", () => {
    const corruptedDataset = [
      ...STARTER_POSES,
      {
        ...STARTER_POSES[0], // Duplicate ID and names
      },
    ];

    const result = validatePosesDataset(corruptedDataset);
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it("ships no encoded HTML entities in the full library copy", () => {
    const encoded = /&(?:amp|nbsp|lt|gt|quot|#\d+);/i;
    const offenders = ALL_POSES.filter((pose) =>
      [pose.englishName, pose.sanskritName, pose.shortFact, pose.benefits, pose.steps, pose.teacherCues, pose.modifications]
        .filter(Boolean)
        .some((text) => encoded.test(text as string))
    ).map((pose) => pose.id);

    expect(offenders).toEqual([]);
  });

  it("keeps the English and Sanskrit labels distinct for every posture", () => {
    const offenders = [...STARTER_POSES, ...ALL_POSES].filter(
      (pose) =>
        pose.englishName.trim().toLowerCase() === pose.sanskritName.trim().toLowerCase() ||
        /\bpose\b/i.test(pose.sanskritName)
    );

    expect(offenders.map((pose) => `${pose.id}: ${pose.sanskritName}`)).toEqual([]);
  });

  it("classifies peak postures above the tier the scraper reported", () => {
    const tierOf = (id: string) => getPoseSkillTier(ALL_POSES.find((p) => p.id === id)!);

    expect(tierOf("hand-stand")).toBe("pro");
    expect(tierOf("headstand")).toBe("pro");
    expect(tierOf("firefly")).toBe("legend");
    expect(tierOf("swan-pose")).toBe("legend");
    expect(tierOf("shoulder-pressing-pose")).toBe("legend");
    expect(tierOf("half-moon-pose")).toBe("amateur");
  });
});
