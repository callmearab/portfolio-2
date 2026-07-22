'use client'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { projects } from '@/lib/data'
import { motion } from 'framer-motion'
import { FiExternalLink, FiCode } from 'react-icons/fi'

export default function ProjectsContent() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Projects"
        subtitle="Real-world deployments serving real communities — from NPO websites to live production database systems."
      />

      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, i) => (
            <AnimateIn key={project.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card-glass border-gold-glow p-8 h-full flex flex-col relative overflow-hidden group"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gold/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Live badge */}
                {project.period.includes('Present') && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-xs tracking-widest uppercase mb-6 self-start">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                    Live
                  </div>
                )}

                <h2 className="font-display text-2xl md:text-3xl text-ink mb-2">{project.title}</h2>
                <p className="text-muted text-xs tracking-widest mb-5">{project.period}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>

                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Highlight */}
                <div className="border-l-2 border-gold/40 pl-4 mb-6">
                  <p className="text-gold-light text-sm italic">{project.highlight}</p>
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold text-sm hover-underline hover:text-gold-light transition-colors"
                >
                  <FiExternalLink size={14} /> {project.link.replace('https://', '')}
                </a>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        {/* Additional projects coming soon placeholder */}
        <AnimateIn>
          <div className="card-glass border-gold-glow p-10 text-center">
            <FiCode size={32} className="text-gold mx-auto mb-4" />
            <p className="font-display text-2xl text-ink mb-2">More Projects In Progress</p>
            <p className="text-muted text-sm">
              Actively building new systems and tools. Check back soon or visit GitHub for the latest work.
            </p>
            <div className="mt-6">
              <a href="https://github.com/callmearab" target="_blank" rel="noopener noreferrer"
                className="btn-outline">View GitHub →</a>
            </div>
          </div>
        </AnimateIn>

        {/* Tech stack used */}
        <AnimateIn>
          <div className="mt-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase text-center mb-8">Technologies Used Across Projects</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Tailwind CSS', 'Bootstrap', 'Laravel', 'Git', 'GitHub', 'XAMPP', 'Figma'].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="skill-tag"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </>
  )
}
