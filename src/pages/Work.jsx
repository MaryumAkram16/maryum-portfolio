import { useState } from 'react'
import { BOOKING_URL } from '../siteConfig.js'
import ArchitectureDiagram from '../components/ArchitectureDiagram.jsx'
import medilensVoiceAgent from '../assets/images/medilens/voice-appointment-agent.png'
import medilensComplaint from '../assets/images/medilens/complaint-management.png'
import medilensAdmin from '../assets/images/medilens/admin-command-center.png'
import roshanaiIntelligence from '../assets/images/roshanai/intelligence-layer.png'
import roshanaiSkillGap from '../assets/images/roshanai/skill-gap-analysis.png'
import roshanaiProposal from '../assets/images/roshanai/proposal-generator.png'
import skillsyncDashboard from '../assets/images/skillsync/dashboard.png'
import skillsyncRadar from '../assets/images/skillsync/radar.png'
import skillsyncAssessment from '../assets/images/skillsync/skill-assessment.png'
import skillsyncParser from '../assets/images/skillsync/parser.png'
import skillsyncMentor from '../assets/images/skillsync/career-mentor.png'
import './Work.css'

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((img) => (
        <figure key={img.src}>
          <img src={img.src} alt={img.caption} loading="lazy" />
          <figcaption>{img.caption}</figcaption>
        </figure>
      ))}
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
  proofLine,
  thumb,
  thumbCaption,
  images,
  scopeNote,
  repoUrl,
  videoLinks,
  deepDive,
}) {
  const [open, setOpen] = useState(false)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)

  return (
    <article className="case-card">
      <div className="case-thumb-wrap">
        <img className="case-thumb" src={thumb} alt={thumbCaption} loading="lazy" />
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
          <dd>{result}</dd>
        </div>
      </dl>

      {proofLine && <p className="proof-line">{proofLine}</p>}

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
          <ArchitectureDiagram />

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
  return (
    <main className="page work">
      <div className="container">
        <div className="section-head work-head">
          <p className="section-label">Projects I've built</p>
          <h1>
            Three production systems,<span className="hero-gradient"> all with real users</span>
          </h1>
          <p className="section-sub">
            Every project solved a real problem end-to-end. Each case study below shows the
            problem, the system I built, and the proof — screenshots, architecture, tests, and
            demo videos.
          </p>
        </div>

        <CaseStudy
          title="MediLens"
          description="Hospital intake automation"
          tags={['Voice Agent', 'Complaint Mgmt', 'Admin Dashboard']}
          problem="Hospital booking, complaints, and admin tracking were manual, staff-run processes."
          solution="A voice agent books, reschedules, and cancels appointments with no staff involved. Complaint management and an admin dashboard automate the rest."
          result="Independently tested by a professor via live link."
          thumb={medilensVoiceAgent}
          thumbCaption="Books, cancels, and reschedules appointments by voice — no staff involved"
          images={[
            {
              src: medilensVoiceAgent,
              caption: 'Books, cancels, and reschedules appointments by voice — no staff involved',
            },
            {
              src: medilensComplaint,
              caption: 'Independently tested by a professor via live link',
            },
            { src: medilensAdmin, caption: 'Admin dashboard for decision support' },
          ]}
          scopeNote="Voice Appointment Agent, Complaint Management, and Hospital Admin Command Center shown here are built by me. MediLens also includes a Lab Report Analyzer, Symptom Checker, and RAG Knowledge Base built by a collaborator (credited in the repo) — not shown in this case study."
          repoUrl="https://github.com/MaryumAkram16/medilens"
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
          thumb={roshanaiIntelligence}
          thumbCaption="Live market data from JSearch & Google Jobs"
          images={[
            { src: roshanaiIntelligence, caption: 'Live market data from JSearch & Google Jobs' },
            {
              src: roshanaiSkillGap,
              caption: '29 live jobs fetched and analyzed against the resume',
            },
            {
              src: roshanaiProposal,
              caption: 'Generated output: job analysis, rate suggestion, tailored proposal',
            },
          ]}
          repoUrl="https://github.com/MaryumAkram16/RoshanAI"
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
          thumb={skillsyncDashboard}
          thumbCaption="Real user data and journey"
          images={[
            { src: skillsyncDashboard, caption: 'Real user data and journey' },
            { src: skillsyncRadar, caption: 'Live market demand scan for a target role' },
            {
              src: skillsyncAssessment,
              caption: 'Adaptive quiz verifying claimed skills against real performance',
            },
            {
              src: skillsyncParser,
              caption: 'Resume + role + country parsed into live job matches with ATS scoring',
            },
            {
              src: skillsyncMentor,
              caption: 'Recommendations built from assessment results and live market data',
            },
          ]}
          scopeNote="Dashboard, Radar, Skill Assessment, Parser, and Career Mentor shown here are built by me. Interview Prep and Roadmap features were built by a collaborator (credited in the repo) and are not shown here."
          repoUrl="https://github.com/MaryumAkram16/Skillsync-AI"
          videoLinks={[
            { label: 'Watch Skill Assessment demo', url: 'https://www.youtube.com/watch?v=QfERaD_cMY8' },
            { label: 'Watch Career Mentor demo', url: 'https://www.youtube.com/watch?v=-qOdwym_3Ko' },
          ]}
        />

        <div className="cta-bottom">
          <a className="cta-button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a 20-minute intro call
          </a>
        </div>
      </div>
    </main>
  )
}

export default Work
