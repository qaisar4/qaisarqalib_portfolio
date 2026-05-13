import styles from './Hero.module.css'
import { site } from '../data/portfolio'

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <span className={styles.dot} aria-hidden />
            {site.yearsExperience}+ years · {site.location}
          </p>
          <h1 className={styles.name}>
            {site.firstName} {site.lastName}
          </h1>
          <p className={styles.role}>{site.role}</p>
          <p className={styles.tagline}>{site.tagline}</p>
          <div className={styles.actions}>
            <a className={styles.btnPrimary} href="#contact">
              Get in touch
            </a>
            <a className={styles.btnGhost} href="#projects">
              View projects
            </a>
            {site.resumePath ? (
              <a className={styles.btnGhost} href={site.resumePath} download>
                Résumé
              </a>
            ) : null}
          </div>
          <ul className={styles.socials}>
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.social}>
                  <span className={styles.socialLabel}>{s.label}</span>
                  <span className={styles.socialHandle}>{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.avail}>{site.availability}</p>
        </div>
        <div className={styles.visual}>
          <div className={styles.card}>
            <img
              src={site.avatarSrc}
              alt={`Portrait of ${site.firstName} ${site.lastName}`}
              className={styles.avatar}
              width={320}
              height={320}
            />
            <div className={styles.cardGlow} aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
