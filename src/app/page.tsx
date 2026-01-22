"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeToggle } from "@/components/ThemeToggle";
import SpotlightCard from "@/components/SpotlightCard";
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
  const [activeProject, setActiveProject] = useState(0);
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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const skills = [
    "React.js", "Angular", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Context API",
    "HTML5", "CSS3", "JavaScript (ES6+)", "Git & GitHub", "REST APIs", "Responsive Design", "UI/UX Implementation"
  ];

  const projects = [
    {
      title: "Hagz Now - Venue Booking Platform",
      description: "Multi-role React.js booking application with JWT authentication, dynamic booking flow, and comprehensive dashboards. Features bilingual UI (RTL/LTR), role-based routing, real-time availability, and admin control panel with analytics.",
      tech: ["React", "TypeScript", "Context API", "TailwindCSS", "Formik"],
      liveLink: "https://hagznow.com/",
      githubLink: "https://github.com/HagzNow/HagzNow-Frontend",
      image: "/hagz-now.jpg"
    },
    {
      title: "CinemaHub - Movie Discovery Platform",
      description: "Modern movie discovery platform with real-time search, dynamic pagination, and detailed movie pages powered by TMDB API. Features server components, optimized images, and responsive design with server-side data fetching for SEO.",
      tech: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
      liveLink: "https://movie-app-gules-chi-37.vercel.app/",
      githubLink: "https://github.com/hazemkhattab/movie-app",
      image: "/movies-app.png"
    },
    {
      title: "Elegant Personal Portfolio",
      description: "A fully responsive, animated personal portfolio built with React and Framer Motion, showcasing clean UI, dark mode support, and fast performance.",
      tech: ["React", "Vite", "Tailwind", "Framer Motion"],
      liveLink: "#",
      githubLink: "https://github.com/hazemkhattab/my-portfolio",
      image: "/portfolio.png"
    },
    {
      title: "Angular E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Angular, featuring product catalog, shopping cart, user authentication, and seamless checkout experience with responsive design.",
      tech: ["Angular", "TypeScript", "RxJS", "Bootstrap"],
      liveLink: "https://angular-e-commerce-mocha.vercel.app/home",
      githubLink: "https://github.com/hazemkhattab/angular-E-COMMERCE",
      image: "/angular-ecommerce-new.png"
    },
    {
      title: "Smart Trash - Keep it Clean",
      description: "Graduation project: Smart bin system with real-time monitoring dashboard for waste management. Integrated sensors and connectivity to optimize collection routes, minimize overflowing bins, and promote environmental conservation.",
      tech: ["IoT", "React", "Dashboard", "Real-time Monitoring"],
      liveLink: "https://smart-trash-deployment.vercel.app/",
      githubLink: "#",
      image: "/project-placeholder.png"
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
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded cursor-pointer">About</a>
                <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded cursor-pointer">Projects</a>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded cursor-pointer">Contact</a>
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

            <div className="max-w-9xl mx-20 w-full relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    variants={shouldReduceMotion ? {} : heroText}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h1
                      variants={shouldReduceMotion ? {} : heroTextItem}
                      className="text-5xl md:text-7xl font-bold mb-6 tracking-tight min-h-[10px] md:min-h-[160px] flex items-center justify-center lg:justify-start"
                    >
                      {!shouldReduceMotion ? (
                        <TypeAnimation
                          sequence={[
                            'Hi, I\'m Hazem Khattab',
                            2000,
                            'Hi, I\'m a Frontend Developer',
                            2000,
                            'Hi, I\'m a React Specialist',
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
                      className="text-xl md:text-2xl text-muted-foreground mb-4"
                    >
                      Frontend Developer crafting fast, accessible, and beautiful interfaces.
                    </motion.p>
                    <motion.p
                      variants={shouldReduceMotion ? {} : heroTextItem}
                      className="text-lg text-muted-foreground mb-12 leading-relaxed"
                    >
                      I'm a Frontend Developer specializing in building clean, responsive, and high-performance web applications. I focus on writing scalable code, creating smooth user experiences, and delivering polished digital products using React, TypeScript, and Next.js.
                    </motion.p>
                  </motion.div>
                  <motion.div
                    variants={shouldReduceMotion ? {} : staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center justify-center lg:justify-start gap-4 mb-12 flex-wrap"
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
                        href="https://drive.google.com/file/d/1wKVxds-WsgPABMiY3_EfHL4smsreooSG/view?usp=drive_link"
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
                    className="flex items-center justify-center lg:justify-start gap-6"
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
                      href="mailto:hazemahmedkhattabb@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                      aria-label="Send email"
                    >
                      <Mail size={24} aria-hidden="true" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                  variants={shouldReduceMotion ? {} : fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="flex-1 w-full max-w-2xl"
                >
                  <div className="relative w-full h-[800px] md:h-[600px] lg:h-[700px]">
                    <Image
                      src="/my-photo.png"
                      alt="Hazem Khattab"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

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
              <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } 
                    }}
                  >
                    <SpotlightCard className="group relative glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] dark:hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)] transition-all duration-500 flex flex-col md:flex-row min-h-[250px] bg-white/80 dark:bg-background/50">
                    {/* Left Content */}
                    <div className="flex-1 p-8 flex flex-col justify-center relative z-10 bg-white/60 dark:bg-transparent">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">{project.title}</h3>
                          <p className="text-muted-foreground mb-4 max-w-xl">
                            {project.description}
                          </p>
                        </div>

                        {/* Links - Desktop */}
                        <div className="hidden md:flex items-center gap-3 shrink-0">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                            title="Live Demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full glass text-muted-foreground hover:text-foreground transition-all"
                            title="GitHub"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-background/50 border border-border/50 rounded-lg text-sm font-medium text-muted-foreground group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links - Mobile */}
                      <div className="flex md:hidden items-center gap-4 mt-6 pt-4 border-t border-border/50">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary font-medium"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <Github size={18} /> GitHub
                        </a>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full md:w-[450px] h-64 md:h-auto shrink-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10 md:bg-gradient-to-l md:from-transparent md:to-background/20" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    </SpotlightCard>
                  </motion.article>
                ))}
              </div>
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
                Or email me directly at <a href="mailto:hazemahmedkhattabb@gmail.com" className="gradient-text-accent hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">hazemahmedkhattabb@gmail.com</a>
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
