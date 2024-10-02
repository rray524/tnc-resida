import React from "react";
import Banner from "./contents/banner-section/banner";
import ServiceCard from "./contents/service-section/service-card";
import Browse from "./contents/browse-section/browse-section";
import QuestionSection from "./contents/question-section/question-section";
import ImageSection from "./contents/gallery-section/gallery-section";
import TestimonialCarousel from "./contents/testimonial-section/testimonial-section";
import SoldListingProperty from "./contents/sold-list-property/sold-list-property";
import RecentListing from "./contents/recent-listing/recent-listing";
import CalculatorSection from "./contents/calculator-section/calculator-section";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <ServiceCard />
      <Browse />
      <SoldListingProperty />
      <QuestionSection />
      <RecentListing />
      <ImageSection />
      <CalculatorSection />
      <TestimonialCarousel />
    </div>
  );
};

export default HomePage;
