import { getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import { DownloadCV, LocaleSwitcher } from '@/features';
import { ThemeToggle } from '@/features/theme-toggle';

import { NAVIGATION_LINKS } from '../model/constants';

import { LogoLink } from './logo-link';
import { NavigationLink } from './navigation-link';

export const DesktopNavigation = async () => {
  const t = await getTranslations('header');

  return (
    <nav
      className={clsx(
        'hidden flex-row items-center justify-between gap-5 px-5 py-2 md:flex lg:gap-20 lg:px-10',
        'bg-section-background',
      )}
    >
      <LogoLink />

      <ul className='flex flex-row items-center gap-5 text-lg font-medium 2xl:text-2xl'>
        {NAVIGATION_LINKS.items.map((navigationItem) => (
          <li key={navigationItem.textKey} className='group text-nowrap'>
            <NavigationLink
              link={navigationItem.link}
              label={t(navigationItem.textKey)}
            />
          </li>
        ))}
      </ul>

      <div className='flex flex-row items-center gap-5'>
        <DownloadCV place='header' />

        <LocaleSwitcher />

        <ThemeToggle />
      </div>
    </nav>
  );
};
