"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 87 },
      { name: "Java", level: 82 },
      { name: "JavaScript", level: 78 },
      { name: "SQL", level: 65 },
      { name: "C/C++", level: 55 },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "REST APIs", level: 85 },
      { name: "Node.js", level: 83 },
      { name: "Express", level: 76 },
      { name: "Flask", level: 73 },
      { name: "Async IO", level: 72 },
    ],
  },
  {
    category: "Mobile & Frontend",
    skills: [
      { name: "Android SDK", level: 74 },
      { name: "Java (Android)", level: 74 },
      { name: "HTML/CSS", level: 65 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      { name: "OOP", level: 90 },
      { name: "Git", level: 86 },
      { name: "Design Patterns", level: 80 },
      { name: "NLP", level: 68 },
      { name: "Docker", level: 60 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-700 dark:text-gray-300">{name}</span>
        <motion.span
          className="text-xs font-mono text-indigo-500 dark:text-indigo-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: delay + 0.4, duration: 0.4 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{
            duration: 1.1,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Skills</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-10">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.08}>
              <h3 className="text-indigo-600 dark:text-indigo-400 font-mono text-sm uppercase tracking-widest mb-5">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.08 + si * 0.07}
                  />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
