import React from 'react';
import { FaRegCopy, } from 'react-icons/fa';
import img from '../Assests/person.png';
import { FaShareNodes } from 'react-icons/fa6';
import { useState } from 'react';
import Portfolio from './Portfolio';
import Transfer from './Transfer';

const AddressCard = () => {

  // const defaultCardData = {
  //   address: "0x04b21735E93Fa3f8df70e2Da89e6922616891a88",
  //   amount: "$10,491.48",
  //   greenAmount: "$10,491.48",
  // };

  const [cardData, setCardData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);

  const jsonData = {
    "0x04b21735E93Fa3f8df70e2Da89e6922616891a88": {
      amount: "$10,491.48",
      greenAmount: "$10,491.48",
    },
    "0x1234567890abcdef1234567890abcdef12345678": {
      amount: "$8,234.56",
      greenAmount: "$8,234.56",
    },
    "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef": {
      amount: "$5,678.90",
      greenAmount: "$5,678.90",
    }
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
          <button onClick={handleScanNow} className="bg-green-500 w-40 text-black font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-green-600 transition-all duration-300">
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
            <div className=" mt-2 flex items-center">
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
        <div className='mx-4 md:mx-32 '>
        <div className="">
            <Portfolio />
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
