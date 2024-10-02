import React from "react";
import BannerImage from "@/public/images/banner Two.webp";
import Image from "next/image";
import SectionTitle from "@/components/title-component/section-title";
import CtaButton from "@/components/button/cta-button";
import Link from "next/link";

function Browse() {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="basis-full md:basis-1/2">
          <Image
            src={BannerImage}
            alt="about image"
            className="w-full h-[100%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center dark:border basis-full md:basis-1/2 bg-bgColors dark:bg-gulf-blue px-3">
          <div className="mx-10">
            <div className="flex flex-col min-h-[50px] md:text-left">
              <SectionTitle
                title="Browse our Wide Selection of Luxury Properties"
                titleColor="text-white"
                description="Discover Your Dream Home with TNC Real Estate. Our deep market
              insights and commitment to excellence ensure a seamless and
              enjoyable real estate journey."
                className="text-left py-2"
              />
            </div>
            <div className="text-left my-4">
              <Link href="/pages/about-us">
                <CtaButton>View Details</CtaButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
