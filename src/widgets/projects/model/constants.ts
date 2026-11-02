import { Monitor, Smartphone } from 'lucide-react';

export const PROJECTS_LIST = [
  {
    projectKey: 'mntn',
    slug: 'mntn',
    siteUrl: 'https://studio-landing-tawny.vercel.app/',
    technologyKeys: ['next', 'typescript', 'tailwind', 'motion'],
    categoryKeys: ['landing', 'frontend'],
  },
  {
    projectKey: 'coffee',
    slug: 'coffee',
    siteUrl: 'https://coffee-landing-natali-gru.vercel.app/',
    technologyKeys: ['typescript', 'HTML5', 'CSS3'],
    categoryKeys: ['landing', 'frontend'],
  },
];

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
