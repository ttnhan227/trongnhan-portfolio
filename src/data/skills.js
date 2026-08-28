import {
  siCelery, siDocker, siDotnet, siFastapi, siFlutter, siGithubactions,
  siJunit5, siJavascript, siMinio, siMongodb, siMysql, siOpenapiinitiative,
  siOpenjdk, siPostgresql, siPytest, siPython, siReact, siRedis, siSharp,
  siSpringboot, siSqlalchemy, siTestinglibrary, siTypescript, siVite,
} from 'simple-icons'

export const tacticalLoadout = [
  {
    category: 'WEAPONRY // BACKEND ENGINES',
    slot: '🗡️ MAIN-HAND WEAPONS',
    summary: 'High-damage backend frameworks, distributed asynchronous queues, strict type contracts, and AST verification.',
    skills: [
      { name: 'Python', role: 'Async pipelines & AI tools', icon: siPython },
      { name: 'FastAPI', role: 'Async REST & OpenAPI 3.x', icon: siFastapi },
      { name: 'SQLAlchemy', role: 'ORM & query optimization', icon: siSqlalchemy },
      { name: 'C#', role: 'Object-oriented engine', icon: siSharp },
      { name: 'ASP.NET Core', role: 'Enterprise microservices', icon: siDotnet },
      { name: 'EF Core', role: 'Scoped tenant queries', icon: siDotnet },
      { name: 'Java', role: 'Enterprise architecture', icon: siOpenjdk },
      { name: 'Spring Boot', role: 'State machines & STOMP', icon: siSpringboot },
      { name: 'REST APIs', role: 'Contract-first specs', icon: siOpenapiinitiative },
    ],
  },
  {
    category: 'ARMOR & DATA // STORAGE VAULT',
    slot: '🛡️ DEFENSE & DATA CORE',
    summary: 'Vector embeddings with HNSW indexing, transactional ACID stores, and in-memory broker caching.',
    skills: [
      { name: 'PostgreSQL', role: 'Primary relational DB', icon: siPostgresql },
      { name: 'pgvector', role: 'Cosine / HNSW search', icon: siPostgresql },
      { name: 'Redis', role: 'Task broker & caching', icon: siRedis },
      { name: 'MinIO (S3)', role: 'Object storage layer', icon: siMinio },
      { name: 'MySQL', role: 'Relational storage', icon: siMysql },
      { name: 'MongoDB', role: 'Document collections', icon: siMongodb },
    ],
  },
  {
    category: 'ARCANE INTERFACE // CLIENTS & HUD',
    slot: '✨ SPELLBOOKS & HUD',
    summary: 'Responsive client state management, interactive GIS corridor maps, and cross-platform mobile apps.',
    skills: [
      { name: 'React', role: 'Component architectures', icon: siReact },
      { name: 'TypeScript', role: 'Strict typed interfaces', icon: siTypescript },
      { name: 'JavaScript', role: 'Modern ESNext runtime', icon: siJavascript },
      { name: 'Vite', role: 'High-speed build engine', icon: siVite },
      { name: 'Flutter', role: 'Cross-platform mobile', icon: siFlutter },
    ],
  },
  {
    category: 'ALCHEMY // DEVOPS & RUNTIME RUNES',
    slot: '🧪 POTIONS & RUNES',
    summary: 'Automated CI/CD workflows, multi-framework testing suites, and real-time streaming protocols.',
    skills: [
      { name: 'Docker', role: 'Containerized runtime', icon: siDocker },
      { name: 'Celery', role: 'Distributed task execution', icon: siCelery },
      { name: 'GitHub Actions', role: 'Automated CI/CD pipelines', icon: siGithubactions },
      { name: 'pytest', role: '100+ backend test suites', icon: siPytest },
      { name: 'xUnit', role: '.NET unit & integration tests', icon: siDotnet },
      { name: 'JUnit 5', role: 'Java enterprise testing', icon: siJunit5 },
      { name: 'Playwright', role: 'End-to-end browser tests', icon: siTestinglibrary },
      { name: 'STOMP / WS', role: 'Live telemetry protocol', icon: siOpenapiinitiative },
    ],
  },
]
