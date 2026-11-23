import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SiteChrome } from "@/components/layout/SiteChrome";

export default function NotFound() {
  return (
    <SiteChrome>
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="max-w-md w-full border border-[#ded5c5] bg-[#ffffff] p-8 rounded-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[#a34828]">
          404 / Missing Route
        </p>
        <h1 className="font-serif text-2xl font-normal text-[#1a241e] mt-1 mb-2">
          Page Not Located
        </h1>
        <p className="text-xs text-[#5c6b61] mb-6">
          The requested page or pose reference is not currently cataloged in this edition.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Link href="/">
            <Button variant="outline" size="sm" className="w-full text-xs uppercase tracking-wider">
              Return to Index
            </Button>
          </Link>
          <Link href="/play">
            <Button variant="primary" size="sm" className="w-full text-xs uppercase tracking-wider">
              Start Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
    </SiteChrome>
  );
}
