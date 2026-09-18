'use client';

import { Fragment } from 'react';

import { routing } from '@/shared';
import { Button } from '@/shared/ui/button';

import { useLocaleSwitcher } from '../model/use-locale-switcher';

export const LocaleSwitcher = () => {
  const { currentLocale, isPending, t, onChangeLocale } = useLocaleSwitcher();

  return (
    <div className='flex items-center gap-2'>
      {routing.locales.map((localeItem) => {
        const isLastElement = localeItem === routing.locales.at(-1);
        const isActive = localeItem === currentLocale;

        return (
          <Fragment key={localeItem}>
            <Button
              variant='ghost'
              aria-pressed={isActive}
              aria-label={`${t(`locale.label`)} ${t(`locale.${localeItem}`)}`}
              onClick={() => onChangeLocale(localeItem)}
              disabled={isActive || isPending}
              className='focus-ring rounded-2xl'
            >
              {t(`locale.${localeItem}Short`)}
            </Button>

            {!isLastElement && <span>|</span>}
          </Fragment>
        );
      })}
    </div>
  );
};
