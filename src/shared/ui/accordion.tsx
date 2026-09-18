'use client';

import { ReactNode, useId } from 'react';
import { useLenis } from 'lenis/react';

import { useToggle } from '../hooks';
import { cn } from '../lib';

interface AccordionRenderProps {
  isOpen: boolean;
  toggle: () => void;
  triggerId: string;
  panelId: string;
}

interface AccordionProps {
  children: ReactNode;
  renderTrigger: (props: AccordionRenderProps) => ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const Accordion = ({
  children,
  renderTrigger,
  defaultOpen = false,
  className,
}: AccordionProps) => {
  const { isOpen, toggle } = useToggle(defaultOpen);
  const lenis = useLenis();
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <>
      {renderTrigger({ isOpen, toggle, triggerId, panelId })}

      <div
        id={panelId}
        role='region'
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          className,
        )}
        onTransitionEnd={(event) => {
          if (event.propertyName === 'grid-template-rows') {
            lenis?.resize();
          }
        }}
      >
        <div className='min-h-0 overflow-hidden'>{children}</div>
      </div>
    </>
  );
};
