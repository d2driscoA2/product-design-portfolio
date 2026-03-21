import type { Metadata } from 'next';
import CaseStudyTemplate, { CaseStudyData } from '@/components/ui/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'Fraud Prevention Suite | Danny Driscoll',
  description: 'Designing the UI for ML-powered fraud prevention protecting 21 billion annual transactions across Fortune 500 clients.',
};

const data: CaseStudyData = {
  slug: 'fraud-prevention',
  client: 'TELESIGN',
  title: 'Fraud Prevention Suite',
  headline: 'Designing for Analysts Who Protect Billions of Transactions',
  role: 'Principal Product Designer',
  timeline: '2019-2021',
  accentColor: '#5B9FE8',
  heroImage: '/images/2-fraud-prevention-suite/hero/fraud-hero-dashboard.png',
  heroImageAlt: 'TeleSign fraud prevention dashboard',
  heroImagePosition: '0% 60%',
  overview:
    "TeleSign’s fraud prevention products protected Fortune 500 clients across financial services, e-commerce, gaming, and healthcare. I designed the UI for the full suite: PhoneID verification, Intelligence risk scoring, and SMS Country Blocking. The challenge was making a 1,000-parameter ML system legible to fraud analysts who needed to act in seconds.",
  bentoStats: [
    { value: '21B+', label: 'Annual transactions protected', sublabel: 'From fraud attacks globally' },
    { value: '1,000+', label: 'Configurable risk parameters', sublabel: 'In the ML-powered interface' },
    { value: '5B+', label: 'Phone numbers analyzed monthly', sublabel: 'Real-time fraud risk assessment' },
    { value: '0-1000', label: 'Risk score scale', sublabel: 'Sub-second response times' },
    { value: '6', label: 'Risk insight categories', sublabel: 'SIM swap, breached data, porting, IP, type, calls' },
    { value: 'Fortune 500', label: 'Bank-grade fraud prevention', sublabel: 'Healthcare, gaming, e-commerce' },
  ],
  sections: [
    {
      type: 'insight',
      heading: 'Fraud analysts do not read dashboards. They scan for exceptions.',
      body: `The existing fraud tools surfaced data. Every data point the ML model produced was visible somewhere on screen. The assumption was that more data meant better decisions.

Watching fraud analysts work revealed the problem immediately. They were not reading the dashboard. They were hunting for the one signal that confirmed or overruled a block decision. The interface was built to display a model. It needed to be built to support a judgment.

The key insight: analysts already had an intuition before they opened the tool. They were using the interface to validate or challenge that intuition. The design needed to surface the most relevant risk signals first, not the most comprehensive set.`,
    },
    {
      type: 'decision',
      heading: 'Design for a recommendation, not a report.',
      body: `The original interface showed all 1,000+ risk parameters in a scrollable data table. Every parameter had equal visual weight. Finding the signals that mattered required expertise that most new analysts did not have.

I proposed a two-layer architecture. Layer 1: a clear allow/flag/block recommendation with the three highest-confidence risk signals. Layer 2: full parameter access for analysts who wanted to interrogate the decision.

The rejected direction: a "simplified mode" toggle. Testing showed that switching modes broke the analyst’s workflow. The final design put both layers on a single screen, with the recommendation visually dominant and the full parameter set collapsed below.

For SMS Country Blocking, the design used a map-first interface with a country list as the secondary control. Admins with geographic intuition could work visually. Admins managing by list could work textually.`,
      image: '/images/2-fraud-prevention-suite/hero/fraud-hero-dashboard.png',
      imageAlt: 'TeleSign fraud prevention dashboard showing the two-layer risk scoring interface',
    },
    {
      type: 'iteration',
      heading: 'The first three designs were too cautious. The risk scores needed to feel like risk.',
      body: `Early designs used a neutral color palette. Risk scores displayed in the same gray as every other data point. In testing, analysts reported the interface felt "flat." They had to work to feel the urgency of a high-risk score.

I pushed the visual language further. High-risk scores used saturated red. Borderline scores used amber. Low-risk used neutral. The visual weight of the number changed with the risk level.

Two analysts objected in testing: color alone was not reliable across multiple screens with different calibrations. I added a secondary visual indicator — a segmented bar that filled based on score level, independent of color. Both signals now reinforced each other.

The design system that emerged from this work became the foundation for all TeleSign product interfaces going forward.`,
      images: [
        '/images/2-fraud-prevention-suite/fraud-design-guide-colors.png',
        '/images/2-fraud-prevention-suite/fraud-design-guide-nav.png',
        '/images/2-fraud-prevention-suite/fraud-design-guide-type.png',
      ],
    },
    {
      type: 'outcome',
      heading: 'The suite protected 21 billion annual transactions across Fortune 500 clients.',
      body: `TeleSign’s fraud prevention products operated at a scale where interface decisions had direct financial consequences. A poorly designed recommendation display could lead an analyst to miss a fraud signal.

The SMS Country Blocking feature reduced unwanted spam and scam SMS by 89% within six months of launch. NPS for the fraud analytics tool moved from 32 to 79 post-redesign.

The internal metrics dashboard, co-designed as part of this work, won TeleSign’s 2018 Innovation of the Year award. The design work contributed to TeleSign’s growth to a $1.3B valuation and acquisition.`,
    },
    {
      type: 'reflection',
      heading: 'Designing for experts requires understanding their expertise, not replacing it.',
      body: `The biggest lesson: expert users resist tools that feel like they are being simplified. Fraud analysts knew their domain. They did not want the tool to make decisions for them. They wanted the tool to help them make better decisions faster.

The recommendation layer worked because it was framed as a starting point, not a conclusion. The full parameter access worked because it was always available, never hidden.

I would instrument analyst override rates earlier in the next version. When analysts consistently override a specific recommendation pattern, that pattern is a candidate for model retraining. The interface can become a feedback loop for the ML model. That connection was not built in this phase.`,
    },
  ],
    prevCase: {
    slug: 'self-service-portal',
    client: 'TELESIGN',
    title: 'Self-Service Customer Portal',
    accentColor: '#F47060',
  },
  nextCase: {
    slug: 'messaging-api',
    client: 'TELESIGN',
    title: 'Messaging API Platform',
    accentColor: '#F5C200',
  },
};

export default function FraudPreventionPage() {
  return <CaseStudyTemplate data={data} />;
}
