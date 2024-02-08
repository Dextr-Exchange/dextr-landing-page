'use client'
import React from 'react'
import Image from 'next/image'
import HeroImage from '../images/heroImage.svg'
import Working from '../images/newHero.svg'

export default function hero() {

  
  return (
    <section className=' '>
      <div className='flex justify-center md:flex-row flex-col px-3 md:px-20 gap-10 pt-12 md:pt-20'>
      <div className='md:basis-1/2 flex flex-col justify-center md:gap-12 gap-5'>
        <div>
          <h1 className='font-primary font-bold text-4xl md:text-7xl md:text-left text-center md:leading-[7.15rem]'>Tired of Low Returns and High Slippage?</h1>
        </div>        
        <div>
          <p className='md:text-left text-center font-secondary text-[#ffffffa5] md:text-xl '> <span className='text-white underline underline-offset-4'>Discover Dextr:</span> Maximize your earnings and minimize risk with Dextr's unique reputation-based AMM- take charge of your crypto journey today!</p>
        </div> 
        <div className='mt-4 flex flex-col md:flex-row gap-8 md:justify-start md:text-left text-center justify-center'>
          <a href='https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+Social' rel="noopener noreferrer" target='_blank' className='text-[#00091B] buttonNotch font-primary font-bold text-xs md:text-sm md:px-10 py-3'>JOIN WAITLIST</a>  
          <a href='https://dextr.gitbook.io/whitepaper/' rel='noopener noreferrer' target='_blank' className='text-[#fff] buttonNotch2 font-primary font-bold text-xs md:text-sm md:px-12 py-3'>SEE WHITEPAPER</a>  
        </div>       
      </div>
      <div className='md:basis-1/2 card flex justify-center ' >
        <Image src={Working} alt="Dextr Hero Image" objectFit='contain' />
      </div>
      </div>

    </section>
  )
}
