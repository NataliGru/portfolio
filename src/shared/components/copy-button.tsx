'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  value: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
  const t = useTranslations();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <button
      type='button'
      onClick={handleCopy}
      aria-label={isCopied ? 'Email скопійовано' : 'Скопіювати email'}
      title={isCopied ? 'Скопійовано' : 'Скопіювати'}
      className='text-control-background transition-opacity hover:opacity-70'
    >
      {isCopied ? <Check className='size-4' /> : <Copy className='size-4' />}
    </button>
  );
};
