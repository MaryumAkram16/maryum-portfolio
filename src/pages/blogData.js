// Blog post content — in-depth breakdowns of each production system.
// Content is drawn from the actual case studies on the Work page.

export const blogPosts = [
  {
    slug: 'medilens-hospital-voice-agent',
    title: 'How a voice agent replaced the hospital front desk',
    category: 'Voice AI',
    project: 'MediLens',
    date: 'Aug 2026',
    readTime: '6 min read',
    summary:
      'A patient calls a hospital. Instead of a staff member answering, booking, and rescheduling, an AI voice agent handles the entire conversation. This is the deep-dive on how I built it — and why the complaints pipeline and admin dashboard matter just as much.',
    tags: ['Voice Agent', 'Complaint Mgmt', 'Admin Dashboard'],
    heroImage: 'medilens/voice-appointment-agent.webp',
    heroImageJpg: 'medilens/voice-appointment-agent.jpg',
    pipelineSteps: [
      { label: 'Input', title: 'A patient calls', body: 'The voice agent collects department, visit reason, and preferred time from a natural conversation.', output: 'Intent + patient details' },
      { label: 'Decision', title: 'The workflow checks the schedule', body: 'The pipeline looks up doctor availability and branches for booking, cancellation, or rescheduling.', output: 'Available slot or safe fallback' },
      { label: 'Action', title: 'The appointment is updated', body: 'The selected operation changes the appointment record and keeps the caller in the same conversation.', output: 'Confirmed appointment state' },
      { label: 'Proof', title: 'The system leaves an operational trail', body: 'Confirmation email, voice logs, complaints, and admin visibility make the automation auditable.', output: 'Confirmation + admin record' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'Hospital booking, complaints, and admin tracking were manual, staff-run processes. Every appointment call required a receptionist; every complaint went through a paper trail; admins had no live view of what was happening on the floor. I set out to automate all three — starting with the highest-volume task: phone bookings.',
      },
      {
        heading: 'How the system works',
        body: 'A caller phones in and the voice agent carries the full conversation — asking for the department, the reason for the visit, and preferred time, then confirming the details back to the caller before booking. If the caller wants to reschedule or cancel mid-call, the agent pivots the flow instead of starting over. Every conversation state — intent detected, details collected, confirmation given — maps to a specific branch in the pipeline, so the system degrades gracefully instead of guessing.',
      },
      {
        heading: 'The hardest part',
        body: 'Conversation state and fallback handling are important design concerns for a voice workflow. The exported flows show intended branches for booking and cancellation, but no public test suite or measured failure-handling results are available, so I describe this as a workflow prototype rather than production-ready software.',
      },
      {
        heading: 'Proof',
        body: 'The repository publishes workflow exports and links to two product demos. A professor test and live deployment are portfolio-reported, but are not independently evidenced by the public repository; no public test suite or deployment endpoint is included.',
      },
    ],
    images: [
      { src: 'medilens/complaint-management.webp', jpg: 'medilens/complaint-management.jpg', caption: 'Complaint-management workflow interface sample' },
      { src: 'medilens/admin-command-center.webp', jpg: 'medilens/admin-command-center.jpg', caption: 'Admin dashboard for decision support' },
    ],
    videos: [
      { label: 'Watch voice demo', url: 'https://www.youtube.com/watch?v=migZQqh0CoA' },
      { label: 'Watch full demo', url: 'https://www.youtube.com/watch?v=L5w1mAUsjp0' },
    ],
    repoUrl: 'https://github.com/MaryumAkram16/medilens',
    scopeNote:
      'Voice Appointment Agent, Complaint Management, and Hospital Admin Command Center shown here are built by me. MediLens also includes a Lab Report Analyzer, Symptom Checker, and RAG Knowledge Base built by a collaborator (credited in the repo) — not covered in this post.',
  },
  {
    slug: 'roshanai-freelancer-market-intelligence',
    title: 'Building a freelancer market-intelligence app with job-data integrations',
    category: 'AI Product',
    project: 'RoshanAI',
    date: 'Jul 2026',
    readTime: '7 min read',
    summary:
      'Freelancers guess at their rates and write generic proposals. RoshanAI includes JSearch and SerpAPI integration paths, career-analysis flows, and proposal generation. Whether current data is returned depends on API access and runtime configuration; the project has no published data-freshness or recommendation-quality benchmark. Here is how the pipeline works — and the mistake I made with API keys.',
    tags: ['Market Data', 'Skill Gap Analysis', 'Proposal Generator'],
    heroImage: 'roshanai/intelligence-layer.webp',
    heroImageJpg: 'roshanai/intelligence-layer.jpg',
    pipelineSteps: [
      { label: 'Collect', title: 'Job-data APIs are queried', body: 'The code includes JSearch and SerpAPI integration paths; current results depend on credentials, provider availability, and runtime configuration.', output: 'Market postings' },
      { label: 'Compare', title: 'Resume skills meet market demand', body: 'The resume is parsed and claimed skills are matched against what the live roles request.', output: 'Explainable skill-gap estimate' },
      { label: 'Generate', title: 'The next action is written', body: 'Job analysis, rate context, and relevant experience are combined into a tailored proposal.', output: 'Client-ready proposal' },
      { label: 'Coach', title: 'Pricing gets a market anchor', body: 'The Salary Coach turns role, location, and market data into a suggested pricing range.', output: 'Rate suggestion' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'Freelancers had no easy way to see live market data when pricing and pitching for work. A freelancer in Pakistan setting rates for a US client was guessing — no visibility into what similar roles actually pay, which skills real postings demand, or how their resume stacks up against what employers are asking for today.',
      },
      {
        heading: 'The pipeline',
        body: 'RoshanAI pulls live job postings from JSearch and SerpAPI, parses the user\u2019s resume with NLP, matches claimed skills against real postings to produce a gap score, and generates a tailored proposal with a rate suggestion grounded in actual market numbers. API fallbacks may use model knowledge, so returned data and generated scores are not guaranteed to be current or validated.',
      },
      {
        heading: 'The hardest technical challenge',
        body: 'Resume parsing into a meaningful gap score. The pipeline has to take raw resume text, extract real skills with NLP (not keyword lists), match them against what live postings actually demand, and turn that into a score that means something rather than a plausible-looking number. The hardest design decision was resisting the temptation to oversell it: a gap score that can\u2019t be explained is a fake metric, so I shipped an honest AI-generated estimate with the limitations stated plainly instead of a polished dashboard that pretends to be science.',
      },
      {
        heading: "What I'd do differently",
        body: 'Two things: the API keys are called client-side right now, which exposes them in the browser — a server-side proxy is the correct fix. And the original roshanai.com domain is dead; the live version now runs on GitHub Pages/Vercel instead.',
      },
      {
        heading: 'Proof',
        body: 'Three users is a portfolio-reported figure, not independently substantiated by the public repository. The Gap Score is an AI-generated estimate without a published ground-truth benchmark.',
      },
    ],
    images: [
      { src: 'roshanai/skill-gap-analysis.webp', jpg: 'roshanai/skill-gap-analysis.jpg', caption: 'Example job results displayed alongside a resume profile' },
      { src: 'roshanai/proposal-generator.webp', jpg: 'roshanai/proposal-generator.jpg', caption: 'Generated output: job analysis, rate suggestion, tailored proposal' },
    ],
    videos: [{ label: 'Watch demo', url: 'https://www.youtube.com/watch?v=crTVbzsgehc' }],
    repoUrl: 'https://github.com/MaryumAkram16/RoshanAI',
  },
  {
    slug: 'skillsync-career-discovery-pipeline',
    title: 'Verifying skills against live market demand, not guesswork',
    category: 'Full-Stack AI',
    project: 'SkillSync AI',
    date: 'Jun 2026',
    readTime: '6 min read',
    summary:
      'Career discovery tools rarely check claimed skills against real, current market demand. The public source includes assessment, career-tool, authentication, rate-limiting, and market-integration code, and the repository has tests and a CI workflow. Usage counts are portfolio-reported; recommendation quality and external security testing are not independently established by the public artifacts.',
    tags: ['Dashboard', 'Radar', 'Assessment'],
    heroImage: 'skillsync/dashboard.webp',
    heroImageJpg: 'skillsync/dashboard.jpg',
    pipelineSteps: [
      { label: 'Assess', title: 'The user answers a skill quiz', body: 'An adaptive assessment checks claimed ability with role-relevant questions instead of only asking what the user likes.', output: 'Assessment result' },
      { label: 'Scan', title: 'Market Radar checks demand', body: 'The target role is compared with live postings to show which skills are currently being requested.', output: 'Demand signal' },
      { label: 'Parse', title: 'The profile is matched to jobs', body: 'Resume, role, and country are parsed into live matches with ATS-oriented scoring.', output: 'Market-fit profile' },
      { label: 'Guide', title: 'Career Mentor builds the next step', body: 'Assessment results and market evidence become personalized recommendations, roadmap items, and interview preparation.', output: 'Actionable career path' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'Career discovery tools rarely check claimed skills against real, current market demand. Most quizzes ask what you like and tell you what you are — without ever checking whether the market wants what you claim to know.',
      },
      {
        heading: 'What I built',
        body: 'The public repository contains adaptive-assessment, market-integration, resume-parsing, and career-recommendation code, as well as authentication, rate limiting, Firestore rules, tests, and a CI workflow. This is evidence of implementation, not proof of production usage, an independent security audit, or recommendation accuracy.',
      },
      {
        heading: 'Proof',
        body: 'Nine users is portfolio-reported, not independently confirmed by the public repository. The repository contains tests and a GitHub Actions workflow, but does not substantiate the earlier 94/94 test total or 12-payload security-test claim. No external security audit or recommendation-quality benchmark is published.',
      },
      {
        heading: 'What I learned',
        body: 'The project reinforced the value of testing application boundaries and reviewing security controls. The public repository exposes a test suite and CI workflow, but does not provide the claimed total of 94 tests, 12 adversarial payload results, production traffic, or an external audit; those claims should not be treated as verified.',
      },
    ],
    images: [
      { src: 'skillsync/radar.webp', jpg: 'skillsync/radar.jpg', caption: 'Market-demand scan interface for a target role' },
      { src: 'skillsync/skill-assessment.webp', jpg: 'skillsync/skill-assessment.jpg', caption: 'Sample assessment interface for claimed skills' },
      { src: 'skillsync/parser.webp', jpg: 'skillsync/parser.jpg', caption: 'Resume, role, and country parsing interface' },
      { src: 'skillsync/career-mentor.webp', jpg: 'skillsync/career-mentor.jpg', caption: 'Career recommendation interface' },
    ],
    videos: [
      { label: 'Watch Skill Assessment demo', url: 'https://www.youtube.com/watch?v=QfERaD_cMY8' },
      { label: 'Watch Career Mentor demo', url: 'https://www.youtube.com/watch?v=-qOdwym_3Ko' },
    ],
    repoUrl: 'https://github.com/MaryumAkram16/Skillsync-AI',
    scopeNote:
      'Dashboard, Radar, Skill Assessment, Parser, and Career Mentor shown here are built by me. Interview Prep and Roadmap features were built by a collaborator (credited in the repo) and are not covered here.',
  },
]
