import { getTranslations } from 'next-intl/server';

export const HeroTextBlock = async () => {
  const t = await getTranslations('hero');

  return (
    <div className='flex flex-col justify-center items-center gap-5 text-center flex-1 w-full z-10'>
      <h2 className='uppercase text-2xl md:text-4xl text-secondary-text font-bold'>
        {t('eyebrow')}
      </h2>
      <h1 className='uppercase text-foreground text-4xl md:text-6xl font-bold leading-relaxed'>
        {t('title.start')}{' '}
        <span className='bg-background dark:bg-card-background rounded-4xl px-3 py-2'>
          {t('title.accent')}
        </span>
        <br />
        {t('title.end')}
      </h1>

      <div className='text-lg md:text-2xl dark:text-secondary-text font-medium flex flex-col gap-6'>
        <p>{t('description')}</p>

        <p className='text-base md:text-xl'>{t('techStack')}</p>
      </div>
    </div>
  );
};
