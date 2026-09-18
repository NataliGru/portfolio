import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

interface AboutSectionTitleProps {
  translationKey: string;
  icon: ReactNode;
}

export const AboutSectionTitle = async ({
  translationKey,
  icon,
}: AboutSectionTitleProps) => {
  const t = await getTranslations(`about.${translationKey}`);

  return (
    <h3
      className='flex items-center gap-2 text-2xl font-bold'
      id={translationKey}
    >
      {icon} {t('title')}
    </h3>
  );
};
