import { IRootDetails, IMenuItem } from '@/lib/types';

const websiteName = "Antoja2App";
const appConfig: IRootDetails = {
  websiteName,
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
  copyrightYear: `&copy; ${new Date().getFullYear()} ${websiteName}`,
};

const menuData: IMenuItem[] = [
  { name: 'Home', caption: 'homepage', link: '/' },
  { name: 'About', caption: 'about page', link: '/about' },
  { name: 'Contact', caption: 'contact page', link: '/contact' },
];
const footerMenuData: IMenuItem[] = [
  ...menuData,
  {name: 'FAQS', caption: 'FAQ\'s', link: '/faqs'}
]

export { appConfig, menuData, footerMenuData };
