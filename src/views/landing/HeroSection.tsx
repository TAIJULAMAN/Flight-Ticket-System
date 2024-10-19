"use client";
import React from "react";
import heroImage from "@assets/landing/hero.png";
import SearchBox from "@/components/SearchBox/SearchBox";

export default function HeroSection() {
  return (
    <div
      className="w-full flex bg-no-repeat items-center justify-center z-40  h-[601px] relative duration-700 bg-hero transform"
      style={{
        background: `linear-gradient(180deg, rgba(44, 95, 255, 0.76) -24.13%, rgba(16, 42, 122, 0.87) 102.54%), url(${heroImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "0px 0px 24px 24px",
      }}
    >
      <div className="main-container mt-20">
        <p className="w-full text-center text-white text-[36px] font-[300]">
          Elevate Your <span className="font-medium">Journey:</span> Seamless{" "}
          <span className="font-medium">Booking,</span> Limitless{" "}
          <span className="font-medium">Horizons</span>
        </p>

        <div className="mt-8 second-container">
          <SearchBox />
        </div>
      </div>
    </div>
  );
}
