"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative p-2.5 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-all duration-300"
        aria-label="Toggle theme"
        disabled
      >
        <Sun size={20} className="opacity-50" />
      </button>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2.5 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-sm hover:shadow-md group overflow-hidden"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-500/0 group-hover:from-violet-500/10 group-hover:to-cyan-500/10 dark:group-hover:from-violet-400/20 dark:group-hover:to-cyan-400/20 transition-all duration-300" />
      
      {/* Icon container with rotation animation */}
      <div className="relative">
        {isDark ? (
          <Sun 
            size={20} 
            style={{ color: '#fbbf24' }}
            className="transition-all duration-500 rotate-0 group-hover:rotate-180 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" 
          />
        ) : (
          <Moon 
            size={20} 
            style={{ color: '#1e293b' }}
            className="transition-all duration-500 rotate-0 group-hover:-rotate-12 group-hover:scale-110" 
          />
        )}
      </div>
    </button>
  );
}
