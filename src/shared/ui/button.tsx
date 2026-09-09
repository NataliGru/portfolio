import { ButtonHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

const BUTTON_VARIANTS = {
  primary:
    'bg-foreground text-background rounded-2xl hover:bg-control-background',
  control:
    'rounded-xl p-2 flex item-center justify-center bg-section-background text-control-background hover:bg-card-background aria-pressed:bg-control-background aria-pressed:text-card-background',
  ghost:
    'p-2 text-foreground/50 hover:text-foreground aria-pressed:text-foreground disabled:cursor-default',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: keyof typeof BUTTON_VARIANTS;
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        BUTTON_VARIANTS[variant],
        'cursor-pointer transition-all-300',
      )}
      {...props}
    >
      {children}
    </button>
  );
};
