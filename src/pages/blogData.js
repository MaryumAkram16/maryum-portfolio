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
        body: 'The first version ran as n8n workflows with no tests, and two real problems were hiding in it: two callers could book the same slot, and anyone with an appointment id could cancel it. I ported my modules to TypeScript serverless functions: booking, rescheduling, and cancelling now happen inside Postgres functions with a unique index against double booking, and the caller must give the phone number they booked with. Then the first real calls found four more bugs the tests had missed: a white page in newer Chrome, a Retell transport change, a request-size limit, and Gemini timing out. Each fix shipped with a regression test.',
      },
      {
        heading: 'Proof',
        body: 'The repository now has 261 API tests in CI, 23 of them against a real Postgres service, plus 33 website tests and 24 scripted voice journeys that send signed requests to the real tool endpoints. The website is live at medilens-web-theta.vercel.app; browser calls need a demo code, available on request. On a live run over 50 synthetic complaints, Gemini 3.5 Flash-Lite got the department right for 44 and caught all 6 emergencies: about the same accuracy as the keyword rules alone, but with 14 complaints sent to staff instead of 50.',
      },
    ],
    images: [
      { src: 'medilens/complaint-management.webp', jpg: 'medilens/complaint-management.jpg', caption: 'Complaint-management workflow interface sample' },
      { src: 'medilens/admin-command-center.webp', jpg: 'medilens/admin-command-center.jpg', caption: 'Admin dashboard for decision support' },
    ],
    videos: [
      { label: 'Try the live site', url: 'https://medilens-web-theta.vercel.app' },
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
        body: 'The public repository contains adaptive-assessment, market-integration, resume-parsing, and career-recommendation code, as well as authentication, rate limiting, Firestore rules, tests, and a CI workflow. This is evidence of implementation, not proof of production usage or an independent security audit.',
      },
      {
        heading: 'Proof',
        body: 'The public repository has 133 Vitest tests that run in GitHub Actions, with a TypeScript check, on every push. They include a labelled evaluation of the job matching: 20 resumes, 30 job postings and 71 resume–job pairs graded strong, partial or poor. The rule-based pre-score orders 94% of same-resume pairs correctly, and every strong fit reaches the AI step. Run live on the same pairs, the AI scoring step orders 98.1% of them correctly on gpt-4o-mini and 81 of 81 on Gemini 3.5 Flash-Lite, the model the app now uses, and scores every poor fit below 50. No external security audit is published.',
      },
      {
        heading: 'What I learned',
        body: 'Measuring the matching changed what I worked on. The first evaluation run showed that a student\'s degree years were being counted as work experience, which quietly removed the experience penalty for senior roles, and that plurals like "REST APIs" were missed. Both were small fixes once they were visible. The same run showed the limits of keyword matching: it cannot tell that a React developer partly fits a Vue role, which is the judgment the AI step exists to make.',
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
