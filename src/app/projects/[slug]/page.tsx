import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Amit Ginzberg`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen px-6 pt-28 pb-24">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10"
        >
          ← All projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-3xl mb-3">{project.emoji}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-full text-xs text-indigo-700 dark:text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.longDetail}</p>
        </section>

        {/* Highlights */}
        <section className="mb-10">
          <h2 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">Highlights</h2>
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* Stack */}
        <section className="mb-14">
          <h2 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">Tech Stack</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.stack.map((s) => (
              <div key={s.label} className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{s.label}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="px-2 py-0.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded text-xs text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other projects */}
        {others.length > 0 && (
          <section>
            <h2 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">Other Projects</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                >
                  <span className="text-xl shrink-0">{p.emoji}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white leading-tight">{p.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
