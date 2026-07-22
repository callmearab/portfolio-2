'use client'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { skills } from '@/lib/data'
import { motion } from 'framer-motion'
import {
  FaCode, FaDatabase, FaBolt, FaScrewdriverWrench, FaRobot,
  FaPalette, FaClipboardList, FaChalkboardUser, FaShapes,
} from 'react-icons/fa6'
import type { IconType } from 'react-icons'

const CATEGORY_ICONS: Record<string, IconType> = {
  'Languages': FaCode,
  'Databases': FaDatabase,
  'Frameworks': FaBolt,
  'Dev Tools': FaScrewdriverWrench,
  'AI & Data': FaRobot,
  'Design': FaPalette,
  'Management': FaClipboardList,
  'Pedagogy': FaChalkboardUser,
}

export default function SkillsContent() {
  return (
    <>
      <PageHero
        label="Technical Skills"
        title="Expertise"
        subtitle="A comprehensive toolkit built through hands-on professional work, continuous learning, and real-world project delivery."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Hero skill highlight */}
        <AnimateIn>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16">
            {['PHP', 'MySQL', 'JavaScript', 'Laravel', 'Python', 'Tailwind'].map((s, i) => (
              <motion.div
                key={s}
                whileHover={{ y: -6, scale: 1.05 }}
                className="card-glass border-gold-glow p-4 text-center cursor-default"
              >
                <p className="text-gold-light font-medium text-sm">{s}</p>
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((cat, ci) => (
            <AnimateIn key={cat.category} delay={ci * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card-glass border-gold-glow p-6 h-full"
              >
                <div className="flex items-center gap-3 mb-5">
                  {(() => {
                    const CatIcon = CATEGORY_ICONS[cat.category] || FaShapes
                    return <CatIcon size={22} className="text-gold" />
                  })()}
                  <p className="text-xs tracking-widest text-gold uppercase font-body">{cat.category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.05 + ii * 0.04 }}
                      className="skill-tag"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        {/* Proficiency visual */}
        <AnimateIn>
          <div className="mt-20 card-glass border-gold-glow p-10">
            <p className="text-gold text-xs tracking-[0.4em] uppercase text-center mb-10">Core Proficiency Areas</p>
            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-6">
              {[
                { label: 'Full-Stack Web Development', pct: 85 },
                { label: 'Database Architecture & SQL', pct: 90 },
                { label: 'Technical Instruction / Pedagogy', pct: 92 },
                { label: 'PHP & Laravel Backend', pct: 80 },
                { label: 'JavaScript & Frontend', pct: 82 },
                { label: 'Python & Data Science', pct: 70 },
                { label: 'UI/UX & Responsive Design', pct: 78 },
                { label: 'Project Management', pct: 75 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-ink text-sm">{label}</span>
                    <span className="text-gold text-xs">{pct}%</span>
                  </div>
                  <div className="h-0.5 bg-surface-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-gold/60 to-gold"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </>
  )
}
