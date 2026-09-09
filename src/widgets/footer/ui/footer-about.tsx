import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { DownloadCV } from '@/features';
import { Links } from '@/settings';
import { Button } from '@/shared/ui/button';

export const FooterAbout = async () => {
  const t = await getTranslations('footer');

  return (
    <section className='flex flex-col gap-6'>
      <h4 className='font-bold text-3xl'>{t('about.title')}</h4>

      <p className='text-control-background'>{t('about.description')}</p>

      <Link href={Links.about}>
        <Button variant='control'>{t('about.link')}</Button>
      </Link>

      <DownloadCV className='w-fit' />
    </section>
  );
};
