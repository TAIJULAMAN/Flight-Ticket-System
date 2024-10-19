"use client";

import CardSlider from "@/components/sliders/CardSliders";
import React from "react";
import image1 from "@assets/promosion/1.webp";
import image2 from "@assets/promosion/2.webp";
import image3 from "@assets/promosion/3.webp";
import { useGetUsersQuery } from "@/redux-store/api/usersApi";
const sliderImages = [
  {
    img: image1,
    id: 1,
  },
  {
    img: image2,
    id: 2,
  },
  {
    img: image3,
    id: 3,
  },
  {
    img: image1,
    id: 1,
  },
  {
    img: image2,
    id: 2,
  },
];
export default function TopPromotions() {
  const { data } = useGetUsersQuery();
  // console.log(data);
  return (
    <div className="pt-16">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex items-center flex-col justify-center text-center">
          <h1 className="text-[28px] font-[500] text-[#222222] w-[199px] mb-2">Top Promotions</h1>
          <div className="mb-[30px]">
            <svg
              width="157"
              height="3"
              viewBox="0 0 157 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                width="157"
                height="3"
                rx="1.5"
                fill="#254FD4"
              />
            </svg>
          </div>
        </div>
        <div className="">
          <CardSlider sliderImages={sliderImages} />
        </div>
      </div>
    </div>
  );
}
