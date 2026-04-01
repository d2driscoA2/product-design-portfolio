# Session Handoff — April 1, 2026

## What Was Completed This Session

### 1. Favicon (commit `94344ef`)

Added `app/icon.svg` — the bullseye/target logo using the same SVG as `Logo.tsx`.

- Blue outer ring `#3B5CE8`, salmon `#F47060`, pink `#FF00AA`, yellow center `#F5C200`
- Next.js automatically serves `app/icon.svg` as the site favicon — no `metadata.icons` config needed
- Confirmed live: HTTP 200 on `displayedux.com/icon.svg`

### 2. Image Lightbox on Case Study Pages (commit `94344ef`)

All case study images are now clickable to view full-size.

**File changed:** `components/ui/CaseStudyTemplate.tsx`

- Added `useState`, `useEffect`, `useMemo` imports
- `allImages` memoized flat array built from all `section.image` and `section.images` across all sections
- `srcToIndex` Map for O(1) lookup: image src → allImages index
- Click any image (single or grid) → opens full-screen lightbox overlay
- Lightbox: dark overlay (`rgba(0,0,0,0.92)`), centered image at `90vw × 85vh`, counter (`1 / N`), prev/next arrows, close button
- Keyboard: Escape closes, ArrowLeft/ArrowRight navigates across all images in the case study
- Body scroll locked while lightbox is open

### 3. Mobile Dark Mode Toggle (commit `94344ef`)

**File changed:** `components/layout/Nav.tsx`

- Added `<ThemeToggle />` to mobile drawer between nav links and Resume button
- Added "Appearance" label row to match the row pattern of nav links
- Bumped mobile drawer `max-h-80` → `max-h-96` to accommodate the new row
- Confirmed live: accessibility tree shows `Appearance` label + `Switch to dark mode` button in mobile nav

---

# Session Handoff — March 30, 2026

## What Was Completed This Session

### 1. Mobile Layout Fixes (commit `81f4003`)

Three mobile rendering issues reported by client were fixed, committed, and deployed to production at displayedux.com.

**Files changed:**
- `components/ui/BentoGrid.tsx` — 2-column grid on mobile (was fixed 3-column overflow)
- `components/ui/CaseStudyTemplate.tsx` — hero image object-contain on mobile; outcome cards stack vertically; hyphenation fix on stat values

**Breakpoints:**
- `max-width: 479px` — hero image switches to object-contain, outcome cards stack to 1 column
- `min-width: 640px` — bento stats switch to 3-column grid (mobile default is 2-column)

### 2. Video Integration (prior commit `2c73c86`)

8 YouTube videos integrated into 3 case study pages using reusable `YouTubeEmbed` component. See `Video_Integration_Handoff.docx` for full reference.

### 3. Mobile QA Screenshots

Full-page Playwright screenshots taken at 390px viewport for light and dark modes. Saved to outputs folder.

---

## Open Items for Next Session

| Item | Notes |
|---|---|
| Universal College App video | User to supply YouTube URL. Add as `heroVideo` in `app/work/universal-college-app/page.tsx` following pattern in other pages. |
| GitHub PAT security flag | Personal access token embedded in git remote URL. Rotate at github.com/settings/tokens. Update remote: `git remote set-url origin https://github.com/[user]/[repo].git` |
| Lightbox: single-image caption | Currently `section.imageCaption` renders below the figure but outside the lightbox. Could add caption display inside the overlay if desired. |

---

## Key Files

| File | Purpose |
|---|---|
| `components/ui/BentoGrid.tsx` | Stats grid — responsive 2→3 column |
| `components/ui/CaseStudyTemplate.tsx` | Case study layout — hero image, sections, videos |
| `components/YouTubeEmbed.tsx` | Reusable YouTube iframe embed |
| `app/work/self-service-portal/page.tsx` | 6 videos (1 hero, 2 paired, 1 single, 2 paired) |
| `app/work/messaging-api/page.tsx` | 1 video in process section |
| `app/work/fraud-prevention/page.tsx` | 1 video in outcome section |

---

## Branch / Deploy

- Branch: `design-v2`
- Auto-deploys to: displayedux.com via Netlify on push to origin/design-v2
- Latest commit: `81f4003` (merge of fervent-clarke mobile fixes)
