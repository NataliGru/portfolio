import { ReactNode } from 'react';
import { Montserrat_Alternates, Roboto_Serif } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { GoogleAnalytics } from '@next/third-parties/google';

import { ProvidersLayout } from '@/providers';
import { cn } from '@/shared';

import './globals.css';

type Props = {
  children: ReactNode;
};

const robotoSerif = Roboto_Serif({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto-serif',
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat-alternates',
});

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();

  return (
    <html className='h-full' lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          montserratAlternates.className,
          robotoSerif.variable,
          montserratAlternates.variable,
          'flex h-full flex-col',
        )}
      >
        <ProvidersLayout>{children}</ProvidersLayout>

        {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
      </body>
    </html>
  );
}
