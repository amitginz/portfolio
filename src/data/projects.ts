export type Project = {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  detail: string;
  longDetail: string;
  tags: string[];
  github: string;
  highlights: string[];
  stack: { label: string; items: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "agentprobe",
    title: "AgentProbe: Regression Testing for LLM Agents",
    emoji: "🧪",
    description:
      "Checks whether an LLM agent got worse after a change: records agent runs and flags real regressions with a statistical test.",
    detail:
      "Runs an agent against a dataset, records a full trace of every task, and compares two runs with a paired exact McNemar test, so one flaky task does not count as a regression. Exits with a non-zero code on regression, so a pull request that degrades the agent fails CI.",
    longDetail:
      "AgentProbe answers the question that matters before shipping a prompt or model change: did the agent get better, worse, or is it just noise? Because both runs answer the same tasks, the outcomes are paired and an exact McNemar test is applied to the tasks that flipped. The project includes a thread-pool runner with retries and a hard cost budget, deterministic and LLM-as-judge evaluators with calibration, a FastAPI service with a web dashboard, a Redis job queue with leases and heartbeats for crash recovery, OpenTelemetry traces, Alembic migrations and a reusable GitHub Action.",
    tags: ["Python", "FastAPI", "Redis", "OpenTelemetry", "GitHub Actions"],
    github: "https://github.com/amitginz/agentprobe",
    highlights: [
      "Paired exact McNemar test to separate regressions from noise",
      "Redis job queue that survives crashes (leases, heartbeats)",
      "OpenTelemetry tracing across API, queue and workers",
      "GitHub Action that fails a pull request when quality drops",
    ],
    stack: [
      { label: "Language", items: ["Python"] },
      { label: "Services", items: ["FastAPI", "Redis", "SQLAlchemy / PostgreSQL"] },
      { label: "Observability", items: ["OpenTelemetry"] },
      { label: "CI/CD", items: ["GitHub Actions", "Docker"] },
    ],
  },
  {
    slug: "exam-system",
    title: "Online Exam Management System",
    emoji: "📝",
    description:
      "React web app for running exams, with user roles and exam submissions (team project).",
    detail:
      "A full-stack team project: a React front end on top of Node.js/Express REST APIs and a relational database. I built the REST APIs and the database schema.",
    longDetail:
      "A full-stack web application for managing and running exams, built as a team project in the Full-Stack Software Project course (grade 98). The React front end supports different user roles and exam submissions, and talks to Node.js/Express REST APIs backed by a database. My part was the REST API layer and the database schema.",
    tags: ["React", "Node.js", "Express", "REST APIs", "SQL"],
    github: "https://github.com/Hkuser18/FullStack_React",
    highlights: [
      "React front end with user roles and exam submissions",
      "Node.js/Express REST APIs, built by me",
      "Relational database schema designed by me",
      "Team project, Git and pull-request workflow",
    ],
    stack: [
      { label: "Front end", items: ["React", "JavaScript"] },
      { label: "Back end", items: ["Node.js", "Express"] },
      { label: "Data", items: ["SQL database"] },
    ],
  },
  {
    slug: "gadash",
    title: "Gadash: Intelligent Operational Agent",
    emoji: "🤖",
    description:
      "Engineered an Autonomous Agent to manage agricultural activities for 30+ users using NLP-based Telegram interactions.",
    detail:
      "Built with Python, Flask, and API orchestration. The agent interprets natural language messages via Telegram and dispatches commands to manage farm operations autonomously. Handles scheduling, status reporting, and multi-user session management.",
    longDetail:
      "Gadash is a fully autonomous operational agent designed for agricultural management. Users interact with the system via natural language messages on Telegram — no technical knowledge required. The agent parses intent using NLP, maps it to structured commands, and executes them against the farm's backend services. The system manages scheduling for irrigation, harvesting, and maintenance cycles, sends status reports proactively, and maintains session context across 30+ concurrent users. The architecture uses Flask as an API gateway, with async task queues to handle concurrent Telegram webhooks without blocking. Error recovery and retry logic ensure high reliability in rural connectivity conditions.",
    tags: ["Python", "Flask", "NLP", "API Orchestration"],
    github: "https://github.com/amitginz/gadash_bot",
    highlights: [
      "Serves 30+ users with zero manual intervention",
      "Natural language → structured command pipeline",
      "Async webhook handling for concurrent users",
      "Proactive status reporting & scheduling engine",
    ],
    stack: [
      { label: "Language", items: ["Python"] },
      { label: "Framework", items: ["Flask"] },
      { label: "Integrations", items: ["Telegram Bot API", "NLP pipeline"] },
      { label: "Deployment", items: ["Cloud server", "Webhook-based"] },
    ],
  },
  {
    slug: "music-streaming",
    title: "Cloud-Based Music Streaming Platform",
    emoji: "🎵",
    description:
      "Production-ready multimedia service handling high-volume audio data and concurrent streaming using Asynchronous Node.js.",
    detail:
      "Managed the full lifecycle from RESTful API architecture to live deployment on Render. The platform supports concurrent users streaming audio, with async I/O ensuring non-blocking performance under load.",
    longDetail:
      "A production-grade music streaming backend built to handle high concurrency without degrading performance. The core challenge was managing multiple simultaneous audio streams without blocking the event loop — solved through Node.js's non-blocking I/O and careful stream piping. The REST API exposes endpoints for library browsing, track playback, search, and user session management. Audio files are served efficiently using HTTP range requests to support seekable playback. The entire service is deployed on Render with environment-based configuration and health checks for zero-downtime restarts.",
    tags: ["Node.js", "Express", "JavaScript", "REST APIs", "Render"],
    github: "https://github.com/amitginz/MusicLibrary-project",
    highlights: [
      "Concurrent streaming with non-blocking async I/O",
      "HTTP range requests for seekable audio playback",
      "Full RESTful API — browse, search, stream, manage",
      "Live on Render with health checks & auto-restart",
    ],
    stack: [
      { label: "Runtime", items: ["Node.js"] },
      { label: "Framework", items: ["Express.js"] },
      { label: "API", items: ["REST", "HTTP Range Requests"] },
      { label: "Deployment", items: ["Render"] },
    ],
  },
  {
    slug: "mygame",
    title: "Android Puzzle-Strategy Game",
    emoji: "🎮",
    description:
      "Mathematical strategy game for Android where players identify squares and numbers that sum to exactly 10.",
    detail:
      "Implemented a custom validation engine in Java to handle real-time scoring and state management. Designed the game loop, level progression, and UI interactions natively for Android SDK.",
    longDetail:
      "MyGame is a native Android puzzle game built entirely with Java and the Android SDK. The gameplay revolves around a mathematical challenge: players must identify grid squares containing numbers that sum precisely to 10, under time pressure. The custom validation engine processes player selections in real time, computing partial sums and providing immediate visual feedback. The game loop handles level progression, difficulty scaling, and high-score persistence via SharedPreferences. All UI interactions — taps, swipes, animations — are implemented using native Android APIs without third-party UI libraries, resulting in a lightweight and responsive experience.",
    tags: ["Java", "Android SDK", "Mathematical Logic"],
    github: "https://github.com/Hkuser18/MyGame",
    highlights: [
      "Real-time mathematical validation engine",
      "Native Android UI — no third-party dependencies",
      "Level progression with difficulty scaling",
      "High-score persistence via SharedPreferences",
    ],
    stack: [
      { label: "Language", items: ["Java"] },
      { label: "Platform", items: ["Android SDK"] },
      { label: "Storage", items: ["SharedPreferences"] },
      { label: "UI", items: ["Native Android Views"] },
    ],
  },
  {
    slug: "combat-sim",
    title: "Graph Algorithms & Pokémon Game Agents",
    emoji: "⚔️",
    description:
      "Python agents that move on a weighted graph and collect Pokémon in a server-run game (team assignment).",
    detail:
      "Built on a weighted directed graph library with Dijkstra shortest paths, graph center and a simple TSP heuristic. Agents choose targets by shortest path, with a Pygame visualisation and unit tests.",
    longDetail:
      "A two-person university assignment written in Python. The goal of the game is to place agents on a weighted directed graph and collect as many Pokémon as possible within the server's limit on calls per second. The project includes a graph library behind abstract interfaces (JSON load and save, Dijkstra shortest paths, connectivity check, graph center and a simple TSP heuristic), a client that talks to the game server, target selection for each agent by shortest path, a Pygame view of the live game, and unit tests for the graph, the algorithms and the game entities.",
    tags: ["Python", "Graph Algorithms", "OOP", "Pygame"],
    github: "https://github.com/amitginz/Ex4_oop",
    highlights: [
      "Weighted directed graph behind abstract interfaces",
      "Dijkstra shortest paths, graph center and TSP heuristic",
      "Target selection per agent by shortest path",
      "Pygame visualisation and unit tests",
    ],
    stack: [
      { label: "Language", items: ["Python"] },
      { label: "Libraries", items: ["Pygame", "unittest"] },
      { label: "Concepts", items: ["Graphs", "Dijkstra", "Object-oriented design"] },
    ],
  },
];
