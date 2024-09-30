import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="flex flex-col items-center justify-center py-10 px-4 bg-white">
                    <h1 className="text-3xl font-bold text-center mb-4">
                        SecureTrace
                    </h1>
                    <p className="text-center text-gray-600 mb-6 max-w-2xl font-semibold">
                        SecureTrace analyzes transaction data using specialized blockchain forensic techniques,
                        enhancing the detection of intricate patterns and potential vulnerabilities.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center w-full max-w-xl">
                        <input
                            type="text"
                            placeholder="Search for funds, exchange, transactions..."
                            className="flex-grow py-3 px-4 rounded-xl border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4 sm:mb-0 sm:mr-4"
                        />
                        <button className="bg-green-500 text-white py-3 px-8 rounded-xl shadow-md hover:bg-green-600 transition-all duration-300">
                            Scan now
                        </button>
                    </div>
                </div>

            </div>

            <div className='text-black'>
                <h1 className='text-center'>support@securetrace.io - securedapp.io - 2024 </h1>
                <h1 className='text-center'>Terms od service and privacy</h1>
            </div>
        </div>
    )
}

export default Home;
