/* ─────────────────────────────────────────────────────────────────
   WritingCardThumb — designed composition thumbnail.

   Layout: brand blue anchors the left side. The actual screenshot
   of the work bleeds in from the right with a gradient fade.
   A key stat number and category pill live in the blue zone.

   This gives users:
     - Immediate brand recognition (the blue)
     - A visual preview of the actual work (the screenshot)
     - A hook to read (the stat number)
     - A category signal (the pill)

   Two variants: 'featured' (taller, larger type) and 'card'.
───────────────────────────────────────────────────────────────── */

import Image from 'next/image'
import type { BlogPost } from '@/lib/blog-posts'

interface WritingCardThumbProps {
  post: BlogPost
  variant?: 'featured' | 'card'
}

const PILL_BG: Record<BlogPost['tagColor'], string> = {
  blue:      'rgba(255,255,255,0.12)',
  coral:     'rgba(244,112,96,0.28)',
  amber:     'rgba(245,194,0,0.22)',
  magenta:   'rgba(255,0,170,0.22)',
  lightBlue: 'rgba(109,163,248,0.22)',
}
const PILL_BORDER: Record<BlogPost['tagColor'], string> = {
  blue:      'rgba(255,255,255,0.22)',
  coral:     'rgba(244,112,96,0.50)',
  amber:     'rgba(245,194,0,0.40)',
  magenta:   'rgba(255,0,170,0.40)',
  lightBlue: 'rgba(109,163,248,0.40)',
}

export function WritingCardThumb({ post, variant = 'card' }: WritingCardThumbProps) {
  const isFeatured = variant === 'featured'
  const heroStat   = post.stats[0]

  return (
    <div
      aria-hidden="true"
      style={{
        position:   'relative',
        width:      '100%',
        height:     '100%',
        minHeight:  isFeatured ? 280 : 200,
        background: '#3B5CE8',
        overflow:   'hidden',
      }}
    >
      {/* ── Brand logo mark — bottom-left, at low opacity ── */}
      <svg
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{
          position:      'absolute',
          bottom:        isFeatured ? '-60px' : '-44px',
          left:          isFeatured ? '-60px' : '-44px',
          width:         isFeatured ? '260px' : '200px',
          height:        isFeatured ? '260px' : '200px',
          opacity:       0.14,
          pointerEvents: 'none',
        }}
      >
        <circle cx="26" cy="26" r="24" fill="#3B5CE8" />
        <circle cx="26" cy="26" r="17" fill="#F47060" />
        <circle cx="26" cy="26" r="11" fill="#FF00AA" />
        <circle cx="26" cy="26" r="5.5" fill="#F5C200" />
      </svg>

      {/* ── Screenshot — right portion, fading into the blue ── */}
      {post.thumbnailImage && (
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0,
          width: isFeatured ? '62%' : '68%',
          overflow: 'hidden',
        }}>
          <Image
            src={post.thumbnailImage}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'top left' }}
            sizes="(max-width: 768px) 70vw, 40vw"
          />
          {/* Left fade — screenshot dissolves into brand blue */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #3B5CE8 0%, rgba(59,92,232,0.85) 8%, rgba(59,92,232,0.20) 38%, rgba(59,92,232,0) 65%)',
            pointerEvents: 'none',
          }} />
          {/* Bottom fade — softens the cut */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(59,92,232,0.55) 0%, rgba(59,92,232,0) 40%)',
            pointerEvents: 'none',
          }} />
          {/* Subtle dark overlay so screenshot doesn't compete */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.10)',
            pointerEvents: 'none',
          }} />
        </div>
      )}

      {/* ── Content layer — sits over everything, left-anchored ── */}
      <div style={{
        position:       'absolute',
        inset:          0,
        zIndex:         2,
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'space-between',
        padding:        isFeatured ? '28px 32px' : '16px 20px',
      }}>

        {/* Top: category eyebrow */}
        <div>
          {isFeatured ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                display: 'block', width: '22px', height: '1.5px',
                background: 'rgba(255,255,255,0.35)', flexShrink: 0,
              }} />
              <span style={{
                display: 'inline-flex', alignItems: 'center',
                fontSize: '0.625rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase' as const,
                color: 'rgba(255,255,255,0.75)',
                fontFamily: 'var(--font-display), "Plus Jakarta Sans", sans-serif',
                background: PILL_BG[post.tagColor],
                border: `1px solid ${PILL_BORDER[post.tagColor]}`,
                borderRadius: '4px', padding: '3px 8px',
              }}>
                {post.tag}
              </span>
            </div>
          ) : (
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              fontSize: '0.5625rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'var(--font-display), "Plus Jakarta Sans", sans-serif',
              background: PILL_BG[post.tagColor],
              border: `1px solid ${PILL_BORDER[post.tagColor]}`,
              borderRadius: '4px', padding: '2px 7px',
            }}>
              {post.tag}
            </span>
          )}
        </div>

        {/* Bottom: hero stat — the hook */}
        {heroStat && (
          <div>
            <div style={{
              fontFamily:    'var(--font-display), "Plus Jakarta Sans", sans-serif',
              fontSize:      isFeatured ? 'clamp(2.5rem, 4vw, 3.75rem)' : '1.875rem',
              fontWeight:    900,
              letterSpacing: '-0.04em',
              lineHeight:    1,
              color:         'rgba(255,255,255,0.92)',
            }}>
              {heroStat.value}
            </div>
            <div style={{
              marginTop:     '5px',
              fontSize:      '0.5625rem',
              fontWeight:    600,
              letterSpacing: '0.10em',
              textTransform: 'uppercase' as const,
              color:         'rgba(255,255,255,0.38)',
              fontFamily:    'var(--font-sans), "Inter", sans-serif',
            }}>
              {heroStat.label}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
