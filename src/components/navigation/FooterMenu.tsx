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

const FooterMenu: React.FC = ({ classNames }: ClassNames) => {
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
    <footer className="block max-w-[90%]">
      <ul className="nav justify-center border-b border-gray-900 pb-3 mb-3">
        <li className="nav-item">
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
        </li>
      </ul>
      <div className="social-container flex items-center justify-between">
        {appConfig.socialLinks.map((socialLink: SocialLinks, idx: number) => (
          <a
            key={idx}
            href={socialLink.url}
            className="flex flex-col items-center justify-center"
          >
            {socialLink.icon && <socialLink.icon title={socialLink.title} />}
          </a>
        ))}
      </div>
      {/* <span className="absolute right-0 bottom-0 text-white underline">
        {appConfig.version}
      </span> */}
    </footer>
  );
};
export default FooterMenu;
