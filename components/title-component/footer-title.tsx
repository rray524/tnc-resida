import React from "react";

interface FooterTitleProps {
  children: React.ReactNode;
}

const FooterTitle: React.FC<FooterTitleProps> = ({ children }) => {
  return <h1 className="text-[20px] font-semibold my-5">{children}</h1>;
};

export default FooterTitle;
