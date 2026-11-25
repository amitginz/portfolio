"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { nowHe } from "@/data/he";

const items = [
  {
    emoji: "🎓",
    heading: "Graduated",
    body: "Completed my B.Sc. in Computer Science at Tel-Hai Academic College (CS Excellence Program, top 5%, GPA 85) in November 2026.",
  },
  {
    emoji: "🏢",
    heading: "Working",
    body: "Employed at Wix — one of Israel's flagship tech companies — building operational reliability and staying embedded in a world-class engineering culture.",
  },
  {
    emoji: "🤖",
    heading: "Building",
    body: "AgentProbe, a regression-testing tool for LLM agents (paired statistical comparison, Redis job queue, OpenTelemetry, GitHub Action), plus LLM-backed tooling.",
  },
  {
    emoji: "📚",
    heading: "Learning",
    body: "Going deep on distributed systems, async I/O internals, and prompt engineering. Reading: Designing Data-Intensive Applications.",
  },
  {
    emoji: "🪖",
    heading: "Serving",
    body: "Fulfilling IDF Reserve duties as a Combat Commander in Brigade 188. Leadership and high-pressure decision-making remain a constant in my life.",
  },
  {
    emoji: "🤝",
    heading: "Volunteering",
    body: "Mentoring youth with physical disabilities at Beit Galgalim — a weekly commitment that keeps me grounded.",
  },
  {
    emoji: "🌍",
    heading: "Open to",
    body: "Junior roles in backend, full-stack, or test automation, in the center of Israel. Especially interested in companies building things that matter.",
  },
];

export default function NowContent() {
  const { lang } = useLanguage();
  const he = lang === "he";
  const list = he ? nowHe.items : items;
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10"
        >
          {he ? nowHe.back : "← Back home"}
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{he ? nowHe.title : "Now"}</h1>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-4" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">
          {he ? nowHe.intro : "A snapshot of what I'm focused on right now."}{" "}
          <span className="font-mono">{he ? nowHe.updated : "Updated: November 2026"}</span>
        </p>

        <div className="space-y-8">
          {list.map((item) => (
            <div key={item.heading} className="flex gap-4">
              <span className="text-2xl mt-0.5 shrink-0">{item.emoji}</span>
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-white mb-1">{item.heading}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {!he && (
          <p className="mt-16 text-xs text-gray-400 dark:text-gray-600 border-t border-gray-100 dark:border-gray-800 pt-6">
            Inspired by Derek Sivers&apos;{" "}
            <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">
              /now page movement
            </a>
            .
          </p>
        )}
      </div>
    </main>
  );
}
