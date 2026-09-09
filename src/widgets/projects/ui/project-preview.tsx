'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/button';

import { PREVIEW_CONFIG } from '../model/constants';
import { useProjectPreview } from '../model/use-project-preview';

type PreviewMode = keyof typeof PREVIEW_CONFIG;

interface ProjectPreviewProps {
  projectURL: string;
}

export const ProjectPreview = ({ projectURL }: ProjectPreviewProps) => {
  const t = useTranslations('projects');

  const {
    containerRef,
    width,
    scale,
    iframeHeight,
    currentMode,
    setCurrentMode,
  } = useProjectPreview();

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
          <iframe
            src={projectURL}
            title={t('iframeLabel')}
            width={width}
            height={iframeHeight}
            className='absolute top-0 left-0 origin-top-left border-0'
            style={{ transform: `scale(${scale})` }}
            loading='lazy'
          />
        </div>
      </div>

      <div className='flex justify-center gap-2 p-2 bg-section-background/50 rounded-b-2xl'>
        {Object.entries(PREVIEW_CONFIG).map(([mode, config]) => {
          const Icon = config.icon;

          return (
            <Button
              key={mode}
              type='button'
              variant='preview'
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
