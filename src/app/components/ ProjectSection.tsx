"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

function ProjectSection() {
  return (
    <section id="projects" className="snap-start md:snap-none md:pb-16">
      <div className="h-screen md:h-auto relative flex flex-col container px-4 md:px-4 mx-auto">
        <div className=" w-full absolute top-[95px] md:top-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl tracking-widest font-semibold opacity-70">
            Projects
          </h2>
        </div>

        <div className="w-full relative top-[150px] md:top-0 flex flex-row overflow-y-hidden overflow-x-scroll snap-x md:pt-24 md:mb-16">
          {/*first project */}
          <div className="snap-center w-full relative flex space-y-6 md:space-y-8 flex-col flex-shrink-0 items-center ">
            <div className="project-slide flex items-center flex-col">
              <Link href="https://github.com/kobbyMens/survey-app/tree/master">
                <Image
                  className="hidden md:block"
                  src={"/images/projects/survey-lg.png"}
                  width={800}
                  height={350}
                  alt="Survey app image"
                />
              </Link>

              <Link href="https://github.com/kobbyMens/survey-app/tree/master">
                <Image
                  className="block md:hidden"
                  src={"/images/projects/survey-app-small.png"}
                  width={300}
                  height={400}
                  alt="Survey app image"
                />
              </Link>

              <h3 className="mt-4 tracking-widest text-base sm:text-lg md:text-xl">
                PROJECT 1/3 :{" "}
                <TypeAnimation
                  sequence={[1500, " FREE SURVEY", 500, " "]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </h3>
            </div>

            <div className="libraries-logo-container flex justify-around items-center w-full">
              <Image
                src={"/images/skills-logos/react-js.png"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="react.js logo"
              />
              <Image
                src={"/images/skills-logos/typescript-logo.webp"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="react.js logo"
              />
              <Image
                src={"/images/skills-logos/node-js.webp"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="nodejs logo"
              />
              <Image
                src={"/images/skills-logos/redux.svg"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="redux logo"
              />
              <Image
                src={"/images/skills-logos/mongoDB-logo.webp"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="mongoDB logo"
              />
            </div>

            <p className="project-description text-sm md:text-base lg:text-center text-justify p-2">
              Free Survey App enables users to create survey primary through a
              drag and drop interface. The app utilizes technologies such as
              React.js, Redux and Typescript for the front-end. The main
              back-end technologies used are express.js and mongoDB.
            </p>
          </div>

          {/* Project 2*/}
          <div className="snap-center w-full relative flex space-y-6 md:space-y-8 flex-col flex-shrink-0 items-center ">
            <div className="project-slide flex items-center flex-col">
              <Link href="https://www.cedijob.com/" target="_blank">
                <Image
                  className="hidden md:block"
                  src={"/images/projects/cedijob-lg.png"}
                  width={800}
                  height={350}
                  alt="Survey app image"
                />
              </Link>

              <Link href="https://www.cedijob.com/" target="_blank">
                <Image
                  className="block md:hidden"
                  src={"/images/projects/cedijob-app-small.png"}
                  width={300}
                  height={400}
                  alt="Survey app image"
                />
              </Link>

              <h3 className="mt-4 tracking-widest text-base sm:text-lg md:text-xl">
                PROJECT 2/3 :{" "}
                <TypeAnimation
                  sequence={[1500, " CEDIJOB", 500, " "]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </h3>
            </div>

            <div className="libraries-logo-container flex justify-around items-center w-full">
              <Image
                src={"/images/skills-logos/mysql-logo-1.png"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="react.js logo"
              />
              <Image
                src={"/images/skills-logos/javascript-logo-2.webp"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="react.js logo"
              />
              <Image
                src={"/images/skills-logos/node-js.webp"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="nodejs logo"
              />
            </div>

            <p className="project-description text-sm md:text-base lg:text-center text-justify px-2">
              Cedijob is a web app that gives users the ability to hire clients
              or sell their service to clients. This app utilizises technologies
              such as PHP, Node.js, Javascript and MySQL. Paystack is utilized
              for payment services while Digital Ocean is used for hosting of
              images.
            </p>
          </div>

          {/* Project 3*/}
          <div className="snap-center w-full relative flex space-y-6 md:space-y-8 flex-col flex-shrink-0 items-center ">
            <div className="project-slide flex items-center flex-col">
              <Link href="https://github.com/kobbyMens/twumasi-portfolio">
                <Image
                  className="hidden md:block"
                  src={"/images/projects/portfolio-app-lg.png"}
                  width={800}
                  height={350}
                  alt="Survey app image"
                />
              </Link>

              <Link href="https://github.com/kobbyMens/twumasi-portfolio">
                <Image
                  className="block md:hidden"
                  src={"/images/projects/portfolio-app-sm.png"}
                  width={300}
                  height={400}
                  alt="Survey app image"
                />
              </Link>

              <h3 className="mt-4 tracking-widest text-base sm:text-lg md:text-xl">
                PROJECT 3/3 :{" "}
                <TypeAnimation
                  sequence={[1500, " PORTFOLIO APP", 500, " "]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </h3>
            </div>

            <div className="libraries-logo-container flex justify-around items-center w-full">
              <Image
                src={"/images/skills-logos/react-js.png"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="react.js logo"
              />
              <Image
                src={"/images/skills-logos/typescript-logo.webp"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="react.js logo"
              />
              <Image
                src={"/images/skills-logos/node-js.webp"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="nodejs logo"
              />
              <Image
                src={"/images/skills-logos/redux.svg"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="redux logo"
              />
              <Image
                src={"/images/skills-logos/mongoDB-logo.webp"}
                className="w-8 h-8 md:w-14 md:h-14"
                width={50}
                height={50}
                alt="mongoDB logo"
              />
            </div>

            <p className="project-description text-sm md:text-base lg:text-center text-justify px-2">
              This is portfolio website for a web developer. It was built with
              Next.js and tailwindcss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
