import { ButtonHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

const BUTTON_VARIANTS = {
  primary:
    'bg-foreground  text-background rounded-2xl hover:bg-card-background',
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
