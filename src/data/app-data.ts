import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';
import { IRootDetails, IMenuItem } from '@/lib/types';

// website name
const websiteName = 'Antoja2App';
// website configuration
const appConfig: IRootDetails = {
  websiteName,
  websiteLogo: '/antoja2logito.jpg',
  version: '1.0.0',
  defaultColorScheme: 'light',
  breakPoints: {
    mobile: 768,
    tablet: 1024,
  },
  socialLinks: [
    {
      title: 'facebook',
      url: 'https://facebook.com/yourhandle',
      icon: FaFacebookF,
    },
    {
      title: '@AD_ANTOJA2',
      url: 'https://github.com/yourhandle',
      icon: FaInstagram,
    },
    {
      title: 'tiktok',
      url: 'https://github.com/yourhandle',
      icon: FaTiktok,
    },
    {
      title: 'whatsapp',
      url: 'https://github.com/yourhandle',
      icon: FaWhatsapp,
    },
    {
      title: 'youtube',
      url: 'https://github.com/yourhandle',
      icon: FaYoutube,
    },
  ],
  contactPhone: '1234567890',
  contactEmail: 'contact@yourwebsite.com',
  copyrightYear: `${new Date().getFullYear()} ${websiteName}`,
};

const menuData: IMenuItem[] = [
  { name: 'Home', caption: 'homepage', link: '/' },
  { name: 'About', caption: 'about page', link: '/about' },
  { name: 'Contact', caption: 'contact page', link: '/contact' },
];
const footerMenuData: IMenuItem[] = [
  ...menuData,
  { name: 'FAQs', caption: "FAQ's", link: '/faqs' },
];

export { appConfig, menuData, footerMenuData };
