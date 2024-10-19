"use client";
import moment from "moment";
import EmptyStat from "@/components/EmptyStat/EmptyStat";
import Loader from "@/components/Spinner/Loader";
import { useGetflightStatusQuery } from "@/redux-store/api/flightApi";
import React from "react";

function FlightStatusDetails({ params }: any) {
  const {
    data: flightData,
    isLoading,
    isSuccess,
    isError,
  } = useGetflightStatusQuery({
    carrierCode: "BA",
    flightNumber: params?.segments[1],
    scheduledDepartureDate: params?.segments[0],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!isSuccess) {
    console.log("ok");
    return (
      <div className="flex items-center justify-center">
        <EmptyStat title="Data Not found" />
      </div>
    );
  }
  if (isError) {
    console.log("ok");
    return (
      <div className="flex items-center justify-center">
        <EmptyStat title="Data Not found" />
      </div>
    );
  }
  if (flightData?.data === 0) {
    console.log("ok");
    return (
      <div className="flex items-center justify-center">
        <EmptyStat title="Data Not found" />
      </div>
    );
  }
  const handleBack = () => {
    window.history.back();
  };

  const dep = flightData?.data[0]?.flightPoints[0];
  const arr = flightData?.data[0]?.flightPoints[1];

  return (
    <div className="pb-14">
      <div>
        <div
          style={{
            background: `linear-gradient(90deg, #174BED 3.19%, #0D2B87 174.88%)`,
          }}>
          <div className="max-w-[1396px] px-4 mx-auto text-xl flex items-center text-white">
            <span
              onClick={() => handleBack()}
              className="py-[18px] text-[24px] font-[600] cursor-pointer text-white flex flex-row gap-[17px] items-center">
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
              <span className="text-[24px] font-[600]">
                {dep?.iataCode} - {arr?.iataCode}
              </span>
            </span>
          </div>
        </div>
        <div className="shadow-lg">
          <div className="flex  max-w-[1392px] px-4 mx-auto w-full flex-row justify-between py-3 ">
            <p className="flex text-[20px] flex-row items-center cursor-pointer gap-2">
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 1L1 7.5L7.5 14"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[28px] font-[400]">
                {flightData?.data?.length > 0 &&
                  moment(flightData.data[0].scheduledDepartureDate).subtract(1, "day").format("MMMM DD")}
              </span>
            </p>
            <p className="flex text-[20px] flex-row items-center cursor-pointer gap-2 ">
              <span className="text-[28px] font-[400]">
                {flightData?.data?.length > 0 && moment(flightData.data[0].scheduledDepartureDate).format("MMMM DD")}
              </span>
              <svg
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 1.75L7.5 8.25L1 1.75"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <p className="flex text-[20px] flex-row items-center cursor-pointer gap-2">
              <span className="text-[28px] font-[400]">
                {flightData?.data?.length > 0 &&
                  moment(flightData.data[0].scheduledDepartureDate).add(1, "day").format("MMMM DD")}
              </span>
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L7.5 7.5L1 14"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>
        <div className="w-[1393px] px-4 mx-auto">
          {flightData?.data?.length > 0 ? (
            flightData?.data?.map((flight: any, index: number) => {
              const departure = flight?.flightPoints[0];
              const arrival = flight?.flightPoints[1];
              const departureTime = new Date(departure?.departure?.timings[0]?.value).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
              const arrivalTime = new Date(arrival?.arrival?.timings[0]?.value).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
              console.log(departureTime, arrivalTime);
              return (
                <div className=" rounded-lg shadow-lg bg-white px-4 py-2 mt-5">
                  <p className="flex flex-row justify-start items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.47523 1.52161C1.93383 1.05735 2.47746 0.685639 3.07649 0.426749C3.6908 0.168293 4.35055 0.0351562 5.01702 0.0351562C5.68349 0.0351562 6.34324 0.168293 6.95755 0.426749C7.56304 0.685708 8.11388 1.05724 8.58083 1.52161C9.03098 1.9803 9.38426 2.52486 9.61965 3.12287C9.87404 3.74469 10.0033 4.41058 9.99994 5.08242C9.99944 5.75324 9.87035 6.41775 9.61965 7.03996C9.37932 7.63542 9.02663 8.17907 8.58083 8.64122C8.11895 9.10727 7.56651 9.47374 6.95755 9.71807C6.34324 9.97652 5.68349 10.1097 5.01702 10.1097C4.35055 10.1097 3.6908 9.97652 3.07649 9.71807C1.8726 9.2116 0.916342 8.25175 0.414393 7.04597C0.164631 6.42347 0.0355651 5.75915 0.034089 5.08842C0.0317448 4.41668 0.160946 3.75098 0.414393 3.12888C0.650196 2.52483 1.01339 1.97868 1.47923 1.52762L1.47523 1.52161ZM6.19295 4.90828L6.69934 5.39867C6.77722 5.46507 6.87622 5.50155 6.97856 5.50155C7.08091 5.50155 7.17991 5.46507 7.25779 5.39867L8.39868 4.63607L8.09444 4.36185H9.71772L7.31583 6.08321C7.01159 6.25134 6.80943 6.26935 6.63129 6.12324C6.53674 6.04198 6.43489 5.96962 6.32705 5.90707C6.17493 5.6929 5.94675 5.66287 5.66853 5.80899L4.17135 6.91586H1.51125L4.04725 5.00636L0.344331 5.02638L0.852739 4.53799H5.54243C5.79663 4.50797 5.99879 4.63606 6.20295 4.90828H6.19295Z"
                        fill="#D84638"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.1931 4.90824L6.69949 5.39863C6.77737 5.46504 6.87637 5.50151 6.97871 5.50151C7.08106 5.50151 7.18006 5.46504 7.25794 5.39863L8.39883 4.63603L8.0946 4.36182H9.71787L7.31598 6.08317C7.01174 6.25131 6.80958 6.26932 6.63144 6.1232C6.53689 6.04194 6.43504 5.96958 6.3272 5.90703C6.17508 5.69287 5.9469 5.66284 5.66868 5.80895L4.1715 6.91582H1.51141L4.0474 5.00632L0.344482 5.02634L0.852891 4.53796H5.54258C5.79678 4.50793 5.99894 4.63603 6.2031 4.90824H6.1931Z"
                        fill="white"
                      />
                    </svg>
                    <span className="text-[12px] font-[400]">Biman Bangladesh</span>
                  </p>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-between items-center gap-5 md:gap-48 mt-2">
                      <div>
                        <h1 className="text-[28px] font-[500] text-[#162F7F]"> N/A({departure?.iataCode})</h1>
                        <p className="text-[14px] font-[500]">{departureTime}</p>
                      </div>
                      <svg
                        width="31"
                        height="23"
                        viewBox="0 0 31 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M29 13.7197H1.89956C1.89081 13.724 1.88343 13.7306 1.87826 13.7388C1.8731 13.7471 1.87036 13.7566 1.87036 13.7663C1.87036 13.7761 1.8731 13.7856 1.87826 13.7938C1.88343 13.8021 1.89081 13.8087 1.89956 13.8129L9.7387 21.6521"
                          stroke="#254FD4"
                          stroke-width="2.0711"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M1.83752 9.2253H28.9379C28.9466 9.22106 28.9541 9.21444 28.9593 9.20619C28.9644 9.19795 28.9672 9.18843 28.9672 9.1787C28.9672 9.16897 28.9644 9.15944 28.9593 9.1512C28.9541 9.14296 28.9466 9.13633 28.9379 9.13209L21.0988 1.29297"
                          stroke="#254FD4"
                          stroke-width="2.0711"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                      </svg>
                      <div>
                        <h1 className="text-[28px] font-[500] text-[#162F7F]">N/A ({arrival?.iataCode})</h1>
                        <p className="text-[14px] font-[500]">{arrivalTime}</p>
                      </div>
                    </div>
                    <div className="flex flex-col  justify-center items-end gap-4">
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                          fill="#808285"
                        />
                      </svg>
                      <h1 className="text-[16px] font-[600] text-[#008C41]">ARRIVED</h1>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <EmptyStat title={"Data not found"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FlightStatusDetails;
