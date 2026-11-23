"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ATLAS_POSES, getPoseSkillTier } from "@/data/poses";
import { SkillTier, TIER_CONFIG } from "@/types/pose";
import {
  atlasCategoryFacets,
  atlasPageSlice,
  atlasTierFacets,
  filterAtlasPoses,
  ATLAS_PAGE_SIZE,
  AtlasTierFacet,
} from "@/lib/atlas";
import { PoseIllustration } from "@/components/game/PoseIllustration";
import { Button } from "@/components/ui/Button";

export default function AtlasPage() {
  const [query, setQuery] = useState("");
  const [tier, setTier] = useState<AtlasTierFacet>("all");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const matches = useMemo(
    () => filterAtlasPoses(ATLAS_POSES, { query, tier, category }),
    [query, tier, category]
  );
  const { poses: visiblePoses, firstIndex, lastPage } = atlasPageSlice(matches, page);
  const currentPage = Math.min(Math.max(1, page), lastPage);
  const tierFacets = useMemo(() => atlasTierFacets(ATLAS_POSES), []);
  const categoryFacets = useMemo(() => atlasCategoryFacets(ATLAS_POSES), []);
  const filtersActive = query.trim() !== "" || tier !== "all" || category !== "all";

  const resetFilters = () => {
    setQuery("");
    setTier("all");
    setCategory("all");
    setPage(1);
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      {/* Section heading */}
      <div className="mb-6 border-b border-[#e4ddd3] pb-5">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-wider text-[#a34828] hover:underline"
        >
          &larr; Back to Index
        </Link>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[#a34828]">
          Illustrated Directory
        </p>
        <h1 className="font-serif text-2xl font-normal text-[#1a241e] sm:text-3xl">
          Asana Atlas: Every Posture in the Library
        </h1>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[#5c6b61]">
          {ATLAS_POSES.length} illustrated specimens with their English and Sanskrit names, practice
          tier and one-line benefit. Open any card to study its entry steps, teacher cues,
          modifications and anatomy in the Practice Room.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <label htmlFor="atlas-search" className="sr-only">
          Search the atlas
        </label>
        <input
          id="atlas-search"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setPage(1);
          }}
          placeholder="Search by name, Sanskrit term, benefit or body area (e.g. hips, balance)..."
          className="w-full rounded-md border border-[#ded5c5] bg-[#ffffff] px-3 py-2.5 text-xs text-[#1a241e] placeholder:text-[#9aa79d] focus:border-[#2d6a4f] focus:outline-none"
        />
      </div>

      {/* Tier facets */}
      <div className="mb-3 flex flex-wrap items-center gap-1 font-mono text-[11px]">
        {tierFacets.map((facet) => (
          <button
            key={facet.key}
            onClick={() => {
              setTier(facet.key as AtlasTierFacet);
              setPage(1);
            }}
            aria-pressed={tier === facet.key}
            className={`rounded px-2.5 py-1 uppercase transition-colors ${
              tier === facet.key
                ? "bg-[#1f3a2b] font-bold text-[#faf7f2]"
                : "bg-[#f3eee5] text-[#38473e] hover:bg-[#e8e0d2]"
            }`}
          >
            {facet.label} ({facet.count})
          </button>
        ))}
      </div>

      {/* Category facets */}
      <div className="mb-5 flex flex-wrap items-center gap-1 font-mono text-[11px]">
        {categoryFacets.map((facet) => (
          <button
            key={facet.key}
            onClick={() => {
              setCategory(facet.key);
              setPage(1);
            }}
            aria-pressed={category === facet.key}
            className={`rounded border px-2.5 py-1 transition-colors ${
              category === facet.key
                ? "border-[#a34828] bg-[#fdf0e9] text-[#a34828]"
                : "border-[#e4ddd3] bg-[#ffffff] text-[#5c6b61] hover:bg-[#faf7f2]"
            }`}
          >
            {facet.label} ({facet.count})
          </button>
        ))}
      </div>

      {/* Result summary */}
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3 border-y border-[#f3eee5] py-2">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#5c6b61]">
          {matches.length === 0
            ? "No specimens found"
            : `Showing ${firstIndex + 1}-${firstIndex + visiblePoses.length} of ${
                matches.length
              } matched`}
        </p>
        {filtersActive && (
          <button
            onClick={resetFilters}
            className="font-mono text-[11px] uppercase tracking-wider text-[#a34828] hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {visiblePoses.length > 0 ? (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {visiblePoses.map((pose) => {
            const poseTier: SkillTier = getPoseSkillTier(pose);
            return (
              <li key={pose.id}>
                <Link
                  href={`/practice?pose=${pose.id}`}
                  className="flex h-full flex-col overflow-hidden rounded-md border border-[#ded5c5] bg-[#ffffff] transition-colors hover:border-[#2d6a4f]"
                >
                  <div className="h-36 w-full border-b border-[#f3eee5] bg-[#faf7f2] p-2">
                    <PoseIllustration
                      poseId={pose.id}
                      imageSrc={pose.image}
                      alt={pose.imageAlt}
                      borderStyle="plain"
                      loading="lazy"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#2d6a4f]">
                      {TIER_CONFIG[poseTier].badge} • {poseTier}
                    </span>
                    <h2 className="font-serif text-sm leading-snug text-[#1a241e]">
                      {pose.englishName}
                    </h2>
                    <p className="font-serif text-xs italic leading-snug text-[#a34828]">
                      {pose.sanskritName}
                    </p>
                    <p className="mt-auto pt-1 text-[11px] leading-snug text-[#5c6b61] line-clamp-3">
                      {pose.shortFact}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="rounded-md border border-dashed border-[#ded5c5] bg-[#faf7f2] p-8 text-center">
          <p className="font-serif text-base text-[#1a241e]">
            No posture matches “{query.trim() || "these filters"}”.
          </p>
          <p className="mt-1 text-xs text-[#5c6b61]">
            Try a simpler term such as “dog”, “twist” or “balance”, or clear the filters.
          </p>
          <div className="mt-4 flex justify-center">
            <Button variant="outline" size="sm" onClick={resetFilters}>
              Clear Filters
            </Button>
          </div>
        </div>
      )}

      {/* Pagination */}
      {lastPage > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-wider">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            &larr; Prev
          </Button>
          <span className="text-[#5c6b61]">
            Page {currentPage} / {lastPage} • {ATLAS_PAGE_SIZE} per page
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage >= lastPage}
          >
            Next &rarr;
          </Button>
        </div>
      )}

      {/* Cross links */}
      <div className="mt-10 flex flex-col gap-2 border-t border-[#e4ddd3] pt-6 sm:flex-row">
        <Link href="/practice" className="flex-1">
          <Button variant="primary" size="sm" className="w-full">
            Open the Teaching Practice Room
          </Button>
        </Link>
        <Link href="/play" className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            Test Recall on These Poses
          </Button>
        </Link>
      </div>
    </div>
  );
}
