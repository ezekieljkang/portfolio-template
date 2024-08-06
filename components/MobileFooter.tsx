import Link from 'next/link';
import React, { useState } from 'react';
import Tooltip from './ToolTip';

const MobileFooter = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);

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
    <div className='border-t border-black md:border-t-0 mt-[2rem] md:mt-0'>
      <Link href="/">
        <div className='md:hidden font-clashDisplay text-[32px] font-[600] mt-[3.5rem] pb-[1.5rem] md:py-0 text-center'>
          JS
        </div>
      </Link>
      <div className='flex flex-col md:hidden font-robotoMono md:space-x-6 md:items-center md:text-center space-y-4 md:space-y-0 items-center'>
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
        <div className='pt-[1rem]'>
          <a 
            href="/fakeresume.pdf"
            download='fakeresume.pdf'
            className='hover:bg-gray-400 bg-black text-white text-center rounded-xl py-[.5rem] px-[5rem]'
            >
            <button>
              RESUME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;