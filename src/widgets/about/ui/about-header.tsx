import { SectionHeader } from '@/shared';

import Flower from './../../../../public/about/flower.svg';

export const AboutHeader = () => {
  return (
    <div className='flex'>
      <SectionHeader
        translationSection='about'
        headingId='about-title'
        className='items-start text-start md:flex-2'
      />

      <div className='relative h-75 flex-1'>
        <Flower className='text-card-background absolute -z-1 -translate-x-50 -translate-y-15 md:-translate-x-20 md:-translate-y-5 lg:translate-x-0' />
      </div>
    </div>
  );
};
