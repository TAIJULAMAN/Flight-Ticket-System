import React from "react";
import coin from "@assets/coin/coin.png";
import Image from "next/image";

function RewardCoin() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 primary-shadow rounded-[11px] bg-[#FFFDFD] w-full p-5">
        <div className="col-span-1 pb-5 md:pb-0 lg:pb-0 flex flex-col items-center justify-center">
          <Image
            src={coin}
            alt="coin"
            width={250}
            className="object-cover"
            height={250}
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between bg-[#D5DFFF] rounded-[11px] pl-[32px] w-[530px] h-[142px] pr-[47px]">
              <div>
                <h2 className="text-[28px] font-[500] text-[#222] pt-[11px]">
                  Reward Coin
                </h2>
                <p className="text-[#1d3faa] text-[64px] font-[500]">1535</p>
              </div>
              <p className="text-[16px] font-[400] pt-[22px]">
                <span className="text-[#1d3faa] font-[500] text-[24px]">1</span>{" "}
                Reward Coin ={" "}
                <span className="text-[#1d3faa] font-[500] text-[24px]">1</span>{" "}
                BDT
              </p>
            </div>
            <div className="flex flex-row justify-between  bg-[#d5dfff] rounded-[11px] px-[14px] w-[530px] py-[8px] text-[16px] font-[400] mt-[21px]">
              <div className="flex flex-row justify-start text-center items-center">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10.5C1 11.6819 1.23279 12.8522 1.68508 13.9442C2.13738 15.0361 2.80031 16.0282 3.63604 16.864C4.47177 17.6997 5.46392 18.3626 6.55585 18.8149C7.64778 19.2672 8.8181 19.5 10 19.5C11.1819 19.5 12.3522 19.2672 13.4442 18.8149C14.5361 18.3626 15.5282 17.6997 16.364 16.864C17.1997 16.0282 17.8626 15.0361 18.3149 13.9442C18.7672 12.8522 19 11.6819 19 10.5C19 8.11305 18.0518 5.82387 16.364 4.13604C14.6761 2.44821 12.3869 1.5 10 1.5C7.61305 1.5 5.32387 2.44821 3.63604 4.13604C1.94821 5.82387 1 8.11305 1 10.5Z"
                    stroke="#1D3FAA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6.49963L6.553 6.22363C6.70542 6.14747 6.87477 6.11151 7.04499 6.11918C7.21521 6.12684 7.38065 6.17788 7.52561 6.26744C7.67056 6.35699 7.79023 6.48211 7.87326 6.6309C7.95628 6.7797 7.99991 6.94724 8 7.11763V13.4996C8 14.0301 8.21071 14.5388 8.58579 14.9138C8.96086 15.2889 9.46957 15.4996 10 15.4996H10.5C11.163 15.4996 11.7989 15.2362 12.2678 14.7674C12.7366 14.2986 13 13.6627 13 12.9996V12.4996H12M6 9.49963H13"
                    stroke="#1D3FAA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[16px] font-[500] pl-[13px]">
                  Pending TripCoins
                </p>
              </div>
              <p>230</p>
            </div>
            <div className="flex flex-row justify-between  bg-[#d5dfff] rounded-[11px] px-[14px] w-[530px] py-[8px] text-[16px] font-[400] mt-[16px]">
              <div className="flex flex-row justify-start text-center items-center">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10.5C1 11.6819 1.23279 12.8522 1.68508 13.9442C2.13738 15.0361 2.80031 16.0282 3.63604 16.864C4.47177 17.6997 5.46392 18.3626 6.55585 18.8149C7.64778 19.2672 8.8181 19.5 10 19.5C11.1819 19.5 12.3522 19.2672 13.4442 18.8149C14.5361 18.3626 15.5282 17.6997 16.364 16.864C17.1997 16.0282 17.8626 15.0361 18.3149 13.9442C18.7672 12.8522 19 11.6819 19 10.5C19 8.11305 18.0518 5.82387 16.364 4.13604C14.6761 2.44821 12.3869 1.5 10 1.5C7.61305 1.5 5.32387 2.44821 3.63604 4.13604C1.94821 5.82387 1 8.11305 1 10.5Z"
                    stroke="#1D3FAA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6.49963L6.553 6.22363C6.70542 6.14747 6.87477 6.11151 7.04499 6.11918C7.21521 6.12684 7.38065 6.17788 7.52561 6.26744C7.67056 6.35699 7.79023 6.48211 7.87326 6.6309C7.95628 6.7797 7.99991 6.94724 8 7.11763V13.4996C8 14.0301 8.21071 14.5388 8.58579 14.9138C8.96086 15.2889 9.46957 15.4996 10 15.4996H10.5C11.163 15.4996 11.7989 15.2362 12.2678 14.7674C12.7366 14.2986 13 13.6627 13 12.9996V12.4996H12M6 9.49963H13"
                    stroke="#1D3FAA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[16px] font-[500] pl-[13px]">Expiring in 60 Days</p>
              </div>
              <p>1535</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between text-center items-center bg-[#2C5FFF] text-white mt-[29px] rounded-[11px] px-[15px] py-3 text-[24px] font-[400]">
        <div className="flex flex-row justify-start text-center items-center gap-[16px]">
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13C-2.44606e-08 14.6415 0.323322 16.267 0.951506 17.7835C1.57969 19.3001 2.50043 20.6781 3.66116 21.8388C4.8219 22.9996 6.19989 23.9203 7.71646 24.5485C9.23303 25.1767 10.8585 25.5 12.5 25.5C14.1415 25.5 15.767 25.1767 17.2835 24.5485C18.8001 23.9203 20.1781 22.9996 21.3388 21.8388C22.4996 20.6781 23.4203 19.3001 24.0485 17.7835C24.6767 16.267 25 14.6415 25 13C25 9.68479 23.683 6.50537 21.3388 4.16117C18.9946 1.81696 15.8152 0.5 12.5 0.5C9.18479 0.5 6.00537 1.81696 3.66116 4.16117C1.31696 6.50537 4.94004e-08 9.68479 0 13Z"
              fill="#FCC62D"
            />
            <path
              d="M6.94531 7.44388L7.71337 7.06054C7.92506 6.95476 8.16028 6.90482 8.39669 6.91547C8.63311 6.92612 8.86288 6.997 9.06421 7.12138C9.26554 7.24577 9.43174 7.41954 9.54706 7.6262C9.66237 7.83286 9.72296 8.06556 9.72309 8.30221V17.1661C9.72309 17.9028 10.0157 18.6093 10.5367 19.1303C11.0576 19.6512 11.7642 19.9439 12.5009 19.9439H13.1953C14.1162 19.9439 14.9994 19.5781 15.6505 18.9269C16.3017 18.2757 16.6675 17.3925 16.6675 16.4717V15.7772H15.2786M6.94531 11.6105H16.6675"
              stroke="#005529"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[24px] font-[500] whitespace-nowrap mb-[2px]">
            Sign Up
          </p>
        </div>
        <p className="text-[24px] w-full ps-9">Expiring in - 10 May 25</p>
        <p className="text-[24px] font-[500] text-end">250</p>
      </div>

      <div className="flex flex-row justify-between text-center items-center bg-[#2C5FFF] text-white mt-[14px] rounded-[11px] px-[15px] py-3 text-[24px] font-[400]">
        <div className="flex flex-row justify-start text-center items-center gap-[16px]">
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13C-2.44606e-08 14.6415 0.323322 16.267 0.951506 17.7835C1.57969 19.3001 2.50043 20.6781 3.66116 21.8388C4.8219 22.9996 6.19989 23.9203 7.71646 24.5485C9.23303 25.1767 10.8585 25.5 12.5 25.5C14.1415 25.5 15.767 25.1767 17.2835 24.5485C18.8001 23.9203 20.1781 22.9996 21.3388 21.8388C22.4996 20.6781 23.4203 19.3001 24.0485 17.7835C24.6767 16.267 25 14.6415 25 13C25 9.68479 23.683 6.50537 21.3388 4.16117C18.9946 1.81696 15.8152 0.5 12.5 0.5C9.18479 0.5 6.00537 1.81696 3.66116 4.16117C1.31696 6.50537 4.94004e-08 9.68479 0 13Z"
              fill="#FCC62D"
            />
            <path
              d="M6.94531 7.44388L7.71337 7.06054C7.92506 6.95476 8.16028 6.90482 8.39669 6.91547C8.63311 6.92612 8.86288 6.997 9.06421 7.12138C9.26554 7.24577 9.43174 7.41954 9.54706 7.6262C9.66237 7.83286 9.72296 8.06556 9.72309 8.30221V17.1661C9.72309 17.9028 10.0157 18.6093 10.5367 19.1303C11.0576 19.6512 11.7642 19.9439 12.5009 19.9439H13.1953C14.1162 19.9439 14.9994 19.5781 15.6505 18.9269C16.3017 18.2757 16.6675 17.3925 16.6675 16.4717V15.7772H15.2786M6.94531 11.6105H16.6675"
              stroke="#005529"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[24px] font-[500] whitespace-nowrap">First Travel</p>
        </div>
        <p className="text-[24px] w-full pr-2">Expiring in - 10 May 25</p>
        <p className="text-[24px] font-[500] text-end">500</p>
      </div>


      <div className="flex flex-row justify-between text-center items-center bg-[#2C5FFF] text-white mt-[17px] rounded-[11px] px-[15px] py-3 text-[16px] font-[400]">
        <div className="flex flex-row justify-start text-center items-center gap-[16px]">
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13C-2.44606e-08 14.6415 0.323322 16.267 0.951506 17.7835C1.57969 19.3001 2.50043 20.6781 3.66116 21.8388C4.8219 22.9996 6.19989 23.9203 7.71646 24.5485C9.23303 25.1767 10.8585 25.5 12.5 25.5C14.1415 25.5 15.767 25.1767 17.2835 24.5485C18.8001 23.9203 20.1781 22.9996 21.3388 21.8388C22.4996 20.6781 23.4203 19.3001 24.0485 17.7835C24.6767 16.267 25 14.6415 25 13C25 9.68479 23.683 6.50537 21.3388 4.16117C18.9946 1.81696 15.8152 0.5 12.5 0.5C9.18479 0.5 6.00537 1.81696 3.66116 4.16117C1.31696 6.50537 4.94004e-08 9.68479 0 13Z"
              fill="#FCC62D"
            />
            <path
              d="M6.94531 7.44388L7.71337 7.06054C7.92506 6.95476 8.16028 6.90482 8.39669 6.91547C8.63311 6.92612 8.86288 6.997 9.06421 7.12138C9.26554 7.24577 9.43174 7.41954 9.54706 7.6262C9.66237 7.83286 9.72296 8.06556 9.72309 8.30221V17.1661C9.72309 17.9028 10.0157 18.6093 10.5367 19.1303C11.0576 19.6512 11.7642 19.9439 12.5009 19.9439H13.1953C14.1162 19.9439 14.9994 19.5781 15.6505 18.9269C16.3017 18.2757 16.6675 17.3925 16.6675 16.4717V15.7772H15.2786M6.94531 11.6105H16.6675"
              stroke="#005529"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[24px] font-[500]">20th Travel</p>
        </div>
        <p className="text-[24px]">Expiring in - 10 May 25</p>
        <p className="text-[24px] text-end  font-[500]">915</p>
      </div>
    </div>
  );
}

export default RewardCoin;
