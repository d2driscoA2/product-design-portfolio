import type { Metadata } from 'next';
import CaseStudyTemplate, { CaseStudyData } from '@/components/ui/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'Self-Service Portal | Danny Driscoll',
  description: 'How I cut enterprise onboarding from 67 days to 35 by replacing a CS-dependent process with a self-service portal.',
};

const data: CaseStudyData = {
  slug: 'self-service-portal',
  client: 'TELESIGN',
  title: 'Self-Service Customer Portal',
  headline: 'How I Cut Enterprise Onboarding from 67 Days to 35',
  role: 'Principal Product Designer',
  timeline: '7 months · 2020-2021',
  accentColor: '#F47060',
  heroImage: '/images/1-self-service-customer-portal/hero/Full-service-Example-Image-2048x1925.png',
  heroImageAlt: 'TeleSign self-service portal dashboard',
  overview:
    "TeleSign’s enterprise onboarding took 67 days on average. Every new customer required manual CS intervention. I designed a self-service portal from scratch during the pandemic, with a distributed international team and minimal story-point budget. The result: customers go live in 35 days. 85% do it without touching CS.",
  bentoStats: [
    { value: '67 → 35', label: 'Days to onboard', sublabel: '48% reduction in time-to-live' },
    { value: '85%', label: 'Customers live without CS', sublabel: 'Down from 100% CS dependency' },
    { value: '40%', label: 'CS workload reduction', sublabel: 'Team redirected to retention' },
    { value: '120+', label: 'Countries supported', sublabel: 'Zero compliance violations' },
    { value: '7 months', label: 'MVP delivery', sublabel: 'Fully remote, pandemic constraints' },
    { value: '$500K → $2M+', label: 'Daily transaction revenue', sublabel: '300% growth contribution' },
  ],
  sections: [
    {
      type: 'insight',
      heading: 'The real problem was not the interface. It was the model.',
      quote: '"I never knew what step came next. I waited days for a response."',
      body: `I interviewed 12 enterprise customers who had recently completed onboarding. Every single one described the same experience: confusion about what was required, delays waiting for CS responses, and frustration at having no visibility into their own progress.

Then I spent a week shadowing the CS team. They answered the same questions dozens of times per day. They manually provisioned products, generated API keys, and explained documentation written for internal engineers. 40% of their time went to onboarding tasks that required no judgment.

The design question shifted. It was not "How do we make TelePortal easier?" It was "How do we design an onboarding experience that needs no handholding at all?"`,
      image: '/images/1-self-service-customer-portal/portal-low-fidelity-guide.png',
      imageAlt: 'Low-fidelity wireframes mapping the self-service onboarding flow',
    },
    {
      type: 'decision',
      heading: 'Build self-service from the ground up. Do not add a layer to a broken foundation.',
      body: `The first direction I explored was adding a customer-facing guidance layer on top of TelePortal, the existing internal tool. I prototyped it, tested it with four customers. They still felt lost. TelePortal assumed expert product knowledge at every step. Guidance on top of expert assumptions does not make a product accessible.

I recommended building a new portal from scratch. The key insight: TelePortal’s information architecture was built for CS workflows, not customer workflows. Adapting it would mean continuously working against its own logic.

The trade-off was scope. With a minimal story-point budget and a pandemic-distributed team across US and European time zones, I had to prioritize ruthlessly. The MVP covered the primary onboarding flow only: account creation, product selection, phone number acquisition, and API key generation.

Three dashboard concepts went to customer testing. The minimal, action-focused concept tested worst. Customers wanted to see their progress. The balanced concept with progressive disclosure won.`,
      image: '/images/1-self-service-customer-portal/hero/Full-service-Example-Image-2048x1925.png',
      imageAlt: 'Portal all products screen showing the self-service interface',
    },
    {
      type: 'iteration',
      heading: 'Three usability rounds, one clear pattern: customers need to see what comes next.',
      body: `Round 1 tested the internal CS team. Findings: the onboarding checklist was clear and motivating. Product descriptions needed simplification. API key permission labels were confusing.

Round 2 tested existing enterprise customers. Findings: the dashboard metrics were valuable, but users wanted historical usage data. Documentation links were not prominent enough. Billing needed a clearer invoice breakdown.

Round 3 tested new trial users with no prior TeleSign experience. Task: complete full onboarding and make a first API call in 30 minutes. Five of six completed it. Average time was 22 minutes.

Across all three rounds, one pattern held: when users knew exactly what came next, they completed the task. When the next step was ambiguous, they stopped and emailed support.`,
    },
    {
      type: 'outcome',
      heading: 'Enterprise onboarding went from a 67-day managed process to a 35-day self-service flow.',
      body: `48% reduction in average onboarding time. 85% of customers completed onboarding without CS intervention. CS workload dropped 40%, freeing the team to focus on retention work that actually required expertise.

The SMB market became economically viable for the first time. Self-service removed the CS overhead that had made small accounts unprofitable.

Post-onboarding survey satisfaction improved from 2.8/5 to 4.2/5. The phone number purchasing UI won TeleSign’s 2019 Innovation of the Year award. The design system built for this project became the company standard — colors, navigation patterns, and typography adopted across all TeleSign products.`,
      images: [
        '/images/1-self-service-customer-portal/portal-design-guide-colors.png',
        '/images/1-self-service-customer-portal/portal-design-guide-nav.png',
        '/images/1-self-service-customer-portal/portal-design-guide-type.png',
      ],
    },
    {
      type: 'reflection',
      heading: 'What I would change: instrument error states from day one.',
      body: `I added analytics after launch. Post-launch data revealed two onboarding steps with 3x the abandonment rate of all others. We fixed them in a patch. Had I instrumented those states from the start, we would have caught them in usability testing.

The second thing I would revisit: the portal assumed a single user type. In practice, the billing owner, the technical lead, and the compliance officer often access the same account for different reasons. A role-aware onboarding flow would have served those users better from day one.

Progressive disclosure was the right architectural decision. The implementation could have been more precise about which information to reveal at each step.`,
    },
  ],
    nextCase: {
    slug: 'fraud-prevention',
    client: 'TELESIGN',
    title: 'Fraud Prevention Suite',
    accentColor: '#5B9FE8',
  },
};

export default function SelfServicePortalPage() {
  return <CaseStudyTemplate data={data} />;
}
