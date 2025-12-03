"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
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

    // Show scroll to top button when scrolled down
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    if (!isEnabled) {
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

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
      window.removeEventListener("scroll", handleScroll);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isEnabled]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isEnabled) {
    return showScrollTop ? (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-[1060] p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    ) : null;
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
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-[1060] p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}

