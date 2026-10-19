// Shared project, experience, and certification data for the Landing and
// Work pages. Only claims backed by the linked repos or case studies.

import medilensPreview from '../assets/images/medilens/voice-appointment-agent.webp'
import skillsyncPreview from '../assets/images/skillsync/dashboard.webp'
import roshanaiPreview from '../assets/images/roshanai/intelligence-layer.webp'

export const projects = [
  {
    title: 'MediLens',
    desc: 'Hospital intake automation',
    caseStudy: true,
    image: medilensPreview,
    imageAlt: 'MediLens voice appointment interface with its call-to-book assistant',
    tags: ['Voice Agent', 'Complaint Mgmt', 'Admin Dashboard'],
    text: 'A voice agent books, reschedules, and cancels appointments with no staff involved — plus complaint management and an admin dashboard.',
    result: 'Independently tested by a professor via live link',
  },
  {
    title: 'GharFix',
    desc: 'Agentic local-services booking',
    caseStudy: true,
    tags: ['Agentic Orchestration', 'n8n', 'Multilingual'],
    text: 'Books local service providers from English, Urdu, or Roman Urdu requests — an Antigravity orchestrator delegates matching, booking, quality checks, disputes, and rescheduling to n8n workflows.',
    result: '7-factor ranking of real Google Maps providers',
    badge: 'AI Seekho 2026 — Silver Tier, Phase 2 Submission',
    repo: 'https://github.com/MaryumAkram16/GharFix',
  },
  {
    title: 'RoshanAI',
    desc: 'Freelancer career intelligence',
    caseStudy: true,
    image: roshanaiPreview,
    imageAlt: 'RoshanAI live market intelligence dashboard comparing job-market data',
    tags: ['Market Data', 'Skill Gap Analysis', 'Proposal Generator'],
    text: 'Pulls live job market data from JSearch and SerpAPI, analyzes skill gaps against real postings, and generates tailored proposals.',
    result: '3 independent users · fully solo build',
    badge: 'AI Seekho 2026 — Silver Tier, Phase 1 Submission',
  },
  {
    title: 'SkillSync AI',
    desc: 'Career discovery pipeline',
    caseStudy: true,
    image: skillsyncPreview,
    imageAlt: 'SkillSync AI career dashboard with verified skills and progress panels',
    tags: ['Dashboard', 'Radar', 'Assessment'],
    text: 'Adaptive skill assessment matched against live market data, with real security, rate limiting, and audit logging in production.',
    result: 'Externally recorded: 9 real users · 94/94 CI tests passing',
  },
  {
    title: 'Receipt Extractor',
    desc: 'Reliable document intelligence API',
    caseStudy: true,
    tags: ['Structured Extraction', 'Evaluation', 'FastAPI'],
    text: 'A strict-schema extraction service with repair limits, needs-review routing, background jobs, and PDF reporting.',
    result: '8/8 hand-labelled evaluation cases passed',
  },
  {
    title: 'Resume Screener',
    desc: 'Classical ML for job-fit analysis',
    tags: ['scikit-learn', 'NLP', 'Model Evaluation'],
    text: 'A two-stage pipeline that predicts resume category and scores suitability against a specific job description.',
    result: '68.0% accuracy · MAE 8.69 · R² 0.814',
  },
  {
    title: 'AI-Human Text Detector',
    desc: 'Classical ML text classification',
    tags: ['scikit-learn', 'Stylometry', 'Model Comparison'],
    text: 'Separates AI-generated from human-written text with TF-IDF and stylometric features, comparing logistic regression, random forest, and naive Bayes.',
    result: '99.36% accuracy on 487K essays',
    repo: 'https://github.com/MaryumAkram16/AI-Human-Text-Detector',
  },
]

export const experience = [
  {
    title: 'Receipt Extractor',
    text: 'Strict-schema document intelligence API.',
  },
  {
    title: 'Content Refresh Scoring',
    text: 'ML capstone on a client-holdout test; a rule baseline (P@50 0.90) beat Random Forest (0.76).',
    links: [
      { label: 'Repo', href: 'https://github.com/MaryumAkram16/flyrank-ml-internship' },
      { label: 'Paper', href: 'https://maryumakram16.github.io/flyrank-ml-internship/' },
    ],
  },
  {
    title: 'Embeddable Widget Platform',
    text: 'Multi-tenant lead capture with proof-of-work bot defense; 47/47 tests passing.',
    links: [
      { label: 'Repo', href: 'https://github.com/MaryumAkram16/flyrank-capstone-widget-platform' },
    ],
  },
]

export const certifications = [
  {
    label: 'Azure AI Apps and Agents Developer Associate (AI-103)',
    href: 'https://learn.microsoft.com/api/credentials/share/en-gb/MaryumAkram-6047/5EEC173DDEF1BD6?sharingId=8A421E061C48308C',
  },
  {
    label: 'Azure AI Fundamentals (AI-900)',
    href: 'https://learn.microsoft.com/api/credentials/share/en-gb/MaryumAkram-6047/11B785908D7F25E?sharingId=8A421E061C48308C',
  },
  { label: 'EF SET B2', href: 'https://cert.efset.org/TUdWSk' },
  { label: 'AI Seekho 2026 Silver Tier' },
]
