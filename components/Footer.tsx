import { footerList } from '@/app/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 relative">
      <div className="container mx-auto text-center">
        <div className='flex justify-center'>
          <Image src="/logo.svg" alt="logo" width={200} height={10} />
        </div>
         <nav className="mb-4">
          <ul className="flex justify-center space-x-8 rtl:space-x-reverse">
            {footerList.map((item) => (
              <li key={item.name}><Link href={item.link} className="hover:underline">{item.name}</Link></li>
            ))}
          </ul>
        </nav>
        <hr className="border-t border-gray-400 mb-4" />
        <p className="text-sm">
          2024 © All Rights Reserved | Designed and Developed by <span className="font-bold">business and finance</span>
        </p>
      </div>

      <div className="absolute top-0 right-0     ">
        <Image src="/Shape.svg" alt="logo" width={200} height={200} />
      </div>

      <div className="absolute bottom-0 left-0 ">
        <Image src="/Shape-rev.png" alt="logo" width={200} height={200} />
      </div>

      
    </footer>
  );
};

export default Footer;