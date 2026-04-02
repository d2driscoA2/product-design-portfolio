import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

/* All headings, display text, nav wordmark */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

/* Body copy, labels, captions */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://displayedux.com'),
  title: {
    default: 'Danny Driscoll | DisplayedUX',
    template: '%s | DisplayedUX',
  },
  description:
    'Principal Product Designer with 18+ years designing products where mistakes have consequences. TeleSign · Netflix · Appily.com.',
  keywords: [
    'product designer',
    'UX designer',
    'principal product designer',
    'enterprise design',
    'B2B SaaS design',
    'Danny Driscoll',
    'DisplayedUX',
    'TeleSign',
    'fraud prevention UX',
    'onboarding design',
  ],
  authors: [{ name: 'Danny Driscoll', url: 'https://displayedux.com' }],
  creator: 'Danny Driscoll',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://displayedux.com',
    siteName: 'DisplayedUX',
    title: 'Danny Driscoll | DisplayedUX',
    description:
      'Principal Product Designer with 18+ years designing products where mistakes have consequences. TeleSign · Netflix · Appily.com.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danny Driscoll | DisplayedUX',
    description:
      'Principal Product Designer. 18+ years. TeleSign · Netflix · Appily.com.',
    creator: '@dannydriscoll',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
