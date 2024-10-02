import Image, { StaticImageData } from "next/image";
import React from "react";
import partner_one from "@/public/images/partner-1.webp";
import partner_two from "@/public/images/partner-2.webp";
import partner_three from "@/public/images/partner-3.webp";
import partner_four from "@/public/images/partner-4.webp";
import partner_five from "@/public/images/partner-5.webp";
import SectionTitle from "@/components/title-component/section-title";

interface Partner {
  name: string;
  logo: StaticImageData;
}

const partners: Partner[] = [
  { name: "RealEstate", logo: partner_one },
  { name: "Food House", logo: partner_two },
  { name: "Secure Home", logo: partner_three },
  { name: "Forest House", logo: partner_four },
  { name: "RealEstate", logo: partner_five },
];

const BusinessPartners = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-8">
        <SectionTitle
          title="Our Business Partner"
          titleColor="text-gray-600"
          description=""
          className="text-3xl font-bold mb-10"
        />
      </div>
      <hr className="bg-gray-500 w-[65%] mx-auto my-10" />
      <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 bg-gray-100 h-[250px] w-[250px]"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              className="h-24 w-24"
            />
          </div>
        ))}
      </div>
      <hr className="bg-gray-500 w-[65%] mx-auto my-10" />
    </section>
  );
};

export default BusinessPartners;
