import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { projects } from "../data/questProjects";
import { profile, chapters, skills } from "../data/villageContent";
import GamePanel from './GamePanels';
import { VillageAudio } from './audio';
import MiniMap from './MiniMap';
const CanvasGame = lazy(() => import("./CanvasGame"));
const SAVE_KEY = "nhan-workshop-village-v1";
function loadSave() {
  try {
    const v = JSON.parse(localStorage.getItem(SAVE_KEY));
    return v?.version === 1 && Array.isArray(v.visited) && Number.isFinite(v.position?.x) && Number.isFinite(v.position?.y) ? v : null;
  } catch {
    return null;
  }
}
function Link({ href, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
    >
      {children} ↗
    </a>
  );
}
function PlainPortfolio({ onPlay }) {
  return (
    <main className="plain-portfolio" id="portfolio">
      <a className="plain-back" href="#home" onClick={onPlay}>
        ← Back to the village
      </a>
      <header>
        <p className="micro">PORTFOLIO</p>
        <h1>{profile.name}</h1>
        <p>
          {profile.role} · {profile.location}
        </p>
        <div className="real-links">
          <Link href={profile.github}>GitHub</Link>
          <Link href={profile.linkedin}>LinkedIn</Link>
          <Link href={"mailto:" + profile.email}>Email</Link>
          <a href={profile.resume} download>
            Download résumé
          </a>
        </div>
      </header>
      <section aria-labelledby="plain-projects">
        <h2 id="plain-projects">Projects</h2>
        {projects.map((p) => (
          <article key={p.id} id={p.id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p className="plain-stack">{p.stack.join(" · ")}</p>
            <details><summary>Project details & screenshots</summary><p>{p.role}</p>{p.images.map(s=><figure key={s.image}><img loading="lazy" src={s.image} alt={s.title} style={{maxWidth:'100%',maxHeight:500,objectFit:'contain'}}/><figcaption>{s.title}</figcaption></figure>)}</details>
            <div className="real-links">
              <Link href={p.live}>{p.liveLabel || "View project"}</Link>
              <Link href={p.repo}>View source</Link>
              {p.downloads?.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
      <section>
        <h2>Skills</h2>
        {skills.map((s) => (
          <p key={s.name}>
            <strong>{s.name}:</strong> {s.tools.join(" · ")}
          </p>
        ))}
      </section>
      <section>
        <h2>Education & project history</h2>
        {chapters.map((c) => (
          <article key={c.title}>
            <p className="micro">{c.date}</p>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </article>
        ))}
      </section>
      <footer>
        <Link href="/styles/rpg/CREDITS.md">Art & audio credits</Link>
      </footer>
    </main>
  );
}
export default function VillageApp() {
  const [save, setSave] = useState(loadSave),
    [mode, setMode] = useState(() =>
      location.hash === "#portfolio" ? "list" : "title",
    ),
    [initialSave, setInitialSave] = useState(null),
    [state, setState] = useState(null),
    [night, setNight] = useState(null),
    [panel, setPanel] = useState(null);
  const [sound, setSound] = useState(false), [crt, setCrt] = useState(false), [notice, setNotice] = useState(null);
  const audio = useRef(null), noticeTimer = useRef(null);
  useEffect(() => { audio.current = new VillageAudio(); return () => { audio.current?.destroy(); clearTimeout(noticeTimer.current); }; }, []);
  useEffect(() => { if(mode !== 'game') {audio.current?.enable(false);setSound(false);} }, [mode]);
  function achievement(title, text) {setNotice({title,text});clearTimeout(noticeTimer.current);noticeTimer.current=setTimeout(()=>setNotice(null),5000);}
  const engine = useRef(null),
    lastSave = useRef(0);
  const start = (resume = false) => {
    setInitialSave(resume ? loadSave() : null);
    if (!resume) {
      localStorage.removeItem(SAVE_KEY);
      setSave(null);
    }
    setState(null);
    setMode("game");
    history.replaceState(null, "", "#game");
  };
  const toList = (e) => {
    e?.preventDefault();
    setMode("list");
    history.replaceState(null, "", "#portfolio");
  };
  function update(s) {
    setState(s);
    if (Date.now() - lastSave.current > 1000) {
      lastSave.current = Date.now();
      const data = { ...s, version: 1 };
      try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(data));
        setSave(data);
      } catch {}
    }
  }
  useEffect(() => {
    if (mode !== "title") return;
    const key = (e) => {
      if (e.key === "Enter" && e.target === document.body) start(false);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [mode]);
  if (mode === "list")
    return (
      <PlainPortfolio
        onPlay={(e) => {
          e.preventDefault();
          setMode("title");
          history.replaceState(null, "", "#home");
        }}
      />
    );
  if (mode === "title")
    return (
      <main className="title-screen">
        <div className="title-art" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="title-content">
          <p className="micro">TRAN TRONG NHAN · SOFTWARE ENGINEER</p>
          <h1>
            Workshop
            <br />
            <span>Village</span>
          </h1>
          <p className="title-description">
            A small place for things I’ve built.
          </p>
          <p className="press-start">PRESS START</p>
          <div className="title-menu">
            <button className="primary-action" onClick={() => start(false)}>
              New game
            </button>
            <button onClick={() => start(true)} disabled={!save}>
              Continue
            </button>
            <a href="#portfolio" onClick={toList}>
              Skip to portfolio
            </a>
          </div>
          <p className="title-note">
            A short walk. Four projects. No wrong turns.
          </p>
          <a
            className="credits-link"
            href="/styles/rpg/CREDITS.md"
            target="_blank"
            rel="noreferrer"
          >
            Art & audio credits
          </a>
        </div>
      </main>
    );
  return (
    <main className="village-screen">
      <div className={'game-shell' + (crt ? ' crt-on' : '')}>
        <header className="game-hud">
          <div>
            <span className="micro">NHÂN’S WORKSHOP VILLAGE</span>
            <h1>{state?.place || "Opening the village…"}</h1>
          </div>
          <div className="hud-actions">
            <MiniMap state={state}/>
            <button aria-pressed={sound} onClick={async()=>{try{await audio.current.enable(!sound);setSound(!sound);}catch{achievement('Sound unavailable','You can keep exploring quietly.');}}}>{sound?'Sound on':'Sound off'}</button>
            <button onClick={() => setNight((v) => !v)} aria-pressed={night}>
              {night ? "Night" : "Day"}
            </button>
            <a href="#portfolio" onClick={toList}>
              Portfolio list
            </a>
          </div>
        </header>
        <Suspense
          fallback={<div className="world-loading">Opening the village…</div>}
        >
          <CanvasGame
            save={initialSave}
            paused={!!panel}
            night={night}
            engineRef={engine}
            events={{ state: update, interact: setPanel, sound: id=>audio.current?.play(id), transition: id=>audio.current?.setArea(id), achievement }}
          />
        </Suspense>
        <div className="game-caption" role="status">
          <span>
            {state?.near
              ? state.near.name
              : "Walk north to Nhân’s workshop, or explore on your own."}
          </span>
          <span>{state?.visited.length || 0}/4 projects</span>
        </div>
        <div className="game-controls">
          <p>
            <kbd>WASD</kbd> / <kbd>↑↓←→</kbd> move · <kbd>E</kbd> /{" "}
            <kbd>Space</kbd> interact · click to walk
          </p>
          <div className="dpad">
            {[
              ["↑", "w"],
              ["←", "a"],
              ["↓", "s"],
              ["→", "d"],
            ].map(([label, key]) => (
              <button
                key={key}
                aria-label={
                  "Move " + { w: "up", a: "left", s: "down", d: "right" }[key]
                }
                onPointerDown={(e) => {
                  e.preventDefault();
                  e.currentTarget.setPointerCapture(e.pointerId);
                  engine.current?.setInput(key, true);
                }}
                onPointerUp={() => engine.current?.setInput(key, false)}
                onPointerCancel={() => engine.current?.setInput(key, false)}
              >
                {label}
              </button>
            ))}
            <button
              className="interact-button"
              aria-label="Interact"
              onClick={() => engine.current?.interact()}
            >
              A
            </button>
          </div>
        </div>
        <div className="game-footer">
          <button onClick={()=>setPanel('journal')}>Journal</button>
          <button onClick={()=>setCrt(v=>!v)} aria-pressed={crt}>Scanlines</button>
          <button onClick={() => setMode("title")}>Title screen</button>
          <a href="/styles/rpg/CREDITS.md" target="_blank" rel="noreferrer">
            Credits
          </a>
        </div>
      </div>
      {notice && <aside className="achievement-toast" role="status"><strong>{notice.title}</strong><p>{notice.text}</p></aside>}
      {panel && (
        <GamePanel id={panel} onSelect={setPanel} onBlip={()=>audio.current?.play('blip')} visited={state?.visited} onClose={()=>{setPanel(null);engine.current?.canvas.focus();}}/>
      )}
    </main>
  );
}
