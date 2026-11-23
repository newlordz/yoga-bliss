<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Permanent Development & UX Principles (Learned from User Feedback)

1. **Player & User Identity (Real Human Names)**:
   - NEVER restrict usernames/player names to Unix alphanumeric patterns (`^[a-z0-9_-]+$`). Real users type full names with spaces (e.g. `Enoch Essel`), international characters, and dots.
   - Always allow spaces in usernames, normalize multiple spaces, and match case-insensitively with or without spaces on login.

2. **Immediate Live Feedback (No Deferred Updates)**:
   - When points, XP, or rewards are earned (such as answering a question correctly), save and broadcast that progress *immediately in real-time*.
   - Never wait until the end of a round or session to bank points. Header badges, level tags, and user stats must reflect earned points the exact instant they occur.
   - Always dispatch reactive state events (`yoga_bliss_auth_change_v1`) so all subscribed UI components (header, profile, cards) re-render immediately.

3. **Viewport & Screen Stability (Zero Unwanted Scrolling)**:
   - Never programmatically `.focus()` an expanding or newly mounted element if it causes the browser to auto-scroll and push game cards or posture illustrations out of the user's viewport.
   - Blur clicked answer buttons (`document.activeElement.blur()`) on selection to prevent the browser from scrolling down.
   - Use scroll position locking (`lockScrollPosition`) so answering questions or proceeding does not cause layout jumps.
   - Size interactive game arenas compactly (`h-36 sm:h-44` for illustrations) so that the entire card, all options, and feedback stay fully in view on standard laptop displays (e.g. 768px height).

4. **Visual Positioning & Element Polish**:
   - For critical in-element controls (such as show/hide password eye buttons), use explicit CSS positioning (`position: absolute; right: 10px; top: 50%; transform: translateY(-50%)`) to guarantee the icon sits perfectly vertically centered inside the input rather than overflowing or dropping below.
   - Always add appropriate padding (`paddingRight: 2.75rem`) to the input so text never overlaps with interior icons.

5. **Pristine Form States (No Prefilled Assumptions)**:
   - Profile creation and authentication forms must start completely empty with `autoComplete="off"` and NO ghost/sample placeholder text unless explicitly requested by the user.

