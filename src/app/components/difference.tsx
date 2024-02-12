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
    <div className='h-auto flex flex-col transition-colors justify-center border border-[#01C3F1] rounded-[50px] p-8 xl:pb-24 hover:bg-gradient-to-br from-[#d52bffac] duration-300 ease-in to-[#01c1f1b1] relative overflow-hidden xl:max-h-[400px] gap-5 mb-10 justify-self-stretch'>
      <div className=''>
        <h3 className='font-bold font-primary xl:text-left text-center text-xl xl:text-4xl'>{props.title}</h3>
        <p className='font-normal mt-5  text-xs xl:text-lg xl:text-left text-center font-secondary xl:w-3/5'>{props.description}</p>
      </div>
      <div className='xl:absolute right-0 top-12'>
        <Image src={props.image} alt={props.title} objectFit="contain" height={400}/>
      </div>
    </div>
  )
}


export default function difference() {

  const content:any = [
    {
      id: 1,
      title: 'Secure Ownership Today and Tomorrow!',
      description: 'Leverage the advantages of sophisticated security features such as social recovery, inheritance planning, multi-factor authentication, and innovative utilization of threshold signature schemes by Dextr.',
      image: Diff1
    },
    {
      id: 2,
      title: 'Bringing Capital Efficiency to DEXs!',
      description: 'Diversify your earnings through Dextr\'s RAMM. Multiple tokens in your liquidity positions mean more potential pairs and higher fee rewards than traditional single-pair pools, enhancing capital efficiency in DEXs.',
      image: Diff2
    },
    {
      id: 3,
      title: 'CEX Convenience Meets DEX Confidence!',
      description: "Discover CEX-like efficiency with DEX trust. Enjoy a user-friendly experience with smart wallet management, token agnostic fees, bridgeless trading and cross-chain interoperability.",
      image: Diff3
    },
    {
      id: 4,
      title: 'Empowerment Through Contribution!',
      description: 'Engage in weighted decision-making processes with REP Scores influencing voting rights, LP ranking, and various other platform privileges, thereby ensuring an inclusive and fair governance system on Dextr.',
      image: Diff4
    }
  ]

  return (
    <div id="features" className='py-12 xl:py-28 '>
      <div className='text-center flex justify-center mx-3 xl:mx-20 flex-col gap-3'>
        <h1 className='text-3xl xl:text-6xl font-primary font-bold ' >Experience the Dextr Difference</h1>
        <p className=' text-center xl:mx-64 text-sm xl:text-xl text-[#ffffffa5]'>Step into the Extraordinary: Unleash unrivaled benefits with Dextr. Immerse yourself in a captivating trading experience where robust security, cutting-edge tools, and great user experience converge, offering a pathway to the world's most user-centric exchange.
        </p>
      </div>
      <div className='pt-6 xl:pt-12  mx-3 xl:mx-20'>
      <Swiper
        spaceBetween={50}
        observer={true}
        observeParents={true}     
        autoHeight={true}
        slidesPerView={1.5}
        loop={true}
        grabCursor={true}
        navigation={true}      
        autoplay={{ delay: 2500 }}
        parallax={true}
        pagination={{ clickable: true }}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
        height={200}
      

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