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
  headline: 'Designing for the Adversary: Making ML-Powered Fraud Prevention Usable for Analysts Making Split-Second Decisions',
  role: 'Principal Product Designer',
  timeline: '2019\u20132021',
  accentColor: '#5B9FE8',
  heroImage: '/images/2-fraud-prevention-suite/hero/fraud-hero-dashboard.png',
  heroImageAlt: 'TeleSign fraud prevention dashboard',
  heroImagePosition: '0% 60%',
  overview:
    "TeleSign's fraud prevention products protected Fortune 500 clients across financial services, e-commerce, gaming, and healthcare. I designed the UI for the full suite: PhoneID verification, Intelligence risk scoring, and SMS Country Blocking. The challenge was making a 1,000-parameter ML system legible to fraud analysts who needed to act in seconds, not minutes.",
  bentoStats: [
    { value: '21B+', label: 'Annual transactions protected', sublabel: 'Across all fraud intelligence products' },
    { value: '85%', label: 'Spam reduction', sublabel: 'Financial services client, first month' },
    { value: '$900K', label: 'Negative margin mitigated', sublabel: 'SMS pumping attack prevention' },
    { value: '5B+', label: 'Unique phone numbers assessed', sublabel: 'Monthly, in real time' },
    { value: '1,000+', label: 'Configurable risk parameters', sublabel: 'Exposed to non-technical analysts' },
    { value: '0\u20131000', label: 'Risk score scale', sublabel: 'Sub-second response per transaction' },
  ],
  sections: [
    {
      type: 'insight',
      heading: '21 billion transactions annually. The analysts could not see why the system flagged anyone.',
      quote: '"I need to understand why the system flagged this user \u2014 not just that it did."',
      body: `TeleSign's Intelligence product analyzed over 1,000 configurable data points to return real-time risk scores on a 0\u20131000 scale. The product was technically sophisticated. The problem was that the interface for configuring and acting on it was built for engineers, not for the fraud analysts who needed to use it under pressure, in real time, during active attack events.

I interviewed fraud analysts across financial services, gaming, and e-commerce clients. Their core frustration was consistent: the system would flag a user, but the analyst could not understand why. They were being asked to make consequential decisions \u2014 block a real customer or allow a potential fraudster \u2014 with insufficient information to act confidently.

The interface was not failing because the risk model was wrong. It was failing because analysts could not see into the reasoning behind the scores. The design problem was not accuracy. It was transparency.`,
      image: '/images/2-fraud-prevention-suite/images-for-case-study/before-redesign/telemaster-monthly-risk-report.png',
      imageAlt: 'TeleMaster legacy reporting showing Monthly Risk Level Status: 1.6 billion transactions across undifferentiated High, Medium-High, Medium, Medium-Low, Low, Neutral, Unknown columns with no recommendation layer',
      imageCaption: '1.6 billion transactions. Seven undifferentiated columns. No recommendation, no signal hierarchy, no path to a decision. This is what analysts were working from.',
    },
    {
      type: 'decision',
      heading: 'Surface the reasoning. Make the machine\u2019s logic visible.',
      body: `I designed the fraud analyst dashboard to surface the specific signals driving each risk score \u2014 not just the score itself. SIM swap detection, breached data matches, porting history, location anomalies, carrier inconsistencies \u2014 all made visible and scannable at a glance.

The rejected direction: a simplified mode toggle. Testing showed that switching modes broke the analyst's workflow. The final design put both layers on a single screen \u2014 a clear allow/flag/block recommendation with the three highest-confidence signals visually dominant, and the full parameter set collapsed below for analysts who wanted to interrogate further.

I also designed the configuration layer for non-technical analysts to adjust risk thresholds by attack type, by country, and by client context, without writing code or filing an engineering ticket. Every threshold decision was visible, reversible, and auditable.`,
      image: '/images/6-country-blocking/country-blocking-workflow.png',
      imageAlt: 'Risk scoring decision flow: user sign-up triggers TeleSign risk assessment, dynamic 0-1000 score routes to Block, Flag, or Allow, OTP sent or denied based on analyst-configured threshold',
      imageCaption: 'The recommendation architecture: every transaction scores 0\u20131000, every score routes to a decision, every decision is visible. The model\u2019s logic becomes the interface.',
    },
    {
      type: 'iteration',
      heading: 'Three rounds of analyst testing. One finding held every time: when analysts could see the signal, they acted faster.',
      body: `Round 1 established that signal categories needed visual hierarchy. Analysts scanned by attack type, not by data source. The original flat table buried the most critical signals among hundreds of equal-weight rows.

Round 2 established that threshold changes needed an undo path. Analysts were reluctant to adjust settings they could not reverse quickly. I added change history and one-click rollback.

Round 3 established that risk scores needed to feel like risk. Early designs used a neutral palette. Analysts reported the interface felt flat \u2014 they had to work to feel the urgency of a high-risk score. The final design used saturated red for high-risk, amber for borderline, neutral for low. Two analysts flagged that color alone was unreliable across screens with different calibrations. I added a segmented bar as a secondary indicator, independent of color.

Across all rounds, one pattern held: when analysts could see exactly which signals drove a score, they made decisions faster and appealed fewer blocks. Transparency reduced workload.`,
      images: [
        '/images/6-country-blocking/country-blocking-settings-hifi.png',
        '/images/2-fraud-prevention-suite/fraud-design-guide-colors.png',
      ],
    },
    {
      type: 'outcome',
      heading: '85% spam reduction in the first month. $900K in exposure mitigated.',
      body: `The combined Intelligence and PhoneID suite protected over 21 billion annual transactions. The SMS Country Blocking feature delivered an 85% reduction in spam complaints for one financial services client within the first month of deployment, and mitigated $900K in negative margin exposure from SMS pumping attacks.

The Ticketmaster concert promotion delivered millions of secure redemptions while blocking bot-driven abuse, VPN masking, and location spoofing at scale. The design system built for this project became the foundation for all TeleSign product interfaces.`,
      video: { videoId: 'QhyfFRU2Ovo', startSeconds: 5, title: 'PhoneID Transaction Summary Dashboard' },
    },
    {
      type: 'reflection',
      heading: 'Two things this project taught me.',
      body: `Designing for the adversary requires designing for two failure modes. Fraud prevention design is the only discipline where the cost of false positives is as real as the cost of false negatives. Blocking a genuine Ticketmaster fan to protect against fraud is not a neutral outcome. Every threshold decision had two failure modes. The design had to make both visible. Most dashboards only surface one.

Transparency is a trust mechanism, not a UX nicety. Fraud analysts are skeptical of systems they cannot interrogate. Making the machine's reasoning visible was not a design preference \u2014 it was the only path to analyst trust. A risk score without a visible reason is not a decision support tool. It is a black box with a number on it.

If I were doing this again, I would instrument analyst override rates from day one. When analysts consistently override a specific recommendation pattern, that pattern is a candidate for model retraining. The interface should be a feedback loop for the ML model. That connection was not built in this phase.`,
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
