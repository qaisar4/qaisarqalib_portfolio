import { Section } from './Section'
import styles from './About.module.css'
import { about } from '../data/portfolio'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Senior React Native engineer focused on shipped outcomes."
      subtitle={about.intro}
    >
      <div className={styles.layout}>
        <div className={styles.prose}>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className={styles.highlights}>
          {about.highlights.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
