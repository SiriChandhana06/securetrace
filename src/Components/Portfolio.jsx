import React from 'react';
import { useState } from 'react';
import Port from "../Assests/Portfolio.png";
import { TiArrowSortedDown } from "react-icons/ti";


const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const chains = ['Ethereum', 'Binance Smart Chain', 'Polygon', 'Avalanche'];

    const data = [
        { asset: 'Berry', price: '$52.00K', change: '+0.02', holdings: '52.005 Berry', value: '$52.00K' },
        { asset: 'USDI', price: '$12.00K', change: '+0.02', holdings: '12.00K USDI', value: '$12.00K' },
    ];

    return (
        <div>
            <div className="bg-white p-6 sm:w-[300px] md:w-full rounded-xl border border-black shadow-md shadow-gray-500">
                <div className='flex  lg:flex-row justify-between items-start lg:items-center'>
                    <div className='flex gap-2 items-center mb-4 lg:mb-0'>
                        <img className='h-8 w-8' src={Port} alt='portfolio' />
                        <h3 className="text-xl lg:text-2xl font-semibold">Portfolio</h3>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className="flex gap-6 items-center px-3 py-2 bg-gradient-to-t from-[#d3d3d3] to-white text-black rounded-lg border border-black shadow-md hover:bg-gray-300 transition">
                            <span className="font-semibold">Filter by Chain</span>
                            <TiArrowSortedDown />
                        </button>
                        {isOpen && (
                            <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                                {chains.map((chain, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => {
                                            console.log(`Selected chain: ${chain}`);
                                            setIsOpen(false); // Close dropdown on select
                                        }}
                                    >
                                        {chain}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-center">
                        <thead>
                            <tr className="h-10">
                                <th className=' px-4'>Asset</th>
                                <th className=' px-4'>
                                    <div className="flex justify-center items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                        <h1>Price</h1>
                                    </div>
                                </th>
                                <th className=' px-4'>
                                    <div className="flex justify-center items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                        <h1>Holdings</h1>
                                    </div>
                                </th>
                                <th className=' px-4'>
                                    <div className="flex justify-center items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                        <h1>Value</h1>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => (
                        <tr key={index} className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>{item.asset}</td>
                            <td>{item.price} <span className="text-green-500">{item.change}</span></td>
                            <td>{item.holdings}</td>
                            <td>{item.value} <span className="text-green-500">{item.change}</span></td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
