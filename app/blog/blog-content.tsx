'use client'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import AnimateIn from '@/components/AnimateIn'
import { posts } from '@/lib/posts'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'

export default function BlogContent() {
  return (
    <>
      <PageHero
        label="Writing"
        title="Blog"
        subtitle="Articles and notes on web development, database architecture, education, and youth leadership."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="card-glass border-gold-glow p-8 h-full flex flex-col group"
                >
                  <span className="skill-tag self-start mb-5">{post.tag}</span>

                  <h2 className="font-display text-2xl text-ink mb-3 leading-snug group-hover:text-gold-light transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-gold-dim pt-4">
                    <div className="flex items-center gap-4 text-muted text-xs">
                      <span className="flex items-center gap-1"><FiCalendar size={11} /> {post.date}</span>
                      <span className="flex items-center gap-1"><FiClock size={11} /> {post.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 text-gold text-xs tracking-widest uppercase group-hover:gap-2 transition-all">
                      Read <FiArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        {posts.length === 0 && (
          <AnimateIn>
            <div className="card-glass border-gold-glow p-10 text-center">
              <p className="font-display text-2xl text-ink mb-2">Nothing published yet</p>
              <p className="text-muted text-sm">Check back soon for new articles.</p>
            </div>
          </AnimateIn>
        )}
      </div>
    </>
  )
}
