import React from 'react';
import Port from "../Assests/Portfolio.png";

const Portfolio = () => {
    return (
        <div>
            <div className="bg-white p-6 sm:w-[300px] md:w-[550px] rounded-xl border border-black shadow-md shadow-gray-500">
                <div className='flex gap-2'>
                    <img className='h-8 w-8' src={Port} alt='portfolio' />
                    <h3 className="text-2xl font-semibold mb-4">Portfolio</h3>
                </div>
                <div  className="overflow-x-auto">
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
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            <td>$52.005 Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                            <td>$12.00K USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            <td>$52.005 Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                            <td>$12.00K USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            <td>$52.005 Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                            <td>$12.00K USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            <td>$52.005 Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                            <td>$12.00K USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            <td>$52.005 Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                            <td>$12.00K USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            <td>$52.005 Berry</td>
                            <td>$52.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                        <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td>USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                            <td>$12.00K USDI</td>
                            <td>$12.00K <span className="text-green-500">+0.02</span></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
