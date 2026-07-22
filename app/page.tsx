import HomeContent from './home-content'

// No metadata export here on purpose — this route inherits
// metadata.title.default and the description straight from the root
// layout, so the homepage title stays exactly
// "Samiullah Mohammadi — Web Developer & Educator" with no suffix
// duplication from the title template used by the other routes.
export default function HomePage() {
  return <HomeContent />
}
