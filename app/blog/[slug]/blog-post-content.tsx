'use client'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi'
import type { Post } from '@/lib/posts'

export default function BlogPostContent({ post }: { post: Post }) {
  return (
    <article className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-2xl mx-auto relative">
        <AnimateIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-gold text-sm mb-10 transition-colors duration-300"
          >
            <FiArrowLeft size={14} /> Back to Blog
          </Link>

          <span className="skill-tag inline-flex mb-6">{post.tag}</span>

          <h1 className="font-display text-3xl md:text-5xl text-gold-gradient mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-muted text-xs mb-10 pb-10 border-b border-gold-dim">
            <span className="flex items-center gap-1"><FiCalendar size={12} /> {post.date}</span>
            <span className="flex items-center gap-1"><FiClock size={12} /> {post.readTime}</span>
          </div>
        </AnimateIn>

        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <AnimateIn key={i} delay={Math.min(i * 0.06, 0.3)}>
              <p className="text-muted text-base leading-relaxed">{paragraph}</p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <div className="mt-16 pt-10 border-t border-gold-dim flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-muted text-sm">Thanks for reading.</p>
            <Link href="/blog" className="btn-outline">More Articles →</Link>
          </div>
        </AnimateIn>
      </div>
    </article>
  )
}
