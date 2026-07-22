import type { Metadata } from 'next'
import ExperienceContent from './experience-content'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Two active professional roles delivering real impact — from database architecture to youth education.',
  openGraph: {
    title: 'Experience — Samiullah Mohammadi',
    description: 'Two active professional roles delivering real impact — from database architecture to youth education.',
  },
}

export default function ExperiencePage() {
  return <ExperienceContent />
}
