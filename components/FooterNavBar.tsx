'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Tooltip from './ToolTip';

const FooterNavBar = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const email = 'JOHNSMITH@GMAIL.COM';

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    navigator.clipboard.writeText(email).then(() => {
      setTooltipVisible(true);
      setTimeout(() => setTooltipVisible(false), 2000); // Hide tooltip after 2 seconds
    });
  };

  return (
    <nav className='hidden md:flex justify-between px-[1.5rem] md:px-[3rem] py-[1.5rem] items-center border-b border-black'>
      <Link href="/">
        <div className='font-clashDisplay text-[32px] font-[600]'>
          JS
        </div>
      </Link>
      <div className='hidden md:flex font-robotoMono space-x-6 items-center text-center'>
          <a
            href='#'
            onClick={handleEmailClick}
            className='hover:text-gray-400 cursor-pointer relative'
          >
            {email}
            <Tooltip text="Email copied!" visible={tooltipVisible} />
          </a>
          <a
            href='https://www.linkedin.com/'
            target='_blank'
            rel="noopener noreferrer"
            className='hover:text-gray-400'
          >LINKEDIN</a>
          <a 
            href="/fakeresume.pdf"
            download='fakeresume.pdf'
            className='hover:bg-gray-400 bg-black text-white rounded-xl py-[.5rem] px-[1.5rem]'
          >
            <button>
              RESUME
            </button>
          </a>
      </div>
    </nav>
  );
}

export default FooterNavBar;