import React from 'react'

export default function laptop() {
  return (
    <div className='flex py-12 xl:py-28 px-3 xl:px-20 max-h-fit flex-col xl:flex-row gap-8'>
      <div className='xl:basis-2/3 h-full'>
      <spline-viewer loading-anim url="https://prod.spline.design/trjcZQYHlScHX35r/scene.splinecode"></spline-viewer>  
      </div>
      <div className='flex justify-between flex-col xl:basis-1/3'>
        <h1 className='font-primary font-bold text-3xl xl:text-6xl text-center xl:text-right'>Always keep your assets with you, securely!</h1>
        <p className='text-[#ffffffa5] font-secondary text-base xl:text-xl text-center xl:text-right flex justify-end '>Dextr is a non-custodial exchange <br /> for crypto and real-world   assets powered by Soulbound Tokens ♾️</p>
      </div>
    </div>
  )
}


