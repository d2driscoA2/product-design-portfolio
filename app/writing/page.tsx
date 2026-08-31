import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'
import { WritingCardThumb } from '@/components/blog/WritingCardThumb'

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
        <header className="mb-14 lg:mb-20 max-w-2xl">
          <p className="text-label font-semibold tracking-widest uppercase mb-4"
             style={{ color: 'var(--color-text-secondary)' }}>
            Writing
          </p>
          <h1 className="text-h1 font-bold tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-display)' }}>
            Notes from the work
          </h1>
          <p className="text-lead leading-relaxed"
             style={{ color: 'var(--color-text-secondary)' }}>
            18 years of decisions, research, and design. These are the patterns that keep recurring.
          </p>
        </header>

        {/* ── Featured post ─────────────────────────────────────── */}
        {featuredPost && (
          <Link
            href={`/writing/${featuredPost.slug}`}
            className="group block mb-16 lg:mb-20 rounded-2xl overflow-hidden border transition-all duration-200 hover:border-[#4063FB]"
            style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-card)' }}
            aria-label={`Read: ${featuredPost.title}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">

              {/* Left — hero stat panel */}
              <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
                <WritingCardThumb post={featuredPost} variant="featured" />
              </div>

              {/* Right — title + excerpt + CTA, clean */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="text-small mb-5"
                   style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-sans)' }}>
                  {featuredPost.date}&nbsp;&nbsp;·&nbsp;&nbsp;{featuredPost.readTime} min read
                </p>
                <h2
                  className="font-bold tracking-tight mb-5 leading-snug group-hover:text-[#4063FB] transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2vw, 1.625rem)' }}
                >
                  {featuredPost.title}
                </h2>
                <p className="text-small leading-relaxed mb-8"
                   style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-sans)' }}>
                  {featuredPost.excerpt}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-small font-bold"
                  style={{ color: '#4063FB', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}
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

        {/* ── More posts ────────────────────────────────────────── */}
        {restPosts.length > 0 && (
          <section aria-labelledby="more-posts-label">
            <div
              className="flex items-center gap-4 mb-8"
              style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}
            >
              <p
                id="more-posts-label"
                className="text-label font-bold tracking-widest uppercase"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Further reading
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5" role="list">
              {restPosts.map((post) => (
                <li key={post.slug} role="listitem">
                  <Link
                    href={`/writing/${post.slug}`}
                    className="group flex flex-col h-full rounded-xl overflow-hidden border transition-all duration-200 hover:border-[#4063FB]"
                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-card)' }}
                    aria-label={`Read: ${post.title}`}
                  >
                    {/* Card thumbnail */}
                    <div className="relative overflow-hidden flex-shrink-0" style={{ height: 200 }}>
                      <WritingCardThumb post={post} variant="card" />
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5">
                      <p className="text-label mb-2"
                         style={{ color: 'var(--color-text-secondary)' }}>
                        {post.date}&nbsp;·&nbsp;{post.readTime} min
                      </p>
                      <h3
                        className="font-bold leading-snug mb-3 group-hover:text-[#4063FB] transition-colors duration-150"
                        style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem' }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-small leading-relaxed mb-5 flex-1"
                         style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-sans)' }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3"
                           style={{ borderTop: '1px solid var(--color-border)' }}>
                        <span
                          className="text-small font-bold inline-flex items-center gap-1"
                          style={{ color: '#4063FB', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}
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

      </div>
    </div>
  )
}
