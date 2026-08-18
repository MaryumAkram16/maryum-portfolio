import { BOOKING_URL, CONTACT_EMAIL, LINKEDIN_URL } from '../siteConfig.js'
import ContactForm from '../components/ContactForm.jsx'
import './Contact.css'

function Contact() {
  return (
    <main className="page contact">
      <div className="container">
        <p className="restatement">
          I turn slow, manual business processes into AI systems that run themselves. If
          that's a problem you have, let's talk.
        </p>
        <a className="cta-button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Book a 20-minute intro call
        </a>
        <div className="contact-secondary">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="contact-form-wrap">
          <p className="form-lead">Prefer to write instead? Send a message directly.</p>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

export default Contact
