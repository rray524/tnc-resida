import React from "react";

import {
  faRulerCombined,
  faBed,
  faBath,
} from "@fortawesome/free-solid-svg-icons";
import PropertyFeature from "./property-feature";
import { formatPrice } from "@/utils/utils";

interface PropertyHeaderProps {
  price: string;
  city: string;
  squareFeet: string;
  beds: string;
  baths: string;
}

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  price,
  city,
  squareFeet,
  beds,
  baths,
}) => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-yellow-500 text-left my-5 ">
        ${formatPrice(price)}
      </h1>
      <h2 className="font-bold text-4xl text-left my-5 dark:text-white">
        {city}
      </h2>
      <div className="pt-4 pb-2 border-gray-300 ">
        <div className="flex flex-col sm:flex-row gap-2 ">
          <PropertyFeature
            icon={faRulerCombined}
            value={squareFeet}
            label="SqFt"
          />
          <PropertyFeature icon={faBed} value={beds} label="Beds" />
          <PropertyFeature icon={faBath} value={baths} label="Baths" />
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
