import React from 'react';
import { FaRegCopy, } from 'react-icons/fa';
import img from '../Assests/person.png';
import { FaShareNodes } from 'react-icons/fa6';
import { useState } from 'react';
// import Portfolio from './Portfolio';
import Transfer from './Transfer';
import { useEffect } from 'react';
import Port from "../Assests/Portfolio.png";
import { TiArrowSortedDown } from "react-icons/ti";
import axios from "axios";

const AddressCard = () => {

  // const defaultCardData = {
  //   address: "0x04b21735E93Fa3f8df70e2Da89e6922616891a88",
  //   amount: "$10,491.48",
  //   greenAmount: "$10,491.48",
  // };

  const [cardData, setCardData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chains = ['Ethereum', 'Binance Smart Chain', 'Polygon', 'Avalanche'];
  const [loading, setLoading] = useState(false);
  const [portfolioData, SetPortfolioData] = useState([]);
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalValue, setTotalValue] = useState(0);



  useEffect(() => {
    const fetchPortfolioTracker = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://caiman-wanted-fox.ngrok-free.app/fetch-address-details/0x04b21735E93Fa3f8df70e2Da89e6922616891a88",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",

              "Content-Type": "application/json",
            },
          }
        );

        SetPortfolioData(response.data.tokens[0]);
        console.log(response.data.tokens[0]);

        const tokens = response.data.tokens[0];
        // setPortfolioData(tokens);

        // Calculate total value
        const total = tokens.reduce((sum, item) => {
          const price = parseFloat(item.tokenPrice);
          const holdings = parseFloat(item.tokenBalance);
          return sum + (price * holdings);
        }, 0);

        setTotalValue(total.toFixed(2));


        setLoading(false);
      } catch (error) {
        console.log("error", error);

        setLoading(false);
      }
    };

    fetchPortfolioTracker();
  }, []);

  useEffect(
    () => {
      console.log("portfolio from:", portfolioData.from);
    }, [portfolioData]
  )


  const jsonData = {
    "0x04b21735E93Fa3f8df70e2Da89e6922616891a88": {
      amount: `$${totalValue}`,
      greenAmount: `$${totalValue}`,
    },

  };

  const isValidEthereumAddressOrTxHash = (value) => {
    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/; // For Ethereum address (42 characters, starts with 0x)
    const txHashRegex = /^0x([A-Fa-f0-9]{64})$/;  // For Transaction hash (66 characters, starts with 0x)

    return ethAddressRegex.test(value) || txHashRegex.test(value);
  };


  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardData.address);
    // alert('Address copied to clipboard!');
  };

  const handleScanNow = () => {
    if (!inputValue) {
      alert('Please enter a contract address.');
      return;
    }

    if (!isValidEthereumAddressOrTxHash(inputValue)) {
      alert('Invalid Ethereum address. Please enter a valid input.');
      return;
    }

    const foundData = jsonData[inputValue];
    if (foundData) {
      setCardData({
        address: inputValue,
        amount: foundData.amount,
        greenAmount: foundData.greenAmount,
      });
      setIsPortfolioVisible(true);
    } else {
      alert('Data not found for the given address value.');
    }
    setInputValue('');
  };

  const data = [
    { asset: 'Berry', price: '$00.00K', change: '+0.00', holdings: '00.000 Berry', value: '$00.00K' },
    { asset: 'USDI', price: '$00.00K', change: '+0.00', holdings: '00.00K USDI', value: '$00.00K' },
  ];

  const totalPages = Math.ceil(portfolioData.length / rowsPerPage);


  const currentRows = portfolioData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className=' mt-10 md:mt-20'>
          <h1 className="text-3xl font-bold text-center mb-4">
            SecureTrace PortfolioTracker
          </h1>

          <p className="text-center text-gray-600 mb-6 max-w-2xl font-semibold">
            SecureTrace analyzes transaction data using specialized blockchain
            forensic techniques, enhancing the detection of intricate patterns
            and potential vulnerabilities.
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <div className="flex flex-col sm:flex-row items-center w-80 md:w-full md:max-w-3xl ">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter address value"
            className="py-3 px-4 rounded-xl border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4 sm:mb-0 mx-2 w-full"
          />
          <button onClick={handleScanNow} className="bg-green-500 w-56 lg:w-40 text-black font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-green-600 transition-all duration-300">
            Scan Now
          </button>
        </div>
      </div>
      {cardData && (
        <div className="mx-4 md:mx-32 my-10 border border-black rounded-lg shadow-lg shadow-gray-500 p-4 bg-white flex flex-col lg:flex-row items-center gap-4">
          <div className="flex-1 ml-0 md:ml-4">
            <div className="flex items-center">
              <span className='text-sm md:text-xl text-black font-semibold'>{cardData.address}</span>
              <button onClick={copyToClipboard} className="ml-2 text-sm md:text-xl text-black hover:text-gray-600">
                <FaRegCopy />
              </button>
            </div>
            <div className=" mt-2 md:flex items-center">
              <h1 className='ml-2 lg:ml-0 text-4xl'>{cardData.amount}</h1>
              <span className="text-green-500 text-2xl ml-2 mt-2">{cardData.greenAmount}</span>
              <button className="ml-2 mt-2 text-md md:text-xl text-black hover:text-gray-600">
                <FaShareNodes />
              </button>
            </div>
            <p className="text-gray-400 text-xl mt-1 ml-2 lg:ml-0">
              Ethereum First Funder: <span className='text-black font-semibold text-sm md:text-xl'>{cardData.address}</span>
            </p>
          </div>
          <img src={img} alt='img' />
        </div>
      )}

      {isPortfolioVisible && (
        <div className='mx-4 md:mx-32'>
          {/* <div className="">
            <Portfolio />
          </div> */}
          <div>
            <div className="bg-white p-6  w-full xl:w-[100%] rounded-xl border border-black shadow-md shadow-gray-500">
              <div className='md:flex gap-1 lg:flex-row justify-between items-start lg:items-center'>
                <div className='flex gap-2 items-center mb-4 lg:mb-0'>
                  <img className='h-8 w-8' src={Port} alt='portfolio' />
                  <h3 className="text-xl lg:text-2xl font-semibold">Portfolio</h3>
                  <div className="flex items-center">
                    <button
                      className={`px-4 py-2 font-bold ${currentPage === 1 ? 'cursor-not-allowed opacity-50 ' : 'cursor-pointer'}`}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="black" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0" /></svg>
                    </button>
                    <span className='font-bold text-xl'>
                      {currentPage} / {totalPages}
                    </span>
                    <button
                      className={`px-4 py-2 font-bold ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 12 24"><path fill="black" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>
                    </button>
                  </div>
                </div>

                <div className='flex justify-end'>
                  <button onClick={() => setIsOpen(!isOpen)} className="flex gap-2 md:gap-6 items-center px-3 py-2 bg-gradient-to-t from-[#d3d3d3] to-white text-black rounded-lg border border-black shadow-md hover:bg-gray-300 transition">
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
                <table className="w-full mt-2 text-center">
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
                    {currentRows && currentRows.length > 0 ? (
                      currentRows.map((item, index) => {
                        const asset = item.tokenName;
                        const price = item.tokenPrice;
                        const holdings = item.tokenBalance;
                        const value = (price * holdings); 

                        return (
                          <tr key={index} className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                            <td className='px-4'>{asset}</td>
                            <td className='px-4'>${price}</td>
                            <td className='px-4'>{holdings}</td>
                            <td className='px-4'>${value}</td>
                          </tr>
                        );
                      })
                    ) : (
                      data.map((item, index) => (
                        <tr key={index} className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                          <td>{item.asset}</td>
                          <td>{item.price} <span className="text-green-500">{item.change}</span></td>
                          <td>{item.holdings}</td>
                          <td>{item.value}</td>
                        </tr>
                      ))
                    )}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
          <div className="mt-10 ">
            <Transfer />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
