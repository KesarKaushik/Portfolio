"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function GitHubStats() {
  const statsCards = [
    {
      title: "Total Repositories",
      value: "12+",
      desc: "Active repositories with diverse projects",
      gradient: "from-accent-purple to-accent-cyan",
    },
    {
      title: "Contributions",
      value: "50+",
      desc: "Code commits and contributions",
      gradient: "from-accent-cyan to-accent-pink",
    },
  ];

  return (
    <section id="github" className="section-padding">
      <div className="section-header">
        <h2>GitHub Stats</h2>
        <p className="section-subtitle">My open source journey</p>
        <div className="section-line" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
        {statsCards.map((card, i) => (
          <div key={i} className="glass-card p-6 md:p-8 text-center group">
            <div className={"inline-block text-4xl font-black bg-gradient-to-r " + card.gradient + " bg-clip-text text-transparent mb-2"}>
              {card.value}
            </div>
            <h3 className="font-semibold text-sm mb-1">{card.title}</h3>
            <p className="text-text-muted text-xs">{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a
          href="https://github.com/KesarKaushik"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-accent-purple/20 text-white border border-white/10 hover:border-accent-purple/30 transition-all duration-300"
        >
          <FiGithub size={14} /> View on GitHub
        </a>
      </div>
    </section>
  );
}

