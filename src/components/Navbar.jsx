import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import coding1 from "../assets/coding1.png";

const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center gap-4 justify-center">
        <img className="w-7" src={coding1} alt="" />
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
          Abdelrahman Aljabali
        </span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/abdelrahman-aljabali-384823282/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/abdelrahman-aljabali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/abood_aljbale/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
