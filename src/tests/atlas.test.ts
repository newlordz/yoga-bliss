import { describe, it, expect } from "vitest";
import { ALL_POSES, ATLAS_POSES, STARTER_POSES } from "@/data/poses";
import {
  ATLAS_PAGE_SIZE,
  atlasCategoryFacets,
  atlasPageCount,
  atlasPageSlice,
  atlasTierFacets,
  filterAtlasPoses,
} from "@/lib/atlas";

const noFilters = { query: "", tier: "all" as const, category: "all" };

describe("Atlas directory helpers", () => {
  it("lists every posture once, starters included", () => {
    const ids = ATLAS_POSES.map((pose) => pose.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const starter of STARTER_POSES) {
      expect(ids).toContain(starter.id);
    }
    // The overlap between the two source arrays must collapse, not duplicate.
    expect(ids.filter((id) => id === "downward-facing-dog")).toHaveLength(1);
    expect(ids.length).toBe(ALL_POSES.length + STARTER_POSES.length - 1);
  });

  it("matches names, Sanskrit terms and benefit wording", () => {
    expect(filterAtlasPoses(ATLAS_POSES, { ...noFilters, query: "Vrksasana" })).not.toEqual([]);
    expect(filterAtlasPoses(ATLAS_POSES, { ...noFilters, query: "mountain" })).toHaveLength(
      filterAtlasPoses(ATLAS_POSES, { ...noFilters, query: "Mountain" }).length
    );
    const hips = filterAtlasPoses(ATLAS_POSES, { ...noFilters, query: "hips" });
    expect(hips.length).toBeGreaterThan(0);
    expect(hips.every((pose) => (pose.shortFact + (pose.benefits || "")).includes("hips"))).toBe(
      true
    );
    expect(filterAtlasPoses(ATLAS_POSES, { ...noFilters, query: "zzzznotapose" })).toEqual([]);
  });

  it("applies tier and category as an intersection, not a union", () => {
    const inversions = filterAtlasPoses(ATLAS_POSES, { ...noFilters, category: "inversions" });
    const legendInversions = filterAtlasPoses(ATLAS_POSES, {
      ...noFilters,
      tier: "legend",
      category: "inversions",
    });

    expect(inversions.length).toBeGreaterThan(legendInversions.length);
    for (const pose of legendInversions) {
      expect(pose.category).toBe("inversions");
    }
  });

  it("describes the whole library in its facet counts", () => {
    const tiers = atlasTierFacets(ATLAS_POSES);
    expect(tiers[0]).toEqual({ key: "all", label: "All Poses", count: ATLAS_POSES.length });
    expect(tiers.slice(1).reduce((sum, facet) => sum + facet.count, 0)).toBe(ATLAS_POSES.length);

    const categories = atlasCategoryFacets(ATLAS_POSES);
    expect(
      categories.slice(1).reduce((sum, facet) => sum + facet.count, 0)
    ).toBe(ATLAS_POSES.length);
  });

  it("pages the directory and clamps a stale page number", () => {
    expect(ATLAS_PAGE_SIZE).toBe(24);
    expect(atlasPageCount(ATLAS_POSES.length)).toBe(Math.ceil(ATLAS_POSES.length / 24));

    const lastPage = atlasPageCount(ATLAS_POSES.length);
    const { poses, firstIndex } = atlasPageSlice(ATLAS_POSES, 999);
    expect(poses.length).toBe(ATLAS_POSES.length - (lastPage - 1) * ATLAS_PAGE_SIZE);
    expect(firstIndex).toBe((lastPage - 1) * ATLAS_PAGE_SIZE);

    const zeroPage = atlasPageSlice(ATLAS_POSES, 0);
    expect(zeroPage.poses).toHaveLength(ATLAS_PAGE_SIZE);
    expect(zeroPage.firstIndex).toBe(0);
  });
});
