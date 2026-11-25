"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const stats = [
  { key: "projects" as const, value: 6, suffix: "+" },
  { key: "technologies" as const, value: 15, suffix: "+" },
  { key: "languages" as const, value: 5, suffix: "" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-gradient font-mono"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      {inView ? (
        <motion.span
          initial={{ innerText: 0 } as never}
          animate={{ innerText: target } as never}
          transition={{ duration: 1.4, ease: "easeOut" }}
          onUpdate={(latest: { innerText?: number }) => {
            if (ref.current) {
              (ref.current as HTMLElement).textContent =
                Math.round(latest.innerText ?? 0) + suffix;
            }
          }}
        >
          0{suffix}
        </motion.span>
      ) : (
        `0${suffix}`
      )}
    </motion.span>
  );
}

export default function StatsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 px-6 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.key}
            className="space-y-2"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Counter target={s.value} suffix={s.suffix} />
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono">
              {t.stats[s.key]}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
