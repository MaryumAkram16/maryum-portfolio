# Maryum Akram

## LLM Application Engineer

**LLM Application Engineer building structured, reliable AI workflows rather than unconstrained demos.** I connect model capabilities to validated schemas, evaluation suites, secure APIs, background jobs, user-facing products, and explicit failure paths.

## Selected engineering projects

### Receipt Extractor API

Built a structured LLM extraction service that returns validated receipt fields and routes uncertainty to `needs_review`. Implemented provider swapping, 30-second timeouts, transient-error retries, one bounded repair attempt, quarantine on repeated schema failure, prompt-injection testing, background jobs, idempotency, alerting, SQLite persistence, PDF reports, an 8-case labelled evaluation, Docker, CI, and technical latency benchmarking.

### RoshanAI

Built a live-data AI career system that combines job search ingestion, structured reasoning, skill-gap analysis, and proposal generation. Added server-side model-provider boundaries, authentication, deployment automation, and transparent evaluation language separating user validation from unbenchmarked generated scores.

### MediLens

Built a live voice-AI hospital receptionist: Retell agent tools for booking, rescheduling, cancellation, and voice complaints, ported from n8n to TypeScript serverless. Gemini triage uses a strict JSON schema, a confidence threshold for human review, a keyword fallback, and an emergency rule in code that the model cannot override. 261 API tests in CI plus 24 scripted voice journeys that check every spoken reply; real calls exposed four integration bugs (browser, Retell transport, payload size, model latency), each fixed with a test.

### SkillSync AI

Built a secure AI product with authenticated workflows, rate limiting, audit logging, adversarial prompt/security tests, CI validation, and documented limitations around recommendation-quality measurement.

### Resume Screener

Built an AI-assisted two-stage resume and job-fit system using classical ML and embeddings, with model comparison, reproducible artifacts, deterministic training scripts, versioned run manifests, Docker, and CI.

## LLM engineering strengths

Structured output contracts, Pydantic validation, bounded repair, retries, fallbacks, quarantine paths, prompt-injection resistance, provider abstraction, latency and cost awareness, background workflows, idempotency, evaluation harnesses, FastAPI, React, Streamlit, OpenAI/Gemini-compatible APIs, Firebase, Supabase, Docker, and GitHub Actions.

## Interview focus

Explain what happens when the model is wrong, slow, unavailable, malformed, manipulated, or uncertain. Show the schema boundary, evaluation cases, retry budget, human-review path, observability signal, and cost trade-off before discussing prompt wording.
