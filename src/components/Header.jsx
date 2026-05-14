import { useCallback, useEffect, useState } from 'react'
import styles from './Header.module.css'
import { site } from '../data/portfolio'

const NAV = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function parseHeaderHeightPx() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--header-h').trim()
  if (raw.endsWith('rem')) return parseFloat(raw) * 16
  if (raw.endsWith('px')) return parseFloat(raw)
  return 64
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('top')

  const updateActiveNav = useCallback(() => {
    const headerPx = parseHeaderHeightPx()
    const line = window.scrollY + headerPx + 20
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight - 1)

    if (maxScroll > 0 && window.scrollY >= maxScroll - 2) {
      const last = NAV[NAV.length - 1]?.href.slice(1)
      if (last) setActiveId(last)
      return
    }

    let active = NAV[0].href.slice(1)
    for (const item of NAV) {
      const id = item.href.slice(1)
      const el = document.getElementById(id)
      if (!el) continue
      const top = window.scrollY + el.getBoundingClientRect().top
      if (top <= line) active = id
    }
    setActiveId(active)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      updateActiveNav()
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    window.addEventListener('hashchange', updateActiveNav)
    window.addEventListener('load', updateActiveNav, { once: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('hashchange', updateActiveNav)
    }
  }, [updateActiveNav])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const initials = `${site.firstName[0] ?? ''}${site.lastName[0] ?? ''}`.toUpperCase()

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.bar}>
        <a href="#top" className={styles.logo} aria-label={`${site.firstName} ${site.lastName}, home`}>
          <span className={styles.logoMark} aria-hidden>
            {initials}
          </span>
          <span className={styles.logoText}>
            {site.firstName}
            <span className={styles.logoAccent}> {site.lastName}</span>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV.map((item) => {
              const id = item.href.slice(1)
              const isActive = activeId === id
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className={`${styles.menuBtn} ${open ? styles.menuOpen : ''}`}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={styles.menuIcon} aria-hidden />
        </button>
      </div>

      <div
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul className={styles.drawerList}>
            {NAV.map((item) => {
              const id = item.href.slice(1)
              const isActive = activeId === id
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {open ? (
        <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={() => setOpen(false)} />
      ) : null}
    </header>
  )
}
