import React from 'react'
import Image from 'next/image'
import Logo from '../../images/companylogo.svg'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillMediumCircle} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import { SiTelegram } from "react-icons/si";
import {AiFillLinkedin} from 'react-icons/ai'
import { FaDiscord } from "react-icons/fa";
import DextrLogo from "../../images/dextrImg.png"

export default function footer() {
  return (
    <div className=''>
      <div className='xl:px-20 xl:pt-20 px-3 pt-8 flex flex-col justify-center items-center'>
        <div>          
            <h1 className='font-primary text-center font-bold text-white text-4xl xl:text-7xl'>Never miss an update</h1>
        </div>
        <div className='flex gap-12 pt-5 flex-wrap items-center justify-center text-[#ffffffcb]'>
          {/* icons */}
          <a href="https://twitter.com/Dextr_Exchange" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter fontSize={34} className="hover:text-cyan-300" /></a>          
          {/* <a href="https://www.youtube.com/@Dextr_exchange" target="_blank" rel="noopener noreferrer"><AiFillYoutube fontSize={34} className="hover:text-cyan-300" /></a> */}
          <a href="https://t.me/DextrExchange" target="_blank" rel="noopener noreferrer"><SiTelegram fontSize={34} className="hover:text-cyan-300" /></a>
          <a href="https://medium.com/@dextr-ex" target="_blank" rel="noopener noreferrer"><AiFillMediumCircle fontSize={34} className="hover:text-cyan-300" /></a>
          <a href="https://www.linkedin.com/company/dextr-exchange/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin fontSize={34} className="hover:text-cyan-300" /></a>
          <a href="https://www.instagram.com/dextr_exchange" target="_blank" rel="noopener noreferrer"><AiFillInstagram fontSize={34} className="hover:text-cyan-300" /></a>
          {/* <a href="https://discord.gg/6BjkQv2cmQ" target="_blank" rel="noopener noreferrer"><FaDiscord fontSize={34} className="hover:text-cyan-300" /></a> */}
          <Image src={DextrLogo} alt="Logo Image" className='hidden' height={10} width={10} />
        </div>
      </div>
      <div className='flex xl:px-20 justify-between xl:py-20 px-3 py-12 flex-col xl:flex-row'>
        <div className='flex flex-col justify-center xl:justify-start'>
          <div className='flex justify-center xl:justify-start'><Image src={Logo} alt="Dextr Logo" width={150} height={100} /></div>
          <p className='xl:w-1/3 text-[#ffffffcb] font-secondary text-center xl:text-left font-normal mt-5' >Dextr is a hybrid DEX featuring on-chain order books, reputation-based AMM, and seamless cross-chain interoperability.</p>
        </div>
        <div className='flex flex-col font-bold font-primary pt-8 xl:pt-0 gap-3 text-center xl:text-right text-[#ffffffcb]'>
          <a href="https://dextr-protocol.gitbook.io/dextr-mcamm-whitepaper-v3.0/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Whitepaper</a>
          <a href="https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+Social" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Waitlist</a>
        </div>
      </div>
      <div className='border-t xl:mx-16 mx-6'>
        <h3 className=' pt-8 py-12 font-secondary text-center font-normal text-[#ffffffa5]'>All Rights Reserved ©2023 </h3>
      </div>
    </div>
  )
}
