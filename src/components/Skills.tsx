"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";
import {
  SiHtml5,
  SiJavascript,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";
import { FaCss3Alt, FaCode, FaBrain, FaLightbulb, FaBug, FaTerminal } from "react-icons/fa";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  SiHtml5,
  SiCss3: FaCss3Alt,
  SiJavascript,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  // Fallback icons for new skills
  "VS Code": FaCode,
  "React / Next.js": FaCss3Alt,
  "AI-Assisted Development": FaBrain,
  "Prompt Engineering": FaLightbulb,
  "Rapid Prototyping": FaTerminal,
  "Debugging & Code Review": FaBug,
  "Git & GitHub": SiGithub,
};

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const fills = barsRef.current!.querySelectorAll(
            ".skill-fill"
          ) as NodeListOf<HTMLElement>;
          fills.forEach((fill: HTMLElement, index: number) => {
            const w = fill.getAttribute("data-width") || "0";
            setTimeout(() => {
              fill.style.width = w + "%";
            }, 200 + index * 80);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
        <div className="section-line" />
      </div>
      <div
        ref={barsRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon as string];
          return (
            <div
              key={skill.name}
              className="glass-card p-6 text-center group cursor-default"
            >
              <div className="text-3xl mb-3 text-accent-purple group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300 inline-block">
                {Icon && <Icon />}
              </div>
              <h3 className="text-sm font-semibold mb-3">{skill.name}</h3>
              <div className="h-1.5 bg-accent-purple/10 rounded-full overflow-hidden">
                <div
                  className="skill-fill h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan transition-all duration-1000 ease-out"
                  data-width={skill.level}
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
