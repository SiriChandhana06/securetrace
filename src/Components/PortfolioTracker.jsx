import React from 'react';
import Navbar from './Navbar';
import Transfer from './Transfer';
import Portfolio from './Portfolio';
import AddressCard from './AddressCard';

const PortfolioTracker = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <AddressCard/>
            </div>
            <div className='lg:flex gap-10 mx-4 md:mx-12'>
                <div className="">
                    <Portfolio/>
                </div>
                <div className="w-full mt-10 lg:mt-0">
                    <Transfer/>
                </div>
            </div>
            <div className='text-black my-10'>
                <h1 className='text-center'>support@securetrace.io - securedapp.io - 2024 </h1>
                <h1 className='text-center'>Terms od service and privacy</h1>
            </div>
        </div>
    )
}

export default PortfolioTracker;
