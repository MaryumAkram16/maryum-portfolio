import { useState } from 'react'
import { BOOKING_URL } from '../siteConfig.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import ArchitectureDiagram from '../components/ArchitectureDiagram.jsx'
import InteractivePreview from '../components/InteractivePreview.jsx'
import medilensVoiceAgent from '../assets/images/medilens/voice-appointment-agent.png'
import medilensVoiceAgentWebp from '../assets/images/medilens/voice-appointment-agent.webp'
import medilensComplaint from '../assets/images/medilens/complaint-management.png'
import medilensComplaintWebp from '../assets/images/medilens/complaint-management.webp'
import medilensAdmin from '../assets/images/medilens/admin-command-center.png'
import medilensAdminWebp from '../assets/images/medilens/admin-command-center.webp'
import roshanaiIntelligence from '../assets/images/roshanai/intelligence-layer.png'
import roshanaiIntelligenceWebp from '../assets/images/roshanai/intelligence-layer.webp'
import roshanaiSkillGap from '../assets/images/roshanai/skill-gap-analysis.png'
import roshanaiSkillGapWebp from '../assets/images/roshanai/skill-gap-analysis.webp'
import roshanaiProposal from '../assets/images/roshanai/proposal-generator.png'
import roshanaiProposalWebp from '../assets/images/roshanai/proposal-generator.webp'
import skillsyncDashboard from '../assets/images/skillsync/dashboard.png'
import skillsyncDashboardWebp from '../assets/images/skillsync/dashboard.webp'
import skillsyncRadar from '../assets/images/skillsync/radar.png'
import skillsyncRadarWebp from '../assets/images/skillsync/radar.webp'
import skillsyncAssessment from '../assets/images/skillsync/skill-assessment.png'
import skillsyncAssessmentWebp from '../assets/images/skillsync/skill-assessment.webp'
import skillsyncParser from '../assets/images/skillsync/parser.png'
import skillsyncParserWebp from '../assets/images/skillsync/parser.webp'
import skillsyncMentor from '../assets/images/skillsync/career-mentor.png'
import skillsyncMentorWebp from '../assets/images/skillsync/career-mentor.webp'
import './Work.css'

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((img) => (
        <figure key={img.src}>
          <picture>
            <source srcSet={`${img.webp}`} type="image/webp" />
            <img src={img.src} alt={img.caption} loading="lazy" decoding="async" />
          </picture>
          <figcaption>{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

function ReceiptThumbnail() {
  return (
    <div className="receipt-thumb" role="img" aria-label="Receipt text transformed into validated structured data">
      <div className="receipt-thumb-window"><span /> <span /> <span /></div>
      <div className="receipt-thumb-grid">
        <div className="receipt-thumb-input">Cafe Aroma<br />12 Jun 2025<br />Total: PKR 1082</div>
        <div className="receipt-thumb-arrow">→</div>
        <div className="receipt-thumb-output"><b>Validated output</b><br />vendor · date · total<br />currency · confidence</div>
      </div>
      <div className="receipt-thumb-footer"><span className="receipt-check">✓</span> needs_review: false <span>8/8 eval cases</span></div>
    </div>
  )
}

function ResumeThumbnail() {
  return (
    <div className="resume-thumb" role="img" aria-label="Resume Screener model results panel">
      <div className="resume-thumb-head"><span>RESUME SCREENER</span><b>MODEL RESULTS</b></div>
      <div className="resume-thumb-score"><strong>68.0%</strong><span>category accuracy</span></div>
      <div className="resume-thumb-metrics"><div><b>0.87</b><span>HR F1</span></div><div><b>0.81</b><span>Fitness F1</span></div><div><b>8.69</b><span>final MAE</span></div><div><b>0.814</b><span>final R²</span></div></div>
      <div className="resume-thumb-footer"><span>TF-IDF + Logistic Regression</span><span>Gradient Boosting</span></div>
    </div>
  )
}

function ReceiptArchitecture() {
  return (
    <div className="receipt-architecture" aria-label="Receipt extraction architecture">
      <div className="receipt-arch-row receipt-arch-primary">POST /extract · validated text input</div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-grid">
        <div><b>Schema gate</b><span>Pydantic validation</span></div>
        <div><b>LLM extraction</b><span>provider abstraction</span></div>
        <div><b>Repair loop</b><span>one retry on bad JSON</span></div>
      </div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-output">Structured fields · confidence · needs_review</div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-grid receipt-arch-secondary">
        <div><b>Background jobs</b><span>idempotent retries + alerts</span></div>
        <div><b>SQLite + PDF</b><span>reports with safe filenames</span></div>
      </div>
    </div>
  )
}

function CaseStudy({
  title,
  description,
  tags,
  problem,
  solution,
  result,
  resultBadge,
  proofLine,
  thumb,
  thumbWebp,
  thumbCaption,
  images,
  scopeNote,
  architecture,
  visual,
  evaluation,
  metrics,
  repoUrl,
  videoLinks,
  deepDive,
  demoType,
}) {
  const [open, setOpen] = useState(false)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)

  return (
    <article className="case-card">
      <div className="case-thumb-wrap">
          {visual || (thumb ? (
            <picture>
              <source srcSet={`${thumbWebp}`} type="image/webp" />
              <img className="case-thumb" src={thumb} alt={thumbCaption} loading="lazy" decoding="async" />
            </picture>
          ) : <ReceiptThumbnail />)}
      </div>

      <div className="case-section-head">
        <p className="section-label">Case study</p>
        <h2>
          {title}
          <span className="hero-gradient"> {description}</span>
        </h2>
      </div>

      <div className="tag-row">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <dl className="psr-list">
        <div>
          <dt>Problem</dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt>Solution</dt>
          <dd>{solution}</dd>
        </div>
        <div>
          <dt>Result</dt>
          <dd>
            {result}
            {resultBadge && (
              <>
                <br />
                <span className="psr-badge">
                  🏆 {resultBadge}
                </span>
              </>
            )}
          </dd>
        </div>
      </dl>

      {proofLine && <p className="proof-line">{proofLine}</p>}

      {evaluation && (
        <section className="evaluation-panel" aria-label={`${title} evaluation and metrics`}>
          <div className="evaluation-copy">
            <p className="evaluation-label">Evaluation</p>
            <p>{evaluation}</p>
          </div>
          {metrics && <div className="metric-row">{metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
        </section>
      )}

      {demoType && <InteractivePreview type={demoType} />}

      <div className="case-links">
        {repoUrl && (
          <a className="case-link" href={repoUrl} target="_blank" rel="noopener noreferrer">
            View code
          </a>
        )}
        {videoLinks &&
          videoLinks.map((video) => (
            <a
              className="case-link"
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              key={video.url}
            >
              {video.label}
            </a>
          ))}
        <button
          type="button"
          className="view-details-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          {open ? 'Hide details' : 'View details'}
        </button>
        {deepDive && (
          <button
            type="button"
            className="view-details-btn"
            onClick={() => setDeepDiveOpen((prev) => !prev)}
            aria-expanded={deepDiveOpen}
          >
            {deepDiveOpen ? 'Hide technical deep-dive' : 'Technical deep-dive'}
          </button>
        )}
      </div>

      {open && (
        <div className="case-expanded">
          <Gallery images={images} />
          {scopeNote && <p className="scope-note">{scopeNote}</p>}
        </div>
      )}

      {deepDiveOpen && deepDive && (
        <div className="case-expanded deep-dive">
          <h3>Architecture</h3>
          {architecture || <ArchitectureDiagram />}

          <h3>Hardest technical challenge</h3>
          <p>{deepDive.challenge}</p>

          <h3>What I'd do differently</h3>
          <p>{deepDive.retrospective}</p>

          <h3>Metrics</h3>
          <p>{deepDive.metrics}</p>
        </div>
      )}
    </article>
  )
}

function Work() {
  usePageTitle('Work — Maryum Akram | Case Studies in AI Automation')
  return (
    <main className="page work">
      <div className="container">
        <div className="section-head work-head">
          <p className="section-label">Projects I've built</p>
          <h1>
            Five systems,<span className="hero-gradient"> from classical ML to production AI</span>
          </h1>
          <p className="section-sub">
            Every project solved a real problem end-to-end. Each case study below shows the
            problem, the system I built, and the proof — architecture, evaluation, reliability, and
            demo evidence, and honest limitations.
          </p>
        </div>

        <CaseStudy
          title="Receipt Extractor"
          description="Reliable document intelligence API"
          tags={['Structured Extraction', 'FastAPI', 'Evaluation', 'Background Jobs']}
          problem="Receipt and invoice text is messy, but downstream software needs trusted vendor, date, amount, and currency fields without guessing."
          solution="A provider-agnostic FastAPI service validates input, extracts a strict schema, repairs malformed model output once, and routes uncertain results to human review instead of inventing values."
          result="8/8 hand-labelled evaluation cases passed, including ambiguous currency and non-receipt inputs."
          proofLine="Prompt-injection test held. Background jobs add idempotency, retries, alerting, SQLite persistence, PDF reports, and optional scheduled generation."
          images={[]}
          architecture={<ReceiptArchitecture />}
          repoUrl="https://github.com/MaryumAkram16/receipt-extractor"
          demoType="receipt"
          deepDive={{
            challenge:
              'The hardest part was making a language model behave like a dependable API component: it had to return a strict schema, never invent a missing amount or currency, and fail safely when the input or model output was uncertain.',
            retrospective:
              'The current queue and SQLite state are intentionally single-process. The first production upgrade would be a durable queue and shared store such as Redis, plus external alerting and a larger labelled evaluation set.',
            metrics:
              'The current evaluation scores 8/8 hand-labelled cases. The service also logs prompt version, model, token counts, duration, repair status, and needs-review outcomes so quality and cost can be monitored together.',
          }}
        />

        <CaseStudy
          title="Resume Screener"
          description="Classical ML for job-fit analysis"
          tags={['scikit-learn', 'NLP', 'Model Evaluation', 'Streamlit']}
          problem="Recruiters need a fast first pass over resumes, but category prediction and job-fit scoring are different modeling problems."
          solution="A two-stage pipeline predicts the resume’s job category, then scores its fit against a specific job description using TF-IDF, similarity features, and Gradient Boosting."
          result="Deployed Streamlit app with a 68.0% category-classification accuracy and a final suitability model with MAE 8.69 and R² 0.814."
          proofLine="The model comparison, confusion matrix, feature importance, limitations, and a genuine-versus-unrelated job test are documented in the repository."
          visual={<ResumeThumbnail />}
          evaluation="The Stage 1 classifier covers 2,484 resumes across 20 usable categories. Stage 2 uses 2,385 resume–job pairs, synthetic negative examples, and an explicit comparison against Random Forest baselines."
          metrics={[{ label: 'Stage 1 accuracy', value: '68.0%' }, { label: 'Final model MAE', value: '8.69' }, { label: 'Final model R²', value: '0.814' }, { label: 'Training resumes', value: '2,484' }]}
          images={[]}
          repoUrl="https://github.com/MaryumAkram16/Resume-Screener"
          demoType="resume"
          videoLinks={[]}
        />

        <CaseStudy
          title="MediLens"
          description="Hospital intake automation"
          tags={['Voice Agent', 'Complaint Mgmt', 'Admin Dashboard']}
          problem="Hospital booking, complaints, and admin tracking were manual, staff-run processes."
          solution="A voice agent books, reschedules, and cancels appointments with no staff involved. Complaint management and an admin dashboard automate the rest."
          result="Independently tested by a professor via live link."
          evaluation="The demo is evaluated through scripted booking, cancellation, and rescheduling flows, with the system required to preserve conversation state and fall back safely instead of guessing."
          metrics={[{ label: 'Core flows', value: '3' }, { label: 'Outcome', value: 'Auditable' }, { label: 'Mode', value: 'Live test' }]}
          thumb={medilensVoiceAgent}
          thumbWebp={medilensVoiceAgentWebp}
          thumbCaption="Books, cancels, and reschedules appointments by voice — no staff involved"
          images={[
            {
              src: medilensVoiceAgent,
              webp: medilensVoiceAgentWebp,
              caption: 'Books, cancels, and reschedules appointments by voice — no staff involved',
            },
            {
              src: medilensComplaint,
              webp: medilensComplaintWebp,
              caption: 'Independently tested by a professor via live link',
            },
            { src: medilensAdmin, webp: medilensAdminWebp, caption: 'Admin dashboard for decision support' },
          ]}
          scopeNote="Voice Appointment Agent, Complaint Management, and Hospital Admin Command Center shown here are built by me. MediLens also includes a Lab Report Analyzer, Symptom Checker, and RAG Knowledge Base built by a collaborator (credited in the repo) — not shown in this case study."
          repoUrl="https://github.com/MaryumAkram16/medilens"
          demoType="medilens"
          videoLinks={[
            { label: 'Watch voice demo', url: 'https://www.youtube.com/watch?v=migZQqh0CoA' },
            { label: 'Watch full demo', url: 'https://www.youtube.com/watch?v=L5w1mAUsjp0' },
          ]}
        />

        <CaseStudy
          title="RoshanAI"
          description="Freelancer career intelligence"
          tags={['Market Data', 'Skill Gap Analysis', 'Proposal Generator']}
          problem="Freelancers had no easy way to see live market data when pricing and pitching for work."
          solution="Pulls live job market data from JSearch & Google Jobs, analyzes skill gaps against real postings, and generates tailored proposals."
          result="3 independent users. Fully solo build."
          resultBadge="AI Seekho 2026 — Silver Tier, Phase 1 Submission"
          evaluation="The current evidence is product validation rather than benchmark accuracy: three independent users ran the full pipeline. Gap Score is explicitly an AI-generated estimate and has not yet been benchmarked against ground truth."
          metrics={[{ label: 'Independent users', value: '3' }, { label: 'Data source', value: 'Live jobs' }, { label: 'Gap Score', value: 'Estimate' }]}
          thumb={roshanaiIntelligence}
          thumbWebp={roshanaiIntelligenceWebp}
          thumbCaption="Live market data from JSearch & Google Jobs"
          images={[
            { src: roshanaiIntelligence, webp: roshanaiIntelligenceWebp, caption: 'Live market data from JSearch & Google Jobs' },
            {
              src: roshanaiSkillGap,
              webp: roshanaiSkillGapWebp,
              caption: '29 live jobs fetched and analyzed against the resume',
            },
            {
              src: roshanaiProposal,
              webp: roshanaiProposalWebp,
              caption: 'Generated output: job analysis, rate suggestion, tailored proposal',
            },
          ]}
          repoUrl="https://github.com/MaryumAkram16/RoshanAI"
          demoType="roshanai"
          videoLinks={[
            { label: 'Watch demo', url: 'https://www.youtube.com/watch?v=crTVbzsgehc' },
          ]}
          deepDive={{
            challenge:
              "Resume parsing into a meaningful gap score was the hardest part — going from raw resume text to NLP-matching a person's actual skills against live job postings, then turning that into a score that means something rather than a plausible-looking number.",
            retrospective:
              'Two things I would fix: the API keys are called client-side right now, which exposes them in the browser — a server-side proxy is the correct fix. And the original roshanai.com domain is dead; the live version now runs on GitHub Pages/Vercel instead.',
            metrics:
              '3 real users ran the full pipeline. Gap Score is an AI-generated estimate, not a measured accuracy figure — I have not benchmarked it against ground truth.',
          }}
        />

        <CaseStudy
          title="SkillSync AI"
          description="Career discovery pipeline"
          tags={['Dashboard', 'Radar', 'Assessment']}
          problem="Career discovery tools rarely check claimed skills against real, current market demand."
          solution="Adaptive skill assessment matched against live market data. Architected and built end-to-end, with real security and rate-limiting in production."
          result="9 real users. 94/94 CI tests passing."
          proofLine="Adversarial security testing (12 payload tests), rate limiting, and audit logging in production."
          evaluation="Validation combines product usage and engineering checks: nine real users, 94/94 CI tests, 12 adversarial security payloads, and production rate-limit and audit-log behavior. Recommendation quality remains an area for a larger labeled evaluation set."
          metrics={[{ label: 'Real users', value: '9' }, { label: 'CI tests', value: '94/94' }, { label: 'Security payloads', value: '12' }]}
          thumb={skillsyncDashboard}
          thumbWebp={skillsyncDashboardWebp}
          thumbCaption="Real user data and journey"
          images={[
            { src: skillsyncDashboard, webp: skillsyncDashboardWebp, caption: 'Real user data and journey' },
            { src: skillsyncRadar, webp: skillsyncRadarWebp, caption: 'Live market demand scan for a target role' },
            {
              src: skillsyncAssessment,
              webp: skillsyncAssessmentWebp,
              caption: 'Adaptive quiz verifying claimed skills against real performance',
            },
            {
              src: skillsyncParser,
              webp: skillsyncParserWebp,
              caption: 'Resume + role + country parsed into live job matches with ATS scoring',
            },
            {
              src: skillsyncMentor,
              webp: skillsyncMentorWebp,
              caption: 'Recommendations built from assessment results and live market data',
            },
          ]}
          scopeNote="Dashboard, Radar, Skill Assessment, Parser, and Career Mentor shown here are built by me. Interview Prep and Roadmap features were built by a collaborator (credited in the repo) and are not shown here."
          repoUrl="https://github.com/MaryumAkram16/Skillsync-AI"
          demoType="skillsync"
          videoLinks={[
            { label: 'Watch Skill Assessment demo', url: 'https://www.youtube.com/watch?v=QfERaD_cMY8' },
            { label: 'Watch Career Mentor demo', url: 'https://www.youtube.com/watch?v=-qOdwym_3Ko' },
          ]}
        />

        <div className="cta-bottom">
          <a className="cta-button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a 30-minute intro call
          </a>
        </div>
      </div>
    </main>
  )
}

export default Work
