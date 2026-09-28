'use client';

import type { FieldPath, UseFormRegister } from 'react-hook-form';

import { cn } from '@/shared';

import { ContactFormData } from '../model/contact-form-schema';

interface ContactFormFieldProps {
  label: string;
  placeholder: string;
  hasError: boolean;
  fieldName: FieldPath<ContactFormData>;
  errorMessage?: string;
  register: UseFormRegister<ContactFormData>;
}

const getFieldType = (fieldName: keyof ContactFormData) => {
  if (fieldName === 'message') return 'textarea';
  if (fieldName === 'email') return 'email';

  return 'text';
};

export const ContactFormField = ({
  label,
  placeholder,
  hasError,
  fieldName,
  errorMessage,
  register,
}: ContactFormFieldProps) => {
  const commonProps = {
    id: fieldName,
    placeholder,
    'aria-invalid': hasError,
    'aria-describedby': hasError ? `${fieldName}-error` : undefined,

    ...register(fieldName),
  };

  const commonClassName =
    'border-control-background focus-ring rounded-lg border px-3 py-2 text-sm';

  const fieldType = getFieldType(fieldName);

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={fieldName} className='font-bold'>
        {label} *
      </label>

      {fieldType === 'textarea' ? (
        <textarea
          {...commonProps}
          className={cn('max-h-[50dvh] min-h-10 resize-y', commonClassName)}
        />
      ) : (
        <input
          {...commonProps}
          type={fieldType}
          className={commonClassName}
          {...register(fieldName)}
        />
      )}

      {hasError && (
        <p
          id={`${fieldName}-error`}
          role='alert'
          className='text-sm text-red-500'
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
