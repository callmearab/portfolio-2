'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import StarField from '@/components/StarField'
import AnimateIn from '@/components/AnimateIn'
import { profile } from '@/lib/data'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiMapPin, FiDownload } from 'react-icons/fi'

const ROLE_COLORS = ['var(--gold)', 'var(--gold-light)', 'var(--copper)', 'var(--accent-green)', 'var(--accent-blue)']

export default function HomeContent() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter
  useEffect(() => {
    const role = profile.titles[roleIdx]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => setDisplayText(role.slice(0, displayText.length + 1)), 80)
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setRoleIdx((prev) => (prev + 1) % profile.titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIdx])

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <StarField count={220} />

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/6 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-surface/80 blur-[80px]" />
        </div>

        {/* Decorative ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full hidden md:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/3 rounded-full hidden md:block"
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Portfolio</span>
            <div className="h-px w-12 bg-gold/40" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold leading-[0.9] mb-6"
          >
            <span className="block text-6xl md:text-8xl lg:text-[110px] text-shimmer tracking-tight">
              Samiullah
            </span>
            <span className="block text-6xl md:text-8xl lg:text-[110px] text-ink/90 tracking-tight">
              Mohammadi
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-10 flex items-center justify-center mb-8"
          >
            <span
              className="font-body text-lg md:text-2xl font-light tracking-widest uppercase"
              style={{ color: ROLE_COLORS[roleIdx] }}
            >
              {displayText}
              <span className="animate-pulse text-gold">|</span>
            </span>
          </motion.div>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gold/20 bg-gold-dim text-muted text-xs tracking-widest mb-10"
          >
            <FiMapPin size={12} /> Kunduz, Afghanistan
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link href="/projects" className="btn-gold">View My Work</Link>
            <Link href="/contact" className="btn-outline">Get In Touch</Link>
            <a
              href="/samiullah-mohammadi-resume.pdf"
              download
              className="btn-outline inline-flex items-center gap-2"
            >
              <FiDownload size={15} /> Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { href: 'mailto:arsalanarab.py@gmail.com', icon: <FiMail size={18} /> },
              { href: 'https://github.com/callmearab', icon: <FiGithub size={18} /> },
              { href: 'https://linkedin.com/in/samimuhammadi', icon: <FiLinkedin size={18} /> },
            ].map(({ href, icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-muted hover:text-gold hover:border-gold/60 hover:bg-gold-dim transition-all duration-300">
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown size={16} className="text-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-y border-gold-dim bg-surface/40 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {profile.stats.map((stat, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-5xl text-gold-gradient font-bold mb-1">{stat.value}</p>
                <p className="text-muted text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── QUICK INTRO ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Who I Am</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-8">
              A Teenager Rewriting the Rules of
              <span className="text-gold-gradient"> Afghan Tech</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-10">
              {profile.bio}
            </p>
            <Link href="/about" className="btn-outline">Read Full Story →</Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── FEATURED SKILLS ── */}
      <section className="py-20 px-6 border-t border-gold-dim">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase text-center mb-12">Core Expertise</p>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['PHP', 'MySQL', 'JavaScript', 'Laravel', 'Python', 'HTML5', 'Tailwind CSS', 'Git'].map((s, i) => (
              <AnimateIn key={s} delay={i * 0.08}>
                <div className="card-glass p-5 text-center border-gold-glow">
                  <p className="font-body text-gold-light font-medium">{s}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn>
            <div className="text-center mt-10">
              <Link href="/skills" className="btn-outline">View All Skills →</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <div className="card-glass p-12 border-gold-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gold/3 pointer-events-none" />
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Let&apos;s Work Together</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">
                Ready to Build Something <span className="text-gold-gradient">Exceptional?</span>
              </h2>
              <p className="text-muted mb-10">
                Available for web development projects, teaching engagements, and collaborative opportunities.
              </p>
              <Link href="/contact" className="btn-gold">Start a Conversation</Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
