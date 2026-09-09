'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { ArrowUpRight, ExternalLink } from 'lucide-react';

import { Links, generatePathWithRouteParams } from '@/settings/path';
import { Button } from '@/shared/ui/button';

import { ProjectPreview } from './project-preview';

interface ProjectCardProps {
  projectKey: string;
  projectURL: string;
  technologyKeys: string[];
  categoryKeys: string[];
  slug: string;
}

export const ProjectCard = ({
  projectKey,
  projectURL,
  technologyKeys,
  slug,
  categoryKeys,
}: ProjectCardProps) => {
  const t = useTranslations('projects');

  return (
    <article className='w-full min-w-0 overflow-hidden rounded-2xl border bg-background p-1 flex flex-col gap-1'>
      <ProjectPreview projectURL={projectURL} />

      <div className='flex flex-col p-3 rounded-2xl bg-section-background gap-2'>
        <h3 className='text-4xl font-bold'>{t(`items.${projectKey}.title`)}</h3>

        <p className='text-control-background'>
          {t(`items.${projectKey}.description`)}
        </p>

        <ul
          className='flex flex-wrap gap-2'
          aria-label={t('technologies.technologies')}
        >
          {technologyKeys.map((techKey) => (
            <li
              key={techKey}
              className='rounded-full bg-background/90 px-3 py-1 text-sm font-medium'
            >
              {t(`technologies.${techKey}`)}
            </li>
          ))}
        </ul>

        <div className='flex items-center justify-between gap-3 mt-4 flex-wrap'>
          <Link
            href={generatePathWithRouteParams(Links.projects.slug, { slug })}
            className='w-full'
          >
            <Button className='py-2 flex items-center justify-center gap-2 px-3 w-full'>
              {t('readMore')}
              <ArrowUpRight className='text-background stroke-1 size-5' />
            </Button>
          </Link>

          <Link
            href={projectURL}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full'
          >
            <Button className='py-2 flex items-center justify-center gap-2 px-3 w-full'>
              {t('visitSite')}
              <ExternalLink className='text-background stroke-1 size-5' />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};
