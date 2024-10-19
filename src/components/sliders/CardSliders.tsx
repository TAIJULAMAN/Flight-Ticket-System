"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";

const CardSlider = ({ sliderImages }: any) => {
  const router = useRouter();

  return (
    <div className="w-full overflow-hidden relative">
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
        className=" mySwiper overflow-hidden ">
        {sliderImages &&
          sliderImages.map((item: any, index: any) => (
            <SwiperSlide
              key={item._id}
              className="">
              <div className=" w-full">
                <div className="relative overflow-hidden">
                  <Image
                    className="w-full  relative transition-all duration-500"
                    src={item?.img || ""}
                    alt={index}
                    width="300"
                    height="214"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div>
        <div className="swiper-pagination pt-10"></div>
      </div>
    </div>
  );
};

export default CardSlider;
