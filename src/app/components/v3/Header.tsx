import { motion } from "framer-motion";
import { AiFillInstagram, AiFillLinkedin, AiFillMediumCircle, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const Header = () => {
    return(
<div className="mt-5 h-10 mx-10">
  <motion.div 
    className="w-full flex gap-12 pt-5 flex-wrap items-center justify-end text-[#ffffff]"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* icons */}
    <a href="https://twitter.com/Dextr_Exchange" target="_blank" rel="noopener noreferrer">
      <AiOutlineTwitter fontSize={34} className="logo h-7 w-auto filter grayscale opacity-40 hover:opacity-70 hover:brightness-100 transition-all duration-300 pointer" />
    </a>          
    <a href="https://t.me/DextrExchange" target="_blank" rel="noopener noreferrer">
      <SiTelegram fontSize={34} className="logo h-7 w-auto filter grayscale opacity-40 hover:opacity-70 hover:brightness-100 transition-all duration-300 pointer" />
    </a>
    <a href="https://medium.com/@dextr-ex" target="_blank" rel="noopener noreferrer">
      <AiFillMediumCircle fontSize={34} className="logo h-7 w-auto filter grayscale opacity-40 hover:opacity-70 hover:brightness-100 transition-all duration-300 pointer" />
    </a>
    {/* <a href="https://www.linkedin.com/company/dextr-exchange/" target="_blank" rel="noopener noreferrer">
      <AiFillLinkedin fontSize={34} className="hover:text-cyan-300 xs:text-lg sm:text-xl md:text-2xl lg:text-4xl" />
    </a>
    <a href="https://www.instagram.com/dextr_exchange" target="_blank" rel="noopener noreferrer">
      <AiFillInstagram fontSize={34} className="hover:text-cyan-300 xs:text-lg sm:text-xl md:text-2xl lg:text-4xl" />
    </a>
    <a href="https://discord.gg/6BjkQv2cmQ" target="_blank" rel="noopener noreferrer">
      <FaDiscord fontSize={34} className="hover:text-cyan-300 xs:text-lg sm:text-xl md:text-2xl lg:text-4xl" />
    </a> */}
  </motion.div>
</div>

    );
}

export default Header;