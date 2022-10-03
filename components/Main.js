import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center dark:bg-gray-800 dark:border-gray-700 transition duration-300"
    >
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600">
            {/* phrase bienvenue ici  */}
          </p>
          <h1 className=" py-4 text-gray-700 tracking-tight dark:text-white">
            Salut, c'est <span className="text-[#15aae0]">Thomas</span>
          </h1>
          <h1 className=" py-2 text-gray-700 tracking-tight dark:text-white">
            Développeur Web
          </h1>
          <p className=" py-4 text-gray-600 max-w-[70%] m-auto tracking-tight dark:text-gray-400">
            Développeur Front-end spécialisé React JS / Next JS et WordPress
          </p>
          <div
            className=" flex items-center justify-between max-w-[330px] m-auto py-4 tracking-tight dark:text-white
          "
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://www.linkedin.com/in/thomas-dgh/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/Thomas-Dgh">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="/#contact">
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="/#about">
                <BsFillPersonFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
