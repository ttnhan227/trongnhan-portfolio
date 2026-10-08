export const projects = [
  {
    id: "groundwork",
    title: "Groundwork",
    kind: "Desktop / Personal file workspace",
    icon: 29,
    color: "#b9ce91",
    summary: "Your files. Finally within reach.",
    description:
      "A Windows app for anyone whose work is scattered across folders. Find documents, browse and preview files, group related material into collections, and ask questions using your own files—all from one local workspace.",
    role: "Full-stack & backend engineer",
    stack: ["Tauri 2", "React", "Python", "FastAPI", "SQLite"],
    features: [
      "Browse documents, images, PDFs, and other files with search, previews, and storage details.",
      "Create virtual collections and keep notes without moving or changing the original files.",
      "Ask, summarize, compare, and organize selected files, with source references and confirmation before changes.",
    ],
    note: "Local search works offline. The Assistant can retrieve passages without a model; generated answers use a configured built-in, local, or online model.",
    repo: "https://github.com/ttnhan227/Groundwork",
    live: "https://groundwork-client.onrender.com/",
    images: [
      {
        image: "/styles/projects/groundwork/fresh/workspace.png",
        title: "Your everyday workspace",
        caption:
          "Fresh capture of the current app, running with the local engine and sample personal files.",
      },
    ],
    downloads: [
      {
        label: "Windows app",
        href: "https://github.com/ttnhan227/Groundwork/releases/tag/v1.0.0",
      },
    ],
  },
  {
    id: "recon-qa",
    title: "Recon QA",
    kind: "Python package / API testing",
    icon: 16,
    color: "#aebbea",
    summary: "From API schema to answers.",
    description:
      "An OpenAPI specification becomes executable checks and a self-contained failure report. Deterministic testing comes first; AI generation and root-cause analysis are optional.",
    role: "Creator & core maintainer",
    stack: ["Python 3.12+", "OpenAPI", "HTTPX", "Playwright", "PyPI"],
    features: [
      "Generate happy-path, boundary, validation, and authentication cases from schemas.",
      "Run dependent operations with reusable response IDs and bounded concurrency.",
      "Inspect assertions, responses, and failure classifications in HTML and JSON reports.",
    ],
    note: "Local implementation: v0.2.1. Try the included defective demo without an API key.",
    repo: "https://github.com/ttnhan227/recon",
    live: "https://pypi.org/project/recon-qa/",
    liveLabel: "View package",
    command: "pip install recon-qa",
    images: [
      {
        image: "/styles/projects/recon/fresh/terminal.png",
        title: "Recon CLI test run",
        caption:
          "Actual terminal output from a new local demo: 35 checks and two detected defects.",
      },
    ],
  },
  {
    id: "tenvora",
    title: "Tenvora",
    kind: "Web + mobile / Business tools",
    icon: 13,
    color: "#e5bb7e",
    summary: "A better ledger for local businesses.",
    description:
      "Sales, customer debts, supplier payments, and receipts in one bilingual workspace. A React web app and Flutter companion replace scattered notebooks with a consistent business record.",
    role: "Full-stack & backend engineer",
    stack: [".NET 10", "C#", "React", "Flutter", "PostgreSQL"],
    features: [
      "Manage sales, inventory, expenses, and customer/supplier balances from a bilingual web and Android workspace.",
      "Use an optional Gemini assistant to ask about business records and review proposed actions before confirmation.",
      "Protect writes with JWT-scoped queries, atomic transactions, PostgreSQL advisory locks, idempotency records, and before/after audit snapshots.",
    ],
    note: "English and Vietnamese interfaces, VND currency, and an optional guarded AI business assistant.",
    repo: "https://github.com/ttnhan227/Tenvora",
    live: "https://tenvora-client.onrender.com/",
    images: [
      {
        image: "/styles/projects/tenvora/fresh/sales.png",
        title: "Sales notebook",
        caption: "Record sales and payments in one business ledger.",
      },
      {
          image: "/styles/projects/tenvora/fresh/mobile.png",
          title: "Mobile sales ledger",
          format: "phone",
          caption: "The Flutter companion: invoices, payments and outstanding balances.",
      },
    ],
    downloads: [
      {
        label: "Android release",
        href: "https://github.com/ttnhan227/Tenvora/releases/tag/mobile-latest",
      },
    ],
  },
  {
    id: "logiflow",
    title: "LogiFlow",
    kind: "Web + mobile / Logistics",
    icon: 1,
    color: "#93c7c4",
    summary: "Keep the whole delivery in view.",
    description:
      "An academic freight-management application connecting dispatchers, drivers, and customers. Trip workflows, live location updates, and proof of delivery span a React console and Flutter driver app.",
    role: "Team lead & backend engineer",
    stack: [
      "Java 21",
      "Spring Boot",
      "React",
      "Flutter",
      "PostgreSQL",
      "STOMP",
    ],
    features: [
      "Coordinate role-based dispatch and trip-state transitions.",
      "Stream trip-scoped driver locations over WebSockets to Leaflet maps.",
      "Capture delivery signatures and photos, generate invoices, and demonstrate PayPal sandbox checkout.",
    ],
    note: "Academic project with sample operational data, sandbox payments, and OCR fields reviewed by a person.",
    repo: "https://github.com/ttnhan227/logiflow",
    live: "https://logiflow-client.onrender.com/",
    images: [
      {
        image: "/styles/projects/logiflow/fresh/map.png",
        title: "Trip map and delivery workflow",
        caption:
          "Fresh capture of the current dispatcher trip view, with the actual local API and sample shipment data.",
      },
    ],
  },
];
