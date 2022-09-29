import Image from "next/image";
import React from "react";
import ferme from "../public/assets/projects/ferme.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const basseTouligny = () => {
  return (
    <div className="w-full h-screen dark:bg-gray-800 dark:border-gray-700 transition duration-300">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ferme}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">La Basse Touligny</h2>
          <h3>WordPress</h3>
        </div>
      </div>

      <div className="max-w-[1240px]  mx-auto p-2 grid md:grid-cols-5 gap-8 py-8  dark:bg-gray-800 dark:border-gray-700 transition duration-300">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#15aae0]">
            Projet
          </p>
          <h2 className="tracking-tight dark:text-white">Résumé</h2>
          <p className="mt-2  tracking-tight dark:text-gray-400">
            Création d'un site vitrine pour une ferme agricole située au coeur
            des Ardennes.
            <br />
            Le site a pour objectif de faciliter l'organisation et la mise en
            place du calendrier des colis de viandes.
          </p>
          {/* <a
            href="https://github.com/fireclint/netflix-react-tailwind"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://fireclint.github.io/netflix-react-tailwind/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2 tracking-tight dark:text-white">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center tracking-tight dark:text-white">
                <RiRadioButtonFill className="pr-1 " /> WordPress
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer tracking-tight dark:text-white">
            Retour
          </p>
        </Link>
      </div>
    </div>
  );
};

export default basseTouligny;
