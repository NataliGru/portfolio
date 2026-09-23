import { Resend } from 'resend';
import { z } from 'zod';

import { contactFormSchema } from '@/features/send-message/model/contact-form-schema';
import { EmailTemplate } from '@/features/send-message/ui/email-template';

const sendEmailSchema = contactFormSchema.extend({
  turnstileToken: z.string().min(1).max(2048),
});

interface TurnstileVerificationResult {
  success: boolean;
  hostname?: string;
  action?: string;
  'error-codes'?: string[];
}

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const PRODUCTION_HOSTNAME = 'portfolio-nataliia-hrushanyk.vercel.app';

export async function POST(request: Request) {
  try {
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return Response.json(
        { error: 'Unsupported content type' },
        { status: 415 },
      );
    }

    const rawBody = await request.text();

    if (new TextEncoder().encode(rawBody).length > 10_000) {
      return Response.json({ error: 'Request is too large' }, { status: 413 });
    }

    let body: unknown;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const result = sendEmailSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        {
          error: 'Invalid form data',
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, message, turnstileToken } = result.data;

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (!turnstileSecret) {
      return Response.json(
        { error: 'Turnstile is not configured' },
        { status: 500 },
      );
    }

    const turnstileResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken,
      }),
    });

    if (!turnstileResponse.ok) {
      console.error(
        'Turnstile request failed:',
        turnstileResponse.status,
      );

      return Response.json(
        { error: 'Security verification failed' },
        { status: 503 },
      );
    }

    const turnstileResult =
      (await turnstileResponse.json()) as TurnstileVerificationResult;

    const hasValidProductionMetadata =
      process.env.NODE_ENV !== 'production' ||
      (turnstileResult.hostname === PRODUCTION_HOSTNAME &&
        turnstileResult.action === 'contact-form');

    if (!turnstileResult.success || !hasValidProductionMetadata) {
      console.warn('Turnstile verification rejected:', {
        success: turnstileResult.success,
        hostname: turnstileResult.hostname,
        action: turnstileResult.action,
        errorCodes: turnstileResult['error-codes'],
      });

      return Response.json(
        { error: 'Security verification failed' },
        { status: 403 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !from || !to) {
      return Response.json(
        { error: 'Email environment variables are not configured' },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: 'New portfolio contact message',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);

      return Response.json({ error: 'Failed to send email' }, { status: 502 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Send email error:', error);

    return Response.json(
      { error: 'Unexpected server error' },
      { status: 500 },
    );
  }
}
