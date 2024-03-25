"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ ProjectSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import ScrollTopButton from "./components/ScrollTopButton";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
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
        <div className="h-screen  snap-y md:snap-none snap-mandatory z-0 scroll-smooth overflow-y-scroll overflow-x-hidden">
          <Header />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
          <ScrollTopButton />
        </div>
      ) : (
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <div className="max-w-md shadow-2xl rounded-lg">
            <h1 className="font-medium text-xl p-3 bg-[#121212]">
              Please rotate to portrait
            </h1>
            <div className="flex justify-center items-center text-black p-2 bg-white gap-4">
              <span className="px-4 shadow-lg p-2 items-center justify-center">
                <ScreenRotationAltIcon fontSize="large" />
              </span>

              <p className="text-base text-left font-normal">
                This app is optimized for portrait mode, to have the best mobile
                experience{" "}
                <span className="text-[#57d6a5]">
                  please rotate to portrait.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
