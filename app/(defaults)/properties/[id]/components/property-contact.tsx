import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

interface PropertyContactInfoProps {
  address: string;
  contactNumbers: string[];
}

const PropertyContactInfo: React.FC<PropertyContactInfoProps> = ({
  address,
  contactNumbers,
}) => {
  return (
    <div className="pt-5">
      <div className="flex gap-5 justify-center ">
        <div className="p-5 bg-gray-200">
          <p className="my-10 flex justify-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-red-500 opacity-85 w-12 h-12"
            />
          </p>
          <h1 className="text-xl opacity-80">{address}</h1>
        </div>
        <div className="p-10 bg-gray-200">
          <p className="my-5 flex justify-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-red-500 opacity-85 w-12 h-12"
            />
          </p>
          {contactNumbers.map((number, index) => (
            <p key={index} className="text-xl opacity-80">
              {number}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyContactInfo;
