import Link from 'next/link'
import type { CaseStudy } from '@/lib/case-studies'

interface CaseStudyCardProps {
  study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${study.slug}`}
      aria-label={`${study.title}. ${study.impactLabel}. View case study.`}
      className={[
        'group block rounded-xl overflow-hidden bg-white',
        'border border-brand-charcoal/10',
        /* Lift on hover */
        'hover:-translate-y-1 hover:shadow-[0_12px_32px_0_rgb(0_0_0_/_0.10)]',
        'transition-[transform,box-shadow] duration-200 motion-reduce:transition-none',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-royal',
      ].join(' ')}
    >
      {/* 4px accent top border */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: study.accentHex }}
        aria-hidden="true"
      />

      <div className="p-8">

        {/* Client eyebrow */}
        <p
          className="text-label font-bold tracking-widest uppercase mb-4"
          style={{ color: '#606060' }}
        >
          {study.client}
        </p>

        {/* Title with accent underline that grows on hover */}
        <h3
          className="text-h3 font-bold leading-snug text-brand-charcoal mb-1"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {study.title}
        </h3>
        {/* Underline bar — grows from 0 to full width on card hover */}
        <div
          className="h-0.5 w-0 group-hover:w-full transition-[width] duration-300 ease-out motion-reduce:transition-none mb-5"
          style={{ backgroundColor: study.accentHex }}
          aria-hidden="true"
        />

        {/* Impact label */}
        <p className="text-small font-semibold text-brand-charcoal/50 mb-8">
          {study.impactLabel}
        </p>

        {/* Outcome summary */}
        <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-8">
          {study.outcomeSummary}
        </p>

        {/* CTA row */}
        <div
          className="flex items-center gap-1.5 text-small font-semibold text-brand-charcoal/40 group-hover:text-brand-charcoal/70 transition-colors duration-150 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <span>View case study</span>
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="translate-x-0 group-hover:translate-x-1 transition-transform duration-150 motion-reduce:transition-none"
            focusable="false"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>
    </Link>
  )
}
