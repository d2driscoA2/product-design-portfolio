import type { BentoStat } from '@/components/ui/BentoGrid'

/* ─── Types ──────────────────────────────────────────────────────── */

export interface CaseStudy {
  /** URL-safe identifier — matches /work/[slug] routes */
  slug: string
  title: string
  client: string
  year?: string
  role: string
  /**
   * Impact-led headline for the case study page.
   * Format: outcome → context, per portfolio guidelines.
   */
  headline: string
  /** One sentence. Leads with the business outcome. Used on index + SEO. */
  outcomeSummary: string
  /**
   * Short impact label for the work index thumbnail.
   * Target: 3–4 words, stat-first (e.g. "48% faster onboarding").
   */
  impactLabel: string
  /** Accent hex used for card top border and hover underline */
  accentHex: string
  /** Optional thumbnail shown at the top of the case study card */
  thumbnailImage?: string
  bento: BentoStat[]
}

/* ─── Data ───────────────────────────────────────────────────────── */

export const caseStudies: CaseStudy[] = [

  /* ── 1. Self-Service Customer Portal ───────────────────────────── */
  {
    slug:          'self-service-portal',
    title:         'TeleSign Self-Service Customer Portal',
    client:        'TeleSign',
    role:          'Principal Product Designer',
    headline:      'Enterprise Onboarding Redesign: 67 Days to 35',
    outcomeSummary:
      'Designed a self-service portal that cut enterprise onboarding from 67 to 35 days, enabled 85% of customers to go live without CS intervention, and opened TeleSign to the SMB market.',
    impactLabel: '48% faster onboarding',
    accentHex: '#F47060', /* coral */
    thumbnailImage: '/images/1-self-service-customer-portal/hero/portal-hero-home.png',

    bento: [
      /* S1 — Hero, full-width top row */
      {
        value:            '67 → 35 DAYS',
        label:           'Customer onboarding time — 48% reduction',
        variant:         'charcoal',
        accent:          'coral',
        accentPosition:  'top',
      },
      /* S2 */
      {
        value:    '$500K → $2M+',
        label:   'Daily transaction revenue — 300% growth',
        variant: 'default',
        accent:  'coral',
        accentPosition: 'left',
      },
      /* S3 */
      {
        value:    '120+ COUNTRIES',
        label:   'Regulatory frameworks navigated — zero compliance violations',
        variant: 'royal-blue',
      },
      /* S4 */
      {
        value:    '7 MONTHS',
        label:   'Pandemic MVP — distributed global team across US and Europe',
        variant: 'default',
        accent:  'none',
      },
      /* S5 — col-span-2 on desktop */
      {
        value:    '85% SELF-SERVICE',
        label:   'Customers onboarded without CS intervention',
        variant: 'default',
        accent:  'coral',
        accentPosition: 'left',
      },
      /* S6 */
      {
        value:    '0 → SELF-SERVICE',
        label:   'API keys, billing, phone numbers — fully automated',
        variant: 'default',
        accent:  'none',
      },
    ],
  },

  /* ── 2. Fraud Prevention Suite ──────────────────────────────────── */
  {
    slug:          'fraud-prevention',
    title:         'TeleSign Fraud Prevention Suite',
    client:        'TeleSign',
    role:          'Principal Product Designer',
    headline:      'ML-Powered Fraud Prevention for 21 Billion Annual Transactions',
    outcomeSummary:
      'Designed the UI for an ML-powered fraud prevention suite protecting 21B+ annual transactions, giving non-technical fraud analysts intuitive control over 1,000+ configurable risk parameters.',
    impactLabel: '21B+ transactions protected',
    accentHex: '#3B5CE8', /* royal blue */
    thumbnailImage: '/images/2-fraud-prevention-suite/hero/fraud-hero-dashboard.png',

    bento: [
      /* S1 — Hero */
      {
        value:    '21 BILLION+',
        label:   'Annual transactions protected from fraud globally',
        variant: 'royal-blue',
        accent:  'none',
      },
      /* S2 */
      {
        value:    '1,000+ PARAMETERS',
        label:   'Configurable risk data points in the ML-powered interface',
        variant: 'default',
        accent:  'blue-light',
        accentPosition: 'left',
      },
      /* S3 */
      {
        value:    '5+ BILLION',
        label:   'Unique phone numbers analyzed — monthly fraud risk assessment',
        variant: 'default',
        accent:  'blue-light',
        accentPosition: 'left',
      },
      /* S4 */
      {
        value:    '0–1000 RISK SCALE',
        label:   'Real-time scoring system — sub-second response times',
        variant: 'charcoal',
        accent:  'none',
      },
      /* S5 — col-span-2 on desktop */
      {
        value:    '6 RISK CATEGORIES',
        label:   'SIM swap, breached data, porting, active calls, number type, IP',
        variant: 'default',
        accent:  'none',
      },
      /* S6 */
      {
        value:    'FORTUNE 500',
        label:   'Bank-grade fraud prevention — finance, gaming, healthcare',
        variant: 'default',
        accent:  'none',
      },
    ],
  },

  /* ── 3. Messaging API Platform ──────────────────────────────────── */
  {
    slug:          'messaging-api',
    title:         'TeleSign Omnichannel Messaging API',
    client:        'TeleSign',
    role:          'Principal Product Designer',
    headline:      '6 Channels, 1 Interface: 22.2% CTR on RCS vs. 3% for SMS',
    outcomeSummary:
      'Unified SMS, RCS, WhatsApp, Viber, MMS, and Email into a single interface, reducing customer implementation time 50% and achieving 22.2% CTR on RCS versus 3% for traditional SMS.',
    impactLabel: '22.2% higher CTR',
    accentHex: '#F5C200', /* amber */
    thumbnailImage: '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-template-builder.png',

    bento: [
      /* S1 — Hero */
      {
        value:           '22.2% CTR',
        label:          'RCS message engagement vs. 3% traditional SMS',
        variant:        'charcoal',
        accent:         'amber',
        accentPosition: 'top',
      },
      /* S2 */
      {
        value:    '6 CHANNELS, 1 API',
        label:   'SMS, RCS, WhatsApp, Viber, MMS, Email — one unified interface',
        variant: 'royal-blue',
        accent:  'none',
      },
      /* S3 */
      {
        value:    '700+ CARRIER ROUTES',
        label:   'Direct global integrations — 120+ countries supported',
        variant: 'default',
        accent:  'amber',
        accentPosition: 'left',
      },
      /* S4 */
      {
        value:    '50% FASTER',
        label:   'Customer implementation time reduction',
        variant: 'default',
        accent:  'none',
      },
      /* S5 — col-span-2 on desktop · feature callout, not a metric */
      {
        value:      'Intelligent Cascade',
        label:     'Automatic channel fallback — configurable timing per route',
        variant:   'default',
        accent:    'amber',
        accentPosition: 'left',
        isFeature: true,
      },
      /* S6 */
      {
        value:    '2B+ REACHABLE',
        label:   'WhatsApp Business users within the unified platform',
        variant: 'default',
        accent:  'none',
      },
    ],
  },

  /* ── 4. Universal College Application ───────────────────────────── */
  {
    slug:          'universal-college-app',
    title:         'Universal College Application',
    client:        'Cappex (now Appily)',
    role:          'Product Designer',
    headline:      'One Essay, Every College: 47% Completion vs. 20–35% Industry',
    outcomeSummary:
      'Designed the world\'s only user-friendly multi-college application platform, achieving 47% completion against a 20–35% industry standard and scaling from 250K to 1.5M users.',
    impactLabel: '47% completion rate',
    accentHex: '#FF00AA', /* magenta */
    thumbnailImage: '/images/4-universal-college-application/Designs/Dashboard/PNGs/Cappex-Application-Desktop-Dashboard_Applications-Complete.png',

    bento: [
      /* S1 — Hero */
      {
        value:    '47% COMPLETION',
        label:   'vs. 20–35% industry standard — more than doubled typical rate',
        variant: 'royal-blue',
        accent:  'none',
      },
      /* S2 */
      {
        value:    '600% GROWTH',
        label:   '250K → 1.5M users during tenure — now 4M+ as Appily',
        variant: 'charcoal',
        accent:  'none',
      },
      /* S3 */
      {
        value:    '200+ COLLEGES',
        label:   'Partner institutions including University of Michigan and Michigan State',
        variant: 'default',
        accent:  'magenta',
        accentPosition: 'left',
      },
      /* S4 */
      {
        value:    '25% LONGER',
        label:   'Average session time — 4.8 → 6 minutes',
        variant: 'default',
        accent:  'none',
      },
      /* S5 — col-span-2 on desktop */
      {
        value:    '6 HRS vs. 30+',
        label:   'Time to apply to 10 colleges — 80% reduction in student effort',
        variant: 'default',
        accent:  'magenta',
        accentPosition: 'left',
      },
      /* S6 */
      {
        value:    '40% MORE RETURN VISITS',
        label:   'Students came back — higher retention than any prior version',
        variant: 'default',
        accent:  'none',
      },
    ],
  },

]

/* ─── Helpers ────────────────────────────────────────────────────── */

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug)
}

export function getCaseStudyOrThrow(slug: string): CaseStudy {
  const cs = getCaseStudy(slug)
  if (!cs) throw new Error(`No case study found for slug: "${slug}"`)
  return cs
}
