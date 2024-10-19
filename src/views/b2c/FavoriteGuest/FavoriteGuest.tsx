"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaChevronDown, FaEdit } from "react-icons/fa";
import ResponsiveModal from "@/components/Modals/ResponsiveModal";
import { FaEye } from "react-icons/fa";
import AddFavoriteGuest from "./AddFavoriteGuest";
import Link from "next/link";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
export default function FavoriteGuest() {
  const [isAddGuest, setIsAddGuest] = useState(false);
  const [isGuestDetails, setIsGuestDetails] = useState(false);

  const handleDetails = (id: any) => {
    setIsGuestDetails(true);
  };
  return (
    <div className="mt-[2px]">
      <div>
        <Link
          items-center
          py-3
          href={"/b2c/favorite-guest/add"}
          className="bg-[#254FD4] w-full font-[500] primary-radius text-[24px]  text-white p-[10px] gap-2 flex items-center justify-center place-items-center">
          <FaPlus className="mt-[1px] text-[24px]" /> Add Traveler
        </Link>
      </div>

      <div className="mt-[25px] grid gap-[25px]">
        <Accordion className=" overflow-hidden rounded-none shadow-none">
          <AccordionSummary
            className="bg-[#D5DFFF] cursor-pointer py-3  rounded-lg flex justify-between  font-[500]  px-6  w-full "
            expandIcon={
              <svg
                width="21"
                height="13"
                viewBox="0 0 21 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.46754 0.00732422L10.5002 8.03994L18.5328 0.00732422L21.0003 2.49236L10.5002 12.9925L0 2.49236L2.46754 0.00732422Z"
                  fill="#254FD4"
                />
              </svg>
            }
            aria-controls="panel1-content"
            id="panel1-header">
            <button className="cursor-pointer dark-blue-text bg-transparent   flex justify-between items-center  text-[24px] font-[500]   w-full ">
              <span>Harun Zan</span>
            </button>
          </AccordionSummary>
          <AccordionDetails className="  mt-3 w-full  rounded-lg bg-[#f8f9ff]">
            <div className=" px-6 pt-8 pb-6">
              <div className="grid grid-cols-1 items-start mb-10 lg:grid-cols-2">
                <div className="w-full grid  gap-[15px]">
                  <div className="w-full grid grid-cols-2">
                    <p className="text-[#646464] font-[400]">Full Name</p>
                    <p className="">Jaki Zan</p>
                  </div>
                  <div className="w-full grid grid-cols-2">
                    <p className="text-[#646464] font-[400]">Gender</p>
                    <p className="">Male</p>
                  </div>
                  <div className="w-full grid grid-cols-2">
                    <p className="text-[#646464] font-[400]">Date of Birth</p>
                    <p className=""> 23rd February, 1999</p>
                  </div>
                  <div className="w-full grid grid-cols-2">
                    <p className="text-[#646464] font-[400]">Nationality</p>
                    <p className="">Bangladeshi</p>
                  </div>
                </div>
                <div className="w-full grid  gap-[15px]">
                  <div className="w-full grid grid-cols-2">
                    <p className="text-[#646464] font-[400]">Frequent Flyer Number</p>
                    <p className="">52</p>
                  </div>
                  <div className="w-full grid grid-cols-2">
                    <p className="text-[#646464] font-[400]">Passport Number</p>
                    <p className="">656664646</p>
                  </div>
                  <div className="w-full grid grid-cols-2">
                    <p className="text-[#646464] font-[400]">Passport Expiry Date</p>
                    <p className="">12/06/26</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-2 gap-5">
                <button className="px-6 py-2 rounded-lg  cursor-pointer text-sm w-full font-[500] bg-[#254FD4] text-white flex items-center justify-center gap-2 transition-all duration-300">
                  <FaEye />
                  <span className="mb-[2px]">Passport</span>
                </button>
                <button className="px-6 py-2 rounded-lg  cursor-pointer text-sm w-full font-[500] bg-[#254FD4] text-white flex items-center justify-center gap-2 transition-all duration-300">
                  {" "}
                  <FaEye /> <span className="mb-[2px]"> View Visa</span>
                </button>
                <button className="edit-btn">Edit</button>
                <button className="remove-btn">Remove</button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <ResponsiveModal
        open={isAddGuest}
        maxWidth={"md"}
        setOpen={setIsAddGuest}>
        <AddFavoriteGuest />
      </ResponsiveModal>
    </div>
  );
}
