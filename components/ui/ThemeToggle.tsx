'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  /* On mount: read saved preference, apply immediately */
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
    const initial = saved ?? 'light'
    apply(initial)
    setTheme(initial)
  }, [])

  function apply(next: 'dark' | 'light') {
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    apply(next)
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={[
        'flex items-center justify-center w-9 h-9 rounded-md',
        'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]',
        'hover:bg-white/5 transition-colors duration-150',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F47060]',
      ].join(' ')}
    >
      {theme === 'dark' ? (
        /* Sun — shown in dark mode, click switches to light */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
          />
        </svg>
      ) : (
        /* Moon — shown in light mode, click switches to dark */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}
