'use client';
import { useTranslations } from 'next-intl';
import { ArrowDown } from 'lucide-react';

import { Button } from '@/shared/ui/button';

export const HeroCTA = () => {
  const t = useTranslations('hero');

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex items-center justify-center gap-5 text-sm'>
      <Button
        className='flex items-center justify-center gap-1 p-3'
        onClick={scrollToProjects}
      >
        {t('viewWork')}
        <ArrowDown className='size-4 animate-bounce motion-reduce:animate-none' />
      </Button>

      <Button className='p-3'>{t('contact')}!</Button>
    </div>
  );
};
