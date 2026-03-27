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
  headline: 'Six Channels. One Interface. Implementation Time Cut in Half.',
  role: 'Principal Product Designer',
  timeline: '2021\u20132022',
  accentColor: '#F5C200',
  heroImage: '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-channels.png',
  heroImageAlt: 'TeleSign messaging platform showing six unified channels: SMS, WhatsApp, MMS, Viber, RCS, Email',
  overview:
    'Enterprise clients were maintaining separate API integrations for every messaging channel. A Fortune 500 e-commerce company spent six months integrating five messaging vendors. I designed the UI for a unified platform covering SMS, RCS, WhatsApp, Viber, MMS, and Email with a single API. Implementation time dropped 50%.',
  bentoStats: [
    { value: '6 \u2192 1', label: 'Channels unified in one API', sublabel: 'SMS, RCS, WhatsApp, Viber, MMS, Email' },
    { value: '22.2%', label: 'RCS click-through rate', sublabel: 'vs 3% for standard SMS' },
    { value: '50%', label: 'Faster implementation', sublabel: '6 months down to 3 for enterprise clients' },
    { value: '15\u201320%', label: 'Delivery rate improvement', sublabel: 'Through intelligent channel cascading' },
    { value: '$1.3B', label: 'Valuation at acquisition', sublabel: '42% annual revenue growth contribution' },
    { value: '120+', label: 'Countries supported', sublabel: 'Zero compliance violations' },
  ],
  sections: [
    {
      type: 'insight',
      heading: 'Three different users. Three entirely different definitions of the problem.',
      body: `Enterprise developers said: "We maintain seven different API integrations for messaging. Each has different authentication and response formats. When one fails, we have no automatic fallback."

Marketing teams said: "We create rich RCS messages with buttons and images. Then we manually create stripped-down SMS versions. Keeping them in sync is a nightmare."

Compliance officers said: "Every country has different messaging rules. We fear violating TCPA, GDPR, or regional regulations we do not fully understand."

The same product needed to solve three fundamentally different problems for three different users without forcing any of them to understand the others' workflow. That was the actual design challenge.

I also researched RCS closely. It was about to launch on iOS 18, giving early adopters a measurable engagement advantage. RCS delivered 22.2 percent click-through rates versus three percent for standard SMS. The platform needed to be built for where messaging was heading, not where it had been.`,
      images: [
        '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-channels.png',
        '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-low-fidelity.png',
      ],
      imageCaption: 'Left: six channels, each with its own API, auth requirements, and regulatory constraints. Right: the existing Messaging API portal page \u2014 an empty transaction chart and a single WhatsApp integration entry point. Six channels. Zero unified management.',
    },
    {
      type: 'decision',
      heading: 'Design once, deploy to all channels. Embed compliance at creation, not review.',
      body: `The central design decision was the template architecture. A single template needed to produce six different outputs: a rich RCS message with video and interactive buttons, a WhatsApp card, a Viber message, an MMS, a plain SMS, and an email.

The rejected direction: separate template editors per channel with a sync function. Every client we interviewed had already tried building this internally. The sync always broke.

The chosen direction: one visual template builder that previewed all six outputs simultaneously. The system auto-generated channel-appropriate versions. Marketers designed for the richest channel and watched the degradation in real time. Non-technical users never touched JSON.

Compliance was embedded into template creation, not bolted on afterward. Regulatory requirements for the destination country appeared in real time as templates were built, stopping violations before they were committed rather than flagging them after. Making constraints visible early is not just a usability principle \u2014 in high-compliance environments, it is a risk management decision.`,
      images: [
        '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-template-builder.png',
        '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-workflow.png',
      ],
      imageCaption: 'Left: the WhatsApp template builder \u2014 Header, Body, Footer, and CTA buttons configured visually with a live rendered preview. Right: the channel cascade flow \u2014 RCS first, WhatsApp second, SMS as the floor, with automatic fallback on send failure.',
    },
    {
      type: 'iteration',
      heading: 'Real-time preview was technically the hardest part. It was also the most important.',
      body: `The initial template builder required JSON knowledge. Marketing teams could not use it. I built a drag-and-drop visual builder that auto-generated the JSON in the background.

Compliance warnings appeared after template creation in the first version, forcing teams to rebuild from scratch. I moved compliance validation inline, flagging issues during creation, not after. A financial services client gave the most useful feedback: "We need to know exactly why a message failed. Was it a carrier issue, a compliance block, or a user opt-out?" I redesigned the delivery status interface with detailed failure categorization covering ten distinct failure types.

Three user groups tested separately. The consistent finding across all three: when constraints were visible at the point of decision, users worked with them. When constraints appeared as post-creation errors, users looked for workarounds.`,
      images: [
        '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-create-template.png',
        '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-view-templates.png',
      ],
      imageCaption: 'Empty state to populated state: the template management interface before and after a team has built their first template. The status column \u2014 sample-status-pending \u2014 shows WhatsApp approval in progress, making the external dependency visible.',
    },
    {
      type: 'outcome',
      heading: 'Enterprise implementation time dropped 50%. RCS adoption drove 22.2% click-through rates.',
      body: `Enterprise clients who previously spent four to six months integrating multiple messaging vendors completed implementation in two to three months.

RCS campaigns delivered 22.2% click-through rates compared to 3% for standard SMS. Early adopters built a measurable engagement advantage before RCS became broadly available on iOS 18.

Message delivery rates improved 15 to 20 percent through intelligent channel cascading. The platform contributed to 42 percent annual revenue growth, supporting TeleSign's growth to a $1.3 billion valuation at acquisition.`,
      image: '/images/3-omnichannel-messaging-api/images-for-case-study/messaging-view-templates.png',
      imageAlt: 'Template library view showing a WhatsApp message template with sample-status-pending approval state and message preview',
      imageCaption: 'The template library: one template, six channel outputs, approval status visible inline. What previously required five separate vendor dashboards now lives in one interface.',
    },
    {
      type: 'reflection',
      heading: 'The ecosystem is the product. You cannot design one part without designing all of it.',
      body: `The most important design decision in this project was embedding compliance into the creation flow rather than the review flow. Every alternative I considered would have surfaced regulatory issues after teams had already built their templates. That would have created rework, frustration, and eventually workarounds that bypassed the guardrails entirely.

Serving three audiences with fundamentally different needs on a single platform required a navigation architecture that felt like three different tools while sharing one underlying data model. The hardest part was not the interface design. It was convincing stakeholders that the developer experience and the marketer experience did not need to look like the same product.

I would advocate earlier for a developer sandbox environment next time. We shipped it in Phase 2. Several integration delays in Phase 1 would have been avoided if it had existed from day one.`,
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
