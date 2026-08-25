import { useState, useEffect } from 'react'
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
    showcaseGrid: [
      {
        id: 'groundwork-landing',
        label: 'Platform Landing & Interactive Verification Simulator',
        url: 'groundwork-client.onrender.com/',
        image: '/images/groundwork/groundwork-landing.png',
        tag: 'Platform: Landing & Simulator',
        description: 'Commercial manuscript landing page with document dropzone and Interactive Verification Gate Simulator.',
      },
      {
        id: 'groundwork-library',
        label: 'Dossier Command Hub & Template Library',
        url: 'groundwork-client.onrender.com/?app=1',
        image: '/images/groundwork/groundwork-library.png',
        tag: 'Command: Dossier Library',
        description: 'Multi-workspace regulatory library organizing enterprise compliance dossiers, preconfigured templates, and audit readiness.',
      },
      {
        id: 'groundwork-studio',
        label: 'Verification Studio & Manuscript Canvas',
        url: 'groundwork-client.onrender.com/?app=1&ws=ws_01',
        image: '/images/groundwork/groundwork-studio.png',
        tag: 'Studio: Manuscript & Citations',
        description: 'Active proposal workspace with 4 indexed evidence sources, inline [1][2] citations, and margin marginalia with 1-click verified SLA fixes.',
      },
      {
        id: 'groundwork-insights',
        label: 'Research, Benchmarks & Regulatory Insights Hub',
        url: 'groundwork-client.onrender.com/#insights',
        image: '/images/groundwork/groundwork-insights.png',
        tag: 'Research: Benchmarks & Whitepapers',
        description: 'Technical whitepapers and empirical evaluations benchmarking 0.0% hallucinated citations against RAG baselines on SEC 10-K filings.',
      },
    ],
    image: '/images/groundwork/groundwork-landing.png',
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
    showcaseGrid: [
      {
        id: 'verispend-landing',
        label: 'SaaS Platform Landing & Product Tour',
        url: 'verispend-client.onrender.com/',
        image: '/images/verispend/verispend-landing.png',
        tag: 'Platform: Landing & Tour',
        description: 'Commercial SaaS landing presence, feature walkthroughs, and tier-based enterprise pricing plans.',
      },
      {
        id: 'verispend-review',
        label: 'Multi-Tenant Expense Management & Review',
        url: 'verispend-client.onrender.com/expenses',
        image: '/images/verispend/verispend-review.png',
        tag: 'App: Expense Review',
        description: 'Tenant-scoped expense inbox with receipt previews, status workflows, and category breakdowns.',
      },
      {
        id: 'verispend-vision',
        label: 'Mistral Vision AI Extraction & Copilot Audit',
        url: 'verispend-client.onrender.com/expenses/exp-803',
        image: '/images/verispend/verispend-vision.png',
        tag: 'AI: Vision & Copilot',
        description: 'Multimodal vision extraction parsing receipt metadata, itemized line items, risk scores (78/100), and Copilot audit recommendations.',
      },
      {
        id: 'verispend-guardrails',
        label: 'Deterministic Spend Limits & Policy Lab Simulator',
        url: 'verispend-client.onrender.com/policy-lab',
        image: '/images/verispend/verispend-guardrails.png',
        tag: 'Policy: Spend Guardrails',
        description: 'Rule engine validating policy thresholds, automated simulation rates, and budget limit violation flags.',
      },
    ],
    image: '/images/verispend/verispend-landing.png',
    liveHref: 'https://verispend-client.onrender.com/',
    repoHref: 'https://github.com/ttnhan227/VeriSpend',
  },
  {
    id: 'logiflow',
    number: '03',
    date: 'OCT 2025 — JAN 2026',
    title: 'LogiFlow',
    category: 'Freight Management & Real-Time Telemetry Platform',
    overview: 'An enterprise logistics platform coordinating multi-stop freight orders, linehaul manifests, and live fleet dispatching with interactive GIS routing and real-time STOMP/WebSocket telemetry.',
    problem: 'Coordinating multi-stop regional freight across dispatchers, fleet drivers, and operations leads to blind spots in transit, delayed carrier re-assignment, and lack of fulfillment SLA oversight.',
    solution: 'Developed a Spring Boot backend and React web client featuring an interactive Leaflet corridor dispatch map, multi-role operations oversight, WebSocket-based live driver tracking, automated trip manifest scheduling, and PayPal checkout with PDF invoicing.',
    architecture: [
      { label: 'Role Workflows', detail: 'Coordinated state machines across 4 distinct roles (Admin Executive, Operations Dispatcher, Fleet Driver, Commercial Customer)' },
      { label: 'GIS & Telemetry', detail: 'Interactive Leaflet corridor polyline routing, waypoint staging, and real-time GPS coordinate broadcasting over STOMP/WebSockets' },
      { label: 'Operations & SLAs', detail: 'Executive command dashboard with DIFOT reliability metrics, commercial fleet readiness tracking, and latency analytics' },
      { label: 'Billing & Invoicing', detail: 'Integrated PayPal sandbox checkout and dynamic PDF invoice generation via Thymeleaf templates and iText' },
      { label: 'Mobile & Container', detail: 'Flutter driver companion with digital signature capture, containerized multi-service architecture with Docker' },
    ],
    stack: ['Spring Boot', 'Java', 'React', 'Leaflet', 'Flutter', 'PostgreSQL', 'WebSockets', 'Recharts', 'Thymeleaf', 'iText', 'Docker'],
    showcaseGrid: [
      {
        id: 'home-hero',
        label: 'Home: Pan-Vietnam Hub & Telemetry',
        url: 'logiflow.vn/',
        image: '/images/logiflow/logiflow-home-hero.png',
        tag: 'Public: Landing & Radar',
        description: 'Customer portal with live active linehaul radar, GPS coordinate telemetry, and instant shipment tracking.',
      },
      {
        id: 'home-news',
        label: 'Supply Chain News & Market Insights',
        url: 'logiflow.vn/insights',
        image: '/images/logiflow/logiflow-news.png',
        tag: 'Public: Market Insights',
        description: 'Global freight market intelligence, container spot rate benchmarks, and industry news coverage.',
      },
      {
        id: 'home-track',
        label: 'Public Shipment Tracking & Status Timeline',
        url: 'logiflow.vn/track',
        image: '/images/logiflow/logiflow-track.png',
        tag: 'Customer: Order Tracking',
        description: 'Public shipper portal for real-time airway bill tracking, waypoint milestones, and electronic proof of delivery.',
      },
      {
        id: 'ops-dashboard',
        label: 'Operations: Enterprise Oversight',
        url: 'app.logiflow.vn/admin/dashboard',
        image: '/images/logiflow/logiflow-dashboard.png',
        tag: 'Operations: Analytics Dashboard',
        description: 'Command oversight dashboard tracking commercial fleet breakdowns, driver readiness, and DIFOT SLA reliability.',
      },
      {
        id: 'ops-map',
        label: 'Operations: Corridor Dispatch Routing',
        url: 'app.logiflow.vn/dispatch/trips/26',
        image: '/images/logiflow/logiflow-map.png',
        tag: 'Operations: Leaflet Dispatch Map',
        description: 'Interactive Leaflet corridor dispatch map with waypoint sequencing (P#51, D#51, P#52, D#52) and cargo manifests.',
      },
      {
        id: 'ops-reports',
        label: 'Operations: SLA & Latency Analytics',
        url: 'app.logiflow.vn/dispatch/reports',
        image: '/images/logiflow/logiflow-reports.png',
        tag: 'Operations: Delay Analytics',
        description: 'Operational reporting suite measuring linehaul volume, delay justifications, on-time SLA percentages, and transit latency.',
      },
    ],
    image: '/images/logiflow/logiflow-dashboard.png',
    liveHref: 'https://logiflow-client.onrender.com/',
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

function ExpandIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 2H14M14 2V6M14 2L9.5 6.5M6 14H2M2 14V10M2 14L6.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Lightbox({ active, onClose }) {
  if (!active) return null

  const { items, currentIndex, projectTitle } = active
  const item = items[currentIndex] || items[0]

  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < items.length - 1

  const goPrev = (e) => {
    e.stopPropagation()
    if (hasPrev) {
      onClose({ ...active, currentIndex: currentIndex - 1 })
    }
  }

  const goNext = (e) => {
    e.stopPropagation()
    if (hasNext) {
      onClose({ ...active, currentIndex: currentIndex + 1 })
    }
  }

  return (
    <div className="lightbox-backdrop" onClick={() => onClose(null)} role="dialog" aria-modal="true" aria-label="Image Preview">
      <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Lightbox Header */}
        <div className="lightbox-header">
          <div className="lightbox-meta">
            <span className="lightbox-project-badge">{projectTitle}</span>
            <span className="lightbox-counter">{currentIndex + 1} / {items.length}</span>
            {item.tag && <span className="lightbox-tag">{item.tag}</span>}
          </div>

          <button className="lightbox-close-btn" type="button" onClick={() => onClose(null)} aria-label="Close image preview">
            <span>Close (ESC)</span>
            <CloseIcon />
          </button>
        </div>

        {/* Lightbox Body */}
        <div className="lightbox-body">
          {items.length > 1 && (
            <button
              type="button"
              className={`lightbox-nav-btn prev-btn ${!hasPrev ? 'is-disabled' : ''}`}
              onClick={goPrev}
              disabled={!hasPrev}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
          )}

          <div className="lightbox-image-wrap">
            <img src={item.image} alt={item.label || `${projectTitle} preview`} />
          </div>

          {items.length > 1 && (
            <button
              type="button"
              className={`lightbox-nav-btn next-btn ${!hasNext ? 'is-disabled' : ''}`}
              onClick={goNext}
              disabled={!hasNext}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          )}
        </div>

        {/* Lightbox Footer */}
        <div className="lightbox-footer">
          <div className="lightbox-caption-main">
            {item.label && <strong className="lightbox-caption-title">{item.label}</strong>}
            {item.description && <p className="lightbox-caption-text">{item.description}</p>}
          </div>
          {item.url && <code className="lightbox-url">{item.url}</code>}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  const copyEmail = () => {
    navigator.clipboard.writeText('ttnhan227@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    })
  }

  const openLightbox = (items, currentIndex, projectTitle) => {
    setLightbox({ items, currentIndex, projectTitle })
  }

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    if (!lightbox) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft' && lightbox.currentIndex > 0) {
        setLightbox((prev) => prev ? { ...prev, currentIndex: prev.currentIndex - 1 } : null)
      }
      if (e.key === 'ArrowRight' && lightbox.currentIndex < lightbox.items.length - 1) {
        setLightbox((prev) => prev ? { ...prev, currentIndex: prev.currentIndex + 1 } : null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightbox])

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
              {projects.map((project) => {
                const isQuadGrid = Boolean(project.showcaseGrid && project.showcaseGrid.length > 0)

                if (isQuadGrid) {
                  return (
                    <article className="project-card project-card-full" key={project.id} id={project.id}>
                      {/* Top Metadata Header */}
                      <div className="project-card-top">
                        <div className="project-index-badge">
                          <span className="project-num">{project.number}</span>
                          <span className="project-category">{project.category}</span>
                        </div>
                        <span className="project-date">{project.date}</span>
                      </div>

                      {/* Info Section: Structured 2-Column Header */}
                      <div className="project-header-grid">
                        <div className="project-header-main">
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
                        </div>

                        <div className="project-header-side">
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

                          {/* Actions */}
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
                      </div>

                      {/* Full-Width 4-Screen Showcase Grid */}
                      <div className="project-showcase-section">
                        <div className="showcase-section-header">
                          <div className="showcase-section-title-wrap">
                            <span className="showcase-section-tag">UI Architecture</span>
                            <h4 className="showcase-section-title">
                              System Interface Architecture — {project.showcaseGrid.length} Key Views
                            </h4>
                          </div>
                          <span className="showcase-hint">
                            <ExpandIcon />
                            <span>Click any preview to expand full-screen</span>
                          </span>
                        </div>

                        <div className="showcase-quad-grid">
                          {project.showcaseGrid.map((item, idx) => (
                            <div
                              key={item.id}
                              className="interface-frame grid-frame clickable-frame"
                              onClick={() => openLightbox(project.showcaseGrid, idx, project.title)}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(project.showcaseGrid, idx, project.title) }}
                              aria-label={`Expand ${item.label}`}
                            >
                              <div className="interface-frame-bar">
                                <div className="frame-dots">
                                  <span className="frame-dot" />
                                  <span className="frame-dot" />
                                  <span className="frame-dot" />
                                </div>
                                <span className="frame-url">{item.url}</span>
                                {item.tag && <span className="frame-tag-badge">{item.tag}</span>}
                              </div>

                              <div className="interface-viewport">
                                <img src={item.image} alt={item.label} loading="lazy" />
                                <div className="viewport-hover-overlay">
                                  <span className="overlay-zoom-pill">
                                    <ExpandIcon />
                                    <span>Expand in High-Res</span>
                                  </span>
                                </div>
                              </div>

                              <div className="interface-caption">
                                <span className="caption-dot" />
                                <span className="caption-label">{item.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  )
                }

                // Default 2-column layout for single-image projects (Groundwork, VeriSpend)
                return (
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
                        <div
                          className="interface-frame clickable-frame"
                          onClick={() => openLightbox([{ image: project.image, label: `${project.title} Interface Preview`, url: project.liveHref ? new URL(project.liveHref).hostname : `github.com/ttnhan227/${project.title.toLowerCase()}` }], 0, project.title)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox([{ image: project.image, label: `${project.title} Interface Preview`, url: project.liveHref ? new URL(project.liveHref).hostname : `github.com/ttnhan227/${project.title.toLowerCase()}` }], 0, project.title) }}
                          aria-label={`Expand ${project.title} preview`}
                        >
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
                            <div className="frame-dots-placeholder" />
                          </div>
                          <div className="interface-viewport">
                            <img
                              src={project.image}
                              alt={`${project.title} interface preview`}
                              loading="lazy"
                            />
                            <div className="viewport-hover-overlay">
                              <span className="overlay-zoom-pill">
                                <ExpandIcon />
                                <span>Expand in High-Res</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
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

      {/* Fullscreen Lightbox Modal */}
      <Lightbox active={lightbox} onClose={setLightbox} />
    </div>
  )
}

export default App
