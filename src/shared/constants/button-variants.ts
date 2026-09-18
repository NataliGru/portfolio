import { cn } from '../lib';

export const BUTTON_VARIANTS = {
  primary:
    'cursor-pointer transition-all-300 bg-foreground text-background rounded-2xl hover:bg-control-background',
  control:
    'cursor-pointer transition-all-300 rounded-xl p-2 flex item-center justify-center bg-section-background text-control-background hover:bg-card-background aria-pressed:bg-control-background aria-pressed:text-card-background',
  ghost:
    'cursor-pointer transition-all-300 p-2 text-foreground/50 hover:text-foreground aria-pressed:text-foreground disabled:cursor-default ',
};

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;

export const buttonVariants = ({
  variant = 'primary',
  className,
}: {
  variant?: ButtonVariant;
  className?: string;
} = {}) => {
  return cn(
    BUTTON_VARIANTS[variant],
    'cursor-pointer transition-all-300 focus-ring',
    className,
  );
};
