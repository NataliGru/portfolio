import { Links } from '@/settings';

export const NAVIGATION_LINKS = {
  logo: {
    textKey: 'nameLogo',
    link: Links.index,
  },
  items: [
    // {
    //   textKey: 'skills',
    //   link: Links.skills,
    // },
    // {
    //   textKey: 'experience',
    //   link: Links.experience,
    // },
    {
      textKey: 'projects',
      link: Links.projects.index,
    },
    {
      textKey: 'about',
      link: Links.about,
    },
    {
      textKey: 'contact',
      link: Links.contact,
    },
  ],
};
