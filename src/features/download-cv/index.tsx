'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Download } from 'lucide-react';

import { cn, trackEvent } from '@/shared';

interface DownloadCVProp {
  className?: string;
  place: 'header' | 'footer' | 'mobile_header';
}

export const DownloadCV = ({ className, place }: DownloadCVProp) => {
  const t = useTranslations('general');

  return (
    <Link
      href='/cv/Nataliia_Hrushanyk_CV_Front-End_Developer.pdf'
      download='Nataliia_Hrushanyk_CV_Front-End_Developer.pdf'
      className={cn(
        'bg-foreground/50 text-background transition-all-300 hover:bg-foreground focus-ring flex items-center justify-center gap-2 rounded-2xl p-3 text-nowrap',
        className,
      )}
      onClick={() => trackEvent(`cv_download_${place}`)}
    >
      {t('downloadCV')}
      <Download className='size-5 animate-bounce motion-reduce:animate-none' />
    </Link>
  );
};
