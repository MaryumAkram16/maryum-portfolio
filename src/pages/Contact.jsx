import { BOOKING_URL, CONTACT_EMAIL, LINKEDIN_URL, RESUME_URL } from '../siteConfig.js'
import ContactForm from '../components/ContactForm.jsx'
import './Contact.css'

function Contact() {
  return (
    <main className="page contact">
      <div className="container">
        <div className="section-head contact-head">
          <p className="section-label">Let's work together</p>
          <h1>
            Have a task eating your team's time?<span className="hero-gradient"> Let's fix it.</span>
          </h1>
          <p className="section-sub">
            I turn slow, manual business processes into AI systems that run themselves. If that's
            a problem you have, let's talk. No jargon, no pressure — just a straight conversation
            about how I can help.
          </p>
        </div>

        <div className="contact-primary">
          <a
            className="cta-pill cta-solid"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            🗓 Book a 20-minute intro call
          </a>
        </div>

        <div className="contact-secondary">
          <a href={`mailto:${CONTACT_EMAIL}`}>✉ {CONTACT_EMAIL}</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
          <a href={RESUME_URL} download>
            Download CV
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
          Based in Lahore, Pakistan · Working with businesses that want to replace manual work
          with systems that run themselves.
        </p>
      </div>
    </main>
  )
}

export default Contact
