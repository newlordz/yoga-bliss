"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";

const HOLD_TARGET_MS = 1500;
const HOLD_TICK_MS = 100;

export default function CameraChallengePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const elapsedRef = useRef(0);

  const [hasCameraSupport, setHasCameraSupport] = useState<boolean | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [permissionError, setPermissionError] = useState<string | null>(null);

  // Challenge hold state
  const [holdProgressMs, setHoldProgressMs] = useState(0);
  const [isChallengeSuccess, setIsChallengeSuccess] = useState(false);

  // Check camera support on mount
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      const isSupported =
        typeof navigator !== "undefined" &&
        typeof navigator.mediaDevices?.getUserMedia === "function";
      setHasCameraSupport(isSupported);
    });

    return () => {
      cancelAnimationFrame(handle);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsCameraActive(false);
    elapsedRef.current = 0;
    setHoldProgressMs(0);
  }, []);

  const startHoldTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    elapsedRef.current = 0;
    timerRef.current = setInterval(() => {
      elapsedRef.current = Math.min(elapsedRef.current + HOLD_TICK_MS, HOLD_TARGET_MS);
      setHoldProgressMs(elapsedRef.current);
      if (elapsedRef.current < HOLD_TARGET_MS) return;
      clearInterval(timerRef.current!);
      timerRef.current = null;
      setIsChallengeSuccess(true);
    }, HOLD_TICK_MS);
  }, []);

  const startCamera = async () => {
    setPermissionError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: "user",
        },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setIsCameraActive(true);
      startHoldTimer();
    } catch (err: unknown) {
      console.error("Camera access error:", err);
      const message =
        err instanceof Error && err.name === "NotAllowedError"
          ? "Camera permission was denied. You can still use all standard quiz modes without video."
          : "Unable to start camera preview. Please check camera availability.";
      setPermissionError(message);
      stopCamera();
    }
  };

  const resetChallenge = () => {
    setIsChallengeSuccess(false);
    setHoldProgressMs(0);
    if (isCameraActive) startHoldTimer();
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* Navigation & Header */}
      <div className="mb-6 flex items-baseline justify-between border-b border-[#e4ddd3] pb-3">
        <Link href="/" className="font-mono text-xs uppercase tracking-wider text-[#a34828] hover:underline">
          &larr; Back to Index
        </Link>
        <span className="font-mono text-[11px] text-[#5c6b61]">
          TIMED HOLD / PREVIEW ONLY
        </span>
      </div>

      <div className="border border-[#ded5c5] bg-[#ffffff] p-6 sm:p-8 rounded-md">
        <div className="mb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a34828]">
            Posture Lab
          </p>
          <h1 className="font-serif text-2xl font-normal sm:text-3xl text-[#1a241e] mt-1">
            Tree Pose Balance Hold (Vrksasana)
          </h1>
          <p className="mt-1 text-xs text-[#5c6b61] leading-relaxed">
            Timed balance hold with a local mirror preview. Joint-angle detection is not enabled in this build.
          </p>
        </div>

        {/* Technical Privacy Note */}
        <div className="mb-6 rounded-md border border-[#e4ddd3] bg-[#faf7f2] p-4 text-xs text-[#5c6b61] space-y-1">
          <p className="font-mono text-[10px] text-[#1a241e] uppercase font-bold">
            Data &amp; Physical Safety Notice
          </p>
          <p>
            • Video stays in browser memory. No frames are analysed, stored, or transmitted.
          </p>
          <p>
            • The timer only measures how long the preview ran. This is not alignment instruction or physical therapy.
          </p>
        </div>

        {/* Browser Capability Fallback */}
        {hasCameraSupport === false && (
          <div className="rounded-md border border-[#a34828] bg-[#faf7f2] p-5 text-center text-[#1a241e]">
            <p className="font-serif text-sm font-bold">Camera Unsupported in this Browser</p>
            <p className="text-xs text-[#5c6b61] mt-1">
              Your browser does not expose mediaDevices API. The flashcard quiz is available on all platforms.
            </p>
            <div className="mt-4">
              <Link href="/play">
                <Button variant="primary" size="sm">
                  Run Standard Quiz
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Camera Permission Error */}
        {permissionError && (
          <div className="mb-6 rounded-md border border-[#a34828] bg-[#faf7f2] p-4 text-xs text-[#a34828]">
            <p className="font-bold">Camera Permission Notice</p>
            <p className="mt-0.5">{permissionError}</p>
          </div>
        )}

        {/* Video Preview */}
        {hasCameraSupport && (
          <div className="space-y-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-[#1a241e] border border-[#26332b] flex items-center justify-center">
              <video
                ref={videoRef}
                playsInline
                muted
                className={`h-full w-full object-cover transform -scale-x-100 ${
                  isCameraActive ? "block" : "hidden"
                }`}
              />

              {!isCameraActive && (
                <div className="text-center p-6 text-[#e8e0d2]">
                  <p className="font-serif text-base font-medium">Camera Feed Inactive</p>
                  <p className="font-mono text-xs text-[#c4b9a7] mt-1 max-w-sm">
                    Position your device so full head-to-toe standing posture is visible.
                  </p>
                </div>
              )}

              {isCameraActive && (
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between rounded bg-black/75 px-3 py-1.5 font-mono text-[11px] text-[#faf7f2]">
                  <span>MIRROR PREVIEW</span>
                  <span>HOLD: {(holdProgressMs / 1000).toFixed(1)}s / {(HOLD_TARGET_MS / 1000).toFixed(1)}s</span>
                </div>
              )}
            </div>

            {/* Hold Progress */}
            {isCameraActive && (
              <div className="space-y-2">
                <ProgressBar
                  value={holdProgressMs}
                  max={HOLD_TARGET_MS}
                  label="Stability Hold (1.5s)"
                  showPercent
                />
                <p className="font-mono text-xs text-[#1f3a2b] text-center">
                  Hold Vrksasana beside the preview until the timer completes.
                </p>
              </div>
            )}

            {/* Success Notification */}
            {isChallengeSuccess && (
              <div className="rounded-md border border-[#4d7358] bg-[#faf7f2] p-5 text-center">
                <h3 className="font-serif text-lg font-bold text-[#1a241e]">Hold Completed</h3>
                <p className="text-xs text-[#5c6b61] mt-1">
                  You balanced for 1.5 seconds. Nothing was measured — keep the pose honest by counting your own steadiness.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <Button variant="primary" size="sm" onClick={resetChallenge}>
                    Test Hold Again
                  </Button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              {!isCameraActive ? (
                <Button
                  variant="primary"
                  size="md"
                  onClick={startCamera}
                  fullWidth
                  className="sm:w-auto text-xs uppercase tracking-wider font-semibold"
                >
                  Start Camera Feed
                </Button>
              ) : (
                <Button
                  variant="terracotta"
                  size="sm"
                  onClick={stopCamera}
                  className="text-xs uppercase tracking-wider"
                >
                  Stop Camera Feed
                </Button>
              )}

              <Link href="/play" className="font-mono text-xs text-[#5c6b61] hover:text-[#1a241e]">
                Switch to Quiz Mode &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
