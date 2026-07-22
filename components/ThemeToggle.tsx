'use client'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  // Sync with whatever the pre-hydration inline script (in layout.tsx)
  // already applied to <html data-theme="...">, so the icon matches
  // reality on first paint instead of always assuming dark.
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    setTheme(current === 'light' ? 'light' : 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // localStorage unavailable (e.g. private browsing) — theme just
      // won't persist across visits, which is a fine fallback.
    }
  }

  return (
    <button
      onClick={toggle}
      suppressHydrationWarning
      aria-label="Toggle color theme"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`w-9 h-9 border border-gold/30 flex items-center justify-center text-muted hover:text-gold hover:border-gold/60 hover:bg-gold-dim transition-all duration-300 ${className}`}
    >
      {theme === 'light' ? <FiMoon size={15} /> : <FiSun size={15} />}
    </button>
  )
}
