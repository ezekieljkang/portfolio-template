import React from 'react';
import Image from 'next/image';

const DesignProcessImg = () => {
  const prefix = '/portfolio-template';

  return (
    <div className='pt-[1.5rem] md:pt-0 md:pl-[3.5rem] md:border-l border-black h-full'>
      <div className='pb-[3.3rem] object-cover'>
        <Image src={`${prefix}/DesignProcess.svg`} alt="star" width={80} height={80} className='w-full' />
      </div>
    </div>
  );
}

export default DesignProcessImg;