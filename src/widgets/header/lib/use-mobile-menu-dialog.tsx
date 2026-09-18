'use client';

import { useEffect, useRef } from 'react';

import { useToggle } from '@/shared';

const FOCUSABLE_ELEMENTS =
  'a[href], button:not([disabled]), select:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const useMobileMenuDialog = () => {
  // The dialog ref is used to keep keyboard focus inside the whole menu.
  const dialogRef = useRef<HTMLDivElement>(null);
  // The menu ref is used to focus the first menu item after opening.
  const menuRef = useRef<HTMLDivElement>(null);
  // The trigger ref is used to return focus after closing.
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  const {
    isOpen: isOpenMenu,
    close: closeMenu,
    toggle: onToggle,
  } = useToggle();

  useEffect(() => {
    if (!isOpenMenu) return;

    const menu = menuRef.current;

    if (!menu) return;

    // Move focus into the menu when it opens.
    const firstFocusableEl =
      menu.querySelector<HTMLElement>(FOCUSABLE_ELEMENTS);

    (firstFocusableEl ?? menu).focus();
  }, [isOpenMenu]);

  useEffect(() => {
    if (isOpenMenu) {
      wasOpenRef.current = true;
      return;
    }

    if (!wasOpenRef.current) return;

    // Return focus to the button that opened the menu.
    triggerRef.current?.focus();
    wasOpenRef.current = false;
  }, [isOpenMenu]);

  useEffect(() => {
    if (!isOpenMenu) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== 'Tab') return;

      const dialog = dialogRef.current;

      if (!dialog) return;

      // Keep Tab focus inside the open dialog.
      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS),
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenMenu, closeMenu]);

  useEffect(() => {
    if (!isOpenMenu) return;

    const pageContent = document.querySelector<HTMLElement>('#page-content');

    if (!pageContent) return;

    const wasInert = pageContent.inert;

    // Stop clicks and keyboard focus on the page behind the menu.
    pageContent.inert = true;

    return () => {
      pageContent.inert = wasInert;
    };
  }, [isOpenMenu]);

  return {
    isOpenMenu,
    closeMenu,
    onToggle,
    dialogRef,
    menuRef,
    triggerRef,
  };
};
