'use client'
import React from 'react'
import Image from 'next/image'
import HeroImage from '../images/heroImage.svg'

export default function hero() {
  
  return (
    <section className=' '>
      <div className='flex justify-center xl:flex-row flex-col px-3 xl:px-20 gap-10 pt-12 xl:pt-20'>
      <div className='xl:basis-1/2 flex flex-col justify-center xl:gap-12 gap-5'>
        <div>
          <h1 className='font-primary font-bold text-5xl xl:text-8xl xl:text-left text-center  xl:leading-[7.15rem] '>Stop Trading Security for Convenience!</h1>
        </div>        
        <div>
          <p className='xl:text-left text-center font-secondary text-[#ffffffa5] xl:text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </div> 
        <div className='mt-4 flex flex-col xl:flex-row gap-8 xl:justify-start xl:text-left text-center justify-center'>
          <button className='text-[#00091B] buttonNotch font-primary font-bold text-xs xl:text-sm xl:px-10 py-3'>JOIN WAITLIST</button>  
          <button className='text-[#fff] buttonNotch2 font-primary font-bold text-xs xl:text-sm xl:px-12 py-3'>SEE WHITEPAPER</button>  
        </div>       
      </div>
      <div className='xl:basis-1/2 card flex justify-center ' >
        <Image src={HeroImage} alt="Dextr Hero Image" width={800} height={100} />
      </div>
      </div>

    </section>
  )
}
