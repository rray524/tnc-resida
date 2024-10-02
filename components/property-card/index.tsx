import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRulerCombined,
  faBed,
  faBath,
} from "@fortawesome/free-solid-svg-icons";
import { formatPrice, truncateText } from "@/utils/utils";
import { PropertyDetails } from "@/types/types";

interface PropertypropertyProps {
  property: PropertyDetails;
}

const Propertyproperty: React.FC<PropertypropertyProps> = ({ property }) => {
  return (
    <Link key={property._id} href={`/properties/${property._id}`}>
      <div className="bg-white border border-gray-700 hover:border-gray-500 hover:border-dotted transition-all duration-300 dark:bg-gulf-blue">
        <div className="h-[225px] overflow-hidden relative">
          <Image
            src={
              property.image_urls.length > 0
                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${property.image_urls[0]}`
                : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
            }
            alt="property"
            className="w-full h-full object-cover hover:scale-125 duration-1000"
            width={600}
            height={300}
          />
          <span className="absolute top-0 left-0 bg-yellow-400 mt-3 w-[55px] p-2 text-[15px] font-semibold text-white">
            {property.category === "new" ? "New" : "Sold"}
          </span>
        </div>
        <div className="pt-4 pb-2 border-gray-300">
          <div className="flex">
            <span className="inline-block py-1 opacity-80 text-[14px] p-5 text-gray-500 mb-2 text-left">
              <FontAwesomeIcon
                icon={faRulerCombined}
                className="mx-2 text-red-500"
              />
              <span className="opacity-80 dark:text-white">
                {property.square_feet}
              </span>
            </span>
            <span className="inline-block py-1 opacity-80 text-[14px] p-5 text-gray-500 mb-2 text-left">
              <FontAwesomeIcon icon={faBed} className="mx-2 text-red-500" />
              <span className="opacity-80 dark:text-white">
                {property.at_a_glance.beds}
              </span>
            </span>
            <span className="inline-block py-1 opacity-80 text-[14px] p-5 text-gray-500 mb-2 text-left">
              <FontAwesomeIcon icon={faBath} className="mx-2 text-red-500" />
              <span className="opacity-80 dark:text-white">
                {property.at_a_glance.baths}
              </span>
            </span>
          </div>
        </div>
        <h5 className="my-3 text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
          {property.exterior.property_type}
        </h5>
        <p className="mb-3 text-[15px] mx-4 text-gray-500 dark:text-gray-400 text-left h-[3rem]">
          {truncateText(property.general_details.address, 140)}
        </p>
        <p className="my-5 mx-4 text-[20px] text-red-500 font-semibold dark:text-gray-400 text-left">
          ${formatPrice(property.general_details.price)}
        </p>
      </div>
    </Link>
  );
};

export default Propertyproperty;
