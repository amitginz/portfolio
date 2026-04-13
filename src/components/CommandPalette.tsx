"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";

type Item = {
  id: string;
  label: string;
  sublabel?: string;
  icon: string;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const navigate = (href: string) => {
    setOpen(false);
    setQuery("");
    window.location.hash = href;
  };

  const items: Item[] = [
    // Sections
    { id: "hero",       icon: "🏠", label: t.nav.about,      sublabel: t.palette.sections, action: () => navigate("hero") },
    { id: "about",      icon: "👤", label: t.nav.about,      sublabel: t.palette.sections, action: () => navigate("about") },
    { id: "skills",     icon: "⚡", label: t.nav.skills,     sublabel: t.palette.sections, action: () => navigate("skills") },
    { id: "projects",   icon: "📁", label: t.nav.projects,   sublabel: t.palette.sections, action: () => navigate("projects") },
    { id: "experience", icon: "🕐", label: t.nav.experience, sublabel: t.palette.sections, action: () => navigate("experience") },
    { id: "contact",    icon: "✉️", label: t.nav.contact,    sublabel: t.palette.sections, action: () => navigate("contact") },
    { id: "now",        icon: "📍", label: t.nav.now,        sublabel: t.palette.sections, action: () => { setOpen(false); window.location.href = "/now"; } },
    // Projects
    ...projects.map((p) => ({
      id: p.slug,
      icon: p.emoji,
      label: p.title,
      sublabel: t.palette.projects,
      action: () => { setOpen(false); window.location.href = `/projects/${p.slug}`; },
    })),
    // Links
    { id: "github",   icon: "🐙", label: "GitHub",   sublabel: t.palette.links, action: () => { setOpen(false); window.open("https://github.com/amitginz", "_blank"); } },
    { id: "linkedin", icon: "💼", label: "LinkedIn",  sublabel: t.palette.links, action: () => { setOpen(false); window.open("https://linkedin.com/in/amit-ginzberg", "_blank"); } },
    { id: "cv",       icon: "📄", label: "Download CV", sublabel: t.palette.links, action: () => { setOpen(false); window.open("/Amit_Ginzberg_CV.pdf", "_blank"); } },
  ];

  const filtered = query.trim()
    ? items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()) || (i.sublabel ?? "").toLowerCase().includes(query.toLowerCase()))
    : items;

  useEffect(() => { setSelected(0); }, [query]);

  const close = useCallback(() => { setOpen(false); setQuery(""); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen((o) => !o); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
      if (e.key === "Enter" && filtered[selected]) { filtered[selected].action(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, selected, filtered, close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  return (
    <>
      {/* Trigger button visible in navbar via export — also global shortcut */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9990] bg-gray-950/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="w-full max-w-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, y: -16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -16, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.palette.placeholder}
                  className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none"
                />
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-400 rounded border border-gray-200 dark:border-gray-700">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <ul className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <li className="px-4 py-6 text-center text-sm text-gray-400">No results</li>
                ) : (
                  filtered.map((item, i) => (
                    <li key={item.id}>
                      <button
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                          i === selected
                            ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        }`}
                        onMouseEnter={() => setSelected(i)}
                        onClick={item.action}
                      >
                        <span className="text-base shrink-0">{item.icon}</span>
                        <span className="flex-1 text-sm truncate">{item.label}</span>
                        {item.sublabel && (
                          <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{item.sublabel}</span>
                        )}
                      </button>
                    </li>
                  ))
                )}
              </ul>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-800 flex gap-4 text-xs text-gray-400">
                <span><kbd className="font-mono">↑↓</kbd> navigate</span>
                <span><kbd className="font-mono">↵</kbd> open</span>
                <span><kbd className="font-mono">esc</kbd> close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function CommandPaletteButton() {
  return (
    <button
      onClick={() => {
        const e = new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true });
        window.dispatchEvent(e);
      }}
      className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs text-gray-400 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-500 transition-colors"
      aria-label="Open command palette"
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
      <span>⌘K</span>
    </button>
  );
}
