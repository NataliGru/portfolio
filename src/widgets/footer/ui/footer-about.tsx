import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowUp } from 'lucide-react';

import { DownloadCV } from '@/features';
import { Links } from '@/settings';
import { buttonVariants } from '@/shared/constants';

export const FooterAbout = async () => {
  const t = await getTranslations('footer');

  return (
    <section
      className='flex flex-col gap-6'
      aria-labelledby='footer-about-title'
    >
      <h4 className='text-3xl font-bold' id='footer-about-title'>
        {t('about.title')}
      </h4>

      <p className='text-control-background'>{t('about.description')}</p>

      <div className='flex items-center gap-5'>
        <DownloadCV className='w-fit' place='footer' />

        <Link
          href={Links.about}
          className={buttonVariants({
            variant: 'primary',
            className:
              'group bg-foreground/50 hover:bg-foreground focus-ring flex items-center gap-1 rounded-2xl p-3',
          })}
        >
          {t('about.link')}{' '}
          <ArrowUp className='size-4 rotate-90 animate-bounce motion-reduce:animate-none' />
        </Link>
      </div>
    </section>
  );
};
