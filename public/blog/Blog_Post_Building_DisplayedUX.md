# I Used Claude Code to Build My Entire UX Portfolio — Here Are the Actual Numbers

**Danny Driscoll, UX Designer | displayedux.com**
*April 2026*

---

## The Numbers First, Because That's What You're Here For

Before I explain what happened, here's the raw data from the git repository, the session logs, and the deployment history.

**Project scope:**
- 47 git commits across 10 focused build sessions
- 9 pages built (homepage, 4 case studies, work index, about, contact, photography, privacy policy)
- 12 custom React components authored from scratch
- 624 source files in the final build
- ~100,000 lines of TypeScript, TSX, and CSS
- 771 media assets (images, videos, favicons) organized into the public directory
- 1,190 individual file change operations logged across all commits
- 8 embedded videos integrated with a custom responsive YouTubeEmbed component
- 33 photography gallery images with a custom lightbox and right-click protection

**Claude usage (Claude Code CLI — primary tool):**
- All code was generated through Claude Code, Anthropic's terminal-based coding agent
- Estimated 1.5 – 4 million tokens consumed across the full project
- 2 parallel Claude agent branches spawned via git worktree: `claude/fervent-clarke` (mobile layout fixes), `claude/elegant-satoshi` (YouTube integration)
- Total active time with Claude engaged: approximately 30–40 hours across 10 sessions

**Build comparison:**
- Actual active build time: ~30–40 hours
- Equivalent traditional dev engagement: 8–12 weeks / $15,000–$40,000
- Time saved: estimated 300–500 hours of development work

To be clear about what "30–40 hours" means: this was not a month of daily grind. It was 10 focused sessions — some a few hours, one or two running most of a day — spread across my schedule. The site didn't take a long time to build. It took a surprisingly short amount of my actual attention to build something that would have otherwise required a developer and a significant budget.

---

## What I Actually Built

displayedux.com is a production portfolio site for 18 years of UX design work across enterprise SaaS, consumer mobile, and developer tools. The site needed to be more than a gallery — every case study had to carry a genuine narrative, with outcome metrics, process documentation, and embedded video walkthroughs.

The four case studies published:
1. **TeleSign Self-Service Customer Portal** — B2B SaaS redesign that cut onboarding from 67 to 35 days (48% reduction), scaling to 21B+ annual transactions
2. **Fraud Prevention Suite (TeleSign)** — Designed fraud tooling for 5B+ phone number verifications per month and $500K→$2M daily revenue flows
3. **Messaging API Platform (TeleSign)** — Unified 6 communication channels (SMS, voice, WhatsApp, Viber, Line, RCS) into one interface
4. **Universal College Application (Appily.com)** — Achieved 47% completion rate vs. 20–35% industry average, scaled from 250K to 1.5M users

The technical stack: Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, deployed to Netlify with auto-deploy on push. Production-grade, statically-generated, sub-second load times.

---

## The Tools: What Claude Code Is and How It Actually Works

Most coverage of "AI-built websites" refers to chat-based tools where you describe what you want and paste code manually. That's not what this was.

**Claude Code** is Anthropic's CLI agent — you run it in a terminal, it has full access to your local file system, it executes commands, writes and edits code directly, manages git branches, and runs test automation. There's no copying and pasting. Claude Code writes to the file, commits to git, and you review the result.

Within Claude Code, the following MCPs (Model Context Protocol plugins) were active during this build:

### MCP Breakdown and Usage

**Playwright MCP**
Used for headless browser automation and visual QA throughout the project. Claude would navigate to each page, resize the browser to specific viewport widths (390px for iPhone, 768px for iPad, 1440px for desktop), take full-page screenshots, and return a visual assessment. When a layout issue was identified, Claude described what was wrong and wrote the fix — without me touching the browser.

What this meant in practice: a full QA pass across all 9 pages at 3 viewport sizes — 27 viewport checks — that would have taken me 2–3 hours manually took roughly 20–25 minutes in a single automated session. Every single time.

Specific catches Playwright MCP surfaced:
- Mobile hero images cropping incorrectly (face cut off at 390px viewport)
- Bento stat grid overflowing its container on narrow screens (causing horizontal scroll)
- Lightbox z-index conflict with the sticky nav
- Missing mobile hamburger menu in dark mode
- YouTube embed aspect ratio collapse on narrow viewports

**Filesystem MCP**
Direct read/write access to all project files. Every component, every config file, every CSS rule was written and edited through this MCP without any manual copy-paste workflow. Notably, this MCP's write access is scoped to git worktrees — which turned out to be a structural advantage (more on that below).

**Context Mode MCP**
Semantic indexing and search across the entire codebase. The most visible use: the Cappex-to-Appily.com rebrand. Rather than manually searching 40+ files for every "Cappex" reference, Claude used Context Mode to index the codebase, search across all file types (TSX, TS, CSS, metadata, OG tags, alt text), and replace every instance — including adding "formerly Cappex" notations near legacy screenshots so historical context wasn't stripped. The entire codebase-wide rename took approximately 8 minutes. Manually, with careful review of every file, this is a 3–4 hour task with real risk of missing something buried in a meta tag.

**Magic (21st.dev) MCP**
Used for component pattern research. When building the bento grid layout for the stat cards, I queried Magic for bento grid implementations in React/Tailwind, reviewed the patterns, and used the best approach as a starting point. This MCP requires design judgment before anything reaches the codebase — it's a research tool, not an autopilot.

---

## Claude Code vs. Claude Desktop — What's the Difference and When I Used Each

**Claude Desktop** is the GUI chat interface — what most people think of when they think "Claude." I used Claude Desktop for:
- Initial project brief development (site goals, target audience, case study narrative structure)
- Design system decisions (color palette, typography rationale)
- Content strategy (structuring case studies for hiring managers vs. potential clients)
- Reviewing final copy drafts for tone

**Claude Code** (the CLI) handled all implementation:
- All 47 commits generated through Claude Code
- All component architecture decisions made in-context with the running code
- All bug fixes, layout corrections, and QA responses
- All MCP tool calls (Playwright, Filesystem, Context Mode, Magic)

The rough split: ~10–15% Claude Desktop for planning and content; ~85–90% Claude Code for everything else.

The right analogy: Claude Desktop is the whiteboard. Claude Code is the person who builds what's on it.

---

## The Git Worktree Pattern — Why This Was a Feature, Not a Bug

The Filesystem MCP's write access is scoped to git worktrees rather than the main repository checkout. Initially I thought this was an inconvenience. It turned out to be the best structural decision of the project.

Every change Claude made happened on a named feature branch inside a worktree. Claude would create the worktree, make changes, commit them with a descriptive message, merge back to `design-v2`, and push. The result: a clean, auditable commit history where every change is traceable to a specific decision or bug fix.

The two merge commits in the history — `Merge claude/fervent-clarke` and `Merge claude/elegant-satoshi` — represent parallel agent sessions that ran as true concurrent branches. Claude was working on mobile layout fixes on one branch while simultaneously integrating YouTube embeds on another. Both merged cleanly with no conflicts. Two independent workstreams ran in the same session, cutting that session's output roughly in half the time it would have taken sequentially.

---

## How the Sessions Were Structured

Ten sessions. Here's what each one accomplished:

**Session 1 — Project Initialization (~1–2 hours)**
Next.js scaffolded with App Router, TypeScript, and Tailwind. GitHub repo initialized, Netlify connected with auto-deploy. First homepage draft committed and live. Time from blank folder to deployed placeholder: about 40 minutes.

**Session 2 — Core Build (Largest single session, ~4–6 hours)**
Contact page, About page, Photography page, and all 4 case study pages built in one run. Netlify form wiring handled. Full dark mode system implemented — CSS variables, a `ThemeToggle` component, localStorage persistence across page loads. The single highest-output session of the project.

**Session 3 — TypeScript and Netlify Fixes (~1.5 hours)**
Five sequential commits resolving a cascading TypeScript prop type error in the `BentoStat` component interface. Netlify form POST endpoint corrected for a plugin-nextjs v5 migration change that had silently broken form submission. Each fix was a clean, discrete commit.

**Session 4 — Photography Lightbox (~1 hour)**
Full-screen lightbox with image counter (e.g., "2 / 33"), keyboard navigation (arrow keys, Escape), and right-click context menu protection on gallery images.

**Session 5 — Case Study Content Integration (~2–3 hours)**
All four case study image sequences replaced with production content. Self-Service Portal: low-fidelity wireframe swapped for portal screenshots and prototype frames. Image path fixes for three files with special characters in their filenames that Netlify was rejecting.

**Session 6 — Parallel Agents: Mobile + Video (~2 hours)**
Two Claude branches running simultaneously. `claude/elegant-satoshi`: `YouTubeEmbed` component built and 8 videos wired across 4 case study pages. `claude/fervent-clarke`: mobile layout fixes for hero images, bento grid, and outcome cards. Both merged on the same session with no conflicts.

**Session 7 — Codebase Rename (~45 minutes)**
Cappex → Appily.com across the entire codebase via Context Mode MCP. 8 minutes for the rename itself. The rest of the session: hero video for the Appily case study added, screenshot filenames corrected (narrow no-break space characters were breaking Netlify's file serving).

**Session 8 — Visual Polish (~1.5 hours)**
Bullseye favicon built and generated at 7 sizes (16/32/48/64/128/256px + ICO format). Case study image lightbox added. Mobile dark mode toggle issue fixed.

**Session 9 — Full QA Pass (~2 hours)**
All 9 pages QA'd at 1440px desktop, 390px mobile, and dark mode via Playwright. About page headshot fixed (Next.js `Image fill` component replaced with plain `<img>` tag — the component was causing a hydration mismatch visible only in production). `og:image` social metadata fixed: edge runtime restored, static fallback URL added to `layout.tsx`. CS02 card thumbnail corrected.

**Session 10 — Security Hardening (~2 hours)**
Production security layer added across the full stack. Details below.

---

## What Broke (The Full Honest List)

**Mobile hero image cropping.** Inline styles in `CaseStudyTemplate` were overriding Tailwind responsive classes. Fix: `@media` queries in a `<style>` block inside the component. Key lesson: when a component uses inline styles, stylesheet media queries beat Tailwind utility classes every time.

**Bento grid horizontal scroll on mobile.** Cards were overflowing containers at narrow viewports. Fix: `overflow-x: hidden` on the container, `flex-wrap: wrap` inside the grid, minimum-width constraints on cards.

**TypeScript `BentoStat` interface.** A cascading prop type error across the stat grid components took 5 commits to fully resolve. The interface defined an array type where the component expected a single object. TypeScript caught every layer; Claude fixed them one at a time.

**Netlify form detection.** The `@netlify/plugin-nextjs` v5 migration changed where Netlify's form crawler looks for HTML forms. Required adding a static `__forms.html` file to `public/` with the hidden form markup.

**Next.js `Image fill` on the About headshot.** The `fill` layout mode requires the parent to have `position: relative` and explicit dimensions. The container wasn't set up correctly — invisible in development, broken in production. Replaced with a plain `<img>` tag.

**`og:image` on Netlify edge runtime.** The dynamic `opengraph-image.tsx` route using `ImageResponse` threw a 500 on Netlify's edge network. After multiple fix attempts, we removed the dynamic route and set a static headshot URL as the canonical og:image in `layout.tsx`. The dynamic route was clever; the static URL was correct.

**File serving with special characters.** Two screenshot filenames contained narrow no-break space characters (Unicode \u202F), which Netlify's file server treated as invalid paths. Fix: rename to standard ASCII spaces.

**Context window exhaustion.** On longer sessions, Claude's in-context memory compacts — older instructions get summarized and some precision is lost. Mitigation: a `HANDOFF.md` file written to the repository root at the end of every session. It captures what was built, what files changed, open issues, and exact next steps. Each new session starts by reading it. Claude doesn't have persistent memory; this file is the memory.

---

## The Security Layer (What Most Portfolio Build Posts Skip)

Session 10 was dedicated entirely to production security hardening.

**HTTP security headers.** Six headers added in both `next.config.ts` and `netlify.toml` (redundant layers): `X-Frame-Options: DENY` (clickjacking), `X-Content-Type-Options: nosniff` (MIME-sniffing), `X-XSS-Protection: 1; mode=block`, `Referrer-Policy: strict-origin-when-cross-origin`, `Content-Security-Policy` (restricts script/style/image origins), `Permissions-Policy` (disables camera, microphone, geolocation).

**API route hardening.** The `/api/telesign` route (TeleSign Phone Intelligence for contact form validation) now rejects requests from unrecognized origins and rate-limits to 5 requests per IP per 15 minutes via an in-memory store.

**Netlify honeypot.** A hidden `_gotcha` field on the contact form traps bot submissions. Real users don't see it; bots fill it in; Netlify silently discards those submissions. No CAPTCHA.

**Privacy policy.** Full privacy policy page covering contact form data, the TeleSign check, Netlify Analytics, and third-party embeds. Linked in the footer.

---

## The MCP That Didn't Make the Cut

**Computer Use.** I attempted to configure a Computer Use MCP for direct desktop control. It connected but wasn't stable on macOS Sequoia. Playwright MCP covered all visual QA needs, so I dropped it. Not every tool earns its place — the point is to ship.

---

## Raw Stats Summary

| Metric | Value |
|---|---|
| Active build sessions | 10 |
| Total active hours | ~30–40 hours |
| Total git commits | 47 |
| Source files | 624 |
| Lines of code (TS/TSX/CSS) | ~100,000 |
| Public media assets | 771 |
| Pages built | 9 |
| Custom React components | 12 |
| Videos embedded | 8 |
| Photography gallery images | 33 |
| Parallel agent sessions | 2 (git worktrees) |
| MCP tools active | 4 (Playwright, Filesystem, Context Mode, Magic) |
| Estimated token consumption | 1.5 – 4 million tokens |
| Claude Code share of build | ~85–90% |
| Claude Desktop share of build | ~10–15% |
| Equivalent traditional build | 8–12 weeks / $15K–$40K |

---

## What This Means If You're a Designer

There's a framing that treats AI coding tools as a threat to designers. I don't think that's useful.

What Claude Code cannot do: decide whether the design is right. The information architecture of this site — what goes on the homepage, how case studies are structured, what the above-the-fold content communicates to a recruiting manager vs. a potential client — came entirely from 18 years of knowing what good looks like. Claude executed the architecture. It didn't produce it.

What Claude Code can do: eliminate the implementation gap. For most of my career, the gap between "I know what this should be" and "this is built and live" was 10:1 in favor of building time. With this workflow, it's closer to 1:1. More time on the design decisions that actually matter, more iterations on the things that are hard to get right, faster time to market.

The skill that matters here is not coding. It's directing. Clear briefs. Precise QA feedback. The ability to look at what was generated and articulate exactly what's wrong and why. Those are core UX competencies. They transfer directly.

---

## The Playbook

What made this work, in order of importance:

1. **Claude Code CLI over Claude Desktop** for all implementation. The CLI has file system access, git integration, and MCP tool execution. The chat interface does not.
2. **Playwright MCP** for visual QA. Full 27-viewport QA pass in 20 minutes instead of 2–3 hours.
3. **Git worktree pattern** for every change. Feature branches, auditability, and rollback — automatically.
4. **HANDOFF.md** at the end of every session. Claude has no persistent memory. This file is the memory.
5. **Context Mode MCP** for codebase-wide operations. Renaming, finding all usages of a pattern, refactoring across files.
6. **Design decisions before build sessions.** Sessions with a clear brief produced clean output. Sessions where I was still figuring out what I wanted produced backtracking.

---

## What's Next

displayedux.com is version one. On the roadmap:

- Blog section on the site (this post is the first entry)
- Case study filtering by industry, deliverable type, and platform
- A client engagement model page for designers and small teams who want a portfolio built this way
- A second client site using this same playbook — to prove repeatability

If you're a designer with 10+ years of work and a portfolio that doesn't show it — reach out: d2drisco@icloud.com.

---

*Danny Driscoll is a product designer with 18+ years of experience across enterprise SaaS, consumer mobile, and developer tools. Currently open to Senior / Principal / Director Product Design roles in enterprise B2B. Based in Ann Arbor, Michigan. [displayedux.com](https://displayedux.com)*
