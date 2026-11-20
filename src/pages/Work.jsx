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
      <div className="receipt-thumb-footer"><span className="receipt-check">✓</span> needs_review: false <span>50 labelled eval cases</span></div>
    </div>
  )
}

function GharFixThumbnail() {
  return (
    <div className="receipt-thumb" role="img" aria-label="Roman Urdu service request transformed into a ranked, booked provider">
      <div className="receipt-thumb-window"><span /> <span /> <span /></div>
      <div className="receipt-thumb-grid">
        <div className="receipt-thumb-input">"AC theek karwana hai, kal shaam"<br />Roman Urdu · Lahore</div>
        <div className="receipt-thumb-arrow">→</div>
        <div className="receipt-thumb-output"><b>Booked provider</b><br />intent · area · slot<br />7-factor ranked match</div>
      </div>
      <div className="receipt-thumb-footer"><span className="receipt-check">✓</span> 759 tests in CI <span>scoring identical to n8n</span></div>
    </div>
  )
}

function GharFixArchitecture() {
  return (
    <div className="receipt-architecture" aria-label="GharFix TypeScript serverless architecture">
      <div className="receipt-arch-row receipt-arch-primary">React frontend · POST /api/proxy · request contract unchanged from n8n</div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-output">createApp() · one router for Vercel functions and the local dev server · dependencies injected</div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-grid">
        <div><b>Intent</b><span>Gemini + strict validation, keyword fallback</span></div>
        <div><b>Matching</b><span>OSM search, 7-factor score, pricing</span></div>
        <div><b>Booking</b><span>slots, idempotent confirm, 409 on clash</span></div>
        <div><b>Quality + disputes</b><span>status loop, refund rules</span></div>
        <div><b>Reschedule</b><span>cancel, rebook, waitlist</span></div>
        <div><b>Dashboard</b><span>provider scores, nightly refresh</span></div>
      </div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-grid receipt-arch-secondary">
        <div><b>Supabase Postgres</b><span>unique slot index, migrations</span></div>
        <div><b>Resilience</b><span>safe retries, incidents, alerts</span></div>
        <div><b>Reconcile</b><span>re-sends unsent confirmations</span></div>
      </div>
    </div>
  )
}

function FlowThumbnail({ label, input, output, outputTitle, footerLeft, footerRight }) {
  return (
    <div className="receipt-thumb" role="img" aria-label={label}>
      <div className="receipt-thumb-window"><span /> <span /> <span /></div>
      <div className="receipt-thumb-grid">
        <div className="receipt-thumb-input">{input.map((line) => <span key={line}>{line}<br /></span>)}</div>
        <div className="receipt-thumb-arrow">→</div>
        <div className="receipt-thumb-output"><b>{outputTitle}</b><br />{output.map((line) => <span key={line}>{line}<br /></span>)}</div>
      </div>
      <div className="receipt-thumb-footer"><span className="receipt-check">✓</span> {footerLeft} <span>{footerRight}</span></div>
    </div>
  )
}

function FlowArchitecture({ label, top, steps, output, bottom }) {
  return (
    <div className="receipt-architecture" aria-label={label}>
      <div className="receipt-arch-row receipt-arch-primary">{top}</div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-grid">
        {steps.map((step) => <div key={step.name}><b>{step.name}</b><span>{step.note}</span></div>)}
      </div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-output">{output}</div>
      {bottom && (
        <>
          <div className="receipt-arch-arrow">↓</div>
          <div className="receipt-arch-row receipt-arch-grid receipt-arch-secondary">
            {bottom.map((step) => <div key={step.name}><b>{step.name}</b><span>{step.note}</span></div>)}
          </div>
        </>
      )}
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
  images = [],
  scopeNote,
  architecture,
  visual,
  evaluation,
  metrics,
  repoUrl,
  evidenceLinks = [],
  videoLinks,
  deepDive,
  demoType,
  collapsed = false,
}) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  // A collapsed card opens straight away when a link points at it (/work#id)
  const [expanded, setExpanded] = useState(
    () => !collapsed || (typeof window !== 'undefined' && window.location.hash === `#${id}`),
  )
  const [open, setOpen] = useState(false)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)
  const [evalOpen, setEvalOpen] = useState(false)
  // Phones only: the interactive preview starts folded (CSS ignores this on desktop)
  const [previewOpen, setPreviewOpen] = useState(false)
  const hasDetails = images.length > 0 || Boolean(scopeNote)

  // Compact view: name, subtitle, headline result and code link, with the
  // full case study one click away. Nothing is removed, only folded.
  if (!expanded) {
    return (
      <article className="case-card case-card-compact" id={id}>
        <div className="case-section-head">
          <p className="section-label">Also built</p>
          <h3>{title}</h3>
          <p className="case-description">{description}</p>
        </div>
        <p className="case-compact-result">{result}</p>
        <div className="case-links">
          {repoUrl && (
            <a className="case-link case-link-primary" href={repoUrl} target="_blank" rel="noopener noreferrer">
              View code
            </a>
          )}
          <button
            type="button"
            className="view-details-btn"
            onClick={() => setExpanded(true)}
            aria-expanded={false}
          >
            Show full case study
          </button>
        </div>
      </article>
    )
  }

  return (
    <article className="case-card" id={id}>
      {/* Desktop: thumbnail and interactive preview stack in the left column,
          the case study text and its actions in the right. Mobile: thumbnail,
          text, actions, then the preview. Expanded panels span full width. */}
      <div className={`case-main ${demoType ? 'has-preview' : ''} ${previewOpen ? 'preview-open' : ''}`}>
        <div className="case-thumb-wrap">
          {visual || (thumb ? (
            <picture>
              <source srcSet={`${thumbWebp}`} type="image/webp" />
              <img className="case-thumb" src={thumb} alt={thumbCaption} loading="lazy" decoding="async" />
            </picture>
          ) : <ReceiptThumbnail />)}
        </div>

        <div className="case-body">
          <div className="case-section-head">
            <p className="section-label">Case study</p>
            <h3>{title}</h3>
            <p className="case-description">{description}</p>
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
            <section
              className={`evaluation-panel ${evalOpen ? 'is-open' : ''}`}
              aria-label={`${title} evaluation and metrics`}
            >
              <div className="evaluation-copy">
                <p className="evaluation-label">Evaluation</p>
                <p className="evaluation-text">{evaluation}</p>
                {/* Mobile only: the notes start collapsed so metrics stay in view */}
                <button
                  type="button"
                  className="evaluation-toggle"
                  onClick={() => setEvalOpen((prev) => !prev)}
                  aria-expanded={evalOpen}
                >
                  {evalOpen ? 'Hide evaluation notes' : 'Show evaluation notes'}
                </button>
              </div>
              {metrics && <div className="metric-row">{metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
            </section>
          )}

          <div className="case-links">
            {repoUrl && (
              <a className="case-link case-link-primary" href={repoUrl} target="_blank" rel="noopener noreferrer">
                View code
              </a>
            )}
            {evidenceLinks.map((item) => (
              <a className="case-link" href={item.url} target="_blank" rel="noopener noreferrer" key={item.url}>
                {item.label}
              </a>
            ))}
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
            {(hasDetails || deepDive || demoType) && (
              <div className="case-toggles">
                {demoType && (
                  <button
                    type="button"
                    className="view-details-btn preview-toggle"
                    onClick={() => setPreviewOpen((prev) => !prev)}
                    aria-expanded={previewOpen}
                  >
                    {previewOpen ? 'Hide interactive preview' : 'Show interactive preview'}
                  </button>
                )}
                {hasDetails && (
                  <button
                    type="button"
                    className="view-details-btn"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-expanded={open}
                  >
                    {open ? 'Hide screenshots' : 'View screenshots'}
                  </button>
                )}
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
            )}
          </div>
        </div>

        {demoType && <InteractivePreview type={demoType} />}
      </div>

      {open && hasDetails && (
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

          {deepDive.links && (
            <>
              <h3>More evidence</h3>
              <div className="case-links deep-dive-links">
                {deepDive.links.map((item) => (
                  <a className="case-link" href={item.url} target="_blank" rel="noopener noreferrer" key={item.url}>
                    {item.label}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </article>
  )
}

function ProjectGroup({ id, title, children }) {
  return (
    <section className="work-group" aria-labelledby={id}>
      <h2 className="work-group-title" id={id}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Work() {
  usePageTitle('Work — Maryum Akram | Case Studies in AI Engineering')
  return (
    <main id="main-content" tabIndex={-1} className="page work">
      <div className="work-container">
        <div className="work-head">
          <p className="section-label">Projects I've built</p>
          <h1>
            13 projects,<span className="hero-gradient"> from tested AI applications to classical ML</span>
          </h1>
          <p className="section-sub">
            Applied AI and backend systems come first, ordered by how much of the engineering is
            publicly verifiable. Each case study shows the problem, what I built, the evidence —
            tests, CI, evaluation, demos — and honest limitations, and labels prototypes and
            documented designs as such.
          </p>
        </div>

        <ProjectGroup id="end-to-end" title="Applied AI & backend systems">
          <CaseStudy
            title="SkillSync AI"
            description="Full-stack AI career platform"
            tags={['TypeScript', 'Express API', 'Firebase Auth', 'Vitest + CI', 'Gemini', 'SerpAPI']}
            problem="Career discovery tools rarely check claimed skills against real, current market demand."
            solution="I built the backend, the overall architecture, and the Radar, Parser, Skill Assessment, and Career Mentor features: an Express API with Firebase authentication, rate limiting, Firestore rules, audit logging, and SerpAPI and Gemini integrations behind an adaptive assessment flow."
            result="108 automated tests in 10 Vitest files pass on the public code, and a GitHub Actions workflow runs them and a TypeScript check on every push to main. They include a labelled evaluation of the job matching: 20 resumes, 30 job postings and 71 resume–job pairs graded strong, partial or poor."
            proofLine="The matching evaluation found that a student's degree years were being counted as work experience. After the fix, experience is read correctly for 17 of 17 labelled resumes, and the rule-based pre-score orders 94% of same-resume pairs correctly."
            evaluation="The offline evaluation scores the code-based stages: skill extraction (98.6% recall on resumes, 98.4% on job postings), experience detection, required-vs-preferred classification, and the pre-score that picks which 8 jobs reach the AI step (every strong fit makes the cut). It runs in CI with regression floors. The AI scoring step has a live evaluation that is still pending a first run. The fixes were made after seeing the same labelled set, with no held-out set, so these results are optimistic; keyword matching still misses aliases like 'Postgres' and can't tell that a React developer partly fits a Vue role."
            metrics={[{ label: 'automated tests', value: '108' }, { label: 'labelled resume–job pairs', value: '71' }, { label: 'pre-score pairs ordered correctly', value: '94%' }, { label: 'AI scoring evaluation', value: 'Pending' }]}
            thumb={skillsyncDashboard}
            thumbWebp={skillsyncDashboardWebp}
            thumbCaption="Career dashboard interface and journey"
            images={[
              { src: skillsyncDashboard, webp: skillsyncDashboardWebp, caption: 'Career dashboard interface and journey' },
              { src: skillsyncRadar, webp: skillsyncRadarWebp, caption: 'Market-demand scan dashboard for a target role' },
              {
                src: skillsyncAssessment,
                webp: skillsyncAssessmentWebp,
                caption: 'Sample assessment interface for claimed skills',
              },
              {
                src: skillsyncParser,
                webp: skillsyncParserWebp,
                caption: 'Resume and target-role matching flow shown in the interface',
              },
              {
                src: skillsyncMentor,
                webp: skillsyncMentorWebp,
                caption: 'Career recommendation interface',
              },
            ]}
            scopeNote="Dashboard, Radar, Skill Assessment, Parser, and Career Mentor shown here are built by me. Interview Prep and Roadmap features were built by a collaborator (credited in the repo) and are not shown here."
            repoUrl="https://github.com/MaryumAkram16/Skillsync-AI"
            evidenceLinks={[
              { label: 'Public test suite', url: 'https://github.com/MaryumAkram16/Skillsync-AI/tree/main/tests' },
              { label: 'Matching evaluation', url: 'https://github.com/MaryumAkram16/Skillsync-AI#matching-evaluation' },
              { label: 'GitHub Actions runs', url: 'https://github.com/MaryumAkram16/Skillsync-AI/actions' },
            ]}
            demoType="skillsync"
            videoLinks={[
              { label: 'Watch Skill Assessment demo', url: 'https://www.youtube.com/watch?v=QfERaD_cMY8' },
              { label: 'Watch Career Mentor demo', url: 'https://www.youtube.com/watch?v=-qOdwym_3Ko' },
            ]}
          />
          <CaseStudy
            title="GharFix"
            description="TypeScript serverless booking backend · n8n port"
            tags={['TypeScript', 'Vercel Functions', 'PostgreSQL / Supabase', 'Vitest', 'Gemini', 'OpenStreetMap']}
            problem="Finding a home-service provider in Pakistan means phone calls and WhatsApp, unpredictable pricing, and little support for Urdu or Roman Urdu. My first version ran as eight n8n workflows and stopped working when its n8n host went down."
            solution="I ported the workflows to TypeScript serverless handlers: Gemini intent parsing with a keyword fallback, OpenStreetMap provider search, the original seven-factor ranking and pricing, and booking, quality, dispute, reschedule, and provider-dashboard endpoints. Every handler receives its database, email, map, and clock dependencies as arguments, so each one is tested with fakes."
            result="759 Vitest tests run in GitHub Actions on every push, including 36 migration tests against a real Postgres 16 service. A database exclusion constraint stops a provider holding two overlapping bookings, even when both requests arrive at once, and confirm requests are idempotent, so a retry after a timeout replays the original booking instead of creating a second one."
            resultBadge="Portfolio-reported: AI Seekho 2026 — Silver Tier, Phase 2 submission (original n8n version)"
            proofLine="A golden test runs the original n8n scoring and pricing code from the workflow JSON next to the TypeScript port and requires identical output."
            visual={<GharFixThumbnail />}
            evaluation="CI runs the type-check and the full suite with a Postgres service; two other workflows are schedulers (reconcile and nightly scores). The app is deployed on Vercel; the README notes which live paths (Gemini, Google Places, Supabase, Gmail) were checked in production and which are covered only by fakes. Overlap protection is migration db/003: it is tested against real Postgres, including two concurrent requests where exactly one wins, and is applied to the live database with a read-only check script first. The database measures each booking's own window, so it can be stricter than the pre-check that suggests alternatives. There is no login yet, so tracking and disputes check booking id plus email."
            metrics={[
              { value: '759', label: 'tests in CI, incl. real Postgres' },
              { value: '7/7', label: 'endpoints ported from n8n' },
              { value: 'Identical', label: 'scoring + pricing vs n8n' },
              { value: 'Live', label: 'Vercel deployment' },
            ]}
            architecture={<GharFixArchitecture />}
            repoUrl="https://github.com/MaryumAkram16/gharfix-capstone"
            evidenceLinks={[
              { label: 'Parity tests vs n8n', url: 'https://github.com/MaryumAkram16/gharfix-capstone/blob/master/tests/matching/golden.test.ts' },
              { label: 'Reschedule crash-and-retry test', url: 'https://github.com/MaryumAkram16/gharfix-capstone/blob/master/tests/reschedule/handler.test.ts' },
            ]}
            demoType="gharfix"
            videoLinks={[
              { label: 'Try the live app', url: 'https://gharfix-capstone-bvq8.vercel.app/' },
              { label: 'Watch demo', url: 'https://www.loom.com/share/ced16dc728b04e53920382d191875de5' },
            ]}
            deepDive={{
              challenge:
                'Proving the port kept the original behavior. The golden test loads the n8n Code nodes straight from the workflow JSON and runs them beside the TypeScript, across complexity tiers, budgets, multi-service requests, and surge-hour boundaries, so changing any weight or threshold fails the build. Double booking needed the same care: slots are normalized identically in TypeScript and SQL (about 200 inputs checked against both), and a Postgres unique index turns the losing concurrent insert into a 409.',
              retrospective:
                'Next step is provider and customer login, so tracking and disputes no longer rely on booking id plus email. The original n8n workflows stay in the repository as the design record.',
              metrics:
                '759 tests pass in CI, 36 of them migration tests against a real Postgres service (they are skipped locally unless a test database is configured). All seven n8n endpoints run in-process. Live Gemini, Google Places, and Overpass calls are covered by fakes in the suite; the README notes which paths were checked live.',
              links: [
                { label: 'Booking integrity migration', url: 'https://github.com/MaryumAkram16/gharfix-capstone/blob/master/db/001_booking_integrity.sql' },
                { label: 'Watch original n8n prototype demo', url: 'https://github.com/MaryumAkram16/gharfix-capstone/blob/master/assets/demo-video.mp4' },
              ],
            }}
          />
          <CaseStudy
            title="Receipt Extractor"
            description="FastAPI extraction service · FlyRank internship"
            tags={['Python', 'FastAPI', 'Pydantic', 'Evaluation', 'Background Jobs', 'Docker']}
            problem="Receipt and invoice text is messy, but downstream software needs trusted vendor, date, amount, and currency fields without guessing."
            solution="I built a provider-agnostic FastAPI service, during my FlyRank internship, that validates input with Pydantic, extracts a strict schema, retries only transient provider errors, repairs malformed model output once, and routes uncertain results to human review instead of inventing values."
            result="298 pytest tests run in CI on every push and pull request, covering input validation, provider failures and retry policy, background-job idempotency, reports, path-traversal protection, and the evaluation scorer and labelling rules. CI also runs a stub-mode contract check against the live API and a Docker build with a container smoke test."
            proofLine="An ambiguous receipt returns needs_review: true instead of a guessed value. The labelled evaluation has 50 cases across eight categories, scored per field, with needs_review precision and recall."
            evaluation="The tests use a fake provider client and block real model calls, so they verify the service, not model quality. Model quality is measured by 50 hand-labelled cases (currencies, date formats, total selection, OCR noise, discounts and refunds, multi-page invoices, non-receipts including a prompt-injection attempt, and ambiguous inputs) in a separate, manually triggered workflow that refuses to score unless the server reports live mode. No live run on the 50-case set yet. On the original 8 cases, prompt v2 scored 8/8 (v1 scored 7/8) in a manual run on 2026-08-15."
            metrics={[{ value: '298', label: 'tests in CI' }, { value: '50', label: 'labelled eval cases, 8 categories' }, { value: 'Per field', label: 'accuracy + needs_review P/R' }, { value: 'Pending', label: 'live run on 50-case set' }]}
            images={[]}
            architecture={<ReceiptArchitecture />}
            repoUrl="https://github.com/MaryumAkram16/receipt-extractor"
            evidenceLinks={[
              { label: '50 labelled evaluation cases', url: 'https://github.com/MaryumAkram16/receipt-extractor/blob/main/evals/cases.json' },
              { label: 'Evaluation runner', url: 'https://github.com/MaryumAkram16/receipt-extractor/blob/main/evals/run_eval.py' },
              { label: 'CI workflow', url: 'https://github.com/MaryumAkram16/receipt-extractor/blob/main/.github/workflows/verify.yml' },
              { label: 'Test suite', url: 'https://github.com/MaryumAkram16/receipt-extractor/tree/main/tests' },
            ]}
            demoType="receipt"
            deepDive={{
              challenge:
                'The hardest part was making a language model behave like a dependable API component: it had to return a strict schema, never invent a missing amount or currency, and fail safely when the input or model output was uncertain.',
              retrospective:
                'The current queue and SQLite state are intentionally single-process. The first production upgrade would be a durable queue and shared store such as Redis, plus external alerting and a first live run of the 50-case evaluation to set a baseline.',
              metrics:
                '298 tests pass offline in about five seconds and run in CI. 50 hand-labelled evaluation cases are published, with per-field and per-category scoring and a dated report; the live evaluation runs in its own manually triggered workflow and refuses to score stub responses. Each call logs prompt version, model, token counts, duration, and repair status.',
            }}
          />
          <CaseStudy
            title="Usage Metering & Billing Engine"
            description="FastAPI billing backend · solo build, FlyRank internship"
            tags={['Python', 'FastAPI', 'SQLModel', 'pytest', 'Idempotency', 'Signed Webhooks']}
            problem="A SaaS backend has to know how much each customer used, what it cost, and whether they hit their limit, and a retried request or replayed webhook must never change the bill."
            solution="A FastAPI service that records usage under a per-tenant idempotency key, returns 429 at the quota boundary and 402 without an active subscription, prices AI tokens (input, cached input, output, reasoning) in integer micro-dollars from pinned constants, and syncs plans through a Stripe-style checkout with HMAC-signed, deduplicated webhooks."
            result="46 pytest tests pass on the public code, covering idempotency, quota boundaries, pricing, usage alerts, input validation, and webhook signature, timestamp, replay, and dedup cases. A small dashboard drives the real endpoints locally."
            proofLine="Retrying with the same idempotency key returns the original result: no second usage event and no double-counted cost."
            visual={
              <FlowThumbnail
                label="Metered API request transformed into an idempotent, priced usage event"
                input={['POST /generate', 'tenant · idempotency_key']}
                outputTitle="Usage recorded once"
                output={['quota checked · 429 / 402', 'cost in micro-dollars']}
                footerLeft="46/46 tests"
                footerRight="signed + deduped webhooks"
              />
            }
            evaluation="GitHub Actions runs the tests on every push and pull request. The payment provider is simulated because Stripe and similar providers don't onboard sellers in Pakistan, but it reproduces Stripe's HMAC signing scheme, so a real Stripe swap touches two modules. Quota is checked before the usage event is written, in a separate step: the tests pin exact boundaries, but enforcement is not atomic under concurrent requests. AI token counts are simulated, and proration and invoicing are out of scope."
            metrics={[
              { value: '46/46', label: 'tests passing' },
              { value: 'Integer', label: 'micro-dollar cost math' },
              { value: '429 / 402', label: 'quota responses' },
              { value: 'HMAC', label: 'signed, deduped webhooks' },
            ]}
            architecture={
              <FlowArchitecture
                label="Usage metering and billing architecture"
                top="POST /generate · tenant_id, idempotency_key, usage type, quantity"
                steps={[
                  { name: 'Idempotency', note: 'same key returns the original' },
                  { name: 'Quota check', note: '429 over limit, 402 unpaid' },
                  { name: 'Pricing', note: 'pinned token rates, integers' },
                ]}
                output="usage_events → GET /usage rollup · used, limit, cost, alerts"
                bottom={[
                  { name: 'Checkout', note: 'simulated Stripe-style session' },
                  { name: 'Webhooks', note: 'raw-body HMAC, replay + dedup' },
                ]}
              />
            }
            repoUrl="https://github.com/MaryumAkram16/flyrank-capstone-metering-billing"
            evidenceLinks={[
              { label: 'Tests mapped to requirements', url: 'https://github.com/MaryumAkram16/flyrank-capstone-metering-billing/blob/main/EVIDENCE.md' },
              { label: 'API implementation', url: 'https://github.com/MaryumAkram16/flyrank-capstone-metering-billing/blob/main/app/main.py' },
              { label: 'Webhook tests', url: 'https://github.com/MaryumAkram16/flyrank-capstone-metering-billing/blob/main/tests/test_webhooks.py' },
            ]}
            deepDive={{
              challenge:
                'The dashboard checkout failed webhook verification even though the same flow passed from Python. The endpoint returned the signed event as parsed JSON, and the browser re-serialized it with different whitespace, so the HMAC no longer matched. The fix sends the raw payload verbatim, and a regression test pins it: always verify against the exact bytes delivered.',
              retrospective:
                'Quota checking and recording happen in separate steps, so the first production change is an atomic check-and-record (a conditional update or row lock inside one transaction). After that: a CI workflow, real Stripe behind the existing interface, and real token counts from model calls.',
              metrics:
                '46/46 tests pass, including 8 alert tests (99.9% usage never rounds up to a 100% warning) and 6 validation tests added after a cross-check found that negative quantities produced negative cost.',
            }}
          />
          <CaseStudy
            title="Embeddable Widget Platform"
            description="Multi-tenant FastAPI backend · FlyRank internship"
            tags={['Python', 'FastAPI', 'SQLAlchemy + SQLite', 'pytest', 'Multi-tenant', 'Bot Defense']}
            problem="A widget that collects data from strangers on any website has to survive bad input, floods, bots, and provider outages without losing or leaking a submission."
            solution="Tenants define a signup form or CTA popover and embed it with one script tag. Each submission passes validation, rate limiting, spam checks, a two-provider geo fallback, and storage, and an email side effect can fail without blocking success."
            result="47/47 tests passing, with multi-tenant isolation tests, a live two-origin end-to-end run, and a real-time dashboard."
            proofLine="In the repository's measurement script, proof-of-work bot defense blocked 100% of naive bots with 0% false positives on simulated legitimate submissions, at about 117 ms average solve cost."
            visual={
              <FlowThumbnail
                label="Website visitor submission transformed into a protected, stored lead"
                input={['POST /submissions', 'any origin · public']}
                outputTitle="Protected lead"
                output={['validated · rate limited', 'geo enriched · stored']}
                footerLeft="47/47 tests"
                footerRight="100% naive bots blocked"
              />
            }
            evaluation="All 47 pytest tests pass on the public code, and GitHub Actions runs them on every push and pull request. Bot-defense numbers come from the repo's evidence file and simulated traffic, not production. Rate limiting is in-memory and single-instance, authentication is API-key only, and password hashing is plain SHA-256, suitable only for local demos."
            metrics={[
              { value: '47/47', label: 'tests passing' },
              { value: '100%', label: 'naive bots blocked' },
              { value: '0%', label: 'false positives' },
              { value: '~117 ms', label: 'avg solve cost' },
            ]}
            architecture={
              <FlowArchitecture
                label="Embeddable widget platform architecture"
                top="Customer website · widget.js loads public, cached widget config"
                steps={[
                  { name: 'Validate', note: 'bad input gets 4xx' },
                  { name: 'Rate limit + spam', note: '429, then recovers' },
                  { name: 'Geo fallback', note: 'provider A, then B' },
                ]}
                output="Tenant-isolated storage · email or webhook side effect cannot block success"
                bottom={[
                  { name: 'Dashboard', note: 'server-rendered, SSE live updates' },
                  { name: 'Proof of work', note: 'bot defense' },
                ]}
              />
            }
            repoUrl="https://github.com/MaryumAkram16/flyrank-capstone-widget-platform"
            demoType="widget"
            deepDive={{
              challenge:
                "Making the public submission path fail safely. Bad payloads return 4xx instead of 500, floods get a 429 and recover, geo provider failure still stores the submission, and the email side effect cannot block success.",
              retrospective:
                "Rate limiting is in-memory and single-instance, so the production step is a shared store such as Redis, plus real session authentication and a proper password hash.",
              metrics:
                "47/47 tests pass. Proof-of-work bot defense blocked 100% of naive bots with 0% false positives at about 117 ms average solve cost.",
            }}
          />
          <CaseStudy
            title="RoshanAI"
            description="Full-stack freelancer career intelligence"
            tags={['TypeScript', 'Express API', 'Firebase Auth', 'JSearch / SerpAPI', 'OpenAI']}
            problem="Freelancers had no easy way to see live market data when pricing and pitching for work."
            solution="A React/TypeScript app backed by an Express API that keeps provider keys server-side, verifies Firebase ID tokens, rate-limits requests, and proxies JSearch, SerpAPI, and OpenAI calls for career analysis, profile/proposal generation, and salary coaching. External API responses and output quality are not independently benchmarked."
            result="A CI workflow runs security-invariant checks, a TypeScript check, and a build before each backend deploy."
            resultBadge="Portfolio-reported: AI Seekho 2026 — Silver Tier, Phase 1 submission"
            evaluation="The repository contains integrations and UI/source for the career-intelligence flows. Gap Score is an AI-generated estimate with no published ground-truth evaluation; API fallbacks mean current live-data availability and quality are not guaranteed."
            metrics={[{ label: 'CI', value: 'Security checks + build' }, { label: 'Data source', value: 'API integrations' }, { label: 'Gap Score', value: 'Unbenchmarked estimate' }]}
            thumb={roshanaiIntelligence}
            thumbWebp={roshanaiIntelligenceWebp}
            thumbCaption="Market-intelligence dashboard interface"
            images={[
              { src: roshanaiIntelligence, webp: roshanaiIntelligenceWebp, caption: 'Market-intelligence dashboard interface' },
              {
                src: roshanaiSkillGap,
                webp: roshanaiSkillGapWebp,
                caption: 'Example job results shown against a resume profile',
              },
              {
                src: roshanaiProposal,
                webp: roshanaiProposalWebp,
                caption: 'Generated output: job analysis, rate suggestion, tailored proposal',
              },
            ]}
            repoUrl="https://github.com/MaryumAkram16/RoshanAI"
            evidenceLinks={[
              { label: 'Authenticated API layer', url: 'https://github.com/MaryumAkram16/RoshanAI/blob/main/server.ts' },
              { label: 'Security regression checks', url: 'https://github.com/MaryumAkram16/RoshanAI/blob/main/scripts/security-regression.mjs' },
              { label: 'Market-data integration source', url: 'https://github.com/MaryumAkram16/RoshanAI/blob/main/src/marketIntelligence.ts' },
              { label: 'Deployment notes and limitations', url: 'https://github.com/MaryumAkram16/RoshanAI/blob/main/DEPLOYMENT.md' },
            ]}
            demoType="roshanai"
            videoLinks={[
              { label: 'Watch demo', url: 'https://www.youtube.com/watch?v=crTVbzsgehc' },
            ]}
            deepDive={{
              challenge:
                "Resume parsing into a meaningful gap score was the hardest part — going from raw resume text to NLP-matching a person's actual skills against live job postings, then turning that into a score that means something rather than a plausible-looking number.",
              retrospective:
                'Early versions called provider APIs from the browser, which exposed the keys; provider calls now go through an authenticated server-side API, and a CI check fails if browser-side key patterns reappear. The original roshanai.com domain is dead; the repository now documents a GitHub Pages frontend with a Vercel serverless backend.',
              metrics:
                'Gap Score is an AI-generated estimate, not a measured accuracy figure; it has not been benchmarked against ground truth.',
            }}
          />
          <CaseStudy
            title="MediLens"
            description="Voice AI hospital workflow prototype"
            tags={['Voice AI', 'Retell AI', 'n8n', 'Complaint Mgmt', 'Admin Dashboard']}
            problem="Hospital booking, complaints, and admin tracking were manual, staff-run processes."
            solution="I built the Retell voice agent and the n8n workflows for voice appointment booking, complaint management, and an admin command center. The public repository contains those workflow exports plus links to product demos."
            result="Public evidence: workflow exports and linked demos. The repository does not include a public test suite or deployment evidence."
            evaluation="The exports document workflow structure and intended scripted booking, cancellation, and rescheduling paths; they do not establish a live hospital deployment, clinical validation, uptime, or measured patient impact. Some exported workflows are marked inactive."
            metrics={[{ label: 'Evidence', value: 'Workflow exports' }, { label: 'Demos', value: '2 linked' }, { label: 'Public CI', value: 'None' }]}
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
                caption: 'Complaint-management workflow interface sample',
              },
              { src: medilensAdmin, webp: medilensAdminWebp, caption: 'Admin dashboard for decision support' },
            ]}
            scopeNote="Voice Appointment Agent, Complaint Management, and Hospital Admin Command Center shown here are built by me. MediLens also includes a Lab Report Analyzer, Symptom Checker, and RAG Knowledge Base built by a collaborator (credited in the repo) — not shown in this case study."
            repoUrl="https://github.com/MaryumAkram16/medilens"
            evidenceLinks={[
              { label: 'Voice workflow export', url: 'https://github.com/MaryumAkram16/medilens/blob/main/Medilens_Voice_Appointment_Booking.json' },
              { label: 'Complaint workflow export', url: 'https://github.com/MaryumAkram16/medilens/blob/main/Complaint_Management.json' },
            ]}
            demoType="medilens"
            videoLinks={[
              { label: 'Watch voice demo', url: 'https://www.youtube.com/watch?v=migZQqh0CoA' },
              { label: 'Watch full demo', url: 'https://www.youtube.com/watch?v=L5w1mAUsjp0' },
            ]}
          />
        </ProjectGroup>

        <ProjectGroup id="flyrank" title="More FlyRank internship work">
          <CaseStudy
            title="Content Refresh Scoring"
            description="Honest baseline-versus-model evaluation"
            tags={['scikit-learn', 'Client-holdout Split', 'Precision@K', 'Error Analysis']}
            problem="A content team can review only 20–50 pages a week, so it needs a defensible, ranked shortlist of which pages to refresh first."
            solution="Built a two-signal baseline rule (0.7 CTR gap plus 0.3 staleness) and compared it with Logistic Regression and Random Forest on FlyRank's anonymized search data, evaluated on a client-holdout split so no client appears in both train and test."
            result="The baseline (Precision@50 0.90) matched Logistic Regression (0.92) and beat Random Forest (0.76). Error analysis traced the gap to the model over-weighting traffic and page age."
            proofLine="A naive random split inflated Random Forest to 0.88 with 27 overlapping clients, which is why the evaluation is grouped by client."
            visual={
              <FlowThumbnail
                label="Page signals transformed into a ranked review queue"
                input={['Page signals', 'CTR gap · staleness']}
                outputTitle="Ranked review queue"
                output={['top 50 pages', 'reason code + action']}
                footerLeft="Baseline P@50 0.90"
                footerRight="vs Random Forest 0.76"
              />
            }
            evaluation="Directional only: the test set is 6 clients (about 1,260 rows), the label is a current-window proxy, and no experiment tested whether refreshing a page causes recovery. A leakage audit found no label-derived feature."
            metrics={[
              { value: '0.90', label: 'baseline P@50' },
              { value: '0.92', label: 'Logistic Regression' },
              { value: '0.76', label: 'Random Forest' },
              { value: '16,726', label: 'pages scored' },
            ]}
            architecture={
              <FlowArchitecture
                label="Content refresh scoring pipeline"
                top="Anonymized starter data · 30,000 pages, 44 columns"
                steps={[
                  { name: 'Volume floor', note: '500+ impressions' },
                  { name: 'Baseline rule', note: '0.7 CTR gap + 0.3 stale' },
                  { name: 'Models', note: 'LR and Random Forest' },
                ]}
                output="Precision@50 on a client-holdout split · 22 train, 6 test clients"
                bottom={[
                  { name: 'Playbook', note: 'monitor, review, tracking audit' },
                  { name: 'Paper', note: 'deployed write-up' },
                ]}
              />
            }
            repoUrl="https://github.com/MaryumAkram16/flyrank-ml-internship"
            demoType="refresh"
            videoLinks={[{ label: 'Read the paper', url: 'https://maryumakram16.github.io/flyrank-ml-internship/' }]}
            deepDive={{
              challenge:
                "Reporting a negative result plainly: a two-signal rule beat a 200-tree Random Forest, so the work focused on explaining why, not on tuning the model until it won.",
              retrospective:
                "The comparison rests on 6 held-out clients, so it should be repeated on a larger or resampled evaluation. The proxy label is a current-state bucket, not a validated future outcome.",
              metrics:
                "Precision@50: baseline 0.90, Logistic Regression 0.92, Random Forest 0.76. The playbook sorts pages into monitor (12,177), review for refresh (4,003), and flag for tracking audit (546).",
            }}
          />
        </ProjectGroup>

        <ProjectGroup id="automations" title="n8n & voice automations">
          <CaseStudy
            title="Lumina"
            description="Voice support agent · TypeScript serverless backend"
            tags={['Retell AI', 'TypeScript', 'Vercel Functions', 'Vitest + CI', 'Zod', 'n8n']}
            problem="E-commerce support is expensive and slow for simple requests like order tracking, and quality becomes inconsistent when sales spike."
            solution="Retell AI runs the voice call and calls a backend for each order action. The first backend was an n8n workflow over Google Sheets. I added a TypeScript serverless backend on Vercel that applies the same cancellation, return, and refund rules, ported from the n8n Code nodes, and returns the same response fields, so the agent prompts don't change. Every request is checked for a valid Retell signature, rate-limited, and validated with zod. Data comes from synthetic demo orders by default, or from Google Sheets or Supabase."
            result="261 Vitest tests pass on the public code, covering business rules, response contracts, signature checks, security, data adapters, and integration. CI runs lint, a type check, the tests, a dependency audit, and a gitleaks secret scan."
            proofLine="Stricter than the n8n original: cancel, return, and refund require an email or phone that matches the order, and a confirmed action re-checks eligibility before anything is written."
            visual={
              <FlowThumbnail
                label="Spoken order question transformed into a verified order answer"
                input={['"Cancel my order"', 'Retell call · signed request']}
                outputTitle="cancel-order"
                output={['caller verified · rules applied', 'spoken decision']}
                footerLeft="261 tests"
                footerRight="signed requests only"
              />
            }
            evaluation="The tests cover the backend's rules and request handling, not the voice experience: no call-volume or resolution-rate benchmark is published. The public deployment links in the README are still placeholders, so the recorded demo is the evidence of the full call. Post-call logging and Gemini sentiment analysis stay on the n8n path. Cost figures are estimates as of February 2026, and the template is not certified for GDPR, PCI, or HIPAA."
            metrics={[
              { value: '261', label: 'Vitest tests passing' },
              { value: '7', label: 'serverless endpoints' },
              { value: 'Signed', label: 'Retell requests verified' },
              { value: 'CI', label: 'lint, types, audit, secrets' },
            ]}
            architecture={
              <FlowArchitecture
                label="Lumina voice support architecture"
                top="Customer call · Retell AI voice agent calls one URL per order action"
                steps={[
                  { name: 'Request guard', note: 'signature, rate limit, zod' },
                  { name: 'lib/rules.ts', note: 'pure business rules' },
                  { name: 'Order repository', note: 'demo, Sheets, or Supabase' },
                ]}
                output="Spoken response · status, cancellation, return, or refund decision"
                bottom={[
                  { name: 'n8n path', note: 'original no-code backend' },
                  { name: 'Gemini 2.5 Flash', note: 'post-call sentiment (n8n)' },
                ]}
              />
            }
            repoUrl="https://github.com/MaryumAkram16/Lumina-AI-Voice-Customer-Support-Agent"
            evidenceLinks={[
              { label: 'Serverless backend', url: 'https://github.com/MaryumAkram16/Lumina-AI-Voice-Customer-Support-Agent/tree/main/serverless' },
              { label: 'Business rule tests', url: 'https://github.com/MaryumAkram16/Lumina-AI-Voice-Customer-Support-Agent/blob/main/serverless/tests/rules.test.ts' },
              { label: 'CI workflow', url: 'https://github.com/MaryumAkram16/Lumina-AI-Voice-Customer-Support-Agent/blob/main/.github/workflows/serverless-ci.yml' },
            ]}
            demoType="lumina"
            videoLinks={[{ label: 'Watch demo', url: 'https://youtu.be/P8TuDYV7eaY' }]}
            deepDive={{
              challenge:
                'Keeping two backends interchangeable. Each Retell custom function has its own URL, so the serverless routes had to return exactly the fields the n8n workflow returned, and /api/order switches on intent like the n8n webhook so it works as a drop-in replacement. The business rules live in one pure module that every route shares, which is what makes them testable without a phone call.',
              retrospective:
                'Next steps are a public deployment so the README links are real, moving post-call logging off n8n, and a shared store for rate limiting. Google Sheets stays available as a lightweight data source, with Supabase for anything larger.',
              metrics:
                '261 tests in 12 files pass locally and in CI. No call-volume or resolution benchmark is published. The repo documents a cost model of about $81 per month at 100–500 calls and $688+ per month at 5,000+ calls.',
            }}
          />
          <CaseStudy
            title="Smart Job Finder"
            description="n8n AI agent for remote job matching"
            tags={['n8n', 'OpenAI', 'JSearch API', 'SerpAPI', 'Google Sheets', 'Gmail']}
            problem="Remote AI job listings are scattered across boards, and many are US-only, very senior, or off-stack, so checking them by hand is slow and repetitive."
            solution="A 21-node n8n workflow on a 6-hour schedule queries JSearch and SerpAPI Google Jobs in parallel, fails loudly on API errors, normalizes both sources into one schema, and removes jobs already emailed (tracked in a Google Sheet) plus in-batch duplicates. A free keyword pre-filter runs before any model call; gpt-4o-mini then scores each remaining job 0–100 against my resume and returns structured JSON. Jobs scoring 50+ with remote-anywhere eligibility and no red flags are ranked, and the top five are emailed as an HTML digest."
            result="The workflow export, a node-by-node reference, and a demo video are public. The README reports one demo run: 36 jobs scored, 5 emailed, top score 85/100."
            proofLine="Cost control is a design decision: the rule pre-filter drops US-only, relocation, clearance, core ML research, and very senior roles before any OpenAI call is made."
            visual={
              <FlowThumbnail
                label="Job listings transformed into a scored, emailed shortlist"
                input={['JSearch + SerpAPI', 'remote AI roles · every 6 h']}
                outputTitle="Top 5 digest"
                output={['score 0–100 · verdict', 'Gmail HTML cards']}
                footerLeft="36 scored → 5 emailed"
                footerRight="demo run"
              />
            }
            evaluation="There are no automated tests, and the scoring rubric has no labelled accuracy evaluation; the 36/5/85 figures come from a single README-reported run. The node reference notes that the exported Save Seen IDs step maps only job_id, so the 7-day dedupe window needs a date_seen mapping to take effect."
            metrics={[
              { value: '21', label: 'n8n nodes' },
              { value: '2', label: 'job APIs in parallel' },
              { value: '36 → 5', label: 'scored → emailed, demo run' },
              { value: '85/100', label: 'top demo score' },
            ]}
            architecture={
              <FlowArchitecture
                label="Smart Job Finder workflow architecture"
                top="Schedule trigger · every 6 hours · search terms split into one item each"
                steps={[
                  { name: 'JSearch API', note: 'RapidAPI · status check' },
                  { name: 'SerpAPI Google Jobs', note: 'status check' },
                  { name: 'Normalize + dedupe', note: 'one schema · Seen Jobs sheet' },
                ]}
                output="Rule pre-filter → gpt-4o-mini rubric score (JSON) → score ≥ 50, top 5"
                bottom={[
                  { name: 'Gmail', note: 'HTML job digest' },
                  { name: 'Google Sheets', note: 'resume text + seen job IDs' },
                ]}
              />
            }
            repoUrl="https://github.com/MaryumAkram16/smart-job-finder"
            evidenceLinks={[
              { label: 'Workflow export', url: 'https://github.com/MaryumAkram16/smart-job-finder/blob/main/workflow/smart-job-finder.json' },
              { label: 'Node-by-node reference', url: 'https://github.com/MaryumAkram16/smart-job-finder/blob/main/docs/node-reference.md' },
            ]}
            videoLinks={[{ label: 'Watch demo', url: 'https://www.youtube.com/watch?v=Y1jvCwc8wrA' }]}
            deepDive={{
              challenge:
                'Keeping model spend proportional to value. Two APIs return overlapping, inconsistently shaped results, so normalization, cross-run and in-batch deduplication, and a keyword pre-filter all run first, and the model only sees jobs that could plausibly fit.',
              retrospective:
                'I would map date_seen in the save step so the 7-day window applies, match scores back to jobs by ID instead of item order, and build a small labelled set of jobs to check the rubric against my own judgement.',
              metrics:
                'One README-reported demo run: 36 jobs scored, 5 emailed, top score 85/100. No accuracy or cost benchmark is published.',
            }}
          />
        </ProjectGroup>

        <ProjectGroup id="ml-projects" title="Classical ML projects">
          <CaseStudy
            title="Consumer Complaint Classifier"
            description="Complaint triage text classification"
            tags={['scikit-learn', 'Out-of-core Training', 'HashingVectorizer', 'Streamlit']}
            problem="Complaint triage is done by manual tagging, and the CFPB dataset is about 8GB with 3.8M+ narratives, which does not fit an ordinary in-memory scikit-learn workflow on a 12GB machine."
            solution="Streams the data with Polars, hashes text into 2^19 features so no vocabulary is stored, and trains an SGDClassifier with partial_fit in 30,000-row batches and manual class weights across 9 consolidated product categories."
            result="85.3% accuracy, weighted F1 0.86, and macro F1 0.72 across 9 categories, against a roughly 55% majority-class baseline."
            proofLine="The weakest classes are named openly: payday, title, and personal loans (F1 0.44) and vehicle loans (F1 0.55), mostly from real semantic overlap between categories."
            visual={
              <FlowThumbnail
                label="Spoken or typed complaint transformed into a ranked product category"
                input={['Complaint text', 'English or Urdu · voice or typed']}
                outputTitle="Product category"
                output={['9 classes', 'ranked confidence']}
                footerLeft="85.3% accuracy"
                footerRight="3.8M rows · 12GB RAM"
              />
            }
            evaluation="Macro F1 sits well below accuracy because credit reporting dominates the data and minority classes are harder. The 55% baseline is an estimate in the README, not a separately run experiment, and Urdu is translated to English before classification, not understood natively."
            metrics={[
              { value: '85.3%', label: 'accuracy' },
              { value: '0.86', label: 'weighted F1' },
              { value: '0.72', label: 'macro F1' },
              { value: '3.8M', label: 'training rows' },
            ]}
            architecture={
              <FlowArchitecture
                label="Out-of-core complaint classification pipeline"
                top="CFPB complaints · ~8GB CSV, narratives only"
                steps={[
                  { name: 'Polars', note: 'lazy scan' },
                  { name: 'HashingVectorizer', note: '2^19 features, no vocabulary' },
                  { name: 'SGDClassifier', note: 'partial_fit, 30K batches' },
                ]}
                output="9 product categories · class-weighted"
                bottom={[
                  { name: 'Streamlit app', note: 'ranked confidence, radar chart' },
                  { name: 'Urdu + voice', note: 'speech-to-text, translate, classify' },
                ]}
              />
            }
            repoUrl="https://github.com/MaryumAkram16/Consumer-Complaint-Product-Classification"
            demoType="complaint"
            deepDive={{
              challenge:
                "Training on 8GB of text with 12GB of RAM. Hashing avoids storing a vocabulary, and class weights had to be computed manually because partial_fit does not support the 'balanced' option.",
              retrospective:
                "Raising epochs from 1 to 3 and adding bigrams moved accuracy only from 85.26% to 85.31%, so the linear bag-of-words model had converged. The README's next steps are merging the most-confused categories, comparing ComplementNB, and fine-tuning DistilBERT on a stratified subsample.",
              metrics:
                "85.3% accuracy, weighted F1 0.86, and macro F1 0.72. Credit reporting reaches F1 0.92 while payday, title, and personal loans reach 0.44.",
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
            evidenceLinks={[
              { label: 'Model manifest and reported metrics', url: 'https://github.com/MaryumAkram16/Resume-Screener/blob/main/model_manifest.json' },
              { label: 'Artifact verification workflow', url: 'https://github.com/MaryumAkram16/Resume-Screener/blob/main/.github/workflows/verify.yml' },
            ]}
            demoType="resume"
            videoLinks={[]}
          />
          <CaseStudy
            title="AI-Human Text Detector"
            collapsed
            description="Classical ML text classification"
            tags={['scikit-learn', 'Stylometry', 'TF-IDF', 'Streamlit']}
            problem="Telling AI-generated essays from human-written ones matters for academic integrity and editorial review. The question was how far classic, explainable ML can go without transformers."
            solution="Cleaned 487,235 essays, engineered four stylometric features (word count, sentence-length variance, lexical diversity, punctuation density), added TF-IDF unigrams and bigrams, and compared three algorithm families side by side in a live Streamlit app."
            result="99.36% accuracy and F1 with Logistic Regression, ahead of Random Forest (99.15%) and Naive Bayes (95.47%) on a 97,447-row held-out test set."
            proofLine="Documented risks: word count is partly a dataset-specific shortcut, and an informal test on a professional bio was misclassified, which the README attributes to domain shift."
            visual={
              <FlowThumbnail
                label="Pasted text transformed into predictions from three models"
                input={['Pasted essay text', 'word_count · sentence variance']}
                outputTitle="3 models side by side"
                output={['Logistic Regression', 'Random Forest · Naive Bayes']}
                footerLeft="99.36% accuracy"
                footerRight="487K essays"
              />
            }
            evaluation="Metrics come from a single held-out split of one Kaggle dataset, so they describe this dataset, not AI-text detection in general. There were 625 errors out of 97,447 test rows, roughly balanced in both directions."
            metrics={[
              { value: '99.36%', label: 'Logistic Regression' },
              { value: '99.15%', label: 'Random Forest' },
              { value: '95.47%', label: 'Naive Bayes' },
              { value: '487K', label: 'essays after cleaning' },
            ]}
            architecture={
              <FlowArchitecture
                label="AI-Human Text Detector pipeline"
                top="Kaggle essays · ~500K raw rows, duplicates and nulls removed"
                steps={[
                  { name: 'Stylometric', note: '4 features' },
                  { name: 'TF-IDF', note: '5,000 uni + bigrams' },
                  { name: 'Models', note: 'LR, RF, Naive Bayes' },
                ]}
                output="Held-out evaluation · 97,447 test rows"
                bottom={[
                  { name: 'Streamlit app', note: 'all three models, side by side' },
                  { name: 'Methods page', note: 'charts and limitations' },
                ]}
              />
            }
            repoUrl="https://github.com/MaryumAkram16/AI-Human-Text-Detector"
            evidenceLinks={[
              { label: 'Model-comparison results', url: 'https://github.com/MaryumAkram16/AI-Human-Text-Detector/blob/main/table_model_comparison.csv' },
              { label: 'README: dataset limitations', url: 'https://github.com/MaryumAkram16/AI-Human-Text-Detector#honest-limitations' },
            ]}
            demoType="detector"
            videoLinks={[{ label: 'Open live app', url: 'https://ai-human-text-detection.streamlit.app' }]}
            deepDive={{
              challenge:
                "Not trusting a 99% score. Feature importance showed word count ranking second, partly because this dataset's AI essays run shorter, so I documented it as a shortcut instead of claiming general detection.",
              retrospective:
                "The model was trained and tested on one dataset, so the honest next step is evaluating on essays from other sources. The basic regex sentence splitter could also distort sentence-length features around abbreviations.",
              metrics:
                "Logistic Regression scored 99.36% accuracy and F1, Random Forest 99.15%, and Naive Bayes 95.47% accuracy (95.45% F1) on 97,447 held-out rows.",
            }}
          />
        </ProjectGroup>

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
