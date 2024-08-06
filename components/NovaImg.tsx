import React from 'react';
import Image from 'next/image';

const NovaImg = () => {
  const prefix = '/portfolio-template';

  return (
    <div className='pt-[1.5rem] md:pt-0 md:pl-[3.5rem] md:border-l border-black h-full'>
      <div className='pb-[3.3rem] object-cover'>
        <Image src={`${prefix}/archflow.svg`} alt="architecture flow chart" width={80} height={80} className='w-full' />
      </div>
      <div className='pb-[3.3rem] hidden md:block'>
        <Image src={`${prefix}/novaimg1.svg`} alt="nova webpages" width={80} height={80} className='w-full' />
      </div>
      <div className='hidden md:block'>
        <Image src={`${prefix}/nova.gif`} alt="architecture flow chart" width={80} height={80} className='w-full border-[1.75rem] border-black rounded-2xl' />
      </div>
    </div>
  );
}

export default NovaImg;