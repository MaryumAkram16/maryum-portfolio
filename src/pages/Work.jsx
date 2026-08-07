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

function Work() {
  return (
    <main className="page work">
      <div className="container">
        <h1>Work</h1>

        <article className="case-study">
          <h2>MediLens</h2>
          <p className="case-description">Hospital intake automation</p>
          <p className="case-summary">
            Hospital intake automation — a voice agent that books, reschedules, and cancels
            appointments with no staff involved, plus a complaint management system.
            Independently tested by a professor via live link.
          </p>
          <Gallery
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
          />
          <p className="scope-note">
            Voice Appointment Agent, Complaint Management, and Hospital Admin Command Center
            shown here are built by me. MediLens also includes a Lab Report Analyzer, Symptom
            Checker, and RAG Knowledge Base built by a collaborator (credited in the repo) —
            not shown in this case study.
          </p>
        </article>

        <article className="case-study">
          <h2>RoshanAI</h2>
          <p className="case-description">Freelancer career intelligence</p>
          <p className="case-summary">
            Career intelligence tool for freelancers — pulls live job market data and turns it
            into skill-gap analysis and tailored proposals. Fully solo build.
          </p>
          <Gallery
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
        </article>

        <article className="case-study">
          <h2>SkillSync AI</h2>
          <p className="case-description">Career discovery pipeline</p>
          <p className="case-summary">
            Career discovery pipeline with adaptive skill assessment and live market matching.
            Architected and built by me, production-hardened with real security and
            rate-limiting.
          </p>
          <p className="proof-line">
            9 real users. 94/94 CI tests passing. Adversarial security testing (12 payload
            tests), rate limiting, and audit logging in production.
          </p>
          <Gallery
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
          />
          <p className="scope-note">
            Dashboard, Radar, Skill Assessment, Parser, and Career Mentor shown here are built
            by me. Interview Prep and Roadmap features were built by a collaborator (credited
            in the repo) and are not shown here.
          </p>
        </article>

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
