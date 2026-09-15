import { SectionHeader } from '@/shared';

import Flower from './../../../../public/about/flower.svg';

export const AboutHeader = () => {
  return (
    <div className='flex'>
      <SectionHeader
        translationSection='about'
        className='items-start md:flex-2 text-start '
      />

      <div className='h-75 relative flex-1'>
        <Flower className='text-card-background absolute -translate-x-50 -translate-y-15 md:-translate-y-5 md:-translate-x-20 lg:translate-x-0  -z-1' />
      </div>
    </div>
  );
};
