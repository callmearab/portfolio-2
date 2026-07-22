'use client'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { certifications } from '@/lib/data'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import {
  FaGlobe, FaRobot, FaPython, FaChartSimple, FaClipboardList,
  FaFlaskVial, FaLanguage, FaCertificate,
} from 'react-icons/fa6'
import type { IconType } from 'react-icons'

const CATEGORY_ICONS: Record<string, IconType> = {
  'Web Dev': FaGlobe,
  'AI': FaRobot,
  'Python': FaPython,
  'Data': FaChartSimple,
  'Management': FaClipboardList,
  'Research': FaFlaskVial,
  'Language': FaLanguage,
}

export default function CertificationsContent() {
  const categories = ['All', ...Array.from(new Set(certifications.map(c => c.category)))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? certifications : certifications.filter(c => c.category === active)

  return (
    <>
      <PageHero
        label="Credentials"
        title="Certifications"
        subtitle={`${certifications.length} certifications from top global institutions — NVIDIA, IBM, Duke University, IIT Guwahati, UC Davis, and more.`}
      />

      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Filter tabs */}
        <AnimateIn>
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(cat => {
              const CatIcon = CATEGORY_ICONS[cat]
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs tracking-widest uppercase border transition-all duration-200 ${
                    active === cat
                      ? 'bg-gold text-bg border-gold font-bold'
                      : 'border-gold/20 text-muted hover:border-gold/50 hover:text-ink'
                  }`}
                >
                  {CatIcon && <CatIcon size={12} />} {cat}
                </button>
              )
            })}
          </div>
        </AnimateIn>

        {/* Cert count */}
        <AnimateIn>
          <p className="text-muted text-xs text-center mb-8 tracking-widest">
            SHOWING {filtered.length} OF {certifications.length} CERTIFICATIONS
          </p>
        </AnimateIn>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -5 }}
                className="card-glass border-gold-glow p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  {(() => {
                    const CatIcon = CATEGORY_ICONS[cert.category] || FaCertificate
                    return <CatIcon size={20} className="text-gold" />
                  })()}
                  <span className="skill-tag text-xs">{cert.category}</span>
                </div>

                <h3 className="text-ink text-sm font-medium leading-snug mb-2 flex-1">{cert.title}</h3>
                <p className="text-gold text-xs font-medium mb-1">{cert.issuer}</p>
                <p className="text-muted text-xs">{cert.date}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Institutions */}
        <AnimateIn>
          <div className="mt-16 card-glass border-gold-glow p-8">
            <p className="text-gold text-xs tracking-[0.4em] uppercase text-center mb-8">Issuing Institutions</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {['NVIDIA', 'IBM', 'Duke University', 'UC Davis', 'IIT Guwahati', 'HP', 'Packt', 'Coursera', 'Future Bridge', 'Halimi Educational Center'].map(inst => (
                <span key={inst} className="text-muted text-sm hover:text-gold transition-colors">{inst}</span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </>
  )
}
