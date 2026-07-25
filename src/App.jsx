import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'InsightPDF',
    eyebrow: 'AI productivity · Personal project',
    description: 'A secure PDF workspace with OCR ingestion, multi-document RAG chat, page citations, structured AI tools, and practical document transformations.',
    stack: ['React', 'FastAPI', 'pgvector', 'Celery', 'MinIO'],
    image: '/images/insightpdf-workspace.png',
    href: 'https://github.com/ttnhan227',
    linkLabel: 'Explore on GitHub',
  },
  {
    number: '02',
    title: 'VeriSpend',
    eyebrow: 'Fintech · Personal project',
    description: 'An AI-assisted, multi-tenant expense platform that turns receipts into explainable, auditable approval workflows—without giving AI financial authority.',
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Mistral AI'],
    image: '/images/verispend-workspace.png',
    href: 'https://aiaudit-expensetracker-web.onrender.com/',
    linkLabel: 'View live product',
  },
  {
    number: '03',
    title: 'LogiFlow',
    eyebrow: 'Logistics · Team project',
    description: 'A complete logistics operations platform connecting customer orders, dispatch planning, live driver tracking, delivery, payments, and reporting.',
    stack: ['React', 'Spring Boot', 'Flutter', 'PostGIS', 'WebSockets'],
    image: '/images/logiflow-workspace.png',
    href: 'https://github.com/ttnhan227',
    linkLabel: 'Explore on GitHub',
  },
]

const capabilities = [
  ['01', 'Product-minded frontend', 'Responsive interfaces with React and TypeScript, built around clear workflows rather than decorative screens.'],
  ['02', 'Secure backend systems', 'REST APIs, authentication, authorization, tenant isolation, business rules, and data models that hold up under real use.'],
  ['03', 'Production foundations', 'Testing, Docker, CI pipelines, observability-minded error handling, and documented engineering trade-offs.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Trọng Nhân, home">TN<span>.</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="nav-cta" href="mailto:ttnhan227@gmail.com">Let’s talk <span>↗</span></a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="kicker"><span /> Ho Chi Minh City, Vietnam</div>
            <h1>Full-stack<br />developer building<br /><em>useful systems.</em></h1>
            <p>I’m <strong>Trần Trọng Nhân</strong>. I turn complex workflows into secure, dependable products across web, backend, and AI-assisted experiences.</p>
            <div className="hero-actions">
              <a className="button primary" href="#portfolio">Explore my work <span>↓</span></a>
              <a className="text-link" href="mailto:ttnhan227@gmail.com">ttnhan227@gmail.com ↗</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Technology overview">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="monogram">TN</div>
            <div className="floating-tag tag-react">React + TypeScript</div>
            <div className="floating-tag tag-api">REST APIs</div>
            <div className="floating-tag tag-data">PostgreSQL</div>
            <div className="code-card">
              <div className="code-dots"><i /><i /><i /></div>
              <code><span>const</span> developer = {'{'}<br />&nbsp;&nbsp;curious: <b>true</b>,<br />&nbsp;&nbsp;ships: <b>"with care"</b><br />{'}'}</code>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Core technologies">
          <div>React <span>✦</span> TypeScript <span>✦</span> ASP.NET Core <span>✦</span> Spring Boot <span>✦</span> PostgreSQL <span>✦</span> Docker <span>✦</span></div>
        </section>

        <section className="about" id="about">
          <div className="section-index">01 / About</div>
          <div className="about-main">
            <h2>I care about what happens <em>behind</em> the interface.</h2>
            <p>Good software is more than a polished screen. It needs sensible boundaries, clear business rules, secure data access, and enough operational discipline to keep working after the demo.</p>
          </div>
          <aside className="education">
            <span>Education</span>
            <strong>Advanced Diploma in<br />Software Engineering</strong>
            <p>FPT Academy (Aptech)<br />2023—2026 · GPA 3.5/4.0</p>
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
            <p>Three substantial products showing how I approach architecture, security, user experience, and delivery across different domains.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <a className={`project-image ${project.contain ? 'contain' : ''}`} href={project.href} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={`${project.title} application preview`} />
                  <span>Open ↗</span>
                </a>
                <div className="project-copy">
                  <div className="project-topline"><span>{project.number}</span><span>{project.eyebrow}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <span>↗</span></a>
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
            <span>© {new Date().getFullYear()} Trần Trọng Nhân</span>
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
