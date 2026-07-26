"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiX, FiMessageSquare, FiVolume2, FiVolumeX } from "react-icons/fi";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const responses: Record<string, string> = {
  hello: "Hi! I'm Kesar's AI assistant. How can I help you today?",
  hi: "Hello! Feel free to ask me about Kesar's skills, projects, or experience.",
  skills: "Kesar is skilled in HTML5, CSS3, JavaScript, Python, SQL, Git, GitHub, and Responsive Design. She's also learning AI and Machine Learning!",
  projects: "Kesar has built several projects including Pro Resume Builder (Python/Tkinter), VibeFlow Music Player, and this very portfolio website!",
  experience: "Kesar is a B.Tech CSE student at NIET Greater Noida, currently in her second year. She has hands-on experience in frontend and Python development through internships.",
  education: "Kesar is pursuing B.Tech in Computer Science Engineering at NIET Greater Noida (Second Year).",
  contact: "You can reach Kesar at kesharkaushik5@gmail.com or connect on LinkedIn/GitHub.",
  github: "Kesar's GitHub: https://github.com/KesarKaushik",
  linkedin: "Kesar's LinkedIn: https://www.linkedin.com/in/kesar-kaushik-880b0b3b5",
  resume: "You can download Kesar's resume from the hero section of this portfolio.",
  certificates: "Kesar has 8+ certificates in Python, Cyber Security, Web Development, AI, and more from NeoColabs, Cisco, and other platforms.",
};

const defaultResponse = "I'm not sure about that. Feel free to ask about Kesar's skills, projects, experience, education, contact info, or anything else!";

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(responses)) {
    if (lower.includes(key)) return response;
  }
  return defaultResponse;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Kesar's AI assistant. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const femaleVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Initialize speech synthesis and load voices
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;

      const loadVoices = () => {
        const voices = synthRef.current!.getVoices();
        // Prefer female voices: Microsoft Zira, Samantha, Google US English female, or fallback
        const femaleVoice =
          voices.find((v) => v.name.includes("Zira")) ||
          voices.find((v) => v.name.includes("Samantha")) ||
          voices.find((v) => v.name.includes("Female") && v.lang.startsWith("en")) ||
          voices.find((v) => v.lang.startsWith("en-US") && v.name.includes("Google")) ||
          voices.find((v) => v.lang.startsWith("en-US")) ||
          voices.find((v) => v.lang.startsWith("en")) ||
          null;
        femaleVoiceRef.current = femaleVoice;
      };

      loadVoices();
      // Chrome loads voices asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Speak AI response
  const speak = (text: string) => {
    if (!synthRef.current || isMuted) return;

    // Cancel any ongoing speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    if (femaleVoiceRef.current) {
      utterance.voice = femaleVoiceRef.current;
    }

    synthRef.current.speak(utterance);
  };

  // Stop speech
  const stopSpeech = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = getResponse(input);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
      speak(response);
    }, 800 + Math.random() * 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[9998] w-14 h-14 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan text-white shadow-xl shadow-accent-purple/30 flex items-center justify-center cursor-pointer"
        aria-label="Open AI Chatbot"
      >
        <FiMessageSquare size={22} />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-24 right-6 z-[9998] w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] glass-card flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-accent-purple/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan flex items-center justify-center text-white text-xs font-bold">
                  AI
                </div>
                <div>
                  <h3 className="text-sm font-semibold">AI Assistant</h3>
                  <p className="text-[10px] text-text-muted">Powered by Kesar</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Mute/Unmute TTS */}
                <button
                  onClick={() => {
                    setIsMuted((prev) => !prev);
                    if (!isMuted) stopSpeech();
                  }}
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent-cyan transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute voice" : "Mute voice"}
                  title={isMuted ? "Unmute voice" : "Mute voice"}
                >
                  {isMuted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <FiX size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-accent-purple to-accent-cyan text-white rounded-br-md"
                        : "glass text-text-secondary rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass p-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-accent-purple animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-accent-cyan animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <span className="w-2 h-2 rounded-full bg-accent-pink animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-text-primary text-sm outline-none focus:border-accent-purple/50 transition-all placeholder:text-text-muted"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white disabled:opacity-40 transition-all cursor-pointer"
                  aria-label="Send"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
