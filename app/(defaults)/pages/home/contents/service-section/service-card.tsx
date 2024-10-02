import React from "react";
import Image from "next/image";
import { FetureData } from "@/data/data";
function ServiceCard() {
  return (
    <div className=" my-20 mx-auto ">
      <div className="">
        <div className="grid grid-cols-1 gap-6 sm:text-center md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 px-12 ">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className=" bg-white rounded-lg shadow border border-solid border-gray-200 dark:border-gray-700 hover:border-gray-500 hover:border-dotted flex flex-col items-center justify-center"
            >
              <div className="lg:h-[225px]  h-[170px] mx-auto flex items-center justify-center">
                <Image src={card.image} alt="card" />
              </div>

              <h5 className="my-2 text-[18px] mx-4 tracking-tight text-gray-700  text-center dark:text-black">
                {card.type}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
