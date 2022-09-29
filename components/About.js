import React from 'react'
import Image from "next/image";
import webdev from "../public/assets/webdev.jpeg"

const About = () => {
  return (
    <div
      id="about"
      className=" w-full md:h-screen p-2 flex items-center py-16 dark:bg-gray-800 dark:border-gray-700 transition duration-300"
    >
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#15aae0] ">
            About
          </p>
          <h2 className=" py-4 tracking-tight dark:text-white ">
            Qui suis-je ?
          </h2>
          <p className=" py-4 text-gray-600 tracking-tight dark:text-gray-400">
            Après avoir passé quelques années en tant que graphiste, j'ai choisi
            de poursuivre mon apprentissage dans le développement web. En 2021
            j'ai réalisé une formation de Développeur web & web mobile, après
            laquelle j'ai décidé de me spécialiser dans le Front-End.
          </p>
          <p className=" py-4 text-gray-600  tracking-tight dark:text-gray-400">
            Actuellement en tant que Développeur Freelance, je réalise des
            portfolios, landing page ainsi que des e-commerce. Je suis
            spécialisé sur React Js / Next JS ainsi que WordPress.
          </p>
          <p className=" py-4 text-gray-600 underline cursor-pointer  tracking-tight dark:text-gray-400">
            N'hésitez pas à regarder mes derniers projets réalisés.
          </p>
        </div>
        <div className=" w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={webdev}
            alt="image computer"
            width="500"
            height="800"
          />
        </div>
      </div>
    </div>
  );
}

export default About