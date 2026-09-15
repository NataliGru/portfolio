'use client';

import { useEffect } from 'react';

import { useTranslations } from 'next-intl';

import clsx from 'clsx';
import { MenuIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { DownloadCV, LocaleSwitcher } from '@/features';
import { ThemeToggle } from '@/features/theme-toggle';
import { ToggleIconButton } from '@/shared';
import { useToggle } from '@/shared/hooks/use-toggle';

import {
  MENU_FOOTER_MOTION,
  MENU_LIST_ITEM_MOTION,
  MENU_LIST_MOTION,
  MENU_MOTION,
} from '../lib/mobile-navigation-animation';
import { useMobileScrollLock } from '../lib/use-mobile-scroll-lock';
import { NAVIGATION_LINKS } from '../model/constants';
import { LogoLink } from './logo-link';
import { NavigationLink } from './navigation-link';

export const MobileNavigation = () => {
  const t = useTranslations('header');

  const {
    isOpen: isOpenMenu,
    close: closeMenu,
    toggle: onToggle,
  } = useToggle();

  useMobileScrollLock({ isOpenMenu, closeMenu });

  return (
    <nav className='relative z-50 md:hidden max-w-full'>
      <div
        className={clsx(
          'relative z-50 flex h-20 items-center justify-between px-5',
          'bg-section-background border-foreground/0 border-b transition-all-300',
          'backdrop-blur-md backdrop-brightness-90',
          'gap-10',
          isOpenMenu && 'border-foreground/30',
        )}
      >
        <LogoLink onClick={closeMenu} />

        <div className='flex h-full items-center gap-10'>
          <ThemeToggle />

          <ToggleIconButton
            checked={isOpenMenu}
            onToggle={onToggle}
            checkedIcon={<X size={30} strokeWidth={2} />}
            uncheckedIcon={<MenuIcon size={30} strokeWidth={2} />}
            aria-expanded={isOpenMenu}
            aria-controls='mobile-navigation-menu'
            aria-label={isOpenMenu ? t('closeMenu') : t('openMenu')}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            {...MENU_MOTION}
            className={clsx(
              'fixed inset-0 z-40 h-dvh w-dvw pb-10',
              'backdrop-blur-xl ',
              'flex flex-col',
            )}
          >
            <motion.ul
              {...MENU_LIST_MOTION}
              className='flex flex-1 flex-col justify-center gap-4 px-10 text-3xl font-medium'
            >
              {NAVIGATION_LINKS.items.map((navigationItem) => (
                <motion.li
                  key={navigationItem.textKey}
                  {...MENU_LIST_ITEM_MOTION}
                >
                  <NavigationLink
                    link={navigationItem.link}
                    label={t(navigationItem.textKey)}
                    onClick={closeMenu}
                  />
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              {...MENU_FOOTER_MOTION}
              className='mb-5 px-10 text-xl flex flex-col gap-10'
            >
              <LocaleSwitcher />

              <DownloadCV place='mobile_header' />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
