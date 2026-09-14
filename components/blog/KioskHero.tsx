'use client'

/**
 * KioskHero — animated article hero for the Superstrike Challenge post.
 *
 * Recreates the live kiosk's attract → click → 3-2-1 countdown loop
 * (logitech-kiosk.displayedux.com) in the site's own type system.
 * Deliberately excludes client-owned assets: no Logitech wordmark,
 * no product renders, no licensed Brown font. Typography runs on
 * Plus Jakarta Sans as a declared stylization.
 *
 * Behavior parity with TerminalHero:
 * - loops continuously (8.4s cycle)
 * - hover anywhere pauses the loop; mouse leave resumes
 * - prefers-reduced-motion renders the static attract screen
 *
 * Scaling: the stage is authored at 1200x628 and scaled to fit its
 * container width, the same approach TerminalHero uses. If TerminalHero
 * uses a different mechanism in the current repo, mirror that instead.
 */

import { useEffect, useRef } from 'react'
import styles from './KioskHero.module.css'

export function KioskHero() {
  const outerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    if (!outer) return
    const setScale = () => {
      outer.style.setProperty('--kiosk-scale', String(outer.clientWidth / 1200))
    }
    setScale()
    const ro = new ResizeObserver(setScale)
    ro.observe(outer)
    return () => ro.disconnect()
  }, [])

  return (
    <div className={styles.outer} ref={outerRef} role="img" aria-label="Looping animation of the Superstrike Challenge kiosk: the attract screen reads SUPERSTRIKE CHALLENGE with a CLICK TO PLAY prompt, a cursor clicks it, and a large 3, 2, 1 countdown follows.">
      <div className={styles.stage}>
        <div className={styles.topbarLeft} />
        <div className={styles.topbar}>SUPERSTRIKE CHALLENGE</div>

        <div className={styles.attract}>
          <div className={styles.attractTitle}>
            <div className={styles.line1}>SUPERSTRIKE</div>
            <div className={styles.line2}>CHALLENGE</div>
          </div>
          <div className={styles.cta}>
            <span className={styles.sq} />CLICK TO PLAY
          </div>
          <div className={styles.meter}>
            <div className={styles.meterLabels}><span>YOUR CLICKS</span><span>PRO 95</span></div>
            <div className={styles.meterTrack}>
              <div className={styles.meterFill} />
              <div className={styles.meterTick} />
            </div>
          </div>
        </div>

        <div className={styles.ripple} />
        <div className={styles.cursor} aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 26 26">
            <path d="M3 1 L3 20 L8 15.5 L11.5 24 L15 22.4 L11.5 14 L18 14 Z" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.4" />
          </svg>
        </div>

        <div className={styles.pulse} />
        <div className={`${styles.count} ${styles.c3}`}><span>3</span></div>
        <div className={`${styles.count} ${styles.c2}`}><span>2</span></div>
        <div className={`${styles.count} ${styles.c1}`}><span>1</span></div>
      </div>
    </div>
  )
}
