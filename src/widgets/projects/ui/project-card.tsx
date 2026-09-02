'use client';

import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  projectKey: string;
  projectURL: string;
}

export const ProjectCard = ({ projectKey, projectURL }: ProjectCardProps) => {
  const t = useTranslations('projects');

  return (
    <article className='border rounded-2xl p-3'>
      <div className='rounded-2xl h-100'>
        <iframe
          src={projectURL}
          title={t('iframeLabel') + ' ' + t(`items.${projectKey}.title`)}
          className='h-full w-full rounded-2xl'
          loading='lazy'
        />
      </div>
    </article>
  );
};
