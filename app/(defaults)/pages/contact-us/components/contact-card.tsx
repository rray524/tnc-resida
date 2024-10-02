import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactInfo, contactInfos } from "../data/contact-data";

export const ContactCard = ({ icon, title, details }: ContactInfo) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg justify-between h-[250px] gap-3">
      <FontAwesomeIcon icon={icon} className="w-8 h-8 text-yellow-500 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600 text-center py-1">
          {detail}
        </p>
      ))}
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfos.map((info, index) => (
          <ContactCard key={index} {...info} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
