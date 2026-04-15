# Blog Section Build — Handoff Document

**Project:** displayedux.com Writing section  
**Dates:** April 2026  
**Status:** Live at displayedux.com/writing — functional, image quality needs improvement  
**Branch:** design-v2  

---

## What Was Built

A complete blog infrastructure for displayedux.com with five published posts.

### File structure created

```
app/writing/page.tsx                    — Blog index page (/writing)
app/writing/[slug]/page.tsx             — Article page (/writing/[slug])
lib/blog-posts.ts                       — Post registry (types + data)
components/blog/BlogImage.tsx           — Image components (BlogImage, BlogHeroImage, BlogCardImage)
components/blog/posts/
  claude-code-portfolio.tsx             — Post 1 content
  case-study-writing.tsx                — Post 2 content
  onboarding-pattern.tsx                — Post 3 content
  designing-for-experts.tsx             — Post 4 content
  output-vs-outcome.tsx                 — Post 5 content
public/blog/                            — All blog images (23 files)
public/blog/images/                     — Per-post image assets
```

### Posts published

| Slug | Title | Tag | Read time |
|---|---|---|---|
| `claude-code-portfolio` | I Used Claude Code to Build My Entire UX Portfolio — Here Are the Actual Numbers | Process | 12 min |
| `case-study-writing` | How I Write Case Studies That Get Callbacks at the Principal Level | Process | 8 min |
| `onboarding-pattern` | The Onboarding Problem I Keep Solving at Every Company I Have Worked At | Process | 9 min |
| `designing-for-experts` | Designing for Experts Who Cannot Afford to Be Wrong | Case Study | 10 min |
| `output-vs-outcome` | 18 Years In, I Still Think Most Designers Confuse Output with Outcome | Process | 10 min |

### Architecture pattern

**Post registry** (`lib/blog-posts.ts`) is the single source of truth. Each post has:
- `slug` — URL path, matches the content component filename
- `thumbnailImage` — shown on the /writing index card
- `heroImage` — shown at the top of the article page
- `stats[]` — 4 numbers rendered as a bento grid on the article page

**Content components** (`components/blog/posts/*.tsx`) are hardcoded TSX with blog-specific CSS classes (`blog-content`, `blog-callout`, `blog-session`, etc.). This is intentional — no CMS, no MDX, no markdown parser. Pure React, full control over layout within each section.

**Adding a new post is exactly three steps:**
1. Add the post metadata object to `blogPosts[]` in `lib/blog-posts.ts`
2. Create `components/blog/posts/[slug].tsx` with the content
3. Register the component in the `POST_CONTENT` map in `app/writing/[slug]/page.tsx`

No routing changes needed. `generateStaticParams()` picks it up automatically.

---

## Issues Encountered and Root Causes

### Issue 1: Writing index cards showed placeholders, never real images

**What happened:** The /writing page was built with CSS bull's-eye ring placeholders in the card thumbnails. We assumed images would be wired in during the image phase. They never were — six separate commits dealt with images and none of them touched the index card rendering logic.

**Root cause:** The index page (`writing/page.tsx`) was never updated from the mockup-stage placeholder code. The placeholder was functional enough that the failure wasn't visible until checking the live page.

**Fix:** Rewrote `writing/page.tsx` to render `<img>` tags from `post.thumbnailImage`. Added `thumbnailImage` and `thumbnailAlt` fields to `BlogPost` type and populated for all five posts.

**Prevention:** When building index/list pages, always wire in real images before marking the component done, even if the images are placeholders.

---

### Issue 2: BlogImage used Next.js Image fill mode — broken in production

**What happened:** The original `BlogImage` component used `<Image fill>` from `next/image`. Images didn't render on the deployed site.

**Root cause:** `fill` mode requires the parent container to have `position: relative` AND explicit pixel dimensions. When one or both are missing or miscalculated, the image renders as invisible. This is the **exact same failure** that broke the About page headshot earlier in the project build (see commit `d5d8b01`).

**Fix:** Replaced `fill` with a plain `<img>` tag using explicit `height` and `objectFit` CSS properties. Plain `<img>` is reliable in both dev and production with no dimension requirements.

**Prevention:** Do not use `next/image` with `fill` mode on this site. The pattern has failed twice. Use plain `<img>` tags for all blog images. Use `next/image` with explicit `width` and `height` only.

---

### Issue 3: Homepage screenshot used as Post 1 hero

**What happened:** Post 1 is "I Used Claude Code to Build My Entire UX Portfolio." The Claude Code session that generated IMAGE-GUIDE.md chose `blog-hero-homepage-live.png` (a screenshot of the homepage) as the hero image. A reader arriving at this post just navigated from the homepage — seeing the homepage again is circular and confusing.

**Root cause:** The image guide was generated by a Claude Code session that optimized for "show the finished product" without considering the reader's navigation context.

**Fix:** Replaced with `fraud-prevention-case-study.png` — a screenshot of a case study page the reader has not yet seen, showing the nav, breadcrumb, case study hero, and bento grid.

**Prevention:** When choosing hero images for blog posts, ask: has the reader already seen this? If yes, the image adds no information.

---

### Issue 4: TeleSign Messaging API template builder used as "portfolio component"

**What happened:** A screenshot of the TeleSign Messaging API WYSIWYG template builder was captioned as "One of 12 custom React components built during the portfolio project." The image is a UI Danny designed as a product designer at TeleSign — it has nothing to do with building displayedux.com in React.

**Root cause:** Image sourcing was done partially by automated scan (Claude Code session) and partially by manual selection from the `/images` library. Neither pass caught the semantic mismatch between what the image showed and what the caption claimed.

**Fix:** Removed the image entirely. The "What I Actually Built" section already explains the four case studies through a callout list. No image was needed there.

**Prevention:** Before adding any image to a blog post, answer two questions: (1) Does this image actually show what the caption claims? (2) Is this image causally connected to the section topic, or just visually related? Related is not enough.

---

### Issue 5: Image sourcing required multiple sessions across two tools

**What happened:** Images were sourced across three separate phases:
1. A scan of `public/images/` from this Claude Desktop session — found 548 files
2. A Claude Code session (IMAGE-GUIDE.md) — found additional files in `Reference Files/`, took live Playwright screenshots, and identified better options
3. Further corrections after Danny flagged inaccuracies

Each session found things the previous one missed. The total commit count for image-related changes was 7 commits — half the blog build's total commits.

**Root cause:** Claude Desktop cannot access the filesystem beyond what is explicitly pasted. Claude Code CLI can scan, read, and visually assess every file on the machine. Starting with Claude Desktop for image work is the wrong tool.

**Prevention:**

**The right image sourcing workflow for future blog posts:**

1. **Open Claude Code in the project terminal** (`cd ~/Desktop/Claude/portfolio/claude-written/danny-portfolio && claude`)
2. Ask Claude Code to scan all directories: `public/images/`, `Reference Files/imagery/`, `~/Desktop/Portfolio Images/`, `.playwright-mcp/`
3. Ask it to visually read the top 10–20 candidates per post
4. Ask it to copy chosen files to `public/blog/images/` with semantic names
5. Ask it to write a brief IMAGE-GUIDE.md documenting each choice and why
6. **Review the guide before writing any component code** — validate that each image actually shows what will be claimed in the caption

Do not use Claude Desktop for image discovery. Use it for image curation decisions once Claude Code has produced an inventory.

---

## Known Remaining Issue: Hero Image Quality

### The problem

The current hero images are screenshots of UIs and design documents. These images were designed for their original contexts — product dashboards, design specifications, case study pages. When cropped into a 480px-tall hero band with `object-fit: cover; object-position: top`, many lose their meaning. On mobile (where the hero shrinks further), they are often unreadable.

Specific weaknesses:

- **Post 1 (`fraud-prevention-case-study.png`):** Shows the top of the Fraud Prevention case study page. Clear at desktop. On mobile the nav and header compress to near-illegible scale.
- **Post 2 (`case-study-page-screenshot.png`):** Same issue — tall page screenshot cropped at top.
- **Post 3 (`legacy-portal-before.png`):** Dark, dense legacy portal screenshot. Strong contrast concept, but very small text at mobile.
- **Post 4 (`post4-hero-phoneid.png`):** The PhoneID dashboard is the most data-rich screenshot — bar charts, navigation, browser chrome all visible. At 480px tall with cover crop it reads well at desktop. At mobile widths the chart data disappears.
- **Post 5 (`post5-cappex-in-progress.png`):** College dashboard mid-process. Reads reasonably well. The best of the current set.

### What good hero images look like for this blog

Each post needs a purpose-built hero image, not a repurposed screenshot. The constraints:

- **Aspect ratio:** 16:9 or 3:2 — both render cleanly at the 480px hero height
- **Mobile-first composition:** The most important visual element must survive a 300px crop
- **On-brand:** Royal blue `#3B5CE8`, Plus Jakarta Sans, the bull's-eye motif
- **Topic-legible at a glance:** A reader scanning the /writing index should be able to infer the post's subject from the thumbnail in under two seconds

### Recommended approach: generated hero components

Build a React or HTML component that renders a hero image for each post using the design system. The component takes the post title, tag color, and a key stat as inputs and outputs a designed card. Screenshot it via Playwright at 1200×628.

This approach:
- Is on-brand automatically
- Scales to new posts without design work
- Renders cleanly at all sizes because it was designed at those sizes
- Is reproducible — can be regenerated if the design system changes

Example prompt for a future Claude Code session:
> "Build an HTML page at `/scripts/generate-blog-heroes.html` that renders five 1200×628 hero cards, one per post. Each card uses the post's accent color, displays the post title in Plus Jakarta Sans Bold, shows the key stat in large type, and uses the bull's-eye rings as a background motif. Then use Playwright to screenshot each card and save to `public/blog/images/hero-[slug].png`."

### Alternative: Figma

If you prefer to design the heroes manually, create a Figma template at 1200×628 with the brand tokens. Export at 2x as PNG. One file per post. Place them at `public/blog/images/hero-[slug]@2x.png` and reference from `thumbnailImage` and `heroImage` in `lib/blog-posts.ts`.

---

## Performance Notes

- All blog images currently load with `loading="lazy"` except hero images which use `loading="eager"`. This is correct.
- The `unoptimized` prop was removed when we switched from `next/image` to plain `<img>`. Netlify will not process these images through its CDN optimizer. If images are large, consider compressing them manually before committing. Target: under 200KB per image.
- The `post4-hero-phoneid.png` file is 316KB — the largest in the set. Worth compressing.

---

## Adding a Sixth Post — Exact Steps

**Step 1:** Add the post object to `blogPosts[]` in `lib/blog-posts.ts`:

```typescript
{
  slug:           'your-slug',
  title:          'Full post title',
  shortTitle:     'Breadcrumb version',
  date:           'Month Year',
  dateISO:        'YYYY-MM-DD',
  readTime:       8,
  tag:            'Process',          // or 'Case Study'
  tagColor:       'blue',             // 'blue' | 'coral' | 'amber' | 'magenta'
  thumbnailImage: '/blog/images/post6-thumb.png',
  thumbnailAlt:   'Description of thumbnail',
  heroImage:      '/blog/images/post6-hero.png',
  heroImageAlt:   'Description of hero image',
  excerpt:        'One paragraph shown on the index card.',
  stats: [
    { value: 'X',   label: 'Label one',  accentHex: '#3B5CE8' },
    { value: 'Y',   label: 'Label two' },
    { value: 'Z',   label: 'Label three', accentHex: '#F47060' },
    { value: 'W',   label: 'Label four' },
  ],
},
```

**Step 2:** Create `components/blog/posts/your-slug.tsx`:

```tsx
import { BlogImage, BlogHeroImage } from '@/components/blog/BlogImage'

export function YourSlugPost() {
  return (
    <article className="blog-content">
      <h2>First section heading</h2>
      <p>Body copy...</p>
      <BlogImage
        src="/blog/images/post6-section.png"
        alt="Alt text"
        caption="Caption text"
        variant="bordered"
      />
      {/* Continue... */}
    </article>
  )
}
```

**Step 3:** Register in `app/writing/[slug]/page.tsx`:

```typescript
import { YourSlugPost } from '@/components/blog/posts/your-slug'

const POST_CONTENT: Record<string, React.ComponentType> = {
  // ... existing posts
  'your-slug': YourSlugPost,
}
```

**Step 4:** Place images in `public/blog/images/` before committing.

**Step 5:** TypeScript check before pushing:
```
TERMINAL
node_modules/.bin/tsc --noEmit
```

---

## CSS Classes Reference

All blog typography styles are in `app/globals.css` under `/* ── Blog Posts */` and `/* ── Blog Images */`.

| Class | Purpose |
|---|---|
| `blog-content` | Article wrapper — sets font-family, color |
| `blog-callout` | Left-bordered callout box (blue accent) |
| `blog-callout--blue` | Callout with slightly stronger blue tint |
| `blog-callout-label` | Eyebrow label inside callout |
| `blog-callout-list` | List inside callout with blue dot markers |
| `blog-divider` | Full-width horizontal rule |
| `blog-session` | Session log entry card (bordered box) |
| `blog-session-header` | Bold label inside session card |
| `blog-pullquote` | Left-bordered italic blockquote |
| `blog-unordered-list` | Custom bullet list |
| `blog-ordered-list` | Decimal list |
| `blog-ordered-list--playbook` | Numbered list with blue counter + card styling |
| `blog-table-wrap` | Overflow wrapper for data tables |
| `blog-table` | Styled data table |
| `blog-author-bio` | Footer bio block with top border |
| `blog-image-wrap` | Figure wrapper for blog images |
| `blog-image-wrap--bordered` | Image with border + rounded corners + bg |
| `blog-image-wrap--inset` | Padded image for white-bg UI screenshots |
| `blog-image-wrap--full` | Edge-to-edge, no decoration |
| `blog-image-inner` | Inner div with explicit height for image |
| `blog-image-caption` | Small caption below image |
| `blog-hero-image` | Hero image variant (480px tall, full-width) |

---

## Git Commit History (Blog Section)

```
7755ffd  fix: wire real images into writing index + replace fill-mode BlogImage
00b8748  fix: correct Post 1 hero and remove inaccurate template builder image
3619344  fix: BlogHeroImage uses object-fit cover + object-position top
725f066  feat: wire hero images into all five blog post pages
94dc456  fix: upgrade blog Post 1 images using Claude Code IMAGE-GUIDE
e1a29ef  feat: add images to all five blog posts
6cc6ef8  refactor: rewrite Claude Code portfolio post with benchmark comparisons
b2a41a1  feat: add four additional blog posts
dc7d427  feat: add Writing section with first blog post
```

9 commits. Approximately half were image corrections that could have been avoided with the correct sourcing workflow upfront.

---

## What to Do Next

**Priority 1 — Generate proper hero images**  
Use the generated hero component approach described above. Build it in Claude Code. Each hero should be 1200×628, on-brand, and legible at 300px mobile width. This is the single largest quality gap in the current implementation.

**Priority 2 — Compress large images**  
Run images through a lossless compressor before re-committing. `post4-hero-phoneid.png` (316KB) and `legacy-portal-before.png` (802KB) are both oversized.

**Priority 3 — Mobile QA**  
After new heroes are in place, run a Playwright QA pass at 390px viewport width across all five article pages and the /writing index. Focus on: featured card left panel, article hero height at mobile, in-content image legibility.

**Priority 4 — Writing Nav link**  
The "Writing" nav item was added between Work and About. Check that it renders correctly in the mobile hamburger drawer alongside the new Photography link. Five items total: Work · Writing · About · Photography · Contact.

---

*Generated April 2026. Covers the full blog section build from first commit (dc7d427) to current state (7755ffd).*
