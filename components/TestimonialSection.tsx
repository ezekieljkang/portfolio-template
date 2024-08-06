'use client';

import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/index';
import Testimonial from './Testimonial';
import WordCap from './WordCap';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  const prefix = '/portfolio-template';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to handle resize event
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className='px-[1.5rem] md:px-[3rem] pt-[3.5rem]'>
      <div className='md:flex border-b border-black md:pb-[3.5rem] gap-[5%]'>
        <div className='flex-1 flex flex-col justify-between'>
          <h3 className='text-[40px] md:text-[78px] font-[500] font-clashDisplay'>TESTIMONIALS</h3>
          <Image src={`${prefix}/testimonialstar.svg`} alt="testimonial star" width={80} height={80} className='hidden md:block md:w-20' />
        </div>
        <div className="flex-1 flex flex-col md:pl-[4rem] md:border-l md:border-black pt-[1rem] md:pt-0 relative min-h-[480px]">
          <Image src={`${prefix}/quote.svg`} alt="star" width={88} height={59} className='hidden md:block md:w-20 relative top-0 left-0' />
          <div className='flex-1 flex flex-col pr-[2rem]'>
            <Testimonial
              quote={
                <WordCap
                  text={testimonials[currentIndex].quote}
                  limit={isSmallScreen ? 30 : testimonials[currentIndex].quote.split(' ').length}
                />
              }
              name={testimonials[currentIndex].name}
              title={testimonials[currentIndex].title}
            />
          </div>
          <div className="flex justify-end space-x-2 pb-[3.5rem] md:pb-0 relative bottom-0 right-0">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: `url(${prefix}/leftarrow.svg)` }}
            >
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: `url(${prefix}/rightarrow.svg)` }}
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
