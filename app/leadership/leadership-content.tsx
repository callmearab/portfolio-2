'use client'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { leadership } from '@/lib/data'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi'
import { FaGlobe, FaGraduationCap, FaRocket, FaLightbulb, FaSeedling, FaTrophy, FaHandFist } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

const ICONS: IconType[] = [FaGlobe, FaGraduationCap, FaRocket, FaLightbulb, FaSeedling]

export default function LeadershipContent() {
  return (
    <>
      <PageHero
        label="Community Impact"
        title="Leadership"
        subtitle="Four concurrent leadership roles across NGOs, international programs, and regional competitions — all while still a teenager."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Impact counter */}
        <AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '5', label: 'Active Roles' },
              { value: '4+', label: 'Organizations' },
              { value: '100s', label: 'Youth Reached' },
              { value: '17', label: 'Years Old' },
            ].map(({ value, label }) => (
              <div key={label} className="card-glass border-gold-glow p-5 text-center">
                <p className="font-display text-3xl text-gold-gradient font-bold">{value}</p>
                <p className="text-muted text-xs mt-1 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Leadership cards */}
        <div className="space-y-6">
          {leadership.map((role, i) => (
            <AnimateIn key={role.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 4 }}
                className="card-glass border-gold-glow p-7 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0 group-hover:border-gold/60 transition-colors">
                    {(() => {
                      const RoleIcon = ICONS[i] || FaTrophy
                      return <RoleIcon size={20} className="text-gold" />
                    })()}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                      <h2 className="font-display text-xl md:text-2xl text-ink">{role.title}</h2>
                      {role.period.includes('Present') && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-gold/10 border border-gold/20 text-gold text-xs tracking-widest">
                          <span className="w-1 h-1 bg-gold rounded-full animate-pulse" /> Active
                        </span>
                      )}
                    </div>

                    <p className="text-gold text-sm font-medium mb-1">{role.org}</p>

                    <div className="flex flex-wrap gap-3 text-muted text-xs mb-4">
                      <span className="flex items-center gap-1"><FiMapPin size={10} /> {role.location}</span>
                      <span className="flex items-center gap-1"><FiCalendar size={10} /> {role.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {role.points.map((pt, pi) => (
                        <li key={pi} className="flex gap-2 text-muted text-sm leading-relaxed">
                          <FiChevronRight size={14} className="text-gold shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        {/* Philosophy */}
        <AnimateIn>
          <div className="mt-16 card-glass border-gold-glow p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/3 to-transparent pointer-events-none" />
            <FaHandFist size={36} className="text-gold mb-5 mx-auto" />
            <h3 className="font-display text-3xl text-ink mb-4">
              Technology as a Bridge
            </h3>
            <p className="text-muted max-w-xl mx-auto leading-relaxed">
              Every role I take on is driven by a single mission: to make world-class education and technology
              accessible to Afghan youth — bridging the gap between global opportunity and underserved communities.
            </p>
          </div>
        </AnimateIn>
      </div>
    </>
  )
}
