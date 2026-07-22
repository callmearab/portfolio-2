import type { Metadata } from 'next'
import AboutContent from './about-content'

export const metadata: Metadata = {
  title: 'About',
  description: 'A young engineer, educator, and activist building the future of Afghan technology — one line of code at a time.',
  openGraph: {
    title: 'About — Samiullah Mohammadi',
    description: 'A young engineer, educator, and activist building the future of Afghan technology — one line of code at a time.',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
