"use client";

import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line" />
      </div>
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 glass-card p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">B.Tech Computer Science Student</h3>
          <p className="text-text-secondary text-base leading-relaxed mb-8">{personalInfo.bio}</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-accent-purple/5 border border-accent-purple/10">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-[1px] text-text-muted font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "College", value: personalInfo.college },
              { label: "Branch", value: personalInfo.branch },
              { label: "Year", value: personalInfo.year },
              { label: "Location", value: personalInfo.location },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-lg bg-accent-purple/3 border border-accent-purple/8 text-sm text-text-secondary">
                <div className="text-[11px] font-semibold text-text-primary mb-1">{item.label}</div>
                {item.value}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 glass-card p-8 md:p-10">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-accent-purple">&#9670;</span> Contributions
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-accent-purple/3 border-l-2 border-accent-purple/30">
              <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-lg flex-shrink-0">🎯</div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm">UI/UX Design Improvements</h4>
                <p className="text-text-muted text-xs mt-0.5">Enhancing user interfaces for better experiences</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-accent-purple/3 border-l-2 border-accent-purple/30">
              <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-lg flex-shrink-0">💻</div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm">Frontend Development</h4>
                <p className="text-text-muted text-xs mt-0.5">Building responsive web applications</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-accent-purple/3 border-l-2 border-accent-purple/30">
              <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-lg flex-shrink-0">⚡</div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm">Feature Implementation</h4>
                <p className="text-text-muted text-xs mt-0.5">Adding new features to existing projects</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-accent-purple/3 border-l-2 border-accent-purple/30">
              <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-lg flex-shrink-0">🐛</div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm">Bug Fixing & Testing</h4>
                <p className="text-text-muted text-xs mt-0.5">Debugging and ensuring code quality</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-accent-purple/3 border-l-2 border-accent-purple/30">
              <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-lg flex-shrink-0">📝</div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm">Documentation & GitHub Management</h4>
                <p className="text-text-muted text-xs mt-0.5">Maintaining clean repos and documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
