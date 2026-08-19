import { BOOKING_URL } from '../siteConfig.js'
import HeroVisual from '../components/HeroVisual.jsx'
import avatarPhoto from '../assets/images/avatar/avatar.jpg'
import './Landing.css'

function Landing() {
  return (
    <main className="page landing">
      <section className="hero container">
        <div className="hero-text">
          <h1>I turn slow, manual business processes into AI systems that run themselves.</h1>
          <p className="subline">AI automation engineer building production systems, not demos.</p>
          <a className="cta-button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a 30-minute intro call
          </a>
        </div>
        <div className="hero-visual-wrap">
          <HeroVisual />
        </div>
      </section>

      <section className="what-i-do container">
        <p className="section-label">What I Do</p>
        <ul className="capability-grid">
          <li>
            <h3>Voice & conversational agents</h3>
            <p>Systems that book, triage, and resolve by voice — no staff in the loop.</p>
          </li>
          <li>
            <h3>Backend automation pipelines</h3>
            <p>Workflows that pull live data, score it, and act on it end-to-end.</p>
          </li>
          <li>
            <h3>Full-stack AI products</h3>
            <p>From auth and databases to rate-limited, CI-tested APIs — shipped, not demoed.</p>
          </li>
        </ul>
      </section>

      <section className="tools container">
        <p className="section-label">Tools I Use</p>
        <ul className="stack-tags">
          {[
            'n8n',
            'Python',
            'FastAPI',
            'OpenAI/Gemini',
            'Retell AI',
            'React',
            'Supabase/Firebase',
            'Cloud Run',
          ].map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="about container">
        <p className="section-label">About Me</p>
        <div className="about-body">
          <div className="avatar-wrap">
            <img className="avatar-photo" src={avatarPhoto} alt="Maryum Akram" />
          </div>
          <div className="about-text">
            <p className="about-lead">
              Self-taught AI automation engineer, ~8 months in. BS Mathematics, no formal CS
              background. Based in Lahore, Pakistan.
            </p>
            <p>
              In eight months I've gone from following automation tutorials to shipping three
              full production systems — a hospital intake platform, a freelancer
              career-intelligence tool, and a production-hardened SaaS product — each tested by
              real users, not just demoed. My math background means I reason through the systems
              I build instead of just wiring APIs together.
            </p>
            <p>Looking for backend AI engineering work where I can keep replacing manual processes with ones that run themselves.</p>
          </div>
        </div>
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
