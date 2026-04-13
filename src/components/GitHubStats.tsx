"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepo = {
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [langs, setLangs] = useState<{ name: string; count: number }[]>([]);
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const USERNAME = "amitginz";
    Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`).then((r) => r.json()),
    ])
      .then(([userData, repos]: [GitHubUser, GitHubRepo[]]) => {
        setUser(userData);
        const langMap: Record<string, number> = {};
        let totalStars = 0;
        repos.forEach((repo) => {
          if (!repo.fork && repo.language) {
            langMap[repo.language] = (langMap[repo.language] ?? 0) + 1;
          }
          totalStars += repo.stargazers_count;
        });
        setStars(totalStars);
        const sorted = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }));
        setLangs(sorted);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const maxCount = langs[0]?.count ?? 1;

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.github.title}</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </FadeIn>

        {loading ? (
          <div className="grid sm:grid-cols-3 gap-4 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-100 dark:bg-gray-800 rounded-xl" />
            ))}
          </div>
        ) : user ? (
          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: t.github.repos, value: user.public_repos, icon: "📦" },
                { label: t.github.followers, value: user.followers, icon: "👥" },
                { label: "⭐ Stars", value: stars, icon: "⭐" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center"
                >
                  <p className="text-2xl mb-1">{stat.icon}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white font-mono">{stat.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {langs.length > 0 && (
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-mono uppercase tracking-widest mb-5">
                  Top Languages
                </p>
                <div className="space-y-3">
                  {langs.map((lang, i) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                        <span className="text-gray-400 font-mono">{lang.count} repos</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <MotionBar width={(lang.count / maxCount) * 100} delay={i * 0.08} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 text-center">
              <a
                href="https://github.com/amitginz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View full profile on GitHub ↗
              </a>
            </div>
          </FadeIn>
        ) : (
          <p className="text-gray-400 text-sm">Could not load GitHub data.</p>
        )}
      </div>
    </section>
  );
}

// Inline animated bar to avoid importing framer-motion at top level (already in bundle)
function MotionBar({ width, delay }: { width: number; delay: number }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(width), delay * 1000 + 300);
    return () => clearTimeout(t);
  }, [width, delay]);
  return (
    <div
      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
      style={{ width: `${w}%`, transition: "width 0.9s cubic-bezier(0.25,0.46,0.45,0.94)" }}
    />
  );
}
