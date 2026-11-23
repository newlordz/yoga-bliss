# Yoga Bliss — Release & Deployment Checklist

This document details the pre-deployment, deployment, and post-deployment smoke tests for **Yoga Bliss**.

---

## 1. Pre-Deployment Verifications

- [x] **Lint & Types**: `npm run lint` passes with 0 warnings and 0 errors.
- [x] **Unit & Invariant Tests**: `npm test` runs 15+ automated tests covering:
  - Quiz generation invariants (10 questions, 4 unique choices, no duplicate target poses).
  - Scoring & streak logic (+100 XP base, +50 XP on 3rd streak, +300 XP perfect round).
  - Pose content layer validation (all 10 beginner poses, slugs, facts, alt texts).
  - LocalStorage progression & SSR safety.
  - Cloud progress pure merge algorithm (never decreases XP/accuracy/mastery).
  - Tree Pose synthetic geometric analysis.
- [x] **Production Build**: `npm run build` succeeds cleanly under Next.js Turbopack.
- [x] **Zero Secrets in Repository**: No `.env` files or API secrets are committed. `.env.example` provides documentation for optional Supabase configuration.
- [x] **Asset Fallback Verified**: In the absence of local raster images, SVG vector geometric illustrations render seamlessly without broken images.

---

## 2. Environment Configuration

| Variable | Required? | Purpose |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Supabase project URL for cloud progress sync. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional | Supabase anonymous public client key. |

*Note: When neither variable is set, Yoga Bliss operates completely and without errors in offline/local-only mode.*

---

## 3. Post-Deployment Smoke Test Script

1. **Landing Page (`/`)**:
   - Verify hero renders, typography and earthy color scheme display properly.
   - Verify "Start Playing" button navigates to `/play`.
   - Verify local stats cards display cleanly.
2. **Game Arena (`/play`)**:
   - Question counter displays "Question 1 of 10".
   - Pose illustration renders with zero layout shift.
   - Click answer choice: verifies button locks immediately, preventing double-clicks.
   - Immediate feedback announces correct/incorrect and shows Sanskrit name and short fact.
   - Click "Continue": progresses to Question 2.
   - Complete 10 questions: results screen displays with accurate score, percentage, and encouraging feedback.
3. **Replay & Progression**:
   - Click "Play Again" or "Back Home".
   - Return to Home page and verify Lifetime XP, Rounds, and Best Accuracy updated.
4. **Adaptive Practice**:
   - Start round via "Practice Weak Poses".
   - Verifies adaptive banner is displayed and poses with highest mistake ratio are prioritized.
5. **Camera Lab (`/camera-challenge`)**:
   - Verifies camera permission disclaimer is visible.
   - Camera activation works when permission is granted; gracefully informs user if camera is unavailable or denied.
   - MediaStream tracks completely stop when clicking "Stop Camera" or navigating away.
