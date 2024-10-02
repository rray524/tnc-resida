import React from "react";
import FooterLink from "./component";

interface FooterLinksProps {
  links: { name: string; link: string }[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <>
      <ul className="flex flex-col gap-5">
        {links.map((link, index) => (
          <li key={index}>
            <FooterLink text={link} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks;
