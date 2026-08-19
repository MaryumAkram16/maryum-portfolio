import './ArchitectureDiagram.css'

function ArchitectureDiagram() {
  return (
    <div className="arch-diagram">
      <div className="arch-row">
        <div className="arch-box arch-box-primary">User</div>
      </div>
      <div className="arch-arrow">↓</div>

      <div className="arch-row">
        <div className="arch-box arch-box-primary">React 19 + Vite Frontend</div>
      </div>
      <div className="arch-arrow">↓ calls in parallel ↓</div>

      <div className="arch-row arch-row-branch">
        <div className="arch-box">
          Firebase
          <span>Auth + Firestore</span>
        </div>
        <div className="arch-box">
          JSearch + SerpAPI
          <span>live postings + salary data</span>
        </div>
        <div className="arch-box">
          GPT-4o
          <span>AI reasoning</span>
        </div>
        <div className="arch-box">
          PDF.js / Mammoth
          <span>resume parsing, jsPDF export</span>
        </div>
      </div>
      <div className="arch-arrow">↓</div>

      <div className="arch-row">
        <div className="arch-box arch-box-primary">
          Gap Score, learning roadmap, SEO profile, tailored proposal
        </div>
      </div>
      <div className="arch-arrow">↓</div>

      <div className="arch-row">
        <div className="arch-box arch-box-primary">Stored in Firestore, exported as PDF</div>
      </div>
    </div>
  )
}

export default ArchitectureDiagram
