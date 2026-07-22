import type { Metadata } from 'next'
import ContactContent from './contact-content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Available for web development projects, teaching engagements, collaborations, and opportunities.',
  openGraph: {
    title: 'Contact — Samiullah Mohammadi',
    description: 'Available for web development projects, teaching engagements, collaborations, and opportunities.',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
