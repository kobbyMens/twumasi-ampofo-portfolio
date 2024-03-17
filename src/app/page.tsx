import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ ProjectSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import ScrollTopButton from "./components/ScrollTopButton";
export default function Home() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory z-0 scroll-smooth overflow-scroll">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        <ScrollTopButton />
      </div>
    </>
  );
}
