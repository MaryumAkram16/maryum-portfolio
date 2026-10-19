import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BOOKING_URL, CONTACT_EMAIL } from '../siteConfig.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { useTypewriter } from '../hooks/useTypewriter.js'
import OrbitAnimation from '../components/OrbitAnimation.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, experience, certifications } from './projectData.js'
import './Landing.css'

// ── Animated counter hook (scroll-triggered) ──
function useCounter(target, duration = 1600, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return val
}

// ── Scroll-into-view fade-in wrapper ──
function Reveal({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ── Hero role line phrases (stable array for useTypewriter) ──
const ROLE_PHRASES = ['AI Engineer', 'Agentic Workflow Builder', 'Voice AI & n8n Automation', 'Applied ML Engineer']
const LONGEST_ROLE = ROLE_PHRASES.reduce((a, b) => (b.length > a.length ? b : a))

// ── Shared section heading: every section gets a label + h2 + optional sub ──
function SectionHead({ label, title, highlight, sub }) {
  return (
    <div className="section-head">
      <p className="section-label">{label}</p>
      <h2>
        {title}
        {highlight ? <span className="hero-gradient"> {highlight}</span> : null}
      </h2>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </div>
  )
}

function Landing() {
  usePageTitle('Maryum Akram — AI Engineer | Lahore, Pakistan')
  const [heroVisible, setHeroVisible] = useState(false)
  const role = useTypewriter(ROLE_PHRASES)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    // Harden visibility: force-show all animated hero elements regardless of animation state
    const f = setTimeout(() => document.documentElement.classList.add('js-ready'), 150)
    return () => {
      clearTimeout(t)
      clearTimeout(f)
    }
  }, [])

  // Auto-cycle pipeline steps
  useEffect(() => {
    const interval = setInterval(() => setActiveStep((p) => (p + 1) % 6), 1600)
    return () => clearInterval(interval)
  }, [])

  const capabilities = [
    {
      icon: '🎙️',
      title: 'Voice & conversational agents',
      desc: 'Systems that book, triage, and resolve by voice — no staff in the loop.',
      tag: 'Live',
    },
    {
      icon: '⚙️',
      title: 'Backend automation pipelines',
      desc: 'Workflows that pull live data, score it, and act on it end-to-end.',
      tag: 'Data-driven',
    },
    {
      icon: '🚀',
      title: 'Full-stack AI products',
      desc: 'From auth and databases to rate-limited, CI-tested APIs — shipped, not demoed.',
      tag: 'Production',
    },
  ]

  const steps = [
    { label: 'Browse case studies', sub: 'Receipt Extractor · Resume Screener · MediLens · RoshanAI · SkillSync' },
    { label: 'Watch demo videos', sub: 'Real product walkthroughs' },
    { label: 'Read the architecture', sub: 'Diagrams, tests, decisions' },
    { label: 'Explore the code', sub: 'Open source on GitHub' },
    { label: 'Book an intro call', sub: '30 minutes, free' },
  ]

  const whyItems = [
    {
      icon: '🛠️',
      title: 'Production systems, not demos',
      desc: 'Everything I ship runs for real users — professor-tested intake platforms, freelancer tools with independent users, and APIs with an externally recorded 94/94 CI test result.',
    },
    {
      icon: '📡',
      title: 'Powered by live data',
      desc: 'My systems pull from live APIs, not stale training data — live job postings, real hospital schedules, and market rates that refresh as conditions change.',
    },
    {
      icon: '🔗',
      title: 'Solo, end-to-end ownership',
      desc: 'I build the full chain myself: voice agents, automation pipelines, databases, and frontends — so I can explain every decision in an interview.',
    },
  ]

  return (
    <main className="page landing landing-v3">
      {/* ── HERO: text left + orbit animation right ── */}
      <section className="landing-hero">
        <div className="hero-glow hero-glow-1" aria-hidden="true" />
        <div className="hero-glow hero-glow-2" aria-hidden="true" />

        <div className="landing-hero-inner container hero-grid">
          <div className="hero-text">
            <p className={`hero-greeting ${heroVisible ? 'visible' : ''}`}>
              Assalam o alaikum 👋
            </p>

            <h1 className={`hero-name ${heroVisible ? 'visible' : ''}`}>
              I&apos;m <span className="hero-name-accent">Maryum Akram</span>
            </h1>

            {/* Screen readers get the static role once; the typed text, cursor, and the
                invisible longest phrase (which reserves the line height) are hidden */}
            <p className={`hero-role ${heroVisible ? 'visible' : ''}`}>
              <span className="sr-only">AI Engineer</span>
              <span className="hero-role-reserve" aria-hidden="true">
                {LONGEST_ROLE}
              </span>
              <span className="hero-role-typed" aria-hidden="true">
                {role.text}
                {!role.reduced && <span className="hero-role-cursor" />}
              </span>
            </p>

            <p className={`hero-sub ${heroVisible ? 'visible' : ''}`}>
              I turn slow, manual business processes into AI systems that run themselves, from
              voice agents and n8n workflows to classical ML models, with the evidence for each
              shown below.
            </p>

            <div className={`hero-actions ${heroVisible ? 'visible' : ''}`}>
              <a
                className="cta-pill cta-solid"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                🗓 Book a 30-minute intro call
              </a>
              <Link className="cta-pill cta-outline" to="/work">
                👁 See my work
              </Link>
            </div>

            <div className={`hero-stats ${heroVisible ? 'visible' : ''}`}>
              <div className="stat-item accent">
                <div className="stat-value">
                  <CounterItem value={7} />
                </div>
                <div className="stat-label">AI systems shipped</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">
                  <CounterItem value={94} />
                  <span>/94</span>
                </div>
                <div className="stat-label">
                  CI tests passing
                  <span className="stat-attr">— SkillSync AI</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-value">
                  <CounterItem value={9} />
                </div>
                <div className="stat-label">
                  Real users
                  <span className="stat-attr">— SkillSync AI</span>
                </div>
              </div>
            </div>

            <div className={`hero-proof ${heroVisible ? 'visible' : ''}`}>
              <span className="proof-dot" aria-hidden="true" />
              <span className="proof-text">
                MediLens &amp; SkillSync AI — architected and built by me, collaborator-credited modules excluded from what&apos;s shown · RoshanAI &amp; GharFix — fully solo · Receipt Extractor &amp; Resume Screener — solo builds, self-evaluated
              </span>
            </div>
          </div>

          <div className={`hero-visual ${heroVisible ? 'visible' : ''}`} aria-hidden="true">
            <OrbitAnimation />
          </div>
        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section className="landing-section landing-about">
        <div className="container">
          <Reveal>
            <SectionHead
              label="About me"
              title="Self-taught. Math background."
              highlight="Ships real systems."
            />
          </Reveal>
          <div className="about-grid">
            <Reveal delay={60}>
              <div className="about-avatar about-avatar-photo" aria-hidden="true">
                <picture>
                  <source
                    srcSet={`${import.meta.env.BASE_URL}maryum-avatar.webp`}
                    type="image/webp"
                  />
                  <img
                    className="about-avatar-img"
                    src={`${import.meta.env.BASE_URL}maryum-avatar.jpeg`}
                    alt="Maryum Akram"
                    width="240"
                    height="240"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <div className="about-avatar-ring" />
                <div className="about-avatar-ring about-avatar-ring-2" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="about-text">
                <p>
                  <strong>
                    Self-taught AI engineer, ~1 year in. BS Mathematics, no formal
                    CS background. Based in Lahore, Pakistan.
                  </strong>
                </p>
                <p>
                  In one year I've gone from following automation tutorials to shipping seven
                  AI systems — hospital voice workflows, agentic service booking, freelancer
                  career intelligence, a production-hardened SaaS product, document intelligence,
                  and classical ML — with the evaluation evidence for each. My math background means I
                  reason through the systems I build instead of just wiring APIs together. Stack:
                  Python, FastAPI, scikit-learn, OpenAI/Gemini, Retell AI, React, Supabase/Firebase,
                  and Cloud Run.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="landing-section landing-cards">
        <div className="container">
          <Reveal>
            <SectionHead
              label="What I do"
              title="Three things I build,"
              highlight="backed by live data"
              sub="Every project below is a real system running for real people, not a tutorial clone."
            />
          </Reveal>
          <ul className="capability-grid">
            {capabilities.map((c, i) => (
              <li key={c.title} className="capability-card">
                <Reveal delay={i * 90}>
                  <div className="capability-head">
                    <span className="capability-icon" aria-hidden="true">
                      {c.icon}
                    </span>
                    <span className="capability-tag">{c.tag}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ── */}
      <section className="landing-section landing-projects">
        <div className="container">
          <Reveal>
            <SectionHead
              label="Projects I've built"
              title="Seven AI systems,"
              highlight="from agentic automation to classical ML"
              sub="Agentic and automation systems first — voice workflows, service booking, live-data products — then extraction and classical ML with measured results."
            />
          </Reveal>
          <div className="preview-grid">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <ProjectCard project={p} flagship={i < 2}>
                  {p.repo ? (
                    <a
                      className="preview-link"
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub →
                    </a>
                  ) : (
                    <Link
                      className="preview-link"
                      to={p.caseStudy ? `/work#${p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}` : '/work'}
                    >
                      {p.caseStudy ? 'Read case study →' : 'See all case studies →'}
                    </Link>
                  )}
                  {p.repo && p.caseStudy && (
                    <Link className="preview-link" to={`/work#${p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}>
                      Read case study →
                    </Link>
                  )}
                </ProjectCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="preview-cta-row">
              <Link className="cta-pill cta-outline" to="/work">
                👁 See all case studies
              </Link>
              <Link className="cta-pill cta-outline" to="/principles">
                Read my AI principles →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="landing-section landing-experience">
        <div className="container">
          <Reveal>
            <SectionHead label="Experience" title="AI Engineering Intern," highlight="FlyRank" />
          </Reveal>
          <div className="experience-card">
            <p className="experience-meta">
              Backend AI &amp; ML Engineering Tracks · 6 Jul 2026 – 30 Aug 2026
            </p>
            <ul className="experience-list">
              {experience.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> — {item.text}
                  {item.links?.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label} ↗
                    </a>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="landing-section landing-certs">
        <div className="container">
          <Reveal>
            <SectionHead label="Certifications" title="Credentials" highlight="and recognition" />
          </Reveal>
          <ul className="cert-strip">
            {certifications.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    {c.label} ↗
                  </a>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section className="landing-section landing-pipeline">
        <div className="container">
          <Reveal>
            <SectionHead
              label="How to evaluate me"
              title="5-Step Proof Pipeline"
              highlight=""
              sub="Skip the resume games — here's the exact path to decide if I can build what you need."
            />
          </Reveal>
          <div className="pipe-track">
            {steps.map((step, i) => (
              <div key={i} className="pipe-track-item">
                <div className={`pipe-step ${activeStep >= i ? 'active' : ''}`}>
                  <div className="pipe-circle">{i + 1}</div>
                  <div className="pipe-text">
                    <div className="pipe-label">{step.label}</div>
                    <div className="pipe-sub">{step.sub}</div>
                  </div>
                </div>
                {i < steps.length - 1 && <div className="pipe-connector" />}
              </div>
            ))}
          </div>
          <div className="pipe-cta-row">
            <Link className="cta-pill cta-solid" to="/work">
              🧭 Start with the case studies
            </Link>
            <button type="button" className="pipe-replay" onClick={() => setActiveStep(0)}>
              ↺ Replay animation
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="landing-section landing-why">
        <div className="container">
          <Reveal>
            <SectionHead
              label="Why work with me"
              title="Hiring self-taught means betting on"
              highlight="proof, not pedigree"
              sub="No formal CS degree — just one year of shipping systems people actually use."
            />
          </Reveal>
          <div className="why-grid">
            {whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="why-card">
                  <div className="why-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="landing-section landing-cta">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-icon" aria-hidden="true">
              🤝
            </div>
            <h2>Ready to replace the manual parts of your business?</h2>
            <p>
              Tell me the slowest process in your operation — I'll tell you whether AI can
              automate it, and show you a working system, not a slide.
            </p>
            <div className="cta-actions">
              <a
                className="cta-pill cta-solid"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                🗓 Book a 30-minute intro call
              </a>
              <Link className="cta-pill cta-outline" to="/contact">
                ✉ Send a message instead
              </Link>
            </div>
            <p className="cta-contact">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a 30-minute intro call
              </a>{' '}
              or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

// ── Small self-contained counter for the hero stats row ──
function CounterItem({ value }) {
  return <>{value.toLocaleString()}</>
}

export default Landing
