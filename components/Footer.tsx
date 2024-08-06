'use client';

import React from 'react';
import FooterCarousel from './FooterCarousel';
import MobileFooter from './MobileFooter';

const Footer = () => {
  return (
    <div className="px-[1.5rem] py-[2rem] md:py-[3.5rem] md:px-[3rem] md:pb-0">
      <div className='md:pb-[3.5rem] md:border-b md:border-black'>
        <div className='flex items-center whitespace-nowrap overflow-hidden'>
          <FooterCarousel />
        </div>
      </div>
      <div>
        <MobileFooter />
      </div>
    </div>
  );
};

export default Footer;
