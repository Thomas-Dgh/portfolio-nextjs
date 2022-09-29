import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import dghlogo from "../public/assets/dghlogo.png";
import ThemeToggler from "../pages/ThemeToggler";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [navBgDark, setNavBgDark] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#ecf0f3");
  const [linkColorDark, setLinkColorDark] = useState("#1f2937");
  const router = useRouter();


  useEffect(() => {

    if (
      (router.asPath === "/cyclic" ||
        router.asPath === "/combiloc" ||
        router.asPath === "/basseTouligny")
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
      setLinkColorDark("#ecf0f3");
      setNavBgDark("transparent");
    } else  {
      setLinkColorDark("#1f2937");
      setNavBg("#ecf0f3");
    }  
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-50 pb-3 pt-2 md:shadow-xl z-[100] md:bg-[#ecf0f3] md:dark:bg-[#1f2937] "
          : "fixed w-full h-50 z-[100] pt-2 "
      }
    >
      <div
        style={{ backgroundColor: `${(navBg, navBgDark)}` }}
        className="flex justify-between items-center w-full h-full pt-2 px-2 2xl:px-16 transition duration-300"
      >
        <Link href="/">
          <Image src={dghlogo} alt="logo" width="80" height="80" />
        </Link>
        <div>
          <ul
            style={{ color: `${(linkColor, linkColorDark)}` }}
            className=" hidden md:flex"
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b  tracking-tight  dark:text-white">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b tracking-tight  dark:text-white">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b tracking-tight  dark:text-white">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b tracking-tight  dark:text-white">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b tracking-tight  dark:text-white">
                Contact
              </li>
            </Link>
            <li>
              <ThemeToggler />
            </li>
          </ul>
          <div>
            <div className="flex">
              <div className="mr-5 md:hidden">
                <ThemeToggler />
              </div>
              <div
                onClick={handleNav}
                className=" md:hidden cursor-pointer dark:text-white"
              >
                <AiOutlineMenu size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500  dark:bg-gray-800 dark:border-gray-700 "
              : " fixed left-[-100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div>
            <div className="flex w-full items-center justify-between tracking-tight dark:text-white ">
              <Image src={dghlogo} width="150" height="125" alt="/" />

              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4  ">
              {/* <p className=" w-[85%] md:w-[90%] py-4">
               
              </p> */}
            </div>
          </div>

          <div className=" py-4 flex flex-col tracking-tight dark:text-white ">
            <ul className=" uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className=" uppercase tracking-widest text-[#15aae0]">
                Mes reseaux
              </p>
              <div
                className="flex items-center justify-between my-4 w-full
               sm:w-[80%]"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
