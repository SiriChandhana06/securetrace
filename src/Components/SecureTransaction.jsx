import React from 'react';
import Navbar from './Navbar';
import layerzero from '../Assests/Zerolayer.png';
import eth from "../Assests/eth.png";
import ens from "../Assests/ens.png";
import eth1 from "../Assests/eth1.png";
import usdc from "../Assests/usdc.png";
import arbi from "../Assests/Arbi.png";
import arbi2 from "../Assests/arbi2.png";
import retn from "../Assests/return.png";
import usdt from "../Assests/usdt.png";
import leaf from "../Assests/leaf.png";
import plus from "../Assests/plus.png";
import weth from "../Assests/weth.png";
import twitter from "../Assests/twitter.png";
import world from "../Assests/world.png";
import share from "../Assests/share.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SecureTransaction = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();  

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/portfoliotracker');  
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }


    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="flex flex-col items-center justify-center py-10 px-4 bg-white">
                    <h1 className="text-3xl font-bold text-center mb-4">
                        SecureTrace Transactions
                    </h1>
                    <p className="text-center text-gray-600 mb-6 max-w-2xl font-semibold">
                        SecureTrace analyzes transaction data using specialized blockchain forensic techniques,
                        enhancing the detection of intricate patterns and potential vulnerabilities.
                    </p>
                    
                    <form onSubmit={handleSubmit} className=" w-full md:max-w-4xl ">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Search for funds, exchange, transactions..."
                            className="py-3 px-4 rounded-xl border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4 sm:mb-0 sm:mr-4 w-full placeholder:text-center"
                        />
                        <div className='flex justify-center'>
                            <button type='submit' disabled={!inputValue} className="bg-green-500 w-60 mt-6 text-black font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-green-600 transition-all duration-300">
                                Scan Now
                            </button>
                        </div>
                    </form>
                </div>

            </div>


            <div className="container px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-80">
                {/* <div className="grid grid-cols-1"> */}
                    <div className="lg:col-span-1 flex flex-col gap-10">
                        <div className="border border-green-500 rounded-xl p-6 shadow-md w-[350px] md:w-[640px] mx-2 md:ml-20 lg:ml-12 md:mr-0">
                            <h3 className="text-xl font-semibold text-green-500 mb-4">TRENDING TOKEN PAGES</h3>
                            <div className='md:flex gap-10'>
                                <div className='mt-6'>
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="h-12 w-12"
                                            src={layerzero}
                                            alt="Token"
                                        />
                                        <div>
                                            <h4 className="text-2xl font-bold">LayerZero</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl mt-5 text-green-500 font-bold">$5.05</h4>
                                        <p className="text-lg text-[#3C704F] font-semibold">+0.28</p>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-10 md:gap-24'>
                                    <ul className="mt-4 text-sm md:text-lg font-semibold text-[#717175]">
                                        <li>24H Volume</li>
                                        <li>Market Cap</li>
                                        <li>All Time High</li>
                                        <li>All Time Low</li>
                                        <li>Circulating Supply</li>
                                        <li>Total Supply</li>
                                    </ul>
                                    <ul className="mt-4 text-sm md:text-lg text-[#B0B0B3] text-right">
                                        <li>$322,161,329.00</li>
                                        <li>$566,596,228.95</li>
                                        <li>$5.53</li>
                                        <li>$2.48</li>
                                        <li>112,152,856.088</li>
                                        <li>1,000,000,000</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-green-500 mb-4 ml-12">TOP ENTITIES</h3>
                            <div className="border border-green-500 rounded-xl p-6 shadow-md w-[350px] md:w-[640px] ml-1 md:ml-20 lg:ml-12">
                                <div className="flex items-center gap-4">
                                    <img
                                        className="h-12 w-12"
                                        src={eth}
                                        alt="Ethereum Name Service"
                                    />
                                    <div>
                                        <h4 className=" text-xl md:text-2xl font-bold">Ethereum Name Service</h4>
                                        <h4 className='text-[#868789] font-semibold'>Total Balance</h4>
                                        <div className='flex gap-4 md:gap-10'>
                                            <h4 className=" text-xl md:text-2xl text-[#8A94A6] font-bold">$1,368,183,966.47</h4>
                                            <p className="mt-1 font-bold text-[#3C6F4E]">+47.47M</p>
                                        </div>
                                        <div className='flex gap-5 py-2'>
                                            <div className='flex justify-center gap-5 border-x-2 border-black p-2'>
                                                <img className='h-5 w-5' src={world} alt="" />
                                                <img className='h-5 w-5' src={twitter} alt="" />
                                            </div>
                                            <div>
                                                <button className='flex gap-2 bg-[#0171D9] py-2 px-4 rounded'><img className='mt-1 h-4 w-4' src={share} alt="share" /><h1 className='text-[#AECCE7]'>Share</h1> </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                <table className="mt-4 w-full text-center text-sm">
                                    <thead>
                                        <tr>
                                            <th className="text-center text-[#8A8B8D] px-4">Asset</th>
                                            <th className="text-center text-[#8A8B8D] px-4">Price</th>
                                            <th className="text-center text-[#8A8B8D] px-4">Holdings</th>
                                            <th className="text-center text-[#8A8B8D] px-4">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='h-16'>
                                            <td className='px-4'>
                                                <div className='flex gap-2 justify-center'>
                                                    <img className='h-6 w-6' src={ens} alt='ens' />
                                                    <h1>ENS</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex gap-4 justify-center'>
                                                    <h1 className='text-[#B4B4B7] font-semibold'>$19.85</h1>
                                                    <h1 className='text-[#437C56] font-semibold'>+$0.70</h1>
                                                </div>
                                            </td>
                                            <td className='text-center text-[#A1A2A5] font-semibold px-4'>66.961M<h1 className='text-[#6F6F73] ml-10'>ENS</h1></td>
                                            <td className='px-4'>
                                                <div className='flex gap-4 justify-center'>
                                                    <h1 className='text-[#B0B1B3] font-semibold'>$1.33B</h1>
                                                    <h1 className='text-[#407653] font-semibold'>+$46.87M</h1>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='h-16'>
                                            <td className='px-4'>
                                                <div className='flex gap-2 justify-center'>
                                                    <img className='h-6 w-6' src={eth1} alt='eth' />
                                                    <h1>ETH</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex gap-4 justify-center'>
                                                    <h1 className='text-[#B4B4B7] font-semibold'>$2,670.34</h1>
                                                    <h1 className='text-[#437C56] font-semibold'>+$51.60</h1>
                                                </div>
                                            </td>
                                            <td className='text-center text-[#A1A2A5] font-semibold px-4'>11.415K<h1 className='text-[#6F6F73] ml-10'>ETH</h1></td>
                                            <td className='px-4'>
                                                <div className='flex gap-4 justify-center'>
                                                    <h1 className='text-[#B0B1B3] font-semibold'>$30.48M</h1>
                                                    <h1 className='text-[#407653] font-semibold'>+$587.03K</h1>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='h-16'>
                                            <td className='px-4'>
                                                <div className='flex gap-2 justify-center'>
                                                    <img className='h-6 w-6' src={usdc} alt='usdc' />
                                                    <h1>USDC</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex gap-4 justify-center'>
                                                    <h1 className='text-[#B4B4B7] font-semibold'>$1.00</h1>
                                                    <h1 className='text-[#437C56] font-semibold'>+$0.00</h1>
                                                </div>
                                            </td>
                                            <td className='text-center text-[#A1A2A5] font-semibold px-4'>5.785M<h1 className='text-[#6F6F73] ml-10'>USDC</h1></td>
                                            <td className='px-4'>
                                                <div className='flex gap-4 justify-center'>
                                                    <h1 className='text-[#B0B1B3] font-semibold'>$5.79M</h1>
                                                    <h1 className='text-[#407653] font-semibold'>+$0.00</h1>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h3 className="text-xl font-semibold text-green-500 mb-4 ml-20 lg:ml-28 ">TRANSACTIONS</h3>
                        <div className="rounded-xl px-6 py-8 shadow-md mx-1 md:ml-4 lg:ml-28 md:mr-0 w-[350px] md:w-[750px]">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full text-sm">
                                    <thead>
                                        <tr className="bg-[#ADADAD] h-12">
                                            <th className='px-4'>
                                                <div className='flex justify-center items-center space-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353a.75.75 0 0 0-1.18.928a5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061z" /><path fill="white" d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353a.75.75 0 0 0 1.18-.928a5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568z" /></svg></div>
                                            </th>
                                            <th className='px-6 md:px-4'>
                                                <div className="flex justify-center items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                                    <h1 className='text-[#5D5E63] text-lg'>From</h1>
                                                </div>
                                            </th>
                                            <th className='px-28 md:px-24'>
                                                <div className="flex justify-center items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                                    <h1 className='text-[#5D5E63] text-lg'>To</h1>
                                                </div>
                                            </th>
                                            <th className='px-8 md:px-4'>
                                                <div className="flex justify-center items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                                    <h1 className='text-[#5D5E63] text-lg'>Token</h1>
                                                </div>
                                            </th>
                                            <th className='px-8 md:px-4'>
                                                <div className="flex justify-center items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                                    <h1 className='text-[#5D5E63] text-lg'>USD</h1>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol: L2 US..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={usdt} alt='usdt' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>USDT</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$64.12</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi2} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0xB11f50778880...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={leaf} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Owlt Finance: Bridge...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={eth1} alt='eth' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>ETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$5.89</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol: L2 US..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-4 w-4' src={usdt} alt='usdt' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>USDT</h1></div></td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$64.12</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi2} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0xB11f50778880...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={leaf} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Owlt Finance: Bridge...</h1></div></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={eth1} alt='eth' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>ETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$5.89</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol: L2 US..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={usdt} alt='usdt' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>USDT</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$64.12</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi2} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0xB11f50778880...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={leaf} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Owlt Finance: Bridge...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={eth1} alt='eth' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>ETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$5.89</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol: L2 US..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={usdt} alt='usdt' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>USDT</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$64.12</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi2} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0xB11f50778880...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={leaf} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Owlt Finance: Bridge...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={eth1} alt='eth' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>ETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$5.89</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecureTransaction
