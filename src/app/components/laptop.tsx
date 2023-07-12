import React from 'react'

export default function laptop() {
  return (
    <div className='flex py-28 px-20 min-h-fit'>
      <div className='basis-2/3 '>
      <spline-viewer url="https://prod.spline.design/trjcZQYHlScHX35r/scene.splinecode"></spline-viewer>      
      <div className='bg-red' />
      </div>
      <div className='flex justify-between flex-col basis-1/3'>
        <h1 className='font-primary font-bold text-6xl text-right'>Always keep your assets with you, securely!</h1>
        <p className='text-[#ffffffa5] font-secondary text-xl text-right flex justify-end '>Dextr is a non-custodial exchange <br /> for crypto and real-world   assets powered by Soulbound Tokens ♾️</p>
      </div>
    </div>
  )
}


