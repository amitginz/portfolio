"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const spring = { type: "spring" as const, stiffness: 380, damping: 16 };

export default function MagneticButton({
  children,
  className = "",
  href,
  download,
  target,
  rel,
  onClick,
}: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - (rect.left + rect.width / 2)) * 0.28,
      y: (e.clientY - (rect.top + rect.height / 2)) * 0.28,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={className}
        animate={pos}
        transition={spring}
        onMouseMove={onMove}
        onMouseLeave={reset}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      onClick={onClick}
      animate={pos}
      transition={spring}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.button>
  );
}
