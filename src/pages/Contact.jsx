import { BOOKING_URL, CONTACT_EMAIL, LINKEDIN_URL } from '../siteConfig.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import ContactForm from '../components/ContactForm.jsx'
import './Contact.css'

function Contact() {
  usePageTitle('Contact — Maryum Akram')
  return (
    <main id="main-content" tabIndex={-1} className="page contact">
      <div className="container">
        <div className="section-head contact-head">
          <p className="section-label">Let's work together</p>
          <h1>
            Have a system that needs to be built right?<span className="hero-gradient"> Let's talk.</span>
          </h1>
          <p className="section-sub">
            I build and evaluate AI systems, from documented workflow prototypes to tested application
              code. If you're looking for help with a project, let's talk — no jargon, no pressure, just
              a straight conversation about the problem and what evidence would count as success.
          </p>
        </div>

        <div className="contact-primary">
          <a
            className="cta-pill cta-solid"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            🗓 Book a 30-minute intro call
          </a>
        </div>

        <div className="contact-secondary">
          <a href={`mailto:${CONTACT_EMAIL}`}>✉ {CONTACT_EMAIL}</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
        </div>

        <div className="contact-form-wrap">
          <div className="section-head contact-form-head">
            <p className="section-label">Or write to me</p>
            <h2>
              Have a project in mind?<span className="hero-gradient"> Tell me about it.</span>
            </h2>
            <p className="section-sub">
              Fill the form below and I'll get back to you soon — a straight conversation about
              how I can help.
            </p>
          </div>
          <ContactForm />
        </div>

        <p className="contact-closing">
          Based in Lahore, Pakistan · Building AI systems, from model evaluation to tested application code.
        </p>
      </div>
    </main>
  )
}

export default Contact
