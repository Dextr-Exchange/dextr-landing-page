import TestnetImg from "../../../../public/testnet-img.png"
import Image from "next/image";
import { SiSpeedtest } from "react-icons/si";
import GoodIcon from "../../../../public/icons/good.png"

const Testnet = () => {
    return(
        <div className="flex lg:flex-row flex-col gap-10 items-center justify-center mx-10 p-6 pb-20 mt-4 max-md:text-center">
            <div className="basis-1/2 text-gray-50 w-full px-3 lg:mr-10">
                <Image 
                    className="w-12 h-12 mb-4 text-white max-md:mx-auto" 
                    height={48} 
                    width={48} 
                    alt="Testnet Icon" 
                    src={GoodIcon}
                    style={{ 
                    background: 'radial-gradient(circle at 50% -5%, #1D428A 20%, #000 50%)', 
                    WebkitMaskImage: '-webkit-linear-gradient(white, white)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                    }} 
                />
                <div className="mt-5 text-4xl font-primary sm:text-4xl">
                    Earn Rewards with REP Points
                </div>
                <div className="mt-5 mb-8 text-md text-gray-400 font-light">
                    Earn REP Points through trading, providing liquidity, and staking. Use REP Points to prioritize your liquidity, redeem for DXTR tokens, or exchange for other cryptocurrencies.
                </div>
                <a
                    href="https://dextr-protocol.gitbook.io/dextr-mcamm-whitepaper-v3.0/tokenomics/rep-points"
                    target="_blank"
                    className="bg-neutral-300 text-black px-6 py-3 rounded-full "
                >
                    Read More
                </a>
            </div>
            <div className="basis-1/2">
                {/* <div className="h-auto w-auto pt-8 px-4 bg-radial-gradient-imageBack"> */}
                    <video 
                        className='rounded-xl aspect-video ' 
                        playsInline autoPlay muted controls loop 
                        preload="none"
                        >
                        <source src="/video/RepVideo.mp4" className='h-full w-full' />
                    </video>
                {/* </div> */}
                
            </div>
        </div>
    );
}

export default Testnet;