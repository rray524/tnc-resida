"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "@/components/title-component/section-title";
import StarRating from "./components";
import { truncateText } from "@/utils/utils";
import { testimonials } from "./data";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev ">←</button>,
    nextArrow: <button className="slick-next ">→</button>,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: any) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4 pt-7">{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div className="w-3 h-3 bg-gray-500 rounded-full cursor-pointer mt-4 active-dot"></div>
    ),
  };

  return (
    <div className="my-20">
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
        <div className="lg:p-10 p-5">
          <SectionTitle
            title="What Our Client Says"
            description="TNC Resida has made my home search a breeze. Their platform is user-friendly, and I found the perfect place with ease."
            titleColor="dark:text-white"
          />
        </div>
        <div className="mx-10">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="p-4 sm:p-6 bg-white dark:bg-gulf-blue border border-gray-500 text-center">
                  <div className="flex text-left mb-2 sm:mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-base sm:text-lg text-left italic mb-2 sm:mb-4 dark:text-white">
                    {truncateText(testimonial.text, 140)}
                  </p>
                  <h3 className="text-lg sm:text-[15px] text-left font-semibold dark:text-white">
                    {testimonial.author}
                  </h3>
                  <p className="text-gray-600 [13px] text-left dark:text-gray-300">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
