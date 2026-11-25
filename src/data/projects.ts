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
    title: "Gadash: Field-Work Management Bot",
    emoji: "🤖",
    description:
      "Hebrew Telegram bot and web dashboard for managing an agricultural contractor's field work (course project in a pair).",
    detail:
      "Field workers log jobs through a guided Telegram conversation or a voice note parsed by Gemini. Managers search, edit and export the data in a Flask dashboard, stored in Google Sheets.",
    longDetail:
      "Gadash is a field-work management system for an agricultural contractor, built with Hadar Keller as a course project. Workers enter jobs through a guided Hebrew Telegram bot, a web form, or a voice note that the Gemini API turns into job fields. The Flask dashboard offers search and inline editing, Excel and CSV import and export, reports and charts, a field map and an AI-written summary. The bot sends a scheduled morning summary and an evening reminder. Data is stored in Google Sheets with retries on connection errors. The app has CSRF protection, rate limiting, hashed passwords and an audit log, with pytest tests running in GitHub Actions and a deployment on Fly.io.",
    tags: ["Python", "Flask", "Telegram Bot", "Gemini API"],
    github: "https://github.com/amitginz/gadash_bot",
    highlights: [
      "Guided Telegram bot and voice-note job entry",
      "Manager dashboard with import, export and reports",
      "Scheduled daily summary and reminder",
      "90+ pytest tests in GitHub Actions",
    ],
    stack: [
      { label: "Language", items: ["Python"] },
      { label: "Framework", items: ["Flask"] },
      { label: "Integrations", items: ["Telegram Bot API", "Gemini API", "Google Sheets"] },
      { label: "Deployment", items: ["Fly.io", "GitHub Actions"] },
    ],
  },
  {
    slug: "music-streaming",
    title: "MusicTube: Music Library & Playlists",
    emoji: "🎵",
    description:
      "Full-stack web app to search songs on YouTube, manage personal playlists and upload MP3 files.",
    detail:
      "A React and TypeScript client on top of an Express REST API with MongoDB: sign-up and login, YouTube search, playlists and MP3 upload to Cloudinary.",
    longDetail:
      "MusicTube is a full-stack music library application. Users register and log in with JWT authentication, search songs through the YouTube Data API, organise them into personal playlists and upload their own MP3 files, which are stored in Cloudinary. One player handles both YouTube videos and uploaded audio. The client is written in React and TypeScript with Zustand, React Query and Tailwind CSS. The server is Express with TypeScript and MongoDB, with request validation, security headers and rate limiting. The client is deployed on Vercel.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/amitginz/MusicLibrary-project",
    highlights: [
      "JWT authentication with hashed passwords",
      "YouTube search and personal playlists",
      "MP3 upload to Cloudinary and a unified player",
      "Request validation, security headers and rate limiting",
    ],
    stack: [
      { label: "Front end", items: ["React", "TypeScript", "Tailwind CSS"] },
      { label: "Back end", items: ["Node.js", "Express", "TypeScript"] },
      { label: "Data", items: ["MongoDB", "Cloudinary"] },
      { label: "Deployment", items: ["Vercel (client)"] },
    ],
  },
  {
    slug: "mygame",
    title: "Android Puzzle-Strategy Game",
    emoji: "🎮",
    description:
      "Android math puzzle where players select tiles that add up to a target number (team project).",
    detail:
      "Players drag a rectangle over tiles that sum to the target, against a countdown timer. Scores are saved to a Firebase leaderboard, which was the part I mainly worked on.",
    longDetail:
      "MyGame is an Android puzzle game written in Java as a team project. The player drags a selection rectangle over numbered tiles whose sum equals the target (10 by default) before the countdown ends, with pause and restart. Boards are filled from predefined patterns. Scores are stored in Firebase, with a leaderboard that can be searched by player name and lets players edit or delete their entry. My main contribution was saving scores and the leaderboard.",
    tags: ["Java", "Android SDK", "Firebase"],
    github: "https://github.com/Hkuser18/MyGame",
    highlights: [
      "Touch selection with real-time sum checking",
      "Countdown timer with pause and restart",
      "Firebase leaderboard with search, edit and delete",
      "Team project",
    ],
    stack: [
      { label: "Language", items: ["Java"] },
      { label: "Platform", items: ["Android SDK"] },
      { label: "Data", items: ["Firebase Firestore", "Firebase Auth"] },
      { label: "UI", items: ["Custom View", "Material components"] },
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
