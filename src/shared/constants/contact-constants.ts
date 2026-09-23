import EmailIcon from './../../../public/contacts/email.svg';
import GithubIcon from './../../../public/contacts/github.svg';
import LinkedinIcon from './../../../public/contacts/linkedin.svg';
import TelegramIcon from './../../../public/contacts/telegram.svg';

export const CONTACTS = {
  email: {
    link: 'nataliia.hrushanyk@gmail.com',
    label: 'nataliia.hrushanyk@gmail.com',
    icon: EmailIcon,
    contactType: 'email',
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/nataliia-hrushanyk-637494283',
    label: 'Nataliia Hrushanyk',
    icon: LinkedinIcon,
    contactType: 'linkedin',
  },
  github: {
    link: 'https://github.com/NataliGru',
    label: 'NataliGru',
    icon: GithubIcon,
    contactType: 'github',
  },
  telegram: {
    link: 'https://t.me/n_hrushanyk',
    label: 'n_hrushanyk',
    icon: TelegramIcon,
    contactType: 'telegram',
  },
};
