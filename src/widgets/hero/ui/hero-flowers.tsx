import { ReactNode } from 'react';

import LeftFlower from './../../../../public/hero-images/left-image.svg';
import RightFlower from './../../../../public/hero-images/right-image.svg';

export const HeroFlowers = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex w-full flex-row justify-between gap-5 overflow-hidden p-5 pb-16'>
      <div className='relative max-w-66.75 min-w-0 flex-1'>
        <LeftFlower className='text-card-background absolute bottom-0 left-0 min-w-25 md:bottom-0 lg:-bottom-15' />
      </div>
      {children}
      <div className='relative max-w-89.25 min-w-0 flex-1'>
        <RightFlower className='text-card-background md:top-unset absolute top-0 -right-10 min-w-32 md:right-0 md:bottom-0' />
      </div>
    </div>
  );
};
