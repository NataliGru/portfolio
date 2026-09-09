import { useTransition } from 'react';

import { Locale, useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

import { usePathname, useRouter } from '@/shared';

export const useLocaleSwitcher = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations();
  const currentLocale = useLocale(); //default value

  const onChangeLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: newLocale },
      );
    });
  };

  return {
    currentLocale,
    isPending,
    t,
    onChangeLocale,
  };
};
