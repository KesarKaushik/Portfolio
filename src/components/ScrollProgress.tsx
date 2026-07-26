"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[99999]">
      <div
        className="h-full bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

