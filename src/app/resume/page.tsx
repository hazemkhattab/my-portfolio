"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeToggle } from "@/components/ThemeToggle";
import { fadeInUp, staggerContainer, staggerItem, pageTransition } from "@/lib/animations";

export default function ResumePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <CustomCursor />
      <motion.div
        variants={shouldReduceMotion ? {} : pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-background text-foreground py-20 px-6 relative overflow-hidden"
      >
        {/* Animated gradient background - darker in dark mode */}
        <div className="fixed inset-0 -z-10 gradient-animated opacity-[0.03]" aria-hidden="true" />
        
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50" role="navigation" aria-label="Resume navigation">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold gradient-text focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Hazem Khattab</Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Home</Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        <main id="main-content" className="max-w-4xl mx-auto pt-20">
          {/* Header */}
          <motion.div
            variants={shouldReduceMotion ? {} : fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-2 gradient-text">Hazem Khattab</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Frontend Developer | React.js | TypeScript | Next.js
            </p>
            <p className="text-muted-foreground mb-4">Shebin El-Kom, Egypt</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
              <span>Email: hazemkhattab1219@gmail.com</span>
              <span aria-hidden="true">•</span>
              <span>LinkedIn: linkedin.com/in/hazem-ahmed-khattab1/</span>
            </div>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? {} : staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Summary */}
            <motion.section variants={shouldReduceMotion ? {} : staggerItem} className="glass p-6 rounded-xl border border-border hover:border-border/80 transition-all">
              <div className="border-b border-border pb-2 mb-4">
                <h2 className="text-2xl font-bold gradient-text-secondary">SUMMARY</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Frontend Developer with strong experience in building fast, responsive,
                and user-centered web applications. Skilled in React, TypeScript, and Next.js
                with a focus on clean code, performance, and modern UI development.
              </p>
            </motion.section>

            {/* Skills */}
            <motion.section variants={shouldReduceMotion ? {} : staggerItem} className="glass p-6 rounded-xl border border-border hover:border-border/80 transition-all">
              <div className="border-b border-border pb-2 mb-4">
                <h2 className="text-2xl font-bold gradient-text-accent">SKILLS</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-2 text-muted-foreground" role="list" aria-label="Skills">
                <div role="listitem">• React.js</div>
                <div role="listitem">• TypeScript</div>
                <div role="listitem">• Next.js</div>
                <div role="listitem">• Tailwind CSS</div>
                <div role="listitem">• Redux / Context API</div>
                <div role="listitem">• REST APIs</div>
                <div role="listitem">• JavaScript (ES6+)</div>
                <div role="listitem">• HTML5 / CSS3</div>
                <div role="listitem">• Responsive Web Design</div>
                <div role="listitem">• Git & GitHub</div>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section variants={shouldReduceMotion ? {} : staggerItem} className="glass p-6 rounded-xl border border-border hover:border-border/80 transition-all group relative overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 dark:group-hover:from-purple-500/10 dark:group-hover:to-cyan-500/10 transition-all duration-300 -z-10" />
              
              <div className="border-b border-border pb-2 mb-4">
                <h2 className="text-2xl font-bold gradient-text">PROJECTS</h2>
              </div>
              <div className="space-y-6" role="list" aria-label="Projects">
                <div role="listitem" className="pb-4 border-b border-border/50 last:border-0">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Venue Booking Platform</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Multi-role platform with booking flows and availability features.</li>
                    <li>Technologies: React, TypeScript, Tailwind.</li>
                  </ul>
                </div>
                <div role="listitem" className="pb-4 border-b border-border/50 last:border-0">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Personal Portfolio Website</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Animated, responsive portfolio with dark mode and smooth transitions.</li>
                    <li>Technologies: React, Framer Motion, Tailwind.</li>
                  </ul>
                </div>
                <div role="listitem" className="pb-4 border-b border-border/50 last:border-0">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">LMS Dashboard Interface</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Dashboard for learning management with analytics and course browsing.</li>
                    <li>Technologies: Next.js, TypeScript.</li>
                  </ul>
                </div>
                <div role="listitem">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">AI Chat Assistant Interface</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Modern chat UI with streaming animations and dark/light mode.</li>
                    <li>Technologies: React, TypeScript.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section variants={shouldReduceMotion ? {} : staggerItem} className="glass p-6 rounded-xl border border-border hover:border-border/80 transition-all">
              <div className="border-b border-border pb-2 mb-4">
                <h2 className="text-2xl font-bold gradient-text-secondary">EDUCATION</h2>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">BSc in Computers and Information</h3>
                <p className="text-muted-foreground">Menoufia University, Egypt</p>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section variants={shouldReduceMotion ? {} : staggerItem} className="glass p-6 rounded-xl border border-border hover:border-border/80 transition-all group">
              <div className="border-b border-border pb-2 mb-4">
                <h2 className="text-2xl font-bold gradient-text-accent">CONTACT</h2>
              </div>
              <div className="text-muted-foreground space-y-2">
                <p className="hover:text-foreground transition-colors">📧 Email: hazemkhattab1219@gmail.com</p>
                <p className="hover:text-foreground transition-colors">💼 LinkedIn: linkedin.com/in/hazem-ahmed-khattab1/</p>
              </div>
            </motion.section>
          </motion.div>

          {/* Back to Home Link */}
          <motion.div
            variants={shouldReduceMotion ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 text-center"
          >
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-lg"
            >
              Back to Home
            </Link>
          </motion.div>
        </main>
      </motion.div>
    </>
  );
}
