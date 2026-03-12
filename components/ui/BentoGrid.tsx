import { StatCard, StatCardData } from '@/components/ui/StatCard'

/**
 * Exactly 6 stats — typed as a tuple so TypeScript enforces completeness.
 * Index 0 = S1 (hero), 1–3 = S2–S4 (middle row), 4–5 = S5–S6 (bottom row).
 */
export type BentoStats = [
  StatCardData, // S1 — hero, full-width top row
  StatCardData, // S2 — col 1 of middle row
  StatCardData, // S3 — col 2 of middle row
  StatCardData, // S4 — col 3 of middle row
  StatCardData, // S5 — spans 2 cols on desktop, bottom row left
  StatCardData, // S6 — 1 col on desktop, bottom row right
]

interface BentoGridProps {
  stats: BentoStats
  className?: string
}

/**
 * Desktop (lg, 3 cols):
 *   Row 1 ─ [  S1 hero  ·  col-span-3  ]
 *   Row 2 ─ [ S2 ] [ S3 ] [ S4 ]
 *   Row 3 ─ [  S5 · col-span-2  ] [ S6 ]
 *
 * Tablet (md, 2 cols):
 *   Row 1 ─ [ S1 hero · col-span-2 ]
 *   Row 2 ─ [ S2 ] [ S3 ]
 *   Row 3 ─ [ S4 ] [ S5 ]
 *   Row 4 ─ [ S6 · col-span-2 ]
 *
 * Mobile (1 col): all stacked
 */
export function BentoGrid({ stats, className = '' }: BentoGridProps) {
  const [s1, s2, s3, s4, s5, s6] = stats

  return (
    <div
      className={[
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4',
        className,
      ].join(' ')}
    >
      {/* ── S1 Hero — full width on every breakpoint ─────────────── */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 min-h-[140px] md:min-h-[160px]">
        <StatCard {...s1} size="hero" className="h-full" />
      </div>

      {/* ── S2 ───────────────────────────────────────────────────── */}
      <div className="col-span-1 min-h-[140px]">
        <StatCard {...s2} className="h-full" />
      </div>

      {/* ── S3 ───────────────────────────────────────────────────── */}
      <div className="col-span-1 min-h-[140px]">
        <StatCard {...s3} className="h-full" />
      </div>

      {/* ── S4 ───────────────────────────────────────────────────── */}
      <div className="col-span-1 min-h-[140px]">
        <StatCard {...s4} className="h-full" />
      </div>

      {/*
        ── S5 ─────────────────────────────────────────────────────
        Desktop:  col-span-2 (bottom row, left side, wide)
        Tablet:   col-span-1 (pairs with S4 in row 3)
        Mobile:   col-span-1 (stacked)
      */}
      <div className="col-span-1 lg:col-span-2 min-h-[140px]">
        <StatCard {...s5} className="h-full" />
      </div>

      {/*
        ── S6 ─────────────────────────────────────────────────────
        Desktop:  col-span-1 (bottom row, right side)
        Tablet:   col-span-2 (full width, closing row)
        Mobile:   col-span-1 (stacked)
      */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 min-h-[140px]">
        <StatCard {...s6} className="h-full" />
      </div>
    </div>
  )
}
