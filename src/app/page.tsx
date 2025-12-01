"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  cardHover,
  badgeHover,
  heroText,
  heroTextItem,
} from "@/lib/animations";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const skills = [
    "React.js", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Context API",
    "HTML5", "CSS3", "JavaScript (ES6+)", "Git & GitHub", "REST APIs", "Responsive Design", "UI/UX Implementation"
  ];

  const projects = [
    {
      title: "Smart Venue Booking Platform",
      description: "A multi-role booking system built with separate Admin, Owner, and User dashboards. Features real-time availability, slot selection, booking management, and dynamic forms.",
      tech: ["React", "TypeScript", "Context API", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Elegant Personal Portfolio",
      description: "A fully responsive, animated personal portfolio built with React and Framer Motion, showcasing clean UI, dark mode support, and fast performance.",
      tech: ["React", "Vite", "Tailwind", "Framer Motion"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "LMS Dashboard Interface",
      description: "A clean and intuitive LMS interface with progress tracking, course browsing, quizzes, analytics, and a fully responsive dashboard layout.",
      tech: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "AI Chat Assistant Interface",
      description: "A sleek chat interface inspired by modern AI tools, with smooth animations, message streaming effect, dark/light mode, and mobile-first design.",
      tech: ["React", "TypeScript", "Styled Components"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Animated gradient background - darker in dark mode */}
        <div className="fixed inset-0 -z-10 gradient-animated opacity-[0.03]" aria-hidden="true" />
        
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" className="text-xl font-bold gradient-text focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Hazem Khattab</a>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-8">
                <a href="#about" className="hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">About</a>
                <a href="#projects" className="hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Projects</a>
                <a href="#contact" className="hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Contact</a>
                <Link href="/resume" className="hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Resume</Link>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </motion.nav>

        <main id="main-content">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative" aria-label="Hero section">
            {/* Gradient orb decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" aria-hidden="true" />
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <motion.div
                variants={shouldReduceMotion ? {} : heroText}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={shouldReduceMotion ? {} : heroTextItem}
                  className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                  <span className="gradient-text">Hi, I'm </span>
                  {!shouldReduceMotion ? (
                    <TypeAnimation
                      sequence={[
                        'Hazem Khattab',
                        2000,
                        'a Frontend Developer',
                        2000,
                        'a React Specialist',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="gradient-text"
                      repeat={Infinity}
                    />
                  ) : (
                    <span className="gradient-text">Hazem Khattab</span>
                  )}
                </motion.h1>
                <motion.p
                  variants={shouldReduceMotion ? {} : heroTextItem}
                  className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
                >
                  Frontend Developer crafting fast, accessible, and beautiful interfaces.
                </motion.p>
                <motion.p
                  variants={shouldReduceMotion ? {} : heroTextItem}
                  className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  I'm a Frontend Developer specializing in building clean, responsive, and high-performance web applications. I focus on writing scalable code, creating smooth user experiences, and delivering polished digital products using React, TypeScript, and Next.js.
                </motion.p>
              </motion.div>
              <motion.div
                variants={shouldReduceMotion ? {} : staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center gap-4 mb-12 flex-wrap"
              >
                <motion.a
                  variants={shouldReduceMotion ? {} : staggerItem}
                  href="#projects"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-lg"
                >
                  View Projects
                </motion.a>
                <motion.div variants={shouldReduceMotion ? {} : staggerItem}>
                  <Link
                    href="/resume"
                    className="px-6 py-3 glass border rounded-full hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <Download size={18} aria-hidden="true" />
                    Download Resume
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                variants={shouldReduceMotion ? {} : staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center gap-6"
                role="list"
                aria-label="Social links"
              >
                <motion.a
                  variants={shouldReduceMotion ? {} : staggerItem}
                  href="https://github.com/hazemkhattab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                  aria-label="GitHub profile"
                >
                  <Github size={24} aria-hidden="true" />
                </motion.a>
                <motion.a
                  variants={shouldReduceMotion ? {} : staggerItem}
                  href="https://www.linkedin.com/in/hazem-ahmed-khattab1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={24} aria-hidden="true" />
                </motion.a>
                <motion.a
                  variants={shouldReduceMotion ? {} : staggerItem}
                  href="mailto:hazemkhattab1219@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                  aria-label="Send email"
                >
                  <Mail size={24} aria-hidden="true" />
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                aria-hidden="true"
              >
                <ChevronDown size={32} className="text-muted-foreground animate-bounce" />
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-6 relative" aria-labelledby="about-heading">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" aria-hidden="true" />
            <div className="max-w-4xl mx-auto relative z-10">
              <motion.h2
                id="about-heading"
                variants={shouldReduceMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl font-bold mb-8 text-center"
              >
                <span className="gradient-text">About Me</span>
              </motion.h2>
              <motion.div
                variants={shouldReduceMotion ? {} : staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6 mb-12"
              >
                <motion.p
                  variants={shouldReduceMotion ? {} : staggerItem}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  I'm Hazem Khattab, a Frontend Developer from Shebin El-Kom, Egypt. I graduated from the Faculty of Computers and Information at Menoufia University, and I've been passionate about building digital experiences that feel smooth, fast, and intuitive.
                </motion.p>
                <motion.p
                  variants={shouldReduceMotion ? {} : staggerItem}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  I enjoy transforming ideas into functional, user-friendly interfaces using modern tools like React, TypeScript, Tailwind CSS, and Next.js. I prioritize clean code, accessibility, performance optimization, and design consistency across devices.
                </motion.p>
                <motion.p
                  variants={shouldReduceMotion ? {} : staggerItem}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  My goal is to craft products that users enjoy interacting with — beautiful UIs, seamless animations, and an overall experience that feels professional and reliable.
                </motion.p>
              </motion.div>
              <motion.div
                variants={shouldReduceMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center gradient-text-secondary">Technologies I Use</h3>
                <motion.div
                  variants={shouldReduceMotion ? {} : staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-wrap gap-4 justify-center"
                  role="list"
                  aria-label="Technologies"
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={shouldReduceMotion ? {} : badgeHover}
                      initial="rest"
                      whileHover="hover"
                      className="px-6 py-3 glass rounded-full text-lg font-medium border border-border hover:border-border/80 hover:bg-secondary/50 transition-all transform hover:scale-105 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                      role="listitem"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-6 relative" aria-labelledby="projects-heading">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                id="projects-heading"
                variants={shouldReduceMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl font-bold mb-12 text-center"
              >
                <span className="gradient-text-accent">Projects</span>
              </motion.h2>
              <motion.div
                variants={shouldReduceMotion ? {} : staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 gap-8"
                role="list"
                aria-label="Projects"
              >
                {projects.map((project, index) => (
                  <motion.article
                    key={index}
                    variants={shouldReduceMotion ? {} : cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="glass p-6 rounded-xl border border-border hover:border-border/80 hover:shadow-2xl hover:shadow-black/20 transition-all focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 relative overflow-hidden group"
                    role="listitem"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10" />
                    
                    <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 glass text-sm rounded-full border border-white/10"
                          role="listitem"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveLink}
                        className="inline-flex items-center gap-2 gradient-text-accent hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        Live demo <ExternalLink size={16} aria-hidden="true" />
                      </a>
                      <a
                        href={project.githubLink}
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        GitHub <Github size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-6 relative" aria-labelledby="contact-heading">
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent" aria-hidden="true" />
            <div className="max-w-2xl mx-auto relative z-10">
              <motion.h2
                id="contact-heading"
                variants={shouldReduceMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl font-bold mb-4 text-center"
              >
                <span className="gradient-text">Get In Touch</span>
              </motion.h2>
              <motion.p
                variants={shouldReduceMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-center text-muted-foreground mb-12 text-lg"
              >
                Have a question, project idea, or want to collaborate?<br />
                Feel free to reach out — I respond quickly!
              </motion.p>
              <motion.form
                variants={shouldReduceMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Contact form"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
                    required
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-lg"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </motion.form>
              <motion.p
                variants={shouldReduceMotion ? {} : fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-center text-muted-foreground mt-8"
              >
                Or email me directly at <a href="mailto:hazemkhattab1219@gmail.com" className="gradient-text-accent hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">hazemkhattab1219@gmail.com</a>
              </motion.p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border/50 glass" role="contentinfo">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p>© 2025 Hazem Khattab. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
