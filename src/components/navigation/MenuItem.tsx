import { IMenuItem } from "@/lib/types";
import { Link } from "@heroui/react";
import { NavbarItem } from "@heroui/navbar";

const MenuItem: React.FC<IMenuItem> = ({ link, title, alt }) => {
  return (
    <NavbarItem>
      <Link color="secondary" href={link} title={alt} aria-current="page">
        {title}
      </Link>
    </NavbarItem>
  )
}

export default MenuItem;
