import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
          setUserEmail(storedEmail);
        }
      }, []);


    return (
        <nav className="bg-[#303030] p-4 rounded-full flex justify-between items-center mx-4 lg:mx-32 my-4">
            <div className="text-white font-bold text-2xl ml-4 ">
                SecureTrace
            </div>


            <div className="hidden md:flex space-x-8 text-white">
                <a href="/" className="hover:text-gray-400">Dashboard</a>
                <a href="/visualizer" className="hover:text-gray-400">Visualizer</a>
                <a href="/portfoliotracker" className="hover:text-gray-400">Portfolio Tracker</a>
            </div>
            {userEmail ? (
                 <button className="hidden md:flex bg-white text-black rounded-full px-4 py-2">{userEmail}</button>
             ) : (
            <Link to='/loginpage'>
                <button className="hidden md:flex bg-white text-black rounded-full px-4 py-2">
                    Login
                </button>
            </Link>
        )}

            <div className="md:hidden text-white" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[#303030] mt-6 mx-4 text-white flex flex-col items-center space-y-4 py-4 rounded-lg">
                    <a href="/" className="hover:text-gray-400" onClick={toggleMenu}>Dashboard</a>
                    <a href="/visualizer" className="hover:text-gray-400" onClick={toggleMenu}>Visualizer</a>
                    <a href="/portfoliotracker" className="hover:text-gray-400" onClick={toggleMenu}>Portfolio Tracker</a>
                    <Link to='/loginpage'>
                    <button className="bg-white text-black rounded-full px-4 py-2">
                        Login
                    </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
