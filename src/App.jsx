import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { seo, site } from './data/portfolio'

function App() {
  useEffect(() => {
    document.title = seo.title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', seo.description)
  }, [])

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: `${site.firstName} ${site.lastName}`,
    jobTitle: site.role,
    email: site.email,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: site.socials.map((s) => s.href),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
