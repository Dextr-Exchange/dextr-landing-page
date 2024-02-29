'use client'
import React from 'react'
import Image from 'next/image'
import ZetaChain from '../images/zeta3.svg'
import Biconomy from '../images/newBiconomy.png'

export default function PoweredBy() {
  return (
    <section className='max-sm:w-[300px] w-[550px] mx-auto mt-10'>
        <div className='font-primary max-sm:text-sm border border-[#01C3F1] flex h-20 w-auto rounded-full mx-auto items-center justify-center shadow-inner'>
            <span className='font-bold max-sm:text-sm'>Powered By: </span>
            <Image className='ml-3 max-sm:w-[80px] max-sm:ml-1' src={ZetaChain} alt="ZetaChain" height={80} width={160} />
            <span className='ml-3'> & </span>
            <Image className='mx-3 max-sm:w-[80px] max-sm:ml-1' src={Biconomy} alt="Biconomy" height={80} width={160} />
        </div>
    </section>
  )
}
