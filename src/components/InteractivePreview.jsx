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
  receipt: {
    title: 'Messy receipt text → validated fields → reliable report.',
    tabs: [
      { id: 'extract', label: 'Structured extract' },
      { id: 'jobs', label: 'Background jobs' },
      { id: 'reports', label: 'PDF reports' },
    ],
  },
  gharfix: {
    title: 'Mixed-language request → ranked provider → booked job.',
    tabs: [
      { id: 'intent', label: 'Request to intent' },
      { id: 'ranking', label: 'Provider ranking' },
      { id: 'lifecycle', label: 'Booking lifecycle' },
    ],
  },
  lumina: {
    title: 'Voice question → order lookup → spoken answer.',
    tabs: [
      { id: 'call', label: 'Call to intent' },
      { id: 'lookup', label: 'Order lookup' },
      { id: 'analysis', label: 'Post-call analysis' },
    ],
  },
  detector: {
    title: 'Pasted text → stylometric features → three model verdicts.',
    tabs: [
      { id: 'models', label: 'Model comparison' },
      { id: 'features', label: 'Features' },
      { id: 'shift', label: 'Domain shift' },
    ],
  },
  complaint: {
    title: 'Complaint text → hashed features → product category.',
    tabs: [
      { id: 'prediction', label: 'Prediction' },
      { id: 'weak', label: 'Weakest classes' },
      { id: 'failure', label: 'Failure trace' },
    ],
  },
  refresh: {
    title: 'Page signals → baseline and models → ranked review queue.',
    tabs: [
      { id: 'compare', label: 'Baseline vs models' },
      { id: 'split', label: 'Split check' },
      { id: 'playbook', label: 'Action playbook' },
    ],
  },
  widget: {
    title: 'Public submission → defenses → stored lead → live dashboard.',
    tabs: [
      { id: 'path', label: 'Submission path' },
      { id: 'bots', label: 'Bot defense' },
      { id: 'dash', label: 'Dashboard' },
    ],
  },
  resume: {
    title: 'Resume text → category prediction → job-fit score.',
    tabs: [
      { id: 'results', label: 'Results panel' },
      { id: 'comparison', label: 'Model comparison' },
      { id: 'test', label: 'Real test case' },
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
  return <div className="demo-explorer"><div className="demo-profile"><div className="demo-avatar">AR</div><div><strong>Alex R. · Explorer</strong><span>Freelancer career intelligence</span></div><small>Live-data workflow</small></div><div className="demo-metrics"><div><strong>29</strong><span>jobs analyzed</span></div><div><strong>78%</strong><span>skill match</span></div><div><strong>$75–110</strong><span>rate suggestion</span></div></div><div className="demo-keywords"><span>JSearch</span><span>SerpAPI</span><span>skill gap</span><span>proposal output</span></div></div>
}

function ReceiptPanel({ tab }) {
  if (tab === 'jobs') return <div className="demo-panel-grid"><div className="demo-stat"><span>Job status</span><strong>succeeded</strong><small>1 attempt · idempotent key</small></div><div className="demo-stat"><span>Failure safety</span><strong>needs_review</strong><small>Retry, quarantine, and alert path</small></div><div className="demo-timeline"><span className="demo-dot active" />Queued <b>→</b><span className="demo-dot active" />Validated <b>→</b><span className="demo-dot active" />Completed</div></div>
  if (tab === 'reports') return <div className="demo-bio"><div className="demo-bio-before"><span>Report generator input</span>2 persisted extractions · PKR + USD · date range optional</div><div className="demo-bio-arrow">↓</div><div className="demo-bio-after"><span>Safe PDF output</span>spending-report-db9ffe4832.pdf · totals, vendors, currencies, needs-review rate</div></div>
  return <div className="demo-extraction"><div className="demo-extraction-column"><span>Input text</span><code>Cafe Aroma<br />12 Jun 2025<br />Total: PKR 1082</code></div><div className="demo-bio-arrow">→</div><div className="demo-extraction-column valid"><span>Validated JSON</span><code>vendor: Cafe Aroma<br />total_amount: 1082<br />confidence: 0.95<br />needs_review: false</code></div></div>
}

function GharFixPanel({ tab }) {
  if (tab === 'ranking') return <div className="demo-calibration"><div className="demo-stat"><span>Provider ranking</span><strong>7 weighted factors</strong><small>Real Google Maps providers scored per request</small></div><Bar label="Distance / travel time" value={20} /><Bar label="Availability" value={20} /><Bar label="Reviews + recency" value={15} tone="gold" /><Bar label="Reliability" value={15} /><Bar label="Skill match" value={15} /><Bar label="Price vs. budget" value={10} /><Bar label="Cancellation rate" value={5} /></div>
  if (tab === 'lifecycle') return <div className="demo-panel-grid"><div className="demo-stat"><span>Booking</span><strong>Confirmed</strong><small>Slot re-checked before confirming</small></div><div className="demo-stat"><span>Low rating</span><strong>≤ 2 stars</strong><small>Escalates to dispute workflow</small></div><div className="demo-timeline"><span className="demo-dot active" />Booked <b>→</b><span className="demo-dot active" />En route <b>→</b><span className="demo-dot active" />Completed <b>→</b><span className="demo-dot" />Feedback</div></div>
  return <div className="demo-extraction"><div className="demo-extraction-column"><span>Input (Roman Urdu)</span><code>AC theek karwana hai,<br />kal shaam, Lahore</code></div><div className="demo-bio-arrow">→</div><div className="demo-extraction-column valid"><span>Extracted intent</span><code>service: ac_repair<br />language: roman_urdu<br />when: tomorrow evening<br />clarify_needed: false</code></div></div>
}

function LuminaPanel({ tab }) {
  if (tab === 'lookup') return <div className="demo-panel-grid"><div className="demo-stat"><span>Intent</span><strong>track_order</strong><small>Webhook payload: order_id, phone, email</small></div><div className="demo-stat"><span>Google Sheets</span><strong>Row found</strong><small>Status, carrier, delivery date returned</small></div><div className="demo-timeline"><span className="demo-dot active" />Webhook <b>→</b><span className="demo-dot active" />Sheets lookup <b>→</b><span className="demo-dot active" />Business rules <b>→</b><span className="demo-dot" />Spoken reply</div></div>
  if (tab === 'analysis') return <div className="demo-panel-grid"><div className="demo-stat"><span>Gemini 2.5 Flash</span><strong>Post-call analysis</strong><small>Sentiment and call metrics after each call</small></div><div className="demo-stat"><span>Cost model</span><strong>~$81 / month</strong><small>Estimate for 100–500 calls</small></div><div className="demo-timeline"><span className="demo-dot active" />Call ends <b>→</b><span className="demo-dot active" />Transcript analyzed <b>→</b><span className="demo-dot" />Metrics stored</div></div>
  return <div className="demo-conversation"><div className="demo-status"><span className="demo-pulse" /> Voice order tracking · sample data</div><div className="demo-bubble assistant">Hi, I am Lumina. How can I help with your order?</div><div className="demo-bubble user">Where is my order?</div><div className="demo-bubble assistant">Your order has shipped. I can read you the carrier and delivery date.</div></div>
}

function DetectorPanel({ tab }) {
  if (tab === 'features') return <div className="demo-resume-results"><div className="demo-resume-result-head"><span>Stylometric features</span><strong>4 engineered signals</strong><small>Plus TF-IDF unigrams and bigrams, capped at 5,000</small></div><div className="demo-keywords"><span>word_count</span><span>sentence_len_std</span><span>lexical_diversity</span><span>punct_density</span></div></div>
  if (tab === 'shift') return <div className="demo-panel-grid"><div className="demo-stat"><span>Dataset shortcut</span><strong>word_count</strong><small>Second in feature importance, partly dataset-specific</small></div><div className="demo-stat"><span>Informal test</span><strong>Misclassified</strong><small>Professional bio, attributed to domain shift</small></div><div className="demo-timeline"><span className="demo-dot active" />One Kaggle dataset <b>→</b><span className="demo-dot active" />Strong held-out score <b>→</b><span className="demo-dot" />Not proven on other sources</div></div>
  return <div className="demo-model-table"><div><span>Model</span><span>Accuracy</span><span>F1</span></div><div><strong>Logistic Regression</strong><b>99.36%</b><b>99.36%</b></div><div><span>Random Forest</span><b>99.15%</b><b>99.15%</b></div><div><span>Naive Bayes</span><b>95.47%</b><b>95.45%</b></div></div>
}

function ComplaintPanel({ tab }) {
  if (tab === 'weak') return <div className="demo-calibration"><div className="demo-stat"><span>F1 by class</span><strong>Strong to weak</strong><small>Weakest classes overlap semantically with others</small></div><Bar label="Credit reporting" value={92} /><Bar label="Mortgage" value={85} /><Bar label="Vehicle loan or lease" value={55} tone="gold" /><Bar label="Payday, title, personal loan" value={44} tone="gold" /></div>
  if (tab === 'failure') return <div className="demo-bio"><div className="demo-bio-before"><span>Spoken Urdu complaint about a fraudulent card charge</span>Speech recognition mistranscribed the key phrase before translation</div><div className="demo-bio-arrow">↓</div><div className="demo-bio-after"><span>Classified as Debt collection · 41.4%</span>The classifier handled its input correctly. The error started in speech-to-text, so the fraud signal never reached it.</div></div>
  return <div className="demo-calibration"><div className="demo-stat"><span>Predicted category</span><strong>Credit card or prepaid card</strong><small>Softmax over raw decision scores · sample</small></div><Bar label="Credit card or prepaid card" value={62} /><Bar label="Bank account or service" value={18} tone="gold" /><Bar label="Debt collection" value={9} /></div>
}

function RefreshPanel({ tab }) {
  if (tab === 'split') return <div className="demo-panel-grid"><div className="demo-stat"><span>Client-holdout split</span><strong>P@50 0.76</strong><small>Random Forest, 0 client overlap</small></div><div className="demo-stat"><span>Naive random split</span><strong>P@50 0.88</strong><small>27 overlapping clients, inflated by memorization</small></div><div className="demo-timeline"><span className="demo-dot active" />Group by client <b>→</b><span className="demo-dot active" />22 train, 6 test clients <b>→</b><span className="demo-dot active" />Honest comparison</div></div>
  if (tab === 'playbook') return <div className="demo-panel-grid"><div className="demo-stat"><span>monitor</span><strong>12,177</strong><small>No action this review cycle</small></div><div className="demo-stat"><span>review_for_refresh</span><strong>4,003</strong><small>Real CTR gap plus moderate staleness</small></div><div className="demo-stat"><span>flag_for_tracking_audit</span><strong>546</strong><small>Top position, 0% CTR: likely tracking, not content</small></div></div>
  return <div className="demo-model-table"><div><span>Method</span><span>P@50</span><span>Type</span></div><div><strong>Baseline rule</strong><b>0.90</b><b>rule</b></div><div><span>Logistic Regression</span><b>0.92</b><b>model</b></div><div><span>Random Forest</span><b>0.76</b><b>model</b></div></div>
}

function WidgetPanel({ tab }) {
  if (tab === 'bots') return <div className="demo-panel-grid"><div className="demo-stat"><span>Naive bots</span><strong>100% blocked</strong><small>Proof-of-work challenge</small></div><div className="demo-stat"><span>Real visitors</span><strong>0% false positives</strong><small>About 117 ms average solve cost</small></div><div className="demo-timeline"><span className="demo-dot active" />Challenge issued <b>→</b><span className="demo-dot active" />Solved by browser <b>→</b><span className="demo-dot active" />Submission accepted</div></div>
  if (tab === 'dash') return <div className="demo-panel-grid"><div className="demo-stat"><span>Dashboard</span><strong>Server-rendered</strong><small>Submission data HTML-escaped against stored XSS</small></div><div className="demo-stat"><span>Live updates</span><strong>SSE</strong><small>New leads appear without a refresh</small></div><div className="demo-timeline"><span className="demo-dot active" />Submission stored <b>→</b><span className="demo-dot active" />Event pushed <b>→</b><span className="demo-dot active" />Table updates</div></div>
  return <div className="demo-panel-grid"><div className="demo-stat"><span>Bad payload</span><strong>4xx, not 500</strong><small>Validation rejects malformed input</small></div><div className="demo-stat"><span>Flood</span><strong>429, then recovers</strong><small>Rate limiting keeps the service up</small></div><div className="demo-timeline"><span className="demo-dot active" />Validate <b>→</b><span className="demo-dot active" />Rate limit <b>→</b><span className="demo-dot active" />Geo A then B <b>→</b><span className="demo-dot active" />Store <b>→</b><span className="demo-dot" />Email (non-blocking)</div></div>
}

function ResumePanel({ tab }) {
  if (tab === 'comparison') return <div className="demo-model-table"><div><span>Model</span><span>MAE</span><span>R²</span></div><div><strong>Gradient Boosting</strong><b>8.69</b><b>0.814</b></div><div><span>Tuned Random Forest</span><b>8.98</b><b>0.801</b></div><div><span>Random Forest</span><b>9.04</b><b>0.799</b></div></div>
  if (tab === 'test') return <div className="demo-panel-grid"><div className="demo-stat"><span>Genuine HR posting</span><strong>51.8</strong><small>Moderate fit</small></div><div className="demo-stat"><span>Unrelated Chef posting</span><strong>2.8</strong><small>Weak fit</small></div><div className="demo-timeline"><span className="demo-dot active" />Same resume <b>→</b><span className="demo-dot active" />Two job descriptions <b>→</b><span className="demo-dot active" />~49-point separation</div></div>
  return <div className="demo-resume-results"><div className="demo-resume-result-head"><span>Predicted category</span><strong>Human Resources</strong><small>confidence breakdown available</small></div><div className="demo-metrics"><div><strong>68.0%</strong><span>Stage 1 accuracy</span></div><div><strong>8.69</strong><span>final MAE</span></div><div><strong>0.814</strong><span>final R²</span></div></div><div className="demo-keywords"><span>TF-IDF</span><span>Logistic Regression</span><span>Gradient Boosting</span><span>20 categories</span></div></div>
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
  const handleTabKeyDown = (event, index) => {
    let nextIndex
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % demo.tabs.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + demo.tabs.length) % demo.tabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = demo.tabs.length - 1
    if (nextIndex === undefined) return
    event.preventDefault()
    const nextTab = demo.tabs[nextIndex]
    setTab(nextTab.id)
    document.getElementById(`${type}-tab-${nextTab.id}`)?.focus()
  }

  return (
    <section className={`interactive-preview demo-${type}`} aria-labelledby={`${type}-preview-title`}>
      <div className="demo-header">
        <div>
          <p className="demo-eyebrow">Interactive preview · repository features</p>
          <h3 id={`${type}-preview-title`}>{demo.title}</h3>
        </div>
        <span className="demo-live"><span className="demo-pulse" aria-hidden="true" />Sample data</span>
      </div>
      <div className="demo-tabs" role="tablist" aria-label="Project feature modules">
        {demo.tabs.map((item, index) => (
          <button
            key={item.id}
            id={`${type}-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            aria-controls={`${type}-tabpanel`}
            tabIndex={tab === item.id ? 0 : -1}
            className={tab === item.id ? 'active' : ''}
            onClick={() => setTab(item.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        className="demo-content"
        id={`${type}-tabpanel`}
        role="tabpanel"
        aria-labelledby={`${type}-tab-${tab}`}
        tabIndex={0}
      >
        {type === 'medilens' && <MediLensPanel tab={tab} />}
        {type === 'roshanai' && <RoshanPanel tab={tab} />}
        {type === 'skillsync' && <SkillSyncPanel tab={tab} />}
        {type === 'receipt' && <ReceiptPanel tab={tab} />}
        {type === 'resume' && <ResumePanel tab={tab} />}
        {type === 'gharfix' && <GharFixPanel tab={tab} />}
        {type === 'lumina' && <LuminaPanel tab={tab} />}
        {type === 'detector' && <DetectorPanel tab={tab} />}
        {type === 'complaint' && <ComplaintPanel tab={tab} />}
        {type === 'refresh' && <RefreshPanel tab={tab} />}
        {type === 'widget' && <WidgetPanel tab={tab} />}
      </div>
      <p className="demo-note">A portfolio-safe simulation of the feature flow. No live API calls or private user data. Read the full case study below for proof, architecture, and demo videos.</p>
    </section>
  )
}
