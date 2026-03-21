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
  title: {
    default: 'Danny Driscoll | DisplayedUX',
    template: '%s | DisplayedUX',
  },
  description:
    'Senior Product Designer with 18+ years designing products where mistakes have consequences. TeleSign, Netflix, Cappex.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DisplayedUX',
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
