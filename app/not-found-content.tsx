'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import StarField from '@/components/StarField'
import { FiArrowLeft, FiMail } from 'react-icons/fi'

export default function NotFoundContent() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6">
      <StarField count={120} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(230,168,23,0.06), transparent 60%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg"
      >
        <p className="font-display text-[7rem] leading-none text-gold mb-4">404</p>
        <h1 className="font-display text-3xl md:text-4xl text-ink mb-4">Page Not Found</h1>
        <p className="text-muted text-sm md:text-base mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-gold inline-flex items-center gap-2">
            <FiArrowLeft size={15} /> Back to Home
          </Link>
          <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
            <FiMail size={15} /> Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
