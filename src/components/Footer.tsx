"use client";

import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 px-6 border-t border-white/5 bg-dark/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        {/* Glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent blur-sm" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.github, icon: FiGithub, label: "GitHub" },
              { href: personalInfo.linkedin, icon: FiLinkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: FiMail, label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-text-secondary hover:text-accent-cyan transition-colors"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-sm flex items-center gap-1.5">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          {/* Built with love */}
          <p className="text-text-muted text-xs flex items-center gap-1">
            Built with <FiHeart size={12} className="text-accent-pink" /> using Next.js 15
          </p>
        </div>
      </div>
    </footer>
  );
}
