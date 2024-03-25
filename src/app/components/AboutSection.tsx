"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function AboutSection() {
  return (
    <section id="about" className="snap-start md:pb-16">
      <div className="h-screen md:h-auto container px-6 md:px-12 mx-auto">
        <div className="relative">
          <div className="absolute md:relative w-full top-[95px] md:top-0 flex justify-center">
            <h2 className="text-2xl md:text-3xl tracking-widest font-semibold opacity-70">
              About Me
            </h2>
          </div>
        </div>
        <div className="w-full md:h-full md:py-24 relative top-[130px] md:top-0 flex items-center flex-col md:flex-row sm:justify-center md:gap-12">
          <Image
            className="hidden md:block"
            src={"/images/about-section-image-2.jpg"}
            alt="About me section image"
            width={300}
            height={200}
          />

          <Image
            style={{ clipPath: "circle()" }}
            className="md:hidden transition-all hover:scale-110"
            src={"/images/about-section-image-2.jpg"}
            alt="About me section image"
            width={200}
            height={150}
          />

          <div className="flex md:mt-0 flex-col  justify-start ">
            <h3 className="sm:text-2xl font-semibold mb-3 sm:mb-4">
              A LITTLE <span className="text-[#57d6a5] ">INTRODUCTION:</span>
            </h3>
            <p className=" mb-2  md:text-lg font-medium lg:text-xl">
              Hi, I&apos;m{" "}
              <TypeAnimation
                sequence={[1500, "Ampofo Twumasi", 500, " "]}
                wrapper="span"
                style={{ color: "#57d6a5" }}
                repeat={Infinity}
              />
            </p>
            <p className="font-light text-justify text-sm sm:text-base lg:text-xl">
              As as seasoned full-stack web developer, I bring over 5 years of
              diverse experience across projects of varying scales. My toolkit
              encompasses a wide array of technologies, including JavaScript,
              Python, Java, Node.js, MongoDB, MySQL and Git. I thrive on
              utilizing frameworks like React, Express and Next.js to craft
              elegant solutions. Embracing a philosophy of continuous learning
              and self-improvement, I view each challenge as an opportunity for
              creative problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
