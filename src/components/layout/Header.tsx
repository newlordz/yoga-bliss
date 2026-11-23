"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCurrentUser } from "@/lib/auth";
import { AuthModal } from "@/components/auth/AuthModal";

export function Header() {
  const currentUser = useCurrentUser();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

  const handleOpenAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
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

          <div className="flex items-center gap-2 sm:gap-4">
            <nav aria-label="Main Navigation" className="flex items-center gap-1 sm:gap-3 text-xs font-medium tracking-wide uppercase">
              <Link
                href="/play"
                className="rounded px-2 py-1 text-[#1a241e] hover:bg-[#f3eee5] transition-colors"
              >
                Start Quiz
              </Link>
              <Link
                href="/atlas"
                className="rounded px-2 py-1 text-[#1a241e] hover:bg-[#f3eee5] transition-colors"
              >
                Pose Atlas
              </Link>
              <Link
                href="/practice"
                className="hidden md:inline-block rounded px-2 py-1 text-[#5c6b61] hover:text-[#1a241e] hover:bg-[#f3eee5] transition-colors"
              >
                Practice Room
              </Link>
              <Link
                href="/camera-challenge"
                className="hidden lg:inline-block rounded px-2 py-1 text-[#a34828] hover:bg-[#f3eee5] transition-colors"
              >
                Camera Lab
              </Link>
              <Link
                href="/#journal"
                className="rounded px-2 py-1 text-[#5c6b61] hover:text-[#1a241e] hover:bg-[#f3eee5] transition-colors"
              >
                Progress
              </Link>
            </nav>

            {/* Account Profile Badge / Sign In Trigger */}
            <div className="border-l border-[#e4ddd3] pl-2 sm:pl-3">
              {currentUser ? (
                <button
                  onClick={() => handleOpenAuth("login")}
                  className="flex items-center gap-1.5 rounded-full border border-[#ded5c5] bg-[#ffffff] px-2.5 py-1 text-xs font-medium text-[#1a241e] hover:border-[#1f3a2b] hover:bg-[#f3eee5] cursor-pointer transition-colors"
                  title="View Player Profile"
                >
                  <span className="text-sm">🧘</span>
                  <span className="max-w-[80px] sm:max-w-[120px] truncate font-serif font-bold">
                    {currentUser.displayName}
                  </span>
                  <span className="font-mono text-[10px] text-[#a34828] font-bold">
                    {currentUser.progress.lifetimeXP} XP
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => handleOpenAuth("signup")}
                  className="flex items-center gap-1 rounded border border-[#a34828]/40 bg-[#fbf3ef] px-2.5 py-1 text-[11px] font-mono uppercase font-bold text-[#a34828] hover:bg-[#a34828] hover:text-[#faf7f2] cursor-pointer transition-colors"
                  title="Sign up or log in to bank points and save progress"
                >
                  <span>👤</span>
                  <span className="hidden sm:inline">Sign In / Register</span>
                  <span className="sm:hidden">Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}
