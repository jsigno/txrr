import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-36 max-w-[1240px] mx-auto px-20'>
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Texas Premier Roofing</h1> */}
      <img src={logo} alt="Logo Image" style={{ width: "300px" }} />
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Services</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden bg-white'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-customBlue m-4'>TEXAS PREMIER ROOFING</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Services</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;