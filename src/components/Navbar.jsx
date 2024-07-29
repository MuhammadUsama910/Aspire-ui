import { useState } from 'react';
import { navLinks } from '../constants/constant';
import Button from './Button';
import { CiMenuFries } from "react-icons/ci";
import {brand_logo} from '../assets'


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
    <header className="container">
      <div className="px-0 lg:px-4 pt-9">
        
        <div className="flex justify-between items-center">

          <div className='md:hidden cursor-pointer'>
            <CiMenuFries size={24} onClick={() => setOpenMenu(!openMenu)}/>
          </div>

          {/* md:static md:flex md:flex-row md:shadow-none md:rounded-none 
          md:items-center md:py-0 md:gap-3 md:font-medium md:text-black md:cursor-pointer */}

          <ul className={`${openMenu ? "left-0" : "-left-full"} md:hidden absolute top-[90px] w-11/12 sm:w-3/4 h-5/6 flex flex-col 
            gap-5 items-start px-12 max-sm:py-6 sm:py-4 bg-white shadow-2xl rounded-lg transition-all duration-300 ease-linear select-none
            `}>
            {
              navLinks?.map((item, index) => (
                <li
                  key={index}
                  className="text-navColor cursor-pointer hover:text-[#0070D1]"
                  onClick={() => setOpenMenu(!openMenu)}>
                  {item}
                </li>
              ))
            }

            <li> <Button classes={'text-white px-5 font-normal py-1'}> Login </Button></li>

          </ul>

          <img
            className='cursor-pointer'
            src={brand_logo}
            alt='logo'
          />

          <ul className="flex gap-x-10 md:gap-x-5 lg:gap-x-8 xl:gap-x-12 max-md:hidden">
            {
              navLinks?.map((link, index) => (
                <li 
                  key={index}
                  className='text-navColor font-medium text-base md:text-sm lg:text-base xl:text-lg leading-5 cursor-pointer'
                >
                  {link}
                </li>
              ))
            }
          </ul>

          <div className='flex items-center gap-x-5 sm:gap-x-2.5 md:gap-x-3 lg:gap-x-6 xl:gap-x-8'>
            
            <p className='max-md:hidden md:block text-navColor font-medium text-base sm:text-sm lg:text-base xl:text-lg leading-5'> Login </p>
          
            <Button classes={'font-medium text-xs lg:text-sm xl:text-base leading-4 px-1.5 sm:px-2.5 md:px-3 py-1.5 sm:py-2 md:py-1.5 lg:py-2'}
            > Get Started </Button>
          
          </div>

        </div>

        <hr className='mt-4 lg:mt-8'/>
      
      </div>
    </header>
    </>
  )
}

export default Navbar;
