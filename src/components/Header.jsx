import { useEffect, useState } from 'react'
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

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
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
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.drawerLink}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open ? (
        <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={() => setOpen(false)} />
      ) : null}
    </header>
  )
}
