import React from "react";
import Image, { StaticImageData } from "next/image";
interface ImageCardProps {
  src: StaticImageData;
  alt: string;
  label: string;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, alt, label }) => {
  return (
    <div className="relative overflow-hidden flex justify-center image-container">
      <Image
        src={src}
        alt={alt}
        className="h-[400px] w-full object-cover duration-1000"
      />
      <p className="absolute right-5 bottom-5 text-white bg-opacity-75 p-2">
        {label}
      </p>
    </div>
  );
};

export default ImageCard;
