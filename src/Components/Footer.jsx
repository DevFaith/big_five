import React from 'react';
import { FaXTwitter, FaSquareInstagram, FaSquareFacebook, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer bg-slate-700 flex justify-center items-center gap-8 py-4'>
      <div className='flex gap-4 text-white text-2xl'>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 transition-colors duration-300'>
          <FaXTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 transition-colors duration-300'>
          <FaSquareInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-700 transition-colors duration-300'>
          <FaSquareFacebook />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-600 transition-colors duration-300'>
          <FaLinkedin />
        </a>
      </div>
      <p className='text-white'>&copy; 2024 Big_five Life</p>
    </div>
  );
}

export default Footer;
