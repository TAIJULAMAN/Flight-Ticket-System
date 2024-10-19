import React from "react";
import Link from "next/link";


export default function MyComBooking({ flight }: any) {
  return (
    <div
      style={{ boxShadow: "0px 4px 13.6px 0px #143C7736" }}
      className=" bg-white relative pb-4 pt-3 pr-[37px] rounded-[11px] ms-3 pl-[37px]">
      <div className="w-[76px]"></div>
      <div>
        <div className="flex gap-3 text-[14px] font-[400] items-center">
          <p>
            Payment: <span className="text-red-500 font-[600]">Paid</span>
          </p>
          <p>
            Booking: <span className="  primary-text font-[500]">ticketed</span>
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between flex-col lg:flex-row">
          <p className="flex items-center text-[24px] font-[500] text-gray-700 gap-2">
            <span>DAC</span>
            <span className="flex justify-center items-center">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.0094 11.8301H0.937845C0.930715 11.8336 0.924704 11.839 0.920497 11.8457C0.91629 11.8524 0.914063 11.8602 0.914062 11.8681C0.914063 11.876 0.91629 11.8838 0.920497 11.8905C0.924704 11.8972 0.930715 11.9026 0.937845 11.906L7.32231 18.2905"
                  stroke="#254FD4"
                  stroke-width="1.68678"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M0.886719 8.1699H22.9582C22.9653 8.16645 22.9714 8.16105 22.9756 8.15434C22.9798 8.14763 22.982 8.13987 22.982 8.13195C22.982 8.12403 22.9798 8.11626 22.9756 8.10955C22.9714 8.10284 22.9653 8.09744 22.9582 8.09399L16.5738 1.70953"
                  stroke="#254FD4"
                  stroke-width="1.68678"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span>DMC</span>
          </p>
          <p className="flex items-center text-[24px] font-[500] primary-text gap-2">
            <span>BDT</span>

            <span>16,656</span>
          </p>
        </div>
        <div className="flex items-center flex-col md:flex-row justify-between gap-4">
          <div className="pt-4 text-lg pb-5">
            <p className="flex items-center gap-2 text-[#464646]">
              <span className="primary-text flex items-center  justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                >
                  <path
                    d="M3.88672 6C4.98984 6 5.88672 5.10313 5.88672 4C5.88672 2.89687 4.98984 2 3.88672 2C2.78359 2 1.88672 2.89687 1.88672 4C1.88672 5.10313 2.78359 6 3.88672 6ZM17.8867 6C18.9898 6 19.8867 5.10313 19.8867 4C19.8867 2.89687 18.9898 2 17.8867 2C16.7836 2 15.8867 2.89687 15.8867 4C15.8867 5.10313 16.7836 6 17.8867 6ZM18.8867 7H16.8867C16.3367 7 15.8398 7.22188 15.4773 7.58125C16.7367 8.27188 17.6305 9.51875 17.8242 11H19.8867C20.4398 11 20.8867 10.5531 20.8867 10V9C20.8867 7.89687 19.9898 7 18.8867 7ZM10.8867 7C12.8211 7 14.3867 5.43437 14.3867 3.5C14.3867 1.56562 12.8211 0 10.8867 0C8.95234 0 7.38672 1.56562 7.38672 3.5C7.38672 5.43437 8.95234 7 10.8867 7ZM13.2867 8H13.0273C12.3773 8.3125 11.6555 8.5 10.8867 8.5C10.118 8.5 9.39922 8.3125 8.74609 8H8.48672C6.49922 8 4.88672 9.6125 4.88672 11.6V12.5C4.88672 13.3281 5.55859 14 6.38672 14H15.3867C16.2148 14 16.8867 13.3281 16.8867 12.5V11.6C16.8867 9.6125 15.2742 8 13.2867 8ZM6.29609 7.58125C5.93359 7.22188 5.43672 7 4.88672 7H2.88672C1.78359 7 0.886719 7.89687 0.886719 9V10C0.886719 10.5531 1.33359 11 1.88672 11H3.94609C4.14297 9.51875 5.03672 8.27188 6.29609 7.58125Z"
                    fill="#254FD4"
                  />
                </svg>
              </span>
              1 Traveler
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-[#464646]">
              <span className="text-[16px] font-[400] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <path
                    d="M4.63672 9.5C4.42422 9.5 4.24622 9.428 4.10272 9.284C3.95922 9.14 3.88722 8.962 3.88672 8.75C3.88622 8.538 3.95822 8.36 4.10272 8.216C4.24722 8.072 4.42522 8 4.63672 8C4.84822 8 5.02647 8.072 5.17147 8.216C5.31647 8.36 5.38822 8.538 5.38672 8.75C5.38522 8.962 5.31322 9.14025 5.17072 9.28475C5.02822 9.42925 4.85022 9.501 4.63672 9.5ZM7.63672 9.5C7.42422 9.5 7.24622 9.428 7.10272 9.284C6.95922 9.14 6.88722 8.962 6.88672 8.75C6.88622 8.538 6.95822 8.36 7.10272 8.216C7.24722 8.072 7.42522 8 7.63672 8C7.84822 8 8.02647 8.072 8.17147 8.216C8.31647 8.36 8.38822 8.538 8.38672 8.75C8.38522 8.962 8.31322 9.14025 8.17072 9.28475C8.02822 9.42925 7.85022 9.501 7.63672 9.5ZM10.6367 9.5C10.4242 9.5 10.2462 9.428 10.1027 9.284C9.95922 9.14 9.88722 8.962 9.88672 8.75C9.88622 8.538 9.95822 8.36 10.1027 8.216C10.2472 8.072 10.4252 8 10.6367 8C10.8482 8 11.0265 8.072 11.1715 8.216C11.3165 8.36 11.3882 8.538 11.3867 8.75C11.3852 8.962 11.3132 9.14025 11.1707 9.28475C11.0282 9.42925 10.8502 9.501 10.6367 9.5ZM2.38672 15.5C1.97422 15.5 1.62122 15.3533 1.32772 15.0597C1.03422 14.7662 0.887219 14.413 0.886719 14V3.5C0.886719 3.0875 1.03372 2.7345 1.32772 2.441C1.62172 2.1475 1.97472 2.0005 2.38672 2H3.13672V0.5H4.63672V2H10.6367V0.5H12.1367V2H12.8867C13.2992 2 13.6525 2.147 13.9465 2.441C14.2405 2.735 14.3872 3.088 14.3867 3.5V14C14.3867 14.4125 14.24 14.7657 13.9465 15.0597C13.653 15.3538 13.2997 15.5005 12.8867 15.5H2.38672ZM2.38672 14H12.8867V6.5H2.38672V14Z"
                    fill="#254FD4"
                  />
                </svg>
              </span>
              <span>11 May 24</span> - <span>13 May 24</span>
            </p>
          </div>
          <div>
            <p className="text-[16px] font-[400] text-[#464646]">
              Airline PNR: <span className="text-[16px] font-[500]">Processing</span>
            </p>
          </div>
          <div>
            <p className="text-[16px] font-[400] text-[#464646]">
              Reservation PNR: <span className="text-[16px] font-[500]">056MV9S</span>
            </p>
          </div>
        </div>
        <div className="mb-8 grid w-full md:grid-cols-3  mt-4 lg:mt-0 lg:grid-cols-5 gap-3 items-center">
          <button className="badge-btn">Flight Details</button>
          <button className="badge-btn">Pricing</button>
          <button className="badge-btn">Travelers</button>
          <button className="badge-btn">Baggages</button>
          <button className="badge-btn px-2">Cancelation Policy</button>
        </div>

        <div className="w-full mb-1 flex justify-between items-center gap-5">
          <Link
            href={"/booking/refund"}
            className="px-6 py-[9px] w-full cursor-pointer whitespace-nowrap bg-[#CCD1E1] text-[16px] font-[500]  rounded-lg  flex items-center justify-center uppercase ">
            Refund
          </Link>
          <button className="px-6 py-[9px] w-full cursor-pointer whitespace-nowrap bg-[#D8F5E6] text-[16px] font-[500]  rounded-lg  flex items-center justify-center uppercase ">
            Send Via Mail
          </button>
        </div>
      </div>
    </div>
  );
}
