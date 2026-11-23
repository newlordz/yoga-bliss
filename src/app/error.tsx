"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { SiteChrome } from "@/components/layout/SiteChrome";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Yoga Bliss runtime error:", error);
  }, [error]);

  return (
    <SiteChrome>
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="max-w-md w-full border border-[#a34828] bg-[#ffffff] p-8 rounded-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[#a34828]">
          Runtime Interrupt
        </p>
        <h2 className="font-serif text-2xl font-normal text-[#1a241e] mt-1 mb-2">
          An error occurred
        </h2>
        <p className="text-xs text-[#5c6b61] mb-6">
          The session hit an unexpected state. Your local study records have not been affected.
        </p>

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="sm"
            onClick={() => reset()}
            className="text-xs uppercase tracking-wider"
          >
            Reset Session
          </Button>
        </div>
      </div>
    </div>
    </SiteChrome>
  );
}
