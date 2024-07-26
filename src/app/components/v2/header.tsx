import Image from "next/image";
import Logo from '../../images/companylogo.svg'
import Link from 'next/link'
import React, {useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
    <div>
        <motion.a 
            className="bg-black text-gray-100 py-3 px-2 flex banner h-8 w-full justify-center items-center cursor-pointer font-semibold ease-in-out duration-500 hover:scale-105 max-sm:text-xs" 
            href='https://twitter.com/Dextr_Exchange/status/1772980594705621318?t=Pw77powQ1MDvOLPo3lWnKA&s=19' 
            target='_blank'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            Applications Live 🔥 : Dextr Genius Guild! 
            <button className="rounded-lg flex items-center gap-2 text-sm ml-5 bg-[#b12a29] p-2 max-sm:text-[8px]">Apply Now <FaArrowCircleRight /></button>
            {/* <FaArrowCircleRight className='ml-3'/> */}
        </motion.a>
        <motion.header 
            className="flex justify-between items-center py-6 px-12 max-sm:px-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <div className="flex items-center space-x-2 max-sm:space-x-0">
                <Image src={Logo} alt="Dextr Logo" width={150} height={100} />
            </div>
            <nav className='font-primary font-semibold text-gray-100 hidden lg:flex gap-12 justify-center items-center text-sm'>    
            <a href="#features" className={`hover:underline underline-offset-8 duration-150`} >FEATURES</a>
            <a href="https://dextr-protocol.gitbook.io/dextr-mcamm-whitepaper-v3.0/" target="_blank" rel="noopener noreferrer" className={`hover:underline underline-offset-8 duration-150 `}  > WHITEPAPER </a>
            <a href="mailto:info@dextr.exchange" className={`hover:underline underline-offset-8 duration-150`} >CONTACT</a>
            </nav>
            <div className="flex relative mb-3">
            {!toggleMenu && (
            <HiMenuAlt4 fontSize={28} className="text-white lg:hidden cursor-pointer h-full pt-3" onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
            <AiOutlineClose fontSize={28} className="text-white hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            )}
            {toggleMenu && (
            <ul className='z-10 fixed -top-0 -right-4 p-3 w-[60vw] h-full shadow-2xl lg:hidden gap-5 list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                <li className="text-xl w-full my-2 font-primary ">
                <AiOutlineClose onClick={()=> setToggleMenu(false)}/></li>
                <Link href="#features" className={`hover:underline underline-offset-8 duration-150 mr-7`} >FEATURES</Link>
                <a href="https://dextr.gitbook.io/whitepaper/" target="_blank" rel="noopener noreferrer" className={`hover:underline underline-offset-8 duration-150 mr-7`} >WHITEPAPER</a>
                <a href="mailto:info@dextr.exchange" className={`hover:underline underline-offset-8 duration-150 mr-7`} >CONTACT</a>
                <a href='https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG' rel='noopener noreferrer' target='_blank' className={`font-primary font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded duration-150 mr-7`} >App Coming Soon</a>

            </ul>
            )}
            </div>
            <a href='https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG' rel='noopener noreferrer' target='_blank'  className="hidden lg:block font-primary font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded">App Coming Soon</a>
        </motion.header>
    </div>
      
    )
  }
  
  export default Header;
  