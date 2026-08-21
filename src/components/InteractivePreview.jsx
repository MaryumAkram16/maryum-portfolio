import { useState } from 'react'

const DEMOS = {
  medilens: {
    title: 'Voice receptionist → appointment action → clinic operations.',
    tabs: [
      { id: 'receptionist', label: 'Voice receptionist' },
      { id: 'appointment', label: 'Appointment actions' },
      { id: 'operations', label: 'Complaints + admin' },
    ],
  },
  roshanai: {
    title: 'Market intelligence → career analysis → proposal and salary output.',
    tabs: [
      { id: 'intelligence', label: 'Intelligence layer' },
      { id: 'analysis', label: 'Career analysis' },
      { id: 'proposal', label: 'Proposal generator' },
      { id: 'salary', label: 'Salary coach' },
    ],
  },
  skillsync: {
    title: 'Assessment → market radar → parser → mentor recommendation.',
    tabs: [
      { id: 'assessment', label: 'Skill assessment' },
      { id: 'radar', label: 'Market radar' },
      { id: 'parser', label: 'Smart parser' },
      { id: 'mentor', label: 'Career mentor' },
    ],
  },
}

function Bar({ label, value, tone = 'teal' }) {
  return <div className="demo-bar-row"><div className="demo-bar-label"><span>{label}</span><strong>{value}%</strong></div><div className="demo-bar-track"><span className={`demo-bar-fill ${tone}`} style={{ width: `${value}%` }} /></div></div>
}

function MediLensPanel({ tab }) {
  if (tab === 'appointment') return <div className="demo-panel-grid"><div className="demo-stat"><span>Intent detected</span><strong>Reschedule</strong><small>Voice request classified</small></div><div className="demo-stat"><span>Next available</span><strong>Thu · 3:30 PM</strong><small>Doctor schedule checked</small></div><div className="demo-timeline"><span className="demo-dot active" />Check availability <b>→</b><span className="demo-dot active" />Update appointment <b>→</b><span className="demo-dot" />Send confirmation email</div></div>
  if (tab === 'operations') return <div className="demo-panel-grid"><div className="demo-stat"><span>Complaint center</span><strong>02 open</strong><small>Priority review required</small></div><div className="demo-stat"><span>Admin command center</span><strong>08 today</strong><small>Appointments automated</small></div><div className="demo-timeline"><span className="demo-dot active" />Voice log stored <b>→</b><span className="demo-dot active" />Complaint routed <b>→</b><span className="demo-dot active" />Staff notified</div></div>
  return <div className="demo-conversation"><div className="demo-status"><span className="demo-pulse" /> Voice appointment booking · sample data</div><div className="demo-bubble assistant">Welcome to MediLens. I can check doctor availability, book, cancel, or reschedule an appointment.</div><div className="demo-bubble user">Please reschedule my appointment for Thursday afternoon.</div><div className="demo-bubble assistant">Thursday at 3:30 PM is available. Shall I confirm the reschedule?</div><button type="button" className="demo-action">Confirm reschedule</button></div>
}

function RoshanPanel({ tab }) {
  if (tab === 'analysis') return <div className="demo-calibration"><div className="demo-stat"><span>Career analysis</span><strong>Skill gap identified</strong><small>Resume claims matched against live job postings</small></div><Bar label="Matched skills" value={78} /><Bar label="Market demand" value={88} tone="gold" /><Bar label="Proposal readiness" value={64} /></div>
  if (tab === 'proposal') return <div className="demo-bio"><div className="demo-bio-before"><span>Proposal generator input</span>Senior React developer · remote SaaS product · 3 years experience</div><div className="demo-bio-arrow">↓</div><div className="demo-bio-after"><span>Generated output</span>Job analysis, rate suggestion, tailored opening, relevant experience, and a complete client-ready proposal.</div></div>
  if (tab === 'salary') return <div className="demo-panel-grid"><div className="demo-stat"><span>Suggested local range</span><strong>$45–70/hr</strong><small>Based on role, experience, and location</small></div><div className="demo-stat"><span>International range</span><strong>$75–110/hr</strong><small>Market data from live postings</small></div><div className="demo-timeline"><span className="demo-dot active" />Role parsed <b>→</b><span className="demo-dot active" />Market rates fetched <b>→</b><span className="demo-dot" />Pricing advice generated</div></div>
  return <div className="demo-explorer"><div className="demo-profile"><div className="demo-avatar">AR</div><div><strong>Alex R. · Explorer</strong><span>Freelancer career intelligence</span></div><small>Live-data workflow</small></div><div className="demo-metrics"><div><strong>29</strong><span>jobs analyzed</span></div><div><strong>78%</strong><span>skill match</span></div><div><strong>$75–110</strong><span>rate suggestion</span></div></div><div className="demo-keywords"><span>JSearch</span><span>Google Jobs</span><span>skill gap</span><span>proposal output</span></div></div>
}

function SkillSyncPanel({ tab }) {
  if (tab === 'radar') return <div className="demo-calibration"><div className="demo-stat"><span>Market radar</span><strong>Backend automation</strong><small>Live demand scan for target role</small></div><Bar label="Python" value={91} /><Bar label="API development" value={84} /><Bar label="Automation" value={76} tone="gold" /></div>
  if (tab === 'parser') return <div className="demo-panel-grid"><div className="demo-stat"><span>Resume</span><strong>Parsed</strong><small>Skills and experience extracted</small></div><div className="demo-stat"><span>Target role</span><strong>Backend engineer</strong><small>Country: Pakistan</small></div><div className="demo-timeline"><span className="demo-dot active" />Resume parsed <b>→</b><span className="demo-dot active" />Live jobs matched <b>→</b><span className="demo-dot" />ATS score calculated</div></div>
  if (tab === 'mentor') return <div className="demo-bio"><div className="demo-bio-before"><span>Career mentor input</span>Assessment results + market radar + parsed profile</div><div className="demo-bio-arrow">↓</div><div className="demo-bio-after"><span>Personalized recommendation</span>Strengthen API security, ship one automation project, then practice role-specific interview questions.</div></div>
  return <div className="demo-assessment"><div className="demo-question"><span>Skill assessment · question 03 / 10</span><strong>How would you protect a public API from repeated abusive requests?</strong></div><div className="demo-options"><button type="button">Add rate limiting and audit logs</button><button type="button">Expose the provider key in the client</button><button type="button">Remove authentication</button></div><small>Assessment results feed the radar, mentor, and roadmap recommendations.</small></div>
}

export default function InteractivePreview({ type }) {
  const demo = DEMOS[type]
  const [tab, setTab] = useState(demo.tabs[0].id)
  return <section className={`interactive-preview demo-${type}`} aria-label="Interactive case study preview using sample data"><div className="demo-header"><div><p className="demo-eyebrow">Interactive preview · repository features</p><h3>{demo.title}</h3></div><span className="demo-live"><span className="demo-pulse" /> Sample data</span></div><div className="demo-tabs" role="tablist" aria-label="Project feature modules">{demo.tabs.map((item) => <button key={item.id} type="button" role="tab" aria-selected={tab === item.id} className={tab === item.id ? 'active' : ''} onClick={() => setTab(item.id)}>{item.label}</button>)}</div><div className="demo-content">{type === 'medilens' && <MediLensPanel tab={tab} />}{type === 'roshanai' && <RoshanPanel tab={tab} />}{type === 'skillsync' && <SkillSyncPanel tab={tab} />}</div><p className="demo-note">A portfolio-safe simulation of the feature flow. No live API calls or private user data. Read the full case study below for proof, architecture, and demo videos.</p></section>
}
