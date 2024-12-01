'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navList } from '@/app/data';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
        <nav className="bg-gray">
          <div className="mx-auto px-2 sm:px-6 lg:px-0">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="font-bold text-xl">
                  <Image className='mt-4' src="/logo.svg" alt="logo" width={120} height={10} />
                </span>
              </div>
              <div className="hidden md:flex md:space-x-8">
               {
                navList.map((item, index) => (
                  <Link href={item.link} className="hover:text-primary/80 transition-colors duration-300 mx-4" key={index}>{item.name}</Link>
                ))
               }
              </div>
               
              <div className="flex items-center space-x-4">
                 
                <button className="text-gray-500 hover:text-gray-700">
                 </button>
                <button className="text-gray-500 hover:text-gray-700">
                 </button>
                <button className="md:hidden text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(!isOpen)}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden">
             {
                navList.map((item, index) => (
                  <Link href={item.link} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={index}>{item.name}</Link>
                ))
             }
            </div>
          )}
          <hr />
        </nav>
    
    </>
  );
};

export default NavBar;