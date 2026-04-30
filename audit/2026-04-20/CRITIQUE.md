# displayedux.com — Principal-level design audit

**Date:** 2026-04-20 · **Target:** https://displayedux.com · **Goal:** qualify for Senior/Principal/Director product design roles in enterprise B2B SaaS.

## Executive summary

The site communicates a credible Principal-level story — "18+ years, products where mistakes have consequences, TeleSign/Netflix/Appily" — through four well-scaffolded case studies with hero metrics, reader-friendly long-form, and a theme-switchable, keyboard-accessible shell. The biggest risk to hiring-manager conversion is **a broken visual hierarchy on the homepage first fold plus an accessibility story that contradicts the positioning**: on desktop the hero leaves ~230 px of blank space above the H1, pushes the CTAs below the viewport fold, and ships 63 WCAG color-contrast failures on that same page (nav tagline, nav links, and the "UX" in the logo all fail AA — see `axe_home.json`, `contrast_table.txt`). **The single most valuable next move** is a 2-hour fix that (a) raises the hero, tightens its line length, and pins "View work" + "Read my story" above the fold at 1440, and (b) swaps `--color-text-muted: #9CA3AF` for a token that clears 4.5:1 on white (e.g., `#6B7280`) — this alone eliminates the site-wide a11y violation on Nav and the "credibility gap" a senior reviewer would clock in 10 seconds.

---

## Lighthouse + axe headline numbers

| Route | Perf | A11y | BP | SEO | LCP | Total bytes | axe violations |
|---|---:|---:|---:|---:|---:|---:|---:|
| `/` | 98 | 96 | 100 | 92 | 0.5 s | — | 63 (color-contrast) |
| `/work/self-service-portal` | 88 | 96 | 96 | 100 | 1.7 s | 3,949 KiB | 41 (contrast + 3 landmark) |

Per-route axe totals and rules are in `axe_summary.json`; full detail in `axe_<route>.json`; Lighthouse HTML in `lh_home.report.html` and `lh_ssp.report.html`.

Landmark failures (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`) fire on every case study + `/about` + `/contact` + `/photography` because `components/ui/CaseStudyTemplate.tsx:109` emits a second `<main>` nested inside the root `<main id="main-content">` from `app/layout.tsx:92`. See `axe_self-service-portal.json`.

---

## WCAG contrast ledger (measured, not guessed)

Computed via sRGB relative-luminance against tokens in `app/globals.css`:

| Pair | Ratio | Body AA (4.5) | AAA (7) | Where it renders |
|---|---:|:---:|:---:|---|
| `#F47060` on `#FFFFFF` | **2.86:1** | FAIL | FAIL | Logo "UX" (Nav); coral CTAs on white; inline links in case studies |
| `#9CA3AF` on `#FFFFFF` | **2.54:1** | FAIL | FAIL | Every Nav link + "Strategic Product Design" tagline (light mode) |
| `#FFFFFF` on `#F47060` | **2.86:1** | FAIL | FAIL | White eyebrow/subhead on coral hero (`self-service-portal`) |
| `#FFFFFF` on `#F5C200` | **1.67:1** | FAIL | FAIL | Any white text on amber (messaging-api eyebrow "TELESIGN") |
| `#FFFFFF` on `#FF00AA` | **3.60:1** | FAIL body / AA large | FAIL | White stat labels on magenta (universal-college-app) |
| `#3B5CE8` on `#0A0A0A` | **3.66:1** | FAIL body | FAIL | Royal-blue links on dark mode background |
| `#606060` on `#FFFFFF` | 6.29:1 | PASS | — | Secondary text light mode |
| `#9CA3AF` on `#0A0A0A` | 7.80:1 | PASS | PASS | Same muted token passes in dark — hence the mismatch |
| `#1A1A1A` on `#FFFFFF` | 17.40:1 | PASS | PASS | Primary text light mode |
| `#F5F5F5` on `#0A0A0A` | 18.16:1 | PASS | PASS | Primary text dark mode |
| `#FFFFFF` on `#3B5CE8` | 5.41:1 | PASS | FAIL | Footer body copy |

Cite `contrast_table.txt` for full list (20 pairs).

---

## Five-lens critique

Every finding cites a file and a screenshot. Screenshots are at `audit/2026-04-20/<name>.png`.

### 1 · Product Manager lens — "will this convert a hiring manager in 10 seconds?"

- **PM-1. Homepage hero wastes the fold.** At 1440 (`home_1440_light.png`, `hero_home_1440_light.png`) the H1 starts ~230 px below the nav; the CTAs ("View work", "Read my story") sit roughly at the 680 px mark, meaning a 1366-tall-viewport recruiter gets CTAs + metrics only after a scroll. The `<HeroSection>` vertical padding (`components/ui/HeroSection.tsx`) is tuned for display space, not recruiter triage. Move the kicker/H1 up ~160 px and lift the metrics strip into the first viewport at ≥1280.
- **PM-2. "18+ years. TeleSign · Netflix · Appily.com" is buried.** The proof string is the third line in the stack (under the H1 and eyebrow). At 1440 it reads as a caption; it is the most credentialing phrase on the site. Elevate it to an H2/eyebrow position or pin it beside the headshot. Ref: `hero_home_1440_light.png`.
- **PM-3. "Mistakes have consequences" is poetic but ambiguous.** Without a one-line operational definition below it ("…fraud, onboarding, compliance — enterprise verticals where a UX bug becomes a support ticket, a revenue loss, or a legal action"), a non-design hiring partner may read it as risk-averse rather than high-stakes. Add a 12-word subhead clarifying the domain; the current tagline does not do that job.
- **PM-4. Case-study cards on `/` bury the metric.** `home_1440_light.png` / `work_1440_light.png`: each card leads with "TELESIGN" / "APPILY.COM" eyebrow, then a 2-line title, then the metric. A Principal reader scans for the number first. Promote the metric to the first visual element of the card and keep the eyebrow/title as a secondary row (`components/ui/CaseStudyCard.tsx`).
- **PM-5. "Requesting my résumé?" banner shows for every /contact visitor.** `contact_375_light.png` and `contact_1440_light.png` both render the banner even when `?resume=true` is absent. `app/contact/page.tsx:144-160` renders the block unconditionally; only `resumeHighlight` changes the tint. A hiring manager who clicks "Contact" and sees a résumé-specific banner gets the wrong affordance. Guard the whole banner on `isResumeRequest`.
- **PM-6. The Resume button in the top-right is the busiest element on screen.** It has a black border ring in light mode while Nav items are muted gray — an inversion of weight. A Principal portfolio's #1 CTA is usually "see the work" or a résumé *link*, not a heavy outline button. Consider downweighting to a link, or moving résumé to a site-wide secondary slot. Ref: `hero_home_1440_light.png`.

### 2 · Product Engineer lens — build quality, perf, a11y correctness

- **PE-1. Site-wide `color-contrast` failures originate from two tokens.** `app/globals.css` defines `--color-text-muted: #9CA3AF` (2.54:1 on white) and uses `#F47060` directly for accent text. `components/layout/Nav.tsx:80,127,165,173` binds every Nav link and the tagline to `text-[var(--color-text-muted)]`. Fix at the token level — do not patch component-by-component. New pair suggestion: `--color-text-muted: #6B7280` gives 4.83:1 on `#FFFFFF` and 5.40:1 on `#F5F5F5` while still reading as gray.
- **PE-2. Dark-mode footer is hardcoded royal blue.** `components/layout/Footer.tsx:17` uses `className="bg-[#3B5CE8]"`. The dark token `--color-footer-bg: #000000` exists in `app/globals.css` but is never applied. Every dark-mode screenshot confirms the footer stays blue: `home_1440_dark.png`, `self-service-portal_1440_dark.png`, `about_375_dark.png`, etc. Swap to `className="bg-[var(--color-footer-bg)]"` and the jarring blue → black/near-black handoff works automatically.
- **PE-3. Duplicate `<main>` landmarks.** Root layout emits `<main id="main-content">` at `app/layout.tsx:92`; every case study template wraps itself in a second `<main>` at `components/ui/CaseStudyTemplate.tsx:109`. Axe flags it as serious landmark pollution on every case-study route (`axe_self-service-portal.json` lines 46-112). Also breaks "Skip to main" semantics for screen-reader users. Change the inner `<main>` to `<article>` or drop the tag and keep the div.
- **PE-4. Theme flash of incorrect mode (FOUC).** `components/ui/ThemeToggle.tsx` reads `localStorage.getItem('theme')` inside `useEffect` after hydration. `app/layout.tsx` has `suppressHydrationWarning` but no inline script in `<head>` to apply `data-theme` before first paint. A user with saved `theme=dark` sees a light flash on every navigation. Standard fix: a 4-line blocking inline script in `<head>` that reads localStorage and sets `data-theme` before React mounts.
- **PE-5. SSP page ships 3.95 MB (desktop profile).** `lh_ssp.report.json` → `total-byte-weight` 0.5/1. The case-study hero screenshot uses the laptop-chrome composition at full size; likely sourced from an un-optimized PNG. Add `next/image` with responsive `sizes` and AVIF/WebP. Expected drop: ~1.5 MB. `lcp-discovery-insight` also flags preload priority.
- **PE-6. Unused/legacy JS on home (~39 KiB combined).** `lh_home.report.json` → `unused-javascript` (26 KiB) and `legacy-javascript-insight` (13 KiB). With React 19 + Next 16 + Turbopack, this is usually polyfills for browsers you do not target and an over-broad client bundle. Audit `experimental.reactCompiler` output and client-boundary boundaries.
- **PE-7. `label-content-name-mismatch` on both Lighthouse routes.** Some element has a visible label that does not match its accessible name — Lighthouse flags it as score 0. Most likely culprit is the Resume button with visible "Resume" but an aria-label like "Open résumé in new tab" or similar. Align both.
- **PE-8. `robots.txt` is flagged invalid on home.** `lh_home.report.json` → SEO 92 hit. Either a missing file or malformed directive. Low-impact but trivial to fix.
- **PE-9. Mobile horizontal overflow on home dark.** `home_375_dark.png` crops the H1 at "consequen..." at 375 viewport width. The H1 `--text-display` token (4.5 rem) does not scale down enough for ≤375. Use `clamp()` on the h1 font-size so 375 renders the word within the viewport.

### 3 · Professional Designer lens — applying the DisplayedUX rubric

Danny's own rubric (from `DESIGN-GUIDE.md` + his portfolio writing) emphasizes: metric-led storytelling, restraint, typographic hierarchy, one-loud-voice-per-page, and ruthless removal of decorative weight in enterprise contexts.

- **D-1. Hero overloads the page with decoration.** The layered concentric-circle brand motif + headshot + headline + eyebrow + metric strip + two CTAs is five visual voices competing. On the case studies you already discipline this down to two (title + laptop). Apply the same discipline to `/`: either the motif or the headshot, not both at full strength. Ref: `hero_home_1440_light.png`.
- **D-2. Case-study hero colors overwhelm their content.** Coral/amber/magenta hero panels (`hero_ssp_1440_light.png`, `hero_msg_1440_light.png`, `hero_uca_1440_light.png`) read as decorative — but the case study is a serious read. In the UCA hero the white body copy on magenta hits 3.60:1; you lose the room-to-read feeling that your long-form body copy earns back over 2,000 words. Reduce hero chroma by ~15% (shift coral toward `#E36B5B`, amber toward `#E6B400`, magenta toward `#CC0088`) or reserve the saturated colors for the metric panel only.
- **D-3. Stat pairs inside case-study heroes lack unit hierarchy.** `hero_ssp_1440_light.png`: "67 → 35" (big) and "Days to onboard (complex configs)" (small) — good. But "Same-day" + "Access for simpler products" is the weaker half and sits first. Lead with the bigger-numerical delta.
- **D-4. Typography rhythm is inconsistent across routes.** `about_1440_light.png` uses a narrower measure than `self-service-portal_1440_light.png`; the "Beyond the work" block jumps from H3 to body to H4 without a clear scale ratio (`app/globals.css` defines 1rem → 1.375 → 1.875 → 2.5, ratio ~1.3× — fine, but its application per-section drifts). Lock every route to the same `.cs-container` + `.cs-prose` pattern.
- **D-5. Writing page visual treatment is strong; Photography page is half-done.** `writing_1440_light.png` communicates a point of view. `photography_1440_light.png` presents a grid of square tiles with ~9 visible and the remainder rendering as empty gray boxes for a long run — ref `photography_375_light.png` and `photography_1440_light.png`. Either cull to the best 9 or ship lazy-loading + the full set, not a half-loaded grid.
- **D-6. Logo lock-up breaks its own contrast story.** The coral "UX" in "DisplayedUX" (`app/globals.css` usage) fails AA on white (2.86:1). For a brand built on "Strategic Product Design" this is a credibility own-goal — the wordmark itself fails the rubric. Options: move coral to a pass-on-white shade (`#C94A3D` = 4.56:1) or reserve coral for dark mode only.
- **D-7. Nav wordmark + theme toggle + resume button spacing is cramped.** `hero_home_1440_light.png`: the moon/sun icon and the outlined Resume button sit ~8 px apart. At dense nav items this reads as three ideas glued together. Add 16-24 px between the toggle and the button.

### 4 · UX Researcher lens — who is the user and what signals do they read?

- **UXR-1. Primary user is a hiring manager or recruiter with 10-20 seconds of first-scan budget.** The information-scent for that user should be: role title → seniority signal → employer logos → evidence (metrics) → one-click to see work. Right now the fold gives: marquee H1 → kicker → employer string buried → "View work" below fold. That is a poor scent for the target user. Ref: `hero_home_1440_light.png`.
- **UXR-2. Secondary user is a peer designer or design director evaluating craft.** This user *does* want to scroll long-form — but they also scan case-study titles. Case-study titles read as marketing copy ("How Cutting Onboarding From 67 Days to Same-Day Access Freed TeleSign to Serve an Entirely New Market" — `hero_ssp_1440_light.png`). Consider a two-row header: terse role/company ("TeleSign · Self-Service Portal · 2020-21") + a shorter benefit claim ("67 → Same-Day Onboarding"). The current title is a full sentence and a 5-line wrap at 1440.
- **UXR-3. The "photography" and "writing" tabs give the site a hobbyist flavor in Nav.** For a Principal/Director role, Photography in the primary Nav (between About and Contact) reads as a personal-site signal, not a portfolio-site signal. Move to a footer-only link or an "Extras" submenu. Ref: `home_1440_light.png` top bar.
- **UXR-4. Contact form has 7 fields and phone verification.** For a job inquiry that's heavy. A hiring manager pinging you may abandon at Phone Verification. Split into a minimum-viable version ("Name, email, role link, message") with the full version behind an "Add more detail" accordion. Ref: `contact_1440_light.png`.
- **UXR-5. The résumé flow is misaligned with real behavior.** Real recruiters click "Resume" and expect a PDF download, not a contact form with a résumé-request banner. The current `/contact?resume=true` sends them to fill a form to receive a résumé. Either serve the PDF directly from the nav button, or keep the gate but explain explicitly ("I send a tailored version for each role — takes ~4 hours"). Ref: `contact-resume_1440_light.png`.

### 5 · HCI lens — interaction, focus, motion, feedback

- **HCI-1. Focus indicators are inconsistent.** The outline token is `focus-visible:outline-[#F47060]` on Nav links (which is the coral with 2.86:1 on white) and `focus-visible:outline-[#3B5CE8]` on the wordmark (`Nav.tsx`). Both colors are brand, but the coral against white fails the 3:1 UI-contrast rule at the outline boundary. Standardize on `#3B5CE8` (5.41:1) site-wide.
- **HCI-2. Theme toggle is a glyph with no label.** `ThemeToggle.tsx:29-37` — only an aria-label. The toggle is a highly-discoverable control that, in enterprise portfolios, usually gets a visible label ("Appearance" → dropdown) or a 3-state control (Light/Dark/System). Losing the "System" state is a real regression for users on macOS auto-switching.
- **HCI-3. The résumé "highlight" animation is too subtle.** When `?resume=true`, the banner tints rgba(59, 92, 232, 0.08) and fades. Most users will not notice. Either raise the delta or replace with a scroll-into-view + a pulse on the first field (`contact-resume_1440_light.png` vs `contact_1440_light.png` — side by side they look identical).
- **HCI-4. Hover states on case-study cards not captured in production.** The audit brief asked for card-hover; on the live site hovering a card triggers only a very small shadow lift. A stronger "intent to click" cue (scale 1.01, border color change) would reduce the "is this clickable?" ambiguity for Principal-level scan behavior.
- **HCI-5. No skip-link for keyboard users.** Root layout `app/layout.tsx` wires `main id="main-content"` but no `<a href="#main-content" class="skip-link">` is present. Standard for WCAG 2.4.1.
- **HCI-6. Reduced-motion is respected.** `app/globals.css` has a `prefers-reduced-motion` block. Good — not a finding, worth calling out as a baseline you've already cleared.
- **HCI-7. Long-form readability in case studies is good.** `.cs-container { max-width: 900px }` keeps measure around 72-80 ch. Typography rhythm holds in body copy. This is the strongest craft signal on the site; protect it when making changes.

---

## Action plan — ranked by impact

Ranking criteria, applied in order:
1. Hiring-manager conversion (first-10-seconds scan + fold visibility).
2. WCAG AA failures on persistent surfaces (Nav, footer, buttons).
3. Path-blocking bugs (dark-mode footer, nested main, false résumé banner).
4. Craft polish (spacing, decoration, mobile overflow, motion).

| # | Title | Impact | Effort | Files | Acceptance |
|---|---|---|---:|---|---|
| **1** | Rewrite muted token to pass AA, and split coral into on-light vs on-dark variants | Eliminates 500+ persistent contrast violations across every route. Nav, tagline, logo "UX", and inline links become AA-compliant. This is the single change a Principal reviewer will use to judge your a11y story. | 1.5 h | `app/globals.css` (update `--color-text-muted`, add `--color-brand-coral-on-light`), `components/layout/Nav.tsx`, `components/ui/Logo.tsx` | Zero axe `color-contrast` failures on `/`, `/work`, `/writing`. Visual diff on light mode: nav links go from 2.54:1 to ≥4.5:1. Logo "UX" ≥4.5:1 on white. |
| **2** | Re-balance homepage hero for 1440: headline up, proof above fold, CTAs visible | Directly addresses the 10-second-scan problem. Changes the first impression from "decorative" to "credentialing". No other single change moves the recruiter-conversion needle more. | 2 h | `components/ui/HeroSection.tsx`, `app/page.tsx`, `app/globals.css` (hero padding) | At 1440×900, the H1, the "18+ years · TeleSign · Netflix · Appily" string, and both CTAs render above `y=800 px`. Metrics strip visible at ≥1280 height. |
| **3** | Fix dark-mode footer (swap hardcoded `bg-[#3B5CE8]` for token) | Every dark-mode screenshot shows a broken brand handoff. Low effort, high polish return. A design reviewer notices this in the first dark-mode pass. | 15 min | `components/layout/Footer.tsx:17` | `home_1440_dark` footer renders at `var(--color-footer-bg)` (#000 in dark). Screenshot diff passes. |
| **4** | Fix duplicate `<main>` landmarks on case studies | Eliminates the non-contrast half of axe's serious+moderate findings. Signals semantic-HTML literacy. Improves screen-reader + skip-link behavior. | 30 min | `components/ui/CaseStudyTemplate.tsx:109` (change inner `<main>` → `<article>`) | Zero `landmark-*` axe findings on `/work/self-service-portal`, `/work/fraud-prevention`, `/work/messaging-api`, `/work/universal-college-app`, `/about`, `/contact`, `/photography`. |
| **5** | Guard the "Requesting my résumé?" banner behind `isResumeRequest` | Stops confusing non-résumé contact-form visitors. Real conversion risk: current design signals "this form is only for résumé requests." | 15 min | `app/contact/page.tsx:144-160` (wrap block in `{isResumeRequest && …}`) | `/contact` renders no banner; `/contact?resume=true` renders the banner and the scroll-highlight. |
| **6** | Add SSR theme init script to prevent FOUC | Removes the light-mode flash before dark renders. Trivial, and every user on every navigation sees it currently. | 20 min | `app/layout.tsx` (insert blocking script in `<head>`), `components/ui/ThemeToggle.tsx` (remove redundant effect init) | Navigating to any page with `localStorage.theme=dark` shows zero light-mode flash (Lighthouse CLS stays 0). |
| **7** | Case-study hero: reduce chroma + fix white-on-saturated contrast | Coral/amber/magenta heroes fail AA for white body text. Reducing saturation or moving labels to dark-on-color elevates readability and craft signal. | 2 h | `app/globals.css` (brand tokens or hero-overlay rules), `components/ui/CaseStudyTemplate.tsx` (hero label colors) | All hero eyebrow, stat-label pairs ≥4.5:1. Visual check at `hero_ssp_1440_light.png`, `hero_msg_1440_light.png`, `hero_uca_1440_light.png`. |
| **8** | Fix mobile H1 overflow on 375 | `home_375_dark.png` / `home_375_light.png` both clip "consequences". Broken mobile first-impression for any recruiter on a phone. | 30 min | `app/globals.css` (`.text-display` or its `h1` use with `clamp()`), `components/ui/HeroSection.tsx` | At 375 viewport, "Designing products where mistakes have consequences" fully renders without horizontal scroll. |
| **9** | Rationalize nav: demote Photography, standardize focus color, add skip-link | Three small HCI improvements. Photography in primary nav dilutes the Principal-portfolio read. Focus color standardization fixes HCI-1. Skip-link is a WCAG 2.4.1 baseline. | 1 h | `components/layout/Nav.tsx`, `app/layout.tsx` (add `<a href="#main-content" class="skip-link">`), `app/globals.css` (skip-link styles) | Primary nav shows Work, Writing, About, Contact only. All focus rings render `#3B5CE8`. Tab-key from cold page reveals skip-link. |
| **10** | Promote case-study metrics on `/work` grid to be the first visual element | Scan-first change: recruiters and directors read numbers first. Current card layout leads with eyebrow then title then number. | 1.5 h | `components/ui/CaseStudyCard.tsx`, `app/work/page.tsx` | On `/work`, the big number (e.g., "85%") is the top-left-most visual element in each card. Eyebrow + title moved below. |
| **11** | Trim SSP/hero image weight; enforce `next/image` with AVIF | Dropping 1-1.5 MB improves LCP on slower networks. Currently SSP LCP 1.7s desktop — on a mid-tier 4G it's 4-5s. | 1 h | case-study assets in `/public/images/case-studies/`, components that consume them | `lighthouse ssp` `total-byte-weight` audit ≥0.9. LCP < 1.2s on desktop profile. |
| **12** | Simplify contact form to 4 default fields with progressive disclosure | Reduces abandonment risk for the highest-intent visitor type (hiring managers pinging directly). | 3 h | `app/contact/page.tsx` | First-paint form shows Name, Email, Message, (optional) Role link. "Add more detail" reveals phone verification, company, role/context, JD link. |
| **13** | Reduce homepage cluster: single visual voice (motif OR headshot, not both at full strength) | Craft-polish finding; matters most for peer-designer reviewers. | 1.5 h | `components/ui/HeroSection.tsx`, decorative svg/asset | Hero composition at 1440 passes the squint test: one dominant element, everything else secondary. |
| **14** | Case-study title rework: add terse header row + shorten headline | Improves scan density for peer reviewers; titles become skimmable. | 2 h | `components/ui/CaseStudyTemplate.tsx`, case-study MDX/pages | Each case study has a single-line "TeleSign · Self-Service Portal · 2020-21" header above a ≤10-word benefit claim. |
| **15** | Fix `robots.txt` + `label-content-name-mismatch` + remove unused/legacy JS | SEO and bundle polish. Individually small; together raise Home SEO from 92 → 100 and Perf toward 100. | 2 h | `/public/robots.txt`, `components/layout/Nav.tsx` (Resume button aria-label), Next.js config (target browsers) | Lighthouse SEO = 100, A11y = 100 on home. Bundle -39 KiB. |
| **16** | Photography page: cull or lazy-load; do not render empty placeholder tiles | Craft signal. Empty tiles read as "unfinished". | 1 h | `components/ui/PhotoGallery.tsx`, `/public/images/photography/*` | No empty placeholder tiles visible on first paint. |
| **17** | Redesign theme toggle to surface 3 states (Light/Dark/System) with visible affordance | Matches OS behavior; raises HCI maturity signal. Not urgent but pairs naturally with #6. | 2 h | `components/ui/ThemeToggle.tsx` | Toggle exposes Light/Dark/System. `data-theme` falls back to `prefers-color-scheme` when System selected. |

**Quick-win bundle (items 1, 3, 4, 5, 6, 8):** 3.3 hours total, all cosmetic/token/semantic — delivers the accessibility and mobile-overflow fixes that a Principal reviewer uses to sanity-check a designer's attention to their own standards. Ship this bundle first.

**Credential-bundle (items 1, 2, 10):** 5 hours — resets the first-10-seconds scan of the homepage and the case-study grid. Ship second.

Everything else is polish.
