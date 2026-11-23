import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header suppressHydrationWarning className="w-full border-b border-[#e4ddd3] bg-[#faf7f2]/95 backdrop-blur-xs">
      <div suppressHydrationWarning className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div suppressHydrationWarning className="flex items-baseline gap-3">
          <Link
            href="/"
            className="group flex items-baseline gap-2 font-serif text-xl font-bold tracking-tight text-[#1a241e] hover:text-[#1f3a2b]"
            aria-label="Yoga Bliss Home"
          >
            <span>Yoga Bliss</span>
          </Link>
        </div>

        <nav aria-label="Main Navigation" className="flex items-center gap-1 sm:gap-4 text-xs font-medium tracking-wide uppercase">
          <Link
            href="/play"
            className="rounded px-2.5 py-1 text-[#1a241e] hover:bg-[#f3eee5] transition-colors"
          >
            Start Quiz
          </Link>
          <Link
            href="/atlas"
            className="rounded px-2.5 py-1 text-[#1a241e] hover:bg-[#f3eee5] transition-colors"
          >
            Pose Atlas
          </Link>
          <Link
            href="/practice"
            className="rounded px-2.5 py-1 text-[#5c6b61] hover:text-[#1a241e] hover:bg-[#f3eee5] transition-colors"
          >
            Practice Room
          </Link>
          <Link
            href="/camera-challenge"
            className="hidden sm:inline-block rounded px-2.5 py-1 text-[#a34828] hover:bg-[#f3eee5] transition-colors"
          >
            Camera Lab
          </Link>
          <Link
            href="/#journal"
            className="rounded px-2.5 py-1 text-[#5c6b61] hover:text-[#1a241e] hover:bg-[#f3eee5] transition-colors"
          >
            Progress
          </Link>
        </nav>
      </div>
    </header>
  );
}
