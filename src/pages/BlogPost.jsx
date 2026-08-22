import { Link, useParams } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { blogPosts } from './blogData.js'
// Import every gallery/hero image so Vite emits a single hashed copy shared
// with the Work page — no duplicate files, exact URL resolution.
import medilensVoiceAgentWebp from '../assets/images/medilens/voice-appointment-agent.webp'
import medilensVoiceAgentJpg from '../assets/images/medilens/voice-appointment-agent.jpg'
import medilensComplaintWebp from '../assets/images/medilens/complaint-management.webp'
import medilensComplaintJpg from '../assets/images/medilens/complaint-management.jpg'
import medilensAdminWebp from '../assets/images/medilens/admin-command-center.webp'
import medilensAdminJpg from '../assets/images/medilens/admin-command-center.jpg'
import roshanaiIntelligenceWebp from '../assets/images/roshanai/intelligence-layer.webp'
import roshanaiIntelligenceJpg from '../assets/images/roshanai/intelligence-layer.jpg'
import roshanaiSkillGapWebp from '../assets/images/roshanai/skill-gap-analysis.webp'
import roshanaiSkillGapJpg from '../assets/images/roshanai/skill-gap-analysis.jpg'
import roshanaiProposalWebp from '../assets/images/roshanai/proposal-generator.webp'
import roshanaiProposalJpg from '../assets/images/roshanai/proposal-generator.jpg'
import skillsyncDashboardWebp from '../assets/images/skillsync/dashboard.webp'
import skillsyncDashboardJpg from '../assets/images/skillsync/dashboard.jpg'
import skillsyncRadarWebp from '../assets/images/skillsync/radar.webp'
import skillsyncRadarJpg from '../assets/images/skillsync/radar.jpg'
import skillsyncAssessmentWebp from '../assets/images/skillsync/skill-assessment.webp'
import skillsyncAssessmentJpg from '../assets/images/skillsync/skill-assessment.jpg'
import skillsyncParserWebp from '../assets/images/skillsync/parser.webp'
import skillsyncParserJpg from '../assets/images/skillsync/parser.jpg'
import skillsyncMentorWebp from '../assets/images/skillsync/career-mentor.webp'
import skillsyncMentorJpg from '../assets/images/skillsync/career-mentor.jpg'
import AnimatedPipeline from '../components/AnimatedPipeline.jsx'
import './BlogPost.css'

const assetMap = {
  webp: {
    'medilens/voice-appointment-agent.webp': medilensVoiceAgentWebp,
    'medilens/complaint-management.webp': medilensComplaintWebp,
    'medilens/admin-command-center.webp': medilensAdminWebp,
    'roshanai/intelligence-layer.webp': roshanaiIntelligenceWebp,
    'roshanai/skill-gap-analysis.webp': roshanaiSkillGapWebp,
    'roshanai/proposal-generator.webp': roshanaiProposalWebp,
    'skillsync/dashboard.webp': skillsyncDashboardWebp,
    'skillsync/radar.webp': skillsyncRadarWebp,
    'skillsync/skill-assessment.webp': skillsyncAssessmentWebp,
    'skillsync/parser.webp': skillsyncParserWebp,
    'skillsync/career-mentor.webp': skillsyncMentorWebp,
  },
  jpg: {
    'medilens/voice-appointment-agent.jpg': medilensVoiceAgentJpg,
    'medilens/complaint-management.jpg': medilensComplaintJpg,
    'medilens/admin-command-center.jpg': medilensAdminJpg,
    'roshanai/intelligence-layer.jpg': roshanaiIntelligenceJpg,
    'roshanai/skill-gap-analysis.jpg': roshanaiSkillGapJpg,
    'roshanai/proposal-generator.jpg': roshanaiProposalJpg,
    'skillsync/dashboard.jpg': skillsyncDashboardJpg,
    'skillsync/radar.jpg': skillsyncRadarJpg,
    'skillsync/skill-assessment.jpg': skillsyncAssessmentJpg,
    'skillsync/parser.jpg': skillsyncParserJpg,
    'skillsync/career-mentor.jpg': skillsyncMentorJpg,
  },
}

function bodyToPoints(body) {
  return body
    .split(/(?<=[.!?])\s+/)
    .map((point) => point.trim())
    .filter(Boolean)
}

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  usePageTitle(post ? `${post.title} — Maryum Akram` : 'Blog — Maryum Akram')

  if (!post) {
    return (
      <main className="page blog-post blog-not-found">
        <div className="container">
          <p className="section-label">Not found</p>
          <h1>This post doesn't exist.</h1>
          <Link to="/blog">← Back to all posts</Link>
        </div>
      </main>
    )
  }

  const related = blogPosts.filter((p) => p.slug !== slug)

  return (
    <main className="page blog-post">
      <article className="container">
        <Link to="/blog" className="back-link">
          ← All posts
        </Link>

        <div className="post-header">
          <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-date">
              {post.date} · {post.readTime} · {post.project}
            </span>
          </div>
          <h1>{post.title}</h1>
          <p className="post-lede">{post.summary}</p>
          <div className="tag-row">
            {post.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="post-hero">
          <picture>
            <source srcSet={assetMap.webp[post.heroImage]} type="image/webp" />
            <img src={assetMap.jpg[post.heroImageJpg]} alt={post.title} decoding="async" />
          </picture>
        </div>

        <AnimatedPipeline steps={post.pipelineSteps} />

        <div className="post-content">
          {post.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              <ul className="section-points">
                {bodyToPoints(s.body).map((point) => <li key={point}>{point}</li>)}
              </ul>
            </section>
          ))}
        </div>

        {post.images.length > 0 && (
          <div className="post-gallery">
            {post.images.map((img) => (
              <figure key={img.src}>
                <picture>
                  <source srcSet={assetMap.webp[img.src]} type="image/webp" />
                  <img src={assetMap.jpg[img.jpg]} alt={img.caption} loading="lazy" decoding="async" />
                </picture>
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="post-actions">
          {post.videos.map((v) => (
            <a key={v.url} className="case-link" href={v.url} target="_blank" rel="noopener noreferrer">
              ▶ {v.label}
            </a>
          ))}
          {post.repoUrl && (
            <a className="case-link" href={post.repoUrl} target="_blank" rel="noopener noreferrer">
              View code on GitHub
            </a>
          )}
        </div>

        {post.scopeNote && <p className="scope-note">{post.scopeNote}</p>}

        <div className="post-related">
          <p className="section-label">More deep dives</p>
          <div className="related-list">
            {related.map((r) => (
              <Link key={r.slug} to={`/blog/${r.slug}`} className="related-link">
                <span className="related-cat">{r.category}</span>
                <span className="related-title">{r.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}

export default BlogPost
