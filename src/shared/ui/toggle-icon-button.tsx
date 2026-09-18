'use client';

import { ComponentPropsWithRef, ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { cn } from '../lib';

interface ToggleIconButtonProps extends ComponentPropsWithRef<'button'> {
  checked: boolean;
  onToggle: () => void;
  checkedIcon: ReactNode;
  uncheckedIcon: ReactNode;
  ariaLabel: string;
  ariaControls?: string;
  variant?: keyof typeof BUTTON_VARIANTS;
}

const BUTTON_VARIANTS = {
  control:
    'rounded-xl flex item-center justify-center bg-section-background text-control-background hover:bg-card-background aria-expanded:bg-control-background aria-expanded:text-card-background',
};

export const ToggleIconButton = ({
  checked,
  onToggle,
  checkedIcon,
  uncheckedIcon,
  ariaLabel,
  ariaControls,
  variant,
  ref,
  ...props
}: ToggleIconButtonProps) => {
  return (
    <button
      {...props}
      ref={ref}
      type='button'
      onClick={onToggle}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={checked}
      className={cn(
        'transition-all-300 focus-ring relative flex cursor-pointer items-center justify-center rounded-2xl p-5',
        variant && BUTTON_VARIANTS[variant],
        props.className,
      )}
    >
      <AnimatePresence initial={false}>
        <motion.span
          key={String(checked)}
          initial={{
            opacity: 0,
            rotate: checked ? -90 : 90,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            rotate: checked ? 90 : -90,
            scale: 0.7,
          }}
          transition={{
            duration: 0.25,
            ease: 'easeInOut',
          }}
          className='absolute'
        >
          {checked ? checkedIcon : uncheckedIcon}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};
