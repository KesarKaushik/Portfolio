"use client";

import { projects as projectsData } from "@/lib/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Some of the work I've built</p>
        <div className="section-line" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => {
          const hasLinks = project.github || project.demo;
          return (
            <div key={project.title} className="group relative glass-card overflow-hidden rounded-2xl">
              <div className={"h-2 bg-gradient-to-r " + project.gradient} />
              {project.badge && (
                <span className={"absolute top-4 right-4 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full text-white " + (project.badge === "Currently Building" || project.badge === "Going On" ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-gradient-to-r from-amber-500 to-rose-500")}>
                  {project.badge}
                </span>
              )}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              <div className="p-6 md:p-8">
                <div className="text-3xl mb-4">{project.icon}</div>
                <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[11px] font-medium rounded-full bg-accent-purple/8 border border-accent-purple/15 text-accent-cyan">{tag}</span>
                  ))}
                </div>
                {hasLinks && (
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-accent-purple/20 text-white border border-white/10 hover:border-accent-purple/30 transition-all duration-300">
                        <FiGithub size={14} /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-accent-purple to-accent-cyan text-white hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300">
                        <FiExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

