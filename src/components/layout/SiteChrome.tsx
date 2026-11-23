import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * Site header/footer wrapper. `/game` renders without it, so it lives here
 * instead of the root layout.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1" suppressHydrationWarning>
        {children}
      </main>
      <Footer />
    </>
  );
}
