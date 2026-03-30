'use client';

export interface BentoStat {
  value: string;
  label: string;
  sublabel?: string;
  variant?: string;
  accent?: string;
  accentPosition?: string;
  isFeature?: boolean;
}

interface BentoGridProps {
  stats: BentoStat[];
  accentColor: string;
}

export default function BentoGrid({ stats, accentColor }: BentoGridProps) {
  return (
    <>
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background-color: var(--color-border, #E5E7EB);
          border: 1px solid var(--color-border, #E5E7EB);
          border-radius: 12px;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      <div className="bento-grid">
        {stats.map((stat, i) => (
          <div key={i} style={{
            background: 'var(--color-bg-card, #fff)',
            padding: '2rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.375rem',
          }}>
            <span style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: accentColor,
            }}>{stat.value}</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary, #1A1A1A)', lineHeight: 1.3 }}>{stat.label}</span>
            {stat.sublabel && (
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary, #606060)', lineHeight: 1.4 }}>{stat.sublabel}</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
