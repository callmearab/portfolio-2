'use client'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { testimonials } from '@/lib/data'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa6'

export default function TestimonialsContent() {
  return (
    <>
      <PageHero
        label="What Others Say"
        title="Testimonials"
        subtitle="A few words from instructors and collaborators I've worked closely with."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1} className={i === testimonials.length - 1 && testimonials.length % 2 !== 0 ? 'md:col-span-2' : ''}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card-glass border-gold-glow p-8 h-full flex flex-col relative overflow-hidden"
              >
                <FaQuoteLeft size={22} className="text-gold/40 mb-4 shrink-0" />
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                  {t.quote}
                </p>
                <div className="border-t border-gold-dim pt-4">
                  <p className="font-display text-lg text-ink">{t.name}</p>
                  <p className="text-gold text-xs tracking-wide mt-0.5">{t.title}</p>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </>
  )
}
