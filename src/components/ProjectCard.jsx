// Compact project card shared by the Landing preview grid and the Work page.
// Styles live in Landing.css (.preview-card); Landing is loaded eagerly, so
// they are always available. Optional fields render only when present.
function ProjectCard({ project, flagship = false, children }) {
  const { title, desc, tags, text, result, badge } = project
  return (
    <article className={`preview-card ${flagship ? 'preview-card-flagship' : ''}`}>
      {tags && (
        <div className="tag-row">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <h3>{title}</h3>
      {desc && <p className="preview-desc">{desc}</p>}
      {text && <p>{text}</p>}
      {(result || badge) && (
        <p className="preview-result">
          {result && (
            <>
              <span className="preview-result-icon" aria-hidden="true">
                ✓
              </span>
              <span className="preview-result-text">{result}</span>
            </>
          )}
          {badge && (
            <>
              {result && <br />}
              <span className="preview-badge">
                <span className="preview-badge-icon" aria-hidden="true">
                  🏆
                </span>
                {badge}
              </span>
            </>
          )}
        </p>
      )}
      {children}
    </article>
  )
}

export default ProjectCard
