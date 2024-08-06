// components/Testimonial.tsx
import React from 'react';

interface TestimonialProps {
  quote: React.ReactNode;
  name: string;
  title: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title }) => {
  return (
    <div className='py-[1rem]'>
      <p className="text-[18px] md:text-lg font-satoshi mb-4">{quote}</p>
      <p className='font-robotoMono text-[15px]'>– {name}, {title}</p>
    </div>
  );
};

export default Testimonial;
