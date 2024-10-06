import React from 'react';
import {FaRegCopy,} from 'react-icons/fa';
import img from '../Assests/person.png';
import { FaShareNodes } from 'react-icons/fa6';

const AddressCard = () => {
  const address = "0xd2F63453ABd30C2C4496580f8d68ec38C7490D37";
  const amount = "$10,491.48";
  const greenAmount = "$10,491.48";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
  };

  return (
    <div className="mx-4 md:mx-32 my-10 border border-black rounded-lg shadow-lg shadow-gray-500 p-4 bg-white flex flex-col md:flex-row items-center gap-4">
     
      <div className="flex-1 ml-0 md:ml-4">
        <div className="flex items-center">
          <span className='text-sm md:text-xl text-black font-semibold'>{address}</span>
          <button onClick={copyToClipboard} className="ml-2 text-sm md:text-xl text-black hover:text-gray-600">
            <FaRegCopy />
          </button>
        </div>
        <div className=" mt-2 flex items-center">
          <h1 className='ml-2 lg:ml-0 text-4xl'>{amount}</h1>
          <span className="text-green-500 text-2xl ml-2 mt-2">{greenAmount}</span>
          <button className="ml-2 mt-2 text-md md:text-xl text-black hover:text-gray-600">
            <FaShareNodes />
          </button>
        </div>
        <p className="text-gray-400 text-xl mt-1 ml-2 lg:ml-0">
          Ethereum First Funder: <span className='text-black font-semibold text-sm md:text-xl'>{address}</span>
        </p>
      </div>
      <img src={img} alt='img'/>
    </div>
  );
};

export default AddressCard;
