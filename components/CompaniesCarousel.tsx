import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies } from '@/data';

const CompaniesCarousel = () => {
  const prefix = '/portfolio-template';

  const companiesWithPrefix = companies.map(company => ({
    ...company,
    img: `${prefix}${company.img}`,
  }));

  return (
    <div>
        <div>
        <InfiniteMovingCards
          items={companiesWithPrefix}
          direction="left" // or "right"
          speed="normal"   // or "fast", "slow"
          pauseOnHover={true}
          className="my-custom-class"
        />
      </div>
    </div>
  );
}

export default CompaniesCarousel;