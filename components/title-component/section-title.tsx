import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  titleColor?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  titleColor = "text-black",
  className = "",
}) => {
  return (
    <div className={className}>
      {subtitle && (
        <p className="text-[20px] text-yellow-400 text-center py-2 font-semibold uppercase">
          {subtitle}
        </p>
      )}
      <h1
        className={`md:text-[46px] text-[23px] leading-relaxed font-bold ${titleColor} ${className}`}
      >
        {title}
      </h1>
      {description && (
        <p className="text-gray-400 text-sm md:text-[20px] leading-6 md:leading-8 py-2 text-left">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
