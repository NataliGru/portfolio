'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Download } from 'lucide-react';

import { cn } from '@/shared';

interface DownloadCVProp {
  className?: string;
}

export const DownloadCV = ({ className }: DownloadCVProp) => {
  const t = useTranslations('general');

  return (
    <Link
      href='/cv/Nataliia_Hrushanyk_CV_Front-End_Developer.pdf'
      download='Nataliia_Hrushanyk_CV_Front-End_Developer.pdf'
      className={cn(
        'text-nowrap flex items-center justify-center gap-2 rounded-2xl bg-foreground/50 p-3 text-background transition-all-300 hover:bg-foreground',
        className,
      )}
    >
      {t('downloadCV')}
      <Download className='size-5' />
    </Link>
  );
};
