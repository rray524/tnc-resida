import React from "react";

interface BannerTitleProps {
  title: string;
  description: string;
  className?: string;
}

const BannerTitle: React.FC<BannerTitleProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={className}>
      <h1 className="md:text-[60px] text-[30px] text-center text-white font-semibold w-[95%] md:w-[50%] mx-auto">
        {title}
      </h1>

      <br />
      <p className="text-[16px] md:text-lg text-gray-400 w-[96%] md:w-[40%] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default BannerTitle;
