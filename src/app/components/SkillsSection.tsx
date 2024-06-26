"use client";

import SkillLogo from "./SkillLogo";
import { motion } from "framer-motion";
function SkillsSection() {
  return (
    <section id="skills" className="snap-start md:pb-16">
      <div className="h-screen md:h-auto relative  flex items-center flex-col justify-center container px-4 md:px-12 mx-auto">
        <div className="absolute md:relative top-[95px] md:top-0 flex flex-col items-center ">
          <h2 className="text-2xl md:text-3xl tracking-widest font-semibold opacity-70">
            My Skill Set
          </h2>

          <p className="text-base sm:text-lg mt-3 p-2 text-center">
            Some development tools I have used over the years as a
            <span className="text-[#57d6a5]"> full-stack developer</span>
          </p>
        </div>

        <motion.div
          initial={{ rowGap: "132px" }}
          whileInView={{ rowGap: "32px" }}
          transition={{ ease: "circIn", duration: 1 }}
          className=" grid grid-cols-4 sm:grid-cols-5 gap-8  lg:grid-cols-8 md:py-24"
        >
          <SkillLogo
            years={"7+"}
            imageSrc="/images/skills-logos/javascript-logo-2.webp"
          />
          <SkillLogo
            years={"5+"}
            imageSrc="/images/skills-logos/python-logo.png"
          />
          <SkillLogo
            years={"2+"}
            imageSrc="/images/skills-logos/tailwind-css-logo.jpg"
          />
          <SkillLogo
            years={"4+"}
            imageSrc="/images/skills-logos/mongoDB-logo.webp"
          />
          <SkillLogo years={"4+"} imageSrc="/images/skills-logos/redux.svg" />
          <SkillLogo
            years={"7+"}
            imageSrc="/images/skills-logos/node-js.webp"
          />
          <SkillLogo
            years={"4+"}
            imageSrc="/images/skills-logos/react-js.png"
          />
          <SkillLogo
            years={"8+"}
            imageSrc="/images/skills-logos/mysql-logo-1.png"
          />
          <SkillLogo
            years={"4+"}
            imageSrc="/images/skills-logos/express-logo.png"
          />
          <SkillLogo
            years={"2+"}
            imageSrc="/images/skills-logos/nextjs-logo.jpg"
          />
          <SkillLogo
            years="8+"
            imageSrc="/images/skills-logos/html5-logo.jpg"
          />
          <SkillLogo years="8+" imageSrc="/images/skills-logos/css3-logo.png" />
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
