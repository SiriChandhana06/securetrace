import React, { useEffect } from "react";
import Navbar from "./Navbar";
import layerzero from "../Assests/Zerolayer.png";
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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SecureTransaction = () => {
  const [inputValue, setInputValue] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [trendingTokens, setTrendingTokens] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/portfoliotracker");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://caiman-wanted-fox.ngrok-free.app/recent-txs",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",

              "Content-Type": "application/json",
            },
          }
        );

        setTransactions(response.data);

        setLoading(false);
      } catch (error) {
        console.log("error", error);

        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const fetchTokens = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://caiman-wanted-fox.ngrok-free.app/top-tokens",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",

              "Content-Type": "application/json",
            },
          }
        );
        setTrendingTokens(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);


  useEffect(() => {
    console.log("Transactions:", transactions);
    console.log("trendingTokens", trendingTokens);
    console.log("Trending Tokens:", trendingTokens);
  }, [trendingTokens]);

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
            SecureTrace analyzes transaction data using specialized blockchain
            forensic techniques, enhancing the detection of intricate patterns
            and potential vulnerabilities.
          </p>

          <form onSubmit={handleSubmit} className=" w-full md:max-w-4xl ">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search for funds, exchange, transactions..."
              className="py-3 px-4 rounded-xl border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4 sm:mb-0 sm:mr-4 w-full placeholder:text-center"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!inputValue}
                className="bg-green-500 w-60 mt-6 text-black font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-green-600 transition-all duration-300"
              >
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
            <div
              className="h-[500px] md:h-[780px] lg:h-[850px] md:w-[780px] lg:w-[710px] overflow-y-auto"
              id="hide-scrollbar"
            >

              <div className="block">
                <h3 className="text-xl font-semibold text-green-500 mb-4  ml-0 lg:ml-12 text-center lg:text-left">
                  TRENDING TOKEN PAGES
                </h3>
                {trendingTokens && trendingTokens.length > 0 ?
                  (
                    trendingTokens.map((token, index) => {
                      const { image, name, price_change_24h, current_price, ath, atl, market_cap, total_supply, circulating_supply, total_volume } = token;
                      return (
                        <div>
                          <div className="border border-green-500 rounded-xl p-6 shadow-md w-[330px] md:w-[640px] ml-1 md:ml-20 lg:ml-12 mb-4">
                            {/* <h3 className="text-xl font-semibold text-green-500 mb-4">
                          TRENDING TOKEN PAGES
                        </h3> */}

                            <div className="md:flex gap-10">
                              <div className="mt-6">
                                <div className="flex items-center gap-4">
                                  <img
                                    className="h-12 w-12"
                                    src={image}
                                    alt="Token"
                                  />

                                  <div>
                                    <h4 className="text-2xl font-bold">
                                      {name}
                                    </h4>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-2xl mt-5 text-green-500 font-bold">
                                    ${current_price}
                                  </h4>
                                  <p className="text-lg text-[#3C704F] font-semibold">
                                    {price_change_24h.toFixed(2)}
                                  </p>
                                </div>
                              </div>

                              <div className="flex justify-between gap-10 md:gap-24">
                                <ul className="mt-4 text-sm md:text-lg font-semibold text-[#717175]">
                                  <li className="text-nowrap">24H Volume</li>
                                  <li className="text-nowrap">Market Cap</li>
                                  <li className="text-nowrap">All Time High</li>
                                  <li className="text-nowrap">All Time Low</li>
                                  <li className="text-nowrap">Circulating Supply</li>
                                  <li className="text-nowrap">Total Supply</li>
                                </ul>

                                <ul className="mt-4 text-sm md:text-lg text-[#B0B0B3] text-right">
                                  <li>${total_volume}</li>
                                  <li>${market_cap}</li>
                                  <li>${ath}</li>
                                  <li>${atl}</li>
                                  <li>{circulating_supply}</li>
                                  <li>{total_supply}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex justify-center">
                    <div className="border border-green-500 rounded-xl p-6 shadow-md w-[330px] md:w-[640px] ml-1 md:ml-20 lg:ml-12">
                      {/* <h3 className="text-xl font-semibold text-green-500 mb-4">
                        TRENDING TOKEN PAGES
                      </h3> */}

                      <div className="md:flex gap-10">
                        <div className="mt-6">
                          <div className="flex items-center gap-4">
                            <img
                              className="h-12 w-12"
                              src={layerzero}
                              alt="Token"
                            />

                            <div>
                              <h4 className="text-2xl font-bold">
                                LayerZero
                              </h4>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-2xl mt-5 text-green-500 font-bold">
                              $0.00
                            </h4>
                            <p className="text-lg text-[#3C704F] font-semibold">
                              0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between gap-10 md:gap-24">
                          <ul className="mt-4 text-sm md:text-lg font-semibold text-[#717175]">
                            <li>24H Volume</li>
                            <li>Market Cap</li>
                            <li>All Time High</li>
                            <li>All Time Low</li>
                            <li>Circulating Supply</li>
                            <li>Total Supply</li>
                          </ul>

                          <ul className="mt-4 text-sm md:text-lg text-[#B0B0B3] text-right">
                            <li>$000,00,000.00</li>
                            <li>$00,000,000.00</li>
                            <li>$0.00</li>
                            <li>$0.00</li>
                            <li>000,000,000.000</li>
                            <li>0,000,000</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    </div>
                  )}






              </div>


            </div>


          </div>

          <div className="">
            <h3 className="text-xl font-semibold text-green-500 mb-4 ml-0  lg:ml-28 text-center lg:text-left">
              TRANSACTIONS
            </h3>

            <div className="rounded-xl px-6 py-8 shadow-md ml-0 md:ml-4 lg:ml-28 md:mr-0 w-[350px] md:w-[750px] flex justify-center md:block ">
              <div className="overflow-x-auto">
                <table className="table-auto w-full text-sm">
                  <thead>
                    <tr className="bg-[#ADADAD] h-12">
                      <th className="px-4">
                        <div className="flex justify-center items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="white"
                              d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353a.75.75 0 0 0-1.18.928a5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061z"
                            />
                            <path
                              fill="white"
                              d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353a.75.75 0 0 0 1.18-.928a5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568z"
                            />
                          </svg>
                        </div>
                      </th>

                      <th className="px-6 md:px-4">
                        <div className="flex justify-center items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>

                          <h1 className="text-[#5D5E63] text-lg">From</h1>
                        </div>
                      </th>

                      <th className="px-28 md:px-24">
                        <div className="flex justify-center items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>

                          <h1 className="text-[#5D5E63] text-lg">To</h1>
                        </div>
                      </th>

                      <th className="px-8 md:px-4">
                        <div className="flex justify-center items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>

                          <h1 className="text-[#5D5E63] text-lg">Token</h1>
                        </div>
                      </th>

                      <th className="px-8 md:px-4">
                        <div className="flex justify-center items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>

                          <h1 className="text-[#5D5E63] text-lg">USD</h1>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {transactions?.txs && transactions?.txs.length > 0 ? (
                      transactions.txs[0].map((transaction, index) => {
                        const { from, to, asset, tokenPrice } = transaction;
                        return (
                          <tr key={index} className='h-12 text-center'>
                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                            <td className='px-4 text-start'>{from}</td>
                            <td className='px-4 text-start'>{to}</td>
                            <td className='px-4 flex gap-2 items-center'><img className='h-5 w-5' src={usdt} alt='usdt' /> {asset}</td>
                            <td className='text-[#808183] font-semibold text-lg px-4 text-start'>${tokenPrice}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr><td colSpan="5" className="text-center py-4">No transactions available</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureTransaction;
