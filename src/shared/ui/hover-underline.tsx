import { ReactNode } from 'react';

import clsx from 'clsx';

interface HoverUnderlineProps {
  children: ReactNode;
  className?: string;
  lineClassName?: string;
}

export const HoverUnderline = ({
  children,
  className,
  lineClassName,
}: HoverUnderlineProps) => {
  return (
    <span className={clsx('group block w-fit', className)}>
      {children}

      <span
        className={clsx(
          'bg-accent transition-all-300 block h-px w-0',
          'group-hover:w-full',
          '2xl:h-1',
          lineClassName,
        )}
      />
    </span>
  );
};
