/* ─── Types ──────────────────────────────────────────────────────── */

export interface BlogStat {
  value: string
  label: string
  /** Optional hex accent for the value — defaults to brand blue */
  accentHex?: string
}

export interface BlogPost {
  /** URL-safe identifier — matches /writing/[slug] routes */
  slug: string
  /** Full title shown on index card and article page */
  title: string
  /** Shortened version for breadcrumbs */
  shortTitle: string
  /** Display date — e.g. "April 2026" */
  date: string
  /** ISO date string for <time> elements */
  dateISO: string
  /** Estimated read time in minutes */
  readTime: number
  /** Category tag */
  tag: string
  /** Accent color for the tag pill */
  tagColor: 'blue' | 'coral' | 'amber' | 'magenta' | 'lightBlue'
  /** One-paragraph excerpt for index cards */
  excerpt: string
  /**
   * Thumbnail shown on the writing index cards.
   * Path relative to /public — e.g. /blog/images/post1-thumb.png
   */
  thumbnailImage?: string
  /** Alt text for the thumbnail */
  thumbnailAlt?: string
  /**
   * Hero image path — relative to /public (e.g. /blog/hero.png).
   * When present, replaces the bullseye placeholder on the article page.
   */
  heroImage?: string
  /** Alt text for the hero image */
  heroImageAlt?: string
  /**
   * 3–4 key stats shown on the featured card and article header.
   * First stat is the hero number.
   */
  stats: BlogStat[]
  /**
   * Sidebar TOC entries — must match the actual H2 headings in the post body.
   * Rendered in the "On this page" sidebar at lg+ viewports.
   */
  tocEntries: string[]
}

/* ─── Registry ───────────────────────────────────────────────────── */

export const blogPosts: BlogPost[] = [

  {
    slug:           'claude-code-portfolio',
    title:          'I Used Claude Code to Build My Entire UX Portfolio. Here Are the Actual Numbers.',
    shortTitle:     'Building displayedux.com with Claude Code',
    date:           'April 2026',
    dateISO:        '2026-04-01',
    readTime:       12,
    tag:            'Technical',
    tagColor:       'lightBlue',
    thumbnailImage: '/blog/terminal-hero-thumb.png',
    thumbnailAlt:   'Claude Code terminal showing MCP server connections and live word count — the actual build environment used to create displayedux.com',
    heroImage:      '/blog/blog-hero-homepage-live.png',
    heroImageAlt:   'displayedux.com homepage — the finished portfolio site built entirely with Claude Code',
    excerpt:
      '47 git commits. 10 build sessions. ~100K lines of code. One designer, no developer. Here is every number, every failure, and the exact workflow behind displayedux.com.',
    stats: [
      { value: '47',   label: 'Git commits',         accentHex: '#3B5CE8' },
      { value: '~40h', label: 'Active build time' },
      { value: '9',    label: 'Pages built',          accentHex: '#F47060' },
      { value: '$40K', label: 'Dev cost saved',        accentHex: '#3B5CE8' },
    ],
    tocEntries: [
      'The Numbers First',
      'How These Numbers Compare',
      'Where My Numbers Actually Land',
      'Two Things I Did That Were Actually Advanced',
      'What I Actually Built',
      'The Tools: What Claude Code Is and How It Actually Works',
      'Claude Code vs. Claude Desktop',
      'Session Log',
      'What Broke (The Full Honest List)',
      'The Security Layer',
      'Raw Stats Summary',
      "What This Means If You're a Designer",
      'The Playbook',
      "What's Next",
    ],
  },

  {
    slug:           'mental-models-cognitive-load',
    title:          'Mental Models, User Data, and the Quiet Goal of Less Cognitive Load',
    shortTitle:     'Mental models & cognitive load',
    date:           'April 2026',
    dateISO:        '2026-04-15',
    readTime:       8,
    tag:            'Process',
    tagColor:       'blue',
    thumbnailImage: '/images/writing/mental-models-cognitive-load/hero-mental-models.svg',
    thumbnailAlt:   'Three-stage diagram: mental model, A/B test confirmation, simplified UI.',
    heroImage:      '/images/writing/mental-models-cognitive-load/hero-mental-models.svg',
    heroImageAlt:   'Three-stage diagram: mental model, A/B test confirmation, simplified UI.',
    excerpt:
      "The mental model is the hypothesis. The data is the proof. Eighteen years of A/B and multivariate testing have taught me what to do when the two agree, and what to do when they don't.",
    stats: [
      { value: '23%',    label: 'Discovery rise — Netflix XP', accentHex: '#3B5CE8' },
      { value: '67→0',   label: 'Days — Self-Service onboarding' },
      { value: '4',      label: 'Variants tested',             accentHex: '#F47060' },
      { value: '18 yrs', label: 'A/B testing' },
    ],
    tocEntries: [
      'The Netflix household',
      'The method',
      'The Self-Service Portal',
      'What eighteen years of testing has taught me',
    ],
  },

  /* ── ARCHIVED 2026-04-30: replaced by 'mental-models-cognitive-load'; old URL redirects in next.config.ts ──
  {
    slug:           'case-study-writing',
    title:          'How I Write Case Studies That Get Callbacks at the Principal Level',
    shortTitle:     'Writing case studies for Principal-level roles',
    date:           'March 2026',
    dateISO:        '2026-03-10',
    readTime:       8,
    tag:            'Process',
    tagColor:       'blue',
    thumbnailImage: '/blog/case-study-page-screenshot.png',
    thumbnailAlt:   'The TeleSign Self-Service Customer Portal case study on displayedux.com — showing case study structure, key stats, and narrative sections',
    heroImage:      '/blog/case-study-page-screenshot.png',
    heroImageAlt:   'The TeleSign Self-Service Portal case study page on displayedux.com',
    excerpt:
      'Four case studies. 18 years of work. Here is what I cut, what I kept, and the framework that shaped every word.',
    stats: [
      { value: '4',         label: 'Case studies',           accentHex: '#F47060' },
      { value: '18 yrs',    label: 'Work to distill' },
      { value: '3',         label: 'Evaluation lenses',      accentHex: '#3B5CE8' },
      { value: '10 sec',    label: 'Initial scan window' },
    ],
  },
  ─────────────────────────────────────────────────────────────────────────────────────────────── */

  {
    slug:           'onboarding-pattern',
    title:          'The Onboarding Problem I Keep Solving at Every Company I Have Worked At',
    shortTitle:     'The recurring onboarding pattern',
    date:           'January 2026',
    dateISO:        '2026-01-22',
    readTime:       9,
    tag:            'Pattern',
    tagColor:       'amber',
    thumbnailImage: '/blog/legacy-portal-before.png',
    thumbnailAlt:   'The legacy TeleSign customer portal in 2018 — the before state that drove the self-service portal redesign',
    heroImage:      '/blog/legacy-portal-before.png',
    heroImageAlt:   'The legacy TeleSign customer portal in 2018 — the before state that drove the self-service portal redesign',
    excerpt:
      'Netflix. Appily.com. TeleSign. Three different products, three different user groups, the same root cause every time.',
    stats: [
      { value: '3',      label: 'Companies, same problem',  accentHex: '#F5C200' },
      { value: '67→35',  label: 'Days — TeleSign onboarding' },
      { value: '47%',    label: 'Completion — Appily.com',   accentHex: '#F47060' },
      { value: '7',      label: 'Markets — Netflix XP' },
    ],
    tocEntries: [
      'Three Companies. Three Onboarding Problems. One Pattern.',
      'Netflix: Testing Your Way to the Right First Step',
      'Appily.com: The Form That Was Eating Students Alive',
      'TeleSign: When Onboarding Is a Revenue Problem',
      'The Pattern, Stated Plainly',
      'What I Look For Now',
    ],
  },

  {
    slug:           'designing-for-experts',
    title:          'Designing for Experts Who Cannot Afford to Be Wrong',
    shortTitle:     'Designing for expert fraud analysts',
    date:           'February 2026',
    dateISO:        '2026-02-14',
    readTime:       10,
    tag:            'Case Study',
    tagColor:       'coral',
    thumbnailImage: '/blog/fraud-prevention-case-study.png',
    thumbnailAlt:   'TeleSign Fraud Prevention Suite case study page on displayedux.com',
    heroImage:      '/blog/fraud-prevention-case-study.png',
    heroImageAlt:   'TeleSign Fraud Prevention Suite case study page on displayedux.com',
    excerpt:
      'Fraud analysts make hundreds of high-stakes decisions per day. Here is what designing for that user taught me about complexity, trust, and speed.',
    stats: [
      { value: '21B+',    label: 'Annual transactions',       accentHex: '#3B5CE8' },
      { value: '1,000+',  label: 'ML parameters surfaced' },
      { value: '30 sec',  label: 'Decision time target',      accentHex: '#F47060' },
      { value: '73%',     label: 'Fraud reduction — fin. client' },
    ],
    tocEntries: [
      'The User Who Knows More Than You',
      'What the Machine Was Doing',
      'The Design Problem, Stated Precisely',
      'Making Machine Learning Transparent',
      'Designing for the False Positive Problem',
      'Speed as a Design Requirement',
      'What Designing for Experts Taught Me',
    ],
  },

  {
    slug:           'output-vs-outcome',
    title:          '18 Years In, I Still Think Most Designers Confuse Output with Outcome',
    shortTitle:     'Output vs. outcome in product design',
    date:           'December 2025',
    dateISO:        '2025-12-08',
    readTime:       10,
    tag:            'Reflection',
    tagColor:       'magenta',
    thumbnailImage: '/blog/images/post5-cappex-in-progress.png',
    thumbnailAlt:   'Cappex college application dashboard showing mixed completion states — warnings, missing info, ready to submit, and already submitted',
    heroImage:      '/blog/images/post5-cappex-in-progress.png',
    heroImageAlt:   'Cappex college application dashboard showing mixed completion states — warnings, missing info, ready to submit, and already submitted',
    excerpt:
      'Early in my career I measured my effectiveness by what I shipped. It took years to understand why that was the wrong metric.',
    stats: [
      { value: '18 yrs', label: 'Calibrating this',           accentHex: '#3B5CE8' },
      { value: '4',      label: 'Companies, same lesson' },
      { value: '21B+',   label: 'Transactions — invisible UX', accentHex: '#F47060' },
      { value: '$1.3B',  label: 'Valuation — TeleSign exit' },
    ],
    tocEntries: [
      'The Confession',
      'Output: What You Made. Outcome: What Changed.',
      'The Netflix Lesson: Trust Nothing, Including Instinct',
      "The Appily.com Lesson: The Number Tells You When You're Right",
      'The TeleSign Lesson: Design Is Infrastructure',
      'What Changes When You Measure Outcome',
      'The Honest Caveat',
    ],
  },

]

/* ─── Helpers ────────────────────────────────────────────────────── */

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getBlogPostOrThrow(slug: string): BlogPost {
  const post = getBlogPost(slug)
  if (!post) throw new Error(`No blog post found for slug: "${slug}"`)
  return post
}

/** Tag accent colors — used on index cards and article tags */
export const TAG_COLORS: Record<BlogPost['tagColor'], { bg: string; text: string; border: string }> = {
  blue:    { bg: 'rgba(59,92,232,0.10)',  text: '#3B5CE8', border: 'rgba(59,92,232,0.25)' },
  coral:   { bg: 'rgba(244,112,96,0.10)', text: '#C8402E', border: 'rgba(244,112,96,0.28)' },
  amber:   { bg: 'rgba(245,194,0,0.12)',  text: '#8A6A00', border: 'rgba(245,194,0,0.28)' },
  magenta:   { bg: 'rgba(255,0,170,0.10)',  text: '#CC0088', border: 'rgba(255,0,170,0.25)' },
  lightBlue: { bg: 'rgba(109,163,248,0.10)', text: '#2D6AC6', border: 'rgba(109,163,248,0.25)' },
}

/** Dark-mode tag accent colors */
export const TAG_COLORS_DARK: Record<BlogPost['tagColor'], { bg: string; text: string; border: string }> = {
  blue:    { bg: 'rgba(59,92,232,0.22)',  text: '#7B9BFF', border: 'rgba(59,92,232,0.40)' },
  coral:   { bg: 'rgba(244,112,96,0.18)', text: '#F47060', border: 'rgba(244,112,96,0.35)' },
  amber:   { bg: 'rgba(245,194,0,0.15)',  text: '#F5C200', border: 'rgba(245,194,0,0.30)' },
  magenta:   { bg: 'rgba(255,0,170,0.18)',  text: '#FF44CC', border: 'rgba(255,0,170,0.35)' },
  lightBlue: { bg: 'rgba(109,163,248,0.20)', text: '#8EB6F0', border: 'rgba(109,163,248,0.38)' },
}
