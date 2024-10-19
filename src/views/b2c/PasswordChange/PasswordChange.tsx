"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import { CgPassword } from "react-icons/cg";

import ResponsiveModal from "@components/Modals/ResponsiveModal";
import Image from "next/image";
import passwordImage from "@assets/profiles/password.png";
import { useChangePasswordMutation } from "@/redux-store/api/usersApi";

export default function PasswordChange() {
  const [isShow, setIsShow] = useState(false);
  const [show, setShow] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [changePassword] = useChangePasswordMutation();

  const onSubmit = async (data: any) => {
    try {
      await changePassword({ formData: data, id: "userId" }).unwrap();
      alert("Password updated successfully");
    } catch (error) {
      console.error("Failed to update password: ", error);
    }
  };

  return (
    <div className="py-10 primary-shadow">
      <div className="flex justify-center flex-col items-center">
        <Image
          width={166}
          height={74}
          src={passwordImage}
          alt="passwordImage"
        />
        <p className="text-center font-semibold text-[1.5rem]">Change Password</p>
      </div>
      <form
        className="mt-10 space-y-4 lg:px-16 px-5"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <label
            htmlFor="old"
            className="text-lg ps-[2px]">
            Old Password
          </label>
          <div className="relative flex mt-1 items-center">
            <input
              type={`${show ? "text" : "password"}`}
              {...register("oldPassword", { required: true })}
              placeholder="********"
              className="border bg-transparent border-gray-400 rounded-lg w-full pl-14 pr-5 py-3 transition-all duration-300 outline-none focus:ring focus:ring-blue-300"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 flex items-center justify-center cursor-pointer transform -translateY-1/2">
              <svg
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.50005 9.89212C11.3735 9.89212 12.8922 8.37341 12.8922 6.49999C12.8922 4.62656 11.3735 3.10785 9.50005 3.10785C7.62662 3.10785 6.10791 4.62656 6.10791 6.49999C6.10791 8.37341 7.62662 9.89212 9.50005 9.89212Z"
                  stroke="#254FD4"
                />
                <path
                  d="M17.4356 5.46717C17.8119 5.92395 18 6.15228 18 6.50003C18 6.84777 17.8119 7.07611 17.4356 7.53288C16.0593 9.20395 13.0236 12.3151 9.49999 12.3151C5.9763 12.3151 2.94062 9.20395 1.5643 7.53288C1.1881 7.07611 1 6.84777 1 6.50003C1 6.15228 1.1881 5.92395 1.5643 5.46717C2.94062 3.79615 5.9763 0.684937 9.49999 0.684937C13.0236 0.684937 16.0593 3.79615 17.4356 5.46717Z"
                  stroke="#254FD4"
                />
              </svg>
            </span>
            <span className="absolute text-2xl left-4 flex items-center justify-center cursor-pointer transform -translateY-1/2">
              <CgPassword />
            </span>
          </div>
          {errors.oldPassword && <p className="text-red-500">Old password is required</p>}
        </div>

        <div className="w-full">
          <label
            htmlFor="new"
            className="text-lg ps-[2px]">
            New Password
          </label>
          <div className="relative flex mt-1 items-center">
            <input
              type={`${isShow ? "text" : "password"}`}
              {...register("newPassword", { required: true })}
              placeholder="********"
              className="border bg-transparent border-gray-400 rounded-lg w-full pl-14 pr-5 py-3 transition-all duration-300 outline-none focus:ring focus:ring-blue-300"
            />
            <span
              onClick={() => setIsShow(!isShow)}
              className="absolute right-4 flex items-center justify-center cursor-pointer transform -translateY-1/2">
              <svg
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.50005 9.89212C11.3735 9.89212 12.8922 8.37341 12.8922 6.49999C12.8922 4.62656 11.3735 3.10785 9.50005 3.10785C7.62662 3.10785 6.10791 4.62656 6.10791 6.49999C6.10791 8.37341 7.62662 9.89212 9.50005 9.89212Z"
                  stroke="#254FD4"
                />
                <path
                  d="M17.4356 5.46717C17.8119 5.92395 18 6.15228 18 6.50003C18 6.84777 17.8119 7.07611 17.4356 7.53288C16.0593 9.20395 13.0236 12.3151 9.49999 12.3151C5.9763 12.3151 2.94062 9.20395 1.5643 7.53288C1.1881 7.07611 1 6.84777 1 6.50003C1 6.15228 1.1881 5.92395 1.5643 5.46717C2.94062 3.79615 5.9763 0.684937 9.49999 0.684937C13.0236 0.684937 16.0593 3.79615 17.4356 5.46717Z"
                  stroke="#254FD4"
                />
              </svg>
            </span>
            <span className="absolute text-2xl left-4 flex items-center justify-center cursor-pointer transform -translateY-1/2">
              <CgPassword />
            </span>
          </div>
          {errors.newPassword && <p className="text-red-500">New password is required</p>}
        </div>

        <div className="w-full">
          <label
            htmlFor="confirm"
            className="text-lg ps-[2px]">
            Confirm New Password
          </label>
          <div className="relative flex mt-1 items-center">
            <input
              type={`${show ? "text" : "password"}`}
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("newPassword") || "Passwords do not match",
              })}
              placeholder="********"
              className="border bg-transparent border-gray-400 rounded-lg w-full pl-14 pr-5 py-3 transition-all duration-300 outline-none focus:ring focus:ring-blue-300"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 flex items-center justify-center cursor-pointer transform -translateY-1/2">
              <svg
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.50005 9.89212C11.3735 9.89212 12.8922 8.37341 12.8922 6.49999C12.8922 4.62656 11.3735 3.10785 9.50005 3.10785C7.62662 3.10785 6.10791 4.62656 6.10791 6.49999C6.10791 8.37341 7.62662 9.89212 9.50005 9.89212Z"
                  stroke="#254FD4"
                />
                <path
                  d="M17.4356 5.46717C17.8119 5.92395 18 6.15228 18 6.50003C18 6.84777 17.8119 7.07611 17.4356 7.53288C16.0593 9.20395 13.0236 12.3151 9.49999 12.3151C5.9763 12.3151 2.94062 9.20395 1.5643 7.53288C1.1881 7.07611 1 6.84777 1 6.50003C1 6.15228 1.1881 5.92395 1.5643 5.46717C2.94062 3.79615 5.9763 0.684937 9.49999 0.684937C13.0236 0.684937 16.0593 3.79615 17.4356 5.46717Z"
                  stroke="#254FD4"
                />
              </svg>
            </span>
            <span className="absolute text-2xl left-4 flex items-center justify-center cursor-pointer transform -translateY-1/2">
              <CgPassword />
            </span>
          </div>
          {errors?.confirmPassword && <p className="text-red-500">{errors?.confirmPassword?.message as string}</p>}
        </div>

        <p className="text-gray-600 font-[300] mt-1">
          Your password must contain at least one uppercase<strong className="text-[#162F7F] font-[500]">(A)</strong>,
          one lowercase<strong>(a)</strong>, one special character
          <strong className="text-[#162F7F] font-[500]">(#,&%)</strong> and one digit
          <strong className="text-[#162F7F] font-[500]">(2)</strong>
        </p>

        <div className="pt-3 max-w-[581px] mx-auto">
          <button
            type="submit"
            className="bg-[#1D3FAA] text-[24px] cursor-pointer w-full  rounded-lg py-3 px-5 text-white flex items-center justify-center ">
            Update Password
          </button>
        </div>
      </form>

      <p className="text-center text-lg w-full flex items-center gap-2 justify-center mt-6">
        Forgot Password?
        <button
          onClick={() => setIsReset(true)}
          className="text-red-600 cursor-pointer text-lg bg-transparent font-semibold">
          Reset Here
        </button>
      </p>

      <ResponsiveModal
        open={isReset}
        setOpen={setIsReset}
        maxWidth={"sm"}>
        <div className="py-8 px-10 flex flex-col justify-center items-center">
          <p className="text-[2rem]">Reset Password</p>
          <p>
            A link to reset password will be sent to <span className="primary-text">sohag@gmail.com</span>
          </p>
          <button className="primary-btn mt-4">Check Email</button>
        </div>
      </ResponsiveModal>
    </div>
  );
}
