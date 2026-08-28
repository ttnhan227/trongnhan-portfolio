import { useState, useEffect } from 'react'
import { ArrowUpRight } from './Icons'
import RpgIcon from './RpgIcon'
import { flagshipMissions } from '../data/projects'

const questIcons = [
  11, // Quest 01 Groundwork: Scroll / Oracle
  6,  // Quest 02 recon-qa: Twin Daggers / QA Scout
  29, // Quest 03 VeriSpend: Gilded Shield / Multi-Tenant Aegis
  14, // Quest 04 LogiFlow: Treasure Chest / Caravan
]

export default function MissionSelector({ onSelectImage, activeStageIndex, setActiveStageIndex }) {
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const currentMission = flagshipMissions[activeStageIndex] || flagshipMissions[0]
  const screenshots = currentMission.screenshots || []
  const currentScreenshot = screenshots[selectedScreenshotIndex] || screenshots[0]

  // Reset screenshot view when switching stages
  useEffect(() => {
    setSelectedScreenshotIndex(0)
  }, [activeStageIndex])

  // Automatic Carousel Advance (3.5s reduced cycle time, pauses on hover)
  useEffect(() => {
    if (screenshots.length <= 1 || isHovered) return

    const timer = setInterval(() => {
      setSelectedScreenshotIndex((prev) => (prev + 1) % screenshots.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [screenshots.length, isHovered, activeStageIndex])

  // Next / Prev handlers
  const handlePrevImage = (e) => {
    e.stopPropagation()
    setSelectedScreenshotIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  const handleNextImage = (e) => {
    e.stopPropagation()
    setSelectedScreenshotIndex((prev) => (prev + 1) % screenshots.length)
  }

  // Keyboard navigation 1-4
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['input', 'textarea'].includes(document.activeElement?.tagName?.toLowerCase())) return
      if (e.key >= '1' && e.key <= '4') {
        const index = parseInt(e.key, 10) - 1
        if (index < flagshipMissions.length) {
          setActiveStageIndex(index)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setActiveStageIndex])

  return (
    <section className="missions-section" id="missions" aria-labelledby="missions-heading">
      <div className="hud-content-container">
        {/* Section Title Header */}
        <div className="section-title-bar pixel-box-sm">
          <div className="title-bar-left">
            <RpgIcon id={14} size={22} alt="Quest Log" />
            <span className="section-index-tag">02 // QUEST LOG</span>
            <h2 className="section-title" id="missions-heading">
              Adventurer's Guild: Main Story Quests
            </h2>
          </div>
          <div className="keyboard-stage-hint">
            <span>SELECT QUEST VIA KEYBOARD: </span>
            <span className="kbd-bracket">[</span>
            <span className="kbd-key">1</span>
            <span className="kbd-key">2</span>
            <span className="kbd-key">3</span>
            <span className="kbd-key">4</span>
            <span className="kbd-bracket">]</span>
          </div>
        </div>

        {/* 4 Quest Stage Selector Tabs with Downloaded RPG Icons */}
        <div className="stage-menu-grid" role="tablist" aria-label="Quest Selector">
          {flagshipMissions.map((mission, index) => {
            const isSelected = index === activeStageIndex
            const iconId = questIcons[index] || 1
            return (
              <button
                key={mission.id}
                id={mission.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                className={`stage-menu-slot pixel-box-sm ${isSelected ? 'is-selected' : ''}`}
                onClick={() => setActiveStageIndex(index)}
              >
                <div className="slot-top-row">
                  <span className="slot-cursor">{isSelected ? '▶' : ' '}</span>
                  <RpgIcon id={iconId} size={18} alt="" />
                  <span className="slot-num">QUEST 0{index + 1}</span>
                  <span className={`slot-status-pill status-${mission.statusType}`}>
                    S-RANK
                  </span>
                </div>
                <strong className="slot-title">{mission.title}</strong>
                <span className="slot-category">{mission.category}</span>
                <span className="slot-kbd-tag">[ KEY {index + 1} ]</span>
              </button>
            )
          })}
        </div>

        {/* Main Quest Showcase Box */}
        <div className="mission-showcase-box pixel-box">
          {/* Mission Box Header */}
          <div className="mission-box-header">
            <div className="mission-header-info">
              <div className="mission-code-row">
                <RpgIcon id={questIcons[activeStageIndex] || 1} size={18} alt="" />
                <span className="code-text">QUEST 0{activeStageIndex + 1}: {currentMission.title.toUpperCase()}</span>
                <span className="code-date">({currentMission.date})</span>
              </div>
              <h3 className="mission-headline">{currentMission.tagline}</h3>
            </div>

            <div className="mission-header-actions">
              {currentMission.liveHref && (
                <a
                  className="pixel-btn-action live-btn"
                  href={currentMission.liveHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RpgIcon id={13} size={14} alt="" />
                  <span>LIVE DEMO</span>
                  <ArrowUpRight />
                </a>
              )}
              {currentMission.pypiHref && (
                <a
                  className="pixel-btn-action pypi-btn"
                  href={currentMission.pypiHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RpgIcon id={11} size={14} alt="" />
                  <span>PYPI PACKAGE</span>
                  <ArrowUpRight />
                </a>
              )}
              {currentMission.repoHref && (
                <a
                  className="pixel-btn-action repo-btn"
                  href={currentMission.repoHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RpgIcon id={1} size={14} alt="" />
                  <span>GITHUB REPO</span>
                  <ArrowUpRight />
                </a>
              )}
            </div>
          </div>

          {/* LARGE INTERACTIVE SMOOTH SLIDING SCREENSHOT CAROUSEL */}
          <div
            className="large-screenshot-frame"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="screen-frame-topbar">
              <div className="screen-lights">
                <span className="light-red" />
                <span className="light-amber" />
                <span className="light-green" />
              </div>
              <span className="screen-view-label">
                ARTIFACT VIEW: {currentScreenshot.title.toUpperCase()}
              </span>
              <div className="screen-topbar-actions">
                <span className="screen-click-hint">[ 🔍 CLICK IMAGE TO ENLARGE ]</span>
              </div>
            </div>

            {/* Clickable Image Viewport with Smooth Sliding Track & Carousel Arrows */}
            <div
              className="screen-viewport clickable-screen"
              role="button"
              tabIndex={0}
              onClick={() => onSelectImage(currentScreenshot)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelectImage(currentScreenshot)
                }
              }}
              aria-label={`Enlarge screenshot: ${currentScreenshot.title}`}
            >
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${selectedScreenshotIndex * 100}%)` }}
              >
                {screenshots.map((s) => (
                  <div className="carousel-slide" key={s.id}>
                    <img
                      className="main-large-screenshot"
                      src={s.image}
                      alt={s.title}
                      loading="eager"
                    />
                  </div>
                ))}
              </div>

              {/* Prev / Next Carousel Arrow Buttons */}
              {screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    className="carousel-arrow-btn arrow-prev"
                    onClick={handlePrevImage}
                    aria-label="Previous screenshot"
                  >
                    ◀
                  </button>
                  <button
                    type="button"
                    className="carousel-arrow-btn arrow-next"
                    onClick={handleNextImage}
                    aria-label="Next screenshot"
                  >
                    ▶
                  </button>
                </>
              )}
            </div>

            <div className="screen-caption-strip">
              <span className="caption-dot" />
              <p className="caption-text">{currentScreenshot.caption}</p>
            </div>

            {/* Viewport Thumbnail Switcher Strip */}
            {screenshots.length > 1 && (
              <div className="view-switcher-strip">
                <span className="switcher-label">PERSPECTIVES ({selectedScreenshotIndex + 1}/{screenshots.length}):</span>
                <div className="switcher-buttons-row">
                  {screenshots.map((s, sIdx) => {
                    const isViewActive = sIdx === selectedScreenshotIndex
                    return (
                      <button
                        key={s.id}
                        type="button"
                        className={`view-toggle-btn ${isViewActive ? 'is-active' : ''}`}
                        onClick={() => setSelectedScreenshotIndex(sIdx)}
                        aria-pressed={isViewActive}
                      >
                        <span className="view-btn-cursor">{isViewActive ? '▶' : ''}</span>
                        <span className="view-btn-title">{s.title}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Clean 2-Column Project Brief & Highlights */}
          <div className="mission-details-grid">
            {/* Left: Overview & Key Engineering Highlights */}
            <div className="mission-brief-col">
              <p className="mission-brief-overview">{currentMission.overview}</p>

              <div className="decisions-panel pixel-box-sm">
                <div className="panel-title-wrap">
                  <RpgIcon id={36} size={18} alt="Victory" />
                  <h4 className="panel-title">BOSS CLEARED // HIGHLIGHTS</h4>
                </div>
                <ul className="decisions-list">
                  {currentMission.architecture.map((item, idx) => (
                    <li key={idx} className="decision-item">
                      <span className="decision-arrow">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Clean Specs & Tech Loadout */}
            <div className="mission-specs-col">
              <div className="telemetry-panel pixel-box-sm">
                <div className="specs-meta-item">
                  <span className="spec-label">GUILD ROLE:</span>
                  <strong className="spec-val">{currentMission.role}</strong>
                </div>

                <div className="telemetry-grid">
                  {currentMission.metrics.map((m, idx) => (
                    <div className="telemetry-box" key={idx}>
                      <span className="t-label">{m.label}</span>
                      <strong className="t-val">{m.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="stack-loadout-wrap">
                  <span className="loadout-title">PARTY LOADOUT:</span>
                  <div className="stack-tags-cloud">
                    {currentMission.stack.map((t) => (
                      <span className="pixel-tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
