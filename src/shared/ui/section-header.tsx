import { getTranslations } from 'next-intl/server';

interface SectionHeaderProps {
  translationSection: string;
}

export const SectionHeader = async ({
  translationSection,
}: SectionHeaderProps) => {
  const t = await getTranslations(translationSection);

  return (
    <div className='flex flex-col items-center justify-center text-center gap-4'>
      <h2 className='text-3xl font-bold uppercase'>{t('title')}</h2>

      <p className='text-control-background/90'>{t('description')}</p>
    </div>
  );
};
