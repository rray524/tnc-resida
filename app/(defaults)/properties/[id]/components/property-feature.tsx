import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PropertyFeatureProps {
  icon: IconDefinition;
  value: string;
  label: string;
}

const PropertyFeature: React.FC<PropertyFeatureProps> = ({
  icon,
  value,
  label,
}) => {
  return (
    <span className="flex py-1 p-5 bg-gray-200 text-gray-900 mb-2 text-center">
      <FontAwesomeIcon icon={icon} className="mx-2 text-red-500 w-6 h-6" />
      <span className="opacity-80 text-[17px]">
        {value} {label}
      </span>
    </span>
  );
};

export default PropertyFeature;
