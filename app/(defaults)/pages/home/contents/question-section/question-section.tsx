import CtaButton from "@/components/button/cta-button";
import SectionTitle from "@/components/title-component/section-title";
import Link from "next/link";
import React from "react";

function QuestionSection() {
  return (
    <div className="dark:border dark:shadow-lg flex flex-col md:flex-row bg-blue-500 dark:bg-gulf-blue newBanner bg-no-repeat relative bg-right-bottom bg-none bg-contain py-7">
      <div className="p-5 px-10 ">
        <SectionTitle title="Do you have questions?" className="text-white" />
        <div className="flex flex-col items-center md:flex-row   justify-between">
          <h1 className="text-[25px] lg:text-[22px] text-white font-semibold  mb-4 md:mb-0">
            Call or text today, we are here to help!
          </h1>
          <div className="text-left ml-20 my-4">
            <Link href="/pages/contact-us">
              <CtaButton>Contact Us</CtaButton>
            </Link>
          </div>
        </div>
        <p className="text-white font-bold text-lg md:text-2xl mt-4 md:mt-0 md:mb-10 text-center md:text-left">
          555-222-3456
        </p>
      </div>
    </div>
  );
}

export default QuestionSection;
