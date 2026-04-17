import Link from 'next/link'
import type { ReactNode } from 'react'
import type { BlogPost } from '@/lib/blog-posts'
import { TAG_COLORS } from '@/lib/blog-posts'
import { Avatar } from '@/components/blog/Avatar'

interface PostHeroProps {
  post: BlogPost
  /** Optional custom hero content rendered in place of the default card */
  children?: ReactNode
}

/** Accent rule hex per tagColor — used by the eyebrow above the title */
const ACCENT_HEX: Record<BlogPost['tagColor'], string> = {
  blue:      '#4063FB',
  coral:     '#FF6F6E',
  amber:     '#FFCB05',
  magenta:   '#E500A2',
  lightBlue: '#6DA3F8',
}

export function PostHero({ post, children }: PostHeroProps) {
  const accent = ACCENT_HEX[post.tagColor]
  const tagPalette = TAG_COLORS[post.tagColor]

  return (
    <header
      style={{
        width: '100%',
        marginBottom: '2.5rem',
      }}
    >
      {/* ── Breadcrumb ───────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        style={{
          fontSize: '0.75rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '1.25rem',
          fontFamily: 'var(--font-sans), -apple-system, sans-serif',
        }}
      >
        <Link
          href="/writing"
          style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
        >
          Writing
        </Link>
        <span style={{ margin: '0 0.5rem', color: 'var(--color-text-tertiary)' }}>/</span>
        <span style={{ color: 'var(--color-text-primary)' }}>{post.shortTitle}</span>
      </nav>

      {/* ── Custom hero slot ─────────────────────────────────────── */}
      {children && (
        <div style={{ marginBottom: '2rem' }}>
          {children}
        </div>
      )}

      {/* ── Eyebrow: accent rule + category + date ──────────────── */}
      {!children && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '1rem',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: '28px',
              height: '2px',
              background: accent,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: accent,
              fontFamily: 'var(--font-display), "Plus Jakarta Sans", sans-serif',
            }}
          >
            {post.tag}
          </span>
          <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.75rem' }}>·</span>
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-tertiary)',
              fontFamily: 'var(--font-sans), -apple-system, sans-serif',
            }}
          >
            {post.date}
          </span>
        </div>
      )}

      {/* ── Title (only when no custom hero) ─────────────────────── */}
      {!children && (
        <h1
          style={{
            fontFamily: 'var(--font-display), "Plus Jakarta Sans", sans-serif',
            fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)',
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
            color: 'var(--color-text-primary)',
            margin: 0,
            maxWidth: '720px',
            marginBottom: '1.25rem',
          }}
        >
          {post.title}
        </h1>
      )}

      {/* ── Byline: avatar + name + read time ────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginTop: children ? '1.5rem' : '0.25rem',
        }}
      >
        <Avatar size={48} />
        <div
          style={{
            fontSize: '0.8125rem',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-sans), -apple-system, sans-serif',
          }}
        >
          Danny Driscoll
          <span style={{ margin: '0 0.5rem', color: 'var(--color-text-tertiary)' }}>·</span>
          {post.readTime} min read
        </div>
      </div>

      {/* ── When a custom hero is shown, print eyebrow + title BELOW it ── */}
      {children && (
        <div style={{ marginTop: '2rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '1rem',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: '28px',
                height: '2px',
                background: accent,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: accent,
                fontFamily: 'var(--font-display), "Plus Jakarta Sans", sans-serif',
              }}
            >
              {post.tag}
            </span>
            <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.75rem' }}>·</span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-text-tertiary)',
                fontFamily: 'var(--font-sans), -apple-system, sans-serif',
              }}
            >
              {post.date}
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display), "Plus Jakarta Sans", sans-serif',
              fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
              color: 'var(--color-text-primary)',
              margin: 0,
              maxWidth: '720px',
            }}
          >
            {post.title}
          </h1>
        </div>
      )}
    </header>
  )
}
