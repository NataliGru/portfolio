import { Blocks, FileCodeCorner, Form, Sparkles, Toolbox } from 'lucide-react';

export const SKILLS = [
  {
    titleKey: 'frontend',
    icon: FileCodeCorner,
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    titleKey: 'uiAndStyling',
    icon: Sparkles,
    items: [
      'Tailwind CSS',
      'Material UI',
      'Chakra UI',
      'shadcn/ui',
      'motion/react',
    ],
  },
  {
    titleKey: 'stateAndData',
    icon: Blocks,
    items: [
      'RTK Query',
      'Zustand',
      'React Query',
      'React Context',
      'REST APIs',
    ],
  },
  {
    titleKey: 'formsAndIntegrations',
    icon: Form,
    items: [
      'React Hook Form',
      'Zod',
      'Yup',
      'Firebase',
      'Stripe',
      'PayPal',
      'Chart.js',
      'Day.js',
      'next-intl',
      'i18next',
    ],
  },
  {
    titleKey: 'toolsAndPractices',
    icon: Toolbox,
    items: [
      'Git',
      'GitHub',
      'ESLint',
      'Prettier',
      'Husky',
      'lint-staged',
      'Feature-Sliced Design',
      'SEO',
      'Open Graph',
      'Structured Data',
      'Accessibility',
    ],
  },
] as const;

export type SkillGroup = (typeof SKILLS)[number];
