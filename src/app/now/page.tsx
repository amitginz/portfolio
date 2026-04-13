import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now — Amit Ginzberg",
  description: "What Amit Ginzberg is currently working on.",
};

const items = [
  {
    emoji: "🎓",
    heading: "Studying",
    body: "Finishing my B.Sc. in Computer Science at Tel-Hai University. Currently deep in Operating Systems, Algorithms, and Networks coursework.",
  },
  {
    emoji: "🏢",
    heading: "Working",
    body: "Employed at Wix — one of Israel's flagship tech companies — building operational reliability and staying embedded in a world-class engineering culture.",
  },
  {
    emoji: "🤖",
    heading: "Building",
    body: "Iterating on AI-agent architectures. Exploring autonomous workflow orchestration, multi-agent coordination patterns, and LLM-backed tooling.",
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
    body: "Full-time and internship opportunities in backend engineering, AI infrastructure, or product engineering. Especially interested in companies building things that matter.",
  },
];

export default function NowPage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10"
        >
          ← Back home
        </Link>

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Now</h1>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-4" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">
          A snapshot of what I&apos;m focused on right now.{" "}
          <span className="font-mono">Updated: April 2026</span>
        </p>

        {/* Items */}
        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.heading} className="flex gap-4">
              <span className="text-2xl mt-0.5 shrink-0">{item.emoji}</span>
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-white mb-1">{item.heading}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-16 text-xs text-gray-400 dark:text-gray-600 border-t border-gray-100 dark:border-gray-800 pt-6">
          Inspired by Derek Sivers&apos;{" "}
          <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">
            /now page movement
          </a>
          .
        </p>
      </div>
    </main>
  );
}
