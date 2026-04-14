/* ─────────────────────────────────────────────────────────────────
   Blog post: "I Used Claude Code to Build My Entire UX Portfolio"
   Danny Driscoll · April 2026
───────────────────────────────────────────────────────────────── */

export function ClaudeCodePortfolioPost() {
  return (
    <article className="blog-content">

      {/* ── Section: The Numbers First ──────────────────────────── */}
      <h2>The Numbers First, Because That&rsquo;s What You&rsquo;re Here For</h2>
      <p>
        Before I explain what happened, here&rsquo;s the raw data from the git
        repository, the session logs, and the deployment history.
      </p>

      <div className="blog-callout">
        <div className="blog-callout-label">Project scope</div>
        <ul className="blog-callout-list">
          <li><strong>47</strong> git commits across 10 focused build sessions</li>
          <li><strong>9 pages</strong> built: homepage, 4 case studies, work index, about, contact, photography, privacy policy</li>
          <li><strong>12</strong> custom React components authored from scratch</li>
          <li><strong>624</strong> source files in the final build</li>
          <li><strong>~100,000</strong> lines of TypeScript, TSX, and CSS</li>
          <li><strong>771</strong> media assets (images, videos, favicons) organized into the public directory</li>
          <li><strong>1,190</strong> individual file change operations logged across all commits</li>
          <li><strong>8</strong> embedded videos integrated with a custom responsive YouTubeEmbed component</li>
          <li><strong>33</strong> photography gallery images with a custom lightbox and right-click protection</li>
        </ul>
      </div>

      <div className="blog-callout">
        <div className="blog-callout-label">Claude usage — Claude Code CLI (primary tool)</div>
        <ul className="blog-callout-list">
          <li>All code was generated through Claude Code, Anthropic&rsquo;s terminal-based coding agent</li>
          <li>Estimated <strong>1.5&ndash;4 million tokens</strong> consumed across the full project</li>
          <li><strong>2 parallel Claude agent branches</strong> spawned via git worktree: <code>claude/fervent-clarke</code> (mobile layout fixes), <code>claude/elegant-satoshi</code> (YouTube integration)</li>
          <li>Total active time with Claude engaged: approximately <strong>30&ndash;40 hours</strong> across 10 sessions</li>
        </ul>
      </div>

      <div className="blog-callout blog-callout--blue">
        <div className="blog-callout-label">Build comparison</div>
        <ul className="blog-callout-list">
          <li>Actual active build time: <strong>~30&ndash;40 hours</strong></li>
          <li>Equivalent traditional dev engagement: <strong>8&ndash;12 weeks / $15,000&ndash;$40,000</strong></li>
          <li>Time saved: estimated <strong>300&ndash;500 hours</strong> of development work</li>
        </ul>
      </div>

      <p>
        To be clear about what &ldquo;30&ndash;40 hours&rdquo; means: this was
        not a month of daily grind. It was 10 focused sessions&mdash;some a few
        hours, one or two running most of a day&mdash;spread across my schedule.
        The site didn&rsquo;t take a long time to build. It took a surprisingly
        short amount of my actual attention to build something that would have
        otherwise required a developer and a significant budget.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: What I Actually Built ──────────────────────── */}
      <h2>What I Actually Built</h2>
      <p>
        displayedux.com is a production portfolio site for 18 years of UX design
        work across enterprise SaaS, consumer mobile, and developer tools. The
        site needed to be more than a gallery&mdash;every case study had to carry
        a genuine narrative, with outcome metrics, process documentation, and
        embedded video walkthroughs.
      </p>
      <p>The four case studies published:</p>
      <ol className="blog-ordered-list">
        <li>
          <strong>TeleSign Self-Service Customer Portal</strong>&mdash;B2B SaaS
          redesign that cut onboarding from 67 to 35 days (48% reduction),
          scaling to 21B+ annual transactions
        </li>
        <li>
          <strong>Fraud Prevention Suite (TeleSign)</strong>&mdash;Designed fraud
          tooling for 5B+ phone number verifications per month and
          $500K&rarr;$2M daily revenue flows
        </li>
        <li>
          <strong>Messaging API Platform (TeleSign)</strong>&mdash;Unified 6
          communication channels (SMS, voice, WhatsApp, Viber, Line, RCS) into
          one interface
        </li>
        <li>
          <strong>Universal College Application (Appily.com)</strong>&mdash;Achieved
          47% completion rate vs. 20&ndash;35% industry average, scaled from
          250K to 1.5M users
        </li>
      </ol>
      <p>
        The technical stack: Next.js (App Router), React 19, TypeScript, Tailwind
        CSS v4, deployed to Netlify with auto-deploy on push. Production-grade,
        statically-generated, sub-second load times.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: The Tools ──────────────────────────────────── */}
      <h2>The Tools: What Claude Code Is and How It Actually Works</h2>
      <p>
        Most coverage of &ldquo;AI-built websites&rdquo; refers to chat-based
        tools where you describe what you want and paste code manually. That
        &rsquo;s not what this was.
      </p>
      <p>
        <strong>Claude Code</strong> is Anthropic&rsquo;s CLI agent&mdash;you
        run it in a terminal, it has full access to your local file system, it
        executes commands, writes and edits code directly, manages git branches,
        and runs test automation. There&rsquo;s no copying and pasting. Claude
        Code writes to the file, commits to git, and you review the result.
      </p>
      <p>
        Within Claude Code, the following MCPs (Model Context Protocol plugins)
        were active during this build:
      </p>

      <h3>Playwright MCP</h3>
      <p>
        Used for headless browser automation and visual QA throughout the
        project. Claude would navigate to each page, resize the browser to
        specific viewport widths (390px for iPhone, 768px for iPad, 1440px for
        desktop), take full-page screenshots, and return a visual assessment.
        When a layout issue was identified, Claude described what was wrong and
        wrote the fix&mdash;without me touching the browser.
      </p>
      <p>
        What this meant in practice: a full QA pass across all 9 pages at 3
        viewport sizes&mdash;27 viewport checks&mdash;that would have taken me
        2&ndash;3 hours manually took roughly 20&ndash;25 minutes in a single
        automated session. Every single time.
      </p>
      <p>Specific catches Playwright MCP surfaced:</p>
      <ul className="blog-unordered-list">
        <li>Mobile hero images cropping incorrectly (face cut off at 390px viewport)</li>
        <li>Bento stat grid overflowing its container on narrow screens (causing horizontal scroll)</li>
        <li>Lightbox z-index conflict with the sticky nav</li>
        <li>Missing mobile hamburger menu in dark mode</li>
        <li>YouTube embed aspect ratio collapse on narrow viewports</li>
      </ul>

      <h3>Filesystem MCP</h3>
      <p>
        Direct read/write access to all project files. Every component, every
        config file, every CSS rule was written and edited through this MCP
        without any manual copy-paste workflow. Notably, this MCP&rsquo;s write
        access is scoped to git worktrees&mdash;which turned out to be a
        structural advantage (more on that below).
      </p>

      <h3>Context Mode MCP</h3>
      <p>
        Semantic indexing and search across the entire codebase. The most visible
        use: the Cappex-to-Appily.com rebrand. Rather than manually searching
        40+ files for every &ldquo;Cappex&rdquo; reference, Claude used Context
        Mode to index the codebase, search across all file types (TSX, TS, CSS,
        metadata, OG tags, alt text), and replace every instance&mdash;including
        adding &ldquo;formerly Cappex&rdquo; notations near legacy screenshots so
        historical context wasn&rsquo;t stripped. The entire codebase-wide rename
        took approximately 8 minutes. Manually, with careful review of every
        file, this is a 3&ndash;4 hour task with real risk of missing something
        buried in a meta tag.
      </p>

      <h3>Magic (21st.dev) MCP</h3>
      <p>
        Used for component pattern research. When building the bento grid layout
        for the stat cards, I queried Magic for bento grid implementations in
        React/Tailwind, reviewed the patterns, and used the best approach as a
        starting point. This MCP requires design judgment before anything reaches
        the codebase&mdash;it&rsquo;s a research tool, not an autopilot.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: Claude Code vs Claude Desktop ──────────────── */}
      <h2>Claude Code vs. Claude Desktop&mdash;What&rsquo;s the Difference and When I Used Each</h2>
      <p>
        <strong>Claude Desktop</strong> is the GUI chat interface&mdash;what most
        people think of when they think &ldquo;Claude.&rdquo; I used Claude
        Desktop for:
      </p>
      <ul className="blog-unordered-list">
        <li>Initial project brief development (site goals, target audience, case study narrative structure)</li>
        <li>Design system decisions (color palette, typography rationale)</li>
        <li>Content strategy (structuring case studies for hiring managers vs. potential clients)</li>
        <li>Reviewing final copy drafts for tone</li>
      </ul>
      <p>
        <strong>Claude Code</strong> (the CLI) handled all implementation:
      </p>
      <ul className="blog-unordered-list">
        <li>All 47 commits generated through Claude Code</li>
        <li>All component architecture decisions made in-context with the running code</li>
        <li>All bug fixes, layout corrections, and QA responses</li>
        <li>All MCP tool calls (Playwright, Filesystem, Context Mode, Magic)</li>
      </ul>
      <p>
        The rough split: ~10&ndash;15% Claude Desktop for planning and content;
        ~85&ndash;90% Claude Code for everything else.
      </p>
      <div className="blog-pullquote">
        Claude Desktop is the whiteboard. Claude Code is the person who builds
        what&rsquo;s on it.
      </div>

      <hr className="blog-divider" />

      {/* ── Section: Git Worktree ───────────────────────────────── */}
      <h2>The Git Worktree Pattern&mdash;Why This Was a Feature, Not a Bug</h2>
      <p>
        The Filesystem MCP&rsquo;s write access is scoped to git worktrees rather
        than the main repository checkout. Initially I thought this was an
        inconvenience. It turned out to be the best structural decision of the
        project.
      </p>
      <p>
        Every change Claude made happened on a named feature branch inside a
        worktree. Claude would create the worktree, make changes, commit them
        with a descriptive message, merge back to{' '}
        <code>design-v2</code>, and push. The result: a clean, auditable commit
        history where every change is traceable to a specific decision or bug fix.
      </p>
      <p>
        The two merge commits in the history&mdash;<code>Merge claude/fervent-clarke</code>{' '}
        and <code>Merge claude/elegant-satoshi</code>&mdash;represent parallel
        agent sessions that ran as true concurrent branches. Claude was working on
        mobile layout fixes on one branch while simultaneously integrating YouTube
        embeds on another. Both merged cleanly with no conflicts. Two independent
        workstreams ran in the same session, cutting that session&rsquo;s output
        roughly in half the time it would have taken sequentially.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: Session Log ───────────────────────────────── */}
      <h2>Session Log</h2>
      <p>
        What actually happened across 10 sessions, from the first commit to
        production deployment.
      </p>

      <div className="blog-session">
        <div className="blog-session-header">Session 1&mdash;Foundation (~4 hours)</div>
        <p>
          Project initialized from scratch. Next.js App Router, TypeScript,
          Tailwind CSS v4, Netlify config. Design system established: color
          palette, typography scale, CSS custom properties for light/dark mode.
          Nav, Footer, and ThemeToggle components built. Homepage hero section
          complete with bull&rsquo;s-eye animation.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 2&mdash;Homepage Build (~5 hours)</div>
        <p>
          Stats strip, case study card grid, origin story section, philosophy
          section (glassmorphism cards with floating bull&rsquo;s-eyes). All
          homepage sections complete and responsive.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 3&mdash;Case Study Infrastructure (~4 hours)</div>
        <p>
          Work index page, BentoGrid component, CaseStudyCard component, and the{' '}
          <code>lib/case-studies.ts</code> data file. All four case study slugs
          routed. <code>BentoStat</code> interface defined and all four bento
          grids populated with real outcome metrics.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Sessions 4&ndash;5&mdash;Case Study Body Pages (~6 hours)</div>
        <p>
          <code>CaseStudyTemplate</code> component built. All four case study
          narrative sections authored: hero image with overlay, bento grid,
          overview text, process sections, outcome metrics, and case navigation.
          Responsive at all three viewport widths.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 6&mdash;About Page (~3 hours)</div>
        <p>
          About page built: headshot, bio, stats attribution (AT TELESIGN / AT
          APPILY.COM), interests grid, photography section featuring grandfather
          Carl Zimmer&rsquo;s WWII work.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 7&mdash;Contact Page and Photography (~4 hours)</div>
        <p>
          Contact page with TeleSign Phone Number Intelligence integration
          (validation on blur, color-coded score badges). Photography lightbox
          with 33 images, prev/next navigation, keyboard support, right-click
          protection. Netlify Forms wired to{' '}<code>/__forms.html</code>.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 8&mdash;Video Integration (~3 hours)</div>
        <p>
          Parallel worktree session. <code>claude/elegant-satoshi</code> branch:
          custom <code>YouTubeEmbed</code> component with responsive iframe,{' '}
          <code>start=</code>, <code>rel=0</code>, <code>modestbranding=1</code>{' '}
          parameters. 8 videos embedded across four case studies.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 9&mdash;Full QA Pass (~2 hours)</div>
        <p>
          All 9 pages QA&rsquo;d at 1440px desktop, 390px mobile, and dark mode
          via Playwright. About page headshot fixed (Next.js <code>Image fill</code>{' '}
          component replaced with plain <code>&lt;img&gt;</code> tag&mdash;the
          component was causing a hydration mismatch visible only in production).{' '}
          <code>og:image</code> social metadata fixed: edge runtime restored,
          static fallback URL added to <code>layout.tsx</code>. CS02 card
          thumbnail corrected.
        </p>
      </div>

      <div className="blog-session">
        <div className="blog-session-header">Session 10&mdash;Security Hardening (~2 hours)</div>
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
        <code>&lt;style&gt;</code> block inside the component. Key lesson: when a
        component uses inline styles, stylesheet media queries beat Tailwind
        utility classes every time.
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
        A cascading prop type error across the stat grid components took 5 commits
        to fully resolve. The interface defined an array type where the component
        expected a single object. TypeScript caught every layer; Claude fixed them
        one at a time.
      </p>

      <h3>Netlify form detection</h3>
      <p>
        The <code>@netlify/plugin-nextjs</code> v5 migration changed where
        Netlify&rsquo;s form crawler looks for HTML forms. Required adding a
        static <code>__forms.html</code> file to <code>public/</code> with the
        hidden form markup.
      </p>

      <h3>Next.js Image fill on the About headshot</h3>
      <p>
        The <code>fill</code> layout mode requires the parent to have{' '}
        <code>position: relative</code> and explicit dimensions. The container
        wasn&rsquo;t set up correctly&mdash;invisible in development, broken in
        production. Replaced with a plain <code>&lt;img&gt;</code> tag.
      </p>

      <h3>og:image on Netlify edge runtime</h3>
      <p>
        The dynamic <code>opengraph-image.tsx</code> route using{' '}
        <code>ImageResponse</code> threw a 500 on Netlify&rsquo;s edge network.
        After multiple fix attempts, we removed the dynamic route and set a static
        headshot URL as the canonical og:image in <code>layout.tsx</code>. The
        dynamic route was clever; the static URL was correct.
      </p>

      <h3>File serving with special characters</h3>
      <p>
        Two screenshot filenames contained narrow no-break space characters
        (Unicode \u202F), which Netlify&rsquo;s file server treated as invalid
        paths. Fix: rename to standard ASCII spaces.
      </p>

      <h3>Context window exhaustion</h3>
      <p>
        On longer sessions, Claude&rsquo;s in-context memory compacts&mdash;older
        instructions get summarized and some precision is lost. Mitigation: a{' '}
        <code>HANDOFF.md</code> file written to the repository root at the end of
        every session. It captures what was built, what files changed, open
        issues, and exact next steps. Each new session starts by reading it.
        Claude doesn&rsquo;t have persistent memory; this file is the memory.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: Security ───────────────────────────────────── */}
      <h2>The Security Layer (What Most Portfolio Build Posts Skip)</h2>
      <p>Session 10 was dedicated entirely to production security hardening.</p>

      <p>
        <strong>HTTP security headers.</strong> Six headers added in both{' '}
        <code>next.config.ts</code> and <code>netlify.toml</code> (redundant
        layers): <code>X-Frame-Options: DENY</code> (clickjacking),{' '}
        <code>X-Content-Type-Options: nosniff</code> (MIME-sniffing),{' '}
        <code>X-XSS-Protection: 1; mode=block</code>,{' '}
        <code>Referrer-Policy: strict-origin-when-cross-origin</code>,{' '}
        <code>Content-Security-Policy</code> (restricts script/style/image
        origins), <code>Permissions-Policy</code> (disables camera, microphone,
        geolocation).
      </p>

      <p>
        <strong>API route hardening.</strong> The <code>/api/telesign</code> route
        (TeleSign Phone Intelligence for contact form validation) now rejects
        requests from unrecognized origins and rate-limits to 5 requests per IP
        per 15 minutes via an in-memory store.
      </p>

      <p>
        <strong>Netlify honeypot.</strong> A hidden <code>_gotcha</code> field on
        the contact form traps bot submissions. Real users don&rsquo;t see it;
        bots fill it in; Netlify silently discards those submissions. No CAPTCHA.
      </p>

      <p>
        <strong>Privacy policy.</strong> Full privacy policy page covering contact
        form data, the TeleSign check, Netlify Analytics, and third-party embeds.
        Linked in the footer.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: MCP That Didn't Make the Cut ──────────────── */}
      <h2>The MCP That Didn&rsquo;t Make the Cut</h2>
      <p>
        <strong>Computer Use.</strong> I attempted to configure a Computer Use MCP
        for direct desktop control. It connected but wasn&rsquo;t stable on macOS
        Sequoia. Playwright MCP covered all visual QA needs, so I dropped it. Not
        every tool earns its place&mdash;the point is to ship.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: Raw Stats Table ────────────────────────────── */}
      <h2>Raw Stats Summary</h2>
      <div className="blog-table-wrap">
        <table className="blog-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Active build sessions</td><td>10</td></tr>
            <tr><td>Total active hours</td><td>~30&ndash;40 hours</td></tr>
            <tr><td>Total git commits</td><td>47</td></tr>
            <tr><td>Source files</td><td>624</td></tr>
            <tr><td>Lines of code (TS/TSX/CSS)</td><td>~100,000</td></tr>
            <tr><td>Public media assets</td><td>771</td></tr>
            <tr><td>Pages built</td><td>9</td></tr>
            <tr><td>Custom React components</td><td>12</td></tr>
            <tr><td>Videos embedded</td><td>8</td></tr>
            <tr><td>Photography gallery images</td><td>33</td></tr>
            <tr><td>Parallel agent sessions</td><td>2 (git worktrees)</td></tr>
            <tr><td>MCP tools active</td><td>4 (Playwright, Filesystem, Context Mode, Magic)</td></tr>
            <tr><td>Estimated token consumption</td><td>1.5&ndash;4 million tokens</td></tr>
            <tr><td>Claude Code share of build</td><td>~85&ndash;90%</td></tr>
            <tr><td>Claude Desktop share of build</td><td>~10&ndash;15%</td></tr>
            <tr><td>Equivalent traditional build</td><td>8&ndash;12 weeks / $15K&ndash;$40K</td></tr>
          </tbody>
        </table>
      </div>

      <hr className="blog-divider" />

      {/* ── Section: What This Means ─────────────────────────────── */}
      <h2>What This Means If You&rsquo;re a Designer</h2>
      <p>
        There&rsquo;s a framing that treats AI coding tools as a threat to
        designers. I don&rsquo;t think that&rsquo;s useful.
      </p>
      <p>
        What Claude Code cannot do: decide whether the design is right. The
        information architecture of this site&mdash;what goes on the homepage,
        how case studies are structured, what the above-the-fold content
        communicates to a recruiting manager vs. a potential client&mdash;came
        entirely from 18 years of knowing what good looks like. Claude executed
        the architecture. It didn&rsquo;t produce it.
      </p>
      <p>
        What Claude Code can do: eliminate the implementation gap. For most of my
        career, the gap between &ldquo;I know what this should be&rdquo; and
        &ldquo;this is built and live&rdquo; was 10:1 in favor of building time.
        With this workflow, it&rsquo;s closer to 1:1. More time on the design
        decisions that actually matter, more iterations on the things that are
        hard to get right, faster time to market.
      </p>
      <p>
        The skill that matters here is not coding. It&rsquo;s directing. Clear
        briefs. Precise QA feedback. The ability to look at what was generated and
        articulate exactly what&rsquo;s wrong and why. Those are core UX
        competencies. They transfer directly.
      </p>

      <hr className="blog-divider" />

      {/* ── Section: The Playbook ───────────────────────────────── */}
      <h2>The Playbook</h2>
      <p>What made this work, in order of importance:</p>
      <ol className="blog-ordered-list blog-ordered-list--playbook">
        <li>
          <strong>Claude Code CLI over Claude Desktop</strong> for all
          implementation. The CLI has file system access, git integration, and MCP
          tool execution. The chat interface does not.
        </li>
        <li>
          <strong>Playwright MCP</strong> for visual QA. Full 27-viewport QA pass
          in 20 minutes instead of 2&ndash;3 hours.
        </li>
        <li>
          <strong>Git worktree pattern</strong> for every change. Feature branches,
          auditability, and rollback&mdash;automatically.
        </li>
        <li>
          <strong>HANDOFF.md</strong> at the end of every session. Claude has no
          persistent memory. This file is the memory.
        </li>
        <li>
          <strong>Context Mode MCP</strong> for codebase-wide operations. Renaming,
          finding all usages of a pattern, refactoring across files.
        </li>
        <li>
          <strong>Design decisions before build sessions.</strong> Sessions with a
          clear brief produced clean output. Sessions where I was still figuring
          out what I wanted produced backtracking.
        </li>
      </ol>

      <hr className="blog-divider" />

      {/* ── Section: What's Next ─────────────────────────────────── */}
      <h2>What&rsquo;s Next</h2>
      <p>displayedux.com is version one. On the roadmap:</p>
      <ul className="blog-unordered-list">
        <li>Blog section on the site (this post is the first entry)</li>
        <li>Case study filtering by industry, deliverable type, and platform</li>
        <li>A client engagement model page for designers and small teams who want a portfolio built this way</li>
        <li>A second client site using this same playbook&mdash;to prove repeatability</li>
      </ul>
      <p>
        If you&rsquo;re a designer with 10+ years of work and a portfolio that
        doesn&rsquo;t show it&mdash;reach out:{' '}
        <a
          href="mailto:d2drisco@icloud.com"
          style={{ color: '#3B5CE8', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}
        >
          d2drisco@icloud.com
        </a>.
      </p>

      <hr className="blog-divider" />

      {/* ── Author bio footer ───────────────────────────────────── */}
      <div className="blog-author-bio">
        <p>
          <em>
            Danny Driscoll is a product designer with 18+ years of experience
            across enterprise SaaS, consumer mobile, and developer tools.
            Currently open to Senior / Principal / Director Product Design roles
            in enterprise B2B. Based in Ann Arbor, Michigan.
          </em>
        </p>
      </div>

    </article>
  )
}
