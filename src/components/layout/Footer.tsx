import React from "react";
import Link from "next/link";
import { ALL_POSES, ATLAS_POSES } from "@/data/poses";

export function Footer() {
  return (
    <footer suppressHydrationWarning className="mt-auto border-t border-[#e4ddd3] bg-[#f3eee5] py-10 text-[#5c6b61]">
      <div suppressHydrationWarning className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-xs sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div suppressHydrationWarning className="space-y-1.5 max-w-md">
          <p className="font-serif text-sm font-bold text-[#1a241e]">Yoga Bliss</p>
          <p className="leading-relaxed">
            A focused visual recall tool for yoga practitioners, teacher trainees, and curious students.
            Transliterations follow standard International Alphabet of Sanskrit Transliteration (IAST).
          </p>
          <p className="font-mono text-[11px] text-[#87361a] pt-1">
            Free • Open-source • Runs offline
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 font-medium">
          <div className="space-y-1">
            <p className="text-[10px] tracking-wider uppercase text-[#1a241e] font-bold">Modes</p>
            <ul className="space-y-1">
              <li>
                <Link href="/play" className="hover:text-[#1a241e]">
                  Classic 10-Question Drill
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-[#1a241e]">
                  Practice &amp; Teaching Room
                </Link>
              </li>
              <li>
                <Link href="/play?mode=adaptive" className="hover:text-[#1a241e]">
                  Weak Poses Drill
                </Link>
              </li>
              <li>
                <Link href="/camera-challenge" className="hover:text-[#1a241e]">
                  Optical Camera Lab
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] tracking-wider uppercase text-[#1a241e] font-bold">Reference</p>
            <ul className="space-y-1">
              <li>
                <Link href="/atlas" className="hover:text-[#1a241e]">
                  Illustrated Asana Atlas ({ATLAS_POSES.length} Postures)
                </Link>
              </li>
              <li>
                <Link href="/#atlas" className="hover:text-[#1a241e]">
                  Directory Table ({ALL_POSES.length} Postures)
                </Link>
              </li>
              <li>
                <Link href="/#journal" className="hover:text-[#1a241e]">
                  Local Study Journal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
