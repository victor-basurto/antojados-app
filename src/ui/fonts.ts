import { Geist, Geist_Mono, Lusitana, Inter } from 'next/font/google';
export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export const lusitana = Lusitana({
  variable: '--font-lusitana',
  weight: '400',
  subsets: ['latin'],
});
