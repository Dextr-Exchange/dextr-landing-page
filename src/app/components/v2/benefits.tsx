import { motion } from 'framer-motion';
import { FaCoins, FaHandshake, FaShieldAlt, FaGasPump } from "react-icons/fa";

const benefits = [
  {
    title: '100% Fee Retention',
    description: 'LPs retain the entire Trading fees without sharing with other LPs.',
    icon: FaCoins,
  },
  {
    title: '0% Slippage',
    description: 'The price you quotes is what you receive when the trade is executed.',
    icon: FaHandshake,
  },
  {
    title: '100% Compensation',
    description: 'Economic guarantee for any losses arising from MEV exploits.',
    icon: FaShieldAlt,
  },
  {
    title: '25% Less Gas Consumption',
    description: 'Cost-Effective and affordable Transactions.',
    icon: FaGasPump,
  },
];

const Benefits = () => {
  return (
    <div className="py-12 px-10 p-6 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-primary font-extrabold text-gray-50 sm:text-4xl">
          Benefits
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 text-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-lg flex flex-col items-center font-secondary w-full"
              whileHover={{ scale: 1.05 }}
            >
              {/* Applying the gradient to the icons */}
              <benefit.icon 
                className="w-12 h-12 mb-4 text-white" 
                style={{ 
                  background: 'radial-gradient(circle at 50% -5%, #1D428A 20%, #000 50%)', 
                  WebkitMaskImage: '-webkit-linear-gradient(white, white)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} 
              />
              <h3 className="text-xl w-full font-medium text-gray-50">{benefit.title}</h3>
              <p className="mt-2 text-sm w-full font-light text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
