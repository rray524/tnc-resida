import React from "react";

interface CommonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CtaButton: React.FC<CommonButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`px-8 py-3 my-5 opacity-90 text-white font-semibold text-[18px] bg-red-500 items-center justify-center hover:bg-yellow-500 hover:text-white duration-1000 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CtaButton;
