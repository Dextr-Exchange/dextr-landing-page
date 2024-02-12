"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from "react";
import Image from "next/image";
import Features1 from "../images/features1.svg";
import Features2 from "../images/features2.svg";

export default function features() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <div className="lg:mx-20 mx-3  my-12 lg:my-20 flex flex-col lg:gap-16 gap-6">
    <div className=" border p-8 rounded-[50px] border-[#01C3F1] bg-gradient-to-tl from-[#d52bff49] to-transparent via-transparent overflow-hidden relative" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <div className="flex flex-col ">
        <div>
          <h1 className="font-bold text-center lg:text-left font-primary text-3xl lg:text-5xl">
            Degen Mode
          </h1>
          <p className="lg:w-2/3  lg:text-left text-center font-secondary mt-10 text-sm lg:text-xl text-[#ffffffa5]">
            Perfect for beginners with easy swaps and a user-friendly interface, minimal price impact and reduced slippage. Option to follow experienced traders via copy trading. 
          </p>
        </div>
        <div className={`overflow-hidden max-lg:hidden lg:absolute right-0 duration-500  ease-in-out ${isHovered ? "scale-125 right-10 duration-500  ease-in-out" : ""} `}>
          <Image src={Features2} alt="" objectFit="cover"  />
        </div>
      </div>
    </div>

    <div className=" border p-8 rounded-[50px] border-[#01C3F1] bg-gradient-to-tr from-[#d52bff49] to-transparent via-transparent overflow-hidden relative" onMouseEnter={()=>setIsHovered1(true)} onMouseLeave={()=>setIsHovered1(false)}>
      <div className="flex flex-col-reverse lg:flex-col">
        <div className={`overflow-hidden max-lg:hidden lg:absolute left-0 duration-500  ease-in-out ${isHovered1 ? "scale-125 left-10 duration-500  ease-in-out" : ""} `}>
          <Image src={Features1} alt="" objectFit="cover"  />
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-end lg:items-end">
          <h1 className="font-bold text-center lg:text-right font-primary text-3xl lg:text-5xl">
            Pro Mode
          </h1>
          <p className=" lg:w-2/3 font-secondary text-center lg:text-right mt-10 text-xl text-[#ffffffa5]">
            Designed for experienced traders familiar with order books, algorithmic trading bots, spending limits, and multi-signatures.

          </p>
        </div>
      </div>
    </div>
    <div className=" border p-8 rounded-[50px] border-[#01C3F1] bg-gradient-to-tl from-[#d52bff49] to-transparent via-transparent overflow-hidden relative" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <div className="flex flex-col ">
        <div>
          <h1 className="font-bold text-center lg:text-left font-primary text-3xl lg:text-5xl">
            Premium Customization
          </h1>
          <p className="lg:w-2/3  lg:text-left text-center font-secondary mt-10 text-sm lg:text-xl text-[#ffffffa5]">
            Flexible configurations with MEV blockers, liquid staking protocols, and external DEXs for an elevated user experience!
          </p>
        </div>
        <div className={`overflow-hidden max-lg:hidden lg:absolute right-0 duration-500  ease-in-out ${isHovered ? "scale-125 right-10 duration-500  ease-in-out" : ""} `}>
          <Image src={Features2} alt="" objectFit="cover"  />
        </div>
      </div>
    </div>
    </div>
  );
}
