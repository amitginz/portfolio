"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "Gadash: Intelligent Operational Agent",
    description:
      "Engineered an Autonomous Agent to manage agricultural activities for 30+ users using NLP-based Telegram interactions.",
    detail:
      "Built with Python, Flask, and API orchestration. The agent interprets natural language messages via Telegram and dispatches commands to manage farm operations autonomously. Handles scheduling, status reporting, and multi-user session management.",
    tags: ["Python", "Flask", "NLP", "API Orchestration"],
    github: "https://github.com/amitginz/gadash_bot",
  },
  {
    title: "Cloud-Based Music Streaming Platform",
    description:
      "Production-ready multimedia service handling high-volume audio data and concurrent streaming using Asynchronous Node.js.",
    detail:
      "Managed the full lifecycle from RESTful API architecture to live deployment on Render. The platform supports concurrent users streaming audio, with async I/O ensuring non-blocking performance under load.",
    tags: ["Node.js", "Express", "JavaScript", "REST APIs", "Render"],
    github: "https://github.com/amitginz/MusicLibrary-project",
  },
  {
    title: "Android Puzzle-Strategy Game (MyGame)",
    description:
      "Mathematical strategy game for Android where players identify squares and numbers that sum to exactly 10.",
    detail:
      "Implemented a custom validation engine in Java to handle real-time scoring and state management. Designed the game loop, level progression, and UI interactions natively for Android SDK.",
    tags: ["Java", "Android SDK", "Mathematical Logic"],
    github: "https://github.com/Hkuser18/MyGame",
  },
  {
    title: "OOP Simulation Engine for Strategic Combat",
    description:
      "Pokémon-themed simulation engine modelling complex turn-based combat and dynamic character state management.",
    detail:
      "Utilized advanced OOP (Polymorphism, Inheritance) to create a decoupled framework capable of managing hundreds of unique entity variants. Focused on high-performance algorithms to keep the engine modular and scalable.",
    tags: ["Python", "OOP", "Design Patterns", "Algorithms"],
    github: "https://github.com/amitginz/Ex4_oop",
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-8" />
        </FadeIn>

        {/* Tag filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                  activeTag === tag
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-6">
          {filtered.map((p, i) => {
            const isOpen = expanded === p.title;
            return (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-sm shrink-0"
                    >
                      GitHub ↗
                    </a>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{p.description}</p>

                  {/* Expandable detail */}
                  {isOpen && (
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 border-l-2 border-indigo-400 pl-4">
                      {p.detail}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          onClick={() => setActiveTag(tag)}
                          className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded text-xs text-indigo-700 dark:text-indigo-300 cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setExpanded(isOpen ? null : p.title)}
                      className="text-xs text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {isOpen ? "Show less ↑" : "See more ↓"}
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
