import FadeIn from "@/components/FadeIn";

const timeline = [
  {
    period: "2024 – 2026",
    title: "B.Sc. Computer Science",
    org: "Tel-Hai University",
    description:
      "Core coursework: Algorithms, Operating Systems, Networks, Databases, Advanced OOP. Specialized in AI Agents, Backend Engineering, and Mobile Development.",
    type: "education",
  },
  {
    period: "2025 – Present",
    title: "Security Guard",
    org: "Wix",
    description:
      "Active internal employee at Wix, demonstrating high reliability and commitment within one of Israel's leading tech companies.",
    type: "work",
  },
  {
    period: "2018 & 2024",
    title: "Woodworking Instructor",
    org: "Jewish Summer Camp, USA",
    description:
      "Managed technical workshops and instruction in a global English-speaking environment. Led hands-on fabrication sessions for international groups.",
    type: "leadership",
  },
  {
    period: "IDF Reserve",
    title: "Combat Commander",
    org: "Brigade 188, IDF",
    description:
      "Awarded Battalion distinction for leadership during Operation Iron Swords. Led teams under high-pressure combat conditions.",
    type: "military",
  },
  {
    period: "2011",
    title: "Youth Madrich",
    org: "Bnei Akiva",
    description:
      "Counselor at a Kibbutz. Focused on educational leadership and social group dynamics for youth programs.",
    type: "leadership",
  },
  {
    period: "Ongoing",
    title: "Volunteer Mentor",
    org: "Beit Galgalim",
    description:
      "Mentoring youth with physical disabilities through inclusive social programming.",
    type: "volunteer",
  },
  {
    period: "Shaked, Sde Eliyahu",
    title: "High School Graduation",
    org: "Full Matriculation",
    description:
      "Majors in Physics, Agricultural Machinery, and Mathematics.",
    type: "education",
  },
];

const typeColors: Record<string, string> = {
  education: "bg-indigo-100 dark:bg-indigo-950 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300",
  work: "bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300",
  military: "bg-red-100 dark:bg-red-950 border-red-300 dark:border-red-700 text-red-700 dark:text-red-300",
  leadership: "bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300",
  volunteer: "bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300",
};

const typeLabels: Record<string, string> = {
  education: "Education",
  work: "Work",
  military: "Military",
  leadership: "Leadership",
  volunteer: "Volunteer",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Experience</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="flex gap-6 pl-12 relative">
                  {/* Dot */}
                  <div className="absolute left-3 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-950 -translate-x-1/2" />

                  <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">{item.org}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center shrink-0">
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${typeColors[item.type]}`}>
                          {typeLabels[item.type]}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">{item.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
