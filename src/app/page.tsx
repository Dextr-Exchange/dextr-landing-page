"use client";

import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Partners from "./components/partners"
import Laptop from "./components/laptop"
import Features from "./components/features"
import Difference from "./components/difference"
import FAQs from "./components/faqs"
import Footer from "./components/footer"
import Blog from "./components/blogs"
import React, { use, useEffect } from "react"
import { io } from 'socket.io-client'
import axios from "axios";

export default function Home() {
  
  useEffect(() => {
    const socket = io('ws://localhost:5001')

    socket.on('connection', () => {
      console.log('connected to server');
    })

    socket.once('limit-orders', (limitAndMarketOrders) => {
      console.log(limitAndMarketOrders)
    })

    socket.on('message', (message) => {
      console.log(message);
    })

    socket.on('disconnect', () => {
      console.log('Socket disconnecting');
    })

  }, [])

  useEffect(() => {
    axios.get("http://localhost:5001/api/orders/limit-market")
  }, [])
  
  return (
    <div className=" text-white bg-[#0c0c14] bg-bgPattern h-full">
      <div className="bg-gradient-to-t to-[#051e3679] from-transparent via-transparent">
        <Navbar />
        <Hero />
        {/* <Partners /> */}
      </div>

      <Laptop />
      <Features />
      <Difference />
      <Blog />
      {/* <FAQs /> */}
      <Footer />
    </div>

  )
}
