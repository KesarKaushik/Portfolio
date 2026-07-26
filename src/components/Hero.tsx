"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentWord = personalInfo.taglines[wordIndex];
    let timeout;
    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setWordIndex((w) => (w + 1) % personalInfo.taglines.length);
        return;
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const socials = [
    { href: personalInfo.github, icon: FiGithub, label: "GitHub" },
    { href: personalInfo.linkedin, icon: FiLinkedin, label: "LinkedIn" },
    { href: "mailto:" + personalInfo.email, icon: FiMail, label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-purple/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-cyan/8 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">
        <div className="relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 text-[11px] font-semibold tracking-[3px] uppercase rounded-full glass text-accent-cyan border border-accent-cyan/20 mb-8">My Portfolio</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-[-2px] mb-6 text-balance bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink bg-clip-text text-transparent animate-glow-pulse">{personalInfo.name}</motion.h1>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-10 mb-6">
            <span className="text-xl sm:text-2xl text-accent-cyan font-mono">
              {text}<span className="animate-pulse ml-0.5">|</span>
            </span>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-10">{personalInfo.bio}</motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-4 mb-12">
            <button onClick={() => scrollTo("projects")} className="group relative px-8 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-accent-purple to-accent-cyan text-white shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer">
              View Projects <FiExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a href="/assets/resume.html" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full font-semibold text-sm glass text-text-primary flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all duration-300">
              <FiExternalLink size={16} /> Resume
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex gap-4">
            {socials.map((social) => (
              <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-11 h-11 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-purple/20 transition-all duration-300 cursor-pointer" aria-label={social.label}>
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-accent-purple/20 via-accent-cyan/10 to-accent-pink/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            <div className="absolute inset-0 rounded-full border border-accent-purple/20 animate-ping" style={{ animationDuration: "5s" }} />
            <div className="absolute -inset-4 rounded-full border border-accent-cyan/10 animate-ping" style={{ animationDuration: "7s", animationDelay: "2s" }} />
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
              <img src="/assets/images/profile.jpg" alt={personalInfo.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="eager" />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: showScroll ? 0.5 : 0 }} transition={{ duration: 0.3 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[4px] text-text-muted font-medium">Scroll</span>
        <div className="w-[18px] h-[30px] border-2 border-text-muted/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-accent-purple rounded-full animate-scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
}