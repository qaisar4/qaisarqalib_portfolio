import { Section } from './Section'
import styles from './Education.module.css'
import { education, certifications } from '../data/portfolio'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & certifications"
      title="Degree in software engineering, sharpened on real products."
      subtitle="Bachelor’s from Lahore Garrison University and FSc pre-engineering form the base; Udemy courses in React and React Native keep the stack current alongside shipping apps to production."
    >
      <div className={styles.layout}>
        <div>
          <h3 className={styles.blockTitle}>Education</h3>
          <ul className={styles.list}>
            {education.map((e) => (
              <li key={e.id} className={styles.eduCard}>
                <div className={styles.eduTop}>
                  <span className={styles.period}>{e.period}</span>
                </div>
                <p className={styles.degree}>{e.degree}</p>
                <p className={styles.inst}>{e.institution}</p>
                {e.detail ? <p className={styles.detail}>{e.detail}</p> : null}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.blockTitle}>Courses</h3>
          <ul className={styles.certList}>
            {certifications.map((c) => (
              <li key={c.id} className={styles.cert}>
                <span className={styles.certName}>{c.name}</span>
                <span className={styles.certMeta}>
                  {c.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
