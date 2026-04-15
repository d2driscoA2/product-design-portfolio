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
  tagColor: 'blue' | 'coral' | 'amber' | 'magenta'
  /** One-paragraph excerpt for index cards */
  excerpt: string
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
}

/* ─── Registry ───────────────────────────────────────────────────── */

export const blogPosts: BlogPost[] = [

  {
    slug:         'claude-code-portfolio',
    title:        'I Used Claude Code to Build My Entire UX Portfolio — Here Are the Actual Numbers (and How They Stack Up)',
    shortTitle:   'Building displayedux.com with Claude Code',
    date:         'April 2026',
    dateISO:      '2026-04-01',
    readTime:     12,
    tag:          'Process',
    tagColor:     'blue',
    heroImage:    '/blog/blog-hero-homepage-live.png',
    heroImageAlt: 'displayedux.com homepage — the finished portfolio site built entirely with Claude Code',
    excerpt:
      '47 git commits. 10 build sessions. ~100K lines of code. One designer, no developer. Here is every number, every failure, and the exact workflow behind displayedux.com.',
    stats: [
      { value: '47',   label: 'Git commits',         accentHex: '#3B5CE8' },
      { value: '~40h', label: 'Active build time' },
      { value: '9',    label: 'Pages built',          accentHex: '#F47060' },
      { value: '$40K', label: 'Dev cost saved',        accentHex: '#3B5CE8' },
    ],
  },

  {
    slug:         'case-study-writing',
    title:        'How I Write Case Studies That Get Callbacks at the Principal Level',
    shortTitle:   'Writing case studies for Principal-level roles',
    date:         'May 2026',
    dateISO:      '2026-05-01',
    readTime:     8,
    tag:          'Process',
    tagColor:     'coral',
    heroImage:    '/blog/case-study-page-screenshot.png',
    heroImageAlt: 'The TeleSign Self-Service Portal case study page on displayedux.com — structure, metrics, and narrative in one view',
    excerpt:
      'Four case studies. 18 years of work. Here is what I cut, what I kept, and the framework that shaped every word.',
    stats: [
      { value: '4',         label: 'Case studies',           accentHex: '#F47060' },
      { value: '18 yrs',    label: 'Work to distill' },
      { value: '3',         label: 'Evaluation lenses',      accentHex: '#3B5CE8' },
      { value: '10 sec',    label: 'Initial scan window' },
    ],
  },

  {
    slug:         'onboarding-pattern',
    title:        'The Onboarding Problem I Keep Solving at Every Company I Have Worked At',
    shortTitle:   'The recurring onboarding pattern',
    date:         'May 2026',
    dateISO:      '2026-05-15',
    readTime:     9,
    tag:          'Process',
    tagColor:     'amber',
    heroImage:    '/blog/legacy-portal-before.png',
    heroImageAlt: 'The legacy TeleSign customer portal in 2018 — the before state that drove the onboarding redesign',
    excerpt:
      'Netflix. Appily.com. TeleSign. Three different products, three different user groups, the same root cause every time.',
    stats: [
      { value: '3',      label: 'Companies, same problem',  accentHex: '#F5C200' },
      { value: '67→35',  label: 'Days — TeleSign onboarding' },
      { value: '47%',    label: 'Completion — Appily.com',   accentHex: '#F47060' },
      { value: '7',      label: 'Markets — Netflix XP' },
    ],
  },

  {
    slug:         'designing-for-experts',
    title:        'Designing for Experts Who Cannot Afford to Be Wrong',
    shortTitle:   'Designing for expert fraud analysts',
    date:         'June 2026',
    dateISO:      '2026-06-01',
    readTime:     10,
    tag:          'Case Study',
    tagColor:     'coral',
    heroImage:    '/blog/fraud-prevention-case-study.png',
    heroImageAlt: 'TeleSign Fraud Prevention Suite case study — designing dashboards for analysts protecting 21 billion annual transactions',
    excerpt:
      'Fraud analysts make hundreds of high-stakes decisions per day. Here is what designing for that user taught me about complexity, trust, and speed.',
    stats: [
      { value: '21B+',    label: 'Annual transactions',       accentHex: '#3B5CE8' },
      { value: '1,000+',  label: 'ML parameters surfaced' },
      { value: '30 sec',  label: 'Decision time target',      accentHex: '#F47060' },
      { value: '73%',     label: 'Fraud reduction — fin. client' },
    ],
  },

  {
    slug:         'output-vs-outcome',
    title:        '18 Years In, I Still Think Most Designers Confuse Output with Outcome',
    shortTitle:   'Output vs. outcome in product design',
    date:         'June 2026',
    dateISO:      '2026-06-15',
    readTime:     10,
    tag:          'Process',
    tagColor:     'blue',
    heroImage:    '/blog/headshot-blue-background.png',
    heroImageAlt: 'Danny Driscoll — product designer with 18 years of experience across enterprise SaaS, consumer mobile, and developer tools',
    excerpt:
      'Early in my career I measured my effectiveness by what I shipped. It took years to understand why that was the wrong metric.',
    stats: [
      { value: '18 yrs', label: 'Calibrating this',           accentHex: '#3B5CE8' },
      { value: '4',      label: 'Companies, same lesson' },
      { value: '21B+',   label: 'Transactions — invisible UX', accentHex: '#F47060' },
      { value: '$1.3B',  label: 'Valuation — TeleSign exit' },
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
  magenta: { bg: 'rgba(255,0,170,0.10)',  text: '#CC0088', border: 'rgba(255,0,170,0.25)' },
}

/** Dark-mode tag accent colors */
export const TAG_COLORS_DARK: Record<BlogPost['tagColor'], { bg: string; text: string; border: string }> = {
  blue:    { bg: 'rgba(59,92,232,0.22)',  text: '#7B9BFF', border: 'rgba(59,92,232,0.40)' },
  coral:   { bg: 'rgba(244,112,96,0.18)', text: '#F47060', border: 'rgba(244,112,96,0.35)' },
  amber:   { bg: 'rgba(245,194,0,0.15)',  text: '#F5C200', border: 'rgba(245,194,0,0.30)' },
  magenta: { bg: 'rgba(255,0,170,0.18)',  text: '#FF44CC', border: 'rgba(255,0,170,0.35)' },
}
