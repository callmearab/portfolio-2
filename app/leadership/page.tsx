import type { Metadata } from 'next'
import LeadershipContent from './leadership-content'

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Four concurrent leadership roles across NGOs, international programs, and regional competitions — all while still a teenager.',
  openGraph: {
    title: 'Leadership — Samiullah Mohammadi',
    description: 'Four concurrent leadership roles across NGOs, international programs, and regional competitions — all while still a teenager.',
  },
}

export default function LeadershipPage() {
  return <LeadershipContent />
}
