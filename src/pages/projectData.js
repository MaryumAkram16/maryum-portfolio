// Shared project, experience, and certification data for the Landing and
// Work pages. Only claims backed by the linked repos or case studies.

import medilensPreview from '../assets/images/medilens/voice-appointment-agent.webp'
import skillsyncPreview from '../assets/images/skillsync/dashboard.webp'
import roshanaiPreview from '../assets/images/roshanai/intelligence-layer.webp'

// Order = strength of publicly verifiable engineering evidence (tests, CI,
// backend code) first; classical ML projects are tagged `category: 'ml'` and
// rendered in their own group after the applied AI and backend work.
// `desc` doubles as a one-line status: project type · strongest evidence.
export const projects = [
  {
    title: 'SkillSync AI',
    desc: 'Full-stack AI app · 94 tests + CI',
    caseStudy: true,
    image: skillsyncPreview,
    imageAlt: 'SkillSync AI career dashboard interface with a skill profile and progress panels',
    tags: ['TypeScript', 'Express API', 'Firebase Auth', 'Vitest'],
    text: 'I built the backend, the architecture, and the Radar, Parser, Skill Assessment, and Career Mentor features: an Express API with Firebase authentication, rate limiting, audit logging, and SerpAPI and Gemini integrations. A collaborator built Roadmap and Interview Prep.',
    result: '94 automated tests pass on the public code · GitHub Actions runs tests and a type-check · 9 users portfolio-reported',
    repo: 'https://github.com/MaryumAkram16/Skillsync-AI',
    evidenceUrl: 'https://github.com/MaryumAkram16/Skillsync-AI/tree/main/tests',
    evidenceLabel: 'See public tests',
  },
  {
    title: 'Embeddable Widget Platform',
    desc: 'FlyRank internship · FastAPI backend · 47 tests',
    caseStudy: true,
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'pytest'],
    text: 'Multi-tenant lead-capture backend: tenants embed a form with one script tag, and each public submission passes CORS, validation, rate limiting, honeypot and proof-of-work bot checks, and a two-provider geo fallback. A failing email side effect never blocks storage; a server-rendered dashboard streams live updates.',
    result: '47 pytest tests pass, covering tenant isolation, clean 4xx/429 responses, and provider failures · no CI workflow published',
    repo: 'https://github.com/MaryumAkram16/flyrank-capstone-widget-platform',
    evidenceUrl: 'https://github.com/MaryumAkram16/flyrank-capstone-widget-platform/blob/main/EVIDENCE.md',
    evidenceLabel: 'See tests mapped to requirements',
  },
  {
    title: 'Receipt Extractor',
    desc: 'FlyRank internship · FastAPI · CI smoke test + evals',
    caseStudy: true,
    tags: ['Python', 'FastAPI', 'Pydantic', 'Evaluation'],
    text: 'A provider-agnostic LLM extraction API with strict schema validation, controlled retries, one bounded repair attempt, needs-review routing, idempotent background jobs, SQLite persistence, and PDF reports.',
    result: 'CI builds the Docker image and runs a schema smoke test · 8 labelled eval cases (8/8 README-reported; provider-backed eval skipped in public CI)',
    evidenceUrl: 'https://github.com/MaryumAkram16/receipt-extractor/tree/main/evals',
    evidenceLabel: 'See evaluation cases',
    repo: 'https://github.com/MaryumAkram16/receipt-extractor',
  },
  {
    title: 'RoshanAI',
    desc: 'Full-stack AI app · security checks in CI',
    caseStudy: true,
    image: roshanaiPreview,
    imageAlt: 'RoshanAI market-intelligence dashboard interface',
    tags: ['TypeScript', 'Express API', 'Firebase Auth', 'JSearch / SerpAPI'],
    text: 'Career-intelligence app with an authenticated Express backend that keeps provider keys server-side, verifies Firebase ID tokens, rate-limits requests, and proxies JSearch, SerpAPI, and OpenAI calls for career analysis and proposal generation.',
    result: 'CI runs security-invariant checks, a type-check, and a build before deploying · 3 users and solo build portfolio-reported; output quality not benchmarked',
    badge: 'Portfolio-reported: AI Seekho 2026 — Silver Tier, Phase 1 submission',
    repo: 'https://github.com/MaryumAkram16/RoshanAI',
    evidenceUrl: 'https://github.com/MaryumAkram16/RoshanAI/blob/main/server.ts',
    evidenceLabel: 'See authenticated API layer',
  },
  {
    title: 'MediLens',
    desc: 'Voice AI prototype · n8n workflow exports',
    caseStudy: true,
    image: medilensPreview,
    imageAlt: 'MediLens voice appointment interface with its call-to-book assistant',
    tags: ['Voice AI', 'Retell AI', 'n8n', 'Booking Workflows'],
    text: 'I built the Retell voice agent, voice appointment booking, complaint management, and admin command-center workflows; the public repository has the n8n exports and links product demos. Other modules are collaborator-built and credited.',
    result: 'Prototype: workflow exports and demos are public; no public test suite or deployment evidence',
    repo: 'https://github.com/MaryumAkram16/medilens',
    evidenceUrl: 'https://github.com/MaryumAkram16/medilens/tree/main',
    evidenceLabel: 'See workflow exports',
  },
  {
    title: 'GharFix',
    desc: 'Documented agentic design · README only',
    caseStudy: true,
    tags: ['Agentic Orchestration', 'n8n', 'Multilingual'],
    text: 'The README documents a multilingual booking architecture and intended n8n workflows; the public repository currently contains the design README, not the runnable implementation.',
    result: 'README documents seven weighted provider-ranking factors',
    badge: 'Portfolio-reported: AI Seekho 2026 — Silver Tier, Phase 2 submission',
    repo: 'https://github.com/MaryumAkram16/GharFix',
    evidenceUrl: 'https://github.com/MaryumAkram16/GharFix/blob/main/README.md#8-provider-matching-factors',
    evidenceLabel: 'See documented ranking design',
  },
  {
    title: 'Resume Screener',
    desc: 'Classical ML · offline evaluation',
    category: 'ml',
    caseStudy: true,
    tags: ['scikit-learn', 'NLP', 'Model Evaluation'],
    text: 'A two-stage pipeline that predicts resume category and scores suitability against a specific job description.',
    result: '68.0% category accuracy · Stage 2 MAE 8.69, R² 0.814 (repository-reported)',
    repo: 'https://github.com/MaryumAkram16/Resume-Screener',
    evidenceUrl: 'https://github.com/MaryumAkram16/Resume-Screener/blob/main/model_manifest.json',
    evidenceLabel: 'See model manifest and CI checks',
  },
  {
    title: 'AI-Human Text Detector',
    desc: 'Classical ML · single-dataset evaluation',
    category: 'ml',
    caseStudy: true,
    tags: ['scikit-learn', 'Stylometry', 'Model Comparison'],
    text: 'Separates AI-generated from human-written text with TF-IDF and stylometric features, comparing logistic regression, random forest, and naive Bayes.',
    result: '99.36% accuracy on one Kaggle dataset’s held-out split; generalization is untested',
    repo: 'https://github.com/MaryumAkram16/AI-Human-Text-Detector',
    evidenceUrl: 'https://github.com/MaryumAkram16/AI-Human-Text-Detector/blob/main/table_model_comparison.csv',
    evidenceLabel: 'See model comparison results',
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
  { label: 'Portfolio-reported: AI Seekho 2026 Silver Tier' },
]
