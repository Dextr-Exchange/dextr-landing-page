"use client";

// import Navbar from "./components/navbar"
// import Hero from "./components/hero"
// import Partners from "./components/partners"
// import Laptop from "./components/laptop"
// import Features from "./components/features"
// import Difference from "./components/difference"
// import FAQs from "./components/faqs"
// import Footer from "./components/footer"
// import Blog from "./components/blogs"
// import React, { use, useEffect } from "react"
// import { io } from 'socket.io-client'
// import axios from "axios";
// import Head from "next/head";
// import Image from "next/image";
// import Logo from './images/companylogo.svg'
// import {AiOutlineTwitter} from 'react-icons/ai'
// import {AiFillMediumCircle} from 'react-icons/ai'
// import {AiFillYoutube} from 'react-icons/ai'
// import {AiFillInstagram} from 'react-icons/ai'
// import { SiTelegram } from "react-icons/si";
// import {AiFillLinkedin} from 'react-icons/ai'
// import { FaDiscord } from "react-icons/fa";

// export default function Home() {
  
//   // useEffect(() => {
//   //   const socket = io('ws://localhost:5001')

//   //   socket.on('connection', () => {
//   //     console.log('connected to server');
//   //   })

//   //   socket.once('limit-orders', (limitAndMarketOrders) => {
//   //     console.log(limitAndMarketOrders)
//   //   })

//   //   socket.on('message', (message) => {
//   //     console.log(message);
//   //   })

//   //   socket.on('disconnect', () => {
//   //     console.log('Socket disconnecting');
//   //   })

//   // }, [])

//   // useEffect(() => {
//   //   axios.get("http://localhost:5001/api/orders/limit-market")
//   // }, [])
  
//   return (
//     // <div className=" text-white bg-[#0c0c14] bg-bgPattern h-full">
//     //   <div className="bg-gradient-to-t to-[#051e3679] from-transparent via-transparent">
//     //     <Navbar />
//     //     <Hero />
//     //     {/* <Partners /> */}
//     //   </div>

//     //   <Laptop />
//     //   <Features />
//     //   <Difference />
//     //   <Blog />
//     //   {/* <FAQs /> */}
//     //   <Footer />
//     // </div>
//     <div className="bg-radial-gradient">
//         <div className="min-h-screen flex flex-col justify-center items-center">
//           <Image src={Logo} alt="Logo" className="mb-8" height={150} width={300}/>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4">Site is under maintenance</h1>
//           <p className="text-center text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">We're working our magic to bring out the best user experience. Stay tuned!</p>
//           <div className="flex space-x-4">
//             <div className='flex gap-12 pt-5 flex-wrap items-center justify-center text-white'>
//               {/* icons */}
//               <a href="https://twitter.com/Dextr_Exchange" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter fontSize={34} className="hover:text-cyan-300" /></a>          
//               {/* <a href="https://www.youtube.com/@Dextr_exchange" target="_blank" rel="noopener noreferrer"><AiFillYoutube fontSize={34} className="hover:text-cyan-300" /></a> */}
//               <a href="https://www.instagram.com/dextr_exchange" target="_blank" rel="noopener noreferrer"><AiFillInstagram fontSize={34} className="hover:text-cyan-300" /></a>
//               <a href="https://medium.com/@dextr-ex" target="_blank" rel="noopener noreferrer"><AiFillMediumCircle fontSize={34} className="hover:text-cyan-300" /></a>
//               <a href="https://www.linkedin.com/company/dextr-exchange/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin fontSize={34} className="hover:text-cyan-300" /></a>
//               <a href="https://t.me/DextrExchange" target="_blank" rel="noopener noreferrer"><SiTelegram fontSize={34} className="hover:text-cyan-300" /></a>
//               {/* <a href="https://discord.gg/6BjkQv2cmQ" target="_blank" rel="noopener noreferrer"><FaDiscord fontSize={34} className="hover:text-cyan-300" /></a> */}
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }


"use client";

import Header from "./components/v2/header"
import HeroElement from "./components/v2/hero"
import Features from "./components/v2/features"
import Benefits from "./components/v2/benefits"
import ComparisonTable from "./components/v2/comparisionTable"
import Subscribe from "./components/v2/subscribe"
import Footer from "./components/v2/footer";
import Head from "next/head";
import Blogs from "./components/v2/blogs";
import Testnet from "./components/v2/testnet";

const v2 = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Head>
            <title>Dextr Exchange</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* ALL PAGES BELOW SHOULD HAVE mx-10 & p-6 for standardization */}
          <div className="bg-radial-gradient">
            <Header />
            <HeroElement />
            <Features />
          </div>

          <div className="w-full bg-linear-gradient pb-10">
            <Benefits />
            <Testnet />
            <ComparisonTable />
          </div>
          <div className="w-full bg-radial-gradient-component">
            <Blogs />
            {/* <Subscribe /> */}
            <Footer />
          </div>
        </div>
      );
}

export default v2;