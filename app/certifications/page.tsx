import type { Metadata } from 'next'
import CertificationsContent from './certifications-content'

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Certifications from top global institutions — NVIDIA, IBM, Duke University, IIT Guwahati, UC Davis, and more.',
  openGraph: {
    title: 'Certifications — Samiullah Mohammadi',
    description: 'Certifications from top global institutions — NVIDIA, IBM, Duke University, IIT Guwahati, UC Davis, and more.',
  },
}

export default function CertificationsPage() {
  return <CertificationsContent />
}
