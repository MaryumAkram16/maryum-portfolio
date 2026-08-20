import { Link } from 'react-router-dom'
import { BOOKING_URL } from '../siteConfig.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { blogPosts } from './blogData.js'
import medilensVoiceAgentWebp from '../assets/images/medilens/voice-appointment-agent.webp'
import medilensVoiceAgentJpg from '../assets/images/medilens/voice-appointment-agent.jpg'
import roshanaiIntelligenceWebp from '../assets/images/roshanai/intelligence-layer.webp'
import roshanaiIntelligenceJpg from '../assets/images/roshanai/intelligence-layer.jpg'
import skillsyncDashboardWebp from '../assets/images/skillsync/dashboard.webp'
import skillsyncDashboardJpg from '../assets/images/skillsync/dashboard.jpg'
import './Blog.css'

// Vite hashes imported assets; these maps guarantee the blog images resolve to
// the exact same hashed filenames the Work page emits (single copy per file).
const heroWebp = {
  'medilens-hospital-voice-agent': medilensVoiceAgentWebp,
  'roshanai-freelancer-market-intelligence': roshanaiIntelligenceWebp,
  'skillsync-career-discovery-pipeline': skillsyncDashboardWebp,
}
const heroJpg = {
  'medilens-hospital-voice-agent': medilensVoiceAgentJpg,
  'roshanai-freelancer-market-intelligence': roshanaiIntelligenceJpg,
  'skillsync-career-discovery-pipeline': skillsyncDashboardJpg,
}

function Blog() {
  usePageTitle('Blog — Maryum Akram')
  return (
    <main className="page blog">
      <div className="container">
        <div className="section-head blog-head">
          <p className="section-label">Case study journal</p>
          <h1>
            Deep dives,<span className="hero-gradient"> not just demos</span>
          </h1>
          <p className="section-sub">
            The Work tab shows the proof. This is where I break down how each system was actually
            built — the problem, the pipeline, the hardest parts, and the honest numbers.
          </p>
        </div>

        <div className="post-grid">
          {blogPosts.map((post) => (
            <article className="post-card" key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="post-image-link" aria-label={`Read: ${post.title}`}>
                <div className="post-image-wrap">
                  <picture>
                    <source srcSet={heroWebp[post.slug]} type="image/webp" />
                    <img src={heroJpg[post.slug]} alt={post.title} loading="lazy" />
                  </picture>
                </div>
              </Link>
              <div className="post-body">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">
                    {post.date} · {post.readTime}
                  </span>
                </div>
                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="post-summary">{post.summary}</p>
                <div className="post-footer">
                  <div className="tag-row">
                    {post.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.slug}`} className="post-read-more">
                    Read the breakdown →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="cta-bottom">
          <p className="cta-bottom-sub">Want the full technical picture on any of these?</p>
          <a className="cta-button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            🗓 Book a 30-minute intro call
          </a>
        </div>
      </div>
    </main>
  )
}

export default Blog
