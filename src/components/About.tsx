import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 text-gray-600 dark:text-gray-400 leading-relaxed">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <p>
                Computer Science student at Tel-Hai University (B.Sc. 2024–2026),
                specialized in AI Agents, Backend Engineering, and Mobile
                Development. I focus on building autonomous workflows and
                interactive applications using Node.js, Python, and Java.
              </p>
              <p>
                Beyond code, I&apos;m a Combat Commander in IDF Reserve (Brigade 188),
                awarded Battalion distinction for leadership during &quot;Iron Swords&quot;.
                I also volunteer mentoring youth with physical disabilities at
                Beit Galgalim.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-3">
              {[
                ["Name", "Amit Ginzberg"],
                ["Degree", "B.Sc. Computer Science"],
                ["University", "Tel-Hai University"],
                ["Focus", "AI Agents · Backend · Mobile"],
                ["Email", "amitginz@gmail.com"],
                ["Status", "Open to opportunities"],
              ].map(([label, value]) => (
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
