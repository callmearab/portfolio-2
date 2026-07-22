import type { Metadata } from 'next'
import ProjectsContent from './projects-content'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Real-world deployments serving real communities — from NPO websites to live production database systems.',
  openGraph: {
    title: 'Projects — Samiullah Mohammadi',
    description: 'Real-world deployments serving real communities — from NPO websites to live production database systems.',
  },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
