"use client"
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Diff1 from '../images/diff1.png'
import Diff2 from '../images/diff2.png'
import Diff3 from '../images/diff3.png'
import Diff4 from '../images/diff4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const FeatureCard = (props:any) =>{
  return(
    <div className='flex transition-colors justify-center border border-[#01C3F1] rounded-[50px] p-8 pb-24 hover:bg-gradient-to-br from-[#d52bffac] duration-300 ease-in to-[#01c1f1b1] relative overflow-hidden min-h-full'>
      <div>
        <h3 className='font-bold font-primary text-4xl'>{props.title}</h3>
        <p className='font-normal mt-5  text-xl  font-secondary w-2/5'>{props.description}</p>
      </div>
      <div className='absolute right-0 -top-12'>
        <Image src={props.image} alt={props.title} objectFit="contain" />
      </div>
    </div>
  )
}


export default function difference() {

  const content:any = [
    {
      id: 1,
      title: 'Secure Ownership, Today & Tomorrow!',
      description: 'With recoverability in case of lost private keys and facilitation of succession planning, your ownership remains secure and future-proofed. Enjoy peace of mind and long-term security for your digital assets.',
      image: Diff1
    },
    {
      id: 2,
      title: 'Amplify Your Returns: Trade Smarter!',
      description: 'Enjoy higher ROI as an LP by providing liquidity in a single token and earning fees from multiple pairs. Benefit from Best Price Discovery, earn Liquid Staking Rewards, and explore Copy & Algorithmic trading strategies.',
      image: Diff2
    },
    {
      id: 3,
      title: 'Your Reputation, Your Power!',
      description: "Dextr's governance is not based on coin voting but on the reputation you earn based on your contributions to the ecosystem. Thereby  giving your reputation a voice and power to influence the direction of the platform.",
      image: Diff3
    },
    {
      id: 4,
      title: 'Trade Safely, Trade Confidently!',
      description: 'Dextr prioritizes your security. You can trade with confidence and trust in a secure and fair trading environment with safeguards against price shocks, slippage, front running, wash trading, and bridge hacks.',
      image: Diff4
    }
  ]

  return (
    <div id="features" className='py-28 mx-20'>
      <div className='text-center flex justify-center flex-col gap-3'>
        <h1 className='text-6xl font-primary font-bold ' >Experience the Dextr Difference</h1>
        <p className=' text-center mx-64 text-xl text-[#ffffffa5]'>Step into the Extraordinary: Unleash Unrivaled Benefits with Dextr. Immerse yourself in a captivating trading experience where robust security, cutting-edge tools, and great user experience converge, offering a pathway to the world's most user-centric exchange.
        </p>
      </div>
      <div className='pt-12'>
      <Swiper
      spaceBetween={50}
      slidesPerView={1.2}
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {content.map((item:any) => (
        <SwiperSlide key={item.id}>
          <FeatureCard title={item.title} description={item.description} image={item.image}/>
          </SwiperSlide>
      ))}
    </Swiper>

          {/* <FeatureCard title="Secure Ownership, Today & Tomorrow!" description="With recoverability in case of lost private keys and facilitation of succession planning, your ownership remains secure and future-proofed. Enjoy peace of mind and long-term security for your digital assets." image={Diff1}/> */}

      </div>
    </div>
  )
}
