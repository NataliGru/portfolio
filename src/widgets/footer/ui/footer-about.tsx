import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { ArrowRight, ArrowUp } from 'lucide-react';

import { DownloadCV } from '@/features';
import { Links } from '@/settings';
import { Button } from '@/shared/ui/button';

export const FooterAbout = async () => {
  const t = await getTranslations('footer');

  return (
    <section className='flex flex-col gap-6'>
      <h4 className='font-bold text-3xl'>{t('about.title')}</h4>

      <p className='text-control-background'>{t('about.description')}</p>

      <div className='flex items-center gap-5'>
        <DownloadCV className='w-fit' place='footer' />

        <Link href={Links.about}>
          <Button
            variant='primary'
            className='flex gap-1 items-center group p-3 bg-foreground/50 hover:bg-foreground'
          >
            {t('about.link')}{' '}
            <ArrowUp className='size-4 animate-bounce rotate-90' />
          </Button>
        </Link>
      </div>
    </section>
  );
};
