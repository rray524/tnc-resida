import Image from "next/image";
import React from "react";
import aboutImage from "@/public/images/about.webp";
import SectionTitle from "@/components/title-component/section-title";
const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between my-20 max-w-7xl mx-auto px-4 gap-6">
      <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
        <div className="relative overflow-hidden">
          <Image
            src={aboutImage}
            alt="House"
            className="object-cover w-full h-full"
          />
          <div className="absolute border border-dashed border-gray-900 top-2 left-2 w-full h-full"></div>
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <SectionTitle
          title="About TNC Resida"
          titleColor="text-gray-600"
          description="At TNC Resida, we are more than just a real estate agency; we are your
          partners in finding the perfect place to call home. With years of
          experience and a passion for helping our clients achieve their real
          estate dreams, we have become a trusted name in the industry."
          className="text-left py-2"
        />
      </div>
    </section>
  );
};

export default AboutUs;
