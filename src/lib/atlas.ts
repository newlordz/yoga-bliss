import { CATEGORY_DISPLAY_MAP, SkillTier, Pose } from "@/types/pose";
import { getPoseSkillTier } from "@/data/poses";

export const ATLAS_PAGE_SIZE = 24;

export type AtlasTierFacet = SkillTier | "all";

export interface AtlasFilters {
  query: string;
  tier: AtlasTierFacet;
  category: string;
}

export interface AtlasFacet {
  key: string;
  label: string;
  count: number;
}

function searchableText(pose: Pose): string {
  return [
    pose.englishName,
    pose.sanskritName,
    pose.shortFact,
    pose.benefits,
    CATEGORY_DISPLAY_MAP[pose.category] || pose.category,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

/**
 * Free-text match over names, the one-line benefit and the category label, so
 * "hips", "Vrksasana" and "inversion" all find the same sheets.
 */
export function matchesAtlasQuery(pose: Pose, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  const haystack = searchableText(pose);
  return needle.split(/\s+/).every((term) => haystack.includes(term));
}

export function filterAtlasPoses(poses: Pose[], filters: AtlasFilters): Pose[] {
  return poses.filter(
    (pose) =>
      (filters.tier === "all" || getPoseSkillTier(pose) === filters.tier) &&
      (filters.category === "all" || pose.category === filters.category) &&
      matchesAtlasQuery(pose, filters.query)
  );
}

/** Facet counts always describe the whole directory, never the current slice. */
export function atlasTierFacets(poses: Pose[]): AtlasFacet[] {
  const order: SkillTier[] = ["beginner", "amateur", "pro", "legend"];
  return [
    { key: "all", label: "All Poses", count: poses.length },
    ...order.map((tier) => ({
      key: tier,
      label: tier,
      count: poses.filter((pose) => getPoseSkillTier(pose) === tier).length,
    })),
  ];
}

export function atlasCategoryFacets(poses: Pose[]): AtlasFacet[] {
  const counts = new Map<string, number>();
  for (const pose of poses) {
    counts.set(pose.category, (counts.get(pose.category) || 0) + 1);
  }
  return [
    { key: "all", label: "All Categories", count: poses.length },
    ...[...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([key, count]) => ({
        key,
        label: (CATEGORY_DISPLAY_MAP[key] || key).toLowerCase(),
        count,
      })),
  ];
}

export function atlasPageCount(total: number, pageSize = ATLAS_PAGE_SIZE): number {
  return Math.max(1, Math.ceil(total / pageSize));
}

export function clampAtlasPage(page: number, total: number, pageSize = ATLAS_PAGE_SIZE): number {
  return Math.min(Math.max(1, page), atlasPageCount(total, pageSize));
}

export function atlasPageSlice(
  poses: Pose[],
  page: number,
  pageSize = ATLAS_PAGE_SIZE
): { poses: Pose[]; firstIndex: number; lastPage: number } {
  const lastPage = atlasPageCount(poses.length, pageSize);
  const current = clampAtlasPage(page, poses.length, pageSize);
  const start = (current - 1) * pageSize;
  return {
    poses: poses.slice(start, start + pageSize),
    firstIndex: start,
    lastPage,
  };
}
