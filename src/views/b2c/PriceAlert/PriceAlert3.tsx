import React, { useState } from "react";
import ResponsiveModal from "@/components/Modals/ResponsiveModal";
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { FiSun, FiSunrise, FiSunset } from "react-icons/fi";
import {
  FaClock,
  FaRegMoon,
} from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
const style = {
  boxShadow: "0px 4px 16.6px 0px rgba(20, 60, 119, 0.19)",
};

function PriceAlert3() {
  const [addAlert, setAddAlert] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleDeleteAlert = () => {
    setAddAlert(true);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const data = [
    {
      name: "26 April",
      uv: 4000,
      pv: 3000,
      amt: 2400,
    },
    {
      name: "27 April",
      uv: 3000,
      pv: 4000,
      amt: 2210,
    },
    {
      name: "28 April",
      uv: 2000,
      pv: 5000,
      amt: 2290,
    },
    {
      name: "29 April",
      uv: 2780,
      pv: 4000,
      amt: 2000,
    },
    {
      name: "30 April",
      uv: 1890,
      pv: 3000,
      amt: 2181,
    },
    {
      name: "28 April",
      uv: 2000,
      pv: 5000,
      amt: 2290,
    },
    {
      name: "29 April",
      uv: 2780,
      pv: 4000,
      amt: 2000,
    }
  ];
  return (
    <div style={style} className="w-[860px] rounded-[11px] px-[34px] pt-[21px] pb-[54px]">
      <h3 className="text-[28px] font-[500] flex justify-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="39"
          viewBox="0 0 38 39"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.87052 9.39391C4.99045 9.10466 5.19345 8.85746 5.45386 8.68357C5.71427 8.50968 6.02039 8.41691 6.33352 8.41699H22.1669C23.6223 8.41699 25.0636 8.70367 26.4083 9.26066C27.753 9.81765 28.9748 10.634 30.004 11.6632C31.0331 12.6924 31.8495 13.9142 32.4065 15.2589C32.9635 16.6036 33.2502 18.0448 33.2502 19.5003C33.2502 20.9558 32.9635 22.397 32.4065 23.7417C31.8495 25.0864 31.0331 26.3082 30.004 27.3374C28.9748 28.3666 27.753 29.183 26.4083 29.74C25.0636 30.297 23.6223 30.5837 22.1669 30.5837H7.91685C7.49692 30.5837 7.0942 30.4168 6.79726 30.1199C6.50033 29.823 6.33352 29.4202 6.33352 29.0003C6.33352 28.5804 6.50033 28.1777 6.79726 27.8807C7.0942 27.5838 7.49692 27.417 7.91685 27.417H22.1669C24.2665 27.417 26.2801 26.5829 27.7648 25.0983C29.2494 23.6136 30.0835 21.6 30.0835 19.5003C30.0835 17.4007 29.2494 15.3871 27.7648 13.9024C26.2801 12.4177 24.2665 11.5837 22.1669 11.5837H10.1557L12.9946 14.4226C13.283 14.7212 13.4426 15.1211 13.439 15.5363C13.4354 15.9514 13.2689 16.3486 12.9753 16.6421C12.6818 16.9357 12.2846 17.1022 11.8695 17.1058C11.4543 17.1094 11.0544 16.9498 10.7558 16.6614L5.2141 11.1197C4.99254 10.8983 4.84163 10.6162 4.78047 10.309C4.71932 10.0017 4.75065 9.6833 4.87052 9.39391Z"
            fill="#1D3FAA"
          />
        </svg>
        <span>Back</span>
      </h3>
      <div className=" bg-[#F1F1F1] w-[800px] h-[160px] rounded-[15px] mt-[21px] px-[18px] pt-[15px] pb-[15px]">
        <div className="flex justify-between">
          <p className="text-[24px] font-[500] text-[#222222] flex items-center gap-[5px]">
            <span>DAC</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="19"
              viewBox="0 0 25 19"
              fill="none"
            >
              <path
                d="M23.9449 11.3301H1.87339C1.86626 11.3335 1.86025 11.3389 1.85604 11.3456C1.85184 11.3523 1.84961 11.3601 1.84961 11.368C1.84961 11.376 1.85184 11.3837 1.85604 11.3904C1.86025 11.3971 1.86626 11.4025 1.87339 11.406L8.25785 17.7904"
                stroke="#1D3FAA"
                stroke-width="1.68678"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M1.82227 7.66935H23.8938C23.9009 7.6659 23.9069 7.6605 23.9111 7.65379C23.9154 7.64708 23.9176 7.63932 23.9176 7.6314C23.9176 7.62348 23.9154 7.61571 23.9111 7.609C23.9069 7.60229 23.9009 7.59689 23.8938 7.59344L17.5093 1.20898"
                stroke="#1D3FAA"
                stroke-width="1.68678"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
            </svg>
            <span>CXB</span>
          </p>
          <p className="text-md md:text-xl text-[#1D3FAA]">
            <BsThreeDots />
          </p>
        </div>
        <div className="mt-[14px] flex gap-[76px] items-start">
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
            >
              <path
                d="M4.82227 6.83398H3.48893V8.16732H4.82227V6.83398ZM7.48893 6.83398H6.1556V8.16732H7.48893V6.83398ZM10.1556 6.83398H8.82227V8.16732H10.1556V6.83398ZM11.4889 2.16732H10.8223V0.833984H9.48893V2.16732H4.1556V0.833984H2.82227V2.16732H2.1556C1.80198 2.16732 1.46284 2.30779 1.21279 2.55784C0.962741 2.80789 0.822266 3.14703 0.822266 3.50065V12.834C0.822266 13.1876 0.962741 13.5267 1.21279 13.7768C1.46284 14.0268 1.80198 14.1673 2.1556 14.1673H11.4889C11.8426 14.1673 12.1817 14.0268 12.4317 13.7768C12.6818 13.5267 12.8223 13.1876 12.8223 12.834V3.50065C12.8223 3.14703 12.6818 2.80789 12.4317 2.55784C12.1817 2.30779 11.8426 2.16732 11.4889 2.16732ZM11.4889 12.834H2.1556V5.50065H11.4889V12.834Z"
                fill="#1D3FAA"
              />
            </svg>
            15 May 2024
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-1">
            <RiContactsFill size={15} className="text-[#1D3FAA]" />1
            passenger(s)
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
            >
              <path
                d="M11.5 13.0357C11.5 13.1588 11.4496 13.2769 11.3599 13.364C11.2702 13.4511 11.1486 13.5 11.0217 13.5H4.80434C4.6775 13.5 4.55585 13.4511 4.46616 13.364C4.37646 13.2769 4.32608 13.1588 4.32608 13.0357C4.32608 12.9126 4.37646 12.7945 4.46616 12.7074C4.55585 12.6203 4.6775 12.5714 4.80434 12.5714H11.0217C11.1486 12.5714 11.2702 12.6203 11.3599 12.7074C11.4496 12.7945 11.5 12.9126 11.5 13.0357ZM10.5435 7.92838H6.70423L4.80434 4.21396L5.65265 2.6864C5.6552 2.68233 5.6574 2.67806 5.65923 2.67364C5.77259 2.45343 5.79124 2.19854 5.71109 1.96499C5.63093 1.73144 5.45853 1.53834 5.23178 1.42815L5.20369 1.41538L3.1902 0.590661C2.96412 0.485837 2.7047 0.471314 2.4677 0.550214C2.2307 0.629113 2.03505 0.795137 1.92281 1.0126L0.600418 3.56626C0.534369 3.6954 0.5 3.83762 0.5 3.98181C0.5 4.12599 0.534369 4.26822 0.600418 4.39736L4.07439 11.1297C4.15353 11.2843 4.27566 11.4143 4.42695 11.505C4.57825 11.5956 4.75268 11.6434 4.93048 11.6428H10.5435C10.7972 11.6428 11.0405 11.545 11.2198 11.3708C11.3992 11.1967 11.5 10.9605 11.5 10.7142V8.85698C11.5 8.6107 11.3992 8.3745 11.2198 8.20036C11.0405 8.02621 10.7972 7.92838 10.5435 7.92838Z"
                fill="#1D3FAA"
              />
            </svg>
            Economy
          </div>
        </div>
        <div className="border-b-[1px] my-[10px] border-[#959595]" />

        <div>
          <p className="text-[28px] font-[400] text-[#464646]">
            Your Flight Preference:
            <button
              onClick={handleDeleteAlert}
              className="gap-1 ml-2 bg-white border border-[#808285] rounded-md inline-flex items-center justify-center px-[12px] py-[5px] text-center text-[10px] font-[400]"
            >
              Add departure time & direct flight preference
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 17 11"
                fill="none"
              >
                <path
                  d="M1.9975 0.244141L8.5 6.74664L15.0025 0.244141L17 2.25581L8.5 10.7558L0 2.25581L1.9975 0.244141Z"
                  fill="#254FD4"
                />
              </svg>
            </button>
            <ResponsiveModal
              open={addAlert}
              maxWidth={"sm"}
              setOpen={setAddAlert}
            >
              <div>
                <p className="text-base flex justify-start items-center gap-1">
                  <FaClock className="text-[#254fd5]" size={16} />
                  Departure Time
                </p>
                <div className="flex flex-col md:flex-row gap-5 mt-5">
                  <div className="flex flex-col justify-center text-center items-center py-2 px-4 border border-[#959595] rounded-lg">
                    <FiSunrise className="text-[#254fd5]" size={18} />
                    <p className="text-base">Morning</p>
                    <p className="text-xs">(05 - 11:59)</p>
                  </div>
                  <div className="flex flex-col justify-center text-center items-center py-2 px-4 border border-[#959595] rounded-lg">
                    <FiSun className="text-[#254fd5]" size={18} />
                    <p className="text-base">Afternoon</p>
                    <p className="text-xs">(12 - 5:59)</p>
                  </div>
                  <div className="flex flex-col justify-center text-center items-center py-2 px-4 border border-[#959595] rounded-lg">
                    <FiSunset className="text-[#254fd5]" size={18} />
                    <p className="text-base">Evening</p>
                    <p className="text-xs">(06 - 11:59)</p>
                  </div>
                  <div className="flex flex-col justify-center text-center items-center py-2 px-4 border border-[#959595] rounded-lg">
                    <FaRegMoon className="text-[#254fd5]" size={18} />
                    <p className="text-base">Late Night</p>
                    <p className="text-xs">(12 - 4:59)</p>
                  </div>
                </div>
                <div className="mt-10 flex justify-between">
                  <p className="text-base flex justify-start items-center gap-1">
                    <FaClock className="text-[#254fd5]" size={16} />
                    Only Direct Flights
                  </p>
                  <div>
                    <label className="relative inline-flex cursor-pointer select-none items-center">
                      <input
                        type="checkbox"
                        name="flight"
                        className="sr-only"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span
                        className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                          isChecked ? "bg-primary" : "bg-[#CCCCCE]"
                        }`}
                      >
                        <span
                          className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                            isChecked ? "translate-x-6" : ""
                          }`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </ResponsiveModal>
          </p>
        </div>
      </div>

      <div className="w-[800px] text-[28px] font-[500] flex flex-row justify-between text-center items-center bg-[#254fd5] text-[#FFFDFD] mt-[25px] rounded-md py-[11px] px-[20px]">
        <p>Lowest Price Now:</p>
        <p>BDT 11,500</p>
      </div>

      <div className="mt-[55px]">
        <p className="text-[24px] font-[400]">
          Prices are <span className="text-[#254fd5]">Standard</span>
        </p>
        <p className="text-[10px] font-[400] pt-1">
          Similar flights in this price range usually cost between BDT 11,455 —
          BDT 12,564 in the last few months.
        </p>
        <div className="relative my-5">
          <label htmlFor="labels-range-input" className="sr-only">
            Labels range
          </label>
          <input
            id="labels-range-input"
            type="range"
            defaultValue="1000"
            min="100"
            max="1500"
            className="w-full h-1 bg-[#254fd5] rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-500 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            BDT 11,435
          </span>
          <span className="text-sm text-gray-500 absolute start-0 -bottom-6">
            Min
          </span>
          <span className="text-sm text-gray-500 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            BDT 12,564
          </span>
          <span className="text-sm text-gray-500 absolute end-0 -bottom-6">
            Max
          </span>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-[24px] font-[400] text-[#162F7F]">
          Lowest Price Trends
        </p>
        <p className="text-[10px] font-[400] pt-1">
          The cheapest priced ticket for the past month.
        </p>

        <div
          className="flex rounded-md mt-10 justify-center items-center"
          role="group"
        >
          <button
            type="button"
            className="px-[45px] py-3 text-sm font-medium text-white bg-[#254fd5] border border-[#254fd5] rounded-l-lg"
          >
            Past Week
          </button>
          <button
            type="button"
            className="px-[45px] py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-lg"
          >
            Past Month
          </button>
        </div>
      </div>
      <div style={style} className="primary-shadow p-5 my-10">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={800}
            height={400}
            data={data}
            syncId="anyId"
            margin={{
              top: 60,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis className="hidden" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#254fd5"
              fill="#D5DFFF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-[24px] font-[400] text-[#162F7F] flex justify-start items-center">
          Cheapest Flights Now
        </h3>
        <div
          style={style}
          className="bg-white rounded-[7px] overflow-hidden mt-5"
        >
          <div className="p-5 flex gap-4">
            <div className="w-1/4 flex justify-center items-center border-r-[1px] border-[#98A8BC]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="19"
                  viewBox="0 0 32 19"
                  fill="none"
                >
                  <path
                    d="M31.3481 15.5365H31.0505H30.3559L29.5622 15.9323C29.463 16.0313 29.2646 16.0312 29.1654 16.0312H15.5727C12.497 16.0312 10.1158 15.6354 8.62756 14.7448C6.24637 13.4583 5.15499 11.776 5.15499 9.40104C5.15499 8.41146 5.45264 7.32292 6.14715 6.43229C7.23853 4.75 8.92521 3.46354 11.4056 3.06771C12.1001 2.96875 12.6954 2.96875 13.0923 2.96875H20.0374C20.4343 2.96875 20.4343 3.06771 20.4343 3.06771L20.3351 3.66146H20.8312L23.8077 0H15.4735C13.4892 0 12.0009 2.2635e-06 11.0088 0.0989606C10.4135 0.0989606 9.91738 0.197918 9.52051 0.395835C8.13148 0.69271 6.84167 1.28646 5.65107 1.97917C3.46831 3.16667 1.98007 4.65104 1.18634 6.33333C0.78947 7.32292 0.491821 8.41146 0.491821 9.69792C0.491821 12.7656 2.1785 15.1406 5.35342 17.0208C6.74245 17.9115 8.42913 18.4063 10.215 18.7031C11.6041 19 13.3899 19 15.6719 19H28.2724L31.3481 15.5365Z"
                    fill="#BD8B13"
                  />
                  <path
                    d="M24.5023 10.9845L27.4788 7.323H7.73469L5.75037 10.2917H23.5101C23.8077 10.2917 23.907 10.3907 23.907 10.3907L23.8077 10.9845H24.5023Z"
                    fill="#BD8B13"
                  />
                </svg>
                <h1 className="text-[14px] font-[400] text-[#0F2055] mb-2">
                  Qatar Airlines
                </h1>
                <div className="flex gap-[5px] justify-center items-center text-center bg-[#FFA7AA] p-1 rounded-lg">
                  <p className="text-[10px] font-[400]">Non refundable</p>
                </div>
              </div>
            </div>
            <div className="w-3/4 ">
              <div className="px-5">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-[14px] font-[400] mb-4 text-center">
                      Depart
                    </h1>
                    <h1 className="text-[16px] font-[500] text-[#162F7F] mb-2">
                      Dhaka (DAC)
                    </h1>
                    <p className="text-[12px] font-[300] mb-[2px]">5:00 am</p>
                    <p className="text-[12px] font-[300]">14 April, Thursday</p>
                  </div>
                  <div className="mt-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                    >
                      <path
                        d="M22.0004 10.7373H1.04797C1.0412 10.7406 1.03549 10.7457 1.0315 10.7521C1.02751 10.7584 1.02539 10.7658 1.02539 10.7733C1.02539 10.7809 1.02751 10.7882 1.0315 10.7946C1.03549 10.801 1.0412 10.8061 1.04797 10.8094L7.1087 16.8701"
                        stroke="#254FD4"
                        stroke-width="1.60125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 7.26267H21.9523C21.9591 7.2594 21.9649 7.25428 21.9689 7.2479C21.9729 7.24153 21.975 7.23417 21.975 7.22665C21.975 7.21913 21.9729 7.21176 21.9689 7.20538C21.9649 7.19901 21.9591 7.19389 21.9523 7.19061L15.8917 1.12988"
                        stroke="#254FD4"
                        stroke-width="1.60125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-[14px] font-[400] mb-4 text-center">
                      Arrive
                    </h1>
                    <h1 className="text-[16px] font-semibold text-[#162F7F] mb-2">
                      Bangkok (DMC)
                    </h1>
                    <p className="text-[12px] font-[300] mb-[2px]">12:00 pm</p>
                    <p className="text-[12px] font-[300]">14 April, Thursday</p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[14px] font-[400] mb-4 text-center">
                      Prices
                    </h1>
                    <p className="mb-2 pl-[10px]">
                     <span className="text-[14px] text-[#0F2055] pr-1">BDT</span>
                      <span className="text-[16px] font-[500] text-[#162F7F]">
                        56,6778
                      </span>
                    </p>
                    <div className="mt-5">
                      <button className="py-[6px] px-[27px] rounded-[9px] text-center text-white font-medium text-[13px] bg-[#254FD4] ">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <div className="flex gap-5">
                    <div className="flex items-center gap-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M3.30061 0.634766L0.642578 3.36191V6.83684L3.30061 9.49487H6.84465L9.50268 6.83684V3.36191L6.84465 0.634766H3.30061Z"
                          stroke="#1D3FAA"
                          stroke-width="0.949297"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.84287 5.06445H3.29883"
                          stroke="#1D3FAA"
                          stroke-width="0.949297"
                          stroke-linecap="round"
                        />
                      </svg>
                      <p className="text-[10px] font-[400]">1 Stop</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M5 9.5C6.06087 9.5 7.07828 9.07857 7.82843 8.32843C8.57857 7.57828 9 6.56087 9 5.5C9 4.43913 8.57857 3.42172 7.82843 2.67157C7.07828 1.92143 6.06087 1.5 5 1.5C3.93913 1.5 2.92172 1.92143 2.17157 2.67157C1.42143 3.42172 1 4.43913 1 5.5C1 6.56087 1.42143 7.57828 2.17157 8.32843C2.92172 9.07857 3.93913 9.5 5 9.5ZM5 0.5C5.65661 0.5 6.30679 0.629329 6.91342 0.880602C7.52005 1.13188 8.07124 1.50017 8.53553 1.96447C8.99983 2.42876 9.36812 2.97995 9.6194 3.58658C9.87067 4.19321 10 4.84339 10 5.5C10 6.82608 9.47322 8.09785 8.53553 9.03553C7.59785 9.97322 6.32608 10.5 5 10.5C2.235 10.5 0 8.25 0 5.5C0 4.17392 0.526784 2.90215 1.46447 1.96447C2.40215 1.02678 3.67392 0.5 5 0.5ZM5.25 3V5.625L7.5 6.96L7.125 7.575L4.5 6V3H5.25Z"
                          fill="#254FD4"
                        />
                      </svg>
                      <p className="text-[10px] font-[400]">
                        Est Time: 5 Hrs 23 min{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-[10px] font-[400]">Flight Details</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                    >
                      <path
                        d="M0.276871 0.982926C0.387904 0.871926 0.538476 0.80957 0.695476 0.80957C0.852477 0.80957 1.00305 0.871926 1.11408 0.982926L4.04491 3.91376L6.97575 0.982926C7.08742 0.875072 7.23698 0.815393 7.39222 0.816742C7.54746 0.818091 7.69597 0.88036 7.80575 0.990138C7.91552 1.09992 7.97779 1.24842 7.97914 1.40366C7.98049 1.55891 7.92081 1.70847 7.81296 1.82014L4.46352 5.16957C4.35249 5.28057 4.20191 5.34293 4.04491 5.34293C3.88791 5.34293 3.73734 5.28057 3.62631 5.16957L0.276871 1.82014C0.165872 1.7091 0.103516 1.55853 0.103516 1.40153C0.103516 1.24453 0.165872 1.09396 0.276871 0.982926Z"
                        fill="#1D3FAA"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={style}
          className="bg-white rounded-[7px] overflow-hidden mt-5"
        >
          <div className="p-5 flex gap-4">
            <div className="w-1/4 flex justify-center items-center border-r-[1px] border-[#98A8BC]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="19"
                  viewBox="0 0 32 19"
                  fill="none"
                >
                  <path
                    d="M31.3481 15.5365H31.0505H30.3559L29.5622 15.9323C29.463 16.0313 29.2646 16.0312 29.1654 16.0312H15.5727C12.497 16.0312 10.1158 15.6354 8.62756 14.7448C6.24637 13.4583 5.15499 11.776 5.15499 9.40104C5.15499 8.41146 5.45264 7.32292 6.14715 6.43229C7.23853 4.75 8.92521 3.46354 11.4056 3.06771C12.1001 2.96875 12.6954 2.96875 13.0923 2.96875H20.0374C20.4343 2.96875 20.4343 3.06771 20.4343 3.06771L20.3351 3.66146H20.8312L23.8077 0H15.4735C13.4892 0 12.0009 2.2635e-06 11.0088 0.0989606C10.4135 0.0989606 9.91738 0.197918 9.52051 0.395835C8.13148 0.69271 6.84167 1.28646 5.65107 1.97917C3.46831 3.16667 1.98007 4.65104 1.18634 6.33333C0.78947 7.32292 0.491821 8.41146 0.491821 9.69792C0.491821 12.7656 2.1785 15.1406 5.35342 17.0208C6.74245 17.9115 8.42913 18.4063 10.215 18.7031C11.6041 19 13.3899 19 15.6719 19H28.2724L31.3481 15.5365Z"
                    fill="#BD8B13"
                  />
                  <path
                    d="M24.5023 10.9845L27.4788 7.323H7.73469L5.75037 10.2917H23.5101C23.8077 10.2917 23.907 10.3907 23.907 10.3907L23.8077 10.9845H24.5023Z"
                    fill="#BD8B13"
                  />
                </svg>
                <h1 className="text-[14px] font-[400] text-[#0F2055] mb-2">
                  Qatar Airlines
                </h1>
                <div className="flex gap-[5px] justify-center items-center text-center bg-[#D5DFFF] p-1 rounded-lg">
                  <p className="text-[10px] font-[400]">Partly refundable</p>
                </div>
              </div>
            </div>
            <div className="w-3/4 ">
              <div className="px-5">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-[14px] font-[400] mb-4 text-center">
                      Depart
                    </h1>
                    <h1 className="text-[16px] font-[500] text-[#162F7F] mb-2">
                      Dhaka (DAC)
                    </h1>
                    <p className="text-[12px] font-[300] mb-[2px]">5:00 am</p>
                    <p className="text-[12px] font-[300]">14 April, Thursday</p>
                  </div>
                  <div className="mt-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                    >
                      <path
                        d="M22.0004 10.7373H1.04797C1.0412 10.7406 1.03549 10.7457 1.0315 10.7521C1.02751 10.7584 1.02539 10.7658 1.02539 10.7733C1.02539 10.7809 1.02751 10.7882 1.0315 10.7946C1.03549 10.801 1.0412 10.8061 1.04797 10.8094L7.1087 16.8701"
                        stroke="#254FD4"
                        stroke-width="1.60125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 7.26267H21.9523C21.9591 7.2594 21.9649 7.25428 21.9689 7.2479C21.9729 7.24153 21.975 7.23417 21.975 7.22665C21.975 7.21913 21.9729 7.21176 21.9689 7.20538C21.9649 7.19901 21.9591 7.19389 21.9523 7.19061L15.8917 1.12988"
                        stroke="#254FD4"
                        stroke-width="1.60125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-[14px] font-[400] mb-4 text-center">
                      Arrive
                    </h1>
                    <h1 className="text-[16px] font-semibold text-[#162F7F] mb-2">
                      Bangkok (DMC)
                    </h1>
                    <p className="text-[12px] font-[300] mb-[2px]">12:00 pm</p>
                    <p className="text-[12px] font-[300]">14 April, Thursday</p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[14px] font-[400] mb-4 text-center">
                      Prices
                    </h1>
                    <p className="mb-2 pl-[10px]">
                     <span className="text-[14px] text-[#0F2055] pr-1">BDT</span>
                      <span className="text-[16px] font-[500] text-[#162F7F]">
                        56,6778
                      </span>
                    </p>
                    <div className="mt-5">
                      <button className="py-[6px] px-[27px] rounded-[9px] text-center text-white font-medium text-[13px] bg-[#254FD4] ">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <div className="flex gap-5">
                    <div className="flex items-center gap-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M3.30061 0.634766L0.642578 3.36191V6.83684L3.30061 9.49487H6.84465L9.50268 6.83684V3.36191L6.84465 0.634766H3.30061Z"
                          stroke="#1D3FAA"
                          stroke-width="0.949297"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.84287 5.06445H3.29883"
                          stroke="#1D3FAA"
                          stroke-width="0.949297"
                          stroke-linecap="round"
                        />
                      </svg>
                      <p className="text-[10px] font-[400]">1 Stop</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M5 9.5C6.06087 9.5 7.07828 9.07857 7.82843 8.32843C8.57857 7.57828 9 6.56087 9 5.5C9 4.43913 8.57857 3.42172 7.82843 2.67157C7.07828 1.92143 6.06087 1.5 5 1.5C3.93913 1.5 2.92172 1.92143 2.17157 2.67157C1.42143 3.42172 1 4.43913 1 5.5C1 6.56087 1.42143 7.57828 2.17157 8.32843C2.92172 9.07857 3.93913 9.5 5 9.5ZM5 0.5C5.65661 0.5 6.30679 0.629329 6.91342 0.880602C7.52005 1.13188 8.07124 1.50017 8.53553 1.96447C8.99983 2.42876 9.36812 2.97995 9.6194 3.58658C9.87067 4.19321 10 4.84339 10 5.5C10 6.82608 9.47322 8.09785 8.53553 9.03553C7.59785 9.97322 6.32608 10.5 5 10.5C2.235 10.5 0 8.25 0 5.5C0 4.17392 0.526784 2.90215 1.46447 1.96447C2.40215 1.02678 3.67392 0.5 5 0.5ZM5.25 3V5.625L7.5 6.96L7.125 7.575L4.5 6V3H5.25Z"
                          fill="#254FD4"
                        />
                      </svg>
                      <p className="text-[10px] font-[400]">
                        Est Time: 5 Hrs 23 min{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-[10px] font-[400]">Flight Details</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                    >
                      <path
                        d="M0.276871 0.982926C0.387904 0.871926 0.538476 0.80957 0.695476 0.80957C0.852477 0.80957 1.00305 0.871926 1.11408 0.982926L4.04491 3.91376L6.97575 0.982926C7.08742 0.875072 7.23698 0.815393 7.39222 0.816742C7.54746 0.818091 7.69597 0.88036 7.80575 0.990138C7.91552 1.09992 7.97779 1.24842 7.97914 1.40366C7.98049 1.55891 7.92081 1.70847 7.81296 1.82014L4.46352 5.16957C4.35249 5.28057 4.20191 5.34293 4.04491 5.34293C3.88791 5.34293 3.73734 5.28057 3.62631 5.16957L0.276871 1.82014C0.165872 1.7091 0.103516 1.55853 0.103516 1.40153C0.103516 1.24453 0.165872 1.09396 0.276871 0.982926Z"
                        fill="#1D3FAA"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={style}
          className="bg-white rounded-[7px] overflow-hidden mt-5"
        >
          <div className="p-5 flex gap-4">
            <div className="w-1/4 flex justify-center items-center border-r-[1px] border-[#98A8BC]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="19"
                  viewBox="0 0 32 19"
                  fill="none"
                >
                  <path
                    d="M31.3481 15.5365H31.0505H30.3559L29.5622 15.9323C29.463 16.0313 29.2646 16.0312 29.1654 16.0312H15.5727C12.497 16.0312 10.1158 15.6354 8.62756 14.7448C6.24637 13.4583 5.15499 11.776 5.15499 9.40104C5.15499 8.41146 5.45264 7.32292 6.14715 6.43229C7.23853 4.75 8.92521 3.46354 11.4056 3.06771C12.1001 2.96875 12.6954 2.96875 13.0923 2.96875H20.0374C20.4343 2.96875 20.4343 3.06771 20.4343 3.06771L20.3351 3.66146H20.8312L23.8077 0H15.4735C13.4892 0 12.0009 2.2635e-06 11.0088 0.0989606C10.4135 0.0989606 9.91738 0.197918 9.52051 0.395835C8.13148 0.69271 6.84167 1.28646 5.65107 1.97917C3.46831 3.16667 1.98007 4.65104 1.18634 6.33333C0.78947 7.32292 0.491821 8.41146 0.491821 9.69792C0.491821 12.7656 2.1785 15.1406 5.35342 17.0208C6.74245 17.9115 8.42913 18.4063 10.215 18.7031C11.6041 19 13.3899 19 15.6719 19H28.2724L31.3481 15.5365Z"
                    fill="#BD8B13"
                  />
                  <path
                    d="M24.5023 10.9845L27.4788 7.323H7.73469L5.75037 10.2917H23.5101C23.8077 10.2917 23.907 10.3907 23.907 10.3907L23.8077 10.9845H24.5023Z"
                    fill="#BD8B13"
                  />
                </svg>
                <h1 className="text-[14px] font-[400] text-[#0F2055] mb-2">
                  Qatar Airlines
                </h1>
                <div className="flex gap-[5px] justify-center items-center text-center bg-[#9AF1B2] p-1 rounded-lg">
                  <p className="text-[10px] font-[400]">Refundable</p>
                </div>
              </div>
            </div>
            <div className="w-3/4 ">
              <div className="px-5">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-[14px] font-[400] mb-4 text-center">
                      Depart
                    </h1>
                    <h1 className="text-[16px] font-[500] text-[#162F7F] mb-2">
                      Dhaka (DAC)
                    </h1>
                    <p className="text-[12px] font-[300] mb-[2px]">5:00 am</p>
                    <p className="text-[12px] font-[300]">14 April, Thursday</p>
                  </div>
                  <div className="mt-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                    >
                      <path
                        d="M22.0004 10.7373H1.04797C1.0412 10.7406 1.03549 10.7457 1.0315 10.7521C1.02751 10.7584 1.02539 10.7658 1.02539 10.7733C1.02539 10.7809 1.02751 10.7882 1.0315 10.7946C1.03549 10.801 1.0412 10.8061 1.04797 10.8094L7.1087 16.8701"
                        stroke="#254FD4"
                        stroke-width="1.60125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 7.26267H21.9523C21.9591 7.2594 21.9649 7.25428 21.9689 7.2479C21.9729 7.24153 21.975 7.23417 21.975 7.22665C21.975 7.21913 21.9729 7.21176 21.9689 7.20538C21.9649 7.19901 21.9591 7.19389 21.9523 7.19061L15.8917 1.12988"
                        stroke="#254FD4"
                        stroke-width="1.60125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-[14px] font-[400] mb-4 text-center">
                      Arrive
                    </h1>
                    <h1 className="text-[16px] font-semibold text-[#162F7F] mb-2">
                      Bangkok (DMC)
                    </h1>
                    <p className="text-[12px] font-[300] mb-[2px]">12:00 pm</p>
                    <p className="text-[12px] font-[300]">14 April, Thursday</p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[14px] font-[400] mb-4 text-center">
                      Prices
                    </h1>
                    <p className="mb-2 pl-[10px]">
                     <span className="text-[14px] text-[#0F2055] pr-1">BDT</span>
                      <span className="text-[16px] font-[500] text-[#162F7F]">
                        56,6778
                      </span>
                    </p>
                    <div className="mt-5">
                      <button className="py-[6px] px-[27px] rounded-[9px] text-center text-white font-medium text-[13px] bg-[#254FD4] ">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <div className="flex gap-5">
                    <div className="flex items-center gap-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M3.30061 0.634766L0.642578 3.36191V6.83684L3.30061 9.49487H6.84465L9.50268 6.83684V3.36191L6.84465 0.634766H3.30061Z"
                          stroke="#1D3FAA"
                          stroke-width="0.949297"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.84287 5.06445H3.29883"
                          stroke="#1D3FAA"
                          stroke-width="0.949297"
                          stroke-linecap="round"
                        />
                      </svg>
                      <p className="text-[10px] font-[400]">1 Stop</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M5 9.5C6.06087 9.5 7.07828 9.07857 7.82843 8.32843C8.57857 7.57828 9 6.56087 9 5.5C9 4.43913 8.57857 3.42172 7.82843 2.67157C7.07828 1.92143 6.06087 1.5 5 1.5C3.93913 1.5 2.92172 1.92143 2.17157 2.67157C1.42143 3.42172 1 4.43913 1 5.5C1 6.56087 1.42143 7.57828 2.17157 8.32843C2.92172 9.07857 3.93913 9.5 5 9.5ZM5 0.5C5.65661 0.5 6.30679 0.629329 6.91342 0.880602C7.52005 1.13188 8.07124 1.50017 8.53553 1.96447C8.99983 2.42876 9.36812 2.97995 9.6194 3.58658C9.87067 4.19321 10 4.84339 10 5.5C10 6.82608 9.47322 8.09785 8.53553 9.03553C7.59785 9.97322 6.32608 10.5 5 10.5C2.235 10.5 0 8.25 0 5.5C0 4.17392 0.526784 2.90215 1.46447 1.96447C2.40215 1.02678 3.67392 0.5 5 0.5ZM5.25 3V5.625L7.5 6.96L7.125 7.575L4.5 6V3H5.25Z"
                          fill="#254FD4"
                        />
                      </svg>
                      <p className="text-[10px] font-[400]">
                        Est Time: 5 Hrs 23 min{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-[10px] font-[400]">Flight Details</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                    >
                      <path
                        d="M0.276871 0.982926C0.387904 0.871926 0.538476 0.80957 0.695476 0.80957C0.852477 0.80957 1.00305 0.871926 1.11408 0.982926L4.04491 3.91376L6.97575 0.982926C7.08742 0.875072 7.23698 0.815393 7.39222 0.816742C7.54746 0.818091 7.69597 0.88036 7.80575 0.990138C7.91552 1.09992 7.97779 1.24842 7.97914 1.40366C7.98049 1.55891 7.92081 1.70847 7.81296 1.82014L4.46352 5.16957C4.35249 5.28057 4.20191 5.34293 4.04491 5.34293C3.88791 5.34293 3.73734 5.28057 3.62631 5.16957L0.276871 1.82014C0.165872 1.7091 0.103516 1.55853 0.103516 1.40153C0.103516 1.24453 0.165872 1.09396 0.276871 0.982926Z"
                        fill="#1D3FAA"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default PriceAlert3;
