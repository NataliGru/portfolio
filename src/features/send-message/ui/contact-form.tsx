'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/button';

import {
  ContactFormData,
  contactFormSchema,
} from '../model/contact-form-schema';

import { ContactFormField } from './contact-form-field';

const Turnstile = dynamic(
  () => import('@marsidev/react-turnstile').then((module) => module.Turnstile),
  {
    ssr: false,
  },
);

const defaultValues: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

export const ContactForm = () => {
  const t = useTranslations('contacts');

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      console.error('Complete the security check');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error(result);
        return;
      }

      reset();
      console.log('Message sent:', result);
    } catch (error) {
      console.error('Request failed:', error);
    } finally {
      // Токен одноразовий, тому після кожної спроби його треба оновити
      setTurnstileToken(null);
      setTurnstileResetKey((key) => key + 1);
    }
  };

  const onInvalid = (errors: FieldErrors<ContactFormData>) => {
    console.log(errors, 'validation errors');
  };

  return (
    <form
      className='flex flex-1 flex-col gap-4'
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      noValidate
    >
      <h3>{t('form.title')}</h3>

      {(Object.keys(defaultValues) as Array<keyof ContactFormData>).map(
        (contactFormField) => (
          <ContactFormField
            key={contactFormField}
            label={t(`form.fields.${contactFormField}.label`)}
            placeholder={t('form.fields.name.placeholder')}
            hasError={Boolean(errors[contactFormField])}
            fieldName={contactFormField}
            errorMessage={
              errors[contactFormField] &&
              t(`${errors[contactFormField]?.message}`)
            }
            register={register}
          />
        ),
      )}

      {siteKey && (
        <Turnstile
          key={turnstileResetKey}
          siteKey={siteKey}
          onSuccess={setTurnstileToken}
          onExpire={() => setTurnstileToken(null)}
          onError={() => setTurnstileToken(null)}
          options={{
            action: 'contact-form',
            theme: 'auto',
            size: 'flexible',
          }}
        />
      )}

      <Button
        variant='control'
        type='submit'
        disabled={isSubmitting || !turnstileToken}
      >
        {isSubmitting ? t('form.submitting') : t('form.submit')}
      </Button>
    </form>
  );
};
