import { useState, useEffect } from 'react'
import { ArrowUpRight } from './Icons'
import RpgIcon from './RpgIcon'
import {
  playSfx,
  toggleAudio,
  initAudio,
  toggleBgm,
  nextBgmTrack,
  subscribeAudioState,
} from '../utils/audio'

export default function HeaderHUD({ activeSection, activeStageName }) {
  const [sfxOn, setSfxOn] = useState(false)
  const [bgmOn, setBgmOn] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)

  useEffect(() => {
    initAudio()
    const unsubscribe = subscribeAudioState((state) => {
      setSfxOn(state.sfxEnabled)
      setBgmOn(state.bgmPlaying)
      setCurrentTrack(state.currentTrack)
    })
    return () => unsubscribe()
  }, [])

  const handleToggleSfx = () => {
    toggleAudio()
  }

  const handleToggleBgm = () => {
    playSfx('select')
    toggleBgm()
  }

  const handleNextBgm = (e) => {
    e.stopPropagation()
    playSfx('select')
    nextBgmTrack()
  }

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
        {/* Left: Hero RPG Crest Badge */}
        <a
          className="hud-brand rpg-panel-sm"
          href="#init"
          aria-label="Hero Character Sheet"
          onClick={() => playSfx('select')}
          onMouseEnter={() => playSfx('cursor')}
        >
          <div className="brand-badge-inner">
            <RpgIcon id={1} size={18} alt="Sword Crest" className="hud-brand-crest" />
            <span className="brand-name">TRAN TRONG NHAN</span>
            <span className="player-lvl-tag">LV.25 ARTIFICER</span>
          </div>
        </a>

        {/* Center: RPG Realm Telemetry & Gold Purse & Audio Controls */}
        <div className="hud-center-telemetry">
          <div className="hud-zone-tracker rpg-panel-xs" aria-live="polite">
            <span className="zone-label">REALM:</span>
            <span className="zone-name">[ {getSectionRealm(activeSection)} ]</span>
          </div>

          <div className="hud-credits-badge rpg-panel-xs">
            <RpgIcon id={13} size={15} alt="Gold Coin" className="hud-coin-icon" />
            <span className="credits-text">9,999 GOLD</span>
          </div>

          {/* BGM Toggle Button (Consistent with SFX button) */}
          <div className={`hud-audio-btn-wrap ${bgmOn ? 'is-active' : ''}`}>
            <button
              type="button"
              className={`hud-audio-toggle rpg-panel-xs ${bgmOn ? 'bgm-active' : ''}`}
              onClick={handleToggleBgm}
              onMouseEnter={() => playSfx('cursor')}
              title={bgmOn ? `Background Music Playing: ${currentTrack?.name || ''} (Click to mute)` : 'Background Music Muted (Click to play)'}
              aria-label="Toggle retro RPG background music"
            >
              <span className="audio-btn-icon">{bgmOn ? '🎵' : '🔇'}</span>
              <span className="audio-btn-label">BGM: {bgmOn ? 'ON' : 'OFF'}</span>
            </button>
            {bgmOn && (
              <button
                type="button"
                className="hud-track-skip-btn rpg-panel-xs"
                onClick={handleNextBgm}
                onMouseEnter={() => playSfx('cursor')}
                title={`Next track: ${currentTrack?.name || ''}`}
                aria-label="Next background music track"
              >
                ⏭
              </button>
            )}
          </div>

          {/* Audio SFX Toggle Button (Consistent with BGM button) */}
          <button
            type="button"
            className={`hud-audio-toggle rpg-panel-xs ${sfxOn ? 'sfx-active' : ''}`}
            onClick={handleToggleSfx}
            onMouseEnter={() => playSfx('cursor')}
            title={sfxOn ? 'Sound Effects Enabled (Click to mute)' : 'Sound Effects Muted (Click to enable)'}
            aria-label="Toggle retro RPG sound effects"
          >
            <span className="audio-btn-icon">{sfxOn ? '🔊' : '🔇'}</span>
            <span className="audio-btn-label">SFX: {sfxOn ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        {/* Right: RPG Navigation Menu */}
        <nav className="hud-nav" aria-label="Fantasy RPG Main Menu">
          <a
            href="#init"
            className={`hud-nav-btn ${activeSection === 'init' ? 'is-active' : ''}`}
            onClick={() => playSfx('select')}
            onMouseEnter={() => playSfx('cursor')}
          >
            <span className="nav-cursor">{activeSection === 'init' ? '▶' : ' '}</span>
            <span className="nav-idx">01:</span>
            <span className="nav-text">HERO</span>
          </a>
          <a
            href="#missions"
            className={`hud-nav-btn ${activeSection === 'missions' ? 'is-active' : ''}`}
            onClick={() => playSfx('select')}
            onMouseEnter={() => playSfx('cursor')}
          >
            <span className="nav-cursor">{activeSection === 'missions' ? '▶' : ' '}</span>
            <span className="nav-idx">02:</span>
            <span className="nav-text">QUESTS</span>
          </a>
          <a
            href="#tooling"
            className={`hud-nav-btn ${activeSection === 'tooling' ? 'is-active' : ''}`}
            onClick={() => playSfx('select')}
            onMouseEnter={() => playSfx('cursor')}
          >
            <span className="nav-cursor">{activeSection === 'tooling' ? '▶' : ' '}</span>
            <span className="nav-idx">03:</span>
            <span className="nav-text">FORGE</span>
          </a>
          <a
            href="#loadout"
            className={`hud-nav-btn ${activeSection === 'loadout' ? 'is-active' : ''}`}
            onClick={() => playSfx('select')}
            onMouseEnter={() => playSfx('cursor')}
          >
            <span className="nav-cursor">{activeSection === 'loadout' ? '▶' : ' '}</span>
            <span className="nav-idx">04:</span>
            <span className="nav-text">ARMORY</span>
          </a>
          <a
            href="#comm"
            className={`hud-nav-btn ${activeSection === 'comm' ? 'is-active' : ''}`}
            onClick={() => playSfx('select')}
            onMouseEnter={() => playSfx('cursor')}
          >
            <span className="nav-cursor">{activeSection === 'comm' ? '▶' : ' '}</span>
            <span className="nav-idx">05:</span>
            <span className="nav-text">TAVERN</span>
          </a>

          <a
            className="hud-cv-btn pixel-btn-amber"
            href="/Tran_Trong_Nhan_CV.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download Character Sheet / Résumé PDF"
            onClick={() => playSfx('equip')}
            onMouseEnter={() => playSfx('cursor')}
          >
            <span>RÉSUMÉ</span>
            <ArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  )
}
