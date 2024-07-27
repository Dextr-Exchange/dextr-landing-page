import { motion } from 'framer-motion';
import Image from 'next/image';
import StackIcon from "../../../../public/icons/stack.png"
import LiquidityIcon from "../../../../public/icons/liquidity.png"
import AbilityIcon from "../../../../public/icons/ability.png"
import GoalsIcon from "../../../../public/icons/goals.png"

import { MdCancelPresentation } from "react-icons/md";

const features = [
  {
    title: 'Liquidity Abstraction',
    description: 'Use my 1 ETH to Buy BTC if it reaches $60,000 or Buy Solana if it reaches $80!',
    icon: StackIcon,
  },
  {
    title: 'Single Sided Liquidity Positions',
    description: 'Use my 1 ETH to provide liquidity in ETH/USDC, ETH/BTC and BTC/USDT pairs.',
    icon: LiquidityIcon,
  },
  {
    title: 'Price Source Selection',
    description: 'Use my liquidity based on the global average price feeds from oracle or CEX prices.',
    icon: AbilityIcon,
  },
  {
    title: 'Strategy Adapters',
    description: 'Execute my strategies using interoperable smart contract connectors (Hooks) within Dextr or external DEXs.',
    icon: GoalsIcon,
  },
];

const Features = () => {
  return (
    <div id="features" className="flex flex-col items-center justify-center mx-10 p-6 pb-20 max-md:mt-10 max-md:px-2 max-md:py-6">
      <div className='w-full mb-5 font-primary'>
        <h2 className="lg:text-5xl md:text-3xl text-2xl text-white mb-4">
          One-Stop Strategy Execution!
        </h2>
        {/* <a href="#" className="text-lg text-green-400 mb-8">
          Explore Order Types →
        </a> */}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex font-secondary items-center bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* <Image height={40} width={40} src={feature.icon} alt={feature.title} className="h-12 w-12 mr-4" /> */}
            <Image 
              height={44} 
              width={44} 
              alt={feature.title} 
              src={feature.icon} 
              className="h-11 w-11 mx-4 text-white" 
            />
            <div>
              <h3 className="text-2xl max-md:text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm max-md:text-xs text-gray-400 mt-1 font-light">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
