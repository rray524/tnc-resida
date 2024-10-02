import React from "react";
import CommonBanner from "@/components/banner";
import backgroundImage from "@/public/images/banner.webp";
import { Metadata } from "next";
import ContactSection from "./contents/contact-section";

export const metadata: Metadata = {
  title: "Contact us Page | TNC Resida",
};

const ContactPage = () => {
  return (
    <>
      <CommonBanner
        backgroundImage={backgroundImage}
        bannerHeader="CONTACT US"
        bannerDetailsText=""
        overlayOpacity={0.8}
      />
      <ContactSection />
    </>
  );
};

export default ContactPage;
