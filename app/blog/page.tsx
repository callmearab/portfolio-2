import type { Metadata } from 'next'
import BlogContent from './blog-content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and notes from Samiullah Mohammadi on web development, database architecture, education, and youth leadership.',
  openGraph: {
    title: 'Blog — Samiullah Mohammadi',
    description: 'Articles and notes from Samiullah Mohammadi on web development, database architecture, education, and youth leadership.',
  },
}

export default function BlogPage() {
  return <BlogContent />
}
