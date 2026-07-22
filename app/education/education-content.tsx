'use client'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { education, awards, conferences } from '@/lib/data'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

export default function EducationContent() {
  return (
    <>
      <PageHero
        label="Academic Background"
        title="Education & Awards"
        subtitle="Top of class two consecutive years — academic excellence achieved against extraordinary odds."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-20">

        {/* Education */}
        <section>
          <AnimateIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-8">Education</p>
          </AnimateIn>

          {education.map((edu, i) => (
            <AnimateIn key={edu.school} delay={0.1}>
              <div className="card-glass border-gold-glow p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-ink mb-2">{edu.degree}</h2>
                    <p className="text-gold font-medium">{edu.school}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-muted text-xs flex items-center gap-1 justify-end">
                      <FiCalendar size={11} /> {edu.period}
                    </p>
                    <p className="text-muted text-xs flex items-center gap-1 justify-end mt-1">
                      <FiMapPin size={11} /> {edu.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {edu.points.map((pt, pi) => (
                    <motion.li
                      key={pi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + pi * 0.08 }}
                      className="flex gap-3 text-muted text-sm leading-relaxed"
                    >
                      <FiAward size={14} className="text-gold shrink-0 mt-0.5" />
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </section>

        {/* Honours & Awards */}
        <section>
          <AnimateIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-8">Honours & Awards</p>
          </AnimateIn>

          <div className="grid sm:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <AnimateIn key={award.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="card-glass border-gold-glow p-6 text-center flex flex-col items-center"
                >
                  <award.icon size={34} className="text-gold mb-4" />
                  <p className="font-display text-xl text-ink mb-2 leading-tight">{award.title}</p>
                  <p className="text-gold text-xs font-medium mb-2">{award.org}</p>
                  <p className="text-muted text-xs mb-3 leading-relaxed">{award.detail}</p>
                  <span className="skill-tag text-xs">{award.date}</span>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* Conferences & Seminars */}
        <section>
          <AnimateIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-8">Conferences & Seminars</p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {conferences.map((conf, i) => (
              <AnimateIn key={conf.title} delay={i * 0.1}>
                <div className="card-glass border-gold-glow p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-xl text-ink leading-tight">{conf.title}</h3>
                    <span className="skill-tag text-xs shrink-0">{conf.date}</span>
                  </div>
                  <p className="text-gold text-xs mb-1">{conf.org}</p>
                  <p className="text-muted text-xs mb-4">{conf.location}</p>
                  <p className="text-muted text-sm leading-relaxed">{conf.detail}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
