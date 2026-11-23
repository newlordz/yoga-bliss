# Yoga Bliss 🧘‍♀️✨

Yoga Bliss is an accessible, modern educational web game that teaches learners to associate yoga postures with their English and Sanskrit names through positive feedback loops, streaks, achievements, adaptive practice, and computer-vision posture recognition.

---

## Features

- **Name That Pose**: 10-question rounds with 4 distinct choices, anti-double-scoring guards, and immediate Sanskrit etymology feedback.
- **Earthy Visual Aesthetic**: Grounded color palette (deep forest green, fresh leaf green, warm cream, terracotta accent), large touch targets, and high text contrast.
- **Pure Game Engine**: Testable, deterministic quiz generation, streak bonuses, and perfect round rewards.
- **Adaptive Practice Mode**: Automatically detects poses with high mistake frequencies and serves focused practice sessions.
- **Local-First & SSR Safe**: All player progression is saved in `localStorage` with resilient error handling and zero server hydration mismatches.
- **Optional Supabase Cloud Sync**: Production-ready SQL migration and pure merge logic that never decreases XP or mastery.
- **Experimental Camera Lab**: In-browser client-only posture landmark balance challenge (Vrksasana / Tree Pose) with zero camera recordings stored or uploaded.
- **WCAG 2.2 AA Accessible**: Full keyboard navigation, `aria-live` screen-reader feedback, and `prefers-reduced-motion` compliance.

---

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Running Automated Verification

```bash
npm test            # Run pure logic invariant and geometry tests
npm run lint        # Run ESLint checks
npm run build       # Build Next.js production bundle with Turbopack
```

---

## Pose Assets & Licensing

Pose illustrations are mapped to IDs in `public/poses/`. The application includes graceful vector fallback illustrations (`PoseIllustration.tsx`), so it renders cleanly even without external image files.

To provide custom photography or artwork:

1. Place assets inside `public/poses/` matching the pose IDs (e.g., `mountain.svg`, `tree.svg`, `warrior-ii.svg`).
2. Ensure assets are appropriately licensed (CC0 or licensed for digital distribution).

---

## Deployment to Vercel

Yoga Bliss is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Connect the Git repository to Vercel.
2. The framework preset is automatically detected as **Next.js**.
3. (Optional) Provide `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` if cloud authentication is desired.
4. Deploy!
