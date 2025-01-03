import React from 'react';
import time from '../Assests/time.png';
import audio from '../Assests/audio.png';
// import Transfer from './Transfer';
// import Portfolio from './Portfolio';
// import Transactions from './Transactions';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 gap-10 ">
            <div className="mx-4 space-y-10 md:mx-14">
                {/* <Portfolio /> */}

                {/* <div className="w-full"> */}
                    {/* <Transfer /> */}
                    {/* <Transactions/> */}
                {/* </div> */}

               <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-16'>
                <div className="w-full p-6 bg-white border border-black shadow-md rounded-xl shadow-gray-500">
                    <div className="flex gap-2">
                        <img className="w-6 h-6" src={time} alt="time" />
                        <h3 className="mb-4 text-lg font-semibold">Balance History</h3>
                    </div>
                    <div className="h-32 bg-gray-200 rounded-lg">
                        {/* Placeholder for graph */}
                    </div>
                </div>

                
                <div className="w-full p-6 mt-10 bg-white border border-black shadow-md rounded-xl shadow-gray-500 md:mt-0">
                    <div className="flex gap-2">
                        <img className="w-6 h-6" src={audio} alt="audio" />
                        <h3 className="mb-4 text-lg font-semibold">Visualizer</h3>
                    </div>
                    <div className="h-32 bg-gray-200 rounded-lg">
                        {/* Placeholder for visualizer */}
                    </div>
                </div>
                </div>


            </div>
        </div>
    );
};

export default Dashboard;