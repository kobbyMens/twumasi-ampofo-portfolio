"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ ProjectSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import ScrollTopButton from "./components/ScrollTopButton";
import { useEffect, useState } from "react";
export default function Home() {
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    const handleOrientationChange = () => {
      const newOrientation =
        window.innerWidth > window.innerHeight ? "landscape" : "portrait";
      setOrientation(newOrientation);
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);
  return (
    <>
      {orientation === "portrait" ? (
        <div className="h-screen snap-y snap-mandatory z-0 scroll-smooth overflow-y-scroll overflow-x-hidden">
          <Header />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
          <ScrollTopButton />
        </div>
      ) : (
        <div>
          <p>This app is only optimized for portrait, rotate back portrait.</p>
        </div>
      )}
    </>
  );
}
