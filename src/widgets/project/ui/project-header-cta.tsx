'use client';
import { useTranslations } from 'next-intl';
import { ExternalLink } from 'lucide-react';

import { Link, trackEvent } from '@/shared';
import { buttonVariants } from '@/shared/constants';

interface ProjectHeaderCTAProps {
  siteUrl: string;
  sourceUrl: string;
  title: string;
}

export const ProjectHeaderCTA = ({
  siteUrl,
  sourceUrl,
  title,
}: ProjectHeaderCTAProps) => {
  const t = useTranslations('projects');

  return (
    <div className='mt-4 flex flex-col items-center justify-between gap-3 md:flex-row'>
      <Link
        href={siteUrl}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonVariants({
          className: 'flex w-full items-center justify-center gap-2 px-3 py-2',
        })}
        onClick={() =>
          trackEvent('project_visit', {
            project: title,
          })
        }
      >
        {t('visitSite')}
        <ExternalLink className='text-background size-5 stroke-1' />
      </Link>

      <Link
        href={sourceUrl}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonVariants({
          className: 'flex w-full items-center justify-center gap-2 px-3 py-2',
        })}
        onClick={() =>
          trackEvent('project_code_visit', {
            project: title,
          })
        }
      >
        {t('viewSource')}
        <ExternalLink className='text-background size-5 stroke-1' />
      </Link>
    </div>
  );
};
