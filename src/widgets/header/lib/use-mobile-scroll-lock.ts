'use client';

import { useEffect, useRef } from 'react';

import { useLenis } from 'lenis/react';

interface UseMobileScrollLock {
  isOpenMenu: boolean;
  closeMenu: () => void;
}

export const useMobileScrollLock = ({
  isOpenMenu,
  closeMenu,
}: UseMobileScrollLock) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (isOpenMenu) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.start();
    };
  }, [isOpenMenu, lenis]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
    const closeMenuOnDesktop = () => {
      if (desktopMediaQuery.matches) closeMenu();
    };

    closeMenuOnDesktop();
    desktopMediaQuery.addEventListener('change', closeMenuOnDesktop);

    return () => {
      desktopMediaQuery.removeEventListener('change', closeMenuOnDesktop);
    };
  }, [closeMenu]);
};
