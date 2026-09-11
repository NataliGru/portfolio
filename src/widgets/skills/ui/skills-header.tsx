import { getTranslations } from 'next-intl/server';

export const SkillsHeader = async () => {
  const t = await getTranslations('skills');
  return (
    <h2 className='text-foreground text-3xl font-bold uppercase text-center'>
      {t('title')}
    </h2>
  );
};
