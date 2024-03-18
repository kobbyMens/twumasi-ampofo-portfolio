"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function AboutSection() {
  return (
    <section id="about" className="snap-start">
      <div className="h-screen container px-6 md:px-12 mx-auto">
        <div className="relative w-full ">
          <div className="absolute w-full top-[95px] md:top-[90px] flex justify-center">
            <h2 className="text-2xl md:text-3xl tracking-widest font-semibold opacity-70">
              About Me
            </h2>
          </div>
        </div>
        <div className="w-full h-full flex items-center flex-col md:flex-row justify-center md:gap-12">
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

          <div className="flex mt-2 md:mt-0 flex-col  justify-start ">
            <h3 className="sm:text-2xl font-bold mb-4">
              A LITTLE <span className="text-[#57d6a5] ">INTRODUCTION:</span>
            </h3>
            <p className=" mb-4 md:text-lg lg:text-xl">
              Hi, I&apos;m{" "}
              <TypeAnimation
                sequence={[1500, "Ampofo Twumasi", 500, " "]}
                wrapper="span"
                style={{ color: "#57d6a5" }}
                repeat={Infinity}
              />
            </p>
            <p className="font-sans font-light text-justify text-sm sm:text-base md:text-lg lg:text-xl">
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
