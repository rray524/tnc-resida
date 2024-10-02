import SectionTitle from "@/components/title-component/section-title";
import React from "react";
import CalculatorCard from "./calculator-card";
import { calculatorData } from "./data";

const CalculatorSection = () => {
  return (
    <>
      <SectionTitle
        title="Real Estate Calculators"
        titleColor="text-black"
        className="text-center w-[80%] mx-auto dark:text-white"
      />
      <div className="p-1 flex flex-wrap items-center justify-center">
        {calculatorData.map((item, index) => (
          <CalculatorCard
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

export default CalculatorSection;
