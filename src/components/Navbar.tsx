"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { CommandPaletteButton } from "@/components/CommandPalette";

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors overflow-hidden"
      aria-label="Toggle theme"
    >
      {mounted ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ display: "block" }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </motion.span>
        </AnimatePresence>
      ) : (
        <div className="w-5 h-5" />
      )}
    </button>
  );
}

function AvailabilityBadge() {
  const { t } = useLanguage();
  return (
    <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      {t.availability}
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "about",      label: t.nav.about },
    { href: "skills",     label: t.nav.skills },
    { href: "projects",   label: t.nav.projects },
    { href: "experience", label: t.nav.experience },
    { href: "contact",    label: t.nav.contact },
  ];

  const active = useActiveSection(links.map((l) => l.href));

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="font-mono text-indigo-600 dark:text-indigo-400 font-bold text-lg tracking-tight shrink-0"
          >
            amit.dev
          </a>
          <AvailabilityBadge />
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={`#${l.href}`}
                className={`text-sm transition-colors ${
                  active === l.href
                    ? "text-indigo-600 dark:text-indigo-400 font-medium"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/now"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t.nav.now}
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <CommandPaletteButton />
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "block" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={`#${l.href}`}
                    className={`text-sm transition-colors ${
                      active === l.href
                        ? "text-indigo-600 dark:text-indigo-400 font-medium"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/now" className="text-sm text-gray-500 dark:text-gray-400" onClick={() => setOpen(false)}>
                  {t.nav.now}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
