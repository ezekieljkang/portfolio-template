import React from 'react';
import DesignProcessImg from './DesignProcessImg';
import Link from 'next/link';

interface HeaderProps {
  problemText: string;
  solutionText: string;
  resultText: string;
};


const CSContent2: React.FC<HeaderProps> = ({ problemText, solutionText, resultText }) => {
  const prefix = '/portfolio-template';

  return (
    <div className='px-[1.5rem] md:px-[3rem] pt-[1rem] md:pt-[4.3rem]'>
      <div className='md:flex justify-between gap-[6rem]'>
        <div className='basis-1/3'>
        <div>
          <div>
            <h1 className='font-[500] text-[28px] md:text-[45px] font-clashDisplay pb-[1rem]'>PROBLEM</h1>
            <p className='font-normal text-[16px] md:text-[22px] font-satoshi pb-[1.5rem] md:pb-[4.25rem]'>{problemText}</p>
          </div>
          <div>
            <h1 className='font-[500] text-[28px] md:text-[45px] font-clashDisplay pb-[1rem]'>SOLUTION</h1>
            <p className='font-normal text-[16px] md:text-[22px] font-satoshi whitespace-pre-line pb-[1.5rem] md:pb-[4.25rem]'>{solutionText}</p>
          </div>
          <div>
            <h1 className='font-[500] text-[28px] md:text-[45px] font-clashDisplay pb-[1rem]'>RESULT</h1>
            <p className='font-normal text-[16px] md:text-[22px] font-satoshi pb-[1.5rem] md:pb-[4.25rem]'>{resultText}</p>
          </div>
        </div>
        </div>
        <div className='basis-2/3'>
          <DesignProcessImg />
        </div>
      </div>
      <div className='flex justify-between font-robotoMono font-normal text-[15px] pt-[6rem] pb-[4rem] border-b border-black'>
        <div className='flex items-center gap-[1rem]'>
        <Link href="/" className='flex items-center gap-[1rem]'>
          <button className="w-10 h-10 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${prefix}/leftarrow.svg)` }}></button>
        </Link>
          <p>HOME</p>
        </div>
        <div className='flex items-center gap-[1rem]'>
          <p>DESIGN SYSTEM</p>
          <Link href="/pages/Sites/DesignSystem">
            <button className="w-10 h-10 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${prefix}/rightarrow.svg)` }}></button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CSContent2;