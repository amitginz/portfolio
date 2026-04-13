"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

const roles = [
  "Software Engineer",
  "Backend Developer",
  "AI Agent Builder",
  "Android Developer",
];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-indigo-600 dark:text-indigo-400 text-sm mb-4 tracking-widest uppercase"
        >
          Hello, world!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
        >
          I&apos;m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Amit Ginzberg</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-10 mb-6 flex items-center justify-center"
        >
          <span className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 font-mono">
            {typed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto"
        >
          CS student at Tel-Hai University, building autonomous workflows
          and interactive applications with Node.js, Python &amp; Java.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="/Amit_Ginzberg_CV.pdf"
            download
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-500 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
            </svg>
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg font-medium transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
