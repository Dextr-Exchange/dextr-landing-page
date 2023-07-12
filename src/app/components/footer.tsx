import React from 'react'
import Image from 'next/image'
import Logo from '../images/companylogo.svg'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillMediumCircle} from 'react-icons/ai'

export default function footer() {
  return (
    <div className='border-t bg-gradient-to-b to-[#0466c879]  from-transparent via-[#00091b5b]'>
      <div className='px-20 pt-20 flex flex-col justify-center items-center'>
        <div>          
            <h1 className='font-primary font-bold text-white text-7xl'>Stay In Touch With Us</h1>
        </div>
        <div className='flex gap-12 pt-5'>
          {/* icons */}
          <a href="https://twitter.com/Dextr_Exchange" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter fontSize={34} className="hover:text-cyan-300" /></a>
          <a href="https://twitter.com/Dextr_Exchange" target="_blank" rel="noopener noreferrer"><FaTelegramPlane fontSize={34} className="hover:text-cyan-300" /></a>
          <a href="https://twitter.com/Dextr_Exchange" target="_blank" rel="noopener noreferrer"><AiFillMediumCircle fontSize={34} className="hover:text-cyan-300" /></a>
        </div>
      </div>
      <div className='flex px-20 py-20'>
        <div>
        <Image src={Logo} alt="Dextr Logo" width={150} height={100} />
          <p className='w-1/3 text-[#ffffffcb] font-secondary font-normal' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti doloribus labore recusandae quibusdam, obcaecati nihil ea unde eligendi quod. Optio facilis rerum vero aperiam placeat itaque vel beatae ipsa?</p>
        </div>
        <div className='flex flex-col font-bold font-primary '>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Whitepaper</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Waitlist</a>
        </div>
      </div>
      <div className='border-t mx-16'>
        <h3 className=' pt-8 py-12 font-secondary text-center font-normal text-[#ffffffa5]'>All Rights Reserved ©2023 </h3>
      </div>
    </div>
  )
}
