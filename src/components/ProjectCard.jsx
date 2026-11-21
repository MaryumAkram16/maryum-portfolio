// Compact project card shared by the Landing preview grid and the Work page.
// Styles live in Landing.css (.preview-card); Landing is loaded eagerly, so
// they are always available. Optional fields render only when present.
import { ProjectThumbnail } from './FlowThumbnail.jsx'

function ProjectCard({ project, flagship = false, children }) {
  const { title, desc, tags, text, result, badge, image, imageAlt, thumbnail, evidenceUrl, evidenceLabel } = project
  return (
    <article className={`preview-card ${flagship ? 'preview-card-flagship' : ''} ${image || thumbnail ? 'preview-card-has-image' : ''}`}>
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
      {image && (
        <img
          className="preview-card-image"
          src={image}
          alt={imageAlt || `${title} product screenshot`}
          loading="lazy"
          decoding="async"
        />
      )}
      {!image && thumbnail && <ProjectThumbnail name={thumbnail} compact />}
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
      <div className="preview-links">
        {children}
        {evidenceUrl && (
          <a className="preview-link" href={evidenceUrl} target="_blank" rel="noopener noreferrer">
            {evidenceLabel || `View ${title} evidence →`}
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
