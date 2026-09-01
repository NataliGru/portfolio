import { notFound } from 'next/navigation';

import { isAppLocale } from '@/shared';

export const getValidLocale = (locale: string) => {
  if (!isAppLocale(locale)) {
    notFound();
  }

  return locale;
};
