import FadeIn from "@/components/FadeIn";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C/C++", "JavaScript", "SQL"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express", "Flask", "REST APIs", "Async IO"],
  },
  {
    category: "Mobile & Frontend",
    skills: ["Android SDK", "Java (Android)", "HTML/CSS"],
  },
  {
    category: "Tools & Infrastructure",
    skills: ["Git", "Docker", "OOP", "Design Patterns", "NLP", "Render"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Skills</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.1}>
              <h3 className="text-indigo-600 dark:text-indigo-400 font-mono text-sm uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
