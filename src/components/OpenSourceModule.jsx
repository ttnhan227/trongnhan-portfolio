import { useState } from 'react'
import { ArrowUpRight, CopyIcon, CheckIcon } from './Icons'
import RpgIcon from './RpgIcon'

const openSourceTool = {
  id: 'recon-qa',
  name: 'recon-qa',
  badge: 'v0.1.1 on PyPI',
  date: 'AUG 2026 – PRESENT',
  tagline: 'Autonomous AI API Testing & Diagnostic Platform',
  description: 'An autonomous, developer-first testing platform and installable Python package that parses OpenAPI schemas, plans multi-category test suites, executes concurrently with bounded worker pools, and performs deterministic root-cause analysis.',
  installCmd: 'pip install recon-qa[browser,ai]',
  features: [
    {
      title: 'OpenAPI Auto-Discovery',
      detail: 'Auto-detects and parses Swagger 2.0 and OpenAPI 3.0/3.1 specs into typed Pydantic endpoints & parameters.',
      iconId: 11, // Ancient Scroll
    },
    {
      title: 'Bounded Concurrency',
      detail: 'Async execution engine with bounded worker pools (4–16 workers) for fast, thread-safe test execution.',
      iconId: 14, // Treasure Chest Golem
    },
    {
      title: 'Multi-Provider BYOK',
      detail: 'Provider-agnostic LLM interface supporting Gemini, Mistral, OpenAI, Anthropic, and local Ollama models.',
      iconId: 16, // Arcane Gem
    },
    {
      title: 'Hybrid RCA Pipeline',
      detail: 'Deterministic AST failure classifier paired with LLM root-cause analysis for actionable code fixes.',
      iconId: 30, // Aegis Shield
    },
  ],
  screenshots: [
    {
      id: 'recon-terminal',
      title: 'CLI Terminal: OpenAPI Discovery & Worker Pools',
      image: '/images/recon/recon-terminal.png',
      caption: 'Live CLI test execution against Swagger Petstore API with schema parsing, multi-category test generation, and bounded worker pools.',
    },
    {
      id: 'recon-report',
      title: 'HTML Diagnostic Dashboard & Root Cause Fixes',
      image: '/images/recon/recon-report.png',
      caption: 'Interactive HTML test report with endpoint pass/fail metrics, step assertion traces, and confidence-scored RCA recommendations.',
    },
  ],
  stack: ['Python', 'FastAPI', 'Playwright', 'Pydantic', 'SQLAlchemy', 'PyPI'],
  pypiHref: 'https://pypi.org/project/recon-qa/',
  repoHref: 'https://github.com/ttnhan227/recon',
}

export default function OpenSourceModule({ onSelectImage }) {
  const [copiedPip, setCopiedPip] = useState(false)
  const [simRunning, setSimRunning] = useState(false)
  const [simLogs, setSimLogs] = useState([
    '⚡ READY: Swagger 2.0 & OpenAPI 3.x target detected',
    'Click [ CAST RECON TEST SUITE ] below to execute live test discovery...',
  ])

  const copyPip = () => {
    navigator.clipboard.writeText(openSourceTool.installCmd).then(() => {
      setCopiedPip(true)
      setTimeout(() => setCopiedPip(false), 2200)
    })
  }

  const runSimulation = () => {
    if (simRunning) return
    setSimRunning(true)
    setSimLogs(['$ recon test https://petstore.swagger.io/v2 --spec swagger.json --include /pet/*'])

    setTimeout(() => {
      setSimLogs((prev) => [
        ...prev,
        '⚡ [08:26:01] INFO  Loaded OpenAPI schema: 20 endpoints, 64 parameters parsed',
      ])
    }, 400)

    setTimeout(() => {
      setSimLogs((prev) => [
        ...prev,
        '📦 [08:26:02] INFO  Generated 8 test suites: Happy Path, Boundary, Auth, Negative',
      ])
    }, 900)

    setTimeout(() => {
      setSimLogs((prev) => [
        ...prev,
        '🔄 [08:26:03] INFO  Executing suite with bounded worker pool (concurrency=4)',
      ])
    }, 1400)

    setTimeout(() => {
      setSimLogs((prev) => [
        ...prev,
        '✅ [08:26:04] PASSED [GET /pet/findByStatus] (1463ms)',
        '✅ [08:26:04] PASSED [POST /pet] Valid Entity Payload (1120ms)',
        '🏆 VICTORY: 8/8 test suites verified · HTML grimoire generated at reports/latest.html',
      ])
      setSimRunning(false)
    }, 2000)
  }

  return (
    <section className="tooling-section" id="tooling" aria-labelledby="tooling-heading">
      <div className="hud-content-container">
        {/* Section Title Header */}
        <div className="section-title-bar pixel-box-sm">
          <div className="title-bar-left">
            <RpgIcon id={6} size={22} alt="Forge Tool" />
            <span className="section-index-tag">03 // THE FORGE</span>
            <h2 className="section-title" id="tooling-heading">
              The Arcane Tooling Forge: recon-qa
            </h2>
          </div>
        </div>

        {/* Main Retro Tooling Deck */}
        <div className="tooling-deck-box pixel-box" id="opensource">
          {/* Deck Header */}
          <div className="tooling-box-header">
            <div className="tooling-header-left">
              <div className="tooling-badge-row">
                <RpgIcon id={6} size={20} alt="" />
                <h3 className="tooling-name">{openSourceTool.name}</h3>
                <span className="pypi-badge-pill">{openSourceTool.badge}</span>
              </div>
              <p className="tooling-tagline">{openSourceTool.tagline}</p>
            </div>

            <div className="tooling-header-actions">
              <a
                className="pixel-btn-action pypi-btn"
                href={openSourceTool.pypiHref}
                target="_blank"
                rel="noreferrer"
              >
                <RpgIcon id={11} size={14} alt="" />
                <span>📜 PYPI PACKAGE</span>
                <ArrowUpRight />
              </a>
              <a
                className="pixel-btn-action repo-btn"
                href={openSourceTool.repoHref}
                target="_blank"
                rel="noreferrer"
              >
                <RpgIcon id={1} size={14} alt="" />
                <span>⚔️ GITHUB REPO</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Retro Install Spellbook Strip */}
          <div className="install-terminal-strip">
            <div className="install-prompt-area">
              <span className="prompt-symbol">$</span>
              <code className="install-code-text">{openSourceTool.installCmd}</code>
            </div>
            <button
              className="pixel-copy-install-btn"
              type="button"
              onClick={copyPip}
              aria-label="Copy pip install command"
            >
              {copiedPip ? <CheckIcon /> : <CopyIcon />}
              <span>{copiedPip ? 'COPIED TO SPELLBOOK' : 'COPY COMMAND'}</span>
            </button>
          </div>

          {/* 4 Clean Feature Badges with Downloaded Icons */}
          <div className="tooling-pills-row">
            {openSourceTool.features.map((feat, idx) => (
              <div className="tooling-feature-pill pixel-box-sm" key={idx}>
                <RpgIcon id={feat.iconId} size={20} alt="" />
                <span>{feat.title}</span>
              </div>
            ))}
          </div>

          {/* Interactive Live CLI Simulator Terminal */}
          <div className="live-cli-simulator pixel-box-sm">
            <div className="simulator-header">
              <div className="sim-lights">
                <span className="sim-dot dot-red" />
                <span className="sim-dot dot-yellow" />
                <span className="sim-dot dot-green" />
                <span className="sim-title">ARCANE FORGE TEST SIMULATOR</span>
              </div>
              <button
                type="button"
                className={`pixel-btn-action sim-run-btn ${simRunning ? 'is-running' : ''}`}
                onClick={runSimulation}
                disabled={simRunning}
              >
                <span>{simRunning ? '⚡ CASTING SPELL...' : '▶ CAST TEST SUITE'}</span>
              </button>
            </div>
            <div className="simulator-body" role="log" aria-live="polite">
              {simLogs.map((log, lIdx) => (
                <div key={lIdx} className="sim-log-line">
                  {log}
                </div>
              ))}
              {simRunning && <div className="sim-cursor">█</div>}
            </div>
          </div>

          {/* LARGE DIRECT SCREENSHOTS (CLI TERMINAL & HTML DASHBOARD) */}
          <div className="tooling-visuals-grid">
            {openSourceTool.screenshots.map((s) => (
              <div className="tooling-visual-card pixel-frame" key={s.id}>
                <div className="visual-top-bar">
                  <span className="visual-title">{s.title}</span>
                  <button
                    type="button"
                    className="visual-inspect-btn"
                    onClick={() => onSelectImage(s)}
                    aria-label={`Inspect ${s.title}`}
                  >
                    [ 🔍 CLICK TO ENLARGE ]
                  </button>
                </div>
                <div
                  className="visual-image-wrap clickable-screen"
                  role="button"
                  tabIndex={0}
                  onClick={() => onSelectImage(s)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      onSelectImage(s)
                    }
                  }}
                  aria-label={`Enlarge screenshot: ${s.title}`}
                >
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="visual-caption-area">
                  <p>{s.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Stack Tags */}
          <div className="tooling-footer-strip">
            <span className="footer-stack-title">FORGE RECIPE // TECH:</span>
            <div className="footer-stack-tags">
              {openSourceTool.stack.map((t) => (
                <span className="pixel-tech-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
