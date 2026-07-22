import type { Metadata } from 'next'
import SkillsContent from './skills-content'

export const metadata: Metadata = {
  title: 'Skills',
  description: 'A comprehensive toolkit built through hands-on professional work, continuous learning, and real-world project delivery.',
  openGraph: {
    title: 'Skills — Samiullah Mohammadi',
    description: 'A comprehensive toolkit built through hands-on professional work, continuous learning, and real-world project delivery.',
  },
}

export default function SkillsPage() {
  return <SkillsContent />
}
