'use client';
import { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent } from '@heroui/react';
import { fetchGlobalData } from '@/utils/fetchData';
import MenuItem from './MenuItem';
import { IMenuItem, ResponseDataWithLoadingAndError } from '@/lib/types';
const NavigationMenu = () => {
  const [menuData, setMenuData] = useState({
    data: [] as IMenuItem[],
    isLoading: true,
    message: '',
    error: '',
  } satisfies ResponseDataWithLoadingAndError<IMenuItem>);
  useEffect(() => {
    fetchGlobalData('NavMenu')
      .then(({ data, message }: ResponseDataWithLoadingAndError<IMenuItem>) => {
        setMenuData({
          data: data as IMenuItem[],
          message: message,
          error: '',
          isLoading: true,
        });
      })
      .catch((error: unknown) => {
        setMenuData((prev) => ({
          ...prev,
          error: `Error fetching products: ${error}`,
          isLoading: true,
        }));
      });
  }, []);
  return (
    <Navbar>
      <NavbarBrand>
        {/* TODO: add logo */}
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Website Name placeholder</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuData.data.map((menuItem: IMenuItem, idx: number) => (
          <MenuItem
            key={idx}
            title={menuItem.title}
            alt={menuItem.alt}
            link={menuItem.link}
          />
        ))}
      </NavbarContent>
    </Navbar>
  );
};
export default NavigationMenu;
