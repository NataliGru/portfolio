import { getTranslations } from 'next-intl/server';

import { cn } from '../lib';

interface SectionHeaderProps {
  translationSection: string;
  headingId: string;
  className?: string;
}

export const SectionHeader = async ({
  translationSection,
  headingId,
  className,
}: SectionHeaderProps) => {
  const t = await getTranslations(translationSection);

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4 text-center',
        className,
      )}
    >
      <h2 className='text-3xl font-bold uppercase' id={headingId}>
        {t('title')}
      </h2>

      <p className='text-control-background/90'>{t('description')}</p>
    </div>
  );
};
