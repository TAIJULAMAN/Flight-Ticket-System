"use client";
import Link from "next/link";

import React, { useState } from "react";
import { FaPlane } from "react-icons/fa6";
interface Errors {
  flightNumber?: string;
  date?: string;
}
function FlightStatus() {
  const [activeTab, setActiveTab] = useState("Flight No");
  const [flightNumber, setFlightNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    let isValid = true;
    const newErrors: Errors = {};

    if (!flightNumber) {
      newErrors.flightNumber = "Please enter a flight number";
      isValid = false;
    }

    if (!date) {
      newErrors.date = "Please select a departure date";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      window.location.href = `/flight-status/${date}/${flightNumber}`;
    }
  };
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className=" pt-[45px] w-full">
      <div className="h-[335px]  bg-gradient-to-t from-[#5B83FFB8] to-[#1745D4DB] w-full">
        <p
          onClick={handleBack}
          className="py-5 cursor-pointer text-[24px] font-[600] max-w-[1393px] px-4  mx-auto text-white flex flex-row gap-3 items-center">
          <span className="cursor-pointer">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 9.5H18M2 9.5L10 1.5M2 9.5L10 17.5"
                stroke="#FFFEFC"
                stroke-width="2.28571"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="text-[24px] font-[600]"> Flight Status</span>
        </p>
      </div>

      <div className="max-w-[1393px] -mt-[240px] px-4 mx-auto">
        <div className="h-[345px] bg-white   rounded-[12px]">
          <div className="shadow-md rounded-lg overflow-hidden">
            <div className={`flex justify-between items-center  bg-[#E9EFFF]     `}>
              <div className="flex items-center  w-full justify-center">
                <button
                  className={` py-4 px-[28px] text-center flex items-center justify-center bg-transparent relative font-[500]  text-[10px] ${activeTab === "Flight No" ? "" : ""}`}
                  onClick={() => setActiveTab("Flight No")}>
                  Flight No
                  {activeTab === "Flight No" && (
                    <span className="absolute -bottom-1 left-0 z-50 right-0">
                      <svg
                        width="100"
                        height="6"
                        viewBox="0 0 123 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 6C0 2.68629 2.68629 0 6 0H117C120.314 0 123 2.68629 123 6H0Z"
                          fill="#2C5FFF"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
              <svg
                width="5"
                height="30"
                viewBox="0 0 2 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  width="2"
                  height="38"
                  fill="#808285b3"
                />
              </svg>

              <div className="flex items-center justify-center w-full">
                <button
                  className={`py-4 px-[28px] text-center flex items-center justify-center bg-transparent relative font-[500]  text-[10px] ${activeTab === "Flight No" ? "" : ""} `}
                  onClick={() => setActiveTab("Route")}>
                  Route
                  {activeTab === "Route" && (
                    <span className="absolute -bottom-1 left-0 z-50 right-0">
                      <svg
                        width="100"
                        height="6"
                        viewBox="0 0 123 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 6C0 2.68629 2.68629 0 6 0H117C120.314 0 123 2.68629 123 6H0Z"
                          fill="#2C5FFF"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </div>

            {activeTab === "Flight No" && (
              <div className="px-[32px] pt-4 pb-[32px]">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-[500] text-[16px] text-[#464646]">Flight Number</label>
                    <input
                      type="number"
                      className="w-full py-4 placeholder:text-[24px] text-[24px] placeholder:font-[400] font-[400] text-[#808285] focus:ring-0 outline-none focus:border-b-[2px] border-b-[#D9D9D9] border-b-[2px]"
                      placeholder="Please enter a flight number"
                      onChange={(e) => setFlightNumber(e.target.value)}
                    />
                    {errors.flightNumber && <p className="text-red-500">{errors.flightNumber}</p>}
                  </div>

                  <div className="my-5">
                    <label className="block font-[500] text-[16px] text-[#464646]">Departure Date (Local Time)</label>
                    <input
                      type="date"
                      className="w-full py-4 pe-3 placeholder:text-[24px] cursor-pointer text-[24px] placeholder:font-[400] font-[400] text-[#808285] focus:ring-0 outline-none border-b-[#D9D9D9]"
                      onChange={(e) => setDate(e.target.value)}
                    />
                    {errors.date && <p className="text-red-500">{errors.date}</p>}
                  </div>
                  <div className="flex items-center text-center w-full">
                    <button
                      type="submit"
                      className="w-full mt-4 py-3 bg-[#254FD4] text-[28px] font-[500] text-white rounded-[10px]">
                      Check Flight Status
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "Route" && (
              <div className="px-[32px] pt-4 pb-[32px]">
                <div className="flex flex-row justify-between items-center">
                  <div className="mb-2 flex flex-col justify-between">
                    <p className="block mb-[3px] font-[500] text-[#808285] text-start">FROM</p>
                    <p className="font-[500] text-[28px] mb-1 text-[#254FD4]">DHK</p>
                    <p className="font-[400] text-[16px] text-[#222222]">Dhaka (All Airports)</p>
                  </div>
                  <div className="flex justify-center mb-4">
                    <FaPlane
                      className="text-blue-700"
                      size={50}
                    />
                  </div>
                  <div className="mb-4 flex flex-col justify-between">
                    <p className="block mb-[3px] font-[500] text-[#808285] text-end">TO</p>

                    <p className="font-[500] text-[28px] mb-1 text-[#254FD4] text-end">BKK</p>
                    <p className="font-[400] text-[16px] text-[#222222]">Bangkok (All Airports)</p>
                  </div>
                </div>
                <div className="border-b-2 border-[#D9D9D9] my-2" />
                <div className="my-5">
                  <label className="block font-[500] text-[16px] text-[#464646]">Departure Date (Local Time)</label>

                  <input
                    type="date"
                    className="w-full py-4 pe-3 placeholder:text-[24px] cursor-pointer text-[24px] placeholder:font-[400] font-[400] text-[#808285]  focus:ring-0 outline-none  border-b-[#D9D9D9]"
                  />
                </div>

                <div className="flex items-center text-center w-full">
                  <Link
                    href={`/flight-status/${date}/${flightNumber}`}
                    className="w-full mt-4 py-4 bg-[#254FD4] text-[28px] font-[500] text-white rounded-[10px]">
                    Check Flight Status
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightStatus;
