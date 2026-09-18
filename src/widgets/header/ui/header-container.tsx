'use client';

import { ReactNode, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';

interface HeaderContainerProps {
  children: ReactNode;
}

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className='fixed top-0 right-0 left-0 z-50'
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
        translateY: '0%',
      }}
      initial={{
        opacity: 0,
        translateY: '-55%',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.header>
  );
};
