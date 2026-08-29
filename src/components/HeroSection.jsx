import { useState } from 'react'
import { ArrowUpRight, CopyIcon, CheckIcon } from './Icons'
import RpgIcon from './RpgIcon'
import { playSfx } from '../utils/audio'

export default function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = () => {
    playSfx('heal')
    navigator.clipboard.writeText('ttnhan227@gmail.com').then(() => {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2200)
    })
  }

  return (
    <section className="hero-section" id="init" aria-labelledby="hero-name">
      <div className="hud-content-container">
        {/* Title Screen Fantasy RPG Bar */}
        <div className="title-screen-bar rpg-panel-sm">
          <div className="title-bar-left">
            <div className="animated-torch-flame" aria-hidden="true" />
            <RpgIcon id={1} size={18} alt="Sword" className="title-star" />
            <span className="title-brand-text">TRAN TRONG NHAN // LEVEL 25 ARCH-ARTIFICER</span>
            <span className="title-bar-divider">✦</span>
            <span className="title-location">HO CHI MINH CITY, VIETNAM</span>
          </div>
          <div className="title-status-badge">
            <span className="status-pixel-dot" aria-hidden="true" />
            <span>GUILD STATUS: READY FOR HIRES</span>
            <div className="animated-torch-flame" aria-hidden="true" />
          </div>
        </div>

        {/* Hero JRPG Character Sheet Grid */}
        <div className="hero-grid">
          {/* Left: JRPG Character Stats Panel */}
          <div className="hero-player-panel rpg-panel">
            <div className="rpg-panel-header">
              <div className="panel-title-wrap">
                <RpgIcon id={1} size={20} alt="Hero Sword" />
                <span className="panel-title-text">CHARACTER STATUS // STATS</span>
              </div>
              <span className="player-lvl-pill">LV.25 ARTIFICER</span>
            </div>

            <div className="hero-player-body">
              {/* Avatar Portrait & Identity Header */}
              <div className="hero-profile-header">
                <div className="avatar-portrait-wrap rpg-frame">
                  <img
                    src="/styles/characters/avatar.gif"
                    alt="Tran Trong Nhan Animated Pixel Avatar"
                    className="avatar-gif-img"
                  />
                  <span className="avatar-level-badge">LV.25</span>
                </div>

                <div className="hero-name-block">
                  <span className="hero-subkicker">CLASS: FULL-STACK & BACKEND ENGINEER</span>
                  <h1 className="hero-title" id="hero-name">
                    Tran Trong Nhan
                  </h1>
                  <span className="hero-title-role">Distributed Backends · AI Verification · Developer Tools</span>
                </div>
              </div>

              {/* Retro HP, MP & EXP Meter Bars with Pixel Icons */}
              <div className="rpg-stat-meters">
                {/* HP Meter */}
                <div className="stat-meter-row">
                  <div className="meter-label-wrap">
                    <div className="meter-icon-label">
                      <RpgIcon id={37} size={16} alt="HP Potion" />
                      <span className="stat-code">HP (HEALTH)</span>
                    </div>
                    <span className="stat-val">999 / 999</span>
                  </div>
                  <div className="stat-bar-track" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                    <div className="stat-bar-fill hp-fill" style={{ width: '100%' }}>
                      <span className="stat-bar-shine" />
                    </div>
                  </div>
                </div>

                {/* MP Meter */}
                <div className="stat-meter-row">
                  <div className="meter-label-wrap">
                    <div className="meter-icon-label">
                      <RpgIcon id={33} size={16} alt="MP Potion" />
                      <span className="stat-code mp-code">MP (ARCANE MANA)</span>
                    </div>
                    <span className="stat-val">450 / 450</span>
                  </div>
                  <div className="stat-bar-track" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                    <div className="stat-bar-fill mp-fill" style={{ width: '100%' }}>
                      <span className="stat-bar-shine" />
                    </div>
                  </div>
                </div>

                {/* EXP Meter */}
                <div className="stat-meter-row">
                  <div className="meter-label-wrap">
                    <div className="meter-icon-label">
                      <RpgIcon id={13} size={16} alt="Gold XP" />
                      <span className="stat-code xp-code">EXP TO NEXT LEVEL</span>
                    </div>
                    <span className="stat-val">88%</span>
                  </div>
                  <div className="stat-bar-track" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}>
                    <div className="stat-bar-fill xp-fill" style={{ width: '88%' }}>
                      <span className="stat-bar-shine" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="hero-description">
                Crafting robust backend services, AI document verification pipelines, and open-source developer tooling with Python, C#/.NET 8, Java/Spring Boot, and React.
              </p>

              {/* RPG Character Attribute Matrix with Thematic Icons */}
              <div className="rpg-attributes-grid">
                <div className="attribute-pill rpg-slot" onMouseEnter={() => playSfx('cursor')}>
                  <div className="attr-left">
                    <RpgIcon id={3} size={18} alt="STR Weapon" />
                    <span className="attr-name">STR (BACKEND)</span>
                  </div>
                  <strong className="attr-score">88</strong>
                </div>
                <div className="attribute-pill rpg-slot" onMouseEnter={() => playSfx('cursor')}>
                  <div className="attr-left">
                    <RpgIcon id={11} size={18} alt="INT Scroll" />
                    <span className="attr-name">INT (AI & RAG)</span>
                  </div>
                  <strong className="attr-score">94</strong>
                </div>
                <div className="attribute-pill rpg-slot" onMouseEnter={() => playSfx('cursor')}>
                  <div className="attr-left">
                    <RpgIcon id={2} size={18} alt="AGI Dagger" />
                    <span className="attr-name">AGI (ASYNC / WS)</span>
                  </div>
                  <strong className="attr-score">90</strong>
                </div>
                <div className="attribute-pill rpg-slot" onMouseEnter={() => playSfx('cursor')}>
                  <div className="attr-left">
                    <RpgIcon id={30} size={18} alt="DEF Shield" />
                    <span className="attr-name">DEF (CI/CD DOCKER)</span>
                  </div>
                  <strong className="attr-score">92</strong>
                </div>
              </div>

              {/* Equipped Primary Arsenal / Equipment Grid */}
              <div className="hero-quick-stack">
                <div className="quick-stack-header">
                  <RpgIcon id={1} size={14} alt="" />
                  <span className="quick-stack-label">EQUIPPED WEAPONRY & GEAR:</span>
                </div>
                <div className="quick-stack-slots">
                  <div className="equip-slot-item rpg-slot" onMouseEnter={() => playSfx('cursor')} onClick={() => playSfx('equip')}>
                    <span className="equip-slot-type">MAIN</span>
                    <strong className="equip-slot-val">FastAPI</strong>
                  </div>
                  <div className="equip-slot-item rpg-slot" onMouseEnter={() => playSfx('cursor')} onClick={() => playSfx('equip')}>
                    <span className="equip-slot-type">OFF</span>
                    <strong className="equip-slot-val">.NET 8</strong>
                  </div>
                  <div className="equip-slot-item rpg-slot" onMouseEnter={() => playSfx('cursor')} onClick={() => playSfx('equip')}>
                    <span className="equip-slot-type">ARMOR</span>
                    <strong className="equip-slot-val">Spring Boot</strong>
                  </div>
                  <div className="equip-slot-item rpg-slot" onMouseEnter={() => playSfx('cursor')} onClick={() => playSfx('equip')}>
                    <span className="equip-slot-type">VAULT</span>
                    <strong className="equip-slot-val">PostgreSQL</strong>
                  </div>
                  <div className="equip-slot-item rpg-slot" onMouseEnter={() => playSfx('cursor')} onClick={() => playSfx('equip')}>
                    <span className="equip-slot-type">GRIMOIRE</span>
                    <strong className="equip-slot-val">React</strong>
                  </div>
                  <div className="equip-slot-item rpg-slot" onMouseEnter={() => playSfx('cursor')} onClick={() => playSfx('equip')}>
                    <span className="equip-slot-type">RUNE</span>
                    <strong className="equip-slot-val">Docker</strong>
                  </div>
                </div>
              </div>

              {/* RPG Battle Command Action Buttons */}
              <div className="hero-action-menu">
                <a
                  className="rpg-menu-btn btn-primary"
                  href="#missions"
                  onClick={() => playSfx('select')}
                  onMouseEnter={() => playSfx('cursor')}
                >
                  <RpgIcon id={1} size={16} alt="Sword" />
                  <span>VIEW QUESTS</span>
                </a>

                <a
                  className="rpg-menu-btn"
                  href="/Tran_Trong_Nhan_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSfx('equip')}
                  onMouseEnter={() => playSfx('cursor')}
                >
                  <RpgIcon id={11} size={16} alt="Scroll" />
                  <span>RÉSUMÉ (PDF)</span>
                  <ArrowUpRight />
                </a>

                <a
                  className="rpg-menu-btn"
                  href="https://github.com/ttnhan227"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSfx('select')}
                  onMouseEnter={() => playSfx('cursor')}
                >
                  <span>GitHub</span>
                  <ArrowUpRight />
                </a>

                <a
                  className="rpg-menu-btn"
                  href="https://www.linkedin.com/in/trantrongnhan"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSfx('select')}
                  onMouseEnter={() => playSfx('cursor')}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight />
                </a>

                <button
                  className="rpg-menu-btn btn-copy"
                  type="button"
                  onClick={copyEmail}
                  onMouseEnter={() => playSfx('cursor')}
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? <CheckIcon /> : <CopyIcon />}
                  <span>{copiedEmail ? 'COPIED!' : 'Summon via Email'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Guild Hero Showcase & Player Profile Box */}
          <div className="hero-artwork-panel rpg-panel">
            <div className="rpg-panel-header">
              <div className="panel-title-wrap">
                <RpgIcon id={29} size={20} alt="Shield Crest" />
                <span className="panel-title-text">HERO SHOWCASE // GUILD RECORD</span>
              </div>
              <span className="art-badge">S-RANK</span>
            </div>

            <div className="hero-artwork-body fantasy-hero-body">
              {/* Guild Citation & Crest Frame */}
              <div className="hero-sprite-showcase-box rpg-frame">
                <div className="sprite-frame-top">
                  <span className="guild-seal-tag">✦ ADVENTURER GUILD CITATION ✦</span>
                </div>
                <div className="guild-crest-showcase-display">
                  <div className="guild-emblem-halo">
                    <img
                      src="/styles/icons/128x128/29.png"
                      alt="Official Adventurer Guild Crest Seal"
                      className="guild-crest-img"
                    />
                  </div>
                  <span className="guild-certified-title">S-RANK CERTIFIED ARTIFICER</span>
                  <div className="sprite-badge-row">
                    <span className="badge-item" onMouseEnter={() => playSfx('cursor')}>
                      <RpgIcon id={1} size={14} alt="" /> BACKEND
                    </span>
                    <span className="badge-item" onMouseEnter={() => playSfx('cursor')}>
                      <RpgIcon id={29} size={14} alt="" /> DISTRIBUTED
                    </span>
                    <span className="badge-item" onMouseEnter={() => playSfx('cursor')}>
                      <RpgIcon id={11} size={14} alt="" /> AI VERIFIED
                    </span>
                  </div>
                </div>
              </div>

              {/* Character Passive Abilities */}
              <div className="character-passives-box rpg-panel-xs">
                <div className="passives-header">
                  <span className="passives-title">PASSIVE ABILITIES</span>
                </div>
                <div className="passive-row" onMouseEnter={() => playSfx('cursor')}>
                  <RpgIcon id={34} size={22} alt="Passive Icon" className="passive-rpg-icon" />
                  <div className="passive-text">
                    <strong className="passive-name">Passive: Citation Sentinel</strong>
                    <span className="passive-desc">Cross-checks AI claims against physical source records to prevent phantom hallucinations.</span>
                  </div>
                </div>
                <div className="passive-row" onMouseEnter={() => playSfx('cursor')}>
                  <RpgIcon id={6} size={22} alt="Passive Icon" className="passive-rpg-icon" />
                  <div className="passive-text">
                    <strong className="passive-name">Passive: Bounded Concurrency</strong>
                    <span className="passive-desc">Executes 4–16 async worker pools for fast, thread-safe background test execution.</span>
                  </div>
                </div>
              </div>

              {/* Player Profile & Gamer Identity (Section 14) */}
              <div className="player-profile-box rpg-panel-xs">
                <div className="player-profile-header">
                  <div className="profile-badge-wrap">
                    <RpgIcon id={14} size={16} alt="Gamer Record" />
                    <span className="profile-box-title">PLAYER PROFILE // GAMER RECORD</span>
                  </div>
                  <span className="profile-since-tag">SINCE 2009</span>
                </div>

                <div className="player-profile-grid">
                  <div className="profile-meta-row" onMouseEnter={() => playSfx('cursor')}>
                    <span className="meta-label">PLATFORMS:</span>
                    <span className="meta-val">PC · Mobile · Console</span>
                  </div>
                  <div className="profile-meta-row" onMouseEnter={() => playSfx('cursor')}>
                    <span className="meta-label">FAVORITE GENRES:</span>
                    <span className="meta-val genres-list">FPS · RPG · MMORPG · GACHA · RTS · ACTION · SOULSLIKE</span>
                  </div>
                  <div className="profile-meta-row" onMouseEnter={() => playSfx('cursor')}>
                    <span className="meta-label">PLAYER INSTINCT:</span>
                    <span className="meta-val instinct-val">Mechanics · UX · Game Balance · Edge Case Bugs</span>
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
