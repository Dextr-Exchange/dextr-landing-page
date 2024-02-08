import React from 'react'
import Image from 'next/image'
import Laptop from '../images/laptop.svg'
import newFeatures from '../images/newFeatures.svg'


export default function laptop() {
  return (
    <div className='flex py-12 xl:py-28 px-3 xl:px-20 max-h-fit iframe-cover flex-col xl:flex-row gap-8'>
      <div className='xl:basis-2/3 h-full iframe-cover'>      
      <Image src={newFeatures} alt="Dextr Hero Image" objectFit='contain' />
      </div>
      <div className='flex justify-evenly flex-col xl:basis-1/3'>
        <h1 className='font-primary font-bold text-2xl xl:text-5xl text-center xl:text-right'>Embark on a journey of secure, efficient, and effortless trading!</h1>
        <p className='text-[#ffffffa5] font-secondary text-base xl:text-lg text-center xl:text-right xl:flex hidden justify-end '>Experience ultra-fast, low-cost, bridge-less trades with minimal price impact on our hybrid Omni-Chain DEX. Secure your assets with personalized security policies. Leverage your reputation for increased yields, protocol rewards, exclusive privileges, and greater influence in governance.</p>
        <p className='text-[#ffffffa5] font-secondary text-base text-center xl:hidden '>Experience ultra-fast, low-cost, bridge-less trades with minimal price impact on our hybrid Omni-Chain DEX. Secure your assets with personalized security policies. Leverage your reputation for increased yields, protocol rewards, exclusive privileges, and greater influence in governance.</p>
      </div>
    </div>
  )
}


