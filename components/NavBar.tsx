'use client';

import Link from 'next/link';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MenuIcon from './MobileMenuIcon';
import MobileMenu from './MobileMenu';
import Tooltip from './ToolTip';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const email = 'JOHNSMITH@GMAIL.COM';

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    navigator.clipboard.writeText(email).then(() => {
      setTooltipVisible(true);
      setTimeout(() => setTooltipVisible(false), 2000); // Hide tooltip after 2 seconds
    });
  };

   useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      // Close menu and reset animation if user scrolls down after opening it
      if (isOpen && currentScrollTop > lastScrollTop) {
        setIsOpen(false);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, lastScrollTop]);

  return (
    <nav className='flex justify-between py-[1.5rem] items-center border-b border-black'>
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
      <div className='md:hidden' onClick={toggleMenu}>
        <MenuIcon />
      </div>
      <div
        className={`fixed top-[6rem] right-5 w-full max-w-[90%] h-[25%] bg-primary shadow-lg z-50 transition-transform duration-1000 ${isOpen ? 'opacity-100 translate-x-0 animate-fadeIn' : 'opacity-0 translate-x-full animate-fadeOut'}`}
      >
        <MobileMenu />
      </div>
    </nav>
  );
}

export default NavBar;