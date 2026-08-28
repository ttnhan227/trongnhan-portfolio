import { ArrowUpRight } from './Icons'
import RpgIcon from './RpgIcon'

export default function HeaderHUD({ activeSection, activeStageName }) {
  const getSectionRealm = (sec) => {
    switch (sec) {
      case 'init': return 'HERO SANCTUM'
      case 'missions': return activeStageName ? activeStageName.toUpperCase() : 'QUEST BOARD'
      case 'tooling': return 'ARCANE FORGE'
      case 'loadout': return 'GRAND ARMORY'
      case 'builds': return 'BOUNTY ARCHIVE'
      case 'comm': return 'ADVENTURER TAVERN'
      default: return sec.toUpperCase()
    }
  }

  return (
    <header className="site-header" role="banner">
      <div className="hud-container">
        {/* Left: Hero RPG Crest Badge with Downloaded Sword Icon */}
        <a className="hud-brand pixel-frame-sm" href="#init" aria-label="Hero Character Sheet">
          <div className="brand-badge-inner">
            <RpgIcon id={1} size={18} alt="Sword Crest" className="hud-brand-crest" />
            <span className="brand-name">TRAN TRONG NHAN</span>
            <span className="player-lvl-tag">LV.25 ARTIFICER</span>
          </div>
        </a>

        {/* Center: RPG Realm Telemetry & Gold Purse (visible on desktop) */}
        <div className="hud-center-telemetry">
          <div className="hud-zone-tracker pixel-frame-xs" aria-live="polite">
            <span className="zone-label">REALM:</span>
            <span className="zone-name">[ {getSectionRealm(activeSection)} ]</span>
          </div>

          <div className="hud-credits-badge pixel-frame-xs">
            <RpgIcon id={13} size={15} alt="Gold Coin" className="hud-coin-icon" />
            <span className="credits-text">9,999 GOLD</span>
          </div>
        </div>

        {/* Right: RPG Navigation Menu */}
        <nav className="hud-nav" aria-label="Fantasy RPG Main Menu">
          <a
            href="#init"
            className={`hud-nav-btn ${activeSection === 'init' ? 'is-active' : ''}`}
          >
            <span className="nav-cursor">{activeSection === 'init' ? '▶' : ''}</span>
            <span className="nav-idx">01:</span>
            <span className="nav-text">HERO</span>
          </a>
          <a
            href="#missions"
            className={`hud-nav-btn ${activeSection === 'missions' ? 'is-active' : ''}`}
          >
            <span className="nav-cursor">{activeSection === 'missions' ? '▶' : ''}</span>
            <span className="nav-idx">02:</span>
            <span className="nav-text">QUESTS</span>
          </a>
          <a
            href="#tooling"
            className={`hud-nav-btn ${activeSection === 'tooling' ? 'is-active' : ''}`}
          >
            <span className="nav-cursor">{activeSection === 'tooling' ? '▶' : ''}</span>
            <span className="nav-idx">03:</span>
            <span className="nav-text">FORGE</span>
          </a>
          <a
            href="#loadout"
            className={`hud-nav-btn ${activeSection === 'loadout' ? 'is-active' : ''}`}
          >
            <span className="nav-cursor">{activeSection === 'loadout' ? '▶' : ''}</span>
            <span className="nav-idx">04:</span>
            <span className="nav-text">ARMORY</span>
          </a>
          <a
            href="#comm"
            className={`hud-nav-btn ${activeSection === 'comm' ? 'is-active' : ''}`}
          >
            <span className="nav-cursor">{activeSection === 'comm' ? '▶' : ''}</span>
            <span className="nav-idx">05:</span>
            <span className="nav-text">TAVERN</span>
          </a>

          <a
            className="hud-cv-btn pixel-btn-amber"
            href="/Tran_Trong_Nhan_CV.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download Character Sheet / Résumé PDF"
          >
            <span>RÉSUMÉ</span>
            <ArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  )
}
