"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "he" : "en")}
      className="relative px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-xs font-mono text-gray-500 dark:text-gray-400 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors overflow-hidden"
      aria-label="Toggle language"
    >
      <motion.span
        key={lang}
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 12, opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="block"
      >
        {lang === "en" ? "HE" : "EN"}
      </motion.span>
    </button>
  );
}
