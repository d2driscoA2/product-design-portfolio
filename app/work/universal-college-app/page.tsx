import type { Metadata } from 'next';
import CaseStudyTemplate, { CaseStudyData } from '@/components/ui/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'Universal College Application | Danny Driscoll',
  description: 'Designing the application that reached 47% completion against a 20-35% industry standard, scaling to 4M+ users.',
};

const data: CaseStudyData = {
  slug: 'universal-college-app',
  client: 'APPILY.COM',
  title: 'Universal College Application',
  headline: 'One Essay, Every College. A 47% Completion Rate in an Industry That Averages 35%.',
  role: 'Lead Product Designer',
  timeline: '4 years · 2015–2018',
  accentColor: '#FF00AA',
  heroImage: '/images/4-universal-college-application/hero/Prototype-Sample.png',
  heroImageAlt: 'Appily.com Universal College Application — design prototype flow showing the complete user journey across mobile screens',
  heroImagePosition: 'center center',
  heroVideo: {
    videoId: '0LJopyMAoIo',
    title: 'Appily.com Universal College Application — Product Demo',
  },
  overview:
    "The college application process overwhelmed students applying to multiple schools. Each required a separate application, separate essays, and separate submission processes. At Appily.com (formerly Cappex), I designed the Universal College Application: one essay, one profile, submitted to 200+ partner colleges simultaneously. The platform scaled from 250,000 to 1.5 million users during my four years, and now serves 4 million+ as Appily.",
  bentoStats: [
    { value: '47%', label: 'Application completion rate', sublabel: 'vs 20–35% industry standard' },
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

Industry data confirmed the pattern. The average college application completion rate was 20–35%. Students started applications and abandoned them before submission at rates that admissions officers described as deeply frustrating.

The first-generation student problem was sharper. First-generation students graduated at a 24% rate compared to 59% for continuing-generation students. The application process was a primary barrier. The system assumed a familiarity and a financial cushion they had not been given.

I also met directly with admissions offices at partner universities. What they told me reframed everything. They wanted more applicants. They were losing qualified students not to competing schools but to the friction of applying. Universities and students were failing each other because the system connecting them was broken.`,
      image: '/images/4-universal-college-application/Wires/User Onboarding.png',
      imageAlt: 'Early wireframe mapping the user onboarding flow for the Universal College Application',
      imageCaption: 'Early onboarding wireframe: the flow from empty dashboard to first school added. The core design challenge was making the first step feel achievable, not overwhelming.',
      images: [
        '/images/4-universal-college-application/images-for-case-study/Screenshot%202026-03-18%20at%201.50.27%20PM.png',
        '/images/4-universal-college-application/images-for-case-study/Screenshot%202026-03-18%20at%201.50.49%20PM.png',
        '/images/4-universal-college-application/images-for-case-study/Screenshot%202026-03-18%20at%201.50.58%20PM.png',
        '/images/4-universal-college-application/images-for-case-study/Screenshot%202026-03-18%20at%201.51.21%20PM.png',
        '/images/4-universal-college-application/images-for-case-study/Screenshot%202026-03-18%20at%201.51.45%20PM.png',
        '/images/4-universal-college-application/images-for-case-study/Screenshot%202026-03-18%20at%201.52.12%20PM.png',
      ],
    },
    {
      type: 'decision',
      heading: 'Remove friction at every step. Do not add features. Remove obstacles.',
      body: `The core design decision: a single universal profile. Name, address, high school, test scores, entered once, auto-filling across all applications. A single universal essay prompt accepted by all 200+ partner colleges.

I mapped every step of the traditional application process and asked one question at each: does this step require unique information, or is it repeated from another form? Most steps were repetitions. I eliminated or pre-filled them.

For a significant portion of partner universities at launch, the application was free. Removing the per-application fee directly addressed the financial barrier that stopped first-generation students from applying broadly in the first place.

The dashboard design went through three major iterations. The empty state needed to feel inviting, not overwhelming. The populated state needed to surface exactly what was still needed without making the completed work feel precarious.`,
      images: [
        '/images/4-universal-college-application/Designs/Dashboard/PNGs/Cappex-Application-Desktop-Dashboard_Empty.png',
        '/images/4-universal-college-application/Designs/Dashboard/PNGs/Cappex-Application-Desktop-Dashboard_Populated.png',
        '/images/4-universal-college-application/Designs/Essays/PNGs/Cappex-Application-Sections-Short-Answer-and-Essay-Questions-Desktop.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/Home@2x.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/Create-Account@2x.png',
      ],
      imageCaption: 'Left to right: empty dashboard state — inviting, not intimidating. Populated dashboard with four schools in different completion states, college search active. Essay section — one prompt, visible to the student once, going to every college simultaneously. Launch screen and account creation entry points. Screens shown display the original Appily.com interface (formerly Cappex).',
    },
    {
      type: 'iteration',
      heading: 'Continuous testing with real high school students. Not assumptions about them.',
      body: `I tested throughout the design process with students at local high schools. Early testing revealed confusion about the college selection interface. Students did not understand how to add schools to their list. I redesigned the flow with clearer calls-to-action and visual confirmation feedback.

The essay section required the most iteration. Students needed to understand that one essay would go to every college they selected. The first version buried this context. The final version made it the first thing students saw when they reached that section — framed as the feature it was, not a constraint.

The single most impactful change after launch: making the essay word count visible in real time with a confidence indicator rather than a hard limit. Students who hit a hard word limit stopped. Students who saw a confidence indicator kept writing and then edited.

Error states were a key focus. When students made mistakes, the interface needed to explain exactly what went wrong and how to fix it, without making them feel they had lost their work.`,
      images: [
        '/images/4-universal-college-application/Designs/Create Account/PNGs/Cappex-Application-Desktop-Create-Account.png',
        '/images/4-universal-college-application/Designs/Form Field Error/PNGs/Cappex-Application-Desktop-Form-Field-Error-01.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/Section@2x.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/Section-Expanded@2x.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/Dash-School-Info-Missing@2x.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/Dash-School-Complete@2x.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/WAMC-Missing-Scores@2x.png',
      ],
      imageCaption: 'Account creation and error state design (desktop). All application sections collapsed with status indicators, then expanded to show sub-section completion. School cards in missing-info and complete states — the intelligent completion tracking system. "What Are My Chances?" prompting for test scores and GPA. Screens shown display the original Appily.com interface (formerly Cappex).',
    },
    {
      type: 'outcome',
      heading: '47% completion. 600% user growth. The standard completion rate was 35%.',
      body: `The Universal College Application achieved a 47% completion rate against a 20–35% industry standard. Students applying to 10 colleges spent 6 hours on the Appily.com platform compared to 30+ hours on traditional applications.

The platform scaled from 250,000 users in 2015 to 1,500,000 users by the end of my tenure. It now serves 4,000,000+ users as Appily following EAB's 2020 acquisition. Partner colleges grew to 200+ institutions including the University of Michigan and Michigan State.

Session time increased 25%. Bounce rate decreased 10 percentage points. The application complete state — the moment a student submits to every college at once — was the culmination of every friction-reduction decision made across four years.`,
      images: [
        '/images/4-universal-college-application/Designs/Dashboard/PNGs/Cappex-Application-Desktop-Dashboard_Applications-Complete.png',
        '/images/4-universal-college-application/Designs/Dashboard/PNGs/Cappex-Application-Mobile-Dashboard_Applications-Complete.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/Home-Search@2x.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/Dash-App-Status@2x.png',
        '/images/4-universal-college-application/images-for-case-study/Screens/App-Sent@2x.png',
      ],
      imageCaption: 'Desktop and mobile complete states: every application submitted simultaneously. College search active with Michigan results, dashboard completion status warning, and the "Application Complete!" success modal — the moment the research pointed toward from the start. Screens shown display the original Appily.com interface (formerly Cappex).',
    },
    {
      type: 'reflection',
      heading: 'Simplicity is the hardest design problem. Adding is easy. Removing is not.',
      body: `Every iteration cycle produced the same finding: students wanted less complexity, not more features. The temptation was always to add guidance, add tooltips, add helper text. Every addition increased the cognitive load on students who were already overwhelmed.

The metric I am most proud of is not the completion rate. It is the students who applied to schools they would not have applied to otherwise because the process was no longer exhausting enough to stop them.

If I were doing this today, I would push harder on measuring first-generation completion rates from day one. We optimized for overall completion. We should have measured, from launch, whether first-generation students were completing at the same rate as their peers. That data would have changed some of our prioritization decisions.

Institutional buy-in is a design problem. Getting 200 universities to accept a universal essay prompt required understanding their constraints as deeply as I understood students'. The best product decisions in that project came from those admissions office conversations, not the wireframes.`,
      image: '/images/4-universal-college-application/images-for-case-study/Screens/Artboard-4@2x.png',
      imageAlt: 'Multi-screen overview of all Appily.com Universal College Application screens (formerly Cappex)',
      imageCaption: 'Full product overview: all application screens in context — from search through submission. Screens shown display the original Appily.com interface (formerly Cappex).',
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
