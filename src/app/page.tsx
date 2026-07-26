"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ShootingStars from "@/components/ShootingStars";
import GradientBlobs from "@/components/GradientBlobs";
import FloatingCodeSnippets from "@/components/FloatingCodeSnippets";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <ShootingStars />
      <GradientBlobs />
      <FloatingCodeSnippets />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <GitHubStats />
          <Contact />
        </main>
        <Footer />
      </div>

      <AIChatbot />
    </>
  );
}
