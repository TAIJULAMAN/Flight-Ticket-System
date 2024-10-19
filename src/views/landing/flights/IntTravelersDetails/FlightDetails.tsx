import ResponsiveDialog from "@/components/Modals/ResponsiveModal";
import Image from "next/image";
import React from "react";
import usBanglaLogo from "@assets/landing/us-bangla.png";
import { Divider } from "@mui/material";
export default function FlightDetails({ open, setOpen }: any) {
  return (
    <>
      <ResponsiveDialog
        open={open}
        maxWidth={"md"}
        setOpen={setOpen}>
        <div className="px-2">
          <h1 className="text-[18px] font-[400] text-[#222]">Flight Details</h1>
          <Divider sx={{ bgcolor: "#254FD4", marginTop: "8px" }} />
          <div className="py-6 px-[60px]">
            <div>
              <div>
                <div>
                  <div className="flex gap-4">
                    <div className="w-1/4 flex justify-center items-center">
                      <div>
                        <Image
                          src={usBanglaLogo}
                          alt="airline logo"
                        />
                        <h1 className="text-sm text-[#222] mt-5">Us Bangla Airlines</h1>
                      </div>
                    </div>
                    <div className="w-3/4 flex justify-between items-center">
                      <div>
                        <h1 className="text-sm font-normal mb-1">Depart</h1>
                        <h1 className="text-[16px] font-semibold text-[#162F7F]">Dhaka (DAC)</h1>
                        <p className="text-[10px] font-light my-[6px] ">
                          Terminal 2 <br />
                          Hazrat Shahjalal <br />
                          International Airport <br />
                          Dhaka, Bangladesh
                        </p>
                        <p className="text-xs mb-[2px] ">5:00 am</p>
                        <p className="text-xs">14 April, Thursday</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="30"
                          viewBox="0 0 38 30"
                          fill="none">
                          <path
                            d="M36.3373 17.8593H1.75113C1.73996 17.8647 1.73054 17.8731 1.72395 17.8836C1.71736 17.8942 1.71387 17.9063 1.71387 17.9187C1.71387 17.9311 1.71736 17.9433 1.72395 17.9538C1.73054 17.9643 1.73996 17.9728 1.75113 17.9782L11.7556 27.9827"
                            stroke="#254FD4"
                            stroke-width="2.64319"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                          />
                          <path
                            d="M1.67188 12.1234H36.258C36.2691 12.118 36.2786 12.1096 36.2852 12.099C36.2918 12.0885 36.2953 12.0764 36.2953 12.0639C36.2953 12.0515 36.2918 12.0394 36.2852 12.0288C36.2786 12.0183 36.2691 12.0099 36.258 12.0045L26.2536 2"
                            stroke="#254FD4"
                            stroke-width="2.64319"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-sm font-normal mb-1">Arrive</h1>
                        <h1 className="text-[16px] font-semibold text-[#162F7F]">Singapore (SMC)</h1>
                        <p className="text-[10px] font-light my-[6px] ">
                          Terminal 0 <br />
                          Changi <br />
                          Singapore, Singapore
                        </p>
                        <p className="text-xs mb-[2px] ">5:00 am</p>
                        <p className="text-xs">15 April, Friday</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-3">
                    <div className="flex gap-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none">
                          <path
                            d="M5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9ZM5 0C5.65661 0 6.30679 0.129329 6.91342 0.380602C7.52005 0.631876 8.07124 1.00017 8.53553 1.46447C8.99983 1.92876 9.36812 2.47995 9.6194 3.08658C9.87067 3.69321 10 4.34339 10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C2.235 10 0 7.75 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0ZM5.25 2.5V5.125L7.5 6.46L7.125 7.075L4.5 5.5V2.5H5.25Z"
                            fill="#254FD4"
                          />
                        </svg>
                        <span className="text-[11px] text-[#464646] ml-1">Est Time: 5 Hrs 23 min </span>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none">
                          <path
                            d="M4.61227 11.5644C4.71157 11.879 4.86472 12.0902 5.17522 12.2518C5.48571 12.4133 5.74655 12.4175 6.06124 12.3182C6.37593 12.2189 6.58711 12.0657 6.74865 11.7552C6.91018 11.4447 6.91437 11.1839 6.81506 10.8692C6.71576 10.5545 6.51086 10.3164 6.25211 10.1818C5.99336 10.0472 5.68077 10.0161 5.36609 10.1154C5.0514 10.2147 4.84022 10.3678 4.67868 10.6783C4.51715 10.9888 4.51296 11.2497 4.61227 11.5644ZM0.807978 8.00706C0.673367 8.26581 0.642253 8.5784 0.741561 8.89308C0.840868 9.20777 1.04577 9.44588 1.30451 9.58049L5.07363 2.33562C4.81489 2.20101 4.5023 2.16989 4.18761 2.2692C3.87293 2.36851 3.63482 2.57341 3.50021 2.83215L0.807978 8.00706ZM10.5597 1.90194L8.48971 0.825053C8.3551 1.0838 8.32399 1.39639 8.42329 1.71107C8.5226 2.02576 8.7275 2.26387 8.98625 2.39848L8.17858 3.95095L5.59112 2.60484L1.82201 9.84971L3.99547 10.9804C4.02658 10.6679 4.10735 10.5126 4.16119 10.4091C4.37657 9.99512 4.72027 9.71364 5.1923 9.56468C5.66433 9.41572 6.10734 9.44893 6.52133 9.66431L10.5597 1.90194Z"
                            fill="#254FD4"
                          />
                        </svg>
                        <span className="text-[11px] text-[#464646] ml-1">Baggage: 3 Included </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-4 py-1 rounded-[29px] bg-[#ECF0FF]">
                  <p className="text-sm text-center text-[#162F7F]">
                    Change planes at Suvarnabhumi Intl Airport | Bangkok , TH | Connecting Time: 5H 20Min
                  </p>
                </div>
                <div>
                  <div className="flex gap-4">
                    <div className="w-1/4 flex justify-center items-center">
                      <div>
                        <Image
                          src={usBanglaLogo}
                          alt="airline logo"
                        />
                        <h1 className="text-sm text-[#222] mt-5">Us Bangla Airlines</h1>
                      </div>
                    </div>
                    <div className="w-3/4 flex justify-between items-center">
                      <div>
                        <h1 className="text-sm font-normal mb-1">Depart</h1>
                        <h1 className="text-[16px] font-semibold text-[#162F7F]">Singapore (SMC)</h1>
                        <p className="text-[10px] font-light my-[6px] ">
                          Terminal 0 <br />
                          Changi <br />
                          Singapore, Singapore
                        </p>
                        <p className="text-xs mb-[2px] ">5:00 am</p>
                        <p className="text-xs">15 April, Friday</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="30"
                          viewBox="0 0 38 30"
                          fill="none">
                          <path
                            d="M36.3373 17.8593H1.75113C1.73996 17.8647 1.73054 17.8731 1.72395 17.8836C1.71736 17.8942 1.71387 17.9063 1.71387 17.9187C1.71387 17.9311 1.71736 17.9433 1.72395 17.9538C1.73054 17.9643 1.73996 17.9728 1.75113 17.9782L11.7556 27.9827"
                            stroke="#254FD4"
                            stroke-width="2.64319"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                          />
                          <path
                            d="M1.67188 12.1234H36.258C36.2691 12.118 36.2786 12.1096 36.2852 12.099C36.2918 12.0885 36.2953 12.0764 36.2953 12.0639C36.2953 12.0515 36.2918 12.0394 36.2852 12.0288C36.2786 12.0183 36.2691 12.0099 36.258 12.0045L26.2536 2"
                            stroke="#254FD4"
                            stroke-width="2.64319"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-sm font-normal mb-1">Arrive</h1>
                        <h1 className="text-[16px] font-semibold text-[#162F7F]">Bangkok (BKK)</h1>
                        <p className="text-[10px] font-light my-[6px] ">
                          Terminal 2 <br />
                          Hazrat Shahjalal <br />
                          International Airport <br />
                          Dhaka, Bangladesh
                        </p>
                        <p className="text-xs mb-[2px] ">5:00 am</p>
                        <p className="text-xs">14 April, Thursday</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-3">
                    <div className="flex gap-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none">
                          <path
                            d="M5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9ZM5 0C5.65661 0 6.30679 0.129329 6.91342 0.380602C7.52005 0.631876 8.07124 1.00017 8.53553 1.46447C8.99983 1.92876 9.36812 2.47995 9.6194 3.08658C9.87067 3.69321 10 4.34339 10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C2.235 10 0 7.75 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0ZM5.25 2.5V5.125L7.5 6.46L7.125 7.075L4.5 5.5V2.5H5.25Z"
                            fill="#254FD4"
                          />
                        </svg>
                        <span className="text-[11px] text-[#464646] ml-1">Est Time: 5 Hrs 23 min </span>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none">
                          <path
                            d="M4.61227 11.5644C4.71157 11.879 4.86472 12.0902 5.17522 12.2518C5.48571 12.4133 5.74655 12.4175 6.06124 12.3182C6.37593 12.2189 6.58711 12.0657 6.74865 11.7552C6.91018 11.4447 6.91437 11.1839 6.81506 10.8692C6.71576 10.5545 6.51086 10.3164 6.25211 10.1818C5.99336 10.0472 5.68077 10.0161 5.36609 10.1154C5.0514 10.2147 4.84022 10.3678 4.67868 10.6783C4.51715 10.9888 4.51296 11.2497 4.61227 11.5644ZM0.807978 8.00706C0.673367 8.26581 0.642253 8.5784 0.741561 8.89308C0.840868 9.20777 1.04577 9.44588 1.30451 9.58049L5.07363 2.33562C4.81489 2.20101 4.5023 2.16989 4.18761 2.2692C3.87293 2.36851 3.63482 2.57341 3.50021 2.83215L0.807978 8.00706ZM10.5597 1.90194L8.48971 0.825053C8.3551 1.0838 8.32399 1.39639 8.42329 1.71107C8.5226 2.02576 8.7275 2.26387 8.98625 2.39848L8.17858 3.95095L5.59112 2.60484L1.82201 9.84971L3.99547 10.9804C4.02658 10.6679 4.10735 10.5126 4.16119 10.4091C4.37657 9.99512 4.72027 9.71364 5.1923 9.56468C5.66433 9.41572 6.10734 9.44893 6.52133 9.66431L10.5597 1.90194Z"
                            fill="#254FD4"
                          />
                        </svg>
                        <span className="text-[11px] text-[#464646] ml-1">Baggage: Included </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveDialog>
    </>
  );
}
