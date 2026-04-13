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
    title: "OOP Simulation Engine for Strategic Combat",
    emoji: "⚔️",
    description:
      "Pokémon-themed simulation engine modelling complex turn-based combat and dynamic character state management.",
    detail:
      "Utilized advanced OOP (Polymorphism, Inheritance) to create a decoupled framework capable of managing hundreds of unique entity variants. Focused on high-performance algorithms to keep the engine modular and scalable.",
    longDetail:
      "A Pokémon-inspired turn-based combat simulation engine written in Python using advanced object-oriented principles. The engine models entities (trainers, Pokémon, moves, status effects) through deep class hierarchies, with Polymorphism driving the combat resolution logic — each entity variant overrides base behaviors without breaking the shared contract. The battle loop processes hundreds of unique entity types through a single unified interface. Design patterns (Strategy, Observer, Factory) keep the codebase decoupled: adding a new Pokémon or move type requires zero changes to the engine core. Performance profiling guided optimizations to the damage calculation and state-transition algorithms.",
    tags: ["Python", "OOP", "Design Patterns", "Algorithms"],
    github: "https://github.com/amitginz/Ex4_oop",
    highlights: [
      "Deep OOP hierarchy with Polymorphism & Inheritance",
      "Strategy, Observer & Factory design patterns",
      "Hundreds of unique entity variants, one engine core",
      "Profiling-guided performance optimization",
    ],
    stack: [
      { label: "Language", items: ["Python"] },
      { label: "Patterns", items: ["Strategy", "Observer", "Factory"] },
      { label: "Concepts", items: ["Polymorphism", "Inheritance", "Encapsulation"] },
    ],
  },
];
