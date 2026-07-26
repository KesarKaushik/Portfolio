"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const linkedinProfile = "https://www.linkedin.com/in/kesar-kaushik-880b0b3b5";

  return (
    <section id="certificates" className="section-padding">
      <div className="section-header">
        <h2>Certifications</h2>
        <p className="section-subtitle">My professional certifications and achievements</p>
        <div className="section-line" />
      </div>

      {/* Certificate Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {certificates.map((cert, i) => (
          <motion.a
            key={cert.title + i}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group relative glass-card p-6 flex flex-col items-start text-left cursor-pointer overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

            {/* Icon */}
            <div className="relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 flex items-center justify-center text-xl border border-accent-purple/10 group-hover:border-accent-purple/30 transition-all duration-300">
              <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent font-bold">
                {cert.title.charAt(0)}
              </span>
            </div>

            {/* Content */}
            <div className="relative flex-1 min-w-0 w-full">
              <h3 className="font-semibold text-sm mb-1.5 text-text-primary group-hover:text-accent-cyan transition-colors duration-300 line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-text-muted text-xs mb-3">{cert.org}</p>
              <div className="flex items-center justify-end">
                <span className="flex items-center gap-1 text-[11px] font-semibold text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                  View <FiExternalLink size={12} />
                </span>
              </div>
            </div>

            {/* Bottom border gradient on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.a>
        ))}
      </div>

      {/* Cross-check link */}
      <div className="text-center mt-8">
        <a
          href={linkedinProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent-cyan transition-colors duration-300"
        >
          <FiExternalLink size={12} />
          Verify all certifications on LinkedIn
        </a>
      </div>
    </section>
  );
}

