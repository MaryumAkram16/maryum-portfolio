import { useState } from 'react'
import { FORMSPREE_ENDPOINT, CONTACT_EMAIL } from '../siteConfig.js'
import './ContactForm.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!values.email.trim()) {
      next.email = 'Enter your email so I can reply.'
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = "That email doesn't look right."
    }
    if (!values.message.trim()) next.message = "Add a short message — what's on your mind?"
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (res.ok) {
        setStatus('success')
        setValues({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form-status success">
        <div className="success-checkmark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="44" height="44" fill="none">
            <circle cx="12" cy="12" r="11" stroke="url(#successGrad)" strokeWidth="2" />
            <path d="M7.5 12.2l3.2 3.2 5.8-6.4" stroke="#2fb5a2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="successGrad" x1="0" y1="0" x2="24" y2="24">
                <stop offset="0%" stopColor="#0d7a6e" />
                <stop offset="100%" stopColor="#2fb5a2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="success-title">Message sent!</p>
        <p className="success-sub">
          Thanks — your message reached me. I'll get back to you soon.
        </p>
        <button
          type="button"
          className="success-reset-btn"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>

      <button type="submit" className="cta-button" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="field-error form-error">
          Something went wrong sending that. Try again, or email me directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
  )
}

export default ContactForm
