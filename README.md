# Samiullah Mohammadi — Portfolio Website

A premium, fully animated portfolio website built with Next.js 14, Framer Motion, and Tailwind CSS.

## ✨ Features
- 9 full pages (Home, About, Skills, Experience, Projects, Education, Leadership, Certifications, Contact)
- Animated star field background
- Custom cursor with trail effect
- Framer Motion page animations & scroll reveals
- Typewriter hero effect
- Animated skill bars & progress indicators
- Filterable certifications grid
- Working contact form with honeypot spam protection
- Downloadable resume (PDF)
- Custom 404 page
- Fully responsive (mobile, tablet, desktop)
- Dark gold noir aesthetic
- Per-page SEO metadata, sitemap.xml, robots.txt, JSON-LD structured data
- Vercel Analytics

## 🚀 Deploy to Vercel (Free)

### Option 1: GitHub → Vercel (Recommended)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" → Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live.

### Option 2: Vercel CLI
```bash
npm install -g vercel
cd samiullah-portfolio
npm install
vercel
```

## 📧 Contact Form Email
The contact form sends messages via [Web3Forms](https://web3forms.com) — submitted
directly from the browser (Web3Forms requires this; it blocks server-side/proxied
requests as a spam-prevention measure). No SMTP setup needed, it works right after
deploying. If the access key ever needs to be rotated, set
`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel dashboard → Settings → Environment
Variables and it will override the default one in the code.


## 📊 Analytics
Page-view tracking via [Vercel Analytics](https://vercel.com/analytics) is wired in
(`<Analytics />` in the root layout). It only starts collecting data once Analytics
is turned on for the project in the Vercel dashboard → your project → Analytics tab
(free tier available).

## 🔗 Site URL (SEO)
`sitemap.xml`, `robots.txt`, and social share links (Open Graph/Twitter) all use a
site URL that defaults to `https://samimuhammadi.vercel.app`. Once there's a real
production domain, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://samiullah.dev`) in
Vercel dashboard → Settings → Environment Variables so those all point to the
correct domain.

## 🖥️ Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS + custom CSS
- **Fonts:** Cormorant Garamond + Sora (Google Fonts)
- **Icons:** React Icons
- **Email:** Web3Forms
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel (free tier)
