import Link from 'next/link'
import Image from 'next/image'
import type { CaseStudy } from '@/lib/case-studies'

interface CaseStudyCardProps {
  study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${study.slug}`}
      aria-label={`${study.title}. ${study.impactLabel}. View case study.`}
      style={{ '--accent': study.accentHex } as React.CSSProperties}
      className={[
        'group block rounded-xl overflow-hidden bg-[var(--color-bg-card)]',
        'border border-[var(--color-border)] hover:[border-color:var(--accent)]',
        'hover:-translate-y-1 hover:shadow-[0_12px_32px_0_rgb(0_0_0_/_0.30)]',
        'transition-[transform,box-shadow,border-color] duration-200 motion-reduce:transition-none',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F47060]',
      ].join(' ')}
    >
      {/* Thumbnail — only rendered when thumbnailImage is set */}
      {study.thumbnailImage && (
        <div className="relative w-full h-[180px] overflow-hidden rounded-t-xl" style={{ backgroundColor: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border)' }}>
          <Image
            src={study.thumbnailImage}
            alt={`${study.title} preview`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="p-10">

        {/* Client eyebrow */}
        <p className="text-[0.65rem] font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>
          {study.client}
        </p>

        {/* Title with accent underline on hover */}
        <h3
          className="text-h3 font-bold leading-snug text-[var(--color-text-primary)] mb-1"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {study.title}
        </h3>
        <div
          className="h-0.5 w-0 group-hover:w-full transition-[width] duration-300 ease-out motion-reduce:transition-none mb-6"
          style={{ backgroundColor: study.accentHex }}
          aria-hidden="true"
        />

        {/* Impact label */}
        <p className="text-small font-semibold mb-8" style={{ color: 'var(--color-text-primary)' }}>
          {study.impactLabel}
        </p>

        {/* Outcome summary */}
        <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--color-text-muted)' }}>
          {study.outcomeSummary}
        </p>

        {/* CTA — accent color only here */}
        <div
          className="flex items-center gap-1.5 text-small font-semibold"
          style={{ color: study.accentHex }}
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
