"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageCardProps {
  images: { src: string; alt: string }[];
  initialIndex: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ images, initialIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(initialIndex);

  const handleOpenLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <Image
            src={image.src}
            alt={image.alt}
            width={1900}
            height={300}
            className="w-[600px] h-[300px] cursor-pointer object-cover"
            onClick={() => handleOpenLightbox(index)}
          />
          <div className="absolute inset-0 bg-bgColors opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FontAwesomeIcon
              icon={faEye}
              className="w-8 h-8 cursor-pointer"
              onClick={() => handleOpenLightbox(index)}
            />
          </div>
        </div>
      ))}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images.map((image) => ({
            src: image.src,
            width: 1900,
            height: 600,
            alt: image.alt,
          }))}
        />
      )}
    </>
  );
};

export default ImageCard;
