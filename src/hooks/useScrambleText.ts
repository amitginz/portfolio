"use client";

import { useState, useEffect, useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function useScrambleText(target: string, speed = 28): string {
  const [output, setOutput] = useState(target);
  const iter = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    iter.current = 0;

    const step = () => {
      setOutput(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iter.current) return target[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (iter.current < target.length) {
        iter.current += 0.45;
        timer.current = setTimeout(step, speed);
      } else {
        setOutput(target);
      }
    };

    // Small delay so it fires after the component has rendered
    timer.current = setTimeout(step, 350);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [target, speed]);

  return output;
}
