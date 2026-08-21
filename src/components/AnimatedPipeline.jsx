export default function AnimatedPipeline({ steps }) {
  if (!steps?.length) return null

  return <section className="animated-pipeline" aria-labelledby="pipeline-title">
    <div className="pipeline-heading">
      <p className="section-label">How it works</p>
      <h2 id="pipeline-title">The system, one decision at a time.</h2>
      <p>Follow the path from input to outcome. This is a simplified explanation of the real pipeline described in the article.</p>
    </div>
    <div className="pipeline-track">
      {steps.map((step, index) => <article className="pipeline-step" key={step.title} style={{ '--step-delay': `${index * 120}ms` }}>
        <div className="pipeline-node" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
        <div className="pipeline-card">
          <span className="pipeline-kicker">{step.label}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
          {step.output && <div className="pipeline-output"><span>Output</span>{step.output}</div>}
        </div>
      </article>)}
    </div>
  </section>
}
