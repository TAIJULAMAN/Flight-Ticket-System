"use client";
import passwordImage from "@assets/profiles/password.png";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";

import { CgPassword } from "react-icons/cg";

export default function ResetPassword() {
  const [isShow, setIsShow] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className=" py-10  primary-shadow max-w-3xl mx-6 lg:mx-auto my-10">
      <div className="flex justify-center flex-col items-center">
        <Image
          width={166}
          height={74}
          src={passwordImage}
          alt="passwordImage"
        />
        <p className="text-center font-semibold text-[1.5rem]">Reset Password</p>
      </div>
      <form className=" mt-10 space-y-4 lg:px-16 px-5">
        <div className="w-full">
          <label
            htmlFor="new"
            className="text-lg ps-[2px]">
            New Password
          </label>
          <div className="relative flex mt-1  items-center">
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="********"
              className="border bg-transparent border-gray-400 rounded-lg w-full  pl-14 pr-5 py-3 transition-all duration-300 outline-none focus:ring focus:ring-blue-300"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 flex items-center justify-center cursor-pointer  transform -translateY-1/2">
              {show ? <FaEye /> : <FaRegEyeSlash />}
            </span>
            <span className="absolute text-2xl left-4 flex items-center justify-center cursor-pointer  transform -translateY-1/2">
              <CgPassword />
            </span>
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="old"
            className="text-lg ps-[2px]">
            Confirm New Password
          </label>
          <div className="relative flex mt-1  items-center">
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="********"
              className="border bg-transparent border-gray-400 rounded-lg w-full  pl-14 pr-5 py-3 transition-all duration-300 outline-none focus:ring focus:ring-blue-300"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 flex items-center justify-center cursor-pointer  transform -translateY-1/2">
              {show ? <FaEye /> : <FaRegEyeSlash />}
            </span>
            <span className="absolute text-2xl left-4 flex items-center justify-center cursor-pointer  transform -translateY-1/2">
              <CgPassword />
            </span>
          </div>
        </div>
        <p className="text-gray-600 mt-1">
          You password must contain at least one uppercase<strong>(A)</strong>, one lowercase<strong>(a)</strong>, one
          special character
          <strong>(#,&%) </strong>and one digit <strong>(2)</strong>
        </p>

        <div className="pt-3 max-w-sm mx-auto">
          <button className="primary-btn">Reset Password</button>
        </div>
      </form>
    </div>
  );
}
