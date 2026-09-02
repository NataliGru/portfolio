import { ReactNode } from 'react';

import LeftFlower from './../../../../public/hero-images/left-image.svg';
import RightFlower from './../../../../public/hero-images/right-image.svg';

export const HeroFlowers = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-row justify-between gap-5 w-full p-5 pb-16 overflow-hidden'>
      <div className='relative min-w-0 flex-1  max-w-66.75'>
        <LeftFlower className='text-card-background absolute left-0 bottom-0 md:bottom-0  lg:-bottom-15 min-w-25' />
      </div>
      {children}
      <div className='relative min-w-0 flex-1 max-w-89.25'>
        <RightFlower className='text-card-background absolute -right-10 md:right-0 top-0 md:top-unset md:bottom-0 min-w-32' />
      </div>
    </div>
  );
};
