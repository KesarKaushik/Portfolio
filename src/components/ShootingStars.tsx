"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  opacity: number;
  size: number;
}

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    let shootingStars: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create static stars
    const starCount = Math.min(200, Math.floor((canvas.width * canvas.height) / 5000));
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random(),
        opacity: Math.random() * 0.5 + 0.1,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    let lastShootingStar = 0;

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw static stars
      for (const star of stars) {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Spawn shooting stars
      if (timestamp - lastShootingStar > 3000 + Math.random() * 4000) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.8 + canvas.width * 0.2,
          y: Math.random() * canvas.height * 0.3,
          speed: 6 + Math.random() * 4,
          length: 80 + Math.random() * 120,
          opacity: 1,
        });
        lastShootingStar = timestamp;
      }

      // Draw and update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x -= s.speed;
        s.y += s.speed * 0.6;
        s.opacity -= 0.008;
        s.speed *= 0.98;

        if (s.opacity <= 0 || s.x < -100 || s.y > canvas.height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        const gradient = ctx.createLinearGradient(
          s.x, s.y,
          s.x - s.length * 0.7, s.y + s.length * 0.7
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
        gradient.addColorStop(0.3, `rgba(139, 92, 246, ${s.opacity * 0.6})`);
        gradient.addColorStop(0.6, `rgba(6, 182, 212, ${s.opacity * 0.3})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length * 0.7, s.y + s.length * 0.7);
        ctx.stroke();

        // Bright head
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity * 0.9})`;
        ctx.shadowColor = `rgba(139, 92, 246, ${s.opacity * 0.5})`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

