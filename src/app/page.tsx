import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsSection from "@/components/StatsSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import FooterClient from "@/components/FooterClient";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <GitHubStats />
      <Contact />
      <FooterClient />
    </main>
  );
}
