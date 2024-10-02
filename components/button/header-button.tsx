import React, { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";

interface HeaderButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  href,
  children,
  className = "",
  onClick,
}) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`lg:flex w-full lg:w-auto px-8 py-3 sm:text-center text-center bg-red-700 dark:bg-red-500 text-[18px] opacity-70 dark:opacity-90 text-white font-semibold border items-center justify-center ${className}`}
    >
      {children}
    </Link>
  );
};

export default HeaderButton;
