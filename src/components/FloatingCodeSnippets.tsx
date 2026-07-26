"use client";

import { useEffect, useState } from "react";
import { floatingCodeSnippets } from "@/lib/data";

export default function FloatingCodeSnippets() {
  const [snippets, setSnippets] = useState<{ text: string; x: number; y: number; delay: number; duration: number; fontSize: number }[]>([]);

  useEffect(() => {
    const items = floatingCodeSnippets.map((text) => ({
      text,
      x: Math.random() * 80 + 5,
      y: Math.random() * 80 + 5,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 15,
      fontSize: 10 + Math.random() * 4,
    }));
    setSnippets(items);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {snippets.map((snippet, i) => (
        <div
          key={i}
          className="absolute font-mono text-white/5 whitespace-nowrap"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            fontSize: `${snippet.fontSize}px`,
            animation: `code-float ${snippet.duration}s linear ${snippet.delay}s infinite`,
          }}
        >
          {snippet.text}
        </div>
      ))}
    </div>
  );
}

