"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";
import ExclusiveCard from "../cards/ExclusiveCard";

const ExclusiveSlider = ({ exclusiveData }: any) => {
  const router = useRouter();

  return (
    <div className="w-full flight-rec ">
      <Swiper
        slidesPerView={1}
        spaceBetween={6}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        {exclusiveData &&
          exclusiveData.map((item: any, index: any) => (
            <SwiperSlide key={item._id}>
              <ExclusiveCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div>
        <div className="swiper-pagination "></div>
      </div>
    </div>
  );
};

export default ExclusiveSlider;
