import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='w-full relative h-16 bg-blue-400 border-b border-red-200 px-5 flex justify-between items-center'>
        <div className='flex justify-start items-center gap-4 md:gap-20'>
          <h1 className='text-2xl md:text-5xl text-white font-bold'>BIG_FIVE</h1>
          <div className='hidden md:flex justify-center items-center'>
            <ul className='flex gap-8 text-white text-lg md:text-2xl'>
              <li>
                <Link to='/' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Home</Link>
              </li>
              <li>
                <Link to='/menu' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">About</Link>
              </li>
              <li>
                <Link to='/about' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Report</Link>
              </li>
              <li>
                <Link to='/contacts' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Contacts</Link>
              </li>
            </ul>
          </div>
          <button className='md:hidden text-white' onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='md:hidden bg-blue-400 text-white px-5 py-3'>
          <ul className='flex flex-col gap-4 text-lg'>
            <li>
              <Link to='/' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to='/menu' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={toggleMobileMenu}>About</Link>
            </li>
            <li>
              <Link to='/about' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={toggleMobileMenu}>Reports</Link>
            </li>
            <li>
              <Link to='/contacts' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={toggleMobileMenu}>Contacts</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
