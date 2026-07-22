'use client'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin, FiCheckCircle, FiXCircle } from 'react-icons/fi'

// Web3Forms requires this call to happen client-side (in the browser) —
// calling it from a server-side API route gets blocked with a 403
// "method not allowed" unless you're on their paid plan with a
// safelisted server IP. The access key is designed to be public /
// safe to expose in client code (it's just an alias for the
// destination email), so submitting straight to their API from here
// is the correct, supported approach.
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '979a8413-edd9-4fe8-8228-c3771838208e'

const INPUT_CLASS = `
  w-full bg-surface border border-gold/15 text-ink placeholder-muted
  px-5 py-3.5 text-sm outline-none
  focus:border-gold/50 focus:bg-surface-2 transition-all duration-300
  font-body
`

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', botcheck: false })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleHoneypot = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, botcheck: e.target.checked }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot: real visitors never see or check this field, so a
    // checked box means a bot filled the form. Pretend success and
    // stop — no need to spend an API call on it.
    if (form.botcheck) {
      setStatus('success')
      setMsg('Message sent successfully! I\'ll get back to you soon.')
      setForm({ name: '', email: '', subject: '', message: '', botcheck: false })
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Contact: ${form.subject}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
          replyto: form.email,
          botcheck: form.botcheck,
        }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setMsg('Message sent successfully! I\'ll get back to you soon.')
        setForm({ name: '', email: '', subject: '', message: '', botcheck: false })
      } else {
        throw new Error(data.message || 'Failed')
      }
    } catch {
      setStatus('error')
      setMsg('Something went wrong. Please email me directly.')
    }
  }

  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Contact"
        subtitle="Available for web development projects, teaching engagements, collaborations, and opportunities."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-5 gap-10">

        {/* Info sidebar */}
        <AnimateIn direction="left" className="md:col-span-2">
          <div className="space-y-6">
            <div className="card-glass border-gold-glow p-7">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Contact Info</p>
              <div className="space-y-5">
                {[
                  { icon: <FiMail size={15} />, label: 'Email', value: 'arsalanarab.py@gmail.com', href: 'mailto:arsalanarab.py@gmail.com' },
                  { icon: <FiMapPin size={15} />, label: 'Location', value: 'Kunduz, Afghanistan' },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex gap-3">
                    <span className="text-gold mt-0.5 shrink-0">{icon}</span>
                    <div>
                      <p className="text-muted text-xs tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-ink text-sm hover:text-gold transition-colors">{value}</a>
                      ) : (
                        <p className="text-ink text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass border-gold-glow p-7">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-5">Social</p>
              <div className="space-y-4">
                <a href="https://github.com/callmearab" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-gold transition-colors text-sm">
                  <FiGithub size={16} /> github.com/callmearab
                </a>
                <a href="https://linkedin.com/in/samimuhammadi" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-gold transition-colors text-sm">
                  <FiLinkedin size={16} /> linkedin.com/in/samimuhammadi
                </a>
              </div>
            </div>

            <div className="card-glass border-gold-glow p-7">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Open To</p>
              <ul className="space-y-2">
                {['Web Development Projects', 'Technical Instruction', 'NGO Collaborations', 'Open Source Contributions', 'Mentoring & Teaching'].map(item => (
                  <li key={item} className="text-muted text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>

        {/* Contact form */}
        <AnimateIn className="md:col-span-3">
          <div className="card-glass border-gold-glow p-8">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-8">Send a Message</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
              <input
                type="checkbox"
                name="botcheck"
                checked={form.botcheck}
                onChange={handleHoneypot}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-muted text-xs tracking-widest uppercase mb-2">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your Name" className={INPUT_CLASS} />
                </div>
                <div>
                  <label className="block text-muted text-xs tracking-widest uppercase mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="you@email.com" className={INPUT_CLASS} />
                </div>
              </div>

              <div>
                <label className="block text-muted text-xs tracking-widest uppercase mb-2">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} required
                  placeholder="Project Inquiry / Collaboration / Other" className={INPUT_CLASS} />
              </div>

              <div>
                <label className="block text-muted text-xs tracking-widest uppercase mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                  placeholder="Tell me about your project or inquiry..."
                  className={`${INPUT_CLASS} resize-none`} />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-gold/10 border border-gold/30 text-gold text-sm flex items-center gap-2"
                >
                  <FiCheckCircle size={16} className="shrink-0" /> {msg}
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/20 border border-red-500/30 text-red-400 text-sm flex items-center gap-2"
                >
                  <FiXCircle size={16} className="shrink-0" /> {msg}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <FiSend size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </AnimateIn>
      </div>
    </>
  )
}
