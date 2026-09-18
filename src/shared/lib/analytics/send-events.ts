import { sendGAEvent } from '@next/third-parties/google';

type AnalyticsEvent =
  | 'cv_download_header'
  | 'cv_download_mobile_header'
  | 'cv_download_footer'
  | 'project_visit'
  | 'contact_click'
  | 'email_click'
  | 'linkedin_click'
  | 'telegram_click'
  | 'github_click';

export const trackEvent = (
  event: AnalyticsEvent,
  params?: Record<string, string>,
) => {
  sendGAEvent('event', event, params ?? {});
};
