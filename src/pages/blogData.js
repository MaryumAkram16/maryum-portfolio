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
    sections: [
      {
        heading: 'The problem',
        body: 'Hospital booking, complaints, and admin tracking were manual, staff-run processes. Every appointment call required a receptionist; every complaint went through a paper trail; admins had no live view of what was happening on the floor. I set out to automate all three — starting with the highest-volume task: phone bookings.',
      },
      {
        heading: 'What I built',
        body: 'A voice appointment agent that books, reschedules, and cancels appointments over a phone call with no staff involved. Behind it, a complaint management system that structures patient feedback instead of losing it in inboxes, and an admin command center that turns daily operations into decision-ready numbers.',
      },
      {
        heading: 'The hardest part',
        body: 'Conversations are unpredictable. The voice agent had to handle cancellations mid-booking, confirm details back to the caller, and fall back gracefully when it misunderstood — all in real time. Testing a conversational system is harder than testing a form: I had to script dozens of call flows (normal booking, reschedule, cancel, wrong department, silence) before I could call it production-ready.',
      },
      {
        heading: 'Proof',
        body: 'Independently tested by a professor via live link. The demo and full walkthrough are available on YouTube, and the source code is open on GitHub.',
      },
    ],
    images: [
      { src: 'medilens/complaint-management.webp', jpg: 'medilens/complaint-management.jpg', caption: 'Independently tested by a professor via live link' },
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
    title: 'Building market intelligence for freelancers from live job data',
    category: 'AI Product',
    project: 'RoshanAI',
    date: 'Jul 2026',
    readTime: '7 min read',
    summary:
      'Freelancers guess at their rates and write generic proposals. RoshanAI pulls live market data from JSearch and Google Jobs, analyzes skill gaps against real postings, and generates tailored proposals. Here is how the pipeline works — and the mistake I made with API keys.',
    tags: ['Market Data', 'Skill Gap Analysis', 'Proposal Generator'],
    heroImage: 'roshanai/intelligence-layer.webp',
    heroImageJpg: 'roshanai/intelligence-layer.jpg',
    sections: [
      {
        heading: 'The problem',
        body: 'Freelancers had no easy way to see live market data when pricing and pitching for work. A freelancer in Pakistan setting rates for a US client was guessing — no visibility into what similar roles actually pay, which skills real postings demand, or how their resume stacks up against what employers are asking for today.',
      },
      {
        heading: 'The pipeline',
        body: 'RoshanAI pulls live job postings from JSearch and Google Jobs, parses the user\u2019s resume with NLP, matches claimed skills against real postings to produce a gap score, and generates a tailored proposal with a rate suggestion grounded in actual market numbers. Everything the user sees is derived from live data, not a static template.',
      },
      {
        heading: 'The hardest technical challenge',
        body: 'Resume parsing into a meaningful gap score. Going from raw resume text to NLP-matching a person\u2019s actual skills against live job postings — then turning that into a score that means something rather than a plausible-looking number — was the hardest part of the build. I\u2019d rather ship an honest estimate than a polished fake metric.',
      },
      {
        heading: "What I'd do differently",
        body: 'Two things: the API keys are called client-side right now, which exposes them in the browser — a server-side proxy is the correct fix. And the original roshanai.com domain is dead; the live version now runs on GitHub Pages/Vercel instead.',
      },
      {
        heading: 'Proof',
        body: '3 real users ran the full pipeline. The Gap Score is an AI-generated estimate, not a measured accuracy figure — I have not benchmarked it against ground truth.',
      },
    ],
    images: [
      { src: 'roshanai/skill-gap-analysis.webp', jpg: 'roshanai/skill-gap-analysis.jpg', caption: '29 live jobs fetched and analyzed against the resume' },
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
      'Career discovery tools rarely check claimed skills against real, current market demand. SkillSync AI runs an adaptive assessment, matches it against live postings, and produces market-grounded career recommendations. It also went through adversarial security testing in production.',
    tags: ['Dashboard', 'Radar', 'Assessment'],
    heroImage: 'skillsync/dashboard.webp',
    heroImageJpg: 'skillsync/dashboard.jpg',
    sections: [
      {
        heading: 'The problem',
        body: 'Career discovery tools rarely check claimed skills against real, current market demand. Most quizzes ask what you like and tell you what you are — without ever checking whether the market wants what you claim to know.',
      },
      {
        heading: 'What I built',
        body: 'An adaptive skill assessment matched against live market data, a radar that scans live demand for a target role, a resume parser that scores ATS fit against current postings, and a career mentor that builds recommendations from assessment results and real market data. Architected and built end-to-end, with real security and rate-limiting in production.',
      },
      {
        heading: 'Proof',
        body: '9 real users. 94/94 CI tests passing. Adversarial security testing (12 payload tests), rate limiting, and audit logging in production.',
      },
      {
        heading: 'What I learned',
        body: 'Testing a security posture adversarially — deliberately throwing 12 crafted payloads at your own endpoints — taught me more than any tutorial. When production traffic arrives, you want to know the system holds.',
      },
    ],
    images: [
      { src: 'skillsync/radar.webp', jpg: 'skillsync/radar.jpg', caption: 'Live market demand scan for a target role' },
      { src: 'skillsync/skill-assessment.webp', jpg: 'skillsync/skill-assessment.jpg', caption: 'Adaptive quiz verifying claimed skills against real performance' },
      { src: 'skillsync/parser.webp', jpg: 'skillsync/parser.jpg', caption: 'Resume + role + country parsed into live job matches with ATS scoring' },
      { src: 'skillsync/career-mentor.webp', jpg: 'skillsync/career-mentor.jpg', caption: 'Recommendations built from assessment results and live market data' },
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
