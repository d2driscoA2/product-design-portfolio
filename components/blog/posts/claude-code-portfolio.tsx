import { BlogImage, BlogHeroImage } from '@/components/blog/BlogImage'

/* ─────────────────────────────────────────────────────────────────
   Blog post: "I Used Claude Code to Build My Entire UX Portfolio —
   Here Are the Actual Numbers (and How They Stack Up)"
   Danny Driscoll · April 2026
───────────────────────────────────────────────────────────────── */

export function ClaudeCodePortfolioPost() {
  return (
    <article className="blog-content">

      {/* ── Section: The Numbers First ──────────────────────────── */}
      <h2>The Numbers First</h2>
      <p>
        Before I explain what happened, here is the raw data from the git
        repository, the session logs, and the deployment history. Then I will
        tell you exactly where those numbers sit relative to the most advanced
        Claude Code users in the world, because that context matters.
      </p>

      <div className="blog-callout">
        <div className="blog-callout-label">Project scope</div>
        <ul className="blog-callout-list">
          <li><strong>47</strong> git commits across 10 focused build sessions</li>
          <li><strong>9 pages</strong> built: homepage, 4 case studies, work index, about, contact, photography, privacy policy</li>
          <li><strong>12</strong> custom React components authored from scratch</li>
          <li><strong>624</strong> source files in the final build</li>
          <li><strong>~100,000</strong> lines of TypeScript, TSX, and CSS</li>
          <li><strong>771</strong> media assets organized into the public directory</li>
          <li><strong>1,190</strong> individual file change operations logged across all commits</li>
          <li><strong>8</strong> embedded videos integrated with a custom responsive YouTubeEmbed component</li>
          <li><strong>33</strong> photography gallery images with a custom lightbox and right-click protection</li>
        </ul>
      </div>

      <div className="blog-callout">
        <div className="blog-callout-label">Claude usage</div>
        <ul className="blog-callout-list">
          <li>All code generated through Claude Code, Anthropic&rsquo;s terminal-based coding agent</li>
          <li>Estimated <strong>1.5 to 4 million tokens</strong> consumed across the full project</li>
          <li><strong>2 parallel Claude agent branches</strong> via git worktree: <code>claude/fervent-clarke</code> (mobile layout), <code>claude/elegant-satoshi</code> (YouTube integration)</li>
          <li>Total active time: approximately <strong>30 to 40 hours</strong> across 10 sessions</li>
        </ul>
      </div>

      <div className="blog-callout blog-callout--blue">
        <div className="blog-callout-label">Build comparison</div>
        <ul className="blog-callout-list">
          <li>Actual active build time: <strong>~30 to 40 hours</strong></li>
          <li>Equivalent traditional dev engagement: <strong>8 to 12 weeks / $15,000 to $40,000</strong></li>
          <li>Time saved: estimated <strong>300 to 500 hours</strong> of development work</li>
        </ul>
      </div>

      <p>
        Those are the raw numbers. Here is what they actually mean when you put
        them next to the people who use this tool professionally, full-time,
        at the highest level.
      </p>

      <BlogHeroImage
        src="/blog/fraud-prevention-case-study.png"
        alt="The Fraud Prevention Suite case study on displayedux.com — showing the site navigation, breadcrumb trail, case study hero, and bento stats grid"
        caption="The Fraud Prevention Suite case study — one of four built for the portfolio. The hero overlay, bento stats grid, case navigation, and responsive layout were all components written from scratch in these sessions."
      />

      <hr className="blog-divider" />

      {/* ── Section: The Benchmark ──────────────────────────────── */}
      <h2>How These Numbers Compare</h2>
      <p>
        I did not know how my output stacked up until I went looking. What I
        found was clarifying.
      </p>

      <h3>The ceiling: Boris Cherny, Claude Code&rsquo;s creator</h3>
      <p>
        Boris Cherny built Claude Code as a side project at Anthropic. In a
        tweet that got 4.4 million views, he shared his own numbers: 259 pull
        requests and 497 commits in 30 days. Roughly 40,000 lines of code
        added, 38,000 removed. Every single line written by Claude Code and
        Opus. Zero lines typed by hand. Token consumption so high he described
        it as the equivalent of reading Don Quixote 625 times in under two
        months.
      </p>
      <p>
        That is the ceiling. Cherny is Claude Code&rsquo;s author, running it
        on an active production codebase, full-time, with deep knowledge of
        the tool&rsquo;s internals. He is not a useful comparison for most people
        building real things.
      </p>

      <h3>The advanced solo builder: OnboardingHub</h3>
      <p>
        A more relevant benchmark is a documented build called OnboardingHub,
        a multi-tenant Rails SaaS with Stripe billing, Heroku deployment, and
        Cloudflare R2 storage. One developer. Claude as co-pilot from the first
        commit. The numbers: 727 commits across 36 active days. Around 89,600
        lines of code including tests. Busiest single day: 71 commits.
      </p>
      <p>
        The developer estimated 20 to 30x leverage. Roughly 35 hours of his
        actual attention. Equivalent traditional build: approximately 800 hours.
        Six months of solo full-time work compressed into 8 weeks of part-time
        oversight.
      </p>

      <h3>The enterprise benchmark: Anthropic&rsquo;s own engineering teams</h3>
      <p>
        Anthropic publishes internal metrics on their own Claude Code adoption.
        Teams using it internally have seen a 67% increase in pull requests
        merged per engineer per day. Across their engineering organization, 70
        to 90% of code is now written with Claude Code assistance.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: Where I Sit ─────────────────────────────────── */}
      <h2>Where My Numbers Actually Land</h2>
      <p>
        Against those benchmarks, here is an honest read of my output.
      </p>

      <h3>Commits: lower density, higher value per commit</h3>
      <p>
        My 47 commits over the full project looks thin next to 497 in 30 days
        or 727 in 36. But the comparison is not apples-to-apples. Advanced
        agentic users commit at the sub-feature level, constantly, producing
        hundreds of small auditable changes. My commits were doing more work
        each. The result is the same production codebase. The audit trail is
        coarser. A cleaner HANDOFF.md and better session briefs would push
        this number up in future projects, and that is a real improvement
        opportunity.
      </p>

      <h3>Lines of code: strong for the scope</h3>
      <p>
        OnboardingHub came in at roughly 89,600 lines for a full SaaS product
        with backend, billing, and multi-tenancy. My ~100,000 lines for a
        9-page portfolio site is comparable in raw volume. That reflects a
        production-quality bar: full dark mode via CSS custom properties,
        TypeScript throughout, custom lightbox with right-click protection,
        responsive video embeds, security headers, Netlify Forms integration,
        TeleSign Phone Intelligence on the contact form. This was not a
        template site.
      </p>

      <h3>Tokens: conservative, by design</h3>
      <p>
        My 1.5 to 4 million token estimate puts me well below what serious
        agentic sessions consume. A single full backend feature built from
        scratch can hit 200,000+ tokens in one session. My average of 150,000
        to 400,000 per session means I was staying in the loop more than
        advanced engineers do, reviewing and approving at each step rather than
        letting Claude run for multi-hour stretches unattended.
      </p>
      <p>
        For a portfolio site that needed to be right, not just fast, this was
        the correct tradeoff. There was no product manager who could catch
        architectural decisions I would regret. Every call was mine.
      </p>

      <h3>Leverage ratio: top quartile</h3>
      <p>
        Industry benchmarks for AI coding tools show average users saving 3 to
        5 hours per week. Top-quartile users save 5 to 8. The OnboardingHub
        developer hit 20 to 30x leverage. My 300 to 500 hours saved from 30
        to 40 hours of active work puts my leverage ratio at 7 to 12x. That
        is above the 80th percentile for Claude Code users. It is below the
        ceiling. The gap is primarily session autonomy: the most advanced users
        let the agent run longer with less intervention. That is a learnable
        workflow adjustment, not a fundamental capability limitation.
      </p>

      <div className="blog-callout blog-callout--blue">
        <div className="blog-callout-label">Honest position in the population</div>
        <ul className="blog-callout-list">
          <li>Commit density: below advanced users, appropriate for the review cadence I chose</li>
          <li>Lines of code: strong, comparable to a production SaaS build at this scope</li>
          <li>Token consumption: conservative, reflects hands-on oversight not passivity</li>
          <li>Leverage ratio: 7 to 12x, top quartile, below the 20 to 30x ceiling</li>
          <li>Workflow patterns (parallel worktrees, HANDOFF.md, MCP stack): genuinely advanced</li>
        </ul>
      </div>

      <hr className="blog-divider" />

      {/* ── Section: Two Things I Did That Were Actually Advanced ── */}
      <h2>Two Things I Did That Were Actually Advanced</h2>
      <p>
        Most analysis of my numbers focuses on what I did less of than power
        users. Two patterns in my workflow stand out as genuinely sophisticated,
        independent of volume.
      </p>

      <h3>1. Parallel agent branches via git worktree</h3>
      <p>
        The two merge commits in my history, <code>Merge claude/fervent-clarke</code>{' '}
        and <code>Merge claude/elegant-satoshi</code>, represent something most
        Claude Code users never attempt: true concurrent agent sessions on
        separate feature branches, working simultaneously, merging clean with
        no conflicts. One branch handled mobile layout fixes. The other handled
        YouTube embed integration. Both ran in the same session window.
      </p>
      <p>
        Anthropic&rsquo;s own documentation now highlights Agent Teams as a power
        feature. Running parallel worktrees to achieve the same result, before
        Agent Teams was widely documented, was a workflow I arrived at through
        the Filesystem MCP&rsquo;s scoped write access and a deliberate decision
        to use it as an advantage rather than work around it. Most people
        encountering that constraint treat it as a limitation. I used it as
        a structural forcing function for clean, auditable parallel work.
      </p>

      <h3>2. HANDOFF.md as persistent session memory</h3>
      <p>
        Claude has no memory between sessions. This is the constraint that
        breaks most multi-session builds. The standard response is to re-explain
        context at the start of each session, which is slow, imprecise, and
        compounds errors across sessions as the re-explanation drifts from
        reality.
      </p>
      <p>
        I wrote a <code>HANDOFF.md</code> file to the repository root at the
        end of every session. It captured what was built, what files changed,
        every open issue, and exact next steps. Each new session started by
        reading it. Claude read the file and had production-quality context
        from the first prompt, not from the fifth.
      </p>
      <p>
        Boris Cherny&rsquo;s explicit guidance on Claude Code session management
        is to treat context continuity as a first-class engineering problem.
        The HANDOFF.md pattern solves it. It is the right answer.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: What I Actually Built ──────────────────────── */}
      <h2>What I Actually Built</h2>
      <p>
        displayedux.com is a production portfolio site for 18 years of UX
        design work across enterprise SaaS, consumer mobile, and developer
        tools. The site needed to be more than a gallery. Every case study
        had to carry a genuine narrative with outcome metrics, process
        documentation, and embedded video walkthroughs.
      </p>
      <p>The four case studies published:</p>
      <ol className="blog-ordered-list">
        <li>
          <strong>TeleSign Self-Service Customer Portal</strong> — B2B SaaS
          redesign that cut onboarding from 67 to 35 days (48% reduction),
          scaling to 21B+ annual transactions
        </li>
        <li>
          <strong>Fraud Prevention Suite (TeleSign)</strong> — Fraud tooling
          for 5B+ phone number verifications per month and $500K to $2M+ daily
          revenue flows
        </li>
        <li>
          <strong>Messaging API Platform (TeleSign)</strong> — Unified 6
          communication channels (SMS, voice, WhatsApp, Viber, Line, RCS)
          into one interface
        </li>
        <li>
          <strong>Universal College Application (Appily.com)</strong> —
          47% completion rate vs. 20 to 35% industry average, scaled from
          250K to 1.5M users
        </li>
      </ol>
      <p>
        The technical stack: Next.js App Router, React 19, TypeScript, Tailwind
        CSS v4, deployed to Netlify with auto-deploy on push. Production-grade,
        statically-generated, sub-second load times.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: The Tools ──────────────────────────────────── */}
      <h2>The Tools: What Claude Code Is and How It Actually Works</h2>
      <p>
        Most coverage of AI-built websites refers to chat-based tools where
        you describe what you want and paste code manually. That is not what
        this was.
      </p>
      <p>
        Claude Code is Anthropic&rsquo;s CLI agent. You run it in a terminal. It
        has full access to your local file system. It executes commands, writes
        and edits code directly, manages git branches, and runs test automation.
        There is no copying and pasting. Claude Code writes to the file,
        commits to git, and you review the result.
      </p>
      <p>
        Four MCPs were active during this build:
      </p>

      <h3>Playwright MCP</h3>
      <p>
        Used for headless browser automation and visual QA. Claude navigated
        to each page, resized to specific viewport widths (390px iPhone,
        768px iPad, 1440px desktop), took full-page screenshots, and returned
        a visual assessment. When a layout issue was identified, Claude
        described what was wrong and wrote the fix without me touching the
        browser.
      </p>
      <p>
        A full QA pass across all 9 pages at 3 viewport sizes, 27 checks
        total, took roughly 20 to 25 minutes in a single automated session.
        Manually, that is 2 to 3 hours. Every single time.
      </p>
      <p>Specific catches Playwright MCP surfaced:</p>
      <ul className="blog-unordered-list">
        <li>Mobile hero images cropping incorrectly at 390px viewport</li>
        <li>Bento stat grid overflowing its container on narrow screens</li>
        <li>Lightbox z-index conflict with the sticky nav</li>
        <li>Missing mobile hamburger menu in dark mode</li>
        <li>YouTube embed aspect ratio collapse on narrow viewports</li>
      </ul>

      <BlogImage
        src="/blog/site-build-session-march19.png"
        alt="displayedux.com Fraud Prevention case study page captured by Playwright MCP during a QA session in March 2026"
        caption="This screenshot was taken by Playwright MCP during a QA session — Claude navigated to the page, resized the viewport, captured this, and returned a visual assessment. No browser interaction by hand."
        variant="bordered"
      />

      <h3>Filesystem MCP</h3>
      <p>
        Direct read/write access to all project files. Every component, every
        config file, every CSS rule was written and edited through this MCP
        without any manual copy-paste workflow. Write access is scoped to git
        worktrees, which turned out to be a structural advantage rather than
        a constraint.
      </p>

      <h3>Context Mode MCP</h3>
      <p>
        Semantic indexing and search across the entire codebase. The most
        visible use: the Cappex-to-Appily.com rebrand. Rather than manually
        searching 40+ files for every reference, Claude indexed the codebase,
        searched across all file types including metadata and OG tags, and
        replaced every instance including adding contextual notations near
        legacy screenshots. The entire codebase-wide rename took approximately
        8 minutes. Manually, with careful review, that is a 3 to 4 hour task
        with real risk of missing something buried in a meta tag.
      </p>

      <BlogImage
        src="/blog/messaging-api-workflow.png"
        alt="TeleSign Messaging API intelligent cascade diagram: message from carrier to Messaging API, falling back through Viber, WhatsApp, RCS, MMS, SMS, to Email"
        caption="The Messaging API intelligent cascade diagram — one of eight assets Claude embedded and captioned across the four case studies. The entire codebase was searchable via Context Mode MCP."
        variant="bordered"
      />

      <h3>Magic (21st.dev) MCP</h3>
      <p>
        Used for component pattern research. When building the bento grid
        layout, I queried Magic for implementations in React and Tailwind,
        reviewed the patterns, and used the best approach as a starting point.
        This MCP requires design judgment before anything reaches the codebase.
        It is a research tool, not an autopilot.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: Claude Code vs Claude Desktop ──────────────── */}
      <h2>Claude Code vs. Claude Desktop</h2>
      <p>
        <strong>Claude Desktop</strong> is the GUI chat interface. I used it
        for initial project brief development, design system decisions, content
        strategy, and reviewing final copy drafts.
      </p>
      <p>
        <strong>Claude Code</strong> (the CLI) handled all implementation: all
        47 commits, all component architecture decisions, all bug fixes, all
        MCP tool calls.
      </p>
      <p>
        The split: roughly 10 to 15% Claude Desktop for planning and content,
        85 to 90% Claude Code for everything else.
      </p>
      <div className="blog-pullquote">
        Claude Desktop is the whiteboard. Claude Code is the person who builds
        what&rsquo;s on it.
      </div>

      <hr className="blog-divider" />

      {/* ── Section: Session Log ───────────────────────────────── */}
      <h2>Session Log</h2>
      <p>
        What actually happened across 10 sessions, from first commit to
        production deployment.
      </p>

      <div className="blog-session">
        <div className="blog-session-header">Session 1 — Foundation (~4 hours)</div>
        <p>
          Project initialized from scratch. Next.js App Router, TypeScript,
          Tailwind CSS v4, Netlify config. Design system established: color
          palette, typography scale, CSS custom properties for light and dark
          mode. Nav, Footer, and ThemeToggle components built. Homepage hero
          section complete with bull&rsquo;s-eye animation.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 2 — Homepage Build (~5 hours)</div>
        <p>
          Stats strip, case study card grid, origin story section, philosophy
          section with glassmorphism cards and floating bull&rsquo;s-eyes. All
          homepage sections complete and responsive.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 3 — Case Study Infrastructure (~4 hours)</div>
        <p>
          Work index page, BentoGrid component, CaseStudyCard component, and
          the <code>lib/case-studies.ts</code> data file. All four case study
          slugs routed. <code>BentoStat</code> interface defined. All four
          bento grids populated with real outcome metrics.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Sessions 4 and 5 — Case Study Body Pages (~6 hours)</div>
        <p>
          <code>CaseStudyTemplate</code> component built. All four case study
          narrative sections authored: hero image with overlay, bento grid,
          overview text, process sections, outcome metrics, and case navigation.
          Responsive at all three viewport widths.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 6 — About Page (~3 hours)</div>
        <p>
          About page built: headshot, bio, stats attribution (AT TELESIGN /
          AT APPILY.COM), interests grid, photography section featuring
          grandfather Carl Zimmer&rsquo;s WWII work alongside my own photography.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 7 — Contact and Photography (~4 hours)</div>
        <p>
          Contact page with TeleSign Phone Number Intelligence integration:
          validation on blur, color-coded score badges, never blocks submission.
          Photography lightbox with 33 images, prev/next navigation, keyboard
          support, right-click protection. Netlify Forms wired to{' '}
          <code>/__forms.html</code>.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 8 — Video Integration (~3 hours)</div>
        <p>
          Parallel worktree session. <code>claude/elegant-satoshi</code> branch:
          custom <code>YouTubeEmbed</code> component with responsive iframe and
          proper parameters. 8 videos embedded across four case studies.
          Meanwhile, <code>claude/fervent-clarke</code> resolved mobile layout
          regressions on a separate branch. Both merged clean.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 9 — Full QA Pass (~2 hours)</div>
        <p>
          All 9 pages QA&rsquo;d at 1440px desktop, 390px mobile, and dark mode
          via Playwright. About page headshot fixed (Next.js{' '}
          <code>Image fill</code> replaced with plain <code>&lt;img&gt;</code>
          tag due to hydration mismatch in production).{' '}
          <code>og:image</code> social metadata fixed: edge runtime restored,
          static fallback URL added to <code>layout.tsx</code>. CS02 card
          thumbnail corrected.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 10 — Security Hardening (~2 hours)</div>
        <p>
          Production security layer added across the full stack. Details below.
        </p>
      </div>

      <hr className="blog-divider" />

      {/* ── Section: What Broke ─────────────────────────────────── */}
      <h2>What Broke (The Full Honest List)</h2>

      <h3>Mobile hero image cropping</h3>
      <p>
        Inline styles in <code>CaseStudyTemplate</code> were overriding Tailwind
        responsive classes. Fix: <code>@media</code> queries in a{' '}
        <code>&lt;style&gt;</code> block inside the component. When a component
        uses inline styles, stylesheet media queries beat Tailwind utility
        classes every time.
      </p>

      <h3>Bento grid horizontal scroll on mobile</h3>
      <p>
        Cards were overflowing containers at narrow viewports. Fix:{' '}
        <code>overflow-x: hidden</code> on the container,{' '}
        <code>flex-wrap: wrap</code> inside the grid, minimum-width constraints
        on cards.
      </p>

      <h3>TypeScript BentoStat interface</h3>
      <p>
        A cascading prop type error across the stat grid components took 5
        commits to fully resolve. The interface defined an array type where
        the component expected a single object. TypeScript caught every layer.
        Claude fixed them one at a time.
      </p>

      <h3>Netlify form detection</h3>
      <p>
        The <code>@netlify/plugin-nextjs</code> v5 migration changed where
        Netlify&rsquo;s form crawler looks for HTML forms. Required adding a static{' '}
        <code>__forms.html</code> file to <code>public/</code>.
      </p>

      <h3>Next.js Image fill on the About headshot</h3>
      <p>
        The <code>fill</code> layout mode requires the parent to have{' '}
        <code>position: relative</code> and explicit dimensions. The container
        was not set up correctly. Invisible in development. Broken in production.
        Replaced with a plain <code>&lt;img&gt;</code> tag.
      </p>

      <h3>og:image on Netlify edge runtime</h3>
      <p>
        The dynamic <code>opengraph-image.tsx</code> route using{' '}
        <code>ImageResponse</code> threw a 500 on Netlify&rsquo;s edge network.
        After multiple fix attempts, the dynamic route was removed and a static
        headshot URL set as the canonical og:image in <code>layout.tsx</code>.
        The dynamic route was clever. The static URL was correct.
      </p>

      <h3>File serving with special characters</h3>
      <p>
        Two screenshot filenames contained narrow no-break space characters
        (Unicode \u202F), which Netlify&rsquo;s file server treated as invalid paths.
        Fix: rename to standard ASCII spaces.
      </p>

      <h3>Context window exhaustion</h3>
      <p>
        On longer sessions, Claude&rsquo;s in-context memory compacts. Older
        instructions get summarized and some precision is lost. Mitigation:
        the HANDOFF.md file written to the repository root at the end of every
        session. Each new session starts by reading it. Claude has no persistent
        memory. This file is the memory.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: Security ───────────────────────────────────── */}
      <h2>The Security Layer</h2>
      <p>
        Session 10 was dedicated entirely to production security hardening. Most
        portfolio build posts skip this. I did not.
      </p>
      <p>
        <strong>HTTP security headers.</strong> Six headers added in both{' '}
        <code>next.config.ts</code> and <code>netlify.toml</code> as redundant
        layers: <code>X-Frame-Options: DENY</code>,{' '}
        <code>X-Content-Type-Options: nosniff</code>,{' '}
        <code>X-XSS-Protection: 1; mode=block</code>,{' '}
        <code>Referrer-Policy: strict-origin-when-cross-origin</code>,{' '}
        <code>Content-Security-Policy</code>, and <code>Permissions-Policy</code>.
      </p>
      <p>
        <strong>API route hardening.</strong> The <code>/api/telesign</code>{' '}
        route rejects requests from unrecognized origins and rate-limits to 5
        requests per IP per 15 minutes via an in-memory store.
      </p>
      <p>
        <strong>Netlify honeypot.</strong> A hidden <code>_gotcha</code> field
        on the contact form traps bot submissions. Real users never see it.
        Bots fill it in. Netlify silently discards those submissions. No CAPTCHA.
      </p>
      <p>
        <strong>Privacy policy.</strong> Full privacy policy page covering
        contact form data, the TeleSign check, Netlify Analytics, and
        third-party embeds. Linked in the footer.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: Raw Stats ──────────────────────────────────── */}
      <h2>Raw Stats Summary</h2>
      <div className="blog-table-wrap">
        <table className="blog-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>My numbers</th>
              <th>Advanced benchmark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Active build sessions</td>
              <td>10</td>
              <td>Ongoing daily work</td>
            </tr>
            <tr>
              <td>Total active hours</td>
              <td>~30 to 40 hours</td>
              <td>OnboardingHub: ~35 hrs (800 hrs equivalent)</td>
            </tr>
            <tr>
              <td>Git commits</td>
              <td>47</td>
              <td>Cherny: 497 in 30 days / OnboardingHub: 727 in 36 days</td>
            </tr>
            <tr>
              <td>Lines of code</td>
              <td>~100,000</td>
              <td>OnboardingHub: ~89,600 (full SaaS with tests)</td>
            </tr>
            <tr>
              <td>Source files</td>
              <td>624</td>
              <td>OnboardingHub: 657</td>
            </tr>
            <tr>
              <td>Estimated token consumption</td>
              <td>1.5 to 4 million</td>
              <td>Cherny: ~360 million in 2 months</td>
            </tr>
            <tr>
              <td>Leverage ratio</td>
              <td>7 to 12x</td>
              <td>OnboardingHub: 20 to 30x / Industry avg: 3 to 5x</td>
            </tr>
            <tr>
              <td>Pages built</td>
              <td>9</td>
              <td>N/A (SaaS comparison)</td>
            </tr>
            <tr>
              <td>Parallel agent sessions</td>
              <td>2 (git worktrees)</td>
              <td>Rakuten: 6 repos simultaneously</td>
            </tr>
            <tr>
              <td>Equivalent traditional build</td>
              <td>8 to 12 weeks / $15K to $40K</td>
              <td>Consistent across all benchmarks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="blog-divider" />

      {/* ── Section: What This Means ─────────────────────────────── */}
      <h2>What This Means If You&rsquo;re a Designer</h2>
      <p>
        There is a framing that treats AI coding tools as a threat to designers.
        The benchmarks do not support that framing.
      </p>
      <p>
        What Claude Code cannot do: decide whether the design is right. The
        information architecture of this site — what goes on the homepage, how
        case studies are structured, what the above-the-fold content
        communicates to a recruiting manager versus a potential client — came
        entirely from 18 years of knowing what good looks like. Claude executed
        the architecture. It did not produce it.
      </p>
      <p>
        What the benchmarks show clearly: the designers and engineers who will
        be most effective over the next five years are not the ones who type
        the most code. They are the ones who give the clearest briefs, ask the
        most precise QA questions, and make the sharpest architectural decisions
        before a session starts. Those are core UX competencies. They transfer
        directly.
      </p>
      <p>
        The gap between my 7 to 12x leverage and the ceiling of 20 to 30x is
        not a gap in design skill. It is a gap in session management: longer
        runs, more autonomy, more aggressive iteration. That is a learnable
        workflow adjustment. The fundamentals — knowing what to build, knowing
        when it is wrong, knowing how to describe the problem precisely — are
        the same skills I have been developing for 18 years.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: The Playbook ───────────────────────────────── */}
      <h2>The Playbook</h2>
      <p>What made this work, in order of importance:</p>
      <ol className="blog-ordered-list blog-ordered-list--playbook">
        <li>
          <strong>Claude Code CLI over Claude Desktop</strong> for all
          implementation. The CLI has file system access, git integration,
          and MCP tool execution. The chat interface does not.
        </li>
        <li>
          <strong>Playwright MCP</strong> for visual QA. Full 27-viewport pass
          in 20 minutes instead of 2 to 3 hours.
        </li>
        <li>
          <strong>Git worktree pattern</strong> for every change. Feature
          branches, auditability, and rollback, automatically. Parallel
          worktrees for concurrent independent workstreams.
        </li>
        <li>
          <strong>HANDOFF.md</strong> at the end of every session. Claude has
          no persistent memory. This file is the memory. Boris Cherny identifies
          session context management as a first-class engineering problem.
          This is the solution.
        </li>
        <li>
          <strong>Context Mode MCP</strong> for codebase-wide operations.
          Renaming, finding all usages of a pattern, refactoring across files.
        </li>
        <li>
          <strong>Design decisions before build sessions.</strong> Sessions
          with a clear brief produced clean output. Sessions where I was still
          figuring out what I wanted produced backtracking. This is the same
          principle that makes UX discovery valuable: know the problem before
          you pick up the tool.
        </li>
      </ol>

      <hr className="blog-divider" />

      {/* ── Section: What's Next ─────────────────────────────────── */}
      <h2>What&rsquo;s Next</h2>
      <p>displayedux.com is version one. On the roadmap:</p>
      <ul className="blog-unordered-list">
        <li>Blog section on the site (this post is the first entry)</li>
        <li>Case study filtering by industry, deliverable type, and platform</li>
        <li>A client engagement model for designers and small teams who want a portfolio built this way</li>
        <li>A second client site using this same playbook, to prove repeatability</li>
      </ul>
      <p>
        If you are a designer with 10+ years of work and a portfolio that does
        not show it, reach out:{' '}
        <a
          href="mailto:d2drisco@icloud.com"
          style={{ color: '#3B5CE8', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}
        >
          d2drisco@icloud.com
        </a>.
      </p>

      <BlogImage
        src="/blog/contact-page-finished.png"
        alt="displayedux.com contact page showing the glassmorphism form card, TeleSign phone verification, and royal blue footer"
        caption="displayedux.com/contact — where the brief ends and the conversation starts."
        variant="bordered"
      />

      <hr className="blog-divider" />

      <div className="blog-author-bio">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem' }}>
          <div style={{ position: 'relative', width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--color-border)' }}>
            <img
              src="/blog/headshot-blue-background.png"
              alt="Danny Driscoll"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text-primary)', margin: 0 }}>Danny Driscoll</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', margin: '2px 0 0' }}>Principal Product Designer &nbsp;&middot;&nbsp; displayedux.com</p>
          </div>
        </div>
        <p>
          <em>
            Danny Driscoll is a product designer with 18+ years of experience
            across enterprise SaaS, consumer mobile, and developer tools.
            Currently open to Senior / Principal / Director Product Design roles
            in enterprise B2B. Based in Ann Arbor, Michigan.{' '}
            <a
              href="https://displayedux.com"
              style={{ color: '#3B5CE8', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}
            >
              displayedux.com
            </a>
          </em>
        </p>
      </div>

    </article>
  )
}
