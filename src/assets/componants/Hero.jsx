import React from "react";
import { IoCloudUpload, IoServerSharp } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import bgImg from "../image/cyber-bg.png";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto px-4 pt-30">
        <div className="flex flex-col justify-start md:items-start w-full">
          <p className="text-2xl">Unique sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>

        <div className="flex justify-center items-start">
          <img className="w-full max-w-[500px]" src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
