// Shared project, experience, and certification data for the Landing and
// Work pages. Only claims backed by the linked repos or case studies.

import medilensPreview from '../assets/images/medilens/voice-appointment-agent.webp'
import skillsyncPreview from '../assets/images/skillsync/dashboard.webp'
import roshanaiPreview from '../assets/images/roshanai/intelligence-layer.webp'

export const projects = [
  {
    title: 'MediLens',
    desc: 'Hospital workflow prototype',
    caseStudy: true,
    image: medilensPreview,
    imageAlt: 'MediLens voice appointment interface with its call-to-book assistant',
    tags: ['Voice Agent', 'Complaint Mgmt', 'Admin Dashboard'],
    text: 'Public n8n workflow exports cover voice appointment handling, complaints, and admin flows; the repository also links product demos.',
    result: 'Workflow exports and demos are public; no public test suite or deployment evidence',
    repo: 'https://github.com/MaryumAkram16/medilens',
    evidenceUrl: 'https://github.com/MaryumAkram16/medilens/tree/main',
    evidenceLabel: 'See workflow exports',
  },
  {
    title: 'GharFix',
    desc: 'Documented local-services booking design',
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
    title: 'RoshanAI',
    desc: 'AI career-intelligence app implementation',
    caseStudy: true,
    image: roshanaiPreview,
    imageAlt: 'RoshanAI market-intelligence dashboard interface',
    tags: ['Market Data', 'Skill Gap Analysis', 'Proposal Generator'],
    text: 'Implements JSearch/SerpAPI integration paths, AI-assisted career analysis, and profile/proposal generation; current data quality and outcomes are not benchmarked.',
    result: '3 users reported · fully solo build (portfolio-reported)',
    badge: 'Portfolio-reported: AI Seekho 2026 — Silver Tier, Phase 1 submission',
    repo: 'https://github.com/MaryumAkram16/RoshanAI',
    evidenceUrl: 'https://github.com/MaryumAkram16/RoshanAI/blob/main/src/marketIntelligence.ts',
    evidenceLabel: 'See market-data integration',
  },
  {
    title: 'SkillSync AI',
    desc: 'Career discovery pipeline',
    caseStudy: true,
    image: skillsyncPreview,
    imageAlt: 'SkillSync AI career dashboard interface with a skill profile and progress panels',
    tags: ['Dashboard', 'Radar', 'Assessment'],
    text: 'Public source implements adaptive assessments, market integrations, authentication, rate limiting, and audit logging; production operation and recommendation quality are not independently verified.',
    result: '9 users reported · public repository includes tests and a CI workflow',
    repo: 'https://github.com/MaryumAkram16/Skillsync-AI',
    evidenceUrl: 'https://github.com/MaryumAkram16/Skillsync-AI/tree/main/tests',
    evidenceLabel: 'See public tests',
  },
  {
    title: 'Receipt Extractor',
    desc: 'FastAPI receipt-text extraction prototype',
    caseStudy: true,
    tags: ['Structured Extraction', 'Evaluation', 'FastAPI'],
    text: 'Extracts structured fields from pasted receipt text with schema validation, bounded repair, needs-review routing, background jobs, and local PDF reporting.',
    result: 'Eight labelled cases are published; provider-backed evaluation was skipped in the latest public CI run',
    evidenceUrl: 'https://github.com/MaryumAkram16/receipt-extractor/tree/main/evals',
    evidenceLabel: 'See evaluation cases',
    repo: 'https://github.com/MaryumAkram16/receipt-extractor',
  },
  {
    title: 'Resume Screener',
    desc: 'Classical ML for job-fit analysis',
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
    desc: 'Classical ML text classification',
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
