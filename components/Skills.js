import React from "react";
import Image from "next/image";
import htmlLogo from "../public/assets/skills/html.png"
import cssLogo from "../public/assets/skills/css.png"
import jsLogo from "../public/assets/skills/javascript.png"
import reactLogo from "../public/assets/skills/react.png"
import nextLogo from "../public/assets/skills/nextjs.png"
import wpLogo from "../public/assets/skills/wordpress.png"
import tailwindLogo from "../public/assets/skills/tailwind.png"
import githubLogo from "../public/assets/skills/github1.png";


const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full lg:h-screen p-2 dark:bg-gray-800 dark:border-gray-700 transition duration-300"
    >
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#15aae0]">
          Skills
        </p>
        <h2 className="py-4 tracking-tight dark:text-white">
          Mes technologies
        </h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 tracking-tight dark:text-white">
          <div className=" shadow-lg shadow-gray-400 p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto ">
                <Image src={htmlLogo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-gray-400 p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={cssLogo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-gray-400 p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={jsLogo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-gray-400 p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={reactLogo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React JS</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-gray-400 p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={nextLogo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-gray-400 p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={wpLogo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>WordPress</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-gray-400 p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={tailwindLogo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-gray-400 p-6 rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={githubLogo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
