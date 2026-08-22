import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { BOOKING_URL } from '../siteConfig.js'
import './Principles.css'

const principles = [
  {
    number: '01',
    title: 'Evaluate the behavior, not the demo',
    text: 'I define the task contract first, then test representative successes, ambiguous inputs, deliberate mismatches, and failure cases. A polished interface is not evidence of model quality.',
    evidence: 'Receipt Extractor: 8/8 hand-labelled cases. Resume Screener: accuracy, MAE, R², model comparison, and real-versus-unrelated job test.',
  },
  {
    number: '02',
    title: 'Treat security as a product feature',
    text: 'Provider keys stay server-side, external input is validated, public endpoints are rate-limited, and suspicious behavior is recorded. AI features do not get a free pass on ordinary application security.',
    evidence: 'SkillSync AI: 12 adversarial payload tests, rate limiting, and audit logging. RoshanAI: server-side proxy identified as the production fix for exposed provider keys.',
  },
  {
    number: '03',
    title: 'Fail safely instead of guessing',
    text: 'When a model returns malformed output, missing fields, or low-confidence information, the system should retry within a bounded policy, route the result for review, or explain that it cannot answer.',
    evidence: 'Receipt Extractor uses strict schemas, one-step repair, quarantine logging, needs_review routing, timeouts, and a provider kill switch.',
  },
  {
    number: '04',
    title: 'Make every important decision observable',
    text: 'Logs should explain what happened without leaking private content: model and prompt versions, token usage, duration, retry state, outcome, and error category.',
    evidence: 'Receipt Extractor records prompt version, model, token counts, duration, repair status, and needs-review outcomes so quality and cost can be reviewed together.',
  },
  {
    number: '05',
    title: 'Design for cost and latency from day one',
    text: 'A useful AI system has a budget. I prefer bounded retries, cached or persisted work, smaller models where appropriate, and asynchronous jobs for work that does not belong in a request-response cycle.',
    evidence: 'Receipt Extractor separates synchronous extraction from background reporting and logs token/cost data. RoshanAI separates live market retrieval from downstream analysis and output generation.',
  },
]

function Principles() {
  usePageTitle('AI Engineering Principles — Maryum Akram')

  return (
    <main className="page principles-page">
      <div className="container">
        <header className="principles-hero">
          <p className="section-label">How I build</p>
          <h1>AI engineering principles for <span className="hero-gradient">systems people can trust.</span></h1>
          <p className="principles-intro">I build AI features as software systems: measurable, secure, observable, cost-aware, and honest about uncertainty. These are the engineering decisions behind my portfolio projects.</p>
        </header>

        <section className="principles-list" aria-label="AI Engineering Principles">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.number}>
              <div className="principle-number">{principle.number}</div>
              <div className="principle-body">
                <h2>{principle.title}</h2>
                <p>{principle.text}</p>
                <p className="principle-evidence"><strong>Evidence in my work:</strong> {principle.evidence}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="principles-cta">
          <p className="section-label">See the principles in practice</p>
          <h2>Read the case studies behind the decisions.</h2>
          <div className="principles-actions">
            <Link className="cta-button" to="/work">Explore my work</Link>
            <a className="principles-call" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book an intro call</a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Principles

