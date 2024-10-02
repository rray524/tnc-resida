import React from "react";

interface PropertyDetailsSectionProps {
  title: string;
  details: { label: string; value: string }[];
}

const PropertyDetailsSection: React.FC<PropertyDetailsSectionProps> = ({
  title,
  details,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold dark:text-white">{title}</h1>
      <hr className="my-5" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-0 sm:gap-4 grid-cols-1 justify-between dark:text-white">
        {details.map((detail, index) => (
          <div key={index}>
            <span className="font-semibold">{detail.label}: </span>
            <span>{detail.value}</span>
            <hr className="w-[300px] my-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailsSection;
