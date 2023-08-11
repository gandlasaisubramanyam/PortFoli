import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#0a192f]">
      <div className="w-full flex justify-center items-center">
        <a
          className="text-gray-300 px-3 hover:text-blue-600"
          href="https://www.linkedin.com/in/gandla-sai-0302ba213/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          className="text-gray-300 px-3 hover:text-gray-600"
          href="https://github.com/gandlasaisubramanyam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <div className="p-5">
        <p className="text-center text-xl text-gray-200 font-bold">
          Copyright © 2023 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;