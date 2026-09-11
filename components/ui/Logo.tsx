interface LogoProps {
  /** Show just the mark, or mark + wordmark, or footer variant */
  variant?: 'mark' | 'full' | 'footer'
  /** Size of the circular mark in px */
  size?: number
  className?: string
}

export function Logo({ variant = 'full', size = 40, className = '' }: LogoProps) {
  const isFooter = variant === 'footer'

  return (
    <a
      href="/"
      aria-label="DisplayedUX, Strategic Product Design. Go to homepage."
      className={`inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4063FB] rounded-sm ${className}`}
    >
      {/* Concentric circles mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {isFooter ? (
          <>
            <circle cx="26" cy="26" r="24" fill="#4063FB" stroke="white" strokeWidth="2" />
            <circle cx="26" cy="26" r="17" fill="#FF6F6E" />
            <circle cx="26" cy="26" r="11" fill="#E500A2" />
            <circle cx="26" cy="26" r="5.5" fill="#FFCB05" />
          </>
        ) : (
          <>
            <circle cx="26" cy="26" r="24" fill="#4063FB" stroke="white" strokeWidth="2" />
            <circle cx="26" cy="26" r="17" fill="#FF6F6E" />
            <circle cx="26" cy="26" r="11" fill="#E500A2" />
            <circle cx="26" cy="26" r="5.5" fill="#FFCB05" />
          </>
        )}
      </svg>

      {(variant === 'full' || variant === 'footer') && (
        <div className="flex flex-col leading-none">
          <span
            className="text-[1.05rem] font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: isFooter ? '#FFFFFF' : 'var(--color-text-primary)' }}
          >
            Displayed<span style={{ color: isFooter ? '#FFCB05' : '#FF6F6E' }}>UX</span>
          </span>
          <span
            className="text-[0.6rem] font-semibold tracking-[0.12em] uppercase mt-0.5"
            style={{ fontFamily: 'var(--font-sans)', color: isFooter ? '#FFFFFF' : 'var(--color-text-muted)' }}
          >
            Strategic Product Design
          </span>
        </div>
      )}
    </a>
  )
}
