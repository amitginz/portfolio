"use client";

import { useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: Props) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTilt({
      ry: ((x / rect.width) - 0.5) * 13,
      rx: -((y / rect.height) - 0.5) * 13,
    });
    setShine({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const onLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setActive(false);
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${active ? 1.015 : 1})`,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={onLeave}
    >
      {children}

      {/* Shine overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-xl pointer-events-none z-10 overflow-hidden"
        style={{
          background: active
            ? `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.07) 0%, transparent 55%)`
            : "transparent",
          transition: "opacity 0.2s",
          opacity: active ? 1 : 0,
          borderRadius: "inherit",
        }}
      />
    </div>
  );
}
