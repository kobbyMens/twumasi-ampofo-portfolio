"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function ProjectSection() {
  return (
    <section id="projects" className="snap-start">
      <div className="h-screen relative flex flex-col container px-4 md:px-4 mx-auto">
        <div className=" w-full absolute top-[95px] md:top-[90px] flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl tracking-widest font-semibold opacity-70">
            Projects
          </h2>
        </div>

        <div className="w-full relative top-[150px] flex flex-row overflow-y-hidden overflow-x-scroll snap-x">
          {/*first project */}
          <div className="snap-center w-full relative flex space-y-6 md:space-y-8 flex-col flex-shrink-0 items-center ">
            <div className="project-slide flex items-center flex-col">
              <Image
                className="hidden md:block"
                src={"/images/projects/survey-app-large-3.png"}
                width={800}
                height={350}
                alt="Survey app image"
              />
              <Image
                className="block md:hidden"
                src={"/images/projects/survey-app-small.png"}
                width={300}
                height={400}
                alt="Survey app image"
              />
              <h3 className="mt-4 tracking-widest text-base sm:text-lg md:text-xl">
                PROJECT 1/4 :{" "}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
              enim vulputate, semper neque eu, facilisis arcu. Phasellus et dui
              fermentum, pretium urna eget, facilisis nulla. Suspendisse commodo
              at velit at cursus. Praesent ullamcorper eu enim at viverra
            </p>
          </div>

          {/* Project 2*/}
          <div className="snap-center w-full relative flex space-y-6 md:space-y-8 flex-col flex-shrink-0 items-center ">
            <div className="project-slide flex items-center flex-col">
              <Image
                className="hidden md:block"
                src={"/images/projects/cedijob-app-large.png"}
                width={800}
                height={350}
                alt="Survey app image"
              />
              <Image
                className="block md:hidden"
                src={"/images/projects/cedijob-app-small.png"}
                width={300}
                height={400}
                alt="Survey app image"
              />
              <h3 className="mt-4 tracking-widest text-base sm:text-lg md:text-xl">
                PROJECT 2/4 :{" "}
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
              <Image
                className="hidden md:block"
                src={"/images/projects/survey-app-large-3.png"}
                width={800}
                height={350}
                alt="Survey app image"
              />
              <Image
                className="block md:hidden"
                src={"/images/projects/survey-app-small.png"}
                width={300}
                height={400}
                alt="Survey app image"
              />
              <h3 className="mt-4 tracking-widest text-base sm:text-lg md:text-xl">
                PROJECT 2/4 :{" "}
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

            <p className="project-description text-sm md:text-base lg:text-center text-justify px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
              enim vulputate, semper neque eu, facilisis arcu. Phasellus et dui
              fermentum, pretium urna eget, facilisis nulla. Suspendisse commodo
              at velit at cursus. Praesent ullamcorper eu enim at viverra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
