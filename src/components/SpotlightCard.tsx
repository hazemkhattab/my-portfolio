"use client";

import { useRef } from "react";
import "./SpotlightCard.css";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
};

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 229, 255, 0.2)",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const current = divRef.current;
    if (!current) return;
    const rect = current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    current.style.setProperty("--mouse-x", `${x}px`);
    current.style.setProperty("--mouse-y", `${y}px`);
    current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
}

