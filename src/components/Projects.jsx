import { Section } from './Section'
import styles from './Projects.module.css'
import { projects } from '../data/portfolio'

function LinkOrSpan({ href, children, className }) {
  if (!href) {
    return <span className={className}>{children}</span>
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Apps users open every day — fantasy, gaming, and AI."
      subtitle="From NHL and football fantasy to Betsson-scale gaming, Good Gaming, and TwoPercent AI’s trend analysis: shipping polished mobile UX, integrations, and performance work under NDA-friendly summaries."
    >
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li key={project.id} className={styles.card}>
            <div className={styles.top}>
              <h3>{project.title}</h3>
              <div className={styles.links}>
                <LinkOrSpan href={project.links.live} className={styles.link}>
                  Live
                </LinkOrSpan>
                <span className={styles.sep} aria-hidden>
                  ·
                </span>
                <LinkOrSpan href={project.links.repo} className={styles.link}>
                  Code
                </LinkOrSpan>
              </div>
            </div>
            <p className={styles.desc}>{project.description}</p>
            <ul className={styles.tech}>
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
