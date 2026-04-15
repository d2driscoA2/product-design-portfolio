# LinkedIn Post — Danny Driscoll

---

I used Claude Code to build my entire UX portfolio website. Not "AI helped me write copy." I mean Claude wrote every component, fixed every bug, ran QA across every viewport, and deployed it. Here are the actual numbers.

**10 sessions. ~30–40 active hours. That's it.**

- 47 git commits
- 9 pages built from scratch (homepage, 4 deep case studies, about, contact, photography, privacy policy)
- 12 custom React components authored
- ~100,000 lines of TypeScript, TSX, and CSS
- 771 media assets deployed
- 8 embedded videos across 4 case studies
- 2 parallel Claude agent branches running simultaneously in a single session
- Estimated token usage: 1.5 – 4 million tokens
- Equivalent traditional build: 8–12 weeks, $15K–$40K minimum

Production stack: Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Netlify auto-deploy.

**What "30–40 hours" actually means:**

This wasn't a long project. It was 10 focused sessions — some a couple of hours, one running most of a day — spread around everything else. The site didn't take long to build. It took a surprisingly small amount of my actual attention to ship something that would have otherwise required a developer budget and months of coordination.

**How it worked:**

Claude Code (the CLI tool, not the chat interface) had four MCP plugins active throughout the build.

The Playwright MCP handled all visual QA. A full pass across all 9 pages at desktop, tablet, and mobile — 27 viewport checks — that would have taken me 2–3 hours manually took about 20 minutes in a single automated session. Every time. Claude navigated to each page, resized the viewport, took full-page screenshots, identified what was wrong, and wrote the fix.

The Context Mode MCP made a codebase-wide rename — "Cappex" to "Appily.com" across 40+ files including metadata, OG tags, and alt text — take 8 minutes. That's a 3–4 hour manual task with real risk of missing something.

In one session, two Claude agents ran on parallel git branches simultaneously — one handling mobile layout fixes, one integrating 8 YouTube embeds. Both merged cleanly. Independent workstreams, same session.

**Claude Code vs. Claude Desktop — the split:**

~85–90% Claude Code CLI (all 47 commits, all components, all QA). ~10–15% Claude Desktop for brief development, design system decisions, and content review.

Desktop is the whiteboard. Code is the builder.

**What I still did entirely myself:**

The design. The information architecture. How case studies are structured for a recruiting manager vs. a potential client. What goes above the fold and why. 18 years of knowing what good looks like. Claude executed the brief. It did not write it.

What changed is the ratio. Building used to take 10x longer than designing. Now it's closer to 1:1. That means more time on the decisions that matter and dramatically faster time to market.

Full writeup — every session, every bug and fix, the complete MCP breakdown, and the playbook — at [BLOG LINK].

The site: displayedux.com

If you're a designer who's been avoiding "the technical side," this is the moment to reconsider. You don't need to learn to code. You need to learn to direct.

#UXDesign #ProductDesign #ClaudeCode #AITools #Portfolio #DesignProcess #Anthropic
