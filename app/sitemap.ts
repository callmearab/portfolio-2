import { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://samimuhammadi.vercel.app'

const routes = [
  '',
  '/about',
  '/skills',
  '/experience',
  '/projects',
  '/education',
  '/leadership',
  '/testimonials',
  '/blog',
  '/certifications',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = routes.map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))

  const postEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...postEntries]
}
