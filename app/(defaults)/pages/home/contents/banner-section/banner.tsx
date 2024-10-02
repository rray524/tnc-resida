import CtaButton from "@/components/button/cta-button";
import BannerTitle from "@/components/title-component/banner-title";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <div className="banner h-[550px] md:h-[800px] bg-cover bg-no-repeat shadow-insetcustom flex items-center justify-center object-cover">
      <div className="text-center container mx-auto my-auto ">
        <BannerTitle
          title="Find Your Beachfront Bliss with Our Coastal Listings"
          description="Your Partner in Real Estate Success. Our mission is to help you find the perfect property or sell your  current one with ease."
        />

        <Link href="/pages/about-us">
          <CtaButton>View Details</CtaButton>
        </Link>
      </div>
    </div>
  );
}
export default Banner;
