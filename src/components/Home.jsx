import React from "react";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h4 className="text-pink-600 text-2xl">Hi, my name is</h4>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
        Sai Subramanyam
        </h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a MERN Stack Developer.
        </h2>
        <h5 className="text-[#8892b0] text-2xl py-4 max-w-[700px]">
          Currently, I’m focused on building responsive full-stack web
          applications.
        </h5>
        <div className="rounded-md shadow">
          <button className="flex items-center justify-center w-50 p-4 text-base font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600">
            <a
              href="https://drive.google.com/file/d/1Q3Q6szGylVt-185LDVmGx0OdqNrub6Bc/view"
              download={resume.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;