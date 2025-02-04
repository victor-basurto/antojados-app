import React from 'react';
import { IMenuItem } from '@/lib/types';
import { Link } from '@heroui/react';
import { NavbarItem } from '@heroui/navbar';

const MenuItem: React.FC<IMenuItem> = ({ link, name, caption, classNames }) => {
  return (
    <NavbarItem>
      <Link
        className={classNames}
        color="secondary"
        href={link}
        title={caption}
        aria-current="page"
      >
        {name}
      </Link>
    </NavbarItem>
  );
};

export default MenuItem;
