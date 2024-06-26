"use client";

import Image from "next/image";
import Navlink from "./NavLink";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
function HeroSection() {
  return (
    <section id="heroSection" className="snap-start md:pb-24 md:pt-[100px]">
      <div className="h-screen md:h-auto relative flex flex-col items-center justify-center text-center overflow-hidden space-y-12">
        <div className="absolute top-32 md:relative md:top-0 md:mt-3">
          <Link
            href="https://drive.google.com/file/d/1BgZGyNQ0Ftb0hSSXGGhOl9TdfIyAW7kH/view?usp=drive_link"
            target="_blank"
            className="border border-[#33353F] transition-all font-extralight rounded-lg px-5 py-3 hover:bg-[#18191E]"
          >
            Download Cv
          </Link>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-56 h-56 bg-slate-300 rounded-full  shadow-2xl mb-16 shadow-gray-100 animate-pulse absolute top-12"></div>
        </div>
        <Image
          style={{ clipPath: "circle()" }}
          className=" transition-all hover:scale-110  top-1/4"
          alt="cartoon-programmer"
          src={"/images/cartoon-programmer.avif"}
          width={350}
          height={350}
        />

        <div className="container flex flex-col items-center ">
          <h2 className="uppercase tracking-[12px] text-sm">
            FULL-STACK DEVELOPER
          </h2>
          <h1 className="text-2xl md:text-5xl text-[#57d6a5] font-semibold mt-4">
            <TypeAnimation
              sequence={[
                "Hello, you can call me Kobby",
                1000,
                "< I'm a Software Engineer />",
                1000,
                "< A Web Developer />",
                1000,
                "< And a UI/UX Designer />",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <nav className="mt-12 md:mb-2">
            <ul className="flex flex-row flex-wrap item-center justify-center gap-4 sm:gap-8">
              <li>
                <Navlink text={"About"} href="#about" />
              </li>
              <li>
                <Navlink text={"Skills"} href="#skills" />
              </li>
              <li>
                <Navlink text={"Projects"} href="#projects" />
              </li>

              <li className="">
                <Navlink text={"Contact"} href="#contact" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
