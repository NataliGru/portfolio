import type { FieldPath, UseFormRegister } from 'react-hook-form';

import { ContactFormData } from '../model/contact-form-schema';

interface ContactFormFieldProps {
  label: string;
  placeholder: string;
  hasError: boolean;
  fieldName: FieldPath<ContactFormData>;
  errorMessage?: string;
  register: UseFormRegister<ContactFormData>;
}

export const ContactFormField = ({
  label,
  placeholder,
  hasError,
  fieldName,
  errorMessage,
  register,
}: ContactFormFieldProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={fieldName} className='font-bold'>
        {label} *
      </label>

      <input
        id={fieldName}
        placeholder={placeholder}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${fieldName}-error` : undefined}
        className='border-control-background focus-ring rounded-lg border px-3 py-2 text-sm'
        {...register(fieldName)}
      />

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
