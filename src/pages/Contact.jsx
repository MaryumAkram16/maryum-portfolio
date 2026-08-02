import { BOOKING_URL, CONTACT_EMAIL, LINKEDIN_URL } from '../siteConfig.js'
import './Contact.css'

function Contact() {
  return (
    <main className="page contact">
      <div className="container">
        <p className="restatement">
          I turn slow, manual business processes into AI systems that run themselves. If
          that's a problem you have, let's talk.
        </p>
        <a className="cta-button" href={BOOKING_URL} target="_blank" rel="noreferrer">
          Book a 20-minute intro call
        </a>
        <div className="contact-secondary">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  )
}

export default Contact
