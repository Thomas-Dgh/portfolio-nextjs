import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {HiOutlineChevronDoubleUp } from 'react-icons/hi'
import contactImg from "../public/assets/contact/contactImg.jpg";



const Contact = () => {
  return (
    <div
      id="contact"
      className=" w-full lg:h-screen  dark:bg-gray-800 dark:border-gray-700 transition duration-300"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className=" uppercase text-xl tracking-widest text-[#15aae0]">
          Contact
        </p>
        <h2 className="py-4 tracking-tight dark:text-white">Contactez-moi</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-2">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={contactImg}
                  alt="Picture of keyboard"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  width="3588"
                  height="1842"
                />
              </div>
              <div>
                <h2 className="py-2 tracking-tight dark:text-white">Thomas</h2>
                <p className=" py-4 tracking-tight dark:text-gray-400">
                  Développeur Front-End React JS / Next JS / WordPress
                </p>
                <p className=" py-4 tracking-tight dark:text-gray-400">
                  Disponible pour des missions de Freelance en remote.
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8 tracking-tight dark:text-white">
                  Mes reseaux sociaux
                </p>
                <div className="flex items-center justify-between py-4 tracking-tight dark:text-white">
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
          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 tracking-tight dark:text-white">
            <div className="p-4">
              <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2 -">
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2">
                      Nom / Prénom
                    </label>
                    <input
                      type="text"
                      required
                      className="border-2 rounded-lg p-3 flex border-grey-300 tracking-tight dark:bg-gray-600 text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Téléphone</label>
                    <input
                      type="phone"
                      required
                      className="border-2 rounded-lg p-3 flex border-grey-300  tracking-tight dark:bg-gray-600 text-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">E-mail</label>
                  <input
                    type="email"
                    required
                    className="border-2 rounded-lg p-3 flex border-grey-300  tracking-tight dark:bg-gray-600 text-white"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Objet</label>
                  <input
                    type="text"
                    required
                    className="border-2 rounded-lg p-3 flex border-grey-300  tracking-tight dark:bg-gray-600 text-white"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    required
                    className="border-2 rounded-lg p-3 flex border-grey-300  tracking-tight dark:bg-gray-600 text-white"
                    rows="7"
                  />
                </div>

                <button className=" w-full p-4 text-gray-100 mt-4 ">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300  tracking-tight dark:bg-gray-800">
              <HiOutlineChevronDoubleUp className=" text-[#15aae0]" size={30} />
            </div>
          </Link>
        </div>
        <div>
          <p className="mt-9 mb-[-13%] flex justify-center items-center flex-row text-gray-500 tracking-tight dark:text-white">
            Developped with&nbsp;
            <AiFillHeart className=" text-red-600 " />
            &nbsp;by Thomas DGH
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
