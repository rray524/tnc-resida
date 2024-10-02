import React from "react";
import CommonBanner from "@/components/banner";
import backgroundImage from "@/public/images/banner.webp";
import { Metadata } from "next";
import AboutUs from "./contents/about-section";
import StatsSection from "./contents/stats-component";
import BusinessPartners from "./contents/partner-component";

export const metadata: Metadata = {
  title: "About us Page | TNC Resida",
};

const AboutPage = () => {
  return (
    <>
      <CommonBanner
        backgroundImage={backgroundImage}
        bannerHeader="ABOUT US"
        bannerDetailsText=""
        overlayOpacity={0.8}
      />
      <AboutUs />
      <StatsSection />
      <BusinessPartners />
    </>
  );
};

export default AboutPage;
