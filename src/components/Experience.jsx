import { Section } from './Section'
import styles from './Experience.module.css'
import { experience } from '../data/portfolio'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Four years from junior mobile to senior React Native."
      subtitle="Agency news apps, Canada-remote health tech on SenSights, production RN at TECHBUCKS, and senior work on high-traffic gaming titles at Cynosoft — leading UI, navigation, performance, and code quality."
    >
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <li key={job.id} className={styles.item}>
            <div className={styles.marker} aria-hidden>
              <span />
            </div>
            <article className={styles.card}>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
                <span className={styles.location}>{job.location}</span>
              </div>
              <h3 className={styles.role}>{job.role}</h3>
              <p className={styles.company}>{job.company}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
