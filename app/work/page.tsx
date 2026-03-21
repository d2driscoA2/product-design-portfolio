import type { Metadata } from 'next'
import { caseStudies } from '@/lib/case-studies'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Four case studies from 18+ years designing products where the stakes were real: security platforms, enterprise infrastructure, and education technology.',
}

export default function WorkPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)", color: "var(--color-text-primary)" }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-24">

        {/* ── Page header ──────────────────────────────────────────── */}
        <header className="mb-12 lg:mb-16 max-w-2xl">
          <p
            className="text-label font-semibold tracking-widest uppercase text-brand-blue-royal mb-4"
          >
            Selected Work
          </p>
          <h1
            className="text-h1 font-bold tracking-tight text-brand-charcoal mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Four case studies.
          </h1>
          <p className="text-lead text-brand-charcoal/70 leading-relaxed">
            Each starts with the business problem, because that&rsquo;s where
            design actually begins. Eighteen years of building products where
            mistakes have consequences.
          </p>
        </header>

        {/* ── Case study grid ───────────────────────────────────────── */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          aria-label="Case studies"
          role="list"
        >
          {caseStudies.map((study) => (
            <li key={study.slug} role="listitem">
              <CaseStudyCard study={study} />
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}
