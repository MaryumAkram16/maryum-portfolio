import { BOOKING_URL } from '../siteConfig.js'
import HeroVisual from '../components/HeroVisual.jsx'
import './Landing.css'

function Landing() {
  return (
    <main className="page landing">
      <section className="hero container">
        <div className="hero-text">
          <h1>I turn slow, manual business processes into AI systems that run themselves.</h1>
          <p className="subline">AI automation engineer building production systems, not demos.</p>
          <a className="cta-button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a 20-minute intro call
          </a>
        </div>
        <div className="hero-visual-wrap">
          <HeroVisual />
        </div>
      </section>

      <section className="credibility container">
        <p>
          Self-taught AI automation engineer, ~8 months in. BS Mathematics, no formal CS
          background. Based in Lahore, Pakistan.
        </p>
        <p>
          Stack: n8n, Python, FastAPI, OpenAI/Gemini, Retell AI, React, Supabase/Firebase,
          Cloud Run.
        </p>
      </section>

      <section className="proof container">
        <ul className="proof-strip">
          <li>
            <span>Professor-tested via live link</span>
            <span className="proof-project">MediLens</span>
          </li>
          <li>
            <span>3 independent users</span>
            <span className="proof-project">RoshanAI</span>
          </li>
          <li>
            <span>94/94 automated tests passing, production-hardened</span>
            <span className="proof-project">SkillSync AI</span>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Landing
