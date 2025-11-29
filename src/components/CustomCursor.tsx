"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Check localStorage for cursor preference
    const saved = localStorage.getItem("customCursorEnabled");
    if (saved !== null) {
      setIsEnabled(saved === "true");
    } else {
      // Default to enabled, but check for reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      setIsEnabled(!prefersReducedMotion);
    }

    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button'], [tabindex]"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isEnabled]);

  const toggleCursor = () => {
    if (typeof window === "undefined") return;
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    localStorage.setItem("customCursorEnabled", String(newValue));
  };

  if (!isEnabled) {
    return (
      <button
        onClick={toggleCursor}
        className="fixed bottom-4 right-4 z-[1060] p-2 rounded-full bg-primary text-primary-foreground opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Enable custom cursor"
        title="Enable custom cursor"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3L17 17M17 3L3 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    );
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[1060] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`h-6 w-6 rounded-full border-2 border-white transition-transform ${
            isHovering ? "scale-150" : "scale-100"
          }`}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[1061]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`h-2 w-2 rounded-full bg-white transition-opacity ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        />
      </motion.div>
      <button
        onClick={toggleCursor}
        className="fixed bottom-4 right-4 z-[1060] p-2 rounded-full bg-primary text-primary-foreground opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Disable custom cursor"
        title="Disable custom cursor"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3L17 17M17 3L3 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </>
  );
}

