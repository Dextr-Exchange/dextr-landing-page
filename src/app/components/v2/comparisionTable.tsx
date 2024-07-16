import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const data = [
  {
    feature: 'MEV Sandwich Attack Resistant',
    amm: false,
    orderBooks: true,
    carbonDefi: true,
  },
  {
    feature: 'Multi-Order Strategies',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Native Limit Orders',
    amm: false,
    orderBooks: true,
    carbonDefi: true,
  },
  {
    feature: 'Native Range Orders',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Custom Fee Tiers',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Rotating Liquidity',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Dual or Single-Sided Provision',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Irreversible Orders',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Adjustable Order Conditions',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Pair Any ERC-20 Tokens',
    amm: false,
    orderBooks: false,
    carbonDefi: true,
  },
  {
    feature: 'Onchain',
    amm: false,
    orderBooks: true,
    carbonDefi: true,
  },
];

const ComparisonTable = () => {
  return (
    <div className="mx-10 p-6 text-white">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-primary font-extrabold text-gray-50 sm:text-4xl mb-8">
          How are we better?
        </h2>
        <div className="">
          <table className="min-w-full text-left font-secondary">
            <thead>
              <tr className=''>
                <th className="px-6 py-3 border-b text-gray-500 border-gray-700 text-lg font-light capitalize max-md:text-base max-sm:text-sm tracking-wide"></th>
                <th className="px-6 py-3 border-b text-gray-500 border-gray-700 text-lg font-light capitalize max-md:text-base max-sm:text-sm tracking-wide">CFMM</th>
                <th className="px-6 py-3 border-b text-gray-500 border-gray-700 text-lg font-light capitalize max-md:text-base max-sm:text-sm tracking-wide">ORDER <br /> BOOKS</th>
                <th className="px-6 py-3 border-b text-gray-300 border-gray-700 text-lg font-light capitalize max-md:text-base max-sm:text-sm tracking-wide">DEXTR</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border-b border-gray-700 max-md:text-sm max-sm:text-xs">{item.feature}</td>
                  <td className="px-6 py-4 border-b border-gray-700">
                    {item.amm ? <FaCheck className="text-green-500 max-md:text-sm" /> : <FaTimes className="text-red-500 max-md:text-sm" />}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-700">
                    {item.orderBooks ? <FaCheck className="text-green-500 max-md:text-sm" /> : <FaTimes className="text-red-500 max-md:text-sm" />}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-700">
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
