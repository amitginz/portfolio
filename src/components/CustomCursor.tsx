"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const dotX = useSpring(mx, { stiffness: 900, damping: 40 });
  const dotY = useSpring(my, { stiffness: 900, damping: 40 });
  const ringX = useSpring(mx, { stiffness: 140, damping: 18 });
  const ringY = useSpring(my, { stiffness: 140, damping: 18 });

  useEffect(() => {
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [data-hover]"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [mx, my]);

  if (!mounted) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-indigo-500"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 10 : 6,
          height: hovering ? 10 : 6,
          transition: "width 0.15s, height 0.15s",
          boxShadow: hovering ? "0 0 12px 2px rgba(99,102,241,0.6)" : "none",
        }}
      />

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
          border: hovering
            ? "1.5px solid rgba(167,139,250,0.65)"
            : "1.5px solid rgba(99,102,241,0.45)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
    </>
  );
}
