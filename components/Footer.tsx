'use client'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gold-dim bg-surface/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl text-gold-gradient mb-3">Samiullah Mohammadi</p>
          <p className="text-muted text-sm leading-relaxed">
            Web Developer · Educator · Youth Leader · Author · Youth Activist
          </p>
          <p className="text-muted text-xs flex items-center gap-1 mt-3">
            <FiMapPin size={12} /> Kunduz, Afghanistan
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs tracking-widest text-gold uppercase mb-4">Navigate</p>
          <div className="grid grid-cols-2 gap-1.5">
            {['/about', '/skills', '/experience', '/projects', '/education', '/leadership', '/testimonials', '/blog', '/certifications', '/contact'].map(href => (
              <Link key={href} href={href}
                className="text-muted hover:text-gold text-sm capitalize transition-colors duration-200">
                {href.replace('/', '')}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="text-xs tracking-widest text-gold uppercase mb-4">Connect</p>
          <div className="flex flex-col gap-3">
            <a href="mailto:arsalanarab.py@gmail.com"
              className="flex items-center gap-2 text-muted hover:text-gold transition-colors duration-200 text-sm">
              <FiMail size={14} /> arsalanarab.py@gmail.com
            </a>
            <a href="https://github.com/callmearab" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-gold transition-colors duration-200 text-sm">
              <FiGithub size={14} /> github.com/callmearab
            </a>
            <a href="https://linkedin.com/in/samimuhammadi" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-gold transition-colors duration-200 text-sm">
              <FiLinkedin size={14} /> linkedin.com/in/samimuhammadi
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-dim py-5 text-center">
        <p className="text-muted text-xs tracking-widest">
          © {year} SAMIULLAH MOHAMMADI — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}
