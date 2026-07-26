"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<{ x: number; y: number; alpha: number; size: number }[]>([]);
  const animationIdRef = useRef<number>(0);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive = target.closest(
      'a, button, .btn, .glass-card, .project-card, .cert-item, .skill-card, .contact-card, input, textarea, select'
    );
    if (cursorRef.current) {
      cursorRef.current.classList.toggle("scale-150", !!isInteractive);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === "undefined") return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let isAnimating = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      trailRef.current.push({
        x: mouseX + (Math.random() - 0.5) * 10,
        y: mouseY + (Math.random() - 0.5) * 10,
        alpha: 0.6,
        size: Math.random() * 3 + 1.5,
      });
      if (trailRef.current.length > 25) trailRef.current.shift();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    const animate = () => {
      if (!isAnimating) return;
      
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const trail = trailRef.current;
      for (let i = 0; i < trail.length; i++) {
        trail[i].alpha -= 0.025;
        trail[i].x += (Math.random() - 0.5) * 0.5;
        trail[i].y += (Math.random() - 0.5) * 0.5;
      }

      const activeTrail = trail.filter((t) => t.alpha > 0);
      trailRef.current = activeTrail;

      for (let i = 0; i < activeTrail.length; i++) {
        const t = activeTrail[i];
        const alpha = Math.max(0, t.alpha);

        // Glow
        const gradient = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, t.size * 5);
        gradient.addColorStop(0, `rgba(139, 92, 246, ${alpha * 0.3})`);
        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${alpha * 0.15})`);
        gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size * 5, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.shadowColor = `rgba(139, 92, 246, ${alpha})`;
        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
        ctx.fill();

        // Sparkle cross
        ctx.shadowBlur = 5;
        ctx.globalAlpha = alpha * 0.4;
        ctx.strokeStyle = "rgba(200, 220, 255, 0.4)";
        ctx.lineWidth = 0.5;
        const cs = t.size * 3;
        ctx.beginPath();
        ctx.moveTo(t.x - cs, t.y);
        ctx.lineTo(t.x + cs, t.y);
        ctx.moveTo(t.x, t.y - cs);
        ctx.lineTo(t.x, t.y + cs);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isAnimating = false;
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleMouseOver]);

  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[999999] mix-blend-screen transition-all duration-150"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[999998]"
      />
    </>
  );
}
