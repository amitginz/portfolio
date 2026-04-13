import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="text-center py-6 text-sm text-gray-400 dark:text-gray-600 border-t border-gray-200 dark:border-gray-800">
        Built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
