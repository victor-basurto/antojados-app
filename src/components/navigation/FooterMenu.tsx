'use client';
import React, { useEffect, useState } from 'react';
import { Link } from '@heroui/react';
import { fetchGlobalData } from '@/utils/fetchData';
import { appConfig } from '@/data/app-data';
import {
  IMenuItem,
  ResponseDataWithLoadingAndError,
  ClassNames,
  SocialLinks,
} from '@/lib/types';

const FooterMenu: React.FC<ClassNames> = ({ classNames }) => {
  const [footerData, setFooterData] = useState({
    data: [] as IMenuItem[],
    isLoading: true,
    message: '',
    error: '',
  } as ResponseDataWithLoadingAndError<IMenuItem>);
  useEffect(() => {
    fetchGlobalData('FooterMenu')
      .then(({ data, message }: ResponseDataWithLoadingAndError<IMenuItem>) => {
        setFooterData({
          data: data as IMenuItem[],
          isLoading: false,
          message: message,
          error: '',
        });
      })
      .catch((error: unknown) => {
        setFooterData((prev) => ({
          ...prev,
          error: `Error fetching products: ${error}`,
          isLoading: false,
        }));
      });
  }, []);
  if (footerData.isLoading) return <div>Loading...{footerData.message}</div>;
  if (footerData.error) return <div>Error: {footerData.error}</div>;
  if (!footerData.data || footerData.data.length === 0)
    return <div>No data available</div>;
  return (
    <footer className="w-full max-w-[90%] mx-auto flex gap-2 flex-wrap items-center justify-center flex-col">
      <div className="nav flex gap-12 justify-center border-b border-gray-900 pb-3 mb-3">
        {footerData.data.map((item: IMenuItem | null, idx: number) => (
          <Link
            key={idx}
            className={classNames}
            color="secondary"
            href={item?.link}
            title={item?.caption}
            aria-current="page"
          >
            {item?.name}
          </Link>
        ))}
      </div>
      <div className="social-container flex items-center justify-between gap-8">
        {appConfig.socialLinks.map((socialLink: SocialLinks, idx: number) => (
          <a
            key={idx}
            href={socialLink.url}
            className="flex flex-col items-center justify-center text-xl"
          >
            {socialLink.icon && <socialLink.icon title={socialLink.title} />}
          </a>
        ))}
      </div>
      <div className="mt-6 text-xs">&copy; {appConfig.copyrightYear}</div>
    </footer>
  );
};
export default FooterMenu;
