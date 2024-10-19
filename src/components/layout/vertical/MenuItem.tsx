// MenuItem.tsx
import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface MenuItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ href, icon, children, active }) => {
  return (
    <Link
      href={href}
      className={classNames("flex items-center p-4 rounded-md transition-all duration-200", {
        "bg-[#D5DFFF]": active,
        "hover:bg-gray-100": !active,
      })}>
      <div className="mr-3">{icon}</div>
      <span>{children}</span>
    </Link>
  );
};
