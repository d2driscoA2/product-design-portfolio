# Blog Post Image Guide
## displayedux.com — "I Used Claude Code to Build My Entire UX Portfolio"

All images have been copied to `public/blog/` for publishing. Original source paths noted for every asset.

---

## Answer First: Claude Code vs Claude Desktop for Image Finding

**Claude Code is the right tool for this.** Here's why:

- Claude Desktop has no filesystem access — it can only work with images you manually paste in
- Claude Code + Filesystem MCP can recursively scan every folder on your machine, read image files visually, and make curatorial decisions in one session
- Claude Code + Playwright MCP can screenshot any live URL (the actual website) at any time
- The entire scan of your machine — ~800 images across Portfolio Images, Reference Files, .playwright-mcp, public/images — took one session

**The right workflow for future image projects:**
1. Open Claude Code in the project terminal
2. Ask it to scan specific directories (give it the paths)
3. Ask it to visually read the top candidates
4. Ask it to copy the chosen files to your output folder
5. Ask it to write the image guide (this document)

Claude Desktop is better for: writing prompts, strategy, brief review. Claude Code is better for: anything touching the filesystem.

---

## Images Chosen and Why

### BLOG POST HERO

**File:** `public/blog/blog-hero-homepage-live.png`
**Source:** Live screenshot of displayedux.com taken April 15, 2026 via Playwright MCP
**Why this image:** Shows the actual finished product — the homepage with the hero headline, headshot in bullseye, stat strip, all four case study cards, pull quote, and philosophy section. This is the proof. A reader clicking the blog post headline "I used Claude Code to build my entire portfolio" should immediately see what was built. This is stronger than a photo of Danny because the subject of the post is the *website*, not Danny personally.

**Crop recommendation:** Use the top 60% (homepage hero + stats strip + case study cards). Cut before the origin story / philosophy section to keep it punchy as a hero.

---

### SECTION: "What I Actually Built" / intro

**File:** `public/blog/blog-hero-homepage-live.png` (same image, different crop)
**Crop:** Full page or the case study card grid specifically (shows all 4 cards at once)
**Caption idea:** *"Four deep case studies, 18 years of work, one production-grade Next.js site — built in 10 focused sessions."*

---

### SECTION: "The Tools" / MCP Breakdown

No existing screenshot shows the terminal or MCP output directly — that would require a screen recording setup. Use the Playwright-captured site screenshot instead, with a caption that explains it was captured by Playwright MCP itself.

**File:** `public/blog/site-build-session-march19.png`
**Source:** `.playwright-mcp/page-2026-03-19T16-29-49-995Z.png` — one of the early Playwright QA screenshots taken *during* the build
**Why this image:** This screenshot was taken BY Playwright MCP as part of the automated QA process described in the blog. That's meta and compelling — the image proving the MCP process IS the MCP process.
**Caption idea:** *"This screenshot was taken by Playwright MCP during a QA session — Claude navigated to the page, resized the viewport, captured this, and returned a visual assessment. No browser resizing by hand."*

---

### SECTION: "What Broke" — Before/After the Legacy Portal

**File (BEFORE):** `public/blog/legacy-portal-before.png`
**Source:** `public/images/1-self-service-customer-portal/images-for-case-study/before-redesign/screencapture-portal-telesign-portal-dashboard-2018-10-11-10_43_49.png`
**Why:** Shows the actual legacy TeleSign portal that Danny redesigned — dark, dense, developer-coded interface. Strong contrast to the finished portfolio site. Use it to illustrate the "before state" when describing context window and session management challenges, or as proof of the complexity of work being documented.
**Caption idea:** *"The legacy portal Danny redesigned — and one of the case studies documented on the new site. This screenshot dates to 2018."*

---

### SECTION: "How the Sessions Were Structured" / Design System Work

**File:** `public/blog/portal-design-guide-colors.png`
**Source:** `Reference Files/imagery/self-service-customer-portal/UP - Design Guide - Colors.png`
**Why:** Shows actual design system documentation — the color guide Danny built for the Unified Portal MVP. Clean, professional, immediately recognizable as UX deliverable work. Good proof that what the portfolio is documenting is real, structured design output — not mockups.
**Caption idea:** *"The Unified Portal design system Danny built at TeleSign — now documented inside a case study on the portfolio."*

---

### SECTION: "The Git Worktree Pattern" or "Parallel Agents"

**Best image here is a two-up side-by-side** showing:
- Left: The Messaging API case study page
- Right: The Self-Service Portal case study page

Both were being worked on simultaneously by parallel Claude agents. This visually proves the concurrent work claim.

**Already in project:**
- `public/images/3-messaging-api/` — case study hero/content
- `public/images/1-self-service-customer-portal/hero/` — case study hero

If you want a single image instead: use the Fraud Prevention Playwright screenshot below.

**File:** `.playwright-mcp/page-2026-03-18T20-17-42-234Z.png` (currently in Claude Written folder — copy if needed)
**Why:** Shows the Fraud Prevention case study page at full resolution with the blue hero, dashboard mockup, and overview section — taken during the build. Strong, polished, visually tells the story.

---

### SECTION: "The Messaging API Workflow" (MCP / Context Mode rename section)

**File:** `public/blog/messaging-api-workflow.png`
**Source:** `Reference Files/imagery/Messaging API/Messaging API Simplified Workflow.png`
**Why:** Clean diagram showing the 6-channel fallback logic (Viber → WhatsApp → RCS → MMS → SMS → Email). Highly readable, tells a complex technical story visually in seconds. Use near the section discussing the Appily rename or codebase-wide Context Mode MCP operation — it shows the type of complex, interconnected product work the portfolio needed to document correctly.
**Caption idea:** *"The omnichannel routing diagram from the TeleSign Messaging API case study — one of 8 assets Claude embedded and captioned across the 4 case studies."*

---

### SECTION: Author / Byline / Footer of Post

**File:** `public/blog/headshot-blue-background.png`
**Source:** `Reference Files/imagery/headshots/headshot-blue-background.png`
**Why:** This is the strongest single image in the entire library. The bullseye rings in magenta/coral/yellow on electric blue background are immediately on-brand. It's arresting. Use at the author bio at the bottom of every blog post, and as the LinkedIn post image.
**Caption:** None needed — let it speak.

---

### SECTION: "What's Next" / Closing

**File:** `public/blog/contact-page-finished.png`
**Source:** `contact-bullseye-fullpage.png`
**Why:** Shows the finished contact page — the glassmorphism card, TeleSign verification badge, the reach-out CTA. Perfect closing image because the CTA of the blog post is "reach out." The page and the call to action are the same thing.
**Caption idea:** *"The contact page — where the brief ends and the conversation starts."*

---

## Complete Image Map for Blog Post

| Blog Section | Image File | Caption |
|---|---|---|
| Hero (top of post) | `blog-hero-homepage-live.png` | *(no caption — full bleed hero)* |
| "What I Actually Built" | `blog-hero-homepage-live.png` (full page) | *"displayedux.com — live at time of writing"* |
| "Playwright MCP" subsection | `site-build-session-march19.png` | *"Captured by Playwright MCP during a QA session — the tool that took this screenshot also wrote the fix for what it found wrong"* |
| "The Legacy Before State" | `legacy-portal-before.png` | *"The 2018 TeleSign portal — what Danny redesigned, now documented inside a case study"* |
| "Design System" subsection | `portal-design-guide-colors.png` | *"The Unified Portal color system — one of three design guide deliverables inside the Self-Service Portal case study"* |
| "Messaging API" / parallel work | `messaging-api-workflow.png` | *"The 6-channel fallback diagram from the Messaging API case study — embedded via Claude's YouTubeEmbed + image pipeline"* |
| Author bio | `headshot-blue-background.png` | *(no caption)* |
| Closing CTA | `contact-page-finished.png` | *"displayedux.com/contact"* |

---

## LinkedIn Post Image

**Use:** `public/blog/headshot-blue-background.png`

LinkedIn favors human faces in the preview. This headshot is striking, on-brand, and will stand out in a feed. Do not use the site screenshot for LinkedIn — faces outperform interfaces on every LinkedIn study.

Alternatively, if LinkedIn allows a carousel, lead with the headshot and follow with the homepage screenshot.

---

## Images NOT Chosen and Why

| Image | Why Skipped |
|---|---|
| `screencapture-portal-telesign-portal-dashboard-2018-10-11-10_46_08.png` (and similar) | Redundant — same legacy portal, lower visual interest than the 10_43 version |
| Photography gallery images (`DannyDriscoll.me Photography – X.png`) | Wrong context for this post — personal photography unrelated to the AI build story |
| Marketing rebrand PDFs (`Color Scheme.pdf`, `Dialog.pdf`, etc.) | PDFs, not images; would need extraction |
| `SMS-verify-product-page-high-fidelity.png` | Strong image but belongs in the SMS Country Blocking case study, not the blog post |
| UX research `.pages` files | Not images; would need screen capture |
| `hero-about@2x-1.png` (TeleSign marketing) | Marketing asset, not design work product |
| Early Playwright screenshots from March 18 | Visually weaker — earlier build state, less polished layout |

---

## Future Image Sources to Keep for Next Blog Post

If Danny writes a second blog post (client build, process deep-dive, or case study analysis), the following unused assets are strongest candidates:

- `Product Team Photo.png` (Country Blocking) — real team photo, humanizes the work
- `Manage Country Blocking - Edit Selection.png` — clean before/after UI
- `SMS score workflow.png` — technical workflow diagram, publication-ready
- `Messaging API Template Builder` — shows the actual UI Danny designed with rich messaging support
- `User Testing` `.pages` files — need screen capture but contain real observation data worth documenting

---

*Generated April 15, 2026. All source paths verified against live filesystem.*
