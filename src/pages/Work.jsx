import { useState } from 'react'
import { BOOKING_URL } from '../siteConfig.js'
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
}) {
  const [open, setOpen] = useState(false)

  return (
    <article className="case-card">
      <div className="case-thumb-wrap">
        <img className="case-thumb" src={thumb} alt={thumbCaption} loading="lazy" />
      </div>

      <h2>{title}</h2>
      <p className="case-description">{description}</p>

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

      <button
        type="button"
        className="view-details-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {open ? 'Hide details' : 'View details'}
      </button>

      {open && (
        <div className="case-expanded">
          <Gallery images={images} />
          {scopeNote && <p className="scope-note">{scopeNote}</p>}
        </div>
      )}
    </article>
  )
}

function Work() {
  return (
    <main className="page work">
      <div className="container">
        <h1>Work</h1>

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
