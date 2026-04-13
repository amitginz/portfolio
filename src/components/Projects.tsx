"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import TiltCard from "@/components/TiltCard";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const { t } = useLanguage();

  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.projects.title}</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-8" />
        </FadeIn>

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
                <TiltCard className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" aria-hidden="true">{p.emoji}</span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <Link
                          href={`/projects/${p.slug}`}
                          className="text-xs text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium"
                        >
                          {t.projects.caseStudy}
                        </Link>
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                        >
                          GitHub ↗
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{p.description}</p>

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
                        {isOpen ? t.projects.seeLess : t.projects.seeMore}
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
