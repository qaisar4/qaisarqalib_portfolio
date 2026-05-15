import styles from './Hero.module.css'
import { site } from '../data/portfolio'

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.shell}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <div className={styles.meta}>
              <p className={styles.kicker}>
                <span className={styles.dot} aria-hidden />
                {site.yearsExperience}+ years · {site.location}
              </p>
              <p className={styles.avail}>{site.availability}</p>
            </div>

            <h1 className={styles.name}>
              {site.firstName} {site.lastName}
            </h1>
            <p className={styles.role}>{site.role}</p>
            <p className={styles.tagline}>{site.tagline}</p>

            {site.resumePath ? (
              <div className={styles.actions}>
                <a className={styles.btnGhost} href={site.resumePath} download>
                  Download résumé
                </a>
              </div>
            ) : null}

            <ul className={styles.socials}>
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.social}>
                    {s.label}
                    <span className={styles.socialSep} aria-hidden>
                      ·
                    </span>
                    <span className={styles.socialHandle}>{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          
          </div>

          <div className={styles.visual}>
            <div className={styles.portrait}>
              <img
                src={site.avatarSrc}
                alt={`Portrait of ${site.firstName} ${site.lastName}`}
                className={styles.avatar}
                width={280}
                height={280}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
