import type { Metadata } from 'next'
import TestimonialsContent from './testimonials-content'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What instructors, mentors, and collaborators say about working with Samiullah Mohammadi.',
  openGraph: {
    title: 'Testimonials — Samiullah Mohammadi',
    description: 'What instructors, mentors, and collaborators say about working with Samiullah Mohammadi.',
  },
}

export default function TestimonialsPage() {
  return <TestimonialsContent />
}
