import { tacticalLoadout } from '../data/skills'
import RpgIcon from './RpgIcon'
import { playSfx } from '../utils/audio'

const categoryIconIds = [1, 29, 11, 33]

// Map each skill to an authentic RPG item icon from the assets folder
const skillIconMap = {
  Python: 4,
  FastAPI: 1,
  SQLAlchemy: 3,
  'C#': 2,
  'ASP.NET Core': 5,
  'EF Core': 7,
  Java: 8,
  'Spring Boot': 6,
  'REST APIs': 10,
  PostgreSQL: 29,
  pgvector: 30,
  Redis: 31,
  'MinIO (S3)': 32,
  MySQL: 14,
  MongoDB: 17,
  React: 11,
  TypeScript: 12,
  JavaScript: 15,
  Vite: 16,
  Flutter: 18,
  Docker: 33,
  Celery: 34,
  'GitHub Actions': 35,
  pytest: 36,
  xUnit: 37,
  'JUnit 5': 21,
  Playwright: 22,
  'STOMP / WS': 23,
}

export default function LoadoutSection() {
  return (
    <section className="loadout-section" id="loadout" aria-labelledby="loadout-heading">
      <div className="hud-content-container">
        {/* Section Header */}
        <div className="section-title-bar rpg-panel-sm">
          <div className="title-bar-left">
            <RpgIcon id={29} size={22} alt="Armory" />
            <span className="section-index-tag">04 // ARMORY</span>
            <h2 className="section-title" id="loadout-heading">
              Technical Armory & Inventory Loadout
            </h2>
          </div>
        </div>

        {/* 4 Inventory Slots Grid */}
        <div className="inventory-slots-grid" id="stack">
          {tacticalLoadout.map((category, catIdx) => (
            <div className="inventory-slot-card rpg-panel" key={category.category}>
              <div className="slot-card-header rpg-panel-header">
                <div className="slot-header-top">
                  <RpgIcon
                    id={categoryIconIds[catIdx] || 1}
                    size={26}
                    alt={category.slot}
                    className="rpg-slot-icon-img"
                  />
                  <div className="slot-badge-wrap">
                    <span className="slot-badge-text">{category.slot}</span>
                  </div>
                </div>
                <h3 className="slot-category-title">{category.category}</h3>
              </div>

              <p className="slot-summary-text">{category.summary}</p>

              <div className="slot-items-grid">
                {category.skills.map((skill) => {
                  const iconId = skillIconMap[skill.name] || 1
                  return (
                    <div
                      className="inventory-item-card rpg-slot"
                      key={skill.name}
                      onMouseEnter={() => playSfx('cursor')}
                      onClick={() => playSfx('equip')}
                    >
                      <div className="item-icon-box">
                        <RpgIcon id={iconId} size={20} alt={skill.name} />
                      </div>
                      <div className="item-details">
                        <strong className="item-name">{skill.name}</strong>
                        <span className="item-role">{skill.role}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
