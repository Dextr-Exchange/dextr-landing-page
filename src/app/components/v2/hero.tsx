import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DextrImg from "../../../../public/dextrImg.png"

const HeroElement = () => {
  return (
    <div className='flex max-lg:flex-col-reverse w-full lg:h-screen-minus-150 lg:mx-10'>
      <div className="flex basis-1/3 flex-col justify-center flex-grow p-6 font-primary max-lg:basis-full max-lg:mx-5">
        <motion.h2
          className="xl:text-6xl text-5xl font-semibold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Conquer <span className="bg-clip-text text-transparent bg-loss-gradient">Losses</span>
        </motion.h2>
        <motion.h2
          className="xl:text-6xl text-5xl font-semibold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Capture <span className="bg-clip-text text-transparent bg-profit-gradient">Profits</span>
        </motion.h2>
        <motion.p
          className="lg:text-xl text-base mt-3 font-secondary text-gray-300 font-light tracking-wide mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Dextr's MEV-Capturing AMM shields LPs from LVR, enabling safer liquidity provision with greater returns and offering unparalleled flexibility.
        </motion.p>
        <div className='flex gap-5'>
          <motion.a
            className="bg-neutral-300 text-black px-6 py-3 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            href="https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG"
            target="_blank"
          >
            Join Waitlist
          </motion.a>
          <motion.a
            className="bg-primary text-white px-6 py-3 rounded-full"
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
      <div className='flex basis-1/2 items-center justify-center flex-grow max-lg:basis-full max-lg:mx-5'>
        {/* <div className='px-10'> */}

        {/* <motion.video 
          className='w-3/4 rounded-xl' 
          playsInline autoPlay muted controls loop 
          preload="none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <source src="/video/HeroVideo.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </motion.video> */}
        <Image
          className='rounded-lg shadow-lg'
          src={DextrImg}
          height={400}
          width={650}
          alt="HERO IMG"
        />
        {/* </div> */}
        
      </div>
    </div>
    
  )
}

export default HeroElement;

// import { useEffect } from 'react';
// import { motion } from 'framer-motion';

// const HeroElement = () => {
//   return (
//     <div className='flex max-lg:flex-col-reverse w-full min-h-screen lg:mx-10 max-w-screen-xl mx-auto pt-20'>
//       <div className="flex basis-1/3 flex-col justify-center flex-grow p-6 font-primary max-lg:basis-full max-lg:mx-5">
//         <motion.h2
//           className="text-5xl font-semibold text-white mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Capture <span className="bg-clip-text text-transparent bg-profit-gradient">Profits</span>
//         </motion.h2>
//         <motion.h2
//           className="text-5xl font-semibold text-white mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Conquer <span className="bg-clip-text text-transparent bg-loss-gradient">Losses</span>
//         </motion.h2>
//         <motion.p
//           className="text-lg mt-3 font-secondary text-gray-300 font-light tracking-wide mb-8"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Dextr offers unparalleled flexibility in trading and liquidity provisioning, empowering you to maximize profits and minimize risks with every transaction.
//         </motion.p>
//         <div className='flex gap-5'>
//           <motion.a
//             className="bg-teal-500 text-black px-6 py-3 rounded-full"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 1 }}
//             href="https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG"
//             target="_blank"
//           >
//             Join Waitlist
//           </motion.a>
//           <motion.a
//             className="bg-primary text-white px-6 py-3 rounded-full"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 1 }}
//             href="https://dextr-protocol.gitbook.io/dextr-mcamm-whitepaper-v3.0/"
//             target="_blank"
//           >
//             See Whitepaper
//           </motion.a>
//         </div>
//       </div>
//       <div className='flex basis-1/3 items-center justify-center flex-grow max-lg:basis-full max-lg:mx-5'>
//         <video className='w-full h-full object-cover rounded-xl' playsInline autoPlay muted controls loop preload="none">
//           <source src="/video/HeroVideo2.mp4" type="video/mp4" />
//           <track
//             src="/path/to/captions.vtt"
//             kind="subtitles"
//             srcLang="en"
//             label="English"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   )
// }

// export default HeroElement;
