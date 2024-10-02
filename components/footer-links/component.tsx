import Link from "next/link";
import React from "react";

interface FooterLinkProps {
  text: { name: string; link: string };
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  return (
    <Link href={text.link} className="text-[17px] text-gray-400">
      {text.name}
    </Link>
  );
};

export default FooterLink;
