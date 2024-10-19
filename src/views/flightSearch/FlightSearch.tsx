"use client";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Dialog,
} from "@mui/material";
import React, { useState } from "react";
import SearchInput from "@/components/SearchBox/SearchInput";
import PassengerClass from "@/components/SearchBox/PassengerClass";
import DateSelect from "@/components/SearchBox/DateSelect";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import {
  setOriginLocation,
  setDestination,
  setAdults,
  setDatesArr,
  setDirectFlightsOnly,
} from "@/redux-store/slice/searchSlice";
import { AppDispatch } from "@/redux-store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/hooks";

interface Location {
  locationName: string;
  locationCode: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const FlightSearch: React.FC = () => {
  const {
    originLocation: orLocation,
    destination: destinationLocation,
    adults: totalAdults,
    datesArr: dateArr,
  } = useAppSelector((state) => state.search);

  const [age, setAge] = useState("");
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [originLocation, setOriginLocationLocal] = useState<Location>({
    locationName: "Cox's Bazar",
    locationCode: "CXB",
  });
  const [destination, setDestinationLocal] = useState<Location>({
    locationName: "Dhaka",
    locationCode: "DAC",
  });
  const [adults, setAdultsLocal] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [datesArr, setDatesArrLocal] = useState<string[]>([]);
  console.log(datesArr);
  const handleSearch = async () => {
    dispatch(setOriginLocation(originLocation));
    dispatch(setDestination(destination));
    dispatch(setAdults(adults));
    dispatch(setDatesArr(datesArr));
    dispatch(setDirectFlightsOnly(isChecked));
    setIsSearchOpen(false);
  };

  const handleClickOpen = () => {
    setIsSearchOpen(true);
  };
  const handleClose = () => {
    setIsSearchOpen(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative z-40 h-full">
      <div className="flex justify-between px-10 py-6 shadow-md bg-white rounded-[12px]">
        <div className="">
          <div className="text-xl font-medium text-[#162F7F]">
            {orLocation.locationName} ({orLocation.locationCode}) —{" "}
            {destinationLocation.locationName} (
            {destinationLocation.locationCode})
          </div>
          <p className="text-sm">
            Round Trip - 24 May - 06 Jun - 1 Traveller - Economy
          </p>
        </div>
        <button
          className="py-[6px] px-[21px] rounded-[33px] text-center text-white font-medium text-[18px] bg-[#254FD4] "
          onClick={() => setIsSearchOpen(true)}
        >
          Modify
        </button>
      </div>

      <Dialog
        open={isSearchOpen}
        className="h-full"
        TransitionComponent={Transition}
        scroll={"body"}
        fullWidth={true}
        PaperProps={{
          style: {
            maxWidth: "1148px",
            width: "100%",
            maxHeight: "100%",
            overflow: "visible",
          },
        }}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="px-6 relative !z-50 overflow-visible h-auto rounded-[16px] bg-white py-5">
          <div className="flex items-center ml-[53px] mb-[14px]">
            <div className="flex items-center transform gap-[17px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="20"
                viewBox="0 0 27 20"
                fill="none"
              >
                <path
                  d="M4.47847 5.36862L8.77571 6.60922L13.499 3.17889L6.72051 3.3732C6.65414 3.37683 6.58981 3.39741 6.53367 3.43299L4.38878 4.66612C4.32207 4.70308 4.26797 4.75922 4.2335 4.82726C4.19903 4.8953 4.18576 4.97212 4.19542 5.04778C4.20508 5.12344 4.23722 5.19446 4.28768 5.25166C4.33814 5.30886 4.4046 5.3496 4.47847 5.36862Z"
                  fill="#1D3FAA"
                />
                <path
                  d="M25.606 1.52723L20.8977 0.51084C20.5017 0.424877 20.0919 0.425101 19.696 0.511497C19.3001 0.597893 18.9275 0.76844 18.6033 1.01156L4.3813 11.3474L0.965926 11.1979C0.770297 11.1913 0.577521 11.2462 0.414818 11.3551C0.252115 11.4639 0.127706 11.6211 0.0591569 11.8044C-0.00939175 11.9878 -0.0186164 12.188 0.0327856 12.3769C0.0841876 12.5657 0.193619 12.7337 0.345628 12.857L3.67132 15.4952C3.72607 15.5393 3.79124 15.5687 3.86059 15.5805C3.92995 15.5923 4.00116 15.586 4.06742 15.5624C5.01655 15.1962 8.55151 13.3204 12.7292 11.026L13.5662 19.628C13.5733 19.7025 13.6006 19.7736 13.6452 19.8338C13.6897 19.8939 13.7499 19.9407 13.8191 19.9691C13.8883 19.9976 13.964 20.0066 14.038 19.9952C14.1119 19.9838 14.1814 19.9525 14.2388 19.9045L16.1072 18.35C16.2095 18.2642 16.2783 18.1452 16.3015 18.0137L18.0727 8.08147C21.0621 6.42236 23.917 4.81556 25.9273 3.67959C26.136 3.56607 26.3047 3.39116 26.4105 3.17856C26.5164 2.96596 26.5544 2.72594 26.5194 2.49103C26.4843 2.25612 26.3778 2.03767 26.2145 1.86527C26.0511 1.69287 25.8387 1.57486 25.606 1.52723Z"
                  fill="#1D3FAA"
                />
              </svg>
              <p className="text-[#1D3FAA] text-[16px] font-[700]">Flight</p>
            </div>
          </div>
          <hr className="border border-[#DBE3FF] w-full" />

          <div className="mt-3 mb-3 flex justify-between flex-row gap-5 items-center">
            <FormControl component="fieldset">
              <RadioGroup
                className="flex flex-row gap-5"
                defaultValue="roundWay"
                name="tripType"
              >
                <FormControlLabel
                  value="oneWay"
                  control={<Radio />}
                  label={
                    <span className="text-[16px] font-medium">One way</span>
                  }
                />
                <FormControlLabel
                  value="roundWay"
                  control={<Radio />}
                  label={
                    <span className="text-[16px] font-medium">Round Way</span>
                  }
                />
                <FormControlLabel
                  value="multiWay"
                  control={<Radio />}
                  label={
                    <span className="text-[16px] font-medium">Multi Way</span>
                  }
                />
              </RadioGroup>
            </FormControl>

            <div>
              <div className="flex justify-start items-center gap-[6px]">
                <label className="relative inline-flex cursor-pointer select-none items-center">
                  <input
                    type="checkbox"
                    name="flight"
                    className="sr-only"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span
                    className={`slider flex h-[11px] w-[25px] items-center rounded-[15px] duration-200 ${
                      isChecked ? "bg-[#DBE3FF]" : "bg-[#D9D9D9]"
                    }`}
                  >
                    <span
                      className={`dot h-[13px] w-[13px] rounded-[15px]  duration-200 ${
                        isChecked ? "translate-x-3  bg-primary" : "bg-[#808285]"
                      }`}
                    ></span>
                  </span>
                </label>
                <span className="text-[14px] text-[#162F7F] font-medium	">
                  Direct Flights Only
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[9px] items-center border border-[#808285]  grid grid-cols-2 px-5">
            <div className=" grid grid-cols-8 ">
              <div className="col-span-3">
                <SearchInput
                  title={"From"}
                  location={originLocation}
                  setLocation={setOriginLocationLocal}
                />
              </div>
              <div className="w-full col-span-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  fill="none"
                >
                  <path
                    d="M23.7835 11.3301H1.71192C1.70479 11.3336 1.69878 11.339 1.69458 11.3457C1.69037 11.3524 1.68814 11.3602 1.68814 11.3681C1.68814 11.376 1.69037 11.3838 1.69458 11.3905C1.69878 11.3972 1.70479 11.4026 1.71192 11.406L8.09639 17.7905"
                    stroke="#1D3FAA"
                    stroke-width="1.68678"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.66132 7.66984H23.7328C23.7399 7.66638 23.746 7.66099 23.7502 7.65428C23.7544 7.64757 23.7566 7.63981 23.7566 7.63189C23.7566 7.62397 23.7544 7.6162 23.7502 7.60949C23.746 7.60278 23.7399 7.59738 23.7328 7.59393L17.3484 1.20947"
                    stroke="#1D3FAA"
                    stroke-width="1.68678"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <div className=" w-full col-span-4 ps-8 bg-white">
                <SearchInput
                  title="To"
                  location={destination}
                  setLocation={setDestinationLocal}
                />
              </div>
            </div>
            <div className=" flex w-full flex-row items-center">
              <div className="border-l w-full border-gray-400 pl-5">
                <DateSelect setDatesArr={setDatesArrLocal} />
              </div>

              <div className="w-full border-l border-gray-400 ps-5">
                <PassengerClass adults={adults} setAdults={setAdultsLocal} />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center w-full gap-8 mt-5">
            <div>
              <FormControl component="fieldset">
                <RadioGroup
                  className="flex flex-row gap-5"
                  defaultValue="regularFare"
                  name="regularFare"
                >
                  <FormControlLabel
                    value="regularFare"
                    control={<Radio size="small" />}
                    label={
                      <span className="text-[14px] font-normal">
                        Regular Fare
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="studentFare"
                    control={<Radio size="small" />}
                    label={
                      <span className="text-[14px] font-normal">
                        Student Fare
                      </span>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="flex items-center gap-[14px]">
              {!showInput && (
                <button
                  className="flex items-center bg-transparent justify-center gap-[10px] w-[200px] h-[52px] py-2"
                  onClick={() => setShowInput(!showInput)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11 9V5H9V9H5V11H9V15H11V11H15V9H11ZM10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20Z"
                      fill="url(#paint0_linear_911_916)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_911_916"
                        x1="5"
                        y1="1"
                        x2="15.5"
                        y2="18.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#174BED" />
                        <stop offset="1" stop-color="#0D2B87" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-[18px] font-normal text-[#222] hover:text-[#426AEB]">
                    Add promo code
                  </p>
                </button>
              )}
              {showInput && (
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="text-center w-[200px] h-[52px] py-2 border-[1.5px] rounded-[8px] border-[#959595] focus:outline-none"
                />
              )}

              <button
                onClick={handleSearch}
                className="bg-gradient-to-r cursor-pointer w-[219px] h-[52px] py-2  to-[#0d2c8b] text-white rounded-[8px] text-[20px] font-[700] transition-all duration-300 from-[#164aea]"
              >
                Modify Search
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default FlightSearch;
