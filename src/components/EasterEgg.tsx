"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

const LINES = [
  "> initializing easter_egg.exe...",
  "> loading secret protocol...",
  "> decrypting konami.key... ✓",
  "> you clearly have elite taste",
  "> checking eligibility for hire...",
  "> result: ABSOLUTELY YES",
  "> have a great day, hacker 🎉",
];

export default function EasterEgg() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const keys: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      keys.push(e.key);
      if (keys.length > KONAMI.length) keys.shift();
      if (keys.join(",") === KONAMI.join(",")) {
        setShow(true);
        setLines([]);
        setProgress(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!show) return;
    if (progress >= LINES.length) return;
    const t = setTimeout(() => {
      setLines((prev) => [...prev, LINES[progress]]);
      setProgress((p) => p + 1);
    }, progress === 0 ? 300 : 400);
    return () => clearTimeout(t);
  }, [show, progress]);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setShow(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-gray-950/95 backdrop-blur flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
        >
          <motion.div
            className="max-w-lg w-full bg-gray-900 border border-indigo-500/40 rounded-xl p-6 font-mono"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-500">bash — amit.dev</span>
            </div>

            <p className="text-indigo-400 text-sm mb-3">{t.easter.title}</p>

            <div className="space-y-1 mb-4 min-h-[160px]">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  className="text-green-400 text-sm"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {line}
                </motion.p>
              ))}
              {progress < LINES.length && (
                <span className="inline-block w-2 h-4 bg-green-400 animate-pulse" />
              )}
            </div>

            <p className="text-gray-600 text-xs text-center">{t.easter.close}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
