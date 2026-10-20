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

function GharFixThumbnail() {
  return (
    <div className="receipt-thumb" role="img" aria-label="Roman Urdu service request transformed into a ranked, booked provider">
      <div className="receipt-thumb-window"><span /> <span /> <span /></div>
      <div className="receipt-thumb-grid">
        <div className="receipt-thumb-input">"AC theek karwana hai, kal shaam"<br />Roman Urdu · Lahore</div>
        <div className="receipt-thumb-arrow">→</div>
        <div className="receipt-thumb-output"><b>Booked provider</b><br />intent · area · slot<br />7-factor ranked match</div>
      </div>
      <div className="receipt-thumb-footer"><span className="receipt-check">✓</span> 8 n8n workflows <span>~4–7 s end-to-end</span></div>
    </div>
  )
}

function GharFixArchitecture() {
  return (
    <div className="receipt-architecture" aria-label="GharFix orchestration architecture">
      <div className="receipt-arch-row receipt-arch-primary">User request · English, Urdu, or Roman Urdu</div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-output">Google Antigravity orchestrator · planning, tool choice, fallback</div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-grid">
        <div><b>WF1–3</b><span>intent, provider match, pricing</span></div>
        <div><b>WF4</b><span>slot check + booking race guard</span></div>
        <div><b>WF5</b><span>en route, arrived, completed, feedback</span></div>
        <div><b>WF6</b><span>disputes routed by type</span></div>
        <div><b>WF7</b><span>cancellation, reschedule, waitlist</span></div>
        <div><b>WF8</b><span>provider performance dashboard</span></div>
      </div>
      <div className="receipt-arch-arrow">↓</div>
      <div className="receipt-arch-row receipt-arch-grid receipt-arch-secondary">
        <div><b>Google Maps</b><span>geocoding, places, distance</span></div>
        <div><b>Supabase</b><span>PostgreSQL bookings + capacity</span></div>
        <div><b>Gmail API</b><span>booking and status emails</span></div>
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
}) {
  const [open, setOpen] = useState(false)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)

  return (
    <article
      className="case-card"
      id={title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
    >
      {/* Desktop: media left (~45%), text right; everything after .case-main spans full width */}
      <div className="case-main">
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
            <h3>
              {title}
              <span className="hero-gradient"> {description}</span>
            </h3>
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
        </div>
      </div>

      {demoType && <InteractivePreview type={demoType} />}

      <div className="case-links">
        {evidenceLinks.map((item) => (
          <a className="case-link" href={item.url} target="_blank" rel="noopener noreferrer" key={item.url}>
            {item.label}
          </a>
        ))}
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
  usePageTitle('Work — Maryum Akram | Case Studies in AI Automation')
  return (
    <main id="main-content" tabIndex={-1} className="page work">
      <div className="work-container">
        <div className="work-head">
          <p className="section-label">Projects I've built</p>
          <h1>
            11 projects,<span className="hero-gradient"> from classical ML to AI applications</span>
          </h1>
          <p className="section-sub">
            Grouped by type. Projects with a full case study show the problem, the system I built,
            and the proof — architecture, evaluation, reliability, and demo evidence, and honest
            limitations. The rest appear as short summary cards.
          </p>
        </div>

        <ProjectGroup id="end-to-end" title="End-to-end systems">
          <CaseStudy
            title="MediLens"
            description="Hospital workflow prototype"
            tags={['Voice Agent', 'Complaint Mgmt', 'Admin Dashboard']}
            problem="Hospital booking, complaints, and admin tracking were manual, staff-run processes."
            solution="The public repository contains n8n workflow exports for voice appointment handling, complaint management, and an admin command center, plus links to product demos."
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
          <CaseStudy
            title="GharFix"
            description="Agentic local-services booking"
            tags={['Agentic Orchestration', 'n8n', 'Multilingual', 'Google Maps']}
            problem="Finding a reliable home-service provider in Pakistan means calling around on WhatsApp and the phone, with unpredictable pricing and little support in local languages."
            solution="The public README documents an Antigravity-orchestrated design for English, Urdu, and Roman Urdu requests, with eight intended n8n workflows and a seven-factor provider-ranking model. The public repository currently contains the README, not the runnable application/workflows."
            result="Seven weighted provider-ranking factors are documented in the README; live matching, latency, and per-booking cost are not independently reproduced by public code or benchmark artifacts."
            resultBadge="Portfolio-reported: AI Seekho 2026 — Silver Tier, Phase 2 submission"
            proofLine="The README describes clarification, double-booking checks, and dispute handling as design behavior; the public tree has no implementation or test suite to verify runtime behavior."
            visual={<GharFixThumbnail />}
            evaluation="This is a documented design, not a publicly reproducible implementation. The README itself notes simulated availability, no stress test, and no real payment gateway; runtime behavior, costs, and speed should be treated as unverified estimates."
            metrics={[
              { value: '8', label: 'workflows documented' },
              { value: '7', label: 'ranking factors documented' },
              { value: '3', label: 'languages in design' },
            ]}
            architecture={<GharFixArchitecture />}
            repoUrl="https://github.com/MaryumAkram16/GharFix"
            evidenceLinks={[
              { label: 'README: ranking factors', url: 'https://github.com/MaryumAkram16/GharFix/blob/main/README.md#8-provider-matching-factors' },
              { label: 'README: prototype limitations', url: 'https://github.com/MaryumAkram16/GharFix/blob/main/README.md#14-limitations' },
            ]}
            demoType="gharfix"
            deepDive={{
              challenge:
                'Turning free-form, mixed-language requests into reliable bookings: the orchestrator had to decide when to act and when to ask a clarifying question, rank providers fairly on seven weighted factors, and avoid double-booking a slot.',
              retrospective:
                'Provider data depends on Google Places, so rural coverage is sparse, and some availability is simulated. The next upgrades would be a provider onboarding portal, live GPS tracking, Urdu voice input, and a real payment gateway.',
              metrics:
                'The README gives speed, cost, service-coverage, and city-coverage estimates, but the repository contains no runnable implementation, logs, or benchmark with which to reproduce them.',
            }}
          />
          <CaseStudy
            title="SkillSync AI"
            description="Career discovery pipeline"
            tags={['Dashboard', 'Radar', 'Assessment']}
            problem="Career discovery tools rarely check claimed skills against real, current market demand."
            solution="The public source includes an adaptive assessment flow, market-data integration paths, Firebase authentication, rate limiting, Firestore rules, and audit logging. These source artifacts do not establish production operation or an external security audit."
            result="The public repository includes a test suite and GitHub Actions workflow. Nine users is a portfolio-reported figure, not independently substantiated by the repository."
            proofLine="Repository code includes Firebase authentication, rate limiting, Firestore rules, and tests; these are implementation artifacts, not an external security audit."
            evaluation="The public repository includes tests and a CI workflow, and a public Actions run is available. It does not independently substantiate the portfolio-reported user count or a 94/94 test total, and the tests do not measure recommendation quality. No larger labeled evaluation set is published."
            metrics={[{ label: 'Users', value: '9 reported' }, { label: 'Tests', value: 'Public suite' }, { label: 'Quality benchmark', value: 'Not published' }]}
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
              { label: 'GitHub Actions runs', url: 'https://github.com/MaryumAkram16/Skillsync-AI/actions' },
            ]}
            demoType="skillsync"
            videoLinks={[
              { label: 'Watch Skill Assessment demo', url: 'https://www.youtube.com/watch?v=QfERaD_cMY8' },
              { label: 'Watch Career Mentor demo', url: 'https://www.youtube.com/watch?v=-qOdwym_3Ko' },
            ]}
          />
          <CaseStudy
            title="RoshanAI"
            description="Freelancer career intelligence"
            tags={['Market Data', 'Skill Gap Analysis', 'Proposal Generator']}
            problem="Freelancers had no easy way to see live market data when pricing and pitching for work."
            solution="The public React/TypeScript implementation integrates JSearch and SerpAPI with AI-assisted career analysis, profile/proposal generation, and salary-coaching flows. External API responses and output quality are not independently benchmarked."
            result="Three users and the fully solo build are portfolio-reported; the repository supports the implementation and integration paths, not those usage claims."
            resultBadge="Portfolio-reported: AI Seekho 2026 — Silver Tier, Phase 1 submission"
            evaluation="The repository contains integrations and UI/source for the career-intelligence flows. User count is portfolio-reported. Gap Score is an AI-generated estimate with no published ground-truth evaluation; API fallbacks mean current live-data availability and quality are not guaranteed."
            metrics={[{ label: 'Users', value: '3 reported' }, { label: 'Data source', value: 'API integrations' }, { label: 'Gap Score', value: 'Unbenchmarked estimate' }]}
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
                'Two things I would fix: the API keys are called client-side right now, which exposes them in the browser — a server-side proxy is the correct fix. And the original roshanai.com domain is dead; the live version now runs on GitHub Pages/Vercel instead.',
              metrics:
                'Three users is a portfolio-reported figure. Gap Score is an AI-generated estimate, not a measured accuracy figure; it has not been benchmarked against ground truth.',
            }}
          />
        </ProjectGroup>

        <ProjectGroup id="automations" title="n8n & voice automations">
          <CaseStudy
            title="Lumina"
            description="E-commerce voice support agent"
            tags={['Retell AI', 'n8n', 'Google Sheets', 'Gemini']}
            problem="E-commerce support is expensive and slow for simple requests like order tracking, and quality becomes inconsistent when sales spike."
            solution="Retell AI runs the voice call and sends the detected intent to an n8n webhook. n8n looks up the order in Google Sheets, applies the cancellation, return, and refund rules, and the answer is spoken back. Gemini analyzes sentiment after each call."
            result="A working end-to-end voice flow for order tracking, cancellations, returns, and refund checks, shown in a demo video, with a provider-free local demo in the repo."
            proofLine="Call, then intent, then n8n webhook, then Sheets lookup, then business rules, then spoken response, then post-call analytics."
            visual={
              <FlowThumbnail
                label="Spoken order question transformed into an order status answer"
                input={['"Where is my order?"', 'Voice call · sample']}
                outputTitle="track_order"
                output={['status · carrier', 'delivery_date']}
                footerLeft="5 architecture layers"
                footerRight="Retell + n8n + Sheets"
              />
            }
            evaluation="The repo publishes no call-volume or resolution-rate benchmark, so the evidence is the demo video, workflow screenshots, and the local demo. Cost figures are estimates as of February 2026, and the template is not certified for GDPR, PCI, or HIPAA."
            metrics={[
              { value: '5', label: 'architecture layers' },
              { value: '~$81', label: 'est. monthly cost, 100–500 calls' },
            ]}
            architecture={
              <FlowArchitecture
                label="Lumina voice support architecture"
                top="Customer call · Retell AI voice layer (speech-to-text, text-to-speech)"
                steps={[
                  { name: 'Intent', note: 'track, cancel, return' },
                  { name: 'n8n webhook', note: 'business logic' },
                  { name: 'Google Sheets', note: 'order records' },
                ]}
                output="Spoken response · order status, cancellation or return decision"
                bottom={[
                  { name: 'Gemini 2.5 Flash', note: 'post-call sentiment' },
                  { name: 'Analytics', note: 'call metrics' },
                ]}
              />
            }
            repoUrl="https://github.com/MaryumAkram16/Lumina-AI-Voice-Customer-Support-Agent"
            demoType="lumina"
            videoLinks={[{ label: 'Watch demo', url: 'https://youtu.be/P8TuDYV7eaY' }]}
            deepDive={{
              challenge:
                "Keeping a voice conversation fast when the answer depends on a spreadsheet lookup. Retell tool names have to match the n8n switch logic exactly, and slow Sheets queries risk webhook timeouts.",
              retrospective:
                "Google Sheets works as a lightweight database for a template, but the next step would be caching or a real database, written-down business-rule thresholds, and hosting close to the voice provider to cut latency.",
              metrics:
                "No call-volume or resolution benchmark is published. The repo documents a cost model of about $81 per month at 100–500 calls and $688+ per month at 5,000+ calls.",
            }}
          />
        </ProjectGroup>

        <ProjectGroup id="ml-projects" title="ML projects">
          <CaseStudy
            title="AI-Human Text Detector"
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
        </ProjectGroup>

        <ProjectGroup id="flyrank" title="FlyRank internship work">
          <CaseStudy
            title="Receipt Extractor"
            description="Reliable document intelligence API"
            tags={['Structured Extraction', 'FastAPI', 'Evaluation', 'Background Jobs']}
            problem="Receipt and invoice text is messy, but downstream software needs trusted vendor, date, amount, and currency fields without guessing."
            solution="A provider-agnostic FastAPI service validates input, extracts a strict schema, repairs malformed model output once, and routes uncertain results to human review instead of inventing values."
            result="Eight hand-labelled cases and an evaluator are public. The latest public CI run passed build and smoke checks but skipped the provider-backed evaluation."
            proofLine="The repository implements schema validation, bounded retries/repair, background jobs, SQLite persistence, PDF reports, and optional scheduled generation; these are source-supported capabilities, not production guarantees."
            images={[]}
            architecture={<ReceiptArchitecture />}
            repoUrl="https://github.com/MaryumAkram16/receipt-extractor"
            evidenceLinks={[
              { label: 'Eight labelled evaluation cases', url: 'https://github.com/MaryumAkram16/receipt-extractor/blob/main/evals/cases.json' },
              { label: 'Evaluation runner', url: 'https://github.com/MaryumAkram16/receipt-extractor/blob/main/evals/run_eval.py' },
              { label: 'Latest public CI run', url: 'https://github.com/MaryumAkram16/receipt-extractor/actions/runs/32571626750' },
            ]}
            demoType="receipt"
            deepDive={{
              challenge:
                'The hardest part was making a language model behave like a dependable API component: it had to return a strict schema, never invent a missing amount or currency, and fail safely when the input or model output was uncertain.',
              retrospective:
                'The current queue and SQLite state are intentionally single-process. The first production upgrade would be a durable queue and shared store such as Redis, plus external alerting and a larger labelled evaluation set.',
              metrics:
                'Eight hand-labelled evaluation cases are published. The latest public CI run skipped the provider-backed evaluation because provider credentials were unavailable; the source includes instrumentation for prompt version, model, token counts, duration, repair status, and needs-review outcomes.',
            }}
          />
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
          <CaseStudy
            title="Embeddable Widget Platform"
            description="Multi-tenant lead capture"
            tags={['FastAPI', 'SQLite', 'Multi-tenant', 'Bot Defense']}
            problem="A widget that collects data from strangers on any website has to survive bad input, floods, bots, and provider outages without losing or leaking a submission."
            solution="Tenants define a signup form or CTA popover and embed it with one script tag. Each submission passes validation, rate limiting, spam checks, a two-provider geo fallback, and storage, and an email side effect can fail without blocking success."
            result="47/47 tests passing, with multi-tenant isolation tests, a live two-origin end-to-end run, and a real-time dashboard."
            proofLine="Proof-of-work bot defense blocked 100% of naive bots with 0% false positives on real traffic, at about 117 ms average solve cost."
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
            evaluation="Bot-defense numbers come from the repo's evidence file and test traffic, not production. Rate limiting is in-memory and single-instance, authentication is API-key only, and password hashing is plain SHA-256, suitable only for local demos."
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
