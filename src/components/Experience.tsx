"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  const education = experiences.filter((exp) => exp.group === "education");
  const experience = experiences.filter((exp) => exp.group === "experience");

  return (
    <section id="experience" className="section-padding">
      <div className="section-header">
        <h2>Experience & Education</h2>
        <p className="section-subtitle">My academic journey and professional growth</p>
        <div className="section-line" />
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple/50 via-accent-cyan/30 to-transparent" />

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 ml-8 md:ml-0">
            <div className="w-10 h-10 rounded-full bg-accent-purple/15 flex items-center justify-center text-lg border border-accent-purple/20">
              🎓
            </div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">
              Education
            </h3>
          </div>
          <div className="space-y-10">
            {education.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.title + i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={"relative flex items-start gap-6 md:gap-8 " + (isLeft ? "md:flex-row" : "md:flex-row-reverse")}
                >
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-accent-purple border-4 border-dark -translate-x-1/2 mt-5 z-10" />
                  <div className={"ml-8 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-5 md:p-6 " + (isLeft ? "md:mr-auto" : "md:ml-auto")}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl">{exp.icon}</span>
                      <div>
                        <h3 className="font-semibold text-sm">{exp.title}</h3>
                        <p className="text-text-muted text-xs">{exp.org}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-2">{exp.description}</p>
                    {exp.isOngoing ? (
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                        Ongoing
                      </span>
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 ml-8 md:ml-0">
            <div className="w-10 h-10 rounded-full bg-accent-cyan/15 flex items-center justify-center text-lg border border-accent-cyan/20">
              💼
            </div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Experience
            </h3>
          </div>
<div className="space-y-10">
            {experience.map((exp, i) => {
              // Offset by education count so experience alternates opposite to last education entry
              const offsetIndex = education.length + i;
              const isLeft = offsetIndex % 2 === 0;
              return (
                <motion.div
                  key={exp.title + i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={"relative flex items-start gap-6 md:gap-8 " + (isLeft ? "md:flex-row" : "md:flex-row-reverse")}
                >
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-accent-cyan border-4 border-dark -translate-x-1/2 mt-5 z-10" />
                  <div className={"ml-8 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-5 md:p-6 " + (isLeft ? "md:mr-auto" : "md:ml-auto")}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl">{exp.icon}</span>
                      <div>
                        <h3 className="font-semibold text-sm">{exp.title}</h3>
                        <p className="text-text-muted text-xs">{exp.org}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-2">{exp.description}</p>
                    {exp.isOngoing ? (
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                        Ongoing
                      </span>
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

