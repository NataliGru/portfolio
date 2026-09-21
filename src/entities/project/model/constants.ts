import { Monitor, Smartphone } from 'lucide-react';

export const PREVIEW_CONFIG = {
  desktop: {
    width: 1000,
    icon: Monitor,
    translationKey: 'preview.desktop',
  },
  mobile: {
    width: 500,
    icon: Smartphone,
    translationKey: 'preview.mobile',
  },
} as const;

export const PREVIEW_HEIGHT = 480;
