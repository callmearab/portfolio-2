import type { Metadata } from 'next'
import { Cormorant_Garamond, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

// Self-hosted via next/font: no external request to fonts.googleapis.com,
// files are downloaded at build time, subset, cached, and served from the
// same domain with automatic font-display: swap. Same exact typefaces and
// weights as before — just delivered more efficiently.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://samimuhammadi.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Samiullah Mohammadi — Web Developer & Educator',
    template: '%s — Samiullah Mohammadi',
  },
  description: 'Portfolio of Samiullah Mohammadi — Full-Stack Web Developer, Educator, Youth Leader, Author & Youth Activist from Kunduz, Afghanistan.',
  keywords: ['Samiullah Mohammadi', 'Web Developer', 'Afghanistan', 'Kunduz', 'PHP', 'MySQL', 'Laravel'],
  authors: [{ name: 'Samiullah Mohammadi' }],
  openGraph: {
    title: 'Samiullah Mohammadi — Web Developer & Educator',
    description: 'Full-Stack Web Developer, Educator, Youth Leader & Author from Kunduz, Afghanistan.',
    type: 'website',
    siteName: 'Samiullah Mohammadi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samiullah Mohammadi — Web Developer & Educator',
    description: 'Full-Stack Web Developer, Educator, Youth Leader & Author from Kunduz, Afghanistan.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Samiullah Mohammadi',
    url: SITE_URL,
    image: `${SITE_URL}/samiullah.webp`,
    jobTitle: 'Web Developer & Database Instructor',
    email: 'mailto:arsalanarab.py@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kunduz',
      addressCountry: 'AF',
    },
    sameAs: [
      'https://github.com/callmearab',
      'https://linkedin.com/in/samimuhammadi',
    ],
    worksFor: [
      { '@type': 'Organization', name: 'Peshgam Educational Center' },
      { '@type': 'Organization', name: 'Future Bridge NPO Afghanistan' },
    ],
    knowsAbout: [
      'Web Development', 'Database Architecture', 'PHP', 'MySQL',
      'JavaScript', 'Laravel', 'RDBMS', 'DBMS',
    ],
    knowsLanguage: ['Persian', 'Pashto', 'English', 'Arabic'],
  }

  return (
    <html lang="en" className={`${cormorant.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="noise">
        {/* Applied synchronously, before anything else in <body> paints,
            so the correct theme is set before the first frame — this is
            what prevents a flash of the wrong (default dark) theme when
            the visitor has previously chosen light mode. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
