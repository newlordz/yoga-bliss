import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Yoga Bliss — Learn Yoga Poses & Sanskrit in Playful Harmony",
  description:
    "An accessible, calm, and playful web game teaching yoga learners to associate yoga postures with English and Sanskrit names through positive feedback loops.",
  keywords: ["yoga", "yoga game", "learn yoga", "sanskrit poses", "asana practice", "yoga bliss"],
  authors: [{ name: "Yoga Bliss Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const removeExtAttrs = (node) => {
                    if (node && node.nodeType === 1) {
                      ['bis_skin_checked', 'bis_register', 'crxlauncher', 'crxlauncher-bridged', '__processed_0d8d68a0-16e3-4806-8a60-23aaf017261f__'].forEach(attr => {
                        if (node.hasAttribute && node.hasAttribute(attr)) node.removeAttribute(attr);
                      });
                    }
                  };
                  const observer = new MutationObserver((mutations) => {
                    for (let i = 0; i < mutations.length; i++) {
                      const m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName) {
                        if (m.attributeName.startsWith('bis_') || m.attributeName.startsWith('crxlauncher') || m.attributeName.startsWith('__processed_')) {
                          m.target.removeAttribute(m.attributeName);
                        }
                      } else if (m.type === 'childList') {
                        m.addedNodes.forEach(removeExtAttrs);
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    subtree: true,
                    attributes: true,
                    childList: true,
                    attributeFilter: ['bis_skin_checked', 'bis_register', 'crxlauncher', 'crxlauncher-bridged']
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col antialiased selection:bg-[#52b788]/20 selection:text-[#1b4332]"
      >
        {children}
      </body>
    </html>
  );
}
