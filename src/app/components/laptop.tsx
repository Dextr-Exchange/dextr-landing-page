import React from 'react'
import Image from 'next/image'
import Laptop from '../images/laptop.svg'
import newFeatures from '../images/newFeatures.svg'


export default function laptop() {
  return (
    <div className='flex py-12 xl:py-28 px-3 xl:px-20 max-h-fit iframe-cover flex-col xl:flex-row gap-8 items-start'>
      <div className='xl:basis-7/12 h-full iframe-cover flex justify-center'>      
      <Image src={newFeatures} alt="Dextr Hero Image" objectFit='contain' />
      </div>
      <div className='flex justify-evenly flex-col xl:basis-5/12 ml-5'>
        <h1 className='font-primary font-bold text-2xl xl:text-5xl text-center xl:text-right mb-10'>Embark on a journey of secure, efficient, and effortless trading!</h1>
        <p className='text-[#ffffffa5] font-secondary text-base xl:text-lg text-center xl:text-right xl:flex hidden justify-end '>Experience ultra-fast, low-cost, bridge-less trades with minimal price impact on our hybrid Omni-Chain DEX. Secure your assets with personalized security policies. Leverage your reputation for increased yields, protocol rewards, exclusive privileges, and greater influence in governance.</p>
        <p className='text-[#ffffffa5] font-secondary text-base text-center xl:hidden '>Experience ultra-fast, low-cost, bridge-less trades with minimal price impact on our hybrid Omni-Chain DEX. Secure your assets with personalized security policies. Leverage your reputation for increased yields, protocol rewards, exclusive privileges, and greater influence in governance.</p>
        <button type="button" className="xl:self-end xl:w-fit mt-10 text-white buttonNotch3 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-right inline-flex items-center w-3/5 self-center">
          Look out for Beta
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
    </div>
  )
}


