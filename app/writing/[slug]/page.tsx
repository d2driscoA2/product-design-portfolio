import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, blogPosts, TAG_COLORS } from '@/lib/blog-posts'
import { WritingHero } from '@/components/blog/WritingHero'

/* ── Content component registry ────────────────────────────────── */
import { ClaudeCodePortfolioPost } from '@/components/blog/posts/claude-code-portfolio'
import { CaseStudyWritingPost }    from '@/components/blog/posts/case-study-writing'
import { OnboardingPatternPost }   from '@/components/blog/posts/onboarding-pattern'
import { DesigningForExpertsPost } from '@/components/blog/posts/designing-for-experts'
import { OutputVsOutcomePost }     from '@/components/blog/posts/output-vs-outcome'

const POST_CONTENT: Record<string, React.ComponentType> = {
  'claude-code-portfolio': ClaudeCodePortfolioPost,
  'case-study-writing':    CaseStudyWritingPost,
  'onboarding-pattern':    OnboardingPatternPost,
  'designing-for-experts': DesigningForExpertsPost,
  'output-vs-outcome':     OutputVsOutcomePost,
}

/* ── Static params ──────────────────────────────────────────────── */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

/* ── Metadata ───────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | DisplayedUX`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.dateISO,
      authors: ['Danny Driscoll'],
    },
  }
}

/* ── Page ───────────────────────────────────────────────────────── */
export default async function WritingPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const PostContent = POST_CONTENT[slug]
  if (!PostContent) notFound()

  const tagColors = TAG_COLORS[post.tagColor]

  /* ── Find next post for nav ─────────────────────────────────── */
  const currentIndex = blogPosts.findIndex(p => p.slug === slug)
  const nextPost = blogPosts[currentIndex + 1] ?? null
  const prevPost = blogPosts[currentIndex - 1] ?? null

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text-primary)', minHeight: '100vh' }}>

      {/* ── Breadcrumb ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-8 pb-0">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 flex-wrap" role="list">
            <li role="listitem">
              <Link
                href="/writing"
                className="text-small font-medium transition-colors duration-150 hover:text-[var(--color-text-primary)]"
                style={{ color: '#3B5CE8', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '2px' }}
              >
                Writing
              </Link>
            </li>
            <li role="listitem" aria-hidden="true"
                className="text-small" style={{ color: 'var(--color-border)' }}>/</li>
            <li role="listitem"
                className="text-small truncate max-w-xs"
                style={{ color: 'var(--color-text-secondary)' }}>
              {post.shortTitle}
            </li>
          </ol>
        </nav>
      </div>

      {/* ── Article header ──────────────────────────────────────── */}
      <header className="mx-auto max-w-6xl px-6 lg:px-8 pt-8 pb-0">

        {/* Eyebrow: tag + date */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="inline-block text-label font-bold tracking-wider uppercase px-2.5 py-1 rounded"
            style={{ background: tagColors.bg, color: tagColors.text, border: `1px solid ${tagColors.border}` }}
          >
            {post.tag}
          </span>
          <span className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
            <time dateTime={post.dateISO}>{post.date}</time>
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-bold tracking-tight leading-tight mb-6 max-w-4xl"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}
        >
          {post.title}
        </h1>

        {/* Byline */}
        <div
          className="flex items-center gap-4 flex-wrap pb-8 mb-0"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-small font-bold text-white flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #3B5CE8, #5B9FE8)' }}
            aria-hidden="true"
          >
            DD
          </div>
          <div>
            <div className="text-small font-semibold">Danny Driscoll</div>
            <div className="text-label" style={{ color: 'var(--color-text-secondary)' }}>
              Product Designer&nbsp;·&nbsp;displayedux.com
            </div>
          </div>
          <div className="ml-auto">
            <span className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
              {post.readTime} min read
            </span>
          </div>
        </div>
      </header>

      {/* ── Writing hero ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-8">
        <WritingHero post={post} />
      </div>

      {/* ── Key stats bento ─────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {post.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl px-4 py-4"
              style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
            >
              <div
                className="font-bold tracking-tight leading-none mb-1.5"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
                  color: stat.accentHex ?? 'var(--color-text-primary)',
                }}
              >
                {stat.value}
              </div>
              <div className="text-label leading-tight"
                   style={{ color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Article body + sidebar ───────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-start">

          {/* Article body */}
          <main id="main-article" aria-label="Article content">
            <PostContent />

            {/* ── Post navigation ──────────────────────────────── */}
            <nav
              aria-label="Post navigation"
              className="mt-12 pt-8"
              style={{ borderTop: '1px solid var(--color-border)' }}
            >
              <div className="flex items-stretch gap-4 flex-wrap">
                {prevPost && (
                  <Link
                    href={`/writing/${prevPost.slug}`}
                    className="group flex-1 min-w-[200px] rounded-xl p-5 border transition-colors duration-150 hover:border-[#3B5CE8]"
                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-card)' }}
                  >
                    <div className="text-label font-bold tracking-widest uppercase mb-1.5"
                         style={{ color: 'var(--color-text-secondary)' }}>
                      ← Previous post
                    </div>
                    <div className="text-small font-bold leading-snug group-hover:text-[#3B5CE8] transition-colors">
                      {prevPost.title}
                    </div>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    href={`/writing/${nextPost.slug}`}
                    className="group flex-1 min-w-[200px] rounded-xl p-5 border transition-colors duration-150 hover:border-[#3B5CE8] text-right ml-auto"
                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-card)' }}
                  >
                    <div className="text-label font-bold tracking-widest uppercase mb-1.5"
                         style={{ color: 'var(--color-text-secondary)' }}>
                      Next post →
                    </div>
                    <div className="text-small font-bold leading-snug group-hover:text-[#3B5CE8] transition-colors">
                      {nextPost.title}
                    </div>
                  </Link>
                )}
              </div>
            </nav>
          </main>

          {/* Sidebar — sticky TOC + author */}
          <aside
            className="hidden lg:block"
            aria-label="Article sidebar"
            style={{ position: 'sticky', top: '5rem' }}
          >
            {/* Table of contents */}
            <div
              className="rounded-xl p-5 mb-4"
              style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-card)' }}
            >
              <div className="text-label font-bold tracking-widest uppercase mb-3"
                   style={{ color: 'var(--color-text-secondary)' }}>
                On this page
              </div>
              <nav aria-label="Table of contents">
                <ol className="flex flex-col gap-0.5" role="list">
                  {[
                    'The numbers first',
                    'What I actually built',
                    'The tools',
                    'Claude Code vs. Desktop',
                    'Git worktree pattern',
                    'Session log',
                    'What broke',
                    'Security layer',
                    'Stats summary',
                    'What this means for designers',
                    'The playbook',
                  ].map((item, i) => (
                    <li key={i} role="listitem">
                      <span
                        className="flex items-center gap-2 py-1.5 text-small cursor-default"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--color-border)' }}
                          aria-hidden="true"
                        />
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Author card */}
            <div
              className="rounded-xl p-5"
              style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-card)' }}
            >
              <div className="text-label font-bold tracking-widest uppercase mb-3"
                   style={{ color: 'var(--color-text-secondary)' }}>
                About the author
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #3B5CE8, #5B9FE8)' }}
                  aria-hidden="true"
                >
                  DD
                </div>
                <div>
                  <div className="text-small font-bold">Danny Driscoll</div>
                  <div className="text-label" style={{ color: 'var(--color-text-secondary)' }}>
                    Principal Product Designer
                  </div>
                </div>
              </div>
              <p className="text-label leading-relaxed mb-4"
                 style={{ color: 'var(--color-text-secondary)' }}>
                18+ years across enterprise SaaS, consumer mobile, and developer
                tools. Open to Senior&nbsp;/&nbsp;Principal&nbsp;/&nbsp;Director
                Product Design roles.
              </p>
              <Link
                href="/work"
                className="block w-full text-center py-2.5 px-4 rounded-md text-small font-bold text-white transition-opacity duration-150 hover:opacity-90"
                style={{ background: '#3B5CE8' }}
              >
                View portfolio
                <svg className="inline-block ml-1.5" width="12" height="12"
                     viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                     aria-hidden="true">
                  <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="white"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
