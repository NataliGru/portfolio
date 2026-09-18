import { getTranslations } from 'next-intl/server';

export const HeroTextBlock = async () => {
  const t = await getTranslations('hero');

  return (
    <div className='z-10 flex w-full flex-1 flex-col items-center justify-center gap-5 text-center'>
      <p className='text-secondary-text text-2xl font-bold uppercase md:text-4xl'>
        {t('eyebrow')}
      </p>

      <h1
        className='text-foreground text-4xl leading-relaxed font-bold uppercase md:text-6xl'
        id='hero-title'
      >
        {t('title.start')}{' '}
        <span className='bg-background dark:bg-card-background rounded-4xl px-3 py-2'>
          {t('title.accent')}
        </span>
        <br />
        {t('title.end')}
      </h1>

      <div className='dark:text-secondary-text flex flex-col gap-6 text-lg font-medium md:text-2xl'>
        <p>{t('description')}</p>

        <p className='text-base md:text-xl'>{t('techStack')}</p>
      </div>
    </div>
  );
};
