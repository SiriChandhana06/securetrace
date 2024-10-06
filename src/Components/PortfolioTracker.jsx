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
            <div className=''>
                <div className="md:mx-32 mx-4">
                    <Portfolio/>
                </div>
                <div className="md:mx-32 mx-4 mt-10">
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
