import React from "react";
import { IoCloudUpload, IoServerSharp } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import bgImg from "../image/cyber-bg.png";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto px-4 pt-24 relative">
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

        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-35 z-10 
                    bg-zinc-200 border border-slate-300 rounded-xl 
                    shadow-xl text-center w-[90%] md:min-w-[860px] p-6"
        >
          <p className="font-medium">Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <IoCloudUpload className="h-6 text-indigo-600" />, App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <AiOutlineDatabase className="h-6 text-indigo-600" />, Dashboard
              Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <IoServerSharp className="h-6 text-indigo-600" />, Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <HiMiniPaperAirplane className="h-6 text-indigo-600" />, API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
