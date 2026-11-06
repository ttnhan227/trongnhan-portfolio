export const projects = [
  {
    id: "groundwork",
    title: "Groundwork",
    kind: "Windows Desktop / Storage & System Diagnostics",
    icon: 29,
    color: "#b9ce91",
    summary: "Know where every gigabyte goes.",
    description:
      "A native Windows desktop app built in WinUI 3 and .NET 10 to scan local drives, inspect hardware diagnostics, safely clean up storage via the Recycle Bin, and ask a multi-provider AI assistant about your system.",
    role: "Software engineer",
    stack: ["WinUI 3", "C#", ".NET 10", "Win32 API", "WMI"],
    features: [
      "Scan local drives to visualize folder space usage, 100% proportional space breakdown, and largest files.",
      "Inspect live CPU, GPU, memory SPD modules, motherboard topology, and WHQL drivers via WMI.",
      "Storage Sense recommendations and leftover application uninstaller with Recycle Bin safety guarantees.",
      "Smart file organizer with non-destructive pre-execution preview plans and one-click safe restore.",
      "Optional multi-provider AI assistant (Ollama, LM Studio, Gemini, OpenAI, Claude, Mistral) for disk and system questions.",
    ],
    note: "Local scanning and hardware diagnostics work 100% offline. The AI Agent is optional and supports both offline local models and cloud APIs.",
    repo: "https://github.com/ttnhan227/Groundwork",
    live: "https://groundwork-client.onrender.com/",
    images: [
      {
        image: "/styles/projects/groundwork/groundwork-in-action.gif",
        title: "Groundwork in Action",
        caption:
          "Native WinUI 3 desktop utility in action: storage space maps, Storage Sense cleanup, and hardware diagnostics.",
      },
      {
        image: "/styles/projects/groundwork/fresh/workspace.png",
        title: "Storage Analyzer",
        caption:
          "Proportional folder breakdown bar, hierarchical tree explorer, and multi-threaded traversal metrics.",
      },
      {
        image: "/styles/projects/groundwork/groundwork-hardware.png",
        title: "Hardware Diagnostics",
        caption:
          "Live CPU topology, dual GPU metrics, RAM SPD timings, motherboard firmware, and signed drivers.",
      },
      {
        image: "/styles/projects/groundwork/groundwork-cleanup.png",
        title: "Storage Sense Cleanup",
        caption:
          "Dynamic reclaimable space calculation, expandable file accordions, and Recycle Bin safety protections.",
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
      "An OpenAPI specification becomes executable checks and a self-contained failure report. Deterministic testing comes first; optional AI root-cause analysis supports Gemini, OpenAI, Mistral, Anthropic, and local Ollama.",
    role: "Creator & maintainer",
    stack: ["Python 3.12+", "FastAPI", "HTTPX", "Playwright", "PyPI"],
    features: [
      "Generate happy-path, boundary, validation, and authentication cases from OpenAPI schemas and web crawls.",
      "Run HTTP API and Playwright browser checks concurrently with standalone HTML and JSON reports.",
      "Optional multi-provider AI error analysis (Gemini, OpenAI, Mistral, Anthropic, Ollama) to summarize failures and suggest fixes.",
    ],
    note: "Published on PyPI (`pip install recon-qa`). Try the included demo without an API key.",
    repo: "https://github.com/ttnhan227/recon",
    live: "https://pypi.org/project/recon-qa/",
    liveLabel: "View package",
    command: "pip install recon-qa",
    images: [
      {
        image: "/styles/projects/recon/fresh/terminal.png",
        title: "Recon CLI test run",
        caption:
          "Actual terminal output from a local demo: 35 checks and two detected defects.",
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
    role: "Software engineer",
    stack: ["ASP.NET Core", "C#", "React", "Flutter", "PostgreSQL"],
    features: [
      "Manage sales, inventory, expenses, and customer/supplier balances from a bilingual web and Android workspace.",
      "Use a configurable multi-provider AI assistant (Gemini, OpenAI, Mistral, Ollama, or custom OpenAI-compatible APIs) to search records and draft actions with manual confirmation.",
      "Enforce transactional consistency with EF Core and PostgreSQL locks to prevent race conditions during payment updates and balance calculations.",
    ],
    note: "English and Vietnamese interfaces, VND currency, and a configurable multi-provider AI business assistant.",
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
    role: "Academic team project (4 members) · Backend & Auth",
    stack: [
      "Java 21",
      "Spring Boot",
      "React",
      "Flutter",
      "PostgreSQL",
      "WebSockets",
    ],
    features: [
      "Built Spring Security authentication and backend APIs in a 4-member academic team.",
      "Built dispatch workflows checking cargo weight against vehicle capacity, streaming live truck locations to Leaflet maps over WebSockets.",
      "Automated driver license text extraction using Mistral OCR API, backed by over 60 JUnit unit and integration tests.",
    ],
    note: "Academic team project with sample operational data, sandbox payments, and Mistral OCR driver license extraction.",
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
