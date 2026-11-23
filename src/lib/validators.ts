import { Pose } from "@/types/pose";

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validatePosesDataset(poses: Pose[]): ValidationResult {
  const errors: string[] = [];
  const seenIds = new Set<string>();
  const seenEnglishNames = new Set<string>();
  const seenSanskritNames = new Set<string>();

  if (!Array.isArray(poses) || poses.length === 0) {
    return { isValid: false, errors: ["Poses dataset is empty or not an array."] };
  }

  poses.forEach((pose, index) => {
    const prefix = `Pose at index ${index} (${pose.id || "unknown"})`;

    if (!pose.id || typeof pose.id !== "string" || !pose.id.trim()) {
      errors.push(`${prefix}: Missing or empty 'id'.`);
    } else if (seenIds.has(pose.id)) {
      errors.push(`${prefix}: Duplicate ID '${pose.id}'.`);
    } else {
      seenIds.add(pose.id);
    }

    if (!pose.englishName || typeof pose.englishName !== "string" || !pose.englishName.trim()) {
      errors.push(`${prefix}: Missing or empty 'englishName'.`);
    } else if (seenEnglishNames.has(pose.englishName.toLowerCase())) {
      errors.push(`${prefix}: Duplicate englishName '${pose.englishName}'.`);
    } else {
      seenEnglishNames.add(pose.englishName.toLowerCase());
    }

    if (!pose.sanskritName || typeof pose.sanskritName !== "string" || !pose.sanskritName.trim()) {
      errors.push(`${prefix}: Missing or empty 'sanskritName'.`);
    } else if (seenSanskritNames.has(pose.sanskritName.toLowerCase())) {
      errors.push(`${prefix}: Duplicate sanskritName '${pose.sanskritName}'.`);
    } else {
      seenSanskritNames.add(pose.sanskritName.toLowerCase());
    }

    if (!pose.image || typeof pose.image !== "string" || !pose.image.startsWith("/")) {
      errors.push(`${prefix}: Invalid image path '${pose.image}'. Must start with '/'.`);
    }

    if (!pose.imageAlt || typeof pose.imageAlt !== "string" || pose.imageAlt.length < 10) {
      errors.push(`${prefix}: Image alt text must be descriptive (at least 10 chars).`);
    }

    if (!pose.shortFact || typeof pose.shortFact !== "string" || pose.shortFact.length < 15) {
      errors.push(`${prefix}: Short fact is missing or too brief.`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}
