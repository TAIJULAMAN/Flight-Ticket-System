"use client";
import passwordImage from "@assets/profiles/password.png";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";

import { CgPassword } from "react-icons/cg";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    router.push("/b2c");
  };
  return (
    <div className="min-h-[100vh] pt-28 main-container flex items-center justify-center ">
      <div className=" py-10  primary-shadow max-w-3xl mx-6 w-full lg:mx-auto my-10">
        <div className="flex justify-center flex-col items-center">
          <p className="text-center font-semibold text-[1.5rem]">Welcome To Travo</p>
        </div>
        <form
          onSubmit={handleLogin}
          className=" mt-10 space-y-4 lg:px-16 px-5">
          <div className="w-full">
            <label
              htmlFor="new"
              className="text-lg ps-[2px]">
              Email
            </label>
            <div className="relative flex mt-1  items-center">
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="border bg-transparent border-gray-400 rounded-lg w-full  pl-14 pr-5 py-3 transition-all duration-300 outline-none focus:ring focus:ring-blue-300"
              />
              <span className="absolute text-2xl left-4 flex items-center justify-center cursor-pointer  transform -translateY-1/2">
                <CgPassword />
              </span>
            </div>
          </div>

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

          <div>
            <button className="primary-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
