'use client';

import { useTranslations } from 'next-intl';

import clsx from 'clsx';

import { Link } from '@/shared';

import { NAVIGATION_LINKS } from '../model/constants';

interface LogoLinkProps {
  onClick?: () => void;
}

export const LogoLink = ({ onClick }: LogoLinkProps) => {
  const t = useTranslations('header');

  return (
    <Link
      href={NAVIGATION_LINKS.logo.link}
      onClick={onClick}
      className={clsx(
        'flex items-center px-4 py-3',

        'rounded-xl bg-background hover:bg-card-background transition-all-300 ',
      )}
    >
      <h2
        aria-label='logo'
        className='text-base font-bold 2xl:text-5xl uppercase text-center'
      >
        {t(NAVIGATION_LINKS.logo.textKey)}
      </h2>
    </Link>
  );
};
