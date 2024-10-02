import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
  link: string;
}

const CalculatorCard: React.FC<CardProps> = ({ title, imageUrl, link }) => {
  return (
    <Link href={link ?? ""}>
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-gulf-blue rounded-lg w-[300px] shadow-lg group">
        <svg
          className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
          viewBox="0 0 375 283"
          fill="none"
          style={{ opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>

          <Image
            className="relative w-40"
            width={140}
            height={140}
            src={imageUrl}
            alt="calculator"
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <div className="flex justify-center items-center">
            <span className="block font-semibold text-xl">{title}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CalculatorCard;
