import { ArrowUpRight } from './Icons'
import RpgIcon from './RpgIcon'
import { otherBuilds } from '../data/builds'

const buildIcons = [14, 10, 6]

export default function BuildsArchive() {
  return (
    <section className="builds-section" id="builds" aria-labelledby="builds-heading">
      <div className="hud-content-container">
        {/* Section Header */}
        <div className="section-title-bar pixel-box-sm">
          <div className="title-bar-left">
            <RpgIcon id={10} size={22} alt="Bounty Board" />
            <span className="section-index-tag">05 // BOUNTY BOARD</span>
            <h2 className="section-title" id="builds-heading">
              Guild Bounty Board: Side Quests & Builds
            </h2>
          </div>
        </div>

        {/* Side Quest Grid */}
        <div className="side-quests-grid">
          {otherBuilds.map((build, bIdx) => (
            <article className="side-quest-card pixel-box" key={build.id}>
              <div className="quest-top-meta">
                <div className="quest-code-wrap">
                  <RpgIcon id={buildIcons[bIdx] || 10} size={18} alt="" />
                  <span className="quest-code-badge">{build.questCode}</span>
                </div>
                <span className="quest-year-tag">{build.date}</span>
              </div>

              <h3 className="quest-name">{build.title}</h3>
              <span className="quest-sub-category">{build.category}</span>

              <p className="quest-narrative">{build.description}</p>

              <div className="quest-tech-strip">
                {build.stack.map((item) => (
                  <span className="pixel-tech-tag-sm" key={item}>{item}</span>
                ))}
              </div>

              <a
                className="quest-action-link pixel-btn-action repo-btn"
                href={build.repoHref}
                target="_blank"
                rel="noreferrer"
              >
                <RpgIcon id={1} size={14} alt="" />
                <span>📜 VIEW REPO</span>
                <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
