"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "AMIT GINZBERG";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-gray-950 flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Background pulse */}
          <div className="absolute w-[32rem] h-[32rem] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse" />
          <div className="absolute w-64 h-64 rounded-full bg-violet-600/15 blur-[90px] top-1/3 right-1/4" />

          {/* Name letters */}
          <div className="relative flex flex-wrap justify-center">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.055,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                style={{
                  display: "inline-block",
                  width: char === " " ? "1.2rem" : "auto",
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  background:
                    "linear-gradient(135deg, #c7d2fe 0%, #818cf8 40%, #6366f1 70%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <motion.div
            className="mt-10 w-44 h-px bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 0.7, duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-5 font-mono text-indigo-400/60 text-xs tracking-[0.35em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Software Engineer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
