import { Section } from './Section'
import styles from './Skills.module.css'
import { skills } from '../data/portfolio'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Stack tuned for production mobile — not tutorial demos."
      subtitle="Core TypeScript and React Native, Firebase and Supabase, animations and in-app purchases, store release via TestFlight and Play Console, plus Jest and Testing Library for confidence before every ship."
    >
      <ul className={styles.grid}>
        {skills.map((group) => (
          <li key={group.category} className={styles.card}>
            <h3>{group.category}</h3>
            <ul className={styles.tags}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
