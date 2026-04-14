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
   * 3–4 key stats shown on the featured card and article header.
   * First stat is the hero number.
   */
  stats: BlogStat[]
}

/* ─── Registry ───────────────────────────────────────────────────── */

export const blogPosts: BlogPost[] = [

  {
    slug:       'claude-code-portfolio',
    title:      'I Used Claude Code to Build My Entire UX Portfolio — Here Are the Actual Numbers',
    shortTitle: 'Building displayedux.com with Claude Code',
    date:       'April 2026',
    dateISO:    '2026-04-01',
    readTime:   12,
    tag:        'Process',
    tagColor:   'blue',
    excerpt:
      '47 git commits. 10 build sessions. ~100K lines of code. One designer, no developer. Here is every number, every failure, and the exact workflow behind displayedux.com.',
    stats: [
      { value: '47',   label: 'Git commits',         accentHex: '#3B5CE8' },
      { value: '~40h', label: 'Active build time' },
      { value: '9',    label: 'Pages built',          accentHex: '#F47060' },
      { value: '$40K', label: 'Dev cost saved',        accentHex: '#3B5CE8' },
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
