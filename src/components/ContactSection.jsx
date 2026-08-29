import { useState } from 'react'
import { ArrowUpRight, CopyIcon, CheckIcon } from './Icons'
import RpgIcon from './RpgIcon'
import { playSfx } from '../utils/audio'

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = () => {
    playSfx('heal')
    navigator.clipboard.writeText('ttnhan227@gmail.com').then(() => {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2200)
    })
  }

  return (
    <section className="contact-section" id="comm" aria-labelledby="contact-heading">
      <div className="hud-content-container">
        {/* Section Header */}
        <div className="section-title-bar rpg-panel-sm">
          <div className="title-bar-left">
            <div className="animated-torch-flame" aria-hidden="true" />
            <RpgIcon id={36} size={22} alt="Tavern" />
            <span className="section-index-tag">05 // TAVERN</span>
            <h2 className="section-title" id="contact-heading">
              Adventurer's Guild: Tavern & Comm Crystal
            </h2>
          </div>
        </div>

        {/* Transmission Terminal Box */}
        <div className="transmission-terminal-box rpg-panel" id="contact">
          <div className="transmission-header rpg-panel-header">
            <div className="trans-header-left">
              <RpgIcon id={16} size={18} alt="Comm Crystal" />
              <span className="trans-header-title">GUILD COMM CRYSTAL // OPEN FOR QUEST INVITES</span>
            </div>
            <div className="trans-header-status-wrap">
              <span className="status-pixel-dot" aria-hidden="true" />
              <span className="trans-header-status">STATUS: ONLINE</span>
            </div>
          </div>

          <div className="transmission-body">
            <h3 className="trans-headline">
              "Looking to recruit a Level 25 Full-Stack Artificer for your engineering raid?"
            </h3>
            <p className="trans-subtext">
              I am actively interviewing for Software Engineering (Full-Stack & Backend) roles. If you have an engineering opening or would like to discuss distributed architectures, AI verification, or developer tooling, send a message to my tavern inbox.
            </p>

            <div className="trans-actions-row">
              <button
                className="trans-email-btn pixel-btn-amber"
                type="button"
                onClick={copyEmail}
                onMouseEnter={() => playSfx('cursor')}
                aria-label="Copy email address to clipboard"
              >
                <RpgIcon id={13} size={16} alt="" />
                <span className="trans-btn-label">{copiedEmail ? 'COPIED TO CLIPBOARD' : 'ttnhan227@gmail.com'}</span>
                {copiedEmail ? <CheckIcon /> : <CopyIcon />}
              </button>

              <a
                className="trans-link-btn pixel-btn-action"
                href="mailto:ttnhan227@gmail.com"
                aria-label="Send direct email"
                onClick={() => playSfx('select')}
                onMouseEnter={() => playSfx('cursor')}
              >
                <RpgIcon id={11} size={14} alt="" />
                <span>SEND EMAIL</span>
                <ArrowUpRight />
              </a>

              <a
                className="trans-link-btn pixel-btn-action"
                href="https://www.linkedin.com/in/trantrongnhan"
                target="_blank"
                rel="noreferrer"
                onClick={() => playSfx('select')}
                onMouseEnter={() => playSfx('cursor')}
              >
                <span>LINKEDIN</span>
                <ArrowUpRight />
              </a>

              <a
                className="trans-link-btn pixel-btn-action"
                href="https://github.com/ttnhan227"
                target="_blank"
                rel="noreferrer"
                onClick={() => playSfx('select')}
                onMouseEnter={() => playSfx('cursor')}
              >
                <span>GITHUB</span>
                <ArrowUpRight />
              </a>

              <a
                className="trans-link-btn pixel-btn-action"
                href="/Tran_Trong_Nhan_CV.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => playSfx('equip')}
                onMouseEnter={() => playSfx('cursor')}
              >
                <RpgIcon id={10} size={14} alt="" />
                <span>RÉSUMÉ (PDF)</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        {/* Retro Game Credits Footer */}
        <footer className="site-footer rpg-panel-sm" role="contentinfo">
          <div className="footer-content">
            <div className="footer-left">
              <span className="footer-title">TRAN TRONG NHAN // LEVEL 25 SOFTWARE ENGINEER</span>
              <p className="footer-credits">
                Crafted with React 19, Vite & handcrafted CSS. Inspired by 16-bit / 32-bit JRPGs (Chrono Trigger, Final Fantasy VI, Tactics Ogre) & developer workstations.
              </p>
            </div>

            <div className="footer-right">
              <span className="footer-gameover-tag">QUEST COMPLETE? NOT YET.</span>
              <a
                className="footer-top-btn"
                href="#init"
                onClick={() => playSfx('select')}
                onMouseEnter={() => playSfx('cursor')}
              >
                <span>[ RETURN TO INN ↑ ]</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
