'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

import { generatePathWithRouteParams, Links } from '@/settings/path';
import { trackEvent } from '@/shared';
import { buttonVariants } from '@/shared/constants';

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
  // categoryKeys,
}: ProjectCardProps) => {
  const t = useTranslations('projects');
  const projectTitle = t(`items.${projectKey}.title`);

  return (
    <article className='bg-background flex w-full min-w-0 flex-col gap-1 overflow-hidden rounded-2xl border p-1'>
      <ProjectPreview projectURL={projectURL} projectTitle={projectTitle} />

      <div className='bg-section-background flex flex-col gap-2 rounded-2xl p-3'>
        <h3 className='text-4xl font-bold'>{projectTitle}</h3>

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
              className='bg-background/90 rounded-full px-3 py-1 text-sm font-medium'
            >
              {t(`technologies.${techKey}`)}
            </li>
          ))}
        </ul>

        <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
          <Link
            href={generatePathWithRouteParams(Links.projects.slug, { slug })}
            className={buttonVariants({
              className:
                'flex w-full items-center justify-center gap-2 px-3 py-2',
            })}
          >
            {t('readMore')}

            <ArrowUpRight className='text-background size-5 stroke-1' />
          </Link>

          <Link
            href={projectURL}
            target='_blank'
            rel='noopener noreferrer'
            className={buttonVariants({
              className:
                'flex w-full items-center justify-center gap-2 px-3 py-2',
            })}
            onClick={() =>
              trackEvent('project_visit', {
                project: projectKey,
              })
            }
          >
            {t('visitSite')}
            <ExternalLink className='text-background size-5 stroke-1' />
          </Link>
        </div>
      </div>
    </article>
  );
};
