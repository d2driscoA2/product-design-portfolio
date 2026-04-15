import Image from 'next/image'

interface BlogImageProps {
  /** Path relative to /public — e.g. /blog/images/post2-hero.png */
  src: string
  /** Alt text — required for accessibility */
  alt: string
  /** Optional caption displayed below the image */
  caption?: string
  /**
   * Visual treatment
   * - 'full'    : edge-to-edge within the article column (default)
   * - 'inset'   : slightly narrower, padded — good for UI screenshots on white bg
   * - 'bordered' : full-width with a subtle border and rounded corners
   */
  variant?: 'full' | 'inset' | 'bordered'
  /** Override natural aspect ratio with a fixed height in px */
  height?: number
  /** Extra class names on the outer wrapper */
  className?: string
  /** Priority load — set true for hero images */
  priority?: boolean
  /** object-fit strategy — 'contain' for diagrams, 'cover' for hero screenshots */
  objectFit?: 'contain' | 'cover'
  /** object-position — e.g. 'top' to crop from the top of a tall screenshot */
  objectPosition?: string
}

export function BlogImage({
  src,
  alt,
  caption,
  variant = 'full',
  height,
  className = '',
  priority = false,
  objectFit = 'contain',
  objectPosition = 'center',
}: BlogImageProps) {
  const wrapperClass = [
    'blog-image-wrap',
    `blog-image-wrap--${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <figure className={wrapperClass}>
      <div
        className="blog-image-inner"
        style={height ? { height } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 720px, 900px"
          style={{ objectFit, objectPosition }}
          priority={priority}
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="blog-image-caption">{caption}</figcaption>
      )}
    </figure>
  )
}

/**
 * Convenience wrapper for hero images.
 * Crops to top of tall screenshots using object-fit: cover.
 */
export function BlogHeroImage({
  src,
  alt,
  caption,
  priority = true,
}: Pick<BlogImageProps, 'src' | 'alt' | 'caption' | 'priority'>) {
  return (
    <BlogImage
      src={src}
      alt={alt}
      caption={caption}
      variant="bordered"
      height={480}
      priority={priority}
      objectFit="cover"
      objectPosition="top"
      className="blog-hero-image"
    />
  )
}
