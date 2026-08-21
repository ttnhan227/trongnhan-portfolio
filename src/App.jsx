import { useState } from 'react'
import {
  siCelery, siDocker, siDotnet, siFastapi, siFlutter, siGit, siGithubactions,
  siJunit5, siJavascript, siMinio, siMongodb, siMysql, siOpenapiinitiative,
  siOpenjdk, siPostgresql, siPytest, siPython, siQgis, siReact, siRedis, siSharp,
  siSpringboot, siSpringsecurity, siSqlalchemy, siTestinglibrary, siTypescript,
  siVite, siVitest,
} from 'simple-icons'

const projects = [
  {
    id: 'groundwork',
    number: '01',
    date: 'JUL 2026 – PRESENT',
    title: 'Groundwork',
    category: 'Full-Stack AI Document Workspace & Verification Studio',
    overview: 'A full-stack document workspace that ingests multiple document formats, extracts and chunks content, and stores embeddings for semantic search with citation verification.',
    problem: 'LLM outputs often hallucinate document facts, cite phantom pages, and produce ungrounded exports in enterprise proposal workflows.',
    solution: 'Engineered an asynchronous Celery/Redis pipeline with per-job cancellation, multi-format ingestion, code-level citation verification against physical page records, and export gating until deliverables pass 100% verification.',
    architecture: [
      { label: 'Async Queue & OCR', detail: 'Celery + Redis task pipeline for document ingestion, OCR extraction, and AI drafting with per-job cancellation' },
      { label: 'Citation Verification', detail: 'Cross-checks generated claims against stored document pages, strips phantom citations, and blocks ungrounded export' },
      { label: 'Semantic Search', detail: 'PostgreSQL and pgvector cosine similarity search with chunk-level source citations' },
      { label: 'Isolation & CI Tests', detail: 'Workspace-scoped multi-tenancy enforced with automated codebase scan checks and 102 Pytest tests' },
    ],
    stack: ['FastAPI', 'Python', 'React', 'PostgreSQL', 'pgvector', 'Celery', 'Redis', 'Docker', 'Google Cloud Run'],
    image: '/images/groundwork-landing.png',
    liveHref: 'https://groundwork-client.onrender.com/',
    repoHref: 'https://github.com/ttnhan227/Groundwork',
  },
  {
    id: 'verispend',
    number: '02',
    date: 'APR — JUN 2026',
    title: 'VeriSpend',
    category: 'Multi-Tenant AI Expense Review Platform',
    overview: 'A multi-tenant expense review platform in ASP.NET Core and React with tenant-scoped queries, full before/after audit snapshots, and vision-assisted receipt extraction.',
    problem: 'Manual receipt entry is error-prone, while unconstrained generative AI extraction risks hallucinations and lacks compliance auditability.',
    solution: 'Built a multi-tenant platform scoping every repository query to JWT tenant claims, Mistral Vision extraction with deterministic guardrails (spend limits, duplicate checks, budget alerts), and full JSON state change audit logging.',
    architecture: [
      { label: 'Tenant Isolation', detail: 'Repository queries strictly scoped to tenant ID derived from authenticated JWT claims' },
      { label: 'Immutable Audit Log', detail: 'Records actor identity, action type, and full before/after JSON snapshots for all 6 expense state transitions' },
      { label: 'Vision AI & Guardrails', detail: 'Mistral Vision receipt field extraction with heuristic fallback and deterministic policy limit alerts' },
      { label: 'Benchmark CLI', detail: 'Standalone CLI tool (ReceiptEvaluator) to benchmark field accuracy against labeled datasets, backed by 14 xUnit tests' },
    ],
    stack: ['ASP.NET Core', 'C#', 'React', 'TypeScript', 'EF Core', 'PostgreSQL', 'Mistral AI', 'Docker'],
    image: '/images/verispend-landing.png',
    liveHref: 'https://verispend-client.onrender.com/',
    repoHref: 'https://github.com/ttnhan227/VeriSpend',
  },
  {
    id: 'logiflow',
    number: '03',
    date: 'OCT 2025 — JAN 2026',
    title: 'LogiFlow',
    category: 'Freight Management & Real-Time Telemetry Platform',
    overview: 'An academic team platform coordinating orders, dispatching, and delivery workflows across 4 distinct user roles with real-time GPS tracking and PayPal checkout.',
    problem: 'Coordinating multi-stop freight logistics across dispatchers, drivers, and customers leads to lost shipment visibility, delayed billing, and lack of fulfillment proof.',
    solution: 'Developed a Spring Boot backend and React web client with real-time WebSocket GPS telemetry to Leaflet maps, Flutter driver workflow with POD signatures, and dynamic iText PDF invoicing.',
    architecture: [
      { label: 'Role Workflows', detail: 'Coordinated order, dispatch, and delivery state machines across 4 distinct roles (Admin, Dispatcher, Driver, Customer)' },
      { label: 'Live Telemetry', detail: 'Real-time GPS coordinate broadcasting over WebSockets from Flutter mobile to React Leaflet dispatch map' },
      { label: 'Billing & Invoicing', detail: 'Integrated PayPal sandbox checkout and dynamic PDF invoice generation via Thymeleaf templates and iText' },
      { label: 'Mobile & CI/CD', detail: 'Flutter mobile companion with digital signature capture, containerized via Docker Compose with GitHub Actions CI' },
    ],
    stack: ['Spring Boot', 'Java', 'React', 'Flutter', 'PostgreSQL', 'WebSockets', 'Thymeleaf', 'iText', 'Docker'],
    image: '/images/logiflow-landing.png',
    repoHref: 'https://github.com/ttnhan227/logiflow',
  },
]

const skillDomains = [
  {
    domain: 'Backend & APIs',
    description: 'Constructing performant, typed REST APIs and service layers with clear data contracts.',
    skills: [
      { name: 'Python', icon: siPython },
      { name: 'FastAPI', icon: siFastapi },
      { name: 'SQLAlchemy', icon: siSqlalchemy },
      { name: 'C#', icon: siSharp },
      { name: 'ASP.NET Core', icon: siDotnet },
      { name: 'EF Core', icon: siDotnet },
      { name: 'Java', icon: siOpenjdk },
      { name: 'Spring Boot', icon: siSpringboot },
      { name: 'Spring Security', icon: siSpringsecurity },
      { name: 'RESTful APIs', icon: siOpenapiinitiative },
    ],
  },
  {
    domain: 'Data Stores & Vector Search',
    description: 'Relational schemas, geospatial indexing, vector embeddings, and caching layers.',
    skills: [
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'pgvector', icon: siPostgresql },
      { name: 'PostGIS', icon: siQgis },
      { name: 'Redis', icon: siRedis },
      { name: 'MinIO (S3)', icon: siMinio },
      { name: 'MySQL', icon: siMysql },
      { name: 'MongoDB', icon: siMongodb },
    ],
  },
  {
    domain: 'Frontend & Interfaces',
    description: 'Building responsive, accessible web interfaces and mobile companion applications.',
    skills: [
      { name: 'React', icon: siReact },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'Vite', icon: siVite },
      { name: 'Flutter', icon: siFlutter },
    ],
  },
  {
    domain: 'Infrastructure & Async Systems',
    description: 'Containerization, background task queues, CI/CD pipelines, and real-time protocols.',
    skills: [
      { name: 'Docker', icon: siDocker },
      { name: 'Celery', icon: siCelery },
      { name: 'GitHub Actions', icon: siGithubactions },
      { name: 'Git', icon: siGit },
      { name: 'STOMP / WebSockets', icon: siOpenapiinitiative },
    ],
  },
  {
    domain: 'Testing & Verification',
    description: 'Automated unit, integration, and end-to-end testing for dependable refactoring.',
    skills: [
      { name: 'pytest', icon: siPytest },
      { name: 'xUnit', icon: siDotnet },
      { name: 'JUnit 5', icon: siJunit5 },
      { name: 'Vitest', icon: siVitest },
      { name: 'Playwright', icon: siTestinglibrary },
    ],
  },
]

const certifications = [
  {
    year: '2025',
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    description: 'Foundations of vectorization, neural network architectures, backpropagation, and practical hyperparameter tuning.',
    href: 'https://www.coursera.org/account/accomplishments/verify/G8OM8ZF9XV0D',
  },
  {
    year: 'MAY 2025',
    title: 'Machine Learning and NLP Basics',
    issuer: 'Edureka',
    description: 'Statistical modeling, text preprocessing pipelines, tokenization, and natural language processing workflows.',
    href: 'https://www.coursera.org/account/accomplishments/verify/PF7VUJA76FOD',
  },
  {
    year: 'FEB 2025',
    title: 'Using Databases with Python',
    issuer: 'University of Michigan',
    description: 'Relational data modeling, SQL query execution, and database integration within Python backends.',
    href: 'https://www.coursera.org/account/accomplishments/verify/QHQP82P01A45',
  },
]

const engineeringValues = [
  {
    number: '01',
    title: 'Explicit Data Boundaries',
    description: 'AI assistants propose data; authoritative backend services validate, sanitize, and log every state transition. Financial and security decisions remain strictly deterministic.',
  },
  {
    number: '02',
    title: 'Resilient Asynchronous Pipelines',
    description: 'Long-running tasks—such as OCR parsing, embeddings generation, and telemetry indexing—are offloaded to background worker queues with automatic retries and dead-letter handling.',
  },
  {
    number: '03',
    title: 'End-to-End Type Safety & Clarity',
    description: 'Clear schema contracts across database models, API handlers, and client interfaces ensure maintainable codebases with minimal regression risk.',
  },
]

function ArrowUpRight() {
  return (
    <svg className="icon-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg className="icon-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3.5V12.5M8 12.5L12 8.5M8 12.5L4 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="icon-check" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg className="icon-copy" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="5.5" y="5.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 10.5V4C3.5 3.72386 3.72386 3.5 4 3.5H10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function SkillIcon({ icon }) {
  return (
    <svg className="skill-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d={icon.path} />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ttnhan227@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    })
  }

  return (
    <div className="site-wrapper">
      {/* Header & Sticky Navigation */}
      <header className="site-header">
        <div className="header-inner">
          <a className="site-brand" href="#top" aria-label="Tran Trong Nhan - Back to top">
            <span className="brand-name">Tran Trong Nhan</span>
            <span className="brand-role">Software Engineer</span>
          </a>

          <button
            className="menu-toggle-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="menu-toggle-icon" />
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>

          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main Navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>Philosophy</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Technical Stack</a>
            <a href="#credentials" onClick={() => setMenuOpen(false)}>Milestones</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <div className="header-status">
            <a className="status-pill" href="mailto:ttnhan227@gmail.com" title="Currently open to software engineering roles">
              <span className="status-dot" />
              <span>Open for Work</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="top">
          <div className="hero-container">
            <div className="hero-meta-bar">
              <span className="meta-chip">Ho Chi Minh City, Vietnam</span>
              <span className="meta-divider">/</span>
              <span className="meta-chip">Backend & Distributed Systems</span>
            </div>

            <h1 className="hero-heading">
              Building reliable backends, distributed async pipelines, and grounded AI workflows.
            </h1>

            <p className="hero-subtext">
              I’m a software engineer who values explicit data boundaries, predictable business logic, and resilient architectures that make complex systems dependable in production.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                <span>Explore Selected Work</span>
                <ArrowDown />
              </a>
              <a className="btn btn-secondary" href="/Tran_Trong_Nhan_CV.pdf" target="_blank" rel="noreferrer">
                <span>Read Résumé (PDF)</span>
                <ArrowUpRight />
              </a>
            </div>

            <div className="hero-stack-preview">
              <span className="stack-preview-label">Core ecosystem:</span>
              <span className="stack-preview-tags">
                <code>Python / FastAPI</code>
                <code>C# / ASP.NET Core</code>
                <code>Java / Spring Boot</code>
                <code>PostgreSQL / pgvector</code>
                <code>React / TypeScript</code>
              </span>
            </div>
          </div>
        </section>

        {/* About & Engineering Philosophy Section */}
        <section className="about-section" id="about">
          <div className="section-container">
            <div className="section-header-block">
              <div className="section-kicker">
                <span className="kicker-index">01</span>
                <span className="kicker-title">Engineering Philosophy</span>
              </div>
              <h2 className="section-title">
                Prioritizing system reliability over <em>unnecessary complexity.</em>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-narrative">
                <p className="lead-paragraph">
                  I care about the foundational layers of software: how data flows, where state lives, how failures are recovered, and how to keep asynchronous workflows deterministic.
                </p>
                <p>
                  When integrating AI, I treat models as assistive tools that propose extractions and semantic rankings—while authoritative backend services enforce authentication, tenant isolation, and strict validation.
                </p>
              </div>

              <div className="values-list">
                {engineeringValues.map((value) => (
                  <article className="value-card" key={value.number}>
                    <div className="value-card-header">
                      <span className="value-number">{value.number}</span>
                      <h3 className="value-title">{value.title}</h3>
                    </div>
                    <p className="value-description">{value.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects Showcase */}
        <section className="projects-section" id="projects">
          <div className="section-container">
            <div className="section-header-block text-on-dark">
              <div className="section-kicker kicker-light">
                <span className="kicker-index">02</span>
                <span className="kicker-title">Selected Work</span>
              </div>
              <h2 className="section-title title-light">
                Systems built for <em>real workflows.</em>
              </h2>
              <p className="section-subtitle subtitle-light">
                Three production-grade builds exploring asynchronous document pipelines, multi-tenant financial review, and real-time fleet operations.
              </p>
            </div>

            <div className="project-feed">
              {projects.map((project) => (
                <article className="project-card" key={project.id} id={project.id}>
                  {/* Top Metadata Header */}
                  <div className="project-card-top">
                    <div className="project-index-badge">
                      <span className="project-num">{project.number}</span>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <span className="project-date">{project.date}</span>
                  </div>

                  {/* Two-Column Showcase: Content & Visual Preview */}
                  <div className="project-body-grid">
                    <div className="project-info-col">
                      <h3 className="project-name">{project.title}</h3>
                      <p className="project-overview">{project.overview}</p>

                      {/* Problem & Solution Breakdown */}
                      <div className="project-challenge-box">
                        <div className="challenge-item">
                          <span className="challenge-label">The Challenge:</span>
                          <p>{project.problem}</p>
                        </div>
                        <div className="challenge-item">
                          <span className="challenge-label">The Architectural Solution:</span>
                          <p>{project.solution}</p>
                        </div>
                      </div>

                      {/* Technical Decisions Architecture List */}
                      <div className="project-architecture-block">
                        <span className="block-title">Key Architectural Highlights:</span>
                        <ul className="arch-list">
                          {project.architecture.map((item) => (
                            <li key={item.label}>
                              <span className="arch-badge">{item.label}</span>
                              <span className="arch-detail">{item.detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="project-stack-wrap">
                        {project.stack.map((tech) => (
                          <span className="tech-tag" key={tech}>{tech}</span>
                        ))}
                      </div>

                      {/* Actions: Live Demo & GitHub Code */}
                      <div className="project-actions-row">
                        {project.liveHref && (
                          <a
                            className="btn-project btn-project-live"
                            href={project.liveHref}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>Live Application</span>
                            <ArrowUpRight />
                          </a>
                        )}
                        <a
                          className="btn-project btn-project-code"
                          href={project.repoHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Inspect Repository</span>
                          <ArrowUpRight />
                        </a>
                      </div>
                    </div>

                    <div className="project-visual-col">
                      <div className="interface-frame">
                        <div className="interface-frame-bar">
                          <div className="frame-dots">
                            <span className="frame-dot" />
                            <span className="frame-dot" />
                            <span className="frame-dot" />
                          </div>
                          <span className="frame-url">
                            {project.liveHref
                              ? new URL(project.liveHref).hostname
                              : `github.com/ttnhan227/${project.title.toLowerCase()}`}
                          </span>
                        </div>
                        <div className="interface-viewport">
                          <img
                            src={project.image}
                            alt={`${project.title} interface preview`}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills / Technical Toolkit Section */}
        <section className="skills-section" id="skills">
          <div className="section-container">
            <div className="section-header-block">
              <div className="section-kicker">
                <span className="kicker-index">03</span>
                <span className="kicker-title">Technical Toolkit</span>
              </div>
              <h2 className="section-title">
                Technologies organized by <em>practical use.</em>
              </h2>
              <p className="section-subtitle">
                A solid foundation chosen around architecture requirements—not around collecting badges or assigning arbitrary proficiency scores.
              </p>
            </div>

            <div className="domains-grid">
              {skillDomains.map((group) => (
                <div className="domain-card" key={group.domain}>
                  <div className="domain-header">
                    <h3 className="domain-title">{group.domain}</h3>
                    <p className="domain-desc">{group.description}</p>
                  </div>
                  <div className="domain-skills-list">
                    {group.skills.map((skill) => (
                      <span className="skill-chip" key={skill.name}>
                        <SkillIcon icon={skill.icon} />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials & Milestones Section */}
        <section className="credentials-section" id="credentials">
          <div className="section-container">
            <div className="section-header-block">
              <div className="section-kicker">
                <span className="kicker-index">04</span>
                <span className="kicker-title">Learning Milestones</span>
              </div>
              <h2 className="section-title">
                Verified continuous <em>specialization.</em>
              </h2>
            </div>

            <div className="certifications-list">
              {certifications.map((cert) => (
                <a
                  className="cert-row"
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  key={cert.title}
                >
                  <div className="cert-meta">
                    <span className="cert-year">{cert.year}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                  <div className="cert-main">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-desc">{cert.description}</p>
                  </div>
                  <div className="cert-action">
                    <span className="cert-link-text">Verify Credential</span>
                    <ArrowUpRight />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Web Presence & Contact Section */}
        <section className="contact-section" id="contact">
          <div className="section-container">
            <div className="contact-card">
              <div className="contact-card-content">
                <div className="section-kicker kicker-dark">
                  <span className="kicker-index">05</span>
                  <span className="kicker-title">Get in Touch</span>
                </div>

                <h2 className="contact-headline">
                  Let’s talk about your team’s <em>engineering goals.</em>
                </h2>

                <p className="contact-intro">
                  Whether you have an opening for a software engineer, need someone to architect a clean asynchronous backend, or want to discuss system design, my inbox is always open.
                </p>

                {/* Email Direct Interaction Box */}
                <div className="email-action-box">
                  <a className="email-link" href="mailto:ttnhan227@gmail.com">
                    ttnhan227@gmail.com
                  </a>
                  <button
                    className={`btn-copy-email ${copied ? 'is-copied' : ''}`}
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <CheckIcon />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social & Reference Channels */}
              <div className="presence-channels">
                <a
                  className="presence-link-card"
                  href="https://github.com/ttnhan227"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="presence-top">
                    <span className="presence-label">Code & Source</span>
                    <ArrowUpRight />
                  </div>
                  <strong className="presence-name">GitHub</strong>
                  <span className="presence-handle">@ttnhan227</span>
                </a>

                <a
                  className="presence-link-card"
                  href="https://linkedin.com/in/trantrongnhan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="presence-top">
                    <span className="presence-label">Professional Profile</span>
                    <ArrowUpRight />
                  </div>
                  <strong className="presence-name">LinkedIn</strong>
                  <span className="presence-handle">trantrongnhan</span>
                </a>

                <a
                  className="presence-link-card"
                  href="https://leetcode.com/u/ttnhan227/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="presence-top">
                    <span className="presence-label">Algorithms</span>
                    <ArrowUpRight />
                  </div>
                  <strong className="presence-name">LeetCode</strong>
                  <span className="presence-handle">@ttnhan227</span>
                </a>

                <a
                  className="presence-link-card"
                  href="/Tran_Trong_Nhan_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="presence-top">
                    <span className="presence-label">Full Résumé</span>
                    <ArrowUpRight />
                  </div>
                  <strong className="presence-name">Curriculum Vitae</strong>
                  <span className="presence-handle">Download PDF</span>
                </a>
              </div>
            </div>

            {/* Clean Semantic Footer */}
            <footer className="site-footer">
              <div className="footer-left">
                <span>© {new Date().getFullYear()} Tran Trong Nhan</span>
                <span className="footer-dot">·</span>
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="footer-right">
                <a className="back-to-top" href="#top">
                  <span>Back to top</span>
                  <ArrowDown />
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
