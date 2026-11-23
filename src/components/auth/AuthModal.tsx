"use client";

import React, { useState } from "react";
import {
  signUpUser,
  loginUser,
  logoutUser,
  useCurrentUser,
  SafeUser,
  mergeGuestProgressIntoUser,
} from "@/lib/auth";
import { getLocalProgress } from "@/lib/progression";
import { playClick } from "@/lib/audio";
import { Button } from "@/components/ui/Button";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
  onSuccess?: (user: SafeUser) => void;
  guestPointsToClaim?: number;
}

export function AuthModal({
  isOpen,
  onClose,
  initialMode = "signup",
  onSuccess,
  guestPointsToClaim = 0,
}: AuthModalProps) {
  const currentUser = useCurrentUser();
  const [mode, setMode] = useState<"login" | "signup">(initialMode);

  // Form inputs - strictly empty by default with no prefilled values
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (mode === "signup") {
        const res = await signUpUser({
          username,
          displayName: displayName || undefined,
          email: email || undefined,
          password,
        });

        if (!res.success || !res.user) {
          setError(res.error || "Failed to create account.");
          setIsLoading(false);
          return;
        }

        // Merge guest points into newly registered account
        const guestProgress = getLocalProgress();
        if (guestProgress.lifetimeXP > 0) {
          mergeGuestProgressIntoUser(res.user.id, guestProgress);
        }

        playClick();
        if (onSuccess) onSuccess(res.user);
        onClose();
      } else {
        const res = await loginUser(username, password);

        if (!res.success || !res.user) {
          setError(res.error || "Failed to sign in.");
          setIsLoading(false);
          return;
        }

        playClick();
        if (onSuccess) onSuccess(res.user);
        onClose();
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    playClick();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141f18]/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-md rounded-lg border border-[#ded5c5] bg-[#faf7f2] p-6 shadow-xl text-[#1a241e]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xs font-mono text-[#5c6b61] hover:text-[#1a241e] cursor-pointer"
          aria-label="Close dialog"
        >
          ✕ [ESC]
        </button>

        {/* If user is already logged in, show Profile Card */}
        {currentUser ? (
          <div>
            <div className="text-center mb-6">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f3a2b] text-xl text-[#faf7f2]">
                🧘
              </div>
              <h2 id="auth-modal-title" className="font-serif text-2xl font-bold">
                {currentUser.displayName}
              </h2>
              <p className="font-mono text-xs text-[#5c6b61]">@{currentUser.username}</p>
            </div>

            <div className="rounded-md border border-[#ded5c5] bg-[#ffffff] p-4 mb-6 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#5c6b61]">Lifetime XP:</span>
                <strong className="font-mono text-sm text-[#a34828]">
                  {currentUser.progress.lifetimeXP} XP
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5c6b61]">Rounds Completed:</span>
                <strong className="font-mono">{currentUser.progress.roundsPlayed}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5c6b61]">Best Accuracy:</span>
                <strong className="font-mono">{currentUser.progress.bestAccuracy}%</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5c6b61]">Trophies Unlocked:</span>
                <strong className="font-mono">
                  {currentUser.progress.unlockedAchievements?.length || 0}
                </strong>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={handleLogout}
                className="text-xs uppercase"
              >
                Sign Out (Switch to Guest)
              </Button>
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={onClose}
                className="text-xs uppercase"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {/* Guest Points Notice */}
            {guestPointsToClaim > 0 && (
              <div className="mb-4 p-3 rounded-md border border-[#a34828]/30 bg-[#fbf3ef] text-xs">
                <p className="font-bold text-[#a34828]">
                  🎯 Bank Your +{guestPointsToClaim} XP
                </p>
                <p className="text-[11px] text-[#38473e] mt-0.5">
                  Create an account or sign in to permanently bank this round&apos;s points and save your streak!
                </p>
              </div>
            )}

            {/* Mode Switch Tabs */}
            <div className="flex border-b border-[#ded5c5] mb-5">
              <button
                type="button"
                onClick={() => {
                  setMode("signup");
                  setError(null);
                }}
                className={`flex-1 py-2 text-center text-xs font-mono uppercase tracking-wider font-semibold border-b-2 cursor-pointer transition-colors ${
                  mode === "signup"
                    ? "border-[#1f3a2b] text-[#1f3a2b]"
                    : "border-transparent text-[#5c6b61] hover:text-[#1a241e]"
                }`}
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setError(null);
                }}
                className={`flex-1 py-2 text-center text-xs font-mono uppercase tracking-wider font-semibold border-b-2 cursor-pointer transition-colors ${
                  mode === "login"
                    ? "border-[#1f3a2b] text-[#1f3a2b]"
                    : "border-transparent text-[#5c6b61] hover:text-[#1a241e]"
                }`}
              >
                Sign In
              </button>
            </div>

            <div className="mb-4">
              <h2 id="auth-modal-title" className="font-serif text-xl font-bold">
                {mode === "signup" ? "Create Player Profile" : "Welcome Back"}
              </h2>
              <p className="text-xs text-[#5c6b61] mt-0.5">
                {mode === "signup"
                  ? "Required to bank points, track mastery, and unlock trophies."
                  : "Sign in to access your saved XP, streaks, and trophies."}
              </p>
            </div>

            {error && (
              <div className="mb-4 rounded border border-[#a34828] bg-[#fbf3ef] p-2.5 text-xs text-[#a34828]">
                {error}
              </div>
            )}

            <form key={mode} onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-mono text-[11px] uppercase text-[#5c6b61] mb-1">
                  Username <span className="text-[#a34828]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  className="w-full rounded border border-[#ded5c5] bg-[#ffffff] px-3 py-2 text-sm text-[#1a241e] focus:border-[#1f3a2b] focus:outline-hidden"
                />
              </div>

              {mode === "signup" && (
                <>
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-[#5c6b61] mb-1">
                      Display Name <span className="text-gray-400 font-sans normal-case">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      autoComplete="off"
                      autoCapitalize="none"
                      spellCheck={false}
                      className="w-full rounded border border-[#ded5c5] bg-[#ffffff] px-3 py-2 text-sm text-[#1a241e] focus:border-[#1f3a2b] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase text-[#5c6b61] mb-1">
                      Email <span className="text-gray-400 font-sans normal-case">(optional)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                      autoCapitalize="none"
                      spellCheck={false}
                      className="w-full rounded border border-[#ded5c5] bg-[#ffffff] px-3 py-2 text-sm text-[#1a241e] focus:border-[#1f3a2b] focus:outline-hidden"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block font-mono text-[11px] uppercase text-[#5c6b61] mb-1">
                  Password <span className="text-[#a34828]">*</span>
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="w-full rounded border border-[#ded5c5] bg-[#ffffff] px-3 py-2 text-sm text-[#1a241e] focus:border-[#1f3a2b] focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  fullWidth
                  disabled={isLoading}
                  className="text-xs uppercase tracking-wider font-bold"
                >
                  {isLoading
                    ? "Processing..."
                    : mode === "signup"
                    ? "Register & Bank Points"
                    : "Sign In"}
                </Button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-[#ded5c5] text-center">
              <p className="font-mono text-[10px] text-[#5c6b61]">
                100% Offline • Credentials encrypted safely on your device
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
