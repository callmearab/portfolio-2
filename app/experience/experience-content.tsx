'use client'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { experience } from '@/lib/data'
import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi'

export default function ExperienceContent() {
  return (
    <>
      <PageHero
        label="Work History"
        title="Experience"
        subtitle="Two active professional roles delivering real impact — from database architecture to youth education."
      />

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Summary banner */}
        <AnimateIn>
          <div className="grid grid-cols-3 gap-4 mb-16">
            {[
              { value: '100+', label: 'DB Teaching Hours' },
              { value: '70+', label: 'Web Dev Hours Taught' },
              { value: '23', label: 'University Students' },
            ].map(({ value, label }) => (
              <div key={label} className="card-glass border-gold-glow p-5 text-center">
                <p className="font-display text-3xl text-gold-gradient font-bold">{value}</p>
                <p className="text-muted text-xs mt-1 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <AnimateIn key={job.title} delay={i * 0.1} direction="left">
                <div className="md:pl-16 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 hidden md:flex">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="w-8 h-8 border border-gold/60 bg-bg flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-gold" />
                    </motion.div>
                  </div>

                  <div className="card-glass border-gold-glow p-8 hover:border-gold/40 transition-all duration-300">
                    {/* Status badge */}
                    {job.period.includes('Present') && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-xs tracking-widest uppercase mb-4">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                        Currently Active
                      </div>
                    )}

                    <h2 className="font-display text-2xl md:text-3xl text-ink mb-1">{job.title}</h2>
                    <p className="text-gold font-medium mb-3">{job.org}</p>

                    <div className="flex flex-wrap gap-4 text-muted text-xs mb-6">
                      <span className="flex items-center gap-1.5">
                        <FiMapPin size={11} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={11} /> {job.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {job.points.map((pt, pi) => (
                        <motion.li
                          key={pi}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + pi * 0.08 }}
                          className="flex gap-3 text-muted text-sm leading-relaxed"
                        >
                          <FiCheckCircle size={15} className="text-gold shrink-0 mt-0.5" />
                          {pt}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimateIn>
          <div className="mt-16 text-center">
            <p className="text-muted text-sm mb-4">Want to work together?</p>
            <a href="/contact" className="btn-gold">Start a Project →</a>
          </div>
        </AnimateIn>
      </div>
    </>
  )
}
