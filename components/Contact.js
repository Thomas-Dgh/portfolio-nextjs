import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail, AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp, HiPaperAirplane } from "react-icons/hi";
import contactImg from "../public/assets/contact/contactImg.jpg";

const Contact = () => {

  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {
      fullname,
      phone,
      subject,
      email,
      message,
    };

    setSubmitted(true);

   
    fetch("api/sendgrid", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          setSubmitted(false);
          setFullname("");
          setPhone("");
          setEmail("");
          setSubject("");
          setMessage("");
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch((e) => console.log(e));;
  }

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
              <form action="submit" method="POST" onSubmit={handleOnSubmit}>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2 -">
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2">
                      Nom / Prénom
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                      className="border-2 rounded-lg p-3 flex border-grey-300 tracking-tight dark:bg-gray-600 text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Téléphone</label>
                    <input
                      type="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="border-2 rounded-lg p-3 flex border-grey-300  tracking-tight dark:bg-gray-600 text-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="border-2 rounded-lg p-3 flex border-grey-300  tracking-tight dark:bg-gray-600 text-white"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Objet</label>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    className="border-2 rounded-lg p-3 flex border-grey-300  tracking-tight dark:bg-gray-600 text-white"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="border-2 rounded-lg p-3 flex border-grey-300  tracking-tight dark:bg-gray-600 text-white"
                    rows="7"
                  />
                </div>
                <button
                  type="submit"
                  isLoading={submitted}
                  loadingText="Submitting"
                  className=" w-full p-4 text-gray-100 mt-4 "> Envoyer le
                  message
                </button>
                {/* <div className="text-left duration-300  tracking-tight dark:bg-gray-800">
                  {showSuccessMessage && (
                    <p className="text-green-500 font-semibold text-sm my-2">
                      Merci! Le message a bien été envoyé.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className="text-red-500">
                      Oops! Il y a une erreur quelque part..
                    </p>
                  )}
                </div> */}
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
        <div className="w-full duration-300  tracking-tight dark:bg-gray-800">
          <p className="mt-5 mb-[-13%] flex justify-center items-center flex-row text-gray-500 tracking-tight dark:text-white ">
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
