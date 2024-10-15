'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { Link } from 'react-scroll/modules';

const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex items-center justify-around px-10 py-4 bg-gradient-to-r from-white via-red-100 to-yellow-50 ">
            {/* Logo container */}
            <div className="flex items-center">
                <Image src={'/Frame2.png'} alt='logo' width={40} height={40} />
                <p className="ml-2 text-2xl font-bold text-red-500">Foodie</p>
            </div>

            {/* Menu container */}
            <div className="hidden md:flex space-x-6">
                <ul className="flex items-center space-x-6">
                    <Link activeClass='active' to='page1' spy={true} smooth={true} offset={50} duration={500} > 
                     <li className="text-gray-800 font-semibold hover:text-red-500 cursor-pointer transition-colors duration-300">
                        Home
                    </li>
                    </Link>
                    <Link activeClass='active' to='page2' spy={true} smooth={true} offset={50} duration={500} > 
                    <li className="text-gray-800 font-semibold hover:text-red-500 cursor-pointer transition-colors duration-300">
                      About Us
                    </li> </Link>
                    <Link activeClass='active' to='page3' spy={true} smooth={true} offset={50} duration={500} > 
                    <li className="text-gray-800 font-semibold hover:text-red-500 cursor-pointer transition-colors duration-300">
                       Why Us
                    </li> 
                    </Link>
                    <Link activeClass='active' to='page4' spy={true} smooth={true} offset={50} duration={500} > 
                    <li className="text-gray-800 font-semibold hover:text-red-500 cursor-pointer transition-colors duration-300">
                        Our Menu
                    </li> </Link>
                    <Link activeClass='active' to='page5' spy={true} smooth={true} offset={50} duration={500} > 
                    <li className="text-gray-800 font-semibold hover:text-red-500 cursor-pointer transition-colors duration-300">
                        Footer
                    </li> </Link>
                </ul>
                <button className="ml-6 px-4 py-2 border-2 font-bold border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                    Login
                </button>
            </div>

            {/* Mobile menu icon */}
            <div className="md:hidden">
                <FaBars size={24} className="cursor-pointer" onClick={toggleMenu} />
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 p-6 md:hidden">
                    <ul className="flex flex-col space-y-4">
                    <Link activeClass='active' to='page1' spy={true} smooth={true} offset={50} duration={500} > 
                        <li  onClick={toggleMenu}  className="text-gray-800 hover:text-red-500 cursor-pointer transition-colors duration-300">
                            Home
                        </li> 
                        </Link>
                        <Link activeClass='active' to='page2' spy={true} smooth={true} offset={50} duration={500} > 
                        <li  onClick={toggleMenu}  className="text-gray-800 hover:text-red-500 cursor-pointer transition-colors duration-300">
                            About Us
                        </li></Link>
                        <Link activeClass='active' to='page3' spy={true} smooth={true} offset={50} duration={500} > 
                        <li  onClick={toggleMenu}  className="text-gray-800 hover:text-red-500 cursor-pointer transition-colors duration-300">
                            Why us
                        </li></Link>
                        <Link activeClass='active' to='page4' spy={true} smooth={true} offset={50} duration={500} > 
                        <li  onClick={toggleMenu}  className="text-gray-800 hover:text-red-500 cursor-pointer transition-colors duration-300">
                            Our Menu
                        </li></Link>
                        <Link activeClass='active' to='page5' spy={true} smooth={true} offset={50} duration={500} > 
                        <li  onClick={toggleMenu}  className="text-gray-800 hover:text-red-500 cursor-pointer transition-colors duration-300">
                            Footer
                        </li></Link>
                        <li>
                            <button   onClick={toggleMenu}  className="mt-4 px-4 py-2 border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navber;
