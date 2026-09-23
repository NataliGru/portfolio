import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'form.validation.nameRequired')
    .min(2, 'form.validation.nameTooShort')
    .max(50, 'form.validation.nameTooLong'),
  email: z
    .string()
    .trim()
    .min(1, 'form.validation.emailRequired')
    .email('form.validation.emailInvalid'),
  message: z
    .string()
    .trim()
    .min(1, 'form.validation.messageRequired')
    .min(10, 'form.validation.messageTooShort')
    .max(1000, 'form.validation.messageTooLong'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
