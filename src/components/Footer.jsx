import styles from './Footer.module.css'
import { site } from '../data/portfolio'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {site.firstName} {site.lastName}. Built with React & Vite — ready for Vercel.
        </p>
        <a href="#top" className={styles.back}>
          Back to top
        </a>
      </div>
    </footer>
  )
}
