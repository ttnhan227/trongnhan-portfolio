import { useState } from 'react'

const projects = [
  {
    number: '01',
    date: 'JUL 2026',
    title: 'InsightPDF',
    type: 'AI document platform',
    description: 'A private document workspace that turns PDFs into searchable, citable knowledge—without hiding the engineering behind a magic AI button.',
    highlights: ['OCR fallback', 'Multi-document RAG', 'Async processing', 'Owner-scoped storage'],
    stack: ['React', 'FastAPI', 'PostgreSQL', 'pgvector', 'Celery', 'Redis', 'MinIO'],
    image: '/images/insightpdf-workspace.png',
    liveHref: 'https://insightpdf-client.onrender.com/',
    repoHref: 'https://github.com/ttnhan227/InsightPDF',
    accent: 'acid',
  },
  {
    number: '02',
    date: 'APR—JUN 2026',
    title: 'VeriSpend',
    type: 'AI-assisted fintech',
    description: 'An expense review system where AI proposes and explains, while authenticated backend workflows retain financial authority.',
    highlights: ['Tenant isolation', 'Editable AI extraction', 'Deterministic risk', 'Audited decisions'],
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'Docker'],
    image: '/images/verispend-workspace.png',
    liveHref: 'https://aiaudit-expensetracker-web.onrender.com/',
    repoHref: 'https://github.com/ttnhan227/VeriSpend',
    accent: 'coral',
  },
  {
    number: '03',
    date: 'OCT 2025—JAN 2026',
    title: 'LogiFlow',
    type: 'Academic team project',
    description: 'A freight operations platform connecting orders, dispatchers, drivers, live location, delivery, payments, and reporting.',
    highlights: ['Role-based workflows', 'Live GPS tracking', 'WebSocket chat', 'Flutter driver app'],
    stack: ['React', 'Spring Boot', 'Flutter', 'PostgreSQL', 'PostGIS', 'STOMP'],
    image: '/images/logiflow-workspace.png',
    repoHref: 'https://github.com/ttnhan227/logiflow',
    accent: 'blue',
  },
]

const skills = {
  Languages: ['Python', 'C#', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  Backend: ['FastAPI', 'SQLAlchemy', 'ASP.NET Core', 'EF Core', 'Spring Boot', 'Spring Security', 'REST APIs', 'Celery'],
  Frontend: ['React', 'Vite', 'Flutter'],
  Data: ['PostgreSQL', 'MySQL', 'MongoDB', 'pgvector', 'PostGIS', 'Redis', 'MinIO'],
  Delivery: ['Docker', 'pytest', 'xUnit', 'JUnit', 'Vitest', 'Playwright', 'GitHub Actions', 'Git'],
}

const certifications = [
  {
    year: '2025',
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    note: 'Neural network foundations, deep architectures, and practical model development.',
  },
  {
    year: 'MAY 2025',
    title: 'Machine Learning and NLP Basics',
    issuer: 'Edureka',
    note: 'Core machine learning workflows and natural language processing fundamentals.',
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [skillFilter, setSkillFilter] = useState('All')
  const visibleSkills = skillFilter === 'All' ? Object.values(skills).flat() : skills[skillFilter]

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Tran Trong Nhan, home">
          TN<span>/</span><small>SOFTWARE ENGINEER</small>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {['about', 'projects', 'skills', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
        <a className="nav-status" href="mailto:ttnhan227@gmail.com"><i /> OPEN TO WORK</a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-badge">BASED IN<br />HO CHI MINH CITY</div>
          <p className="hero-intro">Hello, I’m Tran Trong Nhan—</p>
          <h1>
            <span>BACKEND-MINDED</span>
            <span className="outline">FULL-STACK</span>
            <span>ENGINEER<span className="hero-dot">.</span></span>
          </h1>
          <div className="hero-bottom">
            <p>I build secure APIs, asynchronous systems, and AI-assisted products that make complicated work feel clear.</p>
            <div className="hero-actions">
              <a className="button dark" href="#projects">SEE THE WORK <span>↓</span></a>
              <a className="button line" href="/Tran_Trong_Nhan_CV.pdf" target="_blank">VIEW CV <Arrow /></a>
            </div>
          </div>
          <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="marquee" aria-label="Core specialties">
          <div>SECURE APIS ✦ ASYNC PROCESSING ✦ AI WORKFLOWS ✦ FULL-STACK DELIVERY ✦ SECURE APIS ✦ ASYNC PROCESSING ✦ AI WORKFLOWS ✦ FULL-STACK DELIVERY ✦</div>
        </section>

        <section className="about section" id="about">
          <div className="section-label"><span>01</span> BEHIND THE CODE</div>
          <div className="about-copy">
            <p className="lead">I’m a Software Engineering graduate who likes the part of a product users don’t see.</p>
            <p>That means thoughtful data boundaries, predictable business rules, background jobs that recover cleanly, and AI features that remain traceable. I enjoy translating those foundations into interfaces people can actually understand and use.</p>
          </div>
          <div className="about-facts">
            <article><strong>3</strong><span>SUBSTANTIAL<br />PRODUCTS</span></article>
            <article><strong>3.5</strong><span>GPA / 4.0</span></article>
            <article><strong>2026</strong><span>SOFTWARE ENGINEERING<br />GRADUATE</span></article>
          </div>
          <aside className="education-card">
            <span>EDUCATION / 2023—2026</span>
            <h3>Advanced Diploma in Software Engineering</h3>
            <p>FPT Academy (Aptech)<br />Ho Chi Minh City, Vietnam</p>
            <small>TechWiz Competition Participant · 2025</small>
          </aside>
        </section>

        <section className="projects section" id="projects">
          <div className="section-label light"><span>02</span> PROJECTS / SELECTED BUILDS</div>
          <div className="section-heading">
            <h2>THINGS I’VE<br /><em>SHIPPED.</em></h2>
            <p>Three systems, three domains, one consistent focus: dependable software with clear reasoning behind it.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project ${project.accent}`} key={project.title}>
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.date}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-visual">
                  <img src={project.image} alt={`${project.title} product interface`} />
                  <div className="project-actions">
                    {project.liveHref && <a href={project.liveHref} target="_blank" rel="noreferrer">LIVE <Arrow /></a>}
                    <a href={project.repoHref} target="_blank" rel="noreferrer">CODE <Arrow /></a>
                  </div>
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                  <ul className="stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-label"><span>03</span> CORE EXPERTISE</div>
          <div className="section-heading dark-heading">
            <h2>TOOLS I USE<br /><em>TO BUILD.</em></h2>
            <p>A practical toolkit chosen around the problem—not around collecting logos.</p>
          </div>
          <div className="skill-filters" role="group" aria-label="Filter technical skills">
            {['All', ...Object.keys(skills)].map((filter) => (
              <button className={skillFilter === filter ? 'active' : ''} type="button" key={filter} onClick={() => setSkillFilter(filter)}>{filter}</button>
            ))}
          </div>
          <div className="skill-cloud">
            {visibleSkills.map((skill, index) => <span key={skill} style={{ '--delay': `${index * 18}ms` }}>{skill}</span>)}
          </div>
        </section>

        <section className="credentials section">
          <div className="section-label"><span>04</span> LEARNING MILESTONES</div>
          <div className="credential-list">
            {certifications.map((item, index) => (
              <article key={item.title}>
                <span className="credential-number">0{index + 1}</span>
                <div><small>{item.year} / {item.issuer}</small><h3>{item.title}</h3></div>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="presence section">
          <div className="section-label"><span>05</span> WEB PRESENCE</div>
          <div className="presence-grid">
            <a href="https://github.com/ttnhan227" target="_blank" rel="noreferrer">
              <small>BUILD LOG / SOURCE</small><strong>GitHub</strong><span>@ttnhan227 <Arrow /></span>
            </a>
            <a href="https://linkedin.com/in/trantrongnhan" target="_blank" rel="noreferrer">
              <small>WORK / NETWORK</small><strong>LinkedIn</strong><span>trantrongnhan <Arrow /></span>
            </a>
            <a href="/Tran_Trong_Nhan_CV.pdf" target="_blank">
              <small>EXPERIENCE / SKILLS</small><strong>Résumé</strong><span>Open PDF <Arrow /></span>
            </a>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-top">
            <span>06 / GET IN TOUCH</span>
            <span>AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES</span>
          </div>
          <p>Have a useful problem?</p>
          <h2>LET’S BUILD<br /><em>THE SYSTEM.</em></h2>
          <a className="contact-email" href="mailto:ttnhan227@gmail.com">ttnhan227@gmail.com <Arrow /></a>
          <footer>
            <span>© {new Date().getFullYear()} TRAN TRONG NHAN</span>
            <span>DESIGNED & BUILT WITH CARE</span>
            <a href="#top">BACK TO TOP ↑</a>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
