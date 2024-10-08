import React from 'react';
import './VideoBackground.css';
import Header from "./Header"
import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from '../../images/dextr_icon.jpg'
import Eigen from '../../images/partners/eigenLayer.png'
import Berachain from '../../images/partners/bera.png'
import Supra from '../../images/partners/supra.png'
import Monad from '../../images/partners/monad.png'
import Brevis from '../../images/partners/brevis.png'
import Biconomy from '../../images/partners/biconomy.png'
import Particle from '../../images/partners/particle.png'
import Othentic from '../../images/partners/othentic.png'
import ZkAGI from '../../images/partners/zkagi.png'
import Router from '../../images/partners/router.png'

// import bgVideo from './backgroundVideo.mp4'

const partners = [
    {
        name: "Eigen Layer",
        icon: Eigen,
        url: "https://www.eigenlayer.xyz/",
    },
    {
        name: "Berachain",
        icon: Berachain,
        url: "https://www.berachain.com/",
    },
    {
        name: "Supra",
        icon: Supra,
        url: "https://supra.com/",
    },
    {
        name: "Monad",
        icon: Monad,
        url: "https://www.monad.xyz/",
    },
    {
        name: "Brevis",
        icon: Brevis,
        url: "https://brevis.network/",
    },
    {
        name: "Biconomy",
        icon: Biconomy,
        url: "https://www.biconomy.io/",
    },
    {
        name: "Particle Network",
        icon: Particle,
        url: "https://particle.network/",
    },
    {
        name: "Othentic",
        icon: Othentic,
        url: "https://www.othentic.xyz/",
    },
    {
        name: "ZkAGI",
        icon: ZkAGI,
        url: "https://www.zkagi.ai/",
    },
    {
        name: "Router",
        icon: Router,
        url: "https://www.routerprotocol.com/",
    }
];

const socials = [
    {
        name: "Twitter",
        url: "",
        icon: "",
    },
    {
        name: "Telegram",
        url: "",
        icon: "",
    },
    {
        name: "Medium",
        url: "",
        icon: "",
    }
];

const VideoBackground = () => {
  return (
    <div className="video-background">
        <video autoPlay loop muted>
            <source src="/video/bgVideoV3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      
        </video>
        {/* V3 Iteration 1 */}
        {/* <div className="content gap-20">
            <Header/>
            <div className='flex flex-col gap-10 mt-36 pt-5 flex-wrap items-center justify-center font-secondary'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image 
                        src={Logo} 
                        alt="Dextr Logo" 
                        width={250} 
                        height={125} 
                    />
                </motion.div>
                
                <motion.span 
                    className='text-3xl mt-10 text-white font-semibold'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Launching Soon
                </motion.span>
                <motion.span 
                    className='text-lg max-w-xs text-center text-white'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    World's First Actively Validated Market Maker with MEV Insurance.
                </motion.span>
                <div className='flex gap-10'>
                    <motion.a
                        className="bg-neutral-300 text-black px-6 py-3 rounded-full max-md:text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        href="https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG"
                        target="_blank"
                    >
                        Join Waitlist
                    </motion.a>
                    <motion.a
                        className="bg-primary text-white px-6 py-3 rounded-full max-md:text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        href="https://dextr-protocol.gitbook.io/dextr-mcamm-whitepaper-v3.0/"
                        target="_blank"
                    >
                        See Whitepaper
                    </motion.a>
                </div>
            </div>
        </div> */}

        {/* V3 Iteration 2 */}

        <div className='flex flex-col w-full h-full items-center my-8'>
            <motion.div 
                className='h-fit w-fit rounded-xl p-[1px] bg-gradient-to-l from-[#0d0316] to-[#C0C0C0] mb-[2%]'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Image 
                    src={Logo}
                    height={50}
                    width={50}
                    alt="Dextr Logo"
                    className='rounded-xl'
                />
            </motion.div>

            <Header/>
            
            <div className='flex flex-col mt-[2%] gap-10 items-center w-[70%]'>
                <motion.div 
                    className="flex items-center justify-center space-x-4 my-4 text-[#cfcfcf] text-sm w-full font-dm-sans"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="flex-grow h-px bg-gradient-to-l from-[#cfcfcf] to-transparent max-w-[100px]"></div>
                    <div className="text-[#cfcfcf] font-medium">
                        Unveiling the World's Most Advanced Market Maker
                    </div>
                    <div className="flex-grow h-px bg-gradient-to-r from-[#cfcfcf] to-transparent max-w-[100px]"></div>
                </motion.div>



                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="text-9xl font-primary font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-white">
                        AVMM
                    </div>
                </motion.div>

                <motion.div 
                    className='flex-wrap max-w-[350px] text-[#cfcfcf] text-sm text-center'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    Introducing the worlds first actively validated market maker with adaptive liquidity and MEV insurance
                </motion.div>
            </div>

            <motion.div 
                className='text-[#626262] text-xs mt-[4%] gap-5 uppercase font-medium flex flex-col justify-center items-center'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
            >
                <span>With Support of 10+ leaders</span>
                {/* <div className='max-w-[500px]'>
                    
                </div> */}
                <div className="flex flex-wrap justify-center items-center py-8 space-x-4 max-w-[80%] gap-5">
                    {partners.map((ptnr) => {
                        return(
                            <a
                                key={ptnr.name}
                                href={ptnr.url}
                            >
                                <Image 
                                    src={ptnr.icon}
                                    alt="ICON"
                                    className="logo h-7 w-auto filter grayscale opacity-40 hover:opacity-70 hover:brightness-100 transition-all duration-300 pointer"
                                />
                            </a>
                            
                        );
                    })}
                    
                </div>
            </motion.div>

            {/* <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className='flex text-sm gap-10 mt-10 text-[#626262] font-semibold'
            >
                <a
                    href="https://dextr-protocol.gitbook.io/dextr-mcamm-whitepaper-v3.0/"
                    target="_blank"
                >
                    See Whitepaper
                </a>
                <a
                    href="https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG"
                    target="_blank"
                >
                    Join Waitlist
                </a>
            </motion.div> */}


            {/* <img src={} className="logo h-12 filter grayscale brightness-90 opacity-80 hover:opacity-100 hover:brightness-100 transition-all duration-300" alt="Logo 1" />
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-b from-white via-transparent to-transparent opacity-30"></div> */}
            {/* #626262 */}
        </div>

    </div>
  );
};

export default VideoBackground;