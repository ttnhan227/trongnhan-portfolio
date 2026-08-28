export default function PixelWorkstation() {
  return (
    <div className="pixel-workstation-wrap" aria-label="16-bit Developer Battle Station Illustration">
      <svg
        className="pixel-workstation-svg"
        viewBox="0 0 340 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Pixel art developer workstation with dual CRT monitors, developer sprite, PC tower, and coffee"
      >
        {/* Background Grid Accent Wall */}
        <rect x="0" y="0" width="340" height="240" fill="#080c14" rx="4" />
        <pattern id="pixel-grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#121a29" strokeWidth="1" />
        </pattern>
        <rect x="0" y="0" width="340" height="190" fill="url(#pixel-grid)" />

        {/* Ambient Wall Poster / Level Map */}
        <rect x="18" y="14" width="46" height="32" fill="#141c2c" stroke="#25354e" strokeWidth="2" />
        <rect x="22" y="18" width="38" height="24" fill="#0d1422" />
        <rect x="26" y="22" width="8" height="6" fill="#f59e0b" />
        <rect x="38" y="26" width="16" height="4" fill="#10b981" />
        <rect x="30" y="32" width="22" height="4" fill="#38bdf8" />
        <circle cx="50" cy="22" r="2" fill="#ef4444" />

        {/* Window / Starfield Frame */}
        <rect x="272" y="14" width="50" height="42" fill="#050810" stroke="#25354e" strokeWidth="2" />
        <rect x="278" y="20" width="3" height="3" fill="#f59e0b" />
        <rect x="304" y="26" width="2" height="2" fill="#38bdf8" />
        <rect x="286" y="38" width="3" height="3" fill="#10b981" />
        <rect x="312" y="42" width="2" height="2" fill="#f1f5f9" />
        <rect x="276" y="46" width="42" height="2" fill="#141c2c" />

        {/* Desk Surface (Chunky 16-bit wood/slate) */}
        <rect x="10" y="170" width="320" height="12" fill="#2d3748" stroke="#1a202c" strokeWidth="2" />
        <rect x="10" y="182" width="320" height="50" fill="#171923" />
        <rect x="24" y="186" width="12" height="44" fill="#1a202c" stroke="#2d3748" strokeWidth="2" />
        <rect x="304" y="186" width="12" height="44" fill="#1a202c" stroke="#2d3748" strokeWidth="2" />
        <line x1="10" y1="172" x2="330" y2="172" stroke="#4a5568" strokeWidth="2" />

        {/* CRT Monitor 1 (Left - Terminal) */}
        {/* Monitor Base & Neck */}
        <rect x="58" y="156" width="32" height="14" fill="#283548" stroke="#161f2e" strokeWidth="2" />
        <rect x="52" y="166" width="44" height="4" fill="#1e2736" />
        {/* Monitor Housing */}
        <rect x="24" y="58" width="102" height="98" rx="6" fill="#1f293d" stroke="#101726" strokeWidth="3" />
        <rect x="28" y="62" width="94" height="90" rx="4" fill="#131b2a" />
        {/* CRT Screen Bezel & Screen Glass */}
        <rect x="34" y="68" width="82" height="74" rx="4" fill="#06120b" stroke="#1c2d20" strokeWidth="2" />
        {/* Terminal Green Code Lines */}
        <rect x="40" y="74" width="44" height="4" fill="#10b981" />
        <rect x="40" y="82" width="30" height="3" fill="#34d399" opacity="0.9" />
        <rect x="40" y="89" width="66" height="3" fill="#10b981" opacity="0.8" />
        <rect x="46" y="96" width="36" height="3" fill="#34d399" opacity="0.8" />
        <rect x="40" y="103" width="58" height="3" fill="#10b981" opacity="0.75" />
        <rect x="40" y="110" width="46" height="3" fill="#34d399" opacity="0.85" />
        <rect x="40" y="117" width="22" height="3" fill="#10b981" />
        {/* Blinking Prompt Cursor */}
        <rect className="terminal-pixel-cursor" x="66" y="116" width="5" height="5" fill="#34d399" />
        {/* Monitor Power LED */}
        <circle cx="75" cy="148" r="2.5" fill="#10b981" />

        {/* CRT Monitor 2 (Right - Architecture/GUI View) */}
        {/* Monitor Base & Neck */}
        <rect x="180" y="66" width="32" height="14" fill="#283548" stroke="#161f2e" strokeWidth="2" />
        <rect x="174" y="166" width="44" height="4" fill="#1e2736" />
        {/* Monitor Housing */}
        <rect x="144" y="68" width="104" height="98" rx="6" fill="#1f293d" stroke="#101726" strokeWidth="3" />
        <rect x="148" y="72" width="96" height="90" rx="4" fill="#131b2a" />
        {/* Screen Glass */}
        <rect x="154" y="78" width="84" height="74" rx="4" fill="#080e1a" stroke="#1c283c" strokeWidth="2" />
        {/* GUI Window Header */}
        <rect x="156" y="80" width="80" height="8" fill="#1e2d44" />
        <circle cx="161" cy="84" r="1.5" fill="#ef4444" />
        <circle cx="166" cy="84" r="1.5" fill="#f59e0b" />
        <circle cx="171" cy="84" r="1.5" fill="#10b981" />
        {/* Architecture Pipeline Flow Diagram inside Screen */}
        <rect x="160" y="94" width="20" height="13" rx="2" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1" />
        <rect x="163" y="97" width="14" height="2" fill="#38bdf8" />
        <line x1="180" y1="100" x2="188" y2="100" stroke="#f59e0b" strokeWidth="2" />
        <rect x="188" y="94" width="22" height="13" rx="2" fill="#2e1f44" stroke="#c084fc" strokeWidth="1" />
        <rect x="191" y="97" width="16" height="2" fill="#c084fc" />
        <line x1="210" y1="100" x2="218" y2="100" stroke="#f59e0b" strokeWidth="2" />
        <rect x="218" y="94" width="18" height="13" rx="2" fill="#163828" stroke="#34d399" strokeWidth="1" />
        <rect x="221" y="97" width="12" height="2" fill="#34d399" />
        {/* Metric Graph on Bottom Screen */}
        <rect x="160" y="116" width="72" height="26" fill="#0d1522" stroke="#1b283d" strokeWidth="1" />
        <polyline points="164,136 176,130 188,133 200,124 212,126 224,120" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        {/* Monitor Power LED */}
        <circle cx="196" cy="158" r="2.5" fill="#f59e0b" />

        {/* 16-BIT DEVELOPER CHARACTER SPRITE SITTING AT DESK */}
        {/* Chair Backrest */}
        <rect x="116" y="128" width="38" height="42" rx="4" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
        <rect x="122" y="132" width="26" height="34" rx="2" fill="#0f172a" />
        {/* Developer Head & Hair */}
        <rect x="126" y="104" width="18" height="18" rx="3" fill="#1e1b4b" />
        <rect x="128" y="110" width="14" height="14" rx="2" fill="#fbcfe8" />
        {/* Headphones */}
        <path d="M 124 114 A 10 10 0 0 1 146 114" stroke="#f59e0b" strokeWidth="3" fill="none" />
        <rect x="123" y="112" width="4" height="8" rx="1" fill="#f59e0b" />
        <rect x="143" y="112" width="4" height="8" rx="1" fill="#f59e0b" />
        {/* Developer Hoodie / Body */}
        <rect x="120" y="126" width="30" height="34" rx="3" fill="#312e81" stroke="#1e1b4b" strokeWidth="1" />
        <rect x="128" y="128" width="14" height="18" fill="#4338ca" />
        {/* Hands on Keyboard */}
        <rect className="pixel-typing-hand" x="114" y="168" width="8" height="6" rx="1" fill="#fbcfe8" />
        <rect className="pixel-typing-hand" x="148" y="168" width="8" height="6" rx="1" fill="#fbcfe8" />

        {/* PC Tower (Far Right) */}
        <rect x="274" y="80" width="48" height="90" rx="3" fill="#1a2232" stroke="#0e1420" strokeWidth="3" />
        <rect x="278" y="86" width="40" height="10" fill="#0f1522" stroke="#25334a" strokeWidth="1" />
        {/* 5.25" Drive & 3.5" Floppy Slot */}
        <rect x="282" y="90" width="32" height="2" fill="#000" />
        <rect x="278" y="100" width="40" height="8" fill="#0f1522" stroke="#25334a" strokeWidth="1" />
        <rect x="286" y="103" width="24" height="2" fill="#000" />
        {/* Power Button & Blinking LEDs */}
        <circle cx="284" cy="120" r="3" fill="#2d3c54" stroke="#485c7b" strokeWidth="1" />
        <circle className="tower-led-green" cx="296" cy="120" r="2" fill="#10b981" />
        <circle className="tower-led-amber" cx="306" cy="120" r="2" fill="#f59e0b" />
        {/* Tower Air Grille */}
        <line x1="282" y1="134" x2="314" y2="134" stroke="#0d131e" strokeWidth="2" />
        <line x1="282" y1="140" x2="314" y2="140" stroke="#0d131e" strokeWidth="2" />
        <line x1="282" y1="146" x2="314" y2="146" stroke="#0d131e" strokeWidth="2" />
        <line x1="282" y1="152" x2="314" y2="152" stroke="#0d131e" strokeWidth="2" />
        <line x1="282" y1="158" x2="314" y2="158" stroke="#0d131e" strokeWidth="2" />

        {/* Keyboard & Mouse Pad */}
        <rect x="96" y="174" width="80" height="12" rx="2" fill="#1c2637" stroke="#0f1622" strokeWidth="2" />
        <line x1="100" y1="177" x2="172" y2="177" stroke="#33445e" strokeWidth="2" strokeDasharray="3 2" />
        <line x1="100" y1="181" x2="172" y2="181" stroke="#33445e" strokeWidth="2" strokeDasharray="4 2" />
        {/* Mouse Pad & Mouse */}
        <rect x="184" y="174" width="36" height="13" rx="2" fill="#121927" stroke="#25354e" strokeWidth="1" />
        <rect x="194" y="176" width="14" height="9" rx="3" fill="#2d3d56" stroke="#161f2e" strokeWidth="1" />

        {/* Coffee Mug with Animated Pixel Steam */}
        <rect x="238" y="165" width="16" height="18" rx="2" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
        <path d="M 254 169 Q 260 174 254 179" fill="none" stroke="#78350f" strokeWidth="2" />
        {/* Steam Particles */}
        <rect className="pixel-steam steam-1" x="242" y="156" width="3" height="4" fill="#e2e8f0" rx="1" />
        <rect className="pixel-steam steam-2" x="247" y="151" width="3" height="4" fill="#e2e8f0" rx="1" />
        <rect className="pixel-steam steam-3" x="244" y="145" width="3" height="4" fill="#e2e8f0" rx="1" />

        {/* Floppy Disk on Desk */}
        <rect x="28" y="175" width="18" height="14" rx="1" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
        <rect x="32" y="175" width="10" height="6" fill="#f8fafc" />
        <rect x="35" y="183" width="4" height="4" fill="#93c5fd" />
      </svg>
    </div>
  )
}
