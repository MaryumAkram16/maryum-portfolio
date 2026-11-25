// Code-drawn "input → output" thumbnails, shared by the Work case studies and
// the Landing/Work project cards (ProjectCard). Styles live in FlowThumbnail.css
// so they load with whichever page renders a thumbnail first.
import './FlowThumbnail.css'

export function FlowThumbnail({ label, input, output, outputTitle, footerLeft, footerRight, compact = false }) {
  return (
    <div className={`receipt-thumb ${compact ? 'receipt-thumb-compact' : ''}`} role="img" aria-label={label}>
      <div className="receipt-thumb-window"><span /> <span /> <span /></div>
      <div className="receipt-thumb-grid">
        <div className="receipt-thumb-input">{input.map((line) => <span key={line}>{line}<br /></span>)}</div>
        <div className="receipt-thumb-arrow">→</div>
        <div className="receipt-thumb-output"><b>{outputTitle}</b><br />{output.map((line) => <span key={line}>{line}<br /></span>)}</div>
      </div>
      <div className="receipt-thumb-footer"><span><span className="receipt-check">✓</span> {footerLeft}</span> <span>{footerRight}</span></div>
    </div>
  )
}

// Content for each thumbnail, so the case study and the project card stay identical.
export const thumbnails = {
  lumina: {
    label: 'Spoken cancellation request checked against order policy',
    input: ['"Cancel my order"', 'Retell call · signed request'],
    outputTitle: 'cancel-order',
    output: ['Order ownership verified', 'Eligibility checked'],
    footerLeft: 'Retell AI',
    footerRight: 'TypeScript backend',
  },
  receipt: {
    label: 'Receipt text transformed into validated structured data',
    input: ['Cafe Aroma', '12 Jun 2025', 'Total: PKR 1082'],
    outputTitle: 'Validated output',
    output: ['vendor · date · total', 'currency · confidence'],
    footerLeft: 'needs_review: false',
    footerRight: '50 labelled eval cases',
  },
  gharfix: {
    label: 'Roman Urdu service request transformed into a ranked, booked provider',
    input: ['"AC theek karwana hai, kal shaam"', 'Roman Urdu · Lahore'],
    outputTitle: 'Booked provider',
    output: ['intent · area · slot', '7-factor ranked match'],
    footerLeft: '767 tests in CI',
    footerRight: 'scoring identical to n8n',
  },
  billing: {
    label: 'Metered API request transformed into an idempotent, priced usage event',
    input: ['POST /generate', 'tenant · idempotency_key'],
    outputTitle: 'Usage recorded once',
    output: ['quota checked · 429 / 402', 'cost in micro-dollars'],
    footerLeft: '46/46 tests',
    footerRight: 'signed + deduped webhooks',
  },
  widget: {
    label: 'Website visitor submission transformed into a protected, stored lead',
    input: ['POST /submissions', 'any origin · public'],
    outputTitle: 'Protected lead',
    output: ['validated · rate limited', 'geo enriched · stored'],
    footerLeft: '47/47 tests',
    footerRight: '100% naive bots blocked',
  },
}

export function ProjectThumbnail({ name, compact = false }) {
  const props = thumbnails[name]
  return props ? <FlowThumbnail {...props} compact={compact} /> : null
}
