import type { Metadata } from 'next';
import CaseStudyTemplate, { CaseStudyData } from '@/components/ui/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'Self-Service Portal | Danny Driscoll',
  description: 'How I cut enterprise onboarding from 67 days to same-day access by replacing a CS-dependent process with a self-service portal.',
};

const data: CaseStudyData = {
  slug: 'self-service-portal',
  client: 'TELESIGN',
  title: 'Self-Service Customer Portal',
  headline: 'How Cutting Onboarding From 67 Days to Same-Day Access Freed TeleSign to Serve an Entirely New Market',
  role: 'Principal Product Designer',
  timeline: '7 months \u00b7 2020\u20132021',
  accentColor: '#F47060',
  heroImage: '/images/1-self-service-customer-portal/hero/Full-service-Example-Image-2048x1925.png',
  heroImageAlt: 'TeleSign self-service portal dashboard',
  heroImagePosition: 'top center',
  heroVideo: { videoId: 'J2WvMidm5hI', startSeconds: 0, title: 'TeleSign Portal Screen Recording' },
  overview:
    "TeleSign's enterprise onboarding took 67 days on average. Every new customer required manual CS intervention \u2014 products provisioned by hand, API keys requiring CS involvement, government approval documentation handled email by email across 120-plus countries. I was brought in as Principal Product Designer to redesign this from the ground up, during a global pandemic, with a distributed international team and a constrained development budget.",
  bentoStats: [
    { value: 'Same-day', label: 'Access for simpler products', sublabel: 'First time in TeleSign history' },
    { value: '67 \u2192 35', label: 'Days to onboard (complex configs)', sublabel: '48% reduction in CS-controlled time' },
    { value: '85%', label: 'Customers live without CS', sublabel: 'Down from 100% CS dependency' },
    { value: '40%', label: 'CS workload reduction', sublabel: 'Team redirected to retention work' },
    { value: '$500K \u2192 $2M+', label: 'Daily transaction revenue', sublabel: '300% growth during this period' },
    { value: '2019', label: 'Innovation of the Year', sublabel: 'Phone number purchasing UI' },
  ],
  sections: [
    {
      type: 'insight',
      heading: 'The problem was not the interface. Customers should never have needed to contact TeleSign to complete onboarding at all.',
      quote: `"I never knew what step came next. I'd wait days for a response."`,
      body: `I spent one week shadowing the customer success team before writing a single brief. What I saw: a team spending 40 percent of their time answering the same questions, provisioning products by hand, and managing status updates through back-and-forth email chains. They were not doing high-value work. They were plugging gaps in a broken system.

I then interviewed twelve enterprise customers who had recently completed onboarding. Their frustration was consistent. They never knew what step came next. They waited days for responses. They had no visibility into their own progress.

The design question shifted. Not "How do we make the portal easier?" but "How do we design an onboarding experience that needs no handholding at all?"`,
      images: [
        '/images/1-self-service-customer-portal/images-for-case-study/before-redesign/screencapture-portal-telesign-login-2018-10-15-12_13_16.png',
        '/images/1-self-service-customer-portal/images-for-case-study/before-redesign/screencapture-portal-telesign-portal-dashboard-2018-10-11-10_43_49.png',
      ],
      imageCaption: 'Two separate portals, October 2018. Neither was built for the customer. Every step beyond the login screen required a CS email chain.',
    },
    {
      type: 'decision',
      heading: 'What was built, what was not, and why the hardest problem was not the interface.',
      body: `I designed a self-service portal giving enterprise customers direct control over every step: account creation, business verification, product purchasing, phone number acquisition across 120-plus countries, API key generation, and billing \u2014 all without CS involvement.

The first direction I prototyped was a guidance layer on top of TelePortal, the existing internal tool. Four customer tests killed it. TelePortal's information architecture was built for CS workflows, not customer workflows. Guidance on top of expert assumptions does not make a product accessible. The recommendation: build from scratch.

With a constrained story-point budget and a pandemic-distributed team across US and European time zones, every feature required a prioritization decision. The MVP covered the primary path only: account creation, product selection, phone number acquisition, and API key generation. Multi-language support, a regulatory documentation browser, and advanced usage analytics were deferred.

The hardest design problem was not the interface. It was the regulatory variation. Each of the 120-plus countries had different documentation requirements. The portal had to handle this complexity without exposing it. Dynamic flows surfaced only the requirements relevant to each customer's location and product, at the moment they were needed.`,
      images: [
        '/images/1-self-service-customer-portal/self-service-low-fidelity.png',
        '/images/1-self-service-customer-portal/images-for-case-study/prototypes/frames/proto-country-blocking-modal.jpg',
      ],
      imageCaption: 'Left: early low-fidelity wireframes mapping the path from signup to first API call. Right: the self-service country blocking configuration \u2014 the hardest regulatory UX problem on the project.',
      videos: [
        { videoId: 'adqvYS_POEQ', startSeconds: 2, title: 'Lo-Fi Prototype: Self-Service Sign Up MVP' },
        { videoId: 'Q_S6WbPtH1s', startSeconds: 1, title: 'Lo-Fi Prototype: Welcome and Product Page' },
      ],
    },
    {
      type: 'iteration',
      heading: 'Three usability rounds. One pattern held across all of them: when users knew what came next, they completed the task.',
      body: `Round 1 tested the internal CS team. Findings: the onboarding checklist was clear and motivating. Product descriptions needed simplification. API key permission labels were confusing.

Round 2 tested existing enterprise customers. The dashboard metrics were valuable, but users wanted historical usage data. Documentation links were not prominent enough. Billing needed a clearer invoice breakdown.

Round 3 tested new trial users with no prior TeleSign experience. Task: complete full onboarding and make a first API call in 30 minutes. Five of six completed it. Average time: 22 minutes.

Across all three rounds, one pattern held. When users knew exactly what came next, they completed the task. When the next step was ambiguous, they stopped and emailed support.`,
      images: [
        '/images/1-self-service-customer-portal/images-for-case-study/after-redesign/fs-089.png',
        '/images/1-self-service-customer-portal/images-for-case-study/after-redesign/fs-091.png',
        '/images/1-self-service-customer-portal/images-for-case-study/after-redesign/fs-094.png',
      ],
      imageCaption: 'Left to right: Solutions discovery \u2014 use-case-first navigation so customers find the right product. Number and sender ID request flow \u2014 3-step wizard replacing a CS email. SMS Verify product page \u2014 clear entry point with documentation access. Each screen eliminates a step that previously required CS involvement.',
      video: { videoId: 'H8bjDwi40cc', startSeconds: 1, title: 'All Products Figma Prototype' },
    },
    {
      type: 'outcome',
      heading: 'Two tiers of complexity. Both tell an important story.',
      outcomeTiers: [
        {
          label: 'Simpler products',
          value: 'Same-day access',
          context: 'First time in TeleSign history. Account creation, product purchase, API key generation, and first call \u2014 no CS involvement required.',
          isPrimary: true,
        },
        {
          label: 'Complex regulatory configurations',
          value: '67 days \u2192 35 days',
          context: `Government approval timelines sit outside TeleSign's control. What changed: TeleSign's portion became self-directed, transparent, and fast.`,
        },
      ],
      image: '/images/1-self-service-customer-portal/images-for-case-study/after-redesign/fs-087.png',
      imageAlt: 'Redesigned TeleSign portal homepage: Hi Tom, welcome back to TeleSign, with Customer ID, API Key, and use-case cards visible immediately',
      imageCaption: 'The redesigned portal homepage. Customer ID and API Key accessible on arrival. No CS required. What previously took 67 days for complex configurations now begins immediately.',
      body: `85% of customers completed onboarding without CS intervention. CS workload on onboarding tasks fell 40 percent, freeing the team for retention work that required actual expertise. Daily transaction revenue grew from $500K to over $2M during this period.

The SMB market became economically viable for the first time. The CS overhead that made small accounts unprofitable was gone.

The phone number purchasing UI won TeleSign's 2019 Innovation of the Year award. The design system built for this project became the company standard \u2014 colors, navigation patterns, and typography adopted across all TeleSign products.`,
    },
    {
      type: 'reflection',
      heading: 'Three things this project taught me.',
      body: `Where design creates leverage. The onboarding flow itself was not complex to design. The complexity was in the regulatory rules for more than 120 countries. Getting those rules surfaced correctly, at the right moment, with the right context: that is where the design work had the most impact. The interface was the last 20 percent of the problem.

What I would do differently. I would invest more time in error state design from day one. When a customer hit a regulatory requirement they were not expecting, the experience dropped sharply. We fixed those cases iteratively. Designing for failure paths with the same rigor as the success path from the start would have shortened that cycle.

Constraint as design tool. A limited story-point budget forced every feature decision to be explicit. That discipline produced a better product than a fully-resourced effort would have, because it required the team to decide what success actually meant before writing a line of code.`,
      videos: [
        { videoId: 'BA8iaSzQLMg', startSeconds: 1, title: 'Design Guide: Colors, Typography & Nav' },
        { videoId: '7TWvcvsMAro', startSeconds: 0, title: 'Design Guide: Typography' },
      ],
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
