"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  getLocalProgress,
  resetLocalProgress,
  PlayerProgress,
  DEFAULT_PLAYER_PROGRESS,
  ACHIEVEMENTS,
} from "@/lib/progression";
import { ALL_POSES, ATLAS_POSES, STARTER_POSES, POSES_BY_TIER, getPoseSkillTier } from "@/data/poses";
import { SkillTier, TIER_CONFIG } from "@/types/pose";
import { PoseIllustration } from "@/components/game/PoseIllustration";

const PREVIEW_POSE_IDS = ["mountain", "tree", "crow-crane", "scorpion-pose"];

export default function HomePage() {
  // False while server-rendering and on the first client pass, so only the
  // localStorage-backed numbers are gated; the editorial copy stays in the HTML.
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [progress, setProgress] = useState<PlayerProgress>(() => {
    if (typeof window !== "undefined") {
      return getLocalProgress();
    }
    return DEFAULT_PLAYER_PROGRESS;
  });
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showModeModal, setShowModeModal] = useState(false);
  const [activePreviewId, setActivePreviewId] = useState("tree");
  const [atlasTierFilter, setAtlasTierFilter] = useState<SkillTier | "all">("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModeModal(false);
        setShowResetConfirm(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleReset = () => {
    resetLocalProgress();
    setProgress(DEFAULT_PLAYER_PROGRESS);
    setShowResetConfirm(false);
  };

  const findPoseById = (id: string) =>
    ALL_POSES.find((p) => p.id === id) || STARTER_POSES.find((p) => p.id === id);

  const previewPose = findPoseById(activePreviewId) || STARTER_POSES[0];

  const displayedAtlasPoses =
    atlasTierFilter === "all"
      ? ALL_POSES
      : POSES_BY_TIER[atlasTierFilter] || [];

  return (
    <div className="flex flex-col items-center">
      {/* Editorial Hero */}
      <section className="w-full border-b border-[#e4ddd3] px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="font-mono text-xs uppercase tracking-widest text-[#a34828]">
              Visual Flashcard Engine / 141 Postures Cataloged
            </p>

            <h1 className="text-3xl font-normal sm:text-4xl md:text-5xl text-[#1a241e] leading-[1.15]">
              Learn to recognize yoga poses by English &amp; Sanskrit names.
            </h1>

            <p className="text-base text-[#38473e] sm:text-lg leading-relaxed max-w-xl">
              Yoga teachers frequently call postures in Sanskrit during fast-moving sequences.
              This site provides short, 10-question visual drills across 4 progressive tiers
              (Beginner, Amateur, Pro, Legend) to help you master asana recognition.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                size="lg"
                variant="primary"
                onClick={() => setShowModeModal(true)}
                className="tracking-wide text-base px-8 py-3.5 font-semibold"
              >
                Start Game
              </Button>

              <Link href="/practice" className="inline-block">
                <Button size="lg" variant="secondary" className="text-xs uppercase tracking-wider font-semibold">
                  Practice Room (Teaching)
                </Button>
              </Link>
            </div>

            <p className="font-mono text-[11px] text-[#5c6b61]">
              10 questions per round • English or Sanskrit recall • Free &amp; offline
            </p>
          </div>

          {/* Interactive Pose Specimen Box */}
          <div className="lg:col-span-5 border border-[#ded5c5] bg-[#ffffff] p-5 rounded-md shadow-xs">
            <div className="flex items-center justify-between border-b border-[#e4ddd3] pb-3 mb-4">
              <div>
                <h2 className="font-serif text-lg font-bold text-[#1a241e]">
                  {previewPose.englishName}
                </h2>
              </div>
              <span className="font-serif italic text-sm text-[#a34828]">
                {previewPose.sanskritName}
              </span>
            </div>

            <PoseIllustration
              poseId={previewPose.id}
              imageSrc={previewPose.image}
              alt={previewPose.imageAlt}
              className="h-56 sm:h-64 w-full"
            />

            <div className="mt-4 pt-3 border-t border-[#f3eee5] text-xs space-y-1.5 text-[#38473e]">
              <p>
                <strong className="text-[#1a241e] font-semibold">Tier &amp; Classification:</strong>{" "}
                <span className="capitalize">{getPoseSkillTier(previewPose)} • {previewPose.category}</span>
              </p>
              <p className="leading-relaxed text-[#5c6b61]">
                {previewPose.shortFact}
              </p>
            </div>

            {/* Selector pills */}
            <div className="mt-4 pt-3 border-t border-[#e4ddd3] flex flex-wrap gap-1">
              {PREVIEW_POSE_IDS.map((id) => {
                const pose = findPoseById(id);
                if (!pose) return null;
                return (
                  <button
                    key={id}
                    onClick={() => setActivePreviewId(id)}
                    className={`px-2 py-1 text-[11px] font-mono rounded cursor-pointer transition-colors ${
                      activePreviewId === id
                        ? "bg-[#1f3a2b] text-[#faf7f2]"
                        : "bg-[#f3eee5] text-[#38473e] hover:bg-[#e8e0d2]"
                    }`}
                  >
                    {`${pose.englishName} (${TIER_CONFIG[getPoseSkillTier(pose)].name})`}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Skill Tiers Grid */}
      <section className="w-full bg-[#f3eee5] border-b border-[#e4ddd3] py-14 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-[#a34828]">
              Skill Progression
            </p>
            <h2 className="text-2xl font-normal sm:text-3xl text-[#1a241e] mt-1">
              Four Practice Tiers
            </h2>
            <p className="text-sm text-[#5c6b61] mt-1 max-w-2xl">
              From gentle foundation poses to master-level arm balances and peak inversions,
              curated according to physical demand and balance complexity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(["beginner", "amateur", "pro", "legend"] as const).map((tierKey) => {
              const tier = TIER_CONFIG[tierKey];
              const poseCount = POSES_BY_TIER[tierKey]?.length || 0;
              return (
                <div key={tierKey} className="bg-[#faf7f2] border border-[#ded5c5] p-5 rounded-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] text-[#a34828] uppercase font-bold">
                        {tier.badge}
                      </span>
                      <span className="font-mono text-[11px] text-[#5c6b61]">
                        {poseCount} Poses
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1a241e]">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#5c6b61] mt-2 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#e4ddd3] flex flex-col gap-1.5">
                    <Link href={`/play?tier=${tierKey}&prompt=english`}>
                      <Button variant="outline" size="sm" fullWidth className="text-[11px] tracking-wider uppercase">
                        English Drill
                      </Button>
                    </Link>
                    <Link href={`/play?tier=${tierKey}&prompt=sanskrit`}>
                      <Button variant="secondary" size="sm" fullWidth className="text-[11px] tracking-wider uppercase text-[#a34828]">
                        Sanskrit Drill
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sanskrit Roots Breakdown Section */}
      <section className="w-full bg-[#faf7f2] border-b border-[#e4ddd3] py-14 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-[#a34828]">
              Etymology Guide
            </p>
            <h2 className="text-2xl font-normal sm:text-3xl text-[#1a241e] mt-1">
              How Sanskrit pose names are assembled
            </h2>
            <p className="text-sm text-[#5c6b61] mt-1 max-w-2xl">
              Sanskrit asana names are compound words. Once you understand five basic building blocks,
              decoding names in class becomes straightforward.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-[#ffffff] border border-[#ded5c5] p-4 rounded-md">
              <span className="font-mono text-[10px] text-[#a34828] uppercase font-bold">Suffix</span>
              <p className="font-serif text-lg font-bold text-[#1a241e] mt-0.5">Āsana (आसन)</p>
              <p className="text-xs text-[#5c6b61] mt-1">
                Means &quot;seat&quot;, &quot;posture&quot;, or &quot;position&quot;. Appears as the suffix of almost every yoga posture.
              </p>
            </div>

            <div className="bg-[#ffffff] border border-[#ded5c5] p-4 rounded-md">
              <span className="font-mono text-[10px] text-[#a34828] uppercase font-bold">Direction</span>
              <p className="font-serif text-lg font-bold text-[#1a241e] mt-0.5">Adho / Mukha</p>
              <p className="text-xs text-[#5c6b61] mt-1">
                <em>Adho</em> (downward) + <em>Mukha</em> (face). Combined with <em>Svana</em> (dog) to yield Downward-Facing Dog.
              </p>
            </div>

            <div className="bg-[#ffffff] border border-[#ded5c5] p-4 rounded-md">
              <span className="font-mono text-[10px] text-[#a34828] uppercase font-bold">Nature</span>
              <p className="font-serif text-lg font-bold text-[#1a241e] mt-0.5">Vṛkṣa (वृक्ष)</p>
              <p className="text-xs text-[#5c6b61] mt-1">
                Translates directly as &quot;tree&quot;. Add <em>asana</em> to form <em>Vṛkṣāsana</em> (Tree Pose).
              </p>
            </div>

            <div className="bg-[#ffffff] border border-[#ded5c5] p-4 rounded-md">
              <span className="font-mono text-[10px] text-[#a34828] uppercase font-bold">Archetype</span>
              <p className="font-serif text-lg font-bold text-[#1a241e] mt-0.5">Vīrabhadra</p>
              <p className="text-xs text-[#5c6b61] mt-1">
                Named after the fierce warrior born of Shiva&apos;s wrath. Forms the foundation of Warrior I and II.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Pose Directory / Atlas */}
      <section id="atlas" className="w-full border-b border-[#e4ddd3] py-14 px-4 sm:px-6 max-w-5xl">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#a34828]">Curriculum Atlas</p>
            <h2 className="text-2xl font-normal sm:text-3xl text-[#1a241e] mt-1">
              Curated Asana Directory
            </h2>
            <p className="text-xs text-[#5c6b61] mt-0.5">
              Source reference: YogaClassPlan asana library
            </p>
            <Link
              href="/atlas"
              className="mt-2 inline-block font-mono text-[11px] uppercase tracking-wider text-[#a34828] hover:underline"
            >
              Browse all {ATLAS_POSES.length} poses with pictures &rarr;
            </Link>
          </div>

          {/* Atlas Tier Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 font-mono text-[11px]">
            {(["all", "beginner", "amateur", "pro", "legend"] as const).map((tierKey) => (
              <button
                key={tierKey}
                onClick={() => setAtlasTierFilter(tierKey)}
                className={`px-2.5 py-1 rounded uppercase transition-colors cursor-pointer ${
                  atlasTierFilter === tierKey
                    ? "bg-[#1f3a2b] text-[#faf7f2] font-bold"
                    : "bg-[#f3eee5] text-[#38473e] hover:bg-[#e8e0d2]"
                }`}
              >
                {tierKey === "all" ? "All Poses" : tierKey}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto border border-[#ded5c5] rounded-md bg-[#ffffff]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#e4ddd3] bg-[#faf7f2] font-mono text-[11px] text-[#5c6b61]">
                <th className="py-2.5 px-4 font-semibold">#</th>
                <th className="py-2.5 px-4 font-semibold">English Name</th>
                <th className="py-2.5 px-4 font-semibold">Sanskrit Name</th>
                <th className="py-2.5 px-4 font-semibold">Tier</th>
                <th className="py-2.5 px-4 font-semibold">Category</th>
                <th className="py-2.5 px-4 font-semibold">Focus Area</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3eee5] text-[#1a241e]">
              {displayedAtlasPoses.map((pose, idx) => (
                <tr key={pose.id} className="hover:bg-[#faf7f2] transition-colors">
                  <td className="py-3 px-4 font-mono text-[11px] text-[#5c6b61]">{idx + 1}</td>
                  <td className="py-3 px-4 font-medium">{pose.englishName}</td>
                  <td className="py-3 px-4 font-serif italic text-[#a34828]">{pose.sanskritName}</td>
                  <td className="py-3 px-4 font-mono uppercase text-[10px] text-[#2d6a4f] font-bold">
                    {getPoseSkillTier(pose)}
                  </td>
                  <td className="py-3 px-4 capitalize text-[#5c6b61]">{pose.category}</td>
                  <td className="py-3 px-4 text-[#5c6b61] max-w-xs truncate">{pose.shortFact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Local Study Journal */}
      <section id="journal" className="w-full py-14 px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#a34828]">
              Browser Ledger
            </p>
            <h2 className="text-2xl font-normal sm:text-3xl text-[#1a241e] mt-1">
              Your Study History
            </h2>
          </div>

          {isHydrated && progress.roundsPlayed > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowResetConfirm(true)}
              className="text-[#a34828] self-start sm:self-auto"
            >
              Clear Storage
            </Button>
          )}
        </div>

        {isHydrated && progress.roundsPlayed === 0 ? (
          <div className="border border-[#ded5c5] bg-[#faf7f2] p-8 rounded-md text-center">
            <p className="font-serif text-base text-[#1a241e]">No practice sessions recorded yet.</p>
            <p className="text-xs text-[#5c6b61] mt-1 max-w-sm mx-auto">
              Run your first 10-question drill to establish your baseline score, accuracy, and error logs.
            </p>
            <div className="mt-4">
              <Link href="/play">
                <Button size="sm" variant="primary">
                  Begin Practice
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="border border-[#ded5c5] bg-[#ffffff] p-4 rounded-md">
              <p className="font-mono text-[10px] uppercase text-[#5c6b61]">Lifetime XP</p>
              <p className="font-serif text-2xl font-bold text-[#1a241e] mt-1">
                {isHydrated ? progress.lifetimeXP : "—"}
              </p>
            </div>

            <div className="border border-[#ded5c5] bg-[#ffffff] p-4 rounded-md">
              <p className="font-mono text-[10px] uppercase text-[#5c6b61]">Rounds Run</p>
              <p className="font-serif text-2xl font-bold text-[#1a241e] mt-1">
                {isHydrated ? progress.roundsPlayed : "—"}
              </p>
            </div>

            <div className="border border-[#ded5c5] bg-[#ffffff] p-4 rounded-md">
              <p className="font-mono text-[10px] uppercase text-[#5c6b61]">Peak Accuracy</p>
              <p className="font-serif text-2xl font-bold text-[#1a241e] mt-1">
                {isHydrated ? `${progress.bestAccuracy}%` : "—"}
              </p>
            </div>

            <div className="border border-[#ded5c5] bg-[#ffffff] p-4 rounded-md">
              <p className="font-mono text-[10px] uppercase text-[#5c6b61]">Longest Streak</p>
              <p className="font-serif text-2xl font-bold text-[#1a241e] mt-1">
                {isHydrated ? progress.bestStreak : "—"}
              </p>
            </div>
          </div>
        )}

        {/* Milestone Badges */}
        <div className="mt-8">
          <div className="flex items-baseline justify-between mb-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#5c6b61]">
              Milestone Checklist
            </p>
            <span className="font-mono text-[11px] text-[#1f3a2b] font-bold">
              {isHydrated ? progress.unlockedAchievements.length : "—"} of {ACHIEVEMENTS.length} Achieved
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map((ach) => {
              const isUnlocked = isHydrated && progress.unlockedAchievements.includes(ach.id);
              return (
                <div
                  key={ach.id}
                  className={`p-3.5 border rounded-md text-xs transition-colors ${
                    isUnlocked
                      ? "bg-[#ffffff] border-[#4d7358] text-[#1a241e]"
                      : "bg-[#faf7f2] border-[#ded5c5] text-[#5c6b61]"
                  }`}
                >
                  <div className="flex items-center justify-between font-semibold mb-1">
                    <span>{ach.title}</span>
                    <span className="font-mono text-[10px]">
                      {isUnlocked ? "COMPLETED" : "PENDING"}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5c6b61] leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Start Game Mode Selection Modal */}
      {showModeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mode-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowModeModal(false)}
        >
          <div
            className="w-full max-w-md rounded-md bg-[#ffffff] p-6 border border-[#ded5c5] shadow-xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-baseline justify-between border-b border-[#e4ddd3] pb-3 mb-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#a34828] font-bold">
                  Select Drill Focus
                </p>
                <h2 id="mode-modal-title" className="font-serif text-2xl font-normal text-[#1a241e] mt-0.5">
                  Choose Game Mode
                </h2>
              </div>
              <button
                onClick={() => setShowModeModal(false)}
                className="text-xs font-mono text-[#5c6b61] hover:text-[#1a241e] cursor-pointer p-1"
                aria-label="Close dialog"
              >
                [ESC] &times;
              </button>
            </div>

            <p className="text-xs text-[#5c6b61] mb-5">
              Select how you want the 4 multiple-choice answers to be presented:
            </p>

            <div className="space-y-3 mb-6">
              {/* Option 1: English Recall Drill */}
              <Link
                href="/play?prompt=english"
                className="group flex flex-col p-4 rounded-md border-2 border-[#1f3a2b] bg-[#faf7f2] hover:bg-[#f3eee5] transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-base text-[#1a241e] group-hover:text-[#1f3a2b]">
                    English Recall Drill
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#faf7f2] bg-[#1f3a2b] px-2 py-0.5 rounded">
                    Foundational
                  </span>
                </div>
                <p className="text-xs text-[#5c6b61] mt-1 leading-relaxed">
                  Identify the posture by its English name (e.g. Mountain, Child&apos;s Pose, Warrior II).
                </p>
              </Link>

              {/* Option 2: Sanskrit Recall Drill */}
              <Link
                href="/play?prompt=sanskrit"
                className="group flex flex-col p-4 rounded-md border-2 border-[#a34828] bg-[#faf7f2] hover:bg-[#fbf3ef] transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-base text-[#1a241e] group-hover:text-[#a34828]">
                    Sanskrit Recall Drill (āsana)
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#faf7f2] bg-[#a34828] px-2 py-0.5 rounded">
                    Traditional
                  </span>
                </div>
                <p className="text-xs text-[#5c6b61] mt-1 leading-relaxed">
                  Identify the posture by its classical Sanskrit name (e.g. Tāḍāsana, Balāsana, Vṛkṣāsana).
                </p>
              </Link>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#f3eee5] text-xs">
              <Link
                href="/play?prompt=mixed"
                className="font-mono text-[11px] text-[#5c6b61] hover:text-[#1a241e] underline"
              >
                Or play Mixed Flow (alternating) &rarr;
              </Link>
              <button
                onClick={() => setShowModeModal(false)}
                className="font-mono text-[11px] text-[#5c6b61] hover:text-[#1a241e] cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="w-full max-w-sm rounded-md bg-[#faf7f2] p-6 border border-[#ded5c5]">
            <h3 className="font-serif text-lg font-bold text-[#1a241e] mb-2">
              Clear Local Storage?
            </h3>
            <p className="text-xs text-[#5c6b61] mb-5 leading-relaxed">
              This will remove all lifetime XP, pose error tracking, and unlocked milestones from this browser.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" size="sm" onClick={() => setShowResetConfirm(false)}>
                Cancel
              </Button>
              <Button variant="terracotta" size="sm" onClick={handleReset}>
                Confirm Reset
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
