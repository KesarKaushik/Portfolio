"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById("toast");
      const msg = document.getElementById("toast-message");
      if (toast && msg) {
        msg.textContent = label + " copied!";
        toast.classList.add("show");
        clearTimeout((toast as any)._timer);
        (toast as any)._timer = setTimeout(() => toast.classList.remove("show"), 2500);
      }
    });
  };

  const contactCards = [
    { Icon: FiMail, label: "Email", value: personalInfo.email, copy: personalInfo.email },
    { Icon: FiGithub, label: "GitHub", value: "github.com/KesarKaushik", copy: personalInfo.github },
    { Icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/kesar-kaushik", copy: personalInfo.linkedin },
    { Icon: FiMapPin, label: "Location", value: personalInfo.location },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">Have a question or want to work together? Send me a message.</p>
        <div className="section-line" />
      </div>
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          {[
            { id: "name", label: "Your Name", type: "text" },
            { id: "email", label: "Email Address", type: "email" },
            { id: "subject", label: "Subject", type: "text" },
          ].map((field) => (
            <div key={field.id} className="relative">
              <input id={field.id} type={field.type} value={formData[field.id as keyof typeof formData]} onChange={(e) => setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))} placeholder=" " className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-lg text-sm text-text-primary outline-none focus:border-accent-purple/50 transition-all duration-300" />
              <label htmlFor={field.id} className="absolute left-4 top-4 text-text-muted text-sm peer-focus:text-[11px] peer-focus:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:top-2 transition-all duration-300">{field.label}</label>
            </div>
          ))}
          <div className="relative">
            <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))} placeholder=" " className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-lg text-sm text-text-primary outline-none focus:border-accent-purple/50 transition-all duration-300 resize-none" />
            <label htmlFor="message" className="absolute left-4 top-4 text-text-muted text-sm peer-focus:text-[11px] peer-focus:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:top-2 transition-all duration-300">Your Message</label>
          </div>
          <button type="submit" className="w-full py-3.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-accent-purple to-accent-cyan text-white hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
            <FiSend size={15} />
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </motion.form>
        <div className="grid grid-cols-2 gap-4 content-start">
          {contactCards.map((card, i) => (
            <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} onClick={() => card.copy && handleCopy(card.copy, card.label)} className="glass-card p-5 text-center group cursor-pointer hover:-translate-y-1 transition-all duration-300">
              <card.Icon size={22} className="mx-auto mb-3 text-accent-purple group-hover:text-accent-cyan group-hover:scale-110 transition-all duration-300" />
              <h3 className="font-semibold text-xs mb-1">{card.label}</h3>
              <p className="text-text-muted text-[11px] leading-relaxed">{card.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}