import type { Metadata } from 'next';
import CaseStudyTemplate, { CaseStudyData } from '@/components/ui/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'Universal College Application | Danny Driscoll',
  description: 'Designing the application that reached 47% completion against a 20-35% industry standard, scaling to 4M+ users.',
};

const data: CaseStudyData = {
  slug: 'universal-college-app',
  client: 'CAPPEX',
  title: 'Universal College Application',
  headline: 'One Essay, Every College. A 47% Completion Rate in an Industry That Averages 35%.',
  role: 'Product Designer',
  timeline: '4 years · 2015-2018',
  accentColor: '#FF00AA',
  heroImage: '/images/4-universal-college-application/Designs/Dashboard/PNGs/Cappex-Application-Desktop-Dashboard_Applications-Complete.png',
  heroImageAlt: 'Universal College Application interface',
  overview:
    "The college application process overwhelmed students applying to multiple schools. Each required a separate application, separate essays, and separate submission processes. At Cappex, I designed the Universal College Application: one essay, one profile, submitted to 200+ partner colleges simultaneously. The platform scaled from 250,000 to 1.5 million users during my four years and now serves 4 million+ as Appily.",
  bentoStats: [
    { value: '47%', label: 'Application completion rate', sublabel: 'vs 20-35% industry standard' },
    { value: '600%', label: 'User growth', sublabel: '250K to 1.5M during tenure (now 4M+ as Appily)' },
    { value: '200+', label: 'Partner colleges', sublabel: 'Including U of Michigan and Michigan State' },
    { value: '6 hrs', label: 'vs 30+ hours traditionally', sublabel: '80% reduction in student effort' },
    { value: '25%', label: 'Session time increase', sublabel: '4.8 to 6 minutes average' },
    { value: '10pt', label: 'Bounce rate decrease', sublabel: 'From information architecture redesign' },
  ],
  sections: [
    {
      type: 'insight',
      heading: 'Students were not failing to complete applications. They were choosing not to start them.',
      quote: '"I am applying to 8 colleges. I have written 12 different essays. I am exhausted."',
      body: `I ran surveys, interviews, and focus groups with high school students and observed them attempting to complete multiple college applications. The behavior was consistent: students opened dozens of browser tabs, copied and pasted content between applications, made mistakes, and gave up.

Industry data confirmed the pattern. The average college application completion rate was 20-35%. Students started applications and abandoned them before submission at rates that admissions officers described as deeply frustrating.

The first-generation student problem was sharper. First-generation students graduated at a 24% rate compared to 59% for continuing-generation students. The application process was a primary barrier.`,
      image: '/images/4-universal-college-application/Wires/User%20Onboarding.png',
      imageAlt: 'Early wireframe mapping the user onboarding flow for the Universal College Application',
    },
    {
      type: 'decision',
      heading: 'Remove friction at every step. Do not add features. Remove obstacles.',
      body: `The core design decision: a single universal profile. Name, address, high school, test scores, entered once, auto-filling across all applications. A single universal essay prompt accepted by all 200+ partner colleges.

I mapped every step of the traditional application process and asked one question at each: does this step require unique information, or is it repeated from another form? Most steps were repetitions. I eliminated or pre-filled them.

The dashboard design went through three major iterations. The empty state needed to feel inviting, not overwhelming. The populated state needed to surface exactly what was still needed without making the completed work feel precarious.`,
      images: [
        '/images/4-universal-college-application/Designs/Dashboard/PNGs/Cappex-Application-Desktop-Dashboard_Empty.png',
        '/images/4-universal-college-application/Designs/Dashboard/PNGs/Cappex-Application-Desktop-Dashboard_Populated.png',
      ],
    },
    {
      type: 'iteration',
      heading: 'Continuous testing with real high school students, not assumptions about them.',
      body: `I tested throughout the design process with students at local high schools. Early testing revealed confusion about the college selection interface. Students did not understand how to add schools to their list. I redesigned the flow with clearer calls-to-action and visual confirmation feedback.

The essay section required the most iteration. Students needed to understand that one essay would go to every college they selected. The first version buried this context. The final version made it the first thing students saw when they reached that section — framed as the feature it was, not a constraint.

Error states were a key focus. When students made mistakes, the interface needed to explain exactly what went wrong and how to fix it, without making them feel they had lost their work.`,
      images: [
        '/images/4-universal-college-application/Designs/Create%20Account/PNGs/Cappex-Application-Desktop-Create-Account.png',
        '/images/4-universal-college-application/Designs/Essays/PNGs/Cappex-Application-Sections-Short-Answer-and-Essay-Questions-Desktop.png',
      ],
    },
    {
      type: 'outcome',
      heading: '47% completion. 600% user growth. The standard completion rate was 35%.',
      body: `The Universal College Application achieved a 47% completion rate against a 20-35% industry standard. Students applying to 10 colleges spent 6 hours on the Cappex application compared to 30+ hours on traditional applications.

The platform scaled from 250,000 users in 2015 to 1,500,000 users by the end of my tenure. It now serves 4,000,000+ users as Appily following EAB’s 2020 acquisition. Partner colleges grew to 200+ institutions including the University of Michigan and Michigan State.

Session time increased 25%. Bounce rate decreased 10 percentage points. The application complete state — the moment a student submits to every college at once — was the culmination of every friction-reduction decision made across four years.`,
      image: '/images/4-universal-college-application/Designs/Dashboard/PNGs/Cappex-Application-Desktop-Dashboard_Applications-Complete.png',
      imageAlt: 'Cappex dashboard showing completed applications submitted to all selected colleges',
    },
    {
      type: 'reflection',
      heading: 'Simplicity is the hardest design problem. Adding is easy. Removing is not.',
      body: `Every iteration cycle produced the same finding: students wanted less complexity, not more features. The temptation was always to add guidance, add tooltips, add helper text. Every addition increased the cognitive load on students who were already overwhelmed.

The design principle I kept returning to: a student applying to 10 colleges under deadline pressure has no patience for a feature. They have tolerance only for the next step forward. The interface needed to make the next step obvious at every moment, and then get out of the way.

The thing I would investigate next: the gap between completion rate and enrollment. A 47% completion rate meant 53% of students who started still did not finish. Understanding that specific group with more precision, and designing specifically for them, would be the next meaningful iteration.`,
    },
  ],
    prevCase: {
    slug: 'messaging-api',
    client: 'TELESIGN',
    title: 'Messaging API Platform',
    accentColor: '#F5C200',
  },
  nextCase: {
    slug: 'self-service-portal',
    client: 'TELESIGN',
    title: 'Self-Service Customer Portal',
    accentColor: '#F47060',
  },
};

export default function UniversalCollegeAppPage() {
  return <CaseStudyTemplate data={data} />;
}
