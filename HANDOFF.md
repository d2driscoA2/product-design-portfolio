# Session Handoff — April 19, 2026

## Site Status: LIVE

displayedux.com is deployed and current. All writing-section work from the past two sessions is live.

---

## CRITICAL OPERATING RULES FOR THIS REPO

Read these before touching git. These are learned the hard way.

### 1. Platform is Netlify — NOT Vercel

- Platform: **Netlify**, project `visionary-swan-5893aa`
- Production branch: **`design-v2`** — auto-deploys to displayedux.com on every push
- `main` branch: placeholder only — single "Initial commit", not wired to any deploy. **Never push to main.**
- To ship: push to `origin/design-v2`. That's it.

### 2. `git commit` is permanently broken in this repo

`git commit` hangs indefinitely every time. Do not attempt it. Do not retry it with flags.

**Always use plumbing instead:**

```bash
# Stage your files first with git add
git add <files>

# Then:
TREE=$(git write-tree)
COMMIT=$(git commit-tree $TREE -p HEAD -m "your message here")
git update-ref refs/heads/design-v2 $COMMIT
git push origin design-v2
```

### 3. Git deadlock protocol

Symptom: any git command hangs with no output. The index lock exists and stale processes have piled up.

Fix (always in this order):
```bash
pkill -9 git
rm -f .git/index.lock
# now proceed with plumbing commands above
```

Root cause: Claude Code's hooks system runs `git status --porcelain` as a background process on every tool call. When git hangs, a new process piles up behind the lock. Over a long session, dozens accumulate and nothing can proceed.

Prevention: once you've killed and cleared once, avoid `git status`, `git checkout`, `git merge` — they all trigger the same lock contention. Use plumbing and `git rev-parse` / `git log` / `git show` for read operations.

### 4. Never `git checkout` between branches

`git checkout main` (or any branch) hangs in this repo. Use `git update-ref` to move refs directly.

---

## What Was Built — Last Two Sessions (April 2026)

### Writing Section (blog) — design-v2

All five blog posts are wired. The writing section includes:

| Component | File | Purpose |
|---|---|---|
| `WritingCardThumb` | `components/blog/WritingCardThumb.tsx` | On-brand thumbnail for writing index cards — royal blue, brand logo mark, stats |
| `WritingHero` | `components/blog/WritingHero.tsx` | Article page hero — same composition as thumb, with hero image fade |
| `TerminalHero` | `components/blog/TerminalHero.tsx` | Animated Claude Code terminal for Post 1 article page |
| `PostHero` | `components/blog/PostHero.tsx` | Generic article hero fallback |
| `Avatar` | `components/blog/Avatar.tsx` | Author avatar component |
| `blogPosts` | `lib/blog-posts.ts` | Registry of all 5 blog posts with metadata, stats, images |

### TerminalHero — React Strict Mode fix (commit `4a81ea3`)

The terminal animation was double-rendering in dev (React Strict Mode) and freezing in Safari.

Three-layer fix applied and committed:
1. `mountedRef = useRef(false)` guard at top of animation `useEffect` — prevents second invocation from spawning a parallel loop
2. Per-invocation `let cancelled = false` (local, not shared ref) — isolates async closures
3. `let tickId` + `clearTimeout(tickId)` in cleanup — stops orphaned 60ms poll chains in Safari

Cleanup function:
```tsx
return () => {
  cancelled = true
  mountedRef.current = false   // Allow navigation-back to restart
  if (tickId !== null) clearTimeout(tickId)
  hero.removeEventListener('mouseenter', onEnter)
  hero.removeEventListener('mouseleave', onLeave)
}
```

### Writing index layout (commit `289892d`)

- Lead copy updated: "18 years of decisions, research, and design. These are the patterns that keep recurring."
- Featured card: asymmetric grid `[2fr_3fr]` instead of equal halves
- Header spacing refinements
- Blog post markdown assets updated in `/public/blog/`

---

## Current Commit State

```
289892d feat: writing index layout improvements and updated copy  ← HEAD, live
4a81ea3 fix: resolve TerminalHero double-animate and Safari stale-tick freeze
9790516 feat(writing): TerminalHero, PostHero, Avatar, 5-category taxonomy
4fab5a0 fix: add Writing to footer nav, correct years stat on About page to 18+
e4061f8 feat: replace screenshot thumbnails with on-brand WritingCardThumb
e8b5de9 feat: replace screenshot hero images with on-brand WritingHero
```

Local `design-v2` and `origin/design-v2` are in sync at `289892d`.
Local `main` points at `97293ec` (origin/main placeholder) — correct.

---

## Blog Post Registry (lib/blog-posts.ts)

| Slug | Title (short) | Status |
|---|---|---|
| `claude-code-portfolio` | Building displayedux.com with Claude Code | Live — TerminalHero animation |
| `case-study-writing` | Writing case studies for Principal-level roles | Live |
| `onboarding-pattern` | The recurring onboarding pattern | Live |
| `designing-for-experts` | Designing for expert fraud analysts | Live |
| `output-vs-outcome` | Output vs. outcome in product design | Live |

Post 1 (`claude-code-portfolio`) has the animated `TerminalHero`. All others use `WritingHero` with a static hero image.

---

## Key Files — Writing Section

| File | Purpose |
|---|---|
| `app/writing/page.tsx` | Writing index — featured card + 4-post grid |
| `app/writing/[slug]/page.tsx` | Article page — routes to per-post component |
| `components/blog/posts/claude-code-portfolio.tsx` | Post 1 full article content |
| `components/blog/TerminalHero.tsx` | Animated terminal (Post 1 only) |
| `components/blog/TerminalHero.module.css` | Terminal styles |
| `components/blog/mascot-grid.ts` | Pixel-art mascot data for terminal header |
| `components/blog/WritingHero.tsx` | Static article hero |
| `components/blog/WritingCardThumb.tsx` | Index card thumbnail |
| `lib/blog-posts.ts` | Blog post data registry |
| `public/blog/terminal-hero-thumb.png` | Clipped terminal screenshot for Post 1 card |
| `public/blog/blog-hero-homepage-live.png` | Hero image for Post 1 article |

---

## Open Items

| Item | Priority | Notes |
|---|---|---|
| Posts 2–5 article content | Medium | Only Post 1 has real article copy. Others need content written. |
| `terminal-hero-thumb.png` accuracy | Low | Recaptured via Playwright element clip — clean terminal only, no nav/page chrome |
| Stale `.next 2/` and `.next 3/` dirs | Low | In `.gitignore`, not tracked. Can delete manually if disk space is a concern. |

---

## Thumbnail / Image Convention

- Thumbnails: `/public/blog/<slug>-thumb.png` — use Playwright element clip, NOT full-page or viewport screenshot
- Hero images: `/public/blog/<anything>.png` — full page screenshots are fine here
- `thumbnailImage` in `lib/blog-posts.ts` must be a path relative to `/public`

---

## Previous Session Notes (still valid)

- About headshot uses plain `<img>` tag (not Next.js `Image`) — do not change this
- `og:image` is served via edge runtime at `app/opengraph-image.tsx` plus static fallback in `layout.tsx`
- Photography lightbox: 33 images, keyboard nav, tested and passing
