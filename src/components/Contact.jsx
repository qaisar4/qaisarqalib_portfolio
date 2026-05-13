import { useState } from 'react'
import { Section } from './Section'
import styles from './Contact.module.css'
import { site } from '../data/portfolio'

function buildMailto({ name, email, message }) {
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
  return `mailto:${site.email}?subject=${subject}&body=${body}`
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const href = buildMailto({
      name: name.trim() || 'Visitor',
      email: email.trim() || '',
      message: message.trim() || '',
    })
    window.location.href = href
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about your next mobile build."
      subtitle="This form opens your email client with a pre-filled message — no server or third-party form service required."
    >
      <div className={styles.layout}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.field}>
            <span className={styles.label}>Name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder={`${site.firstName} ${site.lastName}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder={site.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Briefly describe the role, timeline, or stack…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
            />
          </label>
          <button type="submit" className={styles.submit}>
            Send via email
          </button>
          <p className={styles.note}>
            Prefer direct email?{' '}
            <a href={`mailto:${site.email}`} className={styles.inlineLink}>
              {site.email}
            </a>
            {site.phone ? (
              <>
                {' '}
                ·{' '}
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className={styles.inlineLink}>
                  {site.phone}
                </a>
              </>
            ) : null}
          </p>
        </form>

        <aside className={styles.aside}>
          <h3 className={styles.asideTitle}>Elsewhere</h3>
          <ul className={styles.links}>
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialRow}>
                  <span className={styles.socialLabel}>{s.label}</span>
                  <span className={styles.chev} aria-hidden>
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
