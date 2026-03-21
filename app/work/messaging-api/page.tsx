import type { Metadata } from 'next';
import CaseStudyTemplate, { CaseStudyData } from '@/components/ui/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'Messaging API Platform | Danny Driscoll',
  description: 'Designing a unified interface for six messaging channels and one API, reducing enterprise implementation time by 50%.',
};

const data: CaseStudyData = {
  slug: 'messaging-api',
  client: 'TELESIGN',
  title: 'Messaging API Platform',
  headline: 'Six Channels. One API. Implementation Time Cut in Half.',
  role: 'Principal Product Designer',
  timeline: '2020-2021',
  accentColor: '#F5C200',
  heroImage: '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-channels.png',
  heroImageAlt: 'TeleSign messaging template builder interface',
  overview:
    'Enterprise clients were maintaining separate API integrations for every messaging channel. A Fortune 500 e-commerce company spent six months integrating five messaging vendors. I designed the UI for a unified platform covering SMS, RCS, WhatsApp, Viber, MMS, and Email with a single API. Implementation time dropped 50%.',
  bentoStats: [
    { value: '6 → 1', label: 'Channels unified in one API', sublabel: 'SMS, RCS, WhatsApp, Viber, MMS, Email' },
    { value: '22.2%', label: 'RCS click-through rate', sublabel: 'vs 3% for standard SMS' },
    { value: '50%', label: 'Faster implementation', sublabel: '6 months down to 3 for enterprise clients' },
    { value: '700+', label: 'Direct carrier route integrations', sublabel: '120+ countries supported' },
    { value: '2B+', label: 'Reachable WhatsApp Business users', sublabel: 'Now with iOS 18+ RCS support' },
    { value: 'Intelligent', label: 'Channel cascade', sublabel: 'Automatic fallback: RCS to WhatsApp to SMS' },
  ],
  sections: [
    {
      type: 'insight',
      heading: 'Three different users. Three entirely different definitions of the problem.',
      body: `Enterprise developers said: "We maintain seven different API integrations for messaging. Each has different authentication and response formats. When one fails, we have no automatic fallback."

Marketing teams said: "We create rich RCS messages with buttons and images. Then we manually create stripped-down SMS versions. Keeping them in sync is a nightmare."

Compliance officers said: "Every country has different messaging rules. We fear violating TCPA, GDPR, or regional regulations we do not fully understand."

The same product needed to solve three fundamentally different problems for three different users without forcing any of them to understand the others’ workflow. That was the actual design challenge.`,
      image: '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-low-fidelity.png',
      imageAlt: 'Low-fidelity wireframes mapping the unified messaging platform architecture',
    },
    {
      type: 'decision',
      heading: 'Design once, deploy to all channels. Let the system handle degradation.',
      body: `The central design decision was the template architecture. A single template needed to produce six different outputs: a rich RCS message with video and interactive buttons, a WhatsApp card, a Viber message, an MMS, a plain SMS, and an email.

The rejected direction: separate template editors per channel with a sync function. Every client we interviewed had already tried building this internally. The sync always broke.

The chosen direction: one visual template builder that previewed all six outputs simultaneously. The system auto-generated channel-appropriate versions. Marketers designed for the richest channel and watched the degradation in real time.`,
      images: [
        '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-channels.png',
        '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-workflow.png',
      ],
    },
    {
      type: 'iteration',
      heading: 'Real-time preview was technically the hardest part. It was also the most important.',
      body: `The initial template builder required JSON knowledge. Marketing teams could not use it. I built a drag-and-drop visual builder that auto-generated the JSON in the background.

Compliance warnings appeared after template creation in the first version, forcing teams to rebuild from scratch. I moved compliance validation inline, flagging issues during creation, not after.

A financial services client gave the most useful feedback: "We need to know exactly why a message failed. Was it a carrier issue, a compliance block, or a user opt-out?" I redesigned the delivery status interface with detailed failure categorization covering ten distinct failure types.`,
      images: [
        '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-create-template.png',
        
      ],
    },
    {
      type: 'outcome',
      heading: 'Enterprise implementation time dropped 50%. RCS adoption drove 22.2% click-through rates.',
      body: `Enterprise clients who previously spent four to six months integrating multiple messaging vendors completed implementation in two to three months.

RCS campaigns delivered 22.2% click-through rates compared to 3% for standard SMS. Early adopters built a measurable engagement advantage before RCS became broadly available on iOS 18+.

Intelligent channel cascading improved delivery rates 15-20% by ensuring messages reached customers even when primary channels failed. The platform contributed to 42% annual revenue growth at TeleSign.`,
      image: '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-view-templates.png',
      imageAlt: 'Final template library view showing the unified messaging interface',
    },
    {
      type: 'reflection',
      heading: 'The ecosystem is the product. You cannot design one part without designing all of it.',
      body: `This project required designing six distinct surfaces: the template builder, the channel management dashboard, the rich media library, the analytics dashboard, the developer documentation, and the monitoring interface. Each needed to feel like part of one system.

The lesson I carried out: in a platform this interconnected, the transitions between surfaces are as important as the surfaces themselves. I designed that handoff late. It should have been designed first.

I would also advocate earlier for a developer sandbox environment. We shipped it in Phase 2. Several integration delays in Phase 1 would have been avoided if it had existed from day one.`,
    },
  ],
    prevCase: {
    slug: 'fraud-prevention',
    client: 'TELESIGN',
    title: 'Fraud Prevention Suite',
    accentColor: '#5B9FE8',
  },
  nextCase: {
    slug: 'universal-college-app',
    client: 'CAPPEX',
    title: 'Universal College Application',
    accentColor: '#FF00AA',
  },
};

export default function MessagingAPIPage() {
  return <CaseStudyTemplate data={data} />;
}
