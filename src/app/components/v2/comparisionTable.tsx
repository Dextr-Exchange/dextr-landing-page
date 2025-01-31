import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const data = [
  {
    feature: 'Dual Sided Liquidity Provision',
    amm: true,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Single Sided Liquidity Provision',
    amm: false,
    orderBooks: true,
    carbonDefi: true,
  },
  {
    feature: 'Multi-Market Revolving Liquidity',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Conditional Market Making',
    amm: false,
    orderBooks: true,
    carbonDefi: true,
  },
  {
    feature: 'Custom Fee Tiers',
    amm: true,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Economic Guarantee against MEV Exploits',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Price Feed Source Selection',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Rank based Priority',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Universal Hooks',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Dynamic LP Fee Discount',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Order Flow Identification',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Reputation Based Rewards',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'AI Agents',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
];

const ComparisonTable = () => {
  return (
    <div className="lg:mx-10 mx-1 p-6 text-white">
      <div className="mx-auto lg:px-4">
        <h2 className="text-4xl font-primary text-gray-50 sm:text-4xl mb-8">
          How are we better?
        </h2>
        <div className="">
          <table className="min-w-full text-left font-secondary">
            <thead>
              <tr className=''>
                <th className="px-6 py-3 max-sm:px-2 max-sm:py-2 border-b text-gray-500 border-gray-700 text-lg font-light capitalize max-md:text-base max-sm:text-sm tracking-wide"></th>
                <th className="px-6 py-3 max-sm:px-2 max-sm:py-2 border-b text-gray-500 border-gray-700 text-lg font-light capitalize max-md:text-base max-sm:text-sm tracking-wide">CF-AMM</th>
                <th className="px-6 py-3 max-sm:px-2 max-sm:py-2 border-b text-gray-500 border-gray-700 text-lg font-light capitalize max-md:text-base max-sm:text-sm tracking-wide">ORDER <br /> BOOKS</th>
                <th className="px-6 py-3 max-sm:px-2 max-sm:py-2 border-b text-gray-300 border-gray-700 text-lg font-light capitalize max-md:text-base max-sm:text-sm tracking-wide">DEXTR</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 max-sm:px-2 max-sm:py-2 border-b border-gray-700 max-md:text-sm max-sm:text-sm">{item.feature}</td>
                  <td className="px-6 py-4 max-sm:px-2 max-sm:py-2 border-b border-gray-700">
                    {item.amm ? <FaCheck className="text-green-500 max-md:text-sm" /> : <FaTimes className="text-red-500 max-md:text-sm" />}
                  </td>
                  <td className="px-6 py-4 max-sm:px-2 max-sm:py-2 border-b border-gray-700">
                    {item.orderBooks ? <FaCheck className="text-green-500 max-md:text-sm" /> : <FaTimes className="text-red-500 max-md:text-sm" />}
                  </td>
                  <td className="px-6 py-4 max-sm:px-2 max-sm:py-2 border-b border-gray-700">
                    {item.carbonDefi ? <FaCheck className="text-green-500 max-md:text-sm" /> : <FaTimes className="text-red-500 max-md:text-sm" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
