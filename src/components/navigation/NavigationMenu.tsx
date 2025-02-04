'use client';
import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, Image } from '@heroui/react';
import { fetchGlobalData } from '@/utils/fetchData';
import { appConfig } from '@/data/app-data';
import { IMenuItem, ResponseDataWithLoadingAndError } from '@/lib/types';
import MenuItem from './MenuItem';

const NavigationMenu = ({ classNames }: { classNames: string }) => {
  const [menuData, setMenuData] = useState({
    data: [] as IMenuItem[],
    isLoading: true,
    message: '',
    error: '',
  } as ResponseDataWithLoadingAndError<IMenuItem>);
  useEffect(() => {
    fetchGlobalData('NavMenu')
      .then(({ data, message }: ResponseDataWithLoadingAndError<IMenuItem>) => {
        setMenuData({
          data: data as IMenuItem[],
          message: message,
          error: '',
          isLoading: false,
        });
      })
      .catch((error: unknown) => {
        setMenuData((prev) => ({
          ...prev,
          error: `Error fetching products: ${error}`,
          isLoading: false,
        }));
      });
  }, []);
  if (!menuData.data) return;
  if (menuData.isLoading) return <div>Loading...{menuData.message}</div>;
  if (menuData.error) return <div>Error: {menuData.error}</div>;
  if (!menuData.data || menuData.data.length === 0)
    return <div>No data available</div>;
  return (
    <Navbar className={classNames}>
      <NavbarBrand>
        {/* TODO: add logo */}
        <Image
          alt={`${appConfig.websiteName} logo`}
          src={'/clean-logo.svg'}
          width={200}
          className="logo px-4"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuData.data.map((item: IMenuItem | null, idx: number) => (
          <MenuItem
            key={idx}
            name={item?.name}
            caption={item?.caption}
            link={item?.link}
            classNames="menu-item"
          />
        ))}
      </NavbarContent>
    </Navbar>
  );
};
export default NavigationMenu;
