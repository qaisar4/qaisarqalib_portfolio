import { useState } from 'react'
import { Section } from './Section'
import styles from './Contact.module.css'
import { site } from '../data/portfolio'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function buildMailto({ name, email, message }) {
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
  return `mailto:${site.email}?subject=${subject}&body=${body}`
}

function openMailto(href) {
  const link = document.createElement('a')
  link.href = href
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  function validate() {
    const next = {}
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedEmail) {
      next.email = 'Please enter your email so I can reply.'
    } else if (!EMAIL_RE.test(trimmedEmail)) {
      next.email = 'Please enter a valid email address.'
    }

    if (!trimmedMessage) {
      next.message = 'Please add a short message about your project or role.'
    } else if (trimmedMessage.length < 10) {
      next.message = 'Message should be at least 10 characters.'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const trimmedName = name.trim() || 'Visitor'
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()
    const href = buildMailto({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    })

    if (href.length > 1900) {
      setErrors({ message: 'Message is too long. Please shorten it or email directly.' })
      return
    }

    openMailto(href)
  }

  function clearError(field) {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Hiring a React Native developer or need a build partner?"
      subtitle="Based in Lahore, open to remote and freelance. Fill in your details below — I’ll receive them when you send the email from your own mail app."
    >
      <div className={styles.layout}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.field}>
            <span className={styles.label}>Your name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              Your email <span className={styles.required}>(required)</span>
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your.email@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                clearError('email')
              }}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              aria-invalid={errors.email ? 'true' : undefined}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              required
            />
            {errors.email ? (
              <span id="contact-email-error" className={styles.error} role="alert">
                {errors.email}
              </span>
            ) : null}
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              Your message <span className={styles.required}>(required)</span>
            </span>
            <textarea
              name="message"
              rows={5}
              placeholder="Enter your message here"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
                clearError('message')
              }}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              aria-invalid={errors.message ? 'true' : undefined}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              required
            />
            {errors.message ? (
              <span id="contact-message-error" className={styles.error} role="alert">
                {errors.message}
              </span>
            ) : null}
          </label>

          <button type="submit" className={styles.submit}>
            Open email to {site.firstName}
          </button>
          <p className={styles.note}>
            Step 1: You fill in the fields above. Step 2: Your mail app opens with a draft to{' '}
            <a href={`mailto:${site.email}`} className={styles.inlineLink}>
              {site.email}
            </a>
            . Step 3: You hit send in that app — only then do I receive it.
            {site.phone ? (
              <>
                {' '}
                Or call{' '}
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className={styles.inlineLink}>
                  {site.phone}
                </a>
                .
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
