import { IRootDetails, IMenuItem } from '@/lib/types';

const appConfig: IRootDetails = {
  websiteName: "Antoja2",
  version: "1.0.0",
  defaultColorScheme: "light",
  breakPoints: {
    mobile: 768,
    tablet: 1024,
  },
  socialLinks: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourhandle",
  },
  contactPhone: "1234567890",
  contactEmail: "contact@yourwebsite.com",
  copyrightYear: new Date().getFullYear(),
};

const menuData: IMenuItem[] = [
  { title: 'Home', alt: 'homepage', link: '/' },
  { title: 'About', alt: 'about page', link: '/about' },
  { title: 'Contact', alt: 'contact page', link: '/contact' },
];

export { appConfig, menuData };
