/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react'
import Image from 'next/image'
import Logo from '../images/companylogo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


export default function navbar() {
  const currentRoute = usePathname();

  return (
    <nav className='font-primary flex justify-between pt-5 px-12'>
      <div className='flex gap-32 '>
        <Image src={Logo} alt="Dextr Logo" width={150} height={100} />
      <div className='text-[#01C3F1] font-bold flex gap-12 justify-center items-center text-xs'>
        <Link href="#features" className={currentRoute === "features" ? "underline underline-offset-8" : "" } >FEATURES</Link>
        <Link href="#features" className={currentRoute === "features" ? "underline underline-offset-8" : "" } >WHITEPAPER</Link>
        <Link href="#features" className={currentRoute === "features" ? "underline underline-offset-8" : "" } >CONTACT</Link>
      </div>
      </div>
      <div>
        <button className='font-primary font-bold text-[#00091B] bg-gradient-radial from-[#ececec] to-[#bababa] px-8 py-1.5 rounded-full border border-[#878787] hover:to-[#ffffffe7] duration-300'>
          Launch App
        </button>
      </div>
    </nav>
  )
}
