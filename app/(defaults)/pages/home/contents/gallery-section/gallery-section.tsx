import React from "react";
import image from "@/public/images/image-1.png";
import image1 from "@/public/images/image-2.png";
import image2 from "@/public/images/image-3.png";
import image3 from "@/public/images/image-4.png";
import image4 from "@/public/images/image-5.png";
import image5 from "@/public/images/image-6.png";
import image6 from "@/public/images/image-7.png";
import ImageCard from "./component";

function ImageSection() {
  const images = [
    { src: image3, alt: "card", label: "Dream Town" },
    { src: image5, alt: "card", label: "Riverview Rida" },
    { src: image4, alt: "card", label: "Forest fast Carlifo" },
    { src: image3, alt: "card", label: "Luxury Realty" },
    { src: image2, alt: "card", label: "Forest fast Carlifo" },
    { src: image6, alt: "card", label: "Indigo" },
    { src: image1, alt: "card", label: "Star Island" },
    { src: image, alt: "card", label: "My Seattle" },
  ];
  return (
    <div className="mb-20">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              label={image.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
