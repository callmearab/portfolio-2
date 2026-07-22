import type { Metadata } from 'next'
import EducationContent from './education-content'

export const metadata: Metadata = {
  title: 'Education & Awards',
  description: 'Top of class two consecutive years — academic excellence achieved against extraordinary odds.',
  openGraph: {
    title: 'Education & Awards — Samiullah Mohammadi',
    description: 'Top of class two consecutive years — academic excellence achieved against extraordinary odds.',
  },
}

export default function EducationPage() {
  return <EducationContent />
}
