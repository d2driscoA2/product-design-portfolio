import type { Metadata } from 'next'
import Link from 'next/link'
import { caseStudies } from '@/lib/case-studies'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'
import { HeroSection } from '@/components/ui/HeroSection'
import { MetricsStrip } from '@/components/ui/MetricsStrip'

export const metadata: Metadata = {
  title: 'Danny Driscoll | DisplayedUX',
  description:
    'Principal Product Designer with 18+ years designing products at TeleSign, Netflix, and Cappex. Shipping the wrong thing was never an option.',
}

/* ── Shared: eyebrow with coral rule ────────────────────────────────
   1px coral line + label. Used above every section heading.
──────────────────────────────────────────────────────────────────── */
function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="w-8 h-px bg-brand-coral" aria-hidden="true" />
      <p className="text-label font-bold tracking-widest uppercase text-brand-charcoal/50">
        {text}
      </p>
    </div>
  )
}

/* ── Section 1: Hero ────────────────────────────────────────────────
   White bg. Client component — headline visible on paint,
   subheadline + CTAs fade up on mount.
──────────────────────────────────────────────────────────────────── */
// (see components/ui/HeroSection.tsx)

/* ── Section 2: Metrics Strip ───────────────────────────────────────
   Charcoal bg. Client component — count-up on IntersectionObserver.
──────────────────────────────────────────────────────────────────── */
// (see components/ui/MetricsStrip.tsx)

/* ── Section 3: Client Logos ────────────────────────────────────────
   Off-white bg.
──────────────────────────────────────────────────────────────────── */

/* ── Section 4: Case Studies ────────────────────────────────────────
   White bg. Cards have 4px accent top borders + hover lift.
──────────────────────────────────────────────────────────────────── */
function CaseStudyGrid() {
  return (
    <section
      aria-labelledby="work-heading"
      className="bg-white py-20 lg:py-28 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <Eyebrow text="Selected Work" />
            <h2
              id="work-heading"
              className="text-h1 font-bold tracking-tight text-brand-charcoal"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Four case studies.
            </h2>
          </div>
          <Link
            href="/work"
            className={[
              'text-small font-semibold text-brand-blue-royal shrink-0',
              'inline-flex items-center gap-1.5 group',
              'underline-offset-4 hover:underline',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-royal',
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
          {caseStudies.map((study) => (
            <li key={study.slug} role="listitem">
              <CaseStudyCard study={study} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Section 5: Origin Story ────────────────────────────────────────
   Off-white bg. Pull quote left, narrative right.
──────────────────────────────────────────────────────────────────── */
function OriginStory() {
  return (
    <section
      aria-labelledby="origin-heading"
      className="bg-brand-offwhite py-20 lg:py-28 px-6"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Pull quote */}
        <blockquote
          className={[
            'text-h2 font-bold italic leading-snug text-brand-charcoal',
            'border-l-4 border-brand-coral pl-7 py-1',
          ].join(' ')}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          &ldquo;Someone pushed this design to production without thinking it could kill.&rdquo;
        </blockquote>

        {/* Story */}
        <div className="flex flex-col gap-6">
          <Eyebrow text="Origin" />
          <h2
            id="origin-heading"
            className="text-h2 font-bold tracking-tight text-brand-charcoal"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why design?
          </h2>

          <div className="text-body text-brand-charcoal/70 leading-relaxed space-y-4">
            <p>
              I was at the front desk of the Waldo Library computer lab at Western
              Michigan University. Somewhere behind me, a student let out a loud,
              strange yawn. Seconds later, screaming erupted. I turned and saw a
              student convulsing across the room. My lifeguard training kicked in.
            </p>
            <p>
              I stabilized their head, rolled them into the recovery position. They
              cleared their airway and started breathing. Then I looked up at the
              screen: a pop-up ad. &ldquo;YOU&rsquo;RE A WINNER&rdquo; in gold text,
              Vegas-style lights flashing. Then I looked at their wrist. An epilepsy bracelet.
            </p>
            <p className="font-semibold text-brand-charcoal border-t border-brand-charcoal/10 pt-4">
              That is the only thought I have carried into every project since.
            </p>
          </div>

          <Link
            href="/about"
            className={[
              'inline-flex items-center gap-1.5 group w-fit',
              'text-small font-semibold text-brand-coral',
              'underline-offset-4 hover:underline',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral',
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

/* ── Section 6: Design Philosophy ──────────────────────────────────
   White bg. 3 belief cards.
──────────────────────────────────────────────────────────────────── */
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
      className="bg-white py-20 lg:py-28 px-6"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 lg:mb-16">
          <Eyebrow text="Philosophy" />
          <h2
            id="philosophy-heading"
            className="text-h1 font-bold tracking-tight text-brand-charcoal"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Three things I actually believe.
          </h2>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          role="list"
        >
          {BELIEFS.map(({ statement, body }, i) => (
            <li
              key={statement}
              role="listitem"
              className="flex flex-col gap-4 p-8 rounded-xl border border-brand-charcoal/10 bg-brand-offwhite"
            >
              <span
                className="text-label font-bold tracking-widest"
              style={{ color: '#D1D5DB' }}
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              <h3
                className="text-h3 font-bold leading-snug text-brand-charcoal"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {statement}
              </h3>
              <p className="text-small text-brand-charcoal/60 leading-relaxed mt-auto">
                {body}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

/* ── Page assembly ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <MetricsStrip />
      <CaseStudyGrid />
      <OriginStory />
      <DesignPhilosophy />
    </>
  )
}
