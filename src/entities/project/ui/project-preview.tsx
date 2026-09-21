'use client';

import { useTranslations } from 'next-intl';
import { Play } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { PREVIEW_CONFIG } from '../model/constants';
import { useProjectPreview } from '../model/use-project-preview';

type PreviewMode = keyof typeof PREVIEW_CONFIG;

interface ProjectPreviewProps {
  projectURL: string;
  projectTitle: string;
}

export const ProjectPreview = ({
  projectURL,
  projectTitle,
}: ProjectPreviewProps) => {
  const t = useTranslations('projects');

  const {
    containerRef,
    width,
    scale,
    iframeHeight,
    currentMode,
    setCurrentMode,
    isActive,
    activatePreview,
  } = useProjectPreview();

  const projectHost = new URL(projectURL).hostname.replace(/^www\./, '');

  return (
    <div className='w-full min-w-0'>
      <div
        ref={containerRef}
        className='h-120 w-full min-w-0 overflow-hidden rounded-t-2xl'
      >
        <div
          className='relative mx-auto h-full'
          style={{ width: width * scale }}
        >
          {isActive ? (
            <iframe
              src={projectURL}
              title={t('iframeLabel', { project: projectTitle })}
              width={width}
              height={iframeHeight}
              className='bg-background absolute top-0 left-0 origin-top-left border-0'
              style={{ transform: `scale(${scale})` }}
              loading='lazy'
              sandbox='allow-forms allow-popups allow-same-origin allow-scripts'
              referrerPolicy='no-referrer'
            />
          ) : (
            <div className='from-section-background via-background to-section-background absolute inset-0 flex flex-col items-center justify-center gap-4 bg-linear-to-br p-6 text-center'>
              <div aria-hidden='true' className='text-7xl font-bold opacity-10'>
                {projectTitle.slice(0, 1)}
              </div>

              <div>
                <p className='text-2xl font-bold'>{projectTitle}</p>
                <p className='text-control-background text-sm'>{projectHost}</p>
              </div>

              <Button
                type='button'
                className='flex items-center gap-2 px-4 py-2'
                onClick={activatePreview}
              >
                <Play className='size-4 fill-current' aria-hidden='true' />
                {t('preview.activate')}
              </Button>

              <p className='text-control-background max-w-sm text-sm'>
                {t('preview.activationHint')}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className='bg-section-background/50 flex justify-center gap-2 rounded-b-2xl p-2'>
        {Object.entries(PREVIEW_CONFIG).map(([mode, config]) => {
          const Icon = config.icon;

          return (
            <Button
              key={mode}
              type='button'
              variant='control'
              aria-label={t(config.translationKey)}
              aria-pressed={currentMode === mode}
              onClick={() => setCurrentMode(mode as PreviewMode)}
            >
              <Icon className='size-5' />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
