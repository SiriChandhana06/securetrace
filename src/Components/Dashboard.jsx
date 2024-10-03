import React from 'react';
import Portfolio from '../Assests/Portfolio.png';
import time from '../Assests/time.png';
import audio from '../Assests/audio.png';
import Transfer from './Transfer';

const Dashboard = () => {

    return (
        <div className="p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-64">
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 sm:w-[300px] md:w-[550px] rounded-xl border border-black shadow-md shadow-gray-500">
                    <div className='flex gap-2'>
                        <img className='h-6 w-6' src={Portfolio} alt='portfolio' />
                        <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
                    </div>
                    <table className="w-full text-center">
                        <thead>
                            <tr className="bg-[#F4F4F4] h-10">
                                <th className=' px-4'>Asset</th>
                                <th className=' px-4'>Price</th>
                                <th className=' px-4'>Holdings</th>
                                <th className=' px-4'>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t h-10 even:bg-[#F4F4F4] odd:bg-white">
                                <td>Berry</td>
                                <td>$52.00K <span className="text-green-500">+0.02</span></td>
                                <td>$52.005 Berry</td>
                                <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            </tr>
                            <tr className="border-t h-10 even:bg-[#F4F4F4] odd:bg-white">
                                <td>USDI</td>
                                <td>$12.00K <span className="text-green-500">+0.02</span></td>
                                <td>$12.00K USDI</td>
                                <td>$12.00K <span className="text-green-500">+0.02</span></td>
                            </tr>
                            <tr className="border-t h-10 even:bg-[#F4F4F4] odd:bg-white">
                                <td>Berry</td>
                                <td>$52.00K <span className="text-green-500">+0.02</span></td>
                                <td>$52.005 Berry</td>
                                <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            </tr>
                            <tr className="border-t h-10 even:bg-[#F4F4F4] odd:bg-white">
                                <td>USDI</td>
                                <td>$12.00K <span className="text-green-500">+0.02</span></td>
                                <td>$12.00K USDI</td>
                                <td>$12.00K <span className="text-green-500">+0.02</span></td>
                            </tr>
                            <tr className="border-t h-10 even:bg-[#F4F4F4] odd:bg-white">
                                <td>Berry</td>
                                <td>$52.00K <span className="text-green-500">+0.02</span></td>
                                <td>$52.005 Berry</td>
                                <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            </tr>
                            <tr className="border-t h-10 even:bg-[#F4F4F4] odd:bg-white">
                                <td>USDI</td>
                                <td>$12.00K <span className="text-green-500">+0.02</span></td>
                                <td>$12.00K USDI</td>
                                <td>$12.00K <span className="text-green-500">+0.02</span></td>
                            </tr>
                            <tr className="border-t h-10 even:bg-[#F4F4F4] odd:bg-white">
                                <td>Berry</td>
                                <td>$52.00K <span className="text-green-500">+0.02</span></td>
                                <td>$52.005 Berry</td>
                                <td>$52.00K <span className="text-green-500">+0.02</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="bg-white p-6 sm:w-[300px] md:w-[550px] rounded-xl border border-black shadow-md shadow-gray-500">
                    <div className='flex gap-2'>
                        <img className='h-6 w-6' src={time} alt='time' />
                        <h3 className="text-lg font-semibold mb-4">Balance History</h3>
                    </div>
                    <div className="h-32 bg-gray-200 rounded-lg">
                        {/* Placeholder for graph */}
                    </div>
                </div>


                <div className="bg-white p-6 sm:w-[300px] md:w-[550px] rounded-xl border border-black shadow-md shadow-gray-500">
                    <div className='flex gap-2'>
                        <img className='h-6 w-6' src={audio} alt='time' />
                        <h3 className="text-lg font-semibold mb-4">Visualizer</h3>
                    </div>
                    <div className="h-32 bg-gray-200 rounded-lg">
                        {/* Placeholder for visualizer */}
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
                <Transfer/>
            </div>
        </div>
    );
};

export default Dashboard;