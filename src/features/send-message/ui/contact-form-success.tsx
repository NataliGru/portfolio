import { useTranslations } from 'next-intl';
import { CircleCheck } from 'lucide-react';

import { Button } from '@/shared/ui/button';

interface ContactFormSuccessProps {
  onSendAnotherMessage: () => void;
}
export const ContactFormSuccess = ({
  onSendAnotherMessage,
}: ContactFormSuccessProps) => {
  const t = useTranslations('contacts.form.success');

  return (
    <div className='bg-background flex flex-1 flex-col items-center justify-center gap-4 self-stretch rounded-2xl p-4 text-center'>
      <span className='bg-section-background rounded-full p-4'>
        <CircleCheck className='text-control-background size-10' />
      </span>

      <h4 className='text-3xl font-bold'>{t('title')}</h4>

      <p>{t('description')}</p>

      <Button variant='control' onClick={onSendAnotherMessage}>
        {t('action')}
      </Button>
    </div>
  );
};
