'use client'
import React from 'react'
import Image from 'next/image'
import HeroImage from '../images/heroImage.svg'

export default function hero() {
  
  return (
    <section className=' '>
      <div className='flex justify-center px-20 gap-10 pt-20'>
      <div className='basis-1/2 flex flex-col justify-center gap-12'>
        <div>
          <h1 className='font-primary font-bold text-8xl  leading-[7.15rem] '>Stop Trading Security for Convenience!</h1>
        </div>        
        <div>
          <p className='font-secondary text-[#ffffffa5] text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </div> 
        <div className='mt-4 flex  gap-8'>
          <button className='text-[#00091B] buttonNotch font-primary font-bold text-sm px-10 py-3'>JOIN WAITLIST</button>  
          <button className='text-[#fff] buttonNotch2 font-primary font-bold text-sm px-12 py-3'>SEE WHITEPAPER</button>  
        </div>       
      </div>
      <div className='basis-1/2 card'>
        <Image src={HeroImage} alt="Dextr Hero Image" width={800} height={100} />
      </div>
      </div>

    </section>
  )
}
