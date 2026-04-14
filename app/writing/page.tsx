import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts, TAG_COLORS } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on product design, process, tooling, and what it took to ship. By Danny Driscoll.',
}

export default function WritingPage() {
  const [featuredPost, ...restPosts] = blogPosts

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text-primary)', minHeight: '100vh' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-24">

        {/* ── Page header ───────────────────────────────────────── */}
        <header className="mb-12 lg:mb-16 max-w-2xl">
          <p className="text-label font-semibold tracking-widest uppercase mb-4"
             style={{ color: 'var(--color-text-secondary)' }}>
            Writing
          </p>
          <h1 className="text-h1 font-bold tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}>
            Notes from the work
          </h1>
          <p className="text-lead leading-relaxed"
             style={{ color: 'var(--color-text-secondary)' }}>
            Product design, process, tooling, and what it took to ship.
          </p>
        </header>

        {/* ── Featured post ─────────────────────────────────────── */}
        {featuredPost && (
          <Link
            href={`/writing/${featuredPost.slug}`}
            className="group block mb-12 lg:mb-16 rounded-2xl overflow-hidden border transition-all duration-200 hover:border-[#3B5CE8]"
            style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-card)' }}
            aria-label={`Read: ${featuredPost.title}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Left — placeholder hero image */}
              <div
                className="relative min-h-[280px] md:min-h-[360px] overflow-hidden"
                style={{ background: 'var(--color-bg-secondary)' }}
                aria-hidden="true"
              >
                {/* Decorative bull's-eye rings — matches site visual language */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-56 h-56 rounded-full border"
                       style={{ borderColor: 'rgba(59,92,232,0.18)' }} />
                  <div className="absolute w-36 h-36 rounded-full border"
                       style={{ borderColor: 'rgba(59,92,232,0.28)' }} />
                  <div className="absolute w-14 h-14 rounded-full"
                       style={{ background: 'rgba(59,92,232,0.10)', border: '1px solid rgba(59,92,232,0.30)' }} />
                </div>
                {/* Category tag */}
                <div className="absolute top-5 left-5">
                  <span
                    className="inline-block text-label font-bold tracking-wider uppercase px-2.5 py-1 rounded"
                    style={{
                      background: TAG_COLORS[featuredPost.tagColor].bg,
                      color: TAG_COLORS[featuredPost.tagColor].text,
                      border: `1px solid ${TAG_COLORS[featuredPost.tagColor].border}`,
                    }}
                  >
                    {featuredPost.tag}
                  </span>
                </div>
              </div>

              {/* Right — post body */}
              <div className="flex flex-col justify-between p-8 lg:p-10">
                <div>
                  <p className="text-small mb-4"
                     style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-sans)' }}>
                    {featuredPost.date}&nbsp;&nbsp;·&nbsp;&nbsp;{featuredPost.readTime} min read
                  </p>
                  <h2
                    className="font-bold tracking-tight mb-4 leading-snug group-hover:text-[#3B5CE8] transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p className="text-small leading-relaxed mb-7"
                     style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-sans)' }}>
                    {featuredPost.excerpt}
                  </p>

                  {/* Key stats strip */}
                  <div className="grid grid-cols-3 gap-3 mb-7">
                    {featuredPost.stats.slice(0, 3).map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg px-3 py-3"
                        style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
                      >
                        <div
                          className="font-bold tracking-tight leading-none mb-1"
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.125rem',
                            color: stat.accentHex ?? 'var(--color-text-primary)',
                          }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-label leading-tight"
                             style={{ color: 'var(--color-text-secondary)' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read link — three signals: color + underline + chevron */}
                <span
                  className="inline-flex items-center gap-1.5 text-small font-bold"
                  style={{ color: '#3B5CE8', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}
                >
                  Read the post
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* ── More posts grid ───────────────────────────────────── */}
        {restPosts.length > 0 && (
          <section aria-labelledby="more-posts-label">
            <p id="more-posts-label"
               className="text-label font-bold tracking-widest uppercase mb-5"
               style={{ color: 'var(--color-text-secondary)' }}>
              More posts
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
              {restPosts.map((post) => (
                <li key={post.slug} role="listitem">
                  <Link
                    href={`/writing/${post.slug}`}
                    className="group block h-full rounded-xl overflow-hidden border transition-all duration-200 hover:border-[#3B5CE8]"
                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-card)' }}
                    aria-label={`Read: ${post.title}`}
                  >
                    {/* Card image placeholder */}
                    <div
                      className="relative h-36 overflow-hidden"
                      style={{ background: 'var(--color-bg-secondary)' }}
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border"
                             style={{ borderColor: 'rgba(59,92,232,0.2)' }} />
                        <div className="absolute w-10 h-10 rounded-full"
                             style={{ background: 'rgba(59,92,232,0.06)' }} />
                      </div>
                      <div className="absolute bottom-2.5 left-3">
                        <span
                          className="inline-block text-label font-bold tracking-wider uppercase px-2 py-1 rounded"
                          style={{
                            background: TAG_COLORS[post.tagColor].bg,
                            color: TAG_COLORS[post.tagColor].text,
                            border: `1px solid ${TAG_COLORS[post.tagColor].border}`,
                          }}
                        >
                          {post.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <p className="text-label mb-2"
                         style={{ color: 'var(--color-text-secondary)' }}>
                        {post.date}&nbsp;·&nbsp;{post.readTime} min
                      </p>
                      <h3
                        className="font-bold leading-snug mb-2 group-hover:text-[#3B5CE8] transition-colors duration-150"
                        style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem' }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-small leading-relaxed mb-4"
                         style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-sans)' }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3"
                           style={{ borderTop: '1px solid var(--color-border)' }}>
                        <span
                          className="text-small font-bold inline-flex items-center gap-1"
                          style={{ color: '#3B5CE8', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}
                        >
                          Read
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
                               xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-label" style={{ color: 'var(--color-text-secondary)' }}>
                          {post.readTime} min read
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── Empty state: only one post ────────────────────────── */}
        {blogPosts.length === 1 && (
          <p className="text-small mt-2" style={{ color: 'var(--color-text-secondary)' }}>
            More posts coming soon.
          </p>
        )}

      </div>
    </div>
  )
}
