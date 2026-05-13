import { Section } from './Section'
import styles from './Skills.module.css'
import { skills } from '../data/portfolio'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools and technologies I use day to day."
      subtitle="Grouped by how I typically apply them on production React Native apps — swap in your exact stack in src/data/portfolio.js."
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
