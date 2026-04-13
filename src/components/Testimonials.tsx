"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

// TODO: Replace with real testimonials
const testimonials = [
  {
    quote:
      "Amit consistently delivered clean, well-structured code and showed a deep understanding of asynchronous patterns. His Telegram agent was one of the most impressive student projects I've seen — production-quality from day one.",
    name: "Dr. R. Cohen",
    role: "Lecturer, Computer Science",
    org: "Tel-Hai University",
    avatar: "RC",
    color: "from-indigo-500 to-violet-500",
  },
  {
    quote:
      "Amit brings rare focus and reliability to everything he does. Whether debugging a complex race condition or explaining a concept to a junior, his communication is always clear and his attitude always positive.",
    name: "Y. Shapira",
    role: "Senior Developer",
    org: "Wix",
    avatar: "YS",
    color: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "The impact Amit has had on our youth program is immeasurable. He adapts his approach to every individual and brings both technical knowledge and genuine human warmth to every session.",
    name: "M. Levi",
    role: "Program Coordinator",
    org: "Beit Galgalim",
    avatar: "ML",
    color: "from-amber-500 to-orange-500",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t.testimonials.title}
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-3" />
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-10">
            {t.testimonials.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 min-h-[220px]">
            {/* Quote mark */}
            <span className="absolute top-6 left-6 text-5xl text-indigo-200 dark:text-indigo-900 font-serif leading-none select-none">
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="pt-4"
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  {testimonials[active].quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonials[active].name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonials[active].role} · {testimonials[active].org}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all ${
                  i === active
                    ? "w-5 h-2 bg-indigo-500"
                    : "w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-indigo-300"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
