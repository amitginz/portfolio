"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useLanguage } from "@/context/LanguageContext";
import { rolesHe } from "@/data/he";
import ParticleBackground from "@/components/ParticleBackground";
import MagneticButton from "@/components/MagneticButton";

const rolesEn = [
  "Software Engineer",
  "Backend Developer",
  "Full-Stack Developer",
  "Test Automation",
];

export default function Hero() {
  const { t, lang } = useLanguage();
  const typed = useTypewriter(lang === "he" ? rolesHe : rolesEn);
  const scrambled = useScrambleText("Amit Ginzberg");

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      <ParticleBackground />

      <div
        className="absolute w-[28rem] h-[28rem] rounded-full bg-indigo-500/10 dark:bg-indigo-500/12 pointer-events-none -top-20 -left-20 animate-float"
        style={{ filter: "blur(90px)" }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-violet-500/8 dark:bg-violet-400/10 pointer-events-none -bottom-10 -right-10 animate-float-rev"
        style={{ filter: "blur(80px)" }}
      />

      <motion.div style={{ y: parallaxY }} className="relative max-w-3xl text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-indigo-600 dark:text-indigo-400 text-sm mb-4 tracking-widest uppercase"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
        >
          {t.hero.iam}{" "}
          <span className="text-gradient inline-block font-mono">{scrambled}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-10 mb-6 flex items-center justify-center"
        >
          <span className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 font-mono">
            {typed}<span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <MagneticButton
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
          >
            {t.hero.viewProjects}
          </MagneticButton>
          <MagneticButton
            href="/Amit_Ginzberg_CV.pdf"
            download="Amit_Ginzberg_CV.pdf"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-500 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
            </svg>
            {t.hero.downloadCV}
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg font-medium transition-colors"
          >
            {t.hero.contactMe}
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
