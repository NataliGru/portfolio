import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import ReactLenis from 'lenis/react';
import { MotionConfig } from 'motion/react';

type Props = {
  children: ReactNode;
};

export function ProvidersLayout({ children }: Props) {
  return (
    <ThemeProvider
      attribute='data-theme'
      defaultTheme='dark'
      disableTransitionOnChange={false}
      enableSystem={false}
    >
      <MotionConfig reducedMotion='user'>
        <ReactLenis root>{children}</ReactLenis>
      </MotionConfig>
    </ThemeProvider>
  );
}
