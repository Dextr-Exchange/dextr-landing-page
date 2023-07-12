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
    <div className="mx-20 my-20 flex flex-col gap-16">
    <div className=" border p-8 rounded-[50px] border-[#01C3F1] bg-gradient-to-tl from-[#d52bff49] to-transparent via-transparent overflow-hidden relative" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <div className="flex">
        <div>
          <h1 className="font-bold font-primary text-5xl">
            Fortified “ Decentralized ” Custody
          </h1>
          <p className="w-2/3  font-secondary mt-10 text-xl text-[#ffffffa5]">
            Experience unrivaled fund security with our decentralized custody
            solution, incorporating on-chain Social Recovery, Will
            Administration, Multi-Factor Authentication, <br /> and Multi-Party
            Authorizations.
          </p>
        </div>
        <div className={`overflow-hidden absolute right-0 duration-500  ease-in-out ${isHovered ? "scale-125 right-10 duration-500  ease-in-out" : ""} `}>
          <Image src={Features2} alt="" objectFit="cover"  />
        </div>
      </div>
    </div>

    <div className=" border p-8 rounded-[50px] border-[#01C3F1] bg-gradient-to-tr from-[#d52bff49] to-transparent via-transparent overflow-hidden relative" onMouseEnter={()=>setIsHovered1(true)} onMouseLeave={()=>setIsHovered1(false)}>
      <div className="flex ">
        <div className={`overflow-hidden absolute left-0 duration-500  ease-in-out ${isHovered1 ? "scale-125 left-10 duration-500  ease-in-out" : ""} `}>
          <Image src={Features1} alt="" objectFit="cover"  />
        </div>
        <div className="flex flex-col justify-end items-end">
          <h1 className="font-bold text-right font-primary text-5xl">
          Seamless "On-Chain" Trading
          </h1>
          <p className=" w-2/3 font-secondary text-right mt-10 text-xl text-[#ffffffa5]">
          Discover the power of On-Chain Orderbook, Single Token AMMs, Best Price Discovery, and Bridgeless Cross-chain Settlement. Experience transparent, secure, and seamless trading for maximum profit potential.

          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
