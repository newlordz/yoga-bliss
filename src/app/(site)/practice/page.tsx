"use client";

import React, { useState, useEffect, useMemo, useCallback, Suspense, useSyncExternalStore } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ATLAS_POSES, POSES_BY_TIER, getPoseSkillTier } from "@/data/poses";
import { SkillTier, CATEGORY_DISPLAY_MAP, TIER_CONFIG } from "@/types/pose";
import { getLocalProgress } from "@/lib/progression";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PoseIllustration } from "@/components/game/PoseIllustration";
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Shuffle,
  Search,
  Sparkles,
  Layers,
  Volume2,
  Play,
  CheckCircle,
  HelpCircle,
  Home,
  SlidersHorizontal,
} from "lucide-react";

const TIERS = ["beginner", "amateur", "pro", "legend"] as const;

// Counts mirror the filter rule below, so a chip never promises a different
// number of sheets than clicking it shows.
const countByCategory = (slug: string) =>
  ATLAS_POSES.filter(
    (pose) => pose.category === slug || pose.categories?.some((c) => c === slug)
  ).length;

const CATEGORIES = [
  { slug: "all", label: "All Poses", count: ATLAS_POSES.length },
  { slug: "standing", label: "Standing", count: countByCategory("standing") },
  { slug: "seated-twists", label: "Seated/Twists", count: countByCategory("seated-twists") },
  { slug: "reclining", label: "Reclining", count: countByCategory("reclining") },
  { slug: "inversions", label: "Inversions", count: countByCategory("inversions") },
  { slug: "forward-bends", label: "Forward Bends", count: countByCategory("forward-bends") },
  { slug: "back-bends", label: "Back Bends", count: countByCategory("back-bends") },
  { slug: "arm-balances", label: "Arm Balances", count: countByCategory("arm-balances") },
];

function PracticeStudio() {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category") || "all";
  const rawTier = searchParams.get("tier") || "all";
  // Unknown query values would silently filter the library to nothing.
  const initialCategory = CATEGORIES.some((c) => c.slug === rawCategory) ? rawCategory : "all";
  const initialTier = ((TIERS as readonly string[]).includes(rawTier)
    ? rawTier
    : "all") as SkillTier | "all";
  const initialPoseId = searchParams.get("pose");
  const initialMissed = searchParams.get("missed") === "true";

  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedTier, setSelectedTier] = useState<SkillTier | "all">(initialTier);
  const [onlyMissed, setOnlyMissed] = useState<boolean>(initialMissed);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"steps" | "cues" | "modifications" | "benefits">("steps");

  // Get player history for weak/missed poses
  const playerProgress = useMemo(() => {
    return isClient ? getLocalProgress() : null;
  }, [isClient]);

  const missedPoseIds = useMemo(() => {
    if (!playerProgress?.poseStats) return new Set<string>();
    return new Set(
      Object.keys(playerProgress.poseStats).filter(
        (id) => (playerProgress.poseStats[id]?.incorrect || 0) > 0
      )
    );
  }, [playerProgress]);

  // Compute filtered poses
  const filteredPoses = useMemo(() => {
    return ATLAS_POSES.filter((pose) => {
      // Category filter
      if (selectedCategory !== "all") {
        const matchesCategory =
          pose.category === selectedCategory ||
          Boolean(pose.categories && pose.categories.some((c) => c === selectedCategory));
        if (!matchesCategory) return false;
      }

      // Tier filter
      if (selectedTier !== "all") {
        if (getPoseSkillTier(pose) !== selectedTier) return false;
      }

      // Missed poses only toggle
      if (onlyMissed) {
        if (!missedPoseIds.has(pose.id)) return false;
      }

      // Text search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesText =
          pose.englishName.toLowerCase().includes(q) ||
          pose.sanskritName.toLowerCase().includes(q) ||
          (pose.shortFact && pose.shortFact.toLowerCase().includes(q)) ||
          (pose.benefits && pose.benefits.toLowerCase().includes(q));
        if (!matchesText) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedTier, onlyMissed, searchQuery, missedPoseIds]);

  // Active pose selection
  const [activePoseId, setActivePoseId] = useState<string>(() => {
    if (initialPoseId && ATLAS_POSES.some((p) => p.id === initialPoseId)) {
      return initialPoseId;
    }
    return ATLAS_POSES[0]?.id || "tree-yoga-pose-vrksasana";
  });

  // Keep the spotlight inside the filtered pool; an empty pool shows the no-match panel.
  const matchedIndex = filteredPoses.findIndex((p) => p.id === activePoseId);
  const activeIndex = filteredPoses.length === 0 ? -1 : matchedIndex >= 0 ? matchedIndex : 0;
  const activePose = activeIndex >= 0 ? filteredPoses[activeIndex] : null;

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (filteredPoses.length === 0) return;
    const nextIdx = (activeIndex + 1) % filteredPoses.length;
    setActivePoseId(filteredPoses[nextIdx].id);
  }, [filteredPoses, activeIndex]);

  const handlePrev = useCallback(() => {
    if (filteredPoses.length === 0) return;
    const prevIdx = (activeIndex - 1 + filteredPoses.length) % filteredPoses.length;
    setActivePoseId(filteredPoses[prevIdx].id);
  }, [filteredPoses, activeIndex]);

  const handleRandom = () => {
    if (filteredPoses.length === 0) return;
    const randIdx = Math.floor(Math.random() * filteredPoses.length);
    setActivePoseId(filteredPoses[randIdx].id);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Pronounce pose name using web speech API
  const handleSpeak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const currentTier = activePose ? getPoseSkillTier(activePose) : "beginner";
  // The drill link must describe the pool being browsed, not just the spotlight pose.
  const quizTier: SkillTier = selectedTier === "all" ? currentTier : selectedTier;
  const tierConfig = TIER_CONFIG[currentTier];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Page Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e4ddd3] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2d6a4f]/20 bg-[#f4efe8] px-3 py-1 text-xs font-semibold text-[#1b4332] mb-2">
            <BookOpen className="h-3.5 w-3.5 text-[#2d6a4f]" />
            <span>Interactive Asana Teaching &amp; Study Lab</span>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl text-[#1a241e]">
            Yoga Posture Practice Room
          </h1>
          <p className="text-sm text-[#5c6b61] mt-1 max-w-xl">
            Explore alignment blueprints, Sanskrit roots, step-by-step entries, and teacher queues at your own pace without timers or test scoring.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link href={`/play?tier=${quizTier}&prompt=english`}>
            <Button variant="primary" size="sm" className="gap-2 text-xs font-bold uppercase tracking-wider">
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Test Recall in Game</span>
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-1.5 text-xs">
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="mb-6 space-y-3 bg-[#faf7f2] border border-[#ded5c5] p-4 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5c6b61]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posture (e.g. Tree, Vrksasana, balance, hips)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-md border border-[#ded5c5] bg-[#ffffff] text-[#1a241e] focus:outline-none focus:ring-2 focus:ring-[#1f3a2b]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#5c6b61] hover:text-[#1a241e]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Toggle: Missed Poses Filter */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOnlyMissed((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                onlyMissed
                  ? "bg-[#a34828] text-white"
                  : "bg-[#ffffff] text-[#38473e] border border-[#ded5c5] hover:bg-[#f3eee5]"
              }`}
            >
              <span>🎯 Study My Missed Poses</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${onlyMissed ? "bg-white/20 text-white" : "bg-[#f3eee5] text-[#5c6b61]"}`}>
                {missedPoseIds.size}
              </span>
            </button>

            {/* Random Pose Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleRandom}
              className="gap-1.5 text-xs"
              title="Shuffle to a random posture"
            >
              <Shuffle className="h-3.5 w-3.5" />
              <span>Random</span>
            </Button>
          </div>
        </div>

        {/* 7 Category Tabs */}
        <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-[#e4ddd3]">
          <span className="font-mono text-[10px] text-[#5c6b61] uppercase font-bold mr-1 flex items-center gap-1">
            <Layers className="h-3 w-3" />
            Category:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                selectedCategory === cat.slug
                  ? "bg-[#1f3a2b] text-[#faf7f2] font-bold"
                  : "bg-[#ffffff] text-[#38473e] hover:bg-[#e8e0d2] border border-[#ded5c5]"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Difficulty Tier Tabs */}
        <div className="flex flex-wrap items-center gap-1 pt-1 font-mono text-[11px]">
          <span className="text-[10px] text-[#5c6b61] uppercase font-bold mr-1 flex items-center gap-1">
            <SlidersHorizontal className="h-3 w-3" />
            Tier:
          </span>
          {(["all", "beginner", "amateur", "pro", "legend"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTier(t)}
              className={`px-2.5 py-0.5 rounded text-[11px] uppercase transition-colors cursor-pointer ${
                selectedTier === t
                  ? "bg-[#a34828] text-[#faf7f2] font-bold"
                  : "bg-[#ffffff] text-[#5c6b61] hover:bg-[#f3eee5] border border-[#ded5c5]"
              }`}
            >
              {t === "all" ? "All Tiers" : t}
            </button>
          ))}
        </div>
      </div>

      {/* Active Posture Spotlight Studio */}
      {activePose ? (
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start mb-8">
          {/* Left Column: Posture Card & Navigation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl bg-white p-6 shadow-xl shadow-[#1b4332]/5 border-2 border-[#e6e1d6]">
              {/* Header Badges */}
              <div className="mb-4 flex items-center justify-between text-xs">
                <span className="font-mono uppercase tracking-wider font-bold text-[#a34828]">
                  {CATEGORY_DISPLAY_MAP[activePose.category] || activePose.category}
                </span>
                <span className="rounded-md bg-[#f4efe8] px-2 py-0.5 font-bold uppercase text-[10px] text-[#1b4332]">
                  {tierConfig?.badge} • {tierConfig?.name}
                </span>
              </div>

              {/* The Studio Illustration */}
              <div className="relative min-h-[260px] sm:min-h-[300px] flex items-center justify-center">
                <PoseIllustration
                  poseId={activePose.id}
                  imageSrc={activePose.image}
                  alt={activePose.imageAlt}
                  className="h-64 sm:h-72 w-full"
                  borderStyle="plain"
                />
              </div>

              {/* Quick Pronunciation & Name Tag */}
              <div className="mt-4 pt-3 border-t border-[#ede7dc] text-center">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-xl font-bold text-[#1b4332]">
                    {activePose.englishName}
                  </h2>
                  <button
                    onClick={() => handleSpeak(`${activePose.englishName}, ${activePose.sanskritName}`)}
                    className="p-1 rounded-full text-[#a34828] hover:bg-[#f3eee5] transition-colors"
                    title="Pronounce Posture Name"
                    aria-label="Speak Posture Name"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="font-serif italic text-base text-[#a34828] mt-0.5">
                  {activePose.sanskritName}
                </p>
                <p className="text-xs text-[#5c6b61] mt-2 leading-relaxed max-w-sm mx-auto">
                  {activePose.shortFact}
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between gap-2 px-1">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                className="gap-1.5 text-xs font-semibold flex-1"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>

              <span className="font-mono text-xs text-[#5c6b61] font-semibold px-2">
                {activeIndex + 1} / {filteredPoses.length}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                className="gap-1.5 text-xs font-semibold flex-1"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: In-Depth Teaching Curriculum Tabs */}
          <div className="lg:col-span-7">
            <Card variant="elevated" className="p-6">
              {/* Teaching Tab Selectors */}
              <div className="flex flex-wrap items-center gap-2 border-b border-[#e4ddd3] pb-3 mb-5">
                {[
                  { id: "steps", label: "Steps & Alignment", icon: CheckCircle },
                  { id: "cues", label: "Teacher Cues", icon: HelpCircle },
                  { id: "modifications", label: "Modifications & Props", icon: Sparkles },
                  { id: "benefits", label: "Anatomy & Benefits", icon: BookOpen },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as "steps" | "cues" | "modifications" | "benefits")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#1f3a2b] text-white shadow-xs"
                          : "bg-[#f4efe8] text-[#38473e] hover:bg-[#e8e0d2]"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: Step-by-Step Instructions */}
              {activeTab === "steps" && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-[#1b4332] flex items-center gap-2">
                    <span>How to Enter &amp; Align This Posture</span>
                  </h3>
                  {activePose.steps ? (
                    <div className="text-sm text-[#38473e] leading-relaxed space-y-3 whitespace-pre-line bg-[#fdfbf7] p-4 rounded-xl border border-[#ede7dc]">
                      {activePose.steps}
                    </div>
                  ) : (
                    <p className="text-xs text-[#5c6b61] italic">
                      Begin in foundational Mountain Pose (Tadasana), establish grounded balance through the soles of your feet, lengthen the spine on an inhale, and transition mindfully into the posture.
                    </p>
                  )}
                  <div className="pt-2 flex items-center justify-between text-xs text-[#5c6b61]">
                    <span>Breath Focus: Smooth, diaphragmatic inhalations &amp; exhalations</span>
                    <span className="font-mono uppercase text-[10px] text-[#a34828] font-bold">Safe Exit &bull; Re-center</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Teacher Cues & Alignment Watch-outs */}
              {activeTab === "cues" && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-[#1b4332]">
                    Teacher Alignment Cues &amp; Queues
                  </h3>
                  {activePose.teacherCues ? (
                    <div className="text-sm text-[#38473e] leading-relaxed bg-[#fdfbf7] p-4 rounded-xl border border-[#ede7dc]">
                      {activePose.teacherCues}
                    </div>
                  ) : (
                    <div className="space-y-3 bg-[#fdfbf7] p-4 rounded-xl border border-[#ede7dc] text-sm text-[#38473e]">
                      <p>
                        <strong>1. Grounding Blueprint:</strong> Distribute weight evenly across the four corners of contact with the mat (big toe ball, little toe ball, inner heel, outer heel).
                      </p>
                      <p>
                        <strong>2. Spine Neutrality:</strong> Avoid collapsing into the lumbar spine. Engage the deep transverse abdominals and maintain ears stacked over shoulders.
                      </p>
                      <p>
                        <strong>3. Gaze &amp; Drishti:</strong> Fasten eyes on a stationary focal point directly ahead to stabilize neuromuscular balance.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Modifications & Props */}
              {activeTab === "modifications" && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-[#1b4332]">
                    Adaptive Modifications &amp; Props
                  </h3>
                  {activePose.modifications ? (
                    <div className="text-sm text-[#38473e] leading-relaxed bg-[#fdfbf7] p-4 rounded-xl border border-[#ede7dc]">
                      {activePose.modifications}
                    </div>
                  ) : (
                    <div className="space-y-2 bg-[#fdfbf7] p-4 rounded-xl border border-[#ede7dc] text-sm text-[#38473e]">
                      <p>&bull; <strong>Wall Support:</strong> Practice within arm&apos;s reach of a wall to steady your equilibrium.</p>
                      <p>&bull; <strong>Blocks:</strong> Place a foam or cork yoga block under your hands or pelvis to bring the ground up to your comfort level.</p>
                      <p>&bull; <strong>Straps:</strong> Use a cotton strap around the ball of the foot to bridge tight hamstrings and avoid rounding the upper back.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 4: Anatomical Benefits */}
              {activeTab === "benefits" && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-[#1b4332]">
                    Health Benefits &amp; Physiological Focus
                  </h3>
                  {activePose.benefits ? (
                    <div className="text-sm text-[#38473e] leading-relaxed bg-[#fdfbf7] p-4 rounded-xl border border-[#ede7dc]">
                      {activePose.benefits}
                    </div>
                  ) : (
                    <p className="text-sm text-[#38473e] leading-relaxed bg-[#fdfbf7] p-4 rounded-xl border border-[#ede7dc]">
                      {activePose.shortFact} Cultivates proprioceptive awareness, strengthens foundational stabilization muscles, and balances sympathetic and parasympathetic nervous responses.
                    </p>
                  )}
                </div>
              )}

              {/* Test Recall Link Card */}
              <div className="mt-8 pt-6 border-t border-[#ede7dc] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fbf9f5] -mx-6 -mb-6 p-6 rounded-b-2xl">
                <div>
                  <h4 className="text-sm font-bold text-[#1b4332]">
                    Ready to verify your memory?
                  </h4>
                  <p className="text-xs text-[#5c6b61]">
                    Test your recognition of {activePose.englishName} ({activePose.sanskritName}) in a quick 10-question drill.
                  </p>
                </div>
                <Link href={`/play?tier=${quizTier}&prompt=english`}>
                  <Button variant="primary" size="sm" className="gap-2 font-bold whitespace-nowrap">
                    <span>Quiz This Tier ({POSES_BY_TIER[quizTier].length})</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center p-12 bg-white border border-[#ded5c5] rounded-2xl mb-8">
          <p className="text-base font-bold text-[#1b4332]">No postures match your filter.</p>
          <p className="text-xs text-[#5c6b61] mt-1">Try clearing your search query or switching category tabs.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory("all");
              setSelectedTier("all");
              setOnlyMissed(false);
              setSearchQuery("");
            }}
            className="mt-4"
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* Visual Asana Ribbon / Quick Navigation Gallery */}
      {filteredPoses.length > 0 && (
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-sm text-[#1b4332] flex items-center gap-2">
            <span>Curriculum Gallery</span>
            <span className="font-mono text-xs font-normal text-[#5c6b61]">
              ({filteredPoses.length} Postures Available)
            </span>
          </h3>
          <span className="text-[11px] font-mono text-[#5c6b61]">
            Click any posture to teach &amp; inspect
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 max-h-72 overflow-y-auto p-2 bg-[#ffffff] border border-[#ded5c5] rounded-xl">
          {filteredPoses.map((p) => {
            const isSelected = p.id === activePose?.id;
            const isMissed = missedPoseIds.has(p.id);
            return (
              <button
                key={p.id}
                onClick={() => {
                  setActivePoseId(p.id);
                  window.scrollTo({ top: 120, behavior: "smooth" });
                }}
                className={`flex flex-col items-center p-2 rounded-xl border text-center transition-all cursor-pointer relative ${
                  isSelected
                    ? "border-[#1b4332] bg-[#f4efe8] ring-2 ring-[#1b4332]/30 shadow-xs"
                    : "border-[#ede7dc] bg-[#faf7f2]/50 hover:bg-[#ffffff] hover:border-[#ded5c5]"
                }`}
              >
                {isMissed && (
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#a34828]" title="Previously missed in quiz" />
                )}
                <div className="h-16 w-16 relative flex items-center justify-center overflow-hidden mb-1.5">
                  <img
                    src={p.image}
                    alt={p.englishName}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#1b4332] line-clamp-1 w-full">
                  {p.englishName}
                </span>
                <span className="text-[9px] font-serif italic text-[#a34828] line-clamp-1 w-full">
                  {p.sanskritName}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#1b4332] border-r-transparent" />
        </div>
      }
    >
      <PracticeStudio />
    </Suspense>
  );
}
