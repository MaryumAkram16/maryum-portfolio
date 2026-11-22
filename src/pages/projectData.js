// Shared project, experience, and certification data for the Landing and
// Work pages. Only claims backed by the linked repos or case studies.

import medilensPreview from '../assets/images/medilens/voice-appointment-agent.webp'
import skillsyncPreview from '../assets/images/skillsync/dashboard.webp'
import roshanaiPreview from '../assets/images/roshanai/intelligence-layer.webp'
import gharfixPreview from '../assets/images/gharfix/assistant-home.webp'
import textDetectorPreview from '../assets/images/text-detector/app.webp'
import resumeScreenerPreview from '../assets/images/resume-screener/app.webp'
import smartJobFinderPreview from '../assets/images/smart-job-finder/pipeline.webp'

// Order = strength of publicly verifiable engineering evidence (tests, CI,
// backend code) first; classical ML projects are tagged `category: 'ml'` and
// rendered in their own group after the applied AI and backend work.
// `desc` doubles as a one-line status: project type · strongest evidence.
export const projects = [
  {
    title: 'SkillSync AI',
    desc: 'Full-stack AI app · 133 tests + CI · matching eval',
    caseStudy: true,
    image: skillsyncPreview,
    imageAlt: 'SkillSync AI career dashboard interface with a skill profile and progress panels',
    tags: ['TypeScript', 'Express API', 'Firebase Auth', 'Vitest'],
    text: 'I built the backend, the architecture, and the Radar, Parser, Skill Assessment, and Career Mentor features: an Express API with Firebase authentication, rate limiting, audit logging, and SerpAPI and Gemini integrations. A collaborator built Roadmap and Interview Prep.',
    result: '133 automated tests run in GitHub Actions · labelled matching evaluation on 71 resume–job pairs: 94% ordered correctly by the rule-based pre-score, 81/81 by the AI step on Gemini (98% on gpt-4o-mini)',
    repo: 'https://github.com/MaryumAkram16/Skillsync-AI',
    evidenceUrl: 'https://github.com/MaryumAkram16/Skillsync-AI/tree/main/tests',
    evidenceLabel: 'See public tests',
  },
  {
    title: 'GharFix',
    desc: 'TypeScript serverless backend · 767 tests in CI · live on Vercel',
    caseStudy: true,
    image: gharfixPreview,
    imageAlt: 'GharFix app home screen with the bilingual booking assistant and a grid of home services',
    tags: ['TypeScript', 'Vercel Functions', 'PostgreSQL', 'Vitest'],
    text: 'I ported my eight-workflow n8n booking prototype to TypeScript serverless handlers: Gemini intent parsing for English, Urdu, and Roman Urdu, OpenStreetMap provider search, seven-factor ranking and pricing, and booking, dispute, and reschedule endpoints with injected dependencies.',
    result: '767 tests in CI, including real Postgres · golden test requires identical scoring and pricing to the original n8n code · exclusion constraint blocks overlapping bookings',
    badge: 'Portfolio-reported: AI Seekho 2026 — Silver Tier, Phase 2 submission (original n8n version)',
    repo: 'https://github.com/MaryumAkram16/gharfix-capstone',
    evidenceUrl: 'https://github.com/MaryumAkram16/gharfix-capstone/blob/master/tests/matching/golden.test.ts',
    evidenceLabel: 'See parity tests vs n8n',
  },
  {
    title: 'MediLens',
    desc: 'Voice AI agent + TypeScript serverless · 294 tests in CI · live on Vercel',
    caseStudy: true,
    image: medilensPreview,
    imageAlt: 'MediLens voice appointment interface with its call-to-book assistant',
    tags: ['Voice AI', 'Retell AI', 'TypeScript', 'Gemini', 'PostgreSQL'],
    text: 'I ported my MediLens modules from n8n to TypeScript on Vercel and built the website: a Retell voice agent whose tools book, reschedule, and cancel appointments and file complaints, and a complaint center where Gemini routes typed or spoken complaints to one of nine departments, with an emergency rule in code and staff review. Other modules are collaborator-built and credited.',
    result: '261 API tests in CI (incl. real Postgres) + 33 website tests · live Gemini eval: 44/50 departments, 6/6 emergencies, 14/50 sent to staff · four bugs found by real calls, each fixed with a regression test',
    repo: 'https://github.com/MaryumAkram16/medilens',
    evidenceUrl: 'https://github.com/MaryumAkram16/medilens#what-broke-when-it-went-live-and-the-fixes',
    evidenceLabel: 'See what broke going live',
  },
  {
    title: 'Receipt Extractor',
    desc: 'FlyRank internship · FastAPI · 301 tests in CI · 42/50 live eval',
    caseStudy: true,
    thumbnail: 'receipt',
    tags: ['Python', 'FastAPI', 'Pydantic', 'Evaluation'],
    text: 'A provider-agnostic LLM extraction API with strict schema validation, controlled retries, one bounded repair attempt, needs-review routing, idempotent background jobs, SQLite persistence, and PDF reports.',
    result: '301 pytest tests run in CI · live eval on 50 labelled receipts: 42/50 with gpt-4o-mini, vendor and currency 100%, needs_review recall 59% (the known weakness)',
    evidenceUrl: 'https://github.com/MaryumAkram16/receipt-extractor/tree/main/evals',
    evidenceLabel: 'See evaluation cases',
    repo: 'https://github.com/MaryumAkram16/receipt-extractor',
  },
  {
    title: 'Usage Metering & Billing Engine',
    desc: 'FlyRank internship · FastAPI billing backend · 46 tests',
    caseStudy: true,
    thumbnail: 'billing',
    tags: ['Python', 'FastAPI', 'SQLModel', 'pytest'],
    text: 'Usage metering with per-tenant idempotency keys, 429/402 quota responses, AI-token pricing in integer micro-dollars, and plan sync through a Stripe-style checkout with HMAC-signed, deduplicated webhooks.',
    result: '46 pytest tests pass, covering idempotency, quota boundaries, pricing, and webhook signature, replay, and dedup · run in GitHub Actions',
    repo: 'https://github.com/MaryumAkram16/flyrank-capstone-metering-billing',
    evidenceUrl: 'https://github.com/MaryumAkram16/flyrank-capstone-metering-billing/blob/main/EVIDENCE.md',
    evidenceLabel: 'See tests mapped to requirements',
  },
  {
    title: 'Embeddable Widget Platform',
    desc: 'FlyRank internship · FastAPI backend · 47 tests',
    caseStudy: true,
    thumbnail: 'widget',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'pytest'],
    text: 'Multi-tenant lead-capture backend: tenants embed a form with one script tag, and each public submission passes CORS, validation, rate limiting, honeypot and proof-of-work bot checks, and a two-provider geo fallback. A failing email side effect never blocks storage; a server-rendered dashboard streams live updates.',
    result: '47 pytest tests pass, covering tenant isolation, clean 4xx/429 responses, and provider failures · run in GitHub Actions',
    repo: 'https://github.com/MaryumAkram16/flyrank-capstone-widget-platform',
    evidenceUrl: 'https://github.com/MaryumAkram16/flyrank-capstone-widget-platform/blob/main/EVIDENCE.md',
    evidenceLabel: 'See tests mapped to requirements',
  },
  {
    title: 'RoshanAI',
    desc: 'Full-stack AI app · security checks in CI',
    caseStudy: true,
    image: roshanaiPreview,
    imageAlt: 'RoshanAI market-intelligence dashboard interface',
    tags: ['TypeScript', 'Express API', 'Firebase Auth', 'JSearch / SerpAPI'],
    text: 'Career-intelligence app with an authenticated Express backend that keeps provider keys server-side, verifies Firebase ID tokens, rate-limits requests, and proxies JSearch, SerpAPI, and OpenAI calls for career analysis and proposal generation.',
    result: 'CI runs security-invariant checks, a type-check, and a build before deploying · output quality not benchmarked',
    badge: 'Portfolio-reported: AI Seekho 2026 — Silver Tier, Phase 1 submission',
    repo: 'https://github.com/MaryumAkram16/RoshanAI',
    evidenceUrl: 'https://github.com/MaryumAkram16/RoshanAI/blob/main/server.ts',
    evidenceLabel: 'See authenticated API layer',
  },
  {
    title: 'Smart Job Finder',
    desc: 'n8n AI agent · workflow export + demo',
    caseStudy: true,
    image: smartJobFinderPreview,
    imageAlt: 'Diagram of the Smart Job Finder n8n pipeline, from scheduled job searches through gpt-4o-mini scoring to the Gmail digest',
    tags: ['n8n', 'OpenAI', 'JSearch / SerpAPI', 'Google Sheets'],
    text: 'Scheduled n8n workflow that pulls remote jobs from JSearch and SerpAPI, normalizes and deduplicates them, drops poor fits with a free rule filter, then has gpt-4o-mini score each one against my resume on a fixed rubric and emails the top five through Gmail.',
    result: 'Demo run: 36 jobs scored, 5 emailed, top score 85/100 (README-reported) · no automated tests',
    repo: 'https://github.com/MaryumAkram16/smart-job-finder',
    evidenceUrl: 'https://github.com/MaryumAkram16/smart-job-finder/blob/main/docs/node-reference.md',
    evidenceLabel: 'See node-by-node reference',
  },
  {
    title: 'Resume Screener',
    desc: 'Classical ML · offline evaluation',
    category: 'ml',
    caseStudy: true,
    image: resumeScreenerPreview,
    imageAlt: 'Resume Screener Streamlit app with resume and job description inputs',
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
    image: textDetectorPreview,
    imageAlt: 'AI-Human Text Detector Streamlit app comparing a human-written and an AI-generated sample',
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
