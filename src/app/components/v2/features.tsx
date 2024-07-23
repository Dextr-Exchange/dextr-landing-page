import { motion } from 'framer-motion';
import { FaExchangeAlt, FaChartLine, FaDollarSign, FaAdjust } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";

const features = [
  {
    title: '1. Liquidity Abstraction',
    description: 'Use my 1 ETH to Buy BTC if it reaches $60,000 or Buy Solana if it reaches $80!',
    icon: FaExchangeAlt,
  },
  {
    title: '2. Single Sided Liquidity Positions',
    description: 'Use my 1 ETH to provide liquidity in ETH/USDC, ETH/BTC and BTC/USDT pairs.',
    icon: FaChartLine,
  },
  {
    title: '3. Price Source Selection',
    description: 'Use my liquidity based on the Global Average price feeds from Oracle or CEX Prices.',
    icon: FaDollarSign,
  },
  {
    title: '4. Strategy Adapters',
    description: 'Execute my strategies using interoperable smart contract connectors within Dextr or external DEXs. (Hooks).',
    icon: FaAdjust,
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-10 p-6 pb-20">
      <div className='w-full mb-5 font-primary'>
        <h2 className="text-4xl font-bold text-white mb-4">
          One-Stop Strategy Execution.
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
            <feature.icon className="h-12 w-12 mr-4 text-white" />
            <div>
              <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400 mt-2 font-light">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
