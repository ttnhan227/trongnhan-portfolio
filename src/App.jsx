import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'InsightPDF',
    eyebrow: 'AI document platform · Personal project',
    description: 'A secure document workspace for OCR, multi-document RAG chat, page citations, structured analysis, comparison, and background PDF transformations.',
    stack: ['React', 'FastAPI', 'pgvector', 'Celery', 'Redis', 'MinIO'],
    image: '/images/insightpdf-workspace.png',
    liveHref: 'https://insightpdf-client.onrender.com/',
    repoHref: 'https://github.com/ttnhan227/InsightPDF',
  },
  {
    number: '02',
    title: 'VeriSpend',
    eyebrow: 'Fintech · Personal project',
    description: 'A multi-tenant expense review system with editable AI receipt extraction, deterministic risk signals, role-protected approvals, and actor-attributed audit history.',
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
    image: '/images/verispend-workspace.png',
    liveHref: 'https://aiaudit-expensetracker-web.onrender.com/',
    repoHref: 'https://github.com/ttnhan227/VeriSpend',
  },
  {
    number: '03',
    title: 'LogiFlow',
    eyebrow: 'Logistics · Academic team project',
    description: 'A freight operations platform spanning customer orders, dispatch planning, live driver tracking, delivery confirmation, payments, reporting, and audit history.',
    stack: ['React', 'Spring Boot', 'Flutter', 'PostGIS', 'WebSockets'],
    image: '/images/logiflow-workspace.png',
    repoHref: 'https://github.com/ttnhan227/logiflow',
  },
]

const capabilities = [
  ['01', 'Backend systems', 'Secure REST APIs, authentication, authorization, tenant isolation, business rules, and data models built for real workflows.'],
  ['02', 'Async & AI workflows', 'Background processing, OCR, retrieval-augmented generation, structured AI outputs, and safe human review boundaries.'],
  ['03', 'Production foundations', 'Automated tests, Docker, CI pipelines, private object storage, and documented engineering trade-offs.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Tran Trong Nhan, home">TN<span>.</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="/Tran_Trong_Nhan_CV.pdf" target="_blank" onClick={() => setMenuOpen(false)}>CV</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="nav-cta" href="mailto:ttnhan227@gmail.com">Let’s talk <span>↗</span></a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="kicker"><span /> Ho Chi Minh City, Vietnam</div>
            <h1>Software engineer<br />building dependable<br /><em>backend systems.</em></h1>
            <p>I’m <strong>Tran Trong Nhan</strong>, a Software Engineering graduate who builds full-stack products with a backend focus—from secure APIs and asynchronous processing to AI document workflows.</p>
            <div className="hero-actions">
              <a className="button primary" href="#portfolio">Explore my work <span>↓</span></a>
              <a className="text-link" href="/Tran_Trong_Nhan_CV.pdf" target="_blank">Download CV ↗</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Technology overview">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="monogram">TN</div>
            <div className="floating-tag tag-react">React + TypeScript</div>
            <div className="floating-tag tag-api">FastAPI + .NET</div>
            <div className="floating-tag tag-data">PostgreSQL</div>
            <div className="code-card">
              <div className="code-dots"><i /><i /><i /></div>
              <code><span>const</span> engineer = {'{'}<br />&nbsp;&nbsp;focus: <b>"backend"</b>,<br />&nbsp;&nbsp;ships: <b>"with care"</b><br />{'}'}</code>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Core technologies">
          <div>Python <span>✦</span> C# <span>✦</span> Java <span>✦</span> TypeScript <span>✦</span> FastAPI <span>✦</span> ASP.NET Core <span>✦</span> Spring Boot <span>✦</span> PostgreSQL <span>✦</span> Docker <span>✦</span></div>
        </section>

        <section className="about" id="about">
          <div className="section-index">01 / About</div>
          <div className="about-main">
            <h2>I care about what happens <em>behind</em> the interface.</h2>
            <p>My work centers on secure data access, clear business rules, resilient background jobs, and AI features that stay traceable and accountable. I build the interface too—but the system beneath it is where I do my best thinking.</p>
          </div>
          <aside className="education">
            <span>Education</span>
            <strong>Advanced Diploma in<br />Software Engineering</strong>
            <p>FPT Academy (Aptech)<br />Nov 2023—Jan 2026 · GPA 3.5/4.0</p>
          </aside>
        </section>

        <section className="capabilities" id="work">
          {capabilities.map(([number, title, description]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </section>

        <section className="projects" id="portfolio">
          <div className="projects-heading">
            <div className="section-index">02 / Selected projects</div>
            <h2>Built to solve<br /><em>real problems.</em></h2>
            <p>Three substantial products showing how I approach architecture, security, asynchronous work, AI guardrails, and delivery across different domains.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <a className="project-image" href={project.liveHref || project.repoHref} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={`${project.title} application preview`} />
                  <span>{project.liveHref ? 'Live demo ↗' : 'Repository ↗'}</span>
                </a>
                <div className="project-copy">
                  <div className="project-topline"><span>{project.number}</span><span>{project.eyebrow}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="project-links">
                    {project.liveHref && <a className="project-link" href={project.liveHref} target="_blank" rel="noreferrer">View live product <span>↗</span></a>}
                    <a className="project-link secondary" href={project.repoHref} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-index">03 / Contact</div>
          <p>Have an opportunity or a problem worth solving?</p>
          <h2>Let’s build something<br /><em>useful together.</em></h2>
          <a className="email-link" href="mailto:ttnhan227@gmail.com">ttnhan227@gmail.com <span>↗</span></a>
          <footer>
            <span>© {new Date().getFullYear()} Tran Trong Nhan</span>
            <div>
              <a href="https://github.com/ttnhan227" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/trantrongnhan" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
            <span>Based in Ho Chi Minh City</span>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
