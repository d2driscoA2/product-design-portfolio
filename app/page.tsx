import type { Metadata } from 'next'
import Link from 'next/link'
import { homepageCaseStudies } from '@/lib/case-studies'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'
import { HeroSection } from '@/components/ui/HeroSection'

export const metadata: Metadata = {
  title: 'Danny Driscoll | DisplayedUX',
  description:
    'Principal Product Designer with 18+ years designing products at TeleSign, Netflix, and Appily.com. Shipping the wrong thing was never an option.',
}

/* ── Shared: eyebrow with coral rule ──────────────────────────────── */
function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="w-8 h-px bg-brand-coral" aria-hidden="true" />
      <p className="text-[0.65rem] font-bold tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
        {text}
      </p>
    </div>
  )
}

/* ── Case Studies ─────────────────────────────────────────────────── */
function CaseStudyGrid() {
  return (
    <section
      aria-labelledby="work-heading"
      className="bg-[var(--color-bg)] py-20 lg:py-28 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <Eyebrow text="Selected Work" />
            <h2
              id="work-heading"
              className="text-h1 font-bold tracking-tight text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Four case studies.
            </h2>
          </div>
          <Link
            href="/work"
            className={[
              'text-small font-semibold text-[#FF6F6E] shrink-0',
              'inline-flex items-center gap-1.5 group',
              'underline-offset-4 hover:underline',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F6E]',
            ].join(' ')}
          >
            View all
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="translate-x-0 group-hover:translate-x-1 transition-transform duration-150 motion-reduce:transition-none"
              aria-hidden="true" focusable="false"
            >
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          aria-label="Case study previews"
          role="list"
        >
          {homepageCaseStudies.map((study) => (
            <li key={study.slug} role="listitem">
              <CaseStudyCard study={study} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Origin Story ─────────────────────────────────────────────────── */
function OriginStory() {
  return (
    <section
      aria-labelledby="origin-heading"
      className="bg-[var(--color-bg-secondary)] py-20 lg:py-28 px-6"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Pull quote */}
        <blockquote
          className={[
            'text-h2 font-bold italic leading-snug text-[var(--color-text-primary)]',
            'border-l-4 border-brand-coral pl-7 py-1',
          ].join(' ')}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          &ldquo;Design like someone&rsquo;s safety depends on it. Sometimes it does.&rdquo;
        </blockquote>

        {/* Story */}
        <div className="flex flex-col gap-6">
          <Eyebrow text="Origin" />
          <h2
            id="origin-heading"
            className="text-h2 font-bold tracking-tight text-[var(--color-text-primary)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why design?
          </h2>

          <div className="text-body leading-relaxed space-y-4" style={{ color: 'var(--color-text-muted)' }}>
            <p>
              Fall of sophomore year. Waldo Library, Western Michigan University. Third floor computer lab, about 75 machines, a wall of windows on the far side. I was in line at the front desk, trading my numbered mouse pad back for my student ID.
            </p>
            <p>
              Behind me, someone yawned. Loud, both hands to the face, the kind you&rsquo;d fake in an improv skit. I looked, thought nothing of it, and turned back to the desk.
            </p>
            <p>
              Then the gasps. The same student was bouncing in their chair.
            </p>
            <p>
              I lifeguarded every summer, so I knew what I was looking at. By the time I got across the room they were on the floor, and I could hear their head hitting the concrete through the thin carpet. I flipped their padded office chair on its back and got the backrest under their head. Fifteen more seconds of shaking, at most. A bracelet on their wrist I didn&rsquo;t need to read.
            </p>
            <p>
              The shaking stopped and they started choking on their own spit. I rolled them into the recovery position. They gargled, then breathed.
            </p>
            <p>
              Then I looked up at their screen. A pop-up, maybe 300 by 200 pixels, in its own window on an old Mac. Bold text flashing YOU&rsquo;RE A WINNER, ringed with lights chasing in a circle like an old Vegas sign.
            </p>
            <p>
              EMS took them out on a stretcher. I never learned their name.
            </p>
            <p>
              Years later someone recognized me. &ldquo;Aren&rsquo;t you the guy who saved that person?&rdquo; I didn&rsquo;t save anyone. I helped them ride out something they&rsquo;d ridden out before. What stayed with me was the screen. Somebody designed that ad, shipped it, and never found out what it did.
            </p>
            <p className="font-semibold text-[var(--color-text-primary)] border-t border-[var(--color-border)] pt-4">
              Design decisions reach real people. Every one of them.
            </p>
          </div>

          <Link
            href="/about"
            className={[
              'inline-flex items-center gap-1.5 group w-fit',
              'text-small font-semibold text-[#FF6F6E]',
              'underline-offset-4 hover:underline',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F6E]',
            ].join(' ')}
          >
            Read full story
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="translate-x-0 group-hover:translate-x-1 transition-transform duration-150 motion-reduce:transition-none"
              aria-hidden="true" focusable="false"
            >
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

/* ── Design Philosophy ────────────────────────────────────────────── */
const BELIEFS = [
  {
    statement: 'The communication comes first.',
    body: 'Every design element answers one question: does this move the user toward their goal in a clear, meaningful, familiar way? If it doesn\u2019t, it\u2019s noise. Noise erodes trust.',
  },
  {
    statement: 'Design for the margins.',
    body: 'The users at the edges: slow connections, screen readers, security anxiety, epilepsy bracelets. They reveal what a design is actually made of. Edge cases become the common case at scale.',
  },
  {
    statement: 'Prove it. Trust nothing, including instinct.',
    body: 'Animations and transitions earn their place through A/B testing, not aesthetic preference. Opinion is a starting point. Statistical significance is the destination.',
  },
] as const

function DesignPhilosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-[var(--color-bg)] py-20 lg:py-28 px-6"
    >
      {/* Decorative floating bull's-eyes — scattered behind cards */}
      <svg aria-hidden="true" width="140" height="140" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float pointer-events-none absolute" style={{ top: '8%', left: '-3%', zIndex: 0, animation: 'float-a 9s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#4063FB" /><circle cx="24" cy="24" r="17" fill="#FF6F6E" /><circle cx="24" cy="24" r="11" fill="#E500A2" /><circle cx="24" cy="24" r="5.5" fill="#FFCB05" /></svg>
      <svg aria-hidden="true" width="110" height="110" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float-alt pointer-events-none absolute" style={{ top: '60%', left: '8%', zIndex: 0, animation: 'float-b 11s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#4063FB" /><circle cx="24" cy="24" r="17" fill="#FF6F6E" /><circle cx="24" cy="24" r="11" fill="#E500A2" /><circle cx="24" cy="24" r="5.5" fill="#FFCB05" /></svg>
      <svg aria-hidden="true" width="160" height="160" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float pointer-events-none absolute" style={{ top: '-10%', right: '2%', zIndex: 0, animation: 'float-c 8s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#4063FB" /><circle cx="24" cy="24" r="17" fill="#FF6F6E" /><circle cx="24" cy="24" r="11" fill="#E500A2" /><circle cx="24" cy="24" r="5.5" fill="#FFCB05" /></svg>
      <svg aria-hidden="true" width="100" height="100" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float-alt pointer-events-none absolute" style={{ top: '75%', right: '5%', zIndex: 0, animation: 'float-d 13s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#4063FB" /><circle cx="24" cy="24" r="17" fill="#FF6F6E" /><circle cx="24" cy="24" r="11" fill="#E500A2" /><circle cx="24" cy="24" r="5.5" fill="#FFCB05" /></svg>
      <svg aria-hidden="true" width="140" height="140" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float pointer-events-none absolute" style={{ top: '40%', right: '-2%', zIndex: 0, animation: 'float-e 10s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#4063FB" /><circle cx="24" cy="24" r="17" fill="#FF6F6E" /><circle cx="24" cy="24" r="11" fill="#E500A2" /><circle cx="24" cy="24" r="5.5" fill="#FFCB05" /></svg>
      <svg aria-hidden="true" width="180" height="180" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float-alt pointer-events-none absolute" style={{ top: '85%', left: '45%', zIndex: 0, animation: 'float-f 12s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#4063FB" /><circle cx="24" cy="24" r="17" fill="#FF6F6E" /><circle cx="24" cy="24" r="11" fill="#E500A2" /><circle cx="24" cy="24" r="5.5" fill="#FFCB05" /></svg>

      <div className="mx-auto max-w-6xl">

        <div className="mb-16 lg:mb-20">
          <Eyebrow text="Philosophy" />
          <h2
            id="philosophy-heading"
            className="text-h1 font-bold tracking-tight text-[var(--color-text-primary)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Three things I actually believe.
          </h2>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          role="list"
        >
          {BELIEFS.map(({ statement, body }, i) => (
            <li
              key={statement}
              role="listitem"
              className="philosophy-card relative z-10 flex flex-col gap-4 rounded-xl p-8"
            >
              <span
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--color-card-number)' }}
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              <h3
                className="text-h3 font-bold leading-snug text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {statement}
              </h3>
              <p className="text-small leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {body}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

/* ── Page assembly ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <CaseStudyGrid />
      <OriginStory />
      <DesignPhilosophy />
    </>
  )
}
