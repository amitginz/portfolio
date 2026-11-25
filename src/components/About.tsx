"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{a.title}</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 text-gray-600 dark:text-gray-400 leading-relaxed">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <p>{a.bio1}</p>
              <p>{a.bio2}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-3">
              {([
                [a.name,       "Amit Ginzberg"],
                [a.degree,     a.degreeValue],
                [a.university, "Tel-Hai University, Kiryat Shmona"],
                [a.focus,      a.focusValue],
                [a.email,      "amitginz@gmail.com"],
                [a.status,     a.statusValue],
              ] as [string, string][]).map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm w-24 shrink-0 pt-0.5">
                    {label}:
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
