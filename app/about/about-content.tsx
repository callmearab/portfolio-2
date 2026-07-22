'use client'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { profile, languages, publications } from '@/lib/data'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaBookOpen } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'

function LanguageBar({ name, level, label }: { name: string; level: number; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-ink text-sm font-medium">{name}</span>
        <span className="text-gold text-xs uppercase tracking-wider">{label}</span>
      </div>
      <div className="h-1 bg-surface-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
        />
      </div>
    </div>
  )
}

export default function AboutContent() {
  return (
    <>
      <PageHero
        label="About Me"
        title="The Story"
        subtitle="A young engineer, educator, and activist building the future of Afghan technology — one line of code at a time."
      />

      <div className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-12">

        {/* Left — Identity Card */}
        <AnimateIn direction="left">
          <div className="card-glass border-gold-glow p-8 sticky top-24">
            {/* Avatar */}
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full border-2 border-gold/40 relative overflow-hidden bg-surface-2">
                <Image
                  src="/samiullah.webp"
                  alt="Samiullah Mohammadi"
                  fill
                  sizes="128px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gold animate-pulse-gold" />
            </div>

            <h2 className="font-display text-2xl text-center text-ink mb-1">Samiullah Mohammadi</h2>
            <p className="text-gold text-xs text-center tracking-widest uppercase mb-6">Web Developer & Educator</p>

            <div className="space-y-3 text-sm mb-8">
              {[
                { icon: <FiCalendar size={13} />, text: '02 Dec 2008' },
                { icon: <FiMapPin size={13} />, text: 'Kunduz, Afghanistan' },
                { icon: <FiMail size={13} />, text: 'arsalanarab.py@gmail.com', href: 'mailto:arsalanarab.py@gmail.com' },
                { icon: <FiGithub size={13} />, text: 'github.com/callmearab', href: 'https://github.com/callmearab' },
                { icon: <FiLinkedin size={13} />, text: 'linkedin.com/in/samimuhammadi', href: 'https://linkedin.com/in/samimuhammadi' },
              ].map(({ icon, text, href }) => (
                <div key={text} className="flex items-center gap-3 text-muted">
                  <span className="text-gold shrink-0">{icon}</span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="hover:text-gold transition-colors truncate text-xs">{text}</a>
                  ) : (
                    <span className="text-xs">{text}</span>
                  )}
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-gold w-full justify-center text-center">
              Hire Me
            </Link>
          </div>
        </AnimateIn>

        {/* Right — Bio & Details */}
        <div className="md:col-span-2 space-y-12">

          {/* Bio */}
          <AnimateIn>
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Executive Profile</p>
              <p className="text-muted leading-relaxed text-base">{profile.bio}</p>
            </div>
          </AnimateIn>

          {/* Stats */}
          <AnimateIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profile.stats.map((s, i) => (
                <div key={i} className="card-glass p-5 text-center border-gold-glow">
                  <p className="font-display text-3xl text-gold-gradient font-bold">{s.value}</p>
                  <p className="text-muted text-xs mt-1 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Languages */}
          <AnimateIn>
            <div className="card-glass p-8 border-gold-glow">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Languages</p>
              {languages.map(lang => (
                <LanguageBar key={lang.name} {...lang} />
              ))}
            </div>
          </AnimateIn>

          {/* Publications */}
          <AnimateIn>
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Publications</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {publications.map(pub => (
                  <div key={pub.title} className="card-glass p-6 border-gold-glow">
                    <FaBookOpen size={24} className="text-gold mb-3" />
                    <p className="font-display text-xl text-ink mb-1">{pub.title}</p>
                    <p className="text-muted text-xs uppercase tracking-widest">{pub.type} · {pub.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* What Drives Me */}
          <AnimateIn>
            <div className="card-glass p-8 border-gold-glow">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">What Drives Me</p>
              <p className="text-muted leading-relaxed text-sm">
                Born in Kunduz, Afghanistan in 2008, I&apos;ve channeled an extraordinary commitment to
                expanding access to technology and education in one of the world&apos;s most underserved regions. At just 17,
                I manage two professional technical roles, lead four volunteer organizations, and continuously pursue
                international coursework — driven by my belief that every young Afghan deserves access to world-class education.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </>
  )
}
