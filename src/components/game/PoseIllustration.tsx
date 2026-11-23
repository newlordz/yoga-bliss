"use client";

import React, { useState } from "react";
import { ALL_POSES, STARTER_POSES } from "@/data/poses";

interface PoseIllustrationProps {
  poseId: string;
  imageSrc?: string;
  alt?: string;
  className?: string;
  borderStyle?: "card" | "plain";
  /** Grids of specimens defer offscreen work; single-pose views keep eager paint. */
  loading?: "eager" | "lazy";
}

// Map common shorthand IDs to full dataset poses
const ID_ALIASES: Record<string, string> = {
  mountain: "mountain",
  "childs-pose": "childs-pose",
  cat: "cat",
  cow: "cow",
  cobra: "cobra",
  "downward-facing-dog": "downward-facing-dog",
  tree: "tree",
  chair: "chair",
  "warrior-i": "warrior-i",
  "warrior-ii": "warrior-ii",
  "warrior-1": "warrior-1-virabhadrasana",
  "warrior-2": "warrior-2-virabhadrasana-2",
  "warrior-3": "warrior-3-virabhadrasana-3",
  triangle: "triangle-pose",
  corpse: "corpse-pose-savasana",
  "half-lord-of-the-fishes": "half-lord-of-the-fishes",
};

export function PoseIllustration({
  poseId,
  imageSrc,
  alt,
  className = "",
  borderStyle = "card",
  loading = "eager",
}: PoseIllustrationProps) {
  // Keyed to the source so a later, working image is not stuck on the fallback.
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  // 1. Resolve pose object
  const targetId = ID_ALIASES[poseId] || poseId;
  const pose =
    STARTER_POSES.find((p) => p.id === poseId || p.id === targetId) ||
    ALL_POSES.find(
      (p) =>
        p.id === poseId ||
        p.id === targetId ||
        p.id.includes(poseId) ||
        p.englishName.toLowerCase() === poseId.toLowerCase()
    );

  // 2. Resolve image source
  const resolvedSrc = imageSrc || pose?.image || `/poses/${poseId}.jpg`;
  const resolvedAlt = alt || pose?.imageAlt || pose?.englishName || "Yoga pose illustration";
  const imageError = failedSrc === resolvedSrc && failedSrc !== null;

  const cardContainerClass =
    borderStyle === "card"
      ? "relative flex items-center justify-center overflow-hidden rounded-md border border-[#ded5c5] bg-[#faf7f2] p-4"
      : "relative flex items-center justify-center overflow-hidden";

  return (
    <div className={`${cardContainerClass} ${className}`}>
      {!imageError ? (
        <img
          src={resolvedSrc}
          alt={resolvedAlt}
          onError={() => setFailedSrc(resolvedSrc)}
          className="h-full w-full max-h-72 object-contain select-none"
          loading={loading}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-6 text-[#5c6b61]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#a34828] mb-1">
            Asana Specimen
          </span>
          <p className="font-serif font-bold text-base text-[#1a241e]">{pose?.englishName || poseId}</p>
          <p className="text-xs font-serif italic text-[#a34828] mt-0.5">{pose?.sanskritName}</p>
        </div>
      )}
    </div>
  );
}
