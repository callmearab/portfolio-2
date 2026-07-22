'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiChevronDown } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

interface NavLink {
  href: string
  label: string
}

interface NavGroup {
  label: string
  items: NavLink[]
}

type NavEntry = NavLink | NavGroup

function isGroup(entry: NavEntry): entry is NavGroup {
  return 'items' in entry
}

// Primary pages stay direct links; related secondary pages fold into a
// dropdown so the bar doesn't grow every time a new page is added.
const navEntries: NavEntry[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  {
    label: 'Background',
    items: [
      { href: '/skills', label: 'Skills' },
      { href: '/experience', label: 'Experience' },
      { href: '/education', label: 'Education' },
      { href: '/certifications', label: 'Certifications' },
    ],
  },
  {
    label: 'Community',
    items: [
      { href: '/leadership', label: 'Leadership' },
      { href: '/testimonials', label: 'Testimonials' },
    ],
  },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setOpenGroup(null)
    setOpenMobileGroup(null)
  }, [pathname])

  // Close an open desktop dropdown when clicking anywhere outside the nav.
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

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
        <div ref={navRef} className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
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
            {navEntries.map((entry) => {
              if (isGroup(entry)) {
                const isActive = entry.items.some((item) => item.href === pathname)
                const isOpen = openGroup === entry.label
                return (
                  <div
                    key={entry.label}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(entry.label)}
                    onMouseLeave={() => setOpenGroup((cur) => (cur === entry.label ? null : cur))}
                  >
                    <button
                      onClick={() => setOpenGroup(isOpen ? null : entry.label)}
                      aria-expanded={isOpen}
                      className={`relative px-2 xl:px-3 py-1.5 text-xs tracking-widest uppercase font-body transition-colors duration-300 whitespace-nowrap flex items-center gap-1 ${
                        isActive ? 'text-gold' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 bg-gold-dim border-b border-gold"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{entry.label}</span>
                      <FiChevronDown
                        size={11}
                        className={`relative z-10 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 pt-2 min-w-[190px] z-20"
                        >
                          <div className="card-glass border-gold-glow py-2">
                            {entry.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-2 text-xs tracking-widest uppercase transition-colors duration-200 ${
                                  pathname === item.href
                                    ? 'text-gold bg-gold-dim'
                                    : 'text-muted hover:text-ink hover:bg-gold-dim/50'
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={entry.href}
                  href={entry.href}
                  className={`relative px-2 xl:px-3 py-1.5 text-xs tracking-widest uppercase font-body transition-colors duration-300 whitespace-nowrap ${
                    pathname === entry.href ? 'text-gold' : 'text-muted hover:text-ink'
                  }`}
                >
                  {pathname === entry.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-gold-dim border-b border-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{entry.label}</span>
                </Link>
              )
            })}
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
            {navEntries.map((entry, i) => {
              if (isGroup(entry)) {
                const isActive = entry.items.some((item) => item.href === pathname)
                const isOpen = openMobileGroup === entry.label
                return (
                  <motion.div
                    key={entry.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center"
                  >
                    <button
                      onClick={() => setOpenMobileGroup(isOpen ? null : entry.label)}
                      className={`font-display text-2xl sm:text-3xl tracking-widest transition-colors duration-300 flex items-center gap-2 ${
                        isActive ? 'text-gold' : 'text-ink'
                      }`}
                    >
                      {entry.label}
                      <FiChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex flex-col items-center gap-3 overflow-hidden mt-3"
                        >
                          {entry.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`text-base tracking-widest uppercase transition-colors duration-300 ${
                                pathname === item.href ? 'text-gold' : 'text-muted hover:text-ink'
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={entry.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={entry.href}
                    className={`font-display text-2xl sm:text-3xl tracking-widest hover:text-gold transition-colors duration-300 ${
                      pathname === entry.href ? 'text-gold' : 'text-ink'
                    }`}
                  >
                    {entry.label}
                  </Link>
                </motion.div>
              )
            })}
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
