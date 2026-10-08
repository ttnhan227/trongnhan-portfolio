import { useEffect, useRef, useState } from "react";
import { projects } from "../data/questProjects";
import { profile, skills, chapters, dialogue } from "../data/villageContent";
import { drawAvatar } from "./engine";
const sprite = {
  groundwork: "0116",
  "recon-qa": "0113",
  tenvora: "0089",
  logiflow: "0103",
};
const Item = ({ id = "0089", className = "" }) => (
  <img
    className={"pixel-item " + className}
    src={"/styles/rpg/dungeon/tile_" + id + ".png"}
    alt=""
  />
);
const Link = ({ href, children, primary = false, download = false }) => (
  <a
    className={primary ? "pixel-button primary-action" : "real-link"}
    href={href}
    target={download || href.startsWith("mailto:") ? undefined : "_blank"}
    rel="noreferrer"
    download={download || undefined}
  >
    {children}
    {download ? " ↓" : " ↗"}
  </a>
);
function Portrait({ expression }) {
  const canvas = useRef(null);
  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, 32, 32);
    drawAvatar(ctx, 8, 26, "down", 0, expression);
  }, [expression]);
  return (
    <canvas
      width="32"
      height="32"
      ref={canvas}
      className="portrait"
      aria-label={"Nhân, " + expression + " expression"}
      role="img"
    />
  );
}
function Conversation({ id, onClose, onSelect, onBlip }) {
  const lines = dialogue[id],
    [line, setLine] = useState(0),
    [count, setCount] = useState(0);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const skip=useRef(false);
  const current = lines[line],
    finished = reduced || count >= current.text.length;
  useEffect(() => {
    skip.current=false;
    setCount(reduced ? current.text.length : 0);
    if (reduced) return;
    let n = 0;
    const interval = setInterval(() => {
      if(skip.current){clearInterval(interval);return;}
      n++;
      setCount(n);
      if (n % 3 === 0) onBlip?.();
      if (n >= current.text.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, [line, id]);
  function next() {
    if (!finished) {
      skip.current=true;
      setCount(current.text.length);
      return;
    }
    setLine((n) => Math.min(lines.length - 1, n + 1));
  }
  return (
    <div className="conversation">
      <Portrait expression={current.face} />
      <div>
        <p className="micro">NHÂN</p>
        <p className="spoken-line" aria-hidden="true">
          {current.text.slice(0, reduced ? current.text.length : count)}
          <span className={!finished ? "text-cursor" : ""} />
        </p>
        <p className="screen-reader" aria-live="polite">
          {current.text}
        </p>
        <div className="dialog-choices">
          {line < lines.length - 1 || !finished ? (
            <button
              data-autofocus
              className="pixel-button primary-action"
              onClick={next}
            >
              {finished ? "Continue →" : "Finish line"}
            </button>
          ) : (
            <>
              {id === "about" && (
                <button
                  className="pixel-button"
                  onClick={() => onSelect("skills")}
                >
                  Show me your toolkit
                </button>
              )}
              <button
                data-autofocus
                className="pixel-button primary-action"
                onClick={onClose}
              >
                Back to exploring
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
function ProjectCard({ project }) {
  const [shot, setShot] = useState(0),
    [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <div className="project-card">
      <div className="project-story">
        <p className="micro">{project.kind}</p>
        <h3>{project.summary}</h3>
        <p>{project.description}</p>
        <div className="real-links">
          <Link primary href={project.live}>
            {project.liveLabel || "Play / view project"}
          </Link>
          <Link href={project.repo}>View source</Link>
          {project.downloads?.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="equipped-tools" aria-label="Tech stack">
          {project.stack.map((tool, i) => (
            <span key={tool}>
              <Item id={["0116", "0113", "0089", "0103"][i % 4]} />
              {tool}
            </span>
          ))}
        </div>
        <p className="project-role">{project.role}</p>
        <details className="implementation">
          <summary>Behind the build</summary>
          <ul>
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p>{project.note}</p>
        </details>
        {project.command && (
          <button
            className="install-command"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(project.command);
                setCopied(true);
                clearTimeout(timer.current);
                timer.current = setTimeout(() => setCopied(false), 2000);
              } catch {
                setCopied(false);
              }
            }}
          >
            <code>{project.command}</code>
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        )}
      </div>
      <div className="project-captures">
        {project.images.length > 1 && (
          <div
            className="capture-switch"
            role="group"
            aria-label="Project screenshots"
          >
            {project.images.map((s, i) => (
              <button
                key={s.image}
                aria-pressed={i === shot}
                onClick={() => setShot(i)}
              >
                {s.title}
              </button>
            ))}
          </div>
        )}
        <img
          className={
            "project-capture " +
            (project.images[shot].format === "phone" ? "mobile-capture" : "")
          }
          src={project.images[shot].image}
          alt={project.images[shot].title}
        />
      </div>
    </div>
  );
}
function Inventory({ onSelect }) {
  return (
    <div className="inventory-grid">
      {skills.map((s) => (
        <section key={s.name}>
          <div className="inventory-title">
            <Item id={s.icon} />
            <h3>{s.name}</h3>
          </div>
          <p>{s.tools.join(" · ")}</p>
          <div
            className="proof-pips"
            aria-label={"Applied in " + s.proof.length + " projects"}
          >
            {Array.from({ length: 4 }, (_, i) => (
              <i key={i} className={i < s.proof.length ? "earned" : ""} />
            ))}
            <span>{s.proof.length} project applications</span>
          </div>
          <div className="proof-links">
            {s.proof.map((title) => (
              <button
                key={title}
                onClick={() =>
                  onSelect(projects.find((p) => p.title === title).id)
                }
              >
                {title}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
function ChapterBook() {
  const [page, setPage] = useState(0),
    c = chapters[page];
  return (
    <div className="chapter-book">
      <div className="chapter-spine">
        {chapters.map((ch, i) => (
          <button
            key={ch.title}
            aria-pressed={i === page}
            onClick={() => setPage(i)}
          >
            <span>0{i + 1}</span>
            {ch.title}
          </button>
        ))}
      </div>
      <article>
        <p className="micro">
          CHAPTER 0{page + 1} · {c.date}
        </p>
        <h3>{c.title}</h3>
        <p>{c.text}</p>
        <div className="chapter-actions">
          <button
            className="pixel-button"
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
          >
            ← Previous
          </button>
          <span>
            {page + 1} / {chapters.length}
          </span>
          <button
            className="pixel-button"
            disabled={page === chapters.length - 1}
            onClick={() => setPage((p) => p + 1)}
          >
            Next →
          </button>
        </div>
      </article>
    </div>
  );
}
export default function GamePanel({ id, onClose, onSelect, onBlip, visited }) {
  const ref = useRef(null),
    previous = useRef(document.activeElement);
  const project = projects.find((p) => p.id === id);
  useEffect(() => {
    ref.current.showModal();
    ref.current.querySelector("[data-autofocus]")?.focus();
    return () => {
      ref.current?.close();
      previous.current?.focus();
    };
  }, []);
  useEffect(() => {
    ref.current.scrollTop = 0;
  }, [id]);
  const title =
    project?.title ||
    {
      about: "A conversation at the workbench",
      secret: "The quiet corner",
      skills: "Everyday toolkit",
      experience: "The story so far",
      contact: "Leave a message",
      resume: "Résumé collected",
      journal: "Project journal",
      menu: "Take a breather",
    }[id];
  return (
    <dialog
      ref={ref}
      className={"rpg-dialog " + (project ? "project-dialog" : "")}
      aria-labelledby="dialog-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            onClose();
        }
      }}
    >
      <header className="dialog-header">
        <div className="dialog-heading">
          {project && <Item id={sprite[project.id]} />}
          <h2 id="dialog-title">{title}</h2>
        </div>
        <button
          className="dialog-close"
          aria-label="Back to exploring"
          onClick={onClose}
        >
          ×
        </button>
      </header>
      {project && <ProjectCard key={id} project={project} />}{" "}
      {(id === "about" || id === "secret") && (
        <Conversation
          key={id}
          id={id}
          onClose={onClose}
          onSelect={onSelect}
          onBlip={onBlip}
        />
      )}{" "}
      {id === "skills" && <Inventory onSelect={onSelect} />}{" "}
      {id === "experience" && <ChapterBook />}{" "}
      {id === "contact" && (
        <div className="mailbox-content">
          <p>
            I’m open to full-stack and backend engineering roles.
            <br />
            Tell me what you’re working on.
          </p>
          <Link primary href={"mailto:" + profile.email}>
            Write an email
          </Link>
          <p className="mail-address">{profile.email}</p>
          <div className="real-links">
            <Link href={profile.github}>GitHub</Link>
            <Link href={profile.linkedin}>LinkedIn</Link>
            <Link href={profile.resume}>Résumé</Link>
          </div>
        </div>
      )}{" "}
      {id === "resume" && (
        <div className="scroll-content">
          <Item id="0089" />
          <p>
            Skills, projects, education.
            <br />
            The useful details, all in one place.
          </p>
          <Link primary href={profile.resume} download>
            Download résumé PDF
          </Link>
        </div>
      )}{" "}
      {id === "journal" && (
        <div className="journal-pages">
          {projects.map((p) => (
            <button key={p.id} onClick={() => onSelect(p.id)}>
              <Item id={sprite[p.id]} />
              <div>
                <span className="micro">
                  {visited?.includes(p.id) ? "DISCOVERED" : "UNEXPLORED"}
                </span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
              </div>
              <span>→</span>
            </button>
          ))}
        </div>
      )}
    </dialog>
  );
}
