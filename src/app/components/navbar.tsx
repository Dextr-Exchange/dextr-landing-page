// /* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Image from 'next/image'
import Logo from '../images/companylogo.svg'
import Link from 'next/link'

import React, {useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // Add a pb-3 after removal of banner code
    
    <nav className="flex flex-col justify-between w-full bg-[#0c0c14] bg-opacity-40">
      <div className='font-primary flex justify-between pt-2 px-1 w-full xl:pt-5 xl:px-12'>
        <div className='flex gap-32'>
          <Image src={Logo} alt="Dextr Logo" width={150} height={100} />
        <div className='text-[#01C3F1] font-bold hidden xl:flex gap-12 justify-center items-center text-xs'>    
          <a href="#features" className={`hover:underline underline-offset-8 duration-150`} >FEATURES</a>
          <a href="https://dextr-protocol.gitbook.io/dextr-mcamm-whitepaper-v3.0/" target="_blank" rel="noopener noreferrer" className={`hover:underline underline-offset-8 duration-150 `}  > WHITEPAPER </a>
          <a href="mailto:info@dextr.exchange" className={`hover:underline underline-offset-8 duration-150`} >CONTACT</a>
        </div>
      </div>
      <div>
        <a href='https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG' rel='noopener noreferrer' target='_blank' className='font-primary hidden xl:block font-bold text-[#00091B] bg-gradient-radial from-[#ececec] to-[#bababa] px-8 py-1.5 rounded-full border border-[#878787] hover:to-[#ffffffe7] duration-300'>
          App Coming Soon
        </a>
      </div>
    </div>
      <div className="flex relative mb-3">
      {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white xl:hidden cursor-pointer h-full pt-3" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul className='z-10 fixed -top-0 -right-4 p-3 w-[60vw] h-full shadow-2xl md:hidden gap-5 list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className="text-xl w-full my-2 font-primary ">
              <AiOutlineClose onClick={()=> setToggleMenu(false)}/></li>
              <Link href="#features" className={`hover:underline underline-offset-8 duration-150 mr-7`} >FEATURES</Link>
              <a href="https://dextr.gitbook.io/whitepaper/" target="_blank" rel="noopener noreferrer" className={`hover:underline underline-offset-8 duration-150 mr-7`} >WHITEPAPER</a>
              <a href="mailto:info@dextr.exchange" className={`hover:underline underline-offset-8 duration-150 mr-7`} >CONTACT</a>
              <a href='https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG' rel='noopener noreferrer' target='_blank' className={`underline underline-offset-8 duration-150 mr-7`} >App Coming Soon</a>

          </ul>
        )}
      </div>

      {/* TEMP BANNER CODE BELOW  */}

      <a className="bg-[#01C3F1] py-3 px-2 flex banner h-8 w-full justify-center items-center cursor-pointer font-bold ease-in-out duration-500 hover:scale-105" href='https://twitter.com/Dextr_Exchange/status/1772980594705621318?t=Pw77powQ1MDvOLPo3lWnKA&s=19' target='_blank'>
        Applications Live 🔥 : Dextr Genius Guild! <FaArrowCircleRight className='ml-3'/>
      </a>
    </nav>
  );
};