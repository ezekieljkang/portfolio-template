import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

const Hero = () => {
  const prefix = '/portfolio-template';
  
  return (
    <div className='px-[1.5rem] md:px-[3rem]'>
      <NavBar />
      <div className='md:flex md:justify-between py-[1.5rem] border-b border-black gap-[5%]'>
        <div className='md:flex-1 flex flex-col justify-between'>
          <div>
            <p className='font-normal font-robotoMono text-[15px] pb-[1rem]'>
              PRODUCT/UX DESIGNER
            </p>
            <h1 className='font-medium text-5xl md:text-8xl pb-[1.5rem] md:pb-[1rem] font-clashDisplay'>
              Hi, I&apos;m John Smith from California.
            </h1>
            <p className='font-satoshi font-light leading-9 text-[22px] md:text-[28px] pb-[2rem]'>
              Since 2021, I have been dedicated to designing digital products for media and publishing brands, driven by a passion to make a significant impact on people&apos;s everyday lives. My focus is on creating user-friendly experiences that enhance daily interactions and bring positive change.
            </p>
          </div>
          <Image src={`${prefix}/star.svg`} alt="star" width={80} height={80} />
        </div>
        <div className='md:flex-1 py-[2rem] flex items-center'>
          <div className='relative w-full'>
            <Image
              src={`${prefix}/johnsmit2.png`}
              width="400"
              height="400"
              alt='professional headshot of john smith'
              className="rounded-xl items-center mx-auto"
            ></Image>
          </div>
          <p>
            <a href="https://giphy.com/gifs/muppetwiki-sesame-street-muppets-elmo-fUQ4rhUZJYiQsas6WD">
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;