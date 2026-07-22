'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/education', label: 'Education' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/certifications', label: 'Certs' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-gold-dim shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors duration-300 relative overflow-hidden">
              <Image
                src="/samiullah.webp"
                alt="Samiullah Mohammadi"
                fill
                sizes="36px"
                className="object-cover z-0"
                priority
              />
              <div className="absolute inset-0 bg-gold-dim group-hover:bg-gold/10 transition-all duration-300" />
            </div>
            <span className="font-display text-lg tracking-widest text-ink hidden sm:block">
              SAMIULLAH
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 xl:px-3 py-1.5 text-xs tracking-widest uppercase font-body transition-colors duration-300 whitespace-nowrap ${
                  pathname === link.href ? 'text-gold' : 'text-muted hover:text-ink'
                }`}
              >
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-gold-dim border-b border-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/samiullah-mohammadi-resume.pdf"
              download
              aria-label="Download resume"
              title="Download Resume"
              className="w-9 h-9 border border-gold/30 flex items-center justify-center text-muted hover:text-gold hover:border-gold/60 hover:bg-gold-dim transition-all duration-300"
            >
              <FiDownload size={15} />
            </a>
            <Link href="/contact" className="btn-gold text-xs py-2 px-5">
              Hire Me
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                className="block w-6 h-0.5 bg-gold origin-center transition-all"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                className="block w-6 h-0.5 bg-gold"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
                className="block w-6 h-0.5 bg-gold origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-2.5 py-10 overflow-y-auto lg:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-2xl sm:text-3xl tracking-widest hover:text-gold transition-colors duration-300 ${
                    pathname === link.href ? 'text-gold' : 'text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex items-center gap-4"
            >
              <a
                href="/samiullah-mohammadi-resume.pdf"
                download
                className="btn-outline inline-flex items-center gap-2"
              >
                <FiDownload size={15} /> Resume
              </a>
              <Link href="/contact" className="btn-gold">Hire Me</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
