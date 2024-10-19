"use client";
import Image from "next/image";
import React from "react";
import img1 from "@assets/Blue Ribbon Bags/Blue Ribbon Bags.png";
import { Divider } from "@mui/material";
import image from "@assets/landing/abFlight.svg";
import { GoDotFill } from "react-icons/go";
import { IoIosRemoveCircleOutline, IoMdTime } from "react-icons/io";
import { LuBaggageClaim } from "react-icons/lu";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaCircleCheck } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { MdLuggage } from "react-icons/md";
import { Barlow } from "next/font/google";
const barlow = Barlow({
  weight: ["500"],
  subsets: ["latin"],
});

function BookingReview() {
  const [isRequired, setIsRequired] = useState(false);
  const handleReturned = () => {
    setIsRequired(!isRequired);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="mt-[65px]  pb-16">
      <div className="second-container">
        {/* top */}
        <div className="bg-gradient-to-r rounded-md flex text-white justify-between w-full gap-2 items-center px-[40px] py-[17px] from-blue-700 to-blue-900">
          <span
            onClick={handleBack}
            className="cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 10H18M2 10L10 2M2 10L10 18"
                stroke="#FFFEFC"
                stroke-width="2.28571"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <div className="flex items-center gap-2">
            <span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.31464 7.61276L6.35312 6.44865V3.81196C6.35312 3.57914 6.16687 3.39288 5.93405 3.39288H5.89912C5.6663 3.39288 5.48005 3.57914 5.48005 3.81196V6.55924C5.48005 6.76296 5.58482 6.95504 5.76525 7.05981L7.88974 8.3345C8.08764 8.45091 8.34374 8.39271 8.46015 8.19481C8.58238 7.99109 8.51836 7.72917 8.31464 7.61276ZM11.4053 1.65254L9.61262 0.16249C9.36815 -0.0412282 9.00146 -0.0121257 8.79192 0.238157C8.5882 0.482619 8.62313 0.849311 8.86759 1.05885L10.6545 2.5489C10.8989 2.75262 11.2656 2.72352 11.4752 2.47324C11.5245 2.41478 11.5619 2.34718 11.5851 2.27428C11.6083 2.20139 11.6169 2.12463 11.6104 2.04841C11.6039 1.97219 11.5824 1.89799 11.5473 1.83007C11.5121 1.76214 11.4639 1.70182 11.4053 1.65254ZM1.46389 2.5489L3.25079 1.05885C3.50107 0.849311 3.53599 0.482619 3.32645 0.238157C3.2782 0.179273 3.21874 0.130557 3.15151 0.0948335C3.08428 0.0591099 3.01063 0.0370901 2.93483 0.0300513C2.85903 0.0230124 2.78258 0.0310947 2.70992 0.0538293C2.63727 0.0765639 2.56985 0.113498 2.51158 0.16249L0.71886 1.65254C0.660345 1.70182 0.612117 1.76214 0.576934 1.83007C0.541751 1.89799 0.520302 1.97219 0.513815 2.04841C0.507328 2.12463 0.51593 2.20139 0.539129 2.27428C0.562327 2.34718 0.599667 2.41478 0.649014 2.47324C0.852732 2.72352 1.21942 2.75262 1.46389 2.5489ZM6.0621 1.06467C4.67269 1.06475 3.34022 1.61676 2.35782 2.59927C1.37542 3.58179 0.823552 4.91432 0.823629 6.30372C0.823706 7.69313 1.37572 9.0256 2.35823 10.008C3.34074 10.9904 4.67327 11.5423 6.06268 11.5422C6.75064 11.5422 7.43186 11.4066 8.06744 11.1433C8.70302 10.88 9.28052 10.4941 9.76696 10.0076C10.2534 9.5211 10.6392 8.94356 10.9025 8.30795C11.1657 7.67234 11.3012 6.9911 11.3011 6.30314C11.3011 5.61518 11.1656 4.93396 10.9023 4.29838C10.639 3.66279 10.253 3.0853 9.76655 2.59886C9.28006 2.11243 8.70252 1.72657 8.06691 1.46334C7.4313 1.2001 6.75006 1.06463 6.0621 1.06467ZM6.0621 10.3775C3.81538 10.3775 1.98773 8.54986 1.98773 6.30314C1.98773 4.05642 3.81538 2.22878 6.0621 2.22878C8.30882 2.22878 10.1365 4.05642 10.1365 6.30314C10.1365 8.54986 8.30882 10.3775 6.0621 10.3775Z"
                  fill="#FFFEFC"
                />
              </svg>
            </span>
            <p className="text-[11px] font-[600]">Session Timeout in</p>
          </div>
          <div className="flex text-center gap-3">
            <p>
              <span className={`text-[30px] font-[500] ${barlow?.className}`}>11</span>
              <br />
              <span className="text-sm font-[300]">min</span>
            </p>
            <span className="text-[30px] font-[500]">:</span>
            <p>
              <span className={`text-[30px] font-[500] ${barlow?.className}`}>26</span>
              <br />
              <span className="text-sm font-[300]">sec</span>
            </p>
          </div>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="text-white border-white"
          />

          <Link
            className="text-[15px] text-[#C1C9E2] font-normal"
            href={"/booking/flight-details"}>
            Booking Details
          </Link>

          <span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.4639 6.13841H1.13492M11.4639 6.13841L6.29939 0.973938M11.4639 6.13841L6.29939 11.3029"
                stroke="#FFFEFC"
                stroke-width="1.47556"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <Link
            className="text-[15px] font-normal text-[#C1C9E2]"
            href={"/booking/add-service"}>
            Add on Services
          </Link>
          <span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.4639 6.13841H1.13492M11.4639 6.13841L6.29939 0.973938M11.4639 6.13841L6.29939 11.3029"
                stroke="#FFFEFC"
                stroke-width="1.47556"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <Link
            className="text-[15px] font-semibold"
            href={"/booking/payment-review"}>
            Review and Payment
          </Link>
        </div>

        <div className="grid grid-cols-1 items-start mt-6 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* common  */}
            <div className="primary-shadow px-[20px] py-[20px] bg-white rounded-md">
              <div className="lg:flex items-center justify-between">
                <p className="text-[18px] text-[#162F7F] font-[500]">
                  DAC <span>-</span> <span>BKK</span>
                </p>

                <div className="flex gap-6 lg:gap-16 items-center">
                  <div className="flex flex-col lg:flex-row gap-3 items-center">
                    <button className="rounded-md primary-text border bg-white cursor-pointer border-blue-800 flex items-center gap-2  font-[500] text-[12px] p-[6px]">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.04834 9.8853C4.13553 10.1616 4.26999 10.347 4.54259 10.4888C4.81519 10.6306 5.0442 10.6343 5.32048 10.5471C5.59676 10.4599 5.78218 10.3255 5.924 10.0529C6.06582 9.78028 6.0695 9.55127 5.98231 9.27499C5.89512 8.99871 5.71523 8.78965 5.48806 8.67147C5.26089 8.55329 4.98645 8.52597 4.71017 8.61316C4.43388 8.70035 4.24847 8.83481 4.10665 9.10741C3.96483 9.38001 3.96115 9.60902 4.04834 9.8853ZM0.708314 6.76213C0.590131 6.9893 0.562815 7.26374 0.650002 7.54003C0.73719 7.81631 0.917086 8.02536 1.14425 8.14354L4.4534 1.78281C4.22623 1.66463 3.95179 1.63731 3.67551 1.7245C3.39922 1.81169 3.19017 1.99159 3.07199 2.21876L0.708314 6.76213ZM9.26994 1.40207L7.45259 0.456596C7.33441 0.683765 7.30709 0.958208 7.39428 1.23449C7.48147 1.51077 7.66136 1.71982 7.88853 1.83801L7.17943 3.20102L4.90774 2.01918L1.59859 8.37991L3.50681 9.37265C3.53413 9.09821 3.60504 8.96191 3.65231 8.87104C3.84141 8.50757 4.14316 8.26045 4.55759 8.12966C4.97201 7.99888 5.36096 8.02804 5.72443 8.21713L9.26994 1.40207Z"
                          fill="#254FD4"
                        />
                      </svg>
                      Baggage Details
                    </button>
                    <button className="rounded-md primary-bg border text-white cursor-pointer  flex items-center gap-2  font-[500] text-[12px] p-[6px]">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.77673 7.84263H1.79132C1.64992 7.84263 1.53147 7.79634 1.43597 7.70376C1.34048 7.61119 1.29257 7.49675 1.29224 7.36045C1.2919 7.22415 1.33982 7.10972 1.43597 7.01714C1.53213 6.92456 1.65058 6.87827 1.79132 6.87827H9.77673C9.91814 6.87827 10.0368 6.92456 10.1326 7.01714C10.2284 7.10972 10.2761 7.22415 10.2758 7.36045C10.2755 7.49675 10.2276 7.61135 10.1321 7.70425C10.0366 7.79715 9.91814 7.84327 9.77673 7.84263ZM2.44014 4.32586L4.83576 3.69903L3.10143 0.854161C3.03489 0.741652 3.02241 0.621107 3.064 0.492525C3.10559 0.363944 3.19709 0.279562 3.3385 0.23938L3.55061 0.179108C3.62547 0.154999 3.70034 0.150981 3.7752 0.167053C3.85006 0.183126 3.91661 0.215271 3.97483 0.263489L7.20643 3.07219L9.70187 2.42125C9.96805 2.34892 10.2093 2.39714 10.4255 2.5659C10.6418 2.73467 10.75 2.95969 10.75 3.24096C10.75 3.41776 10.6939 3.57447 10.5818 3.71108C10.4696 3.8477 10.3261 3.94012 10.151 3.98834L2.57739 5.96528C2.46925 5.99743 2.36528 5.99341 2.26546 5.95323C2.16564 5.91304 2.08662 5.84474 2.02839 5.7483L1.01774 4.08477C0.959512 3.99637 0.95319 3.90396 0.998774 3.80752C1.04436 3.71108 1.12138 3.65483 1.22985 3.63876L1.41701 3.60259C1.46692 3.59456 1.51267 3.59665 1.55426 3.60886C1.59585 3.62108 1.63744 3.6431 1.67903 3.67492L2.44014 4.32586Z"
                          fill="#FFFEFC"
                        />
                      </svg>{" "}
                      Flight Details
                    </button>
                    <button
                      type="button"
                      className="rounded-md bg-red-600   text-white cursor-pointer flex items-center gap-2 text-[12px] font-[500]  p-[6px]">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.81773 5.76495L4.0885 4.49418L5.35926 5.76495L5.85345 5.27076L4.58269 4L5.85345 2.72923L5.35926 2.23505L4.0885 3.50581L2.81773 2.23505L2.32355 2.72923L3.59431 4L2.32355 5.27076L2.81773 5.76495ZM4.0885 7.5299C3.6002 7.5299 3.14131 7.43718 2.71184 7.25175C2.28236 7.06631 1.90878 6.81486 1.59109 6.49741C1.2734 6.17995 1.02195 5.80637 0.836751 5.37666C0.651548 4.94695 0.55883 4.48807 0.558594 4C0.558359 3.51193 0.651078 3.05304 0.836751 2.62333C1.02242 2.19363 1.27387 1.82005 1.59109 1.50259C1.90831 1.18513 2.28189 0.933687 2.71184 0.748249C3.14178 0.562812 3.60067 0.470093 4.0885 0.470093C4.57633 0.470093 5.03522 0.562812 5.46516 0.748249C5.8951 0.933687 6.26869 1.18513 6.58591 1.50259C6.90313 1.82005 7.15469 2.19363 7.3406 2.62333C7.52651 3.05304 7.61911 3.51193 7.6184 4C7.6177 4.48807 7.52498 4.94695 7.34025 5.37666C7.15552 5.80637 6.90407 6.17995 6.58591 6.49741C6.26775 6.81486 5.89416 7.06643 5.46516 7.2521C5.03616 7.43777 4.57727 7.53037 4.0885 7.5299Z"
                          fill="#FFFEFC"
                        />
                      </svg>
                      Cancellation Policy
                    </button>
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="px-[7px] py-[8px] place-items-center  bg-gray-100 flex items-center justify-center rounded-full">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.929846 5.64224C1.05942 5.77177 1.23514 5.84454 1.41836 5.84454C1.60158 5.84454 1.7773 5.77177 1.90688 5.64224L5.32719 2.22193L8.7475 5.64224C8.87782 5.7681 9.05236 5.83775 9.23353 5.83617C9.4147 5.8346 9.588 5.76193 9.71611 5.63382C9.84423 5.50571 9.91689 5.3324 9.91847 5.15123C9.92004 4.97006 9.8504 4.79552 9.72453 4.6652L5.8157 0.756377C5.68613 0.62684 5.51041 0.55407 5.32719 0.55407C5.14397 0.55407 4.96825 0.62684 4.83867 0.756377L0.929846 4.6652C0.800309 4.79478 0.727539 4.9705 0.727539 5.15372C0.727539 5.33694 0.800309 5.51266 0.929846 5.64224Z"
                          fill="#222222"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <Divider
                className="mt-1 text-gray-300 pb-3"
                sx={{ borderBottomWidth: "3px" }}
              />
              <div className="grid lg:grid-cols-10 p-4">
                <div className="lg:col-span-3">
                  <div className="lg:flex lg:items-center gap-8">
                    <div className="">
                      <Image
                        src={image}
                        alt="image"
                        width={70}
                        className=""
                        height={31}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="font-[400] text-[#808285]  text-[10px]">Us Bangla Airlines</p>
                      <p className="text-[14px] font-[600] dark-b-text ">
                        BS <span>|</span> 217
                      </p>

                      <p className="lg:whitespace-nowrap text-[12px] font-[400]">Aircraft No: Boing 737-800 </p>
                      <p className="whitespace-nowrap text-[12px] font-[400]">Operated By: BS </p>

                      <p className="flex items-center gap-1 pt-[14px] primary-text text-[#254FD4] font-[600]  text-[12px]">
                        {" "}
                        <span className="flex items-center justify-center">
                          <GoDotFill />
                        </span>
                        Economy Class
                      </p>
                    </div>
                  </div>
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  className="text-gray-400 lg:col-span-1 "
                />
                <div className="lg:col-span-6 ps-5 flex flex-col">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-[16px] dark-b-text font-[500] ">Dhaka (DAC)</p>

                      <p className="text-[12px]">5:00 am</p>
                      <p className=" font-[400] text-[#4F4F4F]">14 April, Thursda</p>
                    </div>

                    <span>
                      <svg
                        width="25"
                        height="19"
                        viewBox="0 0 25 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M23.2766 11.3065H1.19372C1.18658 11.31 1.18057 11.3154 1.17636 11.3221C1.17215 11.3288 1.16992 11.3366 1.16992 11.3445C1.16992 11.3524 1.17215 11.3602 1.17636 11.3669C1.18057 11.3736 1.18658 11.379 1.19372 11.3825L7.58147 17.7702"
                          stroke="#254FD4"
                          stroke-width="1.68765"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M1.14258 7.64448H23.2254C23.2326 7.64102 23.2386 7.63563 23.2428 7.62891C23.247 7.6222 23.2493 7.61443 23.2493 7.60651C23.2493 7.59858 23.247 7.59081 23.2428 7.5841C23.2386 7.57738 23.2326 7.57199 23.2254 7.56853L16.8377 1.18079"
                          stroke="#254FD4"
                          stroke-width="1.68765"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[16px] dark-b-text font-[500] ">Bangkok (DAC)</p>

                      <p className="text-[12px]">12:00 am</p>
                      <p className=" font-[400] text-[#4F4F4F]">14 April, Thursda</p>
                    </div>
                  </div>

                  <div className="w-full text-[10px] font-[500] flex items-center gap-5 mt-auto">
                    <p className="flex items-center justify-center  text-[12px] font-[500]  gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.14529 0.914551L0.655273 3.46931V6.72458L3.14529 9.2146H6.46531L8.95532 6.72458V3.46931L6.46531 0.914551H3.14529Z"
                          stroke="#254FD4"
                          stroke-width="0.889291"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.46455 5.06458H3.14453"
                          stroke="#254FD4"
                          stroke-width="0.889291"
                          stroke-linecap="round"
                        />
                      </svg>
                      <p className="mb-[2px] text-[12px] font-[500]"> 1 Stop</p>
                    </p>
                    <p className="flex items-center justify-center text-[12px] font-[500]  gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.9334 8.75348C5.91176 8.75348 6.85005 8.36483 7.54186 7.67302C8.23366 6.98122 8.62231 6.04293 8.62231 5.06457C8.62231 4.08621 8.23366 3.14792 7.54186 2.45611C6.85005 1.76431 5.91176 1.37566 4.9334 1.37566C3.95504 1.37566 3.01675 1.76431 2.32495 2.45611C1.63315 3.14792 1.24449 4.08621 1.24449 5.06457C1.24449 6.04293 1.63315 6.98122 2.32495 7.67302C3.01675 8.36483 3.95504 8.75348 4.9334 8.75348ZM4.9334 0.45343C5.53895 0.45343 6.13856 0.572701 6.69801 0.804432C7.25746 1.03616 7.76579 1.37582 8.19397 1.804C8.62215 2.23218 8.96181 2.74051 9.19354 3.29996C9.42527 3.85941 9.54454 4.45902 9.54454 5.06457C9.54454 6.28752 9.05873 7.46038 8.19397 8.32513C7.32921 9.18989 6.15635 9.6757 4.9334 9.6757C2.38344 9.6757 0.322266 7.60069 0.322266 5.06457C0.322266 3.84162 0.80808 2.66876 1.67284 1.804C2.53759 0.939245 3.71045 0.45343 4.9334 0.45343ZM5.16396 2.759V5.17985L7.23897 6.41102L6.89314 6.97819L4.47229 5.52568V2.759H5.16396Z"
                          fill="#254FD4"
                        />
                      </svg>
                      <p className="mb-[2px] text-[12px] font-[500]">Est Time: 5 Hrs 23 min</p>
                    </p>
                    <p className="flex items-center justify-center text-[12px] font-[500]  gap-1">
                      <svg
                        width="9"
                        height="11"
                        viewBox="0 0 9 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.4628 9.64447C3.54454 9.90348 3.67059 10.0773 3.92616 10.2103C4.18172 10.3432 4.39642 10.3467 4.65543 10.2649C4.91444 10.1832 5.08827 10.0571 5.22123 9.80157C5.35418 9.54601 5.35763 9.33131 5.27589 9.0723C5.19415 8.81328 5.0255 8.6173 4.81253 8.5065C4.59956 8.39571 4.34227 8.3701 4.08326 8.45184C3.82425 8.53357 3.65042 8.65963 3.51747 8.91519C3.38451 9.17076 3.38106 9.38545 3.4628 9.64447ZM0.331539 6.71651C0.220742 6.92948 0.195134 7.18676 0.276872 7.44578C0.358611 7.70479 0.527262 7.90078 0.740232 8.01157L3.84254 2.04841C3.62957 1.93762 3.37229 1.91201 3.11327 1.99375C2.85426 2.07548 2.65827 2.24413 2.54748 2.4571L0.331539 6.71651ZM8.35803 1.69146L6.65427 0.805087C6.54348 1.01806 6.51787 1.27535 6.59961 1.53436C6.68134 1.79337 6.85 1.98936 7.06297 2.10015L6.39818 3.37797L4.26848 2.27001L1.16617 8.23317L2.95512 9.16386C2.98073 8.90657 3.04721 8.77879 3.09153 8.6936C3.2688 8.35285 3.5517 8.12117 3.94022 7.99856C4.32874 7.87595 4.69337 7.90329 5.03413 8.08056L8.35803 1.69146Z"
                          fill="#254FD4"
                        />
                      </svg>
                      <p className="mb-[2px] text-[12px] font-[500]"> Baggage: 20 kg / 2 pcs</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="primary-shadow mt-5 p-4 bg-white rounded-md">
              <p className="text-[#162F7F] text-start text-[20px] font-medium">Traveler Details</p>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Name: Mr Zahir Uddin</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Birth Date: 24 january,1993</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Gender: Male</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Nationality: Bangladeshi</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Phone: 01834546663</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Email: zahir@gmail.com</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Freq. Flyer No: 23</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Passport No: 3546477</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Passport: Not Taken</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Visa: Not Taken</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Meal Type: AVML</p>
                <p className="bg-[#F3F6FF] rounded-md  px-4 py-2">Wheel Chair: No</p>
              </div>
              <p className="text-[#162F7F] mt-[32px] mb-[24px] text-start text-[20px] font-medium">Baggage Details</p>
              <div className="border-2  border-dotted border-[#6A7BB1] p-5 rounded-lg">
                <div>
                  <p className="text-[#1D3FAA] font-[500]">DHK - BKK</p>
                  <div className="flex flex-row items-center gap-3 justify-start text-center">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.993 11.4825L13.1019 3.98385C13.073 3.73953 12.955 3.51445 12.7705 3.35166C12.5861 3.18887 12.3481 3.09981 12.1021 3.10151H10.0006C10.0006 2.306 9.68455 1.54308 9.12204 0.980572C8.55953 0.418064 7.79661 0.102051 7.0011 0.102051C6.2056 0.102051 5.44267 0.418064 4.88016 0.980572C4.31766 1.54308 4.00164 2.306 4.00164 3.10151H1.89765C1.65163 3.09981 1.41362 3.18887 1.22916 3.35166C1.0447 3.51445 0.926728 3.73953 0.897827 3.98385L0.00673706 11.4825C-0.0095927 11.6225 0.00384429 11.7643 0.0461669 11.8987C0.0884895 12.0331 0.158742 12.157 0.252318 12.2624C0.34657 12.3682 0.462068 12.4529 0.591275 12.511C0.720482 12.5692 0.860497 12.5994 1.00218 12.5998H12.995C13.1376 12.6001 13.2785 12.5702 13.4087 12.512C13.5388 12.4539 13.6551 12.3688 13.7499 12.2624C13.843 12.1568 13.9128 12.0328 13.9547 11.8984C13.9966 11.764 14.0096 11.6223 13.993 11.4825ZM5.00146 5.60106C5.00146 5.73364 4.94879 5.8608 4.85504 5.95455C4.76129 6.0483 4.63414 6.10097 4.50155 6.10097C4.36897 6.10097 4.24181 6.0483 4.14806 5.95455C4.05431 5.8608 4.00164 5.73364 4.00164 5.60106V4.60124C4.00164 4.46866 4.05431 4.3415 4.14806 4.24775C4.24181 4.154 4.36897 4.10133 4.50155 4.10133C4.63414 4.10133 4.76129 4.154 4.85504 4.24775C4.94879 4.3415 5.00146 4.46866 5.00146 4.60124V5.60106ZM7.0011 1.10187C7.53144 1.10187 8.04006 1.31255 8.41506 1.68755C8.79007 2.06256 9.00074 2.57117 9.00074 3.10151H5.00146C5.00146 2.57117 5.21214 2.06256 5.58714 1.68755C5.96215 1.31255 6.47077 1.10187 7.0011 1.10187ZM10.0006 5.60106C10.0006 5.73364 9.94789 5.8608 9.85414 5.95455C9.76039 6.0483 9.63324 6.10097 9.50065 6.10097C9.36807 6.10097 9.24091 6.0483 9.14716 5.95455C9.05341 5.8608 9.00074 5.73364 9.00074 5.60106V4.60124C9.00074 4.46866 9.05341 4.3415 9.14716 4.24775C9.24091 4.154 9.36807 4.10133 9.50065 4.10133C9.63324 4.10133 9.76039 4.154 9.85414 4.24775C9.94789 4.3415 10.0006 4.46866 10.0006 4.60124V5.60106Z"
                        fill="#254FD4"
                      />
                    </svg>

                    <p className="mb-1">
                      <span className="text-[#414141]"> Hand Baggage: </span>
                      <span className="text-[20px]">2 × 3 Kg</span>
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3 justify-start text-center">
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_212_3277)">
                        <path
                          d="M4.1174 0.599609C3.97153 0.599609 3.83164 0.657556 3.72849 0.760701C3.62535 0.863846 3.5674 1.00374 3.5674 1.14961C3.5674 1.29548 3.62535 1.43537 3.72849 1.53852C3.83164 1.64166 3.97153 1.69961 4.1174 1.69961H4.3V2.79961H3.2C2.61652 2.79961 2.05694 3.03139 1.64437 3.44397C1.23178 3.85655 1 4.41613 1 4.99961V12.6996C1 13.2831 1.23178 13.8427 1.64437 14.2552C2.05694 14.6678 2.61652 14.8996 3.2 14.8996V15.4496C3.2 15.5955 3.25795 15.7354 3.36109 15.8385C3.46424 15.9417 3.60413 15.9996 3.75 15.9996C3.89587 15.9996 4.03576 15.9417 4.13891 15.8385C4.24205 15.7354 4.3 15.5955 4.3 15.4496V14.8996H8.7V15.4496C8.7 15.5955 8.75795 15.7354 8.86109 15.8385C8.96424 15.9417 9.10413 15.9996 9.25 15.9996C9.39587 15.9996 9.53576 15.9417 9.63891 15.8385C9.74205 15.7354 9.8 15.5955 9.8 15.4496V14.8996C10.3835 14.8996 10.9431 14.6678 11.3556 14.2552C11.7682 13.8427 12 13.2831 12 12.6996V4.99961C12 4.41613 11.7682 3.85655 11.3556 3.44397C10.9431 3.03139 10.3835 2.79961 9.8 2.79961H8.7V1.69961H8.8837C9.02957 1.69961 9.16946 1.64166 9.27261 1.53852C9.37575 1.43537 9.4337 1.29548 9.4337 1.14961C9.4337 1.00374 9.37575 0.863846 9.27261 0.760701C9.16946 0.657556 9.02957 0.599609 8.8837 0.599609H4.1174ZM5.4 2.79961V1.69961H7.6V2.79961H5.4ZM3.2 6.64961C3.2 6.50374 3.25795 6.36385 3.36109 6.2607C3.46424 6.15756 3.60413 6.09961 3.75 6.09961H9.25C9.39587 6.09961 9.53576 6.15756 9.63891 6.2607C9.74205 6.36385 9.8 6.50374 9.8 6.64961C9.8 6.79548 9.74205 6.93537 9.63891 7.03852C9.53576 7.14166 9.39587 7.19961 9.25 7.19961H3.75C3.60413 7.19961 3.46424 7.14166 3.36109 7.03852C3.25795 6.93537 3.2 6.79548 3.2 6.64961Z"
                          fill="#254FD4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_212_3277">
                          <rect
                            width="13"
                            height="15.4"
                            fill="white"
                            transform="translate(0 0.599609)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="mb-1">
                      <span className="text-[#414141]"> Carry-On Baggage: </span>
                      <span className="text-[20px]">2 × 3 Kg</span>
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-[#1D3FAA] font-[500]">BKK - CAD</p>
                  <div className="flex flex-row items-center gap-3 justify-start text-center">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.993 11.4825L13.1019 3.98385C13.073 3.73953 12.955 3.51445 12.7705 3.35166C12.5861 3.18887 12.3481 3.09981 12.1021 3.10151H10.0006C10.0006 2.306 9.68455 1.54308 9.12204 0.980572C8.55953 0.418064 7.79661 0.102051 7.0011 0.102051C6.2056 0.102051 5.44267 0.418064 4.88016 0.980572C4.31766 1.54308 4.00164 2.306 4.00164 3.10151H1.89765C1.65163 3.09981 1.41362 3.18887 1.22916 3.35166C1.0447 3.51445 0.926728 3.73953 0.897827 3.98385L0.00673706 11.4825C-0.0095927 11.6225 0.00384429 11.7643 0.0461669 11.8987C0.0884895 12.0331 0.158742 12.157 0.252318 12.2624C0.34657 12.3682 0.462068 12.4529 0.591275 12.511C0.720482 12.5692 0.860497 12.5994 1.00218 12.5998H12.995C13.1376 12.6001 13.2785 12.5702 13.4087 12.512C13.5388 12.4539 13.6551 12.3688 13.7499 12.2624C13.843 12.1568 13.9128 12.0328 13.9547 11.8984C13.9966 11.764 14.0096 11.6223 13.993 11.4825ZM5.00146 5.60106C5.00146 5.73364 4.94879 5.8608 4.85504 5.95455C4.76129 6.0483 4.63414 6.10097 4.50155 6.10097C4.36897 6.10097 4.24181 6.0483 4.14806 5.95455C4.05431 5.8608 4.00164 5.73364 4.00164 5.60106V4.60124C4.00164 4.46866 4.05431 4.3415 4.14806 4.24775C4.24181 4.154 4.36897 4.10133 4.50155 4.10133C4.63414 4.10133 4.76129 4.154 4.85504 4.24775C4.94879 4.3415 5.00146 4.46866 5.00146 4.60124V5.60106ZM7.0011 1.10187C7.53144 1.10187 8.04006 1.31255 8.41506 1.68755C8.79007 2.06256 9.00074 2.57117 9.00074 3.10151H5.00146C5.00146 2.57117 5.21214 2.06256 5.58714 1.68755C5.96215 1.31255 6.47077 1.10187 7.0011 1.10187ZM10.0006 5.60106C10.0006 5.73364 9.94789 5.8608 9.85414 5.95455C9.76039 6.0483 9.63324 6.10097 9.50065 6.10097C9.36807 6.10097 9.24091 6.0483 9.14716 5.95455C9.05341 5.8608 9.00074 5.73364 9.00074 5.60106V4.60124C9.00074 4.46866 9.05341 4.3415 9.14716 4.24775C9.24091 4.154 9.36807 4.10133 9.50065 4.10133C9.63324 4.10133 9.76039 4.154 9.85414 4.24775C9.94789 4.3415 10.0006 4.46866 10.0006 4.60124V5.60106Z"
                        fill="#254FD4"
                      />
                    </svg>

                    <p className="mb-1">
                      <span className="text-[#414141]"> Hand Baggage: </span>
                      <span className="text-[20px]">2 × 3 Kg</span>
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3 justify-start text-center">
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_212_3277)">
                        <path
                          d="M4.1174 0.599609C3.97153 0.599609 3.83164 0.657556 3.72849 0.760701C3.62535 0.863846 3.5674 1.00374 3.5674 1.14961C3.5674 1.29548 3.62535 1.43537 3.72849 1.53852C3.83164 1.64166 3.97153 1.69961 4.1174 1.69961H4.3V2.79961H3.2C2.61652 2.79961 2.05694 3.03139 1.64437 3.44397C1.23178 3.85655 1 4.41613 1 4.99961V12.6996C1 13.2831 1.23178 13.8427 1.64437 14.2552C2.05694 14.6678 2.61652 14.8996 3.2 14.8996V15.4496C3.2 15.5955 3.25795 15.7354 3.36109 15.8385C3.46424 15.9417 3.60413 15.9996 3.75 15.9996C3.89587 15.9996 4.03576 15.9417 4.13891 15.8385C4.24205 15.7354 4.3 15.5955 4.3 15.4496V14.8996H8.7V15.4496C8.7 15.5955 8.75795 15.7354 8.86109 15.8385C8.96424 15.9417 9.10413 15.9996 9.25 15.9996C9.39587 15.9996 9.53576 15.9417 9.63891 15.8385C9.74205 15.7354 9.8 15.5955 9.8 15.4496V14.8996C10.3835 14.8996 10.9431 14.6678 11.3556 14.2552C11.7682 13.8427 12 13.2831 12 12.6996V4.99961C12 4.41613 11.7682 3.85655 11.3556 3.44397C10.9431 3.03139 10.3835 2.79961 9.8 2.79961H8.7V1.69961H8.8837C9.02957 1.69961 9.16946 1.64166 9.27261 1.53852C9.37575 1.43537 9.4337 1.29548 9.4337 1.14961C9.4337 1.00374 9.37575 0.863846 9.27261 0.760701C9.16946 0.657556 9.02957 0.599609 8.8837 0.599609H4.1174ZM5.4 2.79961V1.69961H7.6V2.79961H5.4ZM3.2 6.64961C3.2 6.50374 3.25795 6.36385 3.36109 6.2607C3.46424 6.15756 3.60413 6.09961 3.75 6.09961H9.25C9.39587 6.09961 9.53576 6.15756 9.63891 6.2607C9.74205 6.36385 9.8 6.50374 9.8 6.64961C9.8 6.79548 9.74205 6.93537 9.63891 7.03852C9.53576 7.14166 9.39587 7.19961 9.25 7.19961H3.75C3.60413 7.19961 3.46424 7.14166 3.36109 7.03852C3.25795 6.93537 3.2 6.79548 3.2 6.64961Z"
                          fill="#254FD4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_212_3277">
                          <rect
                            width="13"
                            height="15.4"
                            fill="white"
                            transform="translate(0 0.599609)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="mb-1">
                      <span className="text-[#414141]"> Carry-On Baggage: </span>
                      <span className="text-[20px]">2 × 3 Kg</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[#162F7F] my-5 text-start text-[20px] font-[500]">Add ons</p>
              <div className="bg-[#f9faff ] border border-[#6A7BB1] rounded-lg px-4 py-2 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-10 items-center justify-start">
                  <Image
                    src={img1}
                    alt="image"
                    width={30}
                    height={20}
                  />
                  <div>
                    <p>Ensure my baggage with</p>
                    <p className="text-[#254FD4]">Blue Ribbon Bags</p>
                  </div>
                </div>
                <FaCircleCheck
                  size={20}
                  className="text-[#254FD4]"
                />
              </div>
              <div className="text-xs">
                <label className="flex items-center cursor-pointer select-none text-dark my-5">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isRequired}
                      onChange={handleReturned}
                      className="sr-only"
                    />
                    <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border-stroke  border">
                      <span className={`dot h-[10px] w-[10px] rounded-sm ${isRequired && "bg-primary"}`}></span>
                    </div>
                  </div>
                  I agree to the <span className="text-[#254FD4] px-2">Terms & Conditions</span> and{" "}
                  <span className="text-[#254FD4] px-2">Privacy policy</span>.
                </label>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-2 justify-between items-center">
                <Link
                  href={"/booking/flight-details"}
                  className="w-full cursor-pointer py-[8.5px] px-6 flex items-center justify-center rounded-[8.8px] font-[500] bg-[#E6E9F1] text-[16px]">
                  Book now pay later
                </Link>
                <Link
                  href={"/booking/payment-review"}
                  className="w-full cursor-pointer py-[8.5px] px-6 flex items-center justify-center rounded-[8.8px] font-[500] bg-[#254FD4] text-[16px] text-white">
                  Pay now
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 primary-shadow">
            <div className="px-6 pt-5 flex items-center justify-between gap-4">
              <Image
                src={image}
                alt="image"
                width={70}
                className=""
                height={32}
              />
              <div className="flex w-full items-center justify-center ">
                <p>Us Bangla Airlines</p>
              </div>
            </div>
            <div className="px-5">
              <Divider
                className="mt-1 text-gray-300 pb-3"
                sx={{ borderBottomWidth: "3px" }}
              />
            </div>

            <div className="px-6">
              <p className="font-[600] text-[16px] mt-5">Fare Summary</p>

              <p className="mt-4 font-[500]">Adult (1 Traveler)</p>

              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center">
                  {" "}
                  <p className="text-gray-500"> Base Fare</p>
                  <p className="primary-text font-semibold">69,849 ৳</p>
                </div>
                <div className="flex justify-between items-center">
                  {" "}
                  <p className="text-gray-500">Taxes + Fees</p>
                  <p className="primary-text font-semibold">7,955 ৳</p>
                </div>
                <div className="flex justify-between items-center">
                  {" "}
                  <p className="text-gray-500 primary-text">Coupon </p>
                  <p className="primary-text font-semibold">369 ৳</p>
                </div>
                <div className="flex justify-between items-center">
                  {" "}
                  <p className="text-gray-500"> Discount </p>
                  <p className="primary-text font-semibold">2,955 ৳</p>
                </div>
                <div className="-mx-2 mt-6">
                  <Divider
                    className=" text-gray-300"
                    sx={{ borderBottomWidth: "3px" }}
                  />
                </div>
                <div className="flex justify-between  items-center">
                  {" "}
                  <p className="text-gray-500">Sub total</p>
                  <p className="primary-text font-semibold">69,849 ৳</p>
                </div>
              </div>
            </div>

            <div className="primary-bg mt-4 rounded-b-md text-white ">
              <div className="px-5 font-semibold lg:flex justify-between gap-4 py-4">
                <p>You Pay for ( 1 Traveler)</p>
                <p>123297 ৳</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingReview;
