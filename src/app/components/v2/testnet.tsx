import TestnetImg from "../../../../public/testnet-img.png"
import Image from "next/image";
import { SiSpeedtest } from "react-icons/si";

const Testnet = () => {
    return(
        <div className="flex lg:flex-row flex-col gap-10 items-center justify-center mx-10 p-6 pb-20 mt-4 max-md:text-center">
            <div className="basis-1/2 text-gray-50 w-full px-3 mr-10">
                <SiSpeedtest className="h-12 w-12 text-white mb-5 max-md:mx-auto" />
                <span className="mt-5 text-3xl font-primary font-extrabold sm:text-4xl">
                    Incentivized Test-Net
                </span>
                <p className="mt-5 text-sm text-gray-400 font-light">
                    Participate in the Dextr Test-net Beta and win from a pool of $25,000 DXTR. Climb up the ladder and increase your REP Scores for more rewards.  
                </p>
                <a
                    href="https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG"
                    target="_blank"
                    className="bg-teal-500 text-black px-6 py-3 rounded-full mt-5"
                >
                    Join Waitlist
                </a>
            </div>
            <div className="basis-1/2">
                <div className="h-auto w-auto pt-8 px-4 bg-radial-gradient-imageBack">
                    <Image src={TestnetImg} height={500} width={900} alt="Testnet Image" />
                </div>
            </div>
        </div>
    );
}

export default Testnet;