import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

interface HeaderProps {
  company: string;
  heading: string;
  content: string;
  timeline: string;
  role: string;
  tools: string;
}

const CSHero: React.FC<HeaderProps> = ({ company, heading, content, timeline, role, tools }) => {
  const prefix = '/portfolio-template';

  return (
    <div className='px-[1.5rem] md:px-[3rem]'>
      <NavBar />
      <div>
      <div>
        <div className='md:flex justify-between py-[3.5rem] md:border-b border-black gap-[3rem]'>
          <div className='basis-2/3'>
            <div className='md:border-r border-black'>
              <Image src={`${prefix}/${company}`} alt="star" width={120} height={18} className='pb-[14px]' />
              <h1 className='text-[40px] md:text-[78px] font-[500] font-clashDisplay'>{heading}</h1>
              <p className='font-satoshi font-normal text-[16px] md:text-[28px]'>{content}</p>
            </div>
          </div>
          <div className='pt-[1.5rem] md:pt-0 basis-1/3 font-normal text-[15px] font-robotoMono'>
            <div>
              <p className='pb-[7px] text-customGray'>TIMELINE</p>
              <p className='pb-[24px]'>{timeline}</p>
            </div>
            <div>
              <p className='pb-[7px] text-customGray'>ROLE</p>
              <p className='pb-[24px]'>{role}</p>
            </div>
            <div>
              <p className='text-customGray pb-[7px]'>TOOLS</p>
              <p>{tools}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CSHero;