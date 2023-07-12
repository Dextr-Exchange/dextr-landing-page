// /* eslint-disable react-hooks/rules-of-hooks */
"use client"
// import React, {useState} from 'react'
import Image from 'next/image'
import Logo from '../images/companylogo.svg'
import Link from 'next/link'
// import { usePathname } from 'next/navigation';
// import { HiMenuAlt4 } from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';


// export default function navbar() {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   const currentRoute = usePathname();

//   return (
//     <nav>
//     <div className='font-primary flex justify-between pt-1 px-1  xl:pt-5 xl:px-12'>
//       <div className='flex gap-32 '>
//         <Image src={Logo} alt="Dextr Logo" width={150} height={100} />
//       <div className='text-[#01C3F1] font-bold hidden xl:flex gap-12 justify-center items-center text-xs'>    
//         <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >FEATURES</Link>
//         <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >WHITEPAPER</Link>
//         <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >CONTACT</Link>
//       </div>
//       </div>
//       <div>
//         <button className='font-primary hidden xl:block font-bold text-[#00091B] bg-gradient-radial from-[#ececec] to-[#bababa] px-8 py-1.5 rounded-full border border-[#878787] hover:to-[#ffffffe7] duration-300'>
//           Launch App
//         </button>
//       </div>
//     </div>
//     <div className="flex relative">
//       {!toggleMenu && (
//           <HiMenuAlt4 fontSize={28} className="text-white xl:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
//         )}
//         {toggleMenu && (
//           <AiOutlineClose fontSize={28} className="text-white xl:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
//         )}
//         {toggleMenu && (
//           <ul className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
//           flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
//             <li className="text-xl w-full my-2">
//               <AiOutlineClose onClick={()=> setToggleMenu(false)}/></li>
//               <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >FEATURES</Link>
//         <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >WHITEPAPER</Link>
//         <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >CONTACT</Link>

//           </ul>
//         )}
//       </div>
//     </nav>
//   )
// }


import React, {useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'



export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className=" ">
      {/* <div className="flex justify-center items-center">
        <Image src={Logo} alt="logo" className="w-32 xl:w-64 cursor-pointer" objectFit='contain' />
        <Image src={Logo} alt="Dextr Logo" width={150} height={100} />
      </div>
      <div className='text-[#01C3F1] font-bold hidden xl:flex gap-12 justify-center items-center text-xs'>
        <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >FEATURES</Link>
        <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >WHITEPAPER</Link>
         <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >CONTACT</Link>
      </div>
      <div>
        <button className='font-primary hidden xl:block font-bold text-[#00091B] bg-gradient-radial from-[#ececec] to-[#bababa] px-8 py-1.5 rounded-full border border-[#878787] hover:to-[#ffffffe7] duration-300'>
          Launch App
        </button>
      </div> */}
      <div className='font-primary flex justify-between pt-1 px-1  xl:pt-5 xl:px-12'>
      <div className='flex gap-32 '>
        <Image src={Logo} alt="Dextr Logo" width={150} height={100} />
      <div className='text-[#01C3F1] font-bold hidden xl:flex gap-12 justify-center items-center text-xs'>    
        <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >FEATURES</Link>
        <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >WHITEPAPER</Link>
        <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >CONTACT</Link>
      </div>
      </div>
      <div>
        <button className='font-primary hidden xl:block font-bold text-[#00091B] bg-gradient-radial from-[#ececec] to-[#bababa] px-8 py-1.5 rounded-full border border-[#878787] hover:to-[#ffffffe7] duration-300'>
          Launch App
        </button>
      </div>
    </div>


      {/* <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item,index) => (
          <NavbarItem key={item+index} title={item}/>
        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li>
      </ul> */}

      <div className="flex relative">
      {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white xl:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white xl:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-full shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={()=> setToggleMenu(false)}/></li>
              <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >FEATURES</Link>
        <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >WHITEPAPER</Link>
         <Link href="#features" className={`hover:underline underline-offset-8 duration-150`} >CONTACT</Link>

          </ul>
        )}
      </div>

    </nav>
  );
};