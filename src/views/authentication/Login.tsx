"use client";

import { AppDispatch } from "@/redux-store";
import { useGetUsersQuery } from "@/redux-store/api/usersApi";
import { loginUser } from "@/redux-store/slice/userSlice";
import useAlert from "@/utils/useAlert";
import Link from "next/link";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import { useDispatch } from "react-redux";

interface LoginProps {
  handleCloseLogin: () => void;
  handleSignUp: () => void;
}

const Login: React.FC<LoginProps> = ({ handleSignUp, handleCloseLogin }) => {
  const [isShow, setIsShow] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { data } = useGetUsersQuery();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const handleReset = () => {
    handleCloseLogin();
    router.push("/reset-password");
  };
  const { showAlert } = useAlert();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    router.push("/b2c/profile");
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      return;
    }
    const credential = { email, password };

    try {
      const resultAction = await dispatch(loginUser({ email, password })).unwrap();
      router.push("/b2c");
      handleCloseLogin();
      showAlert("success", "Login successful! Redirecting to dashboard...");
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-[11px]	shadow-md w-[489px] h-[517px]  my-10 ">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#162F7F]">Welcome to Travo</h2>
      <form
        onSubmit={handleLogin}
        className="space-y-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative flex mt-2  items-center">
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full pl-10 p-3  border-[1.5px] rounded-[8px] border-[#959595] focus:outline-none"
              placeholder="Enter email address"
              required
            />
            <span className="absolute text-2xl left-4 flex items-center justify-center cursor-pointer  transform -translateY-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.583333 0.75L0 1.33333V10.6667L0.583333 11.25H13.4167L14 10.6667V1.33333L13.4167 0.75H0.583333ZM1.16667 2.65206V10.0833H12.8333V2.65186L6.99992 7.95502L1.16667 2.65206ZM11.9077 1.91667H2.09211L6.99992 6.37831L11.9077 1.91667Z"
                  fill="#444444"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative flex mt-2  items-center">
            <input
              name="password"
              type={`${show ? "text" : "password"}`}
              id="password"
              className="block w-full pl-10 p-3  border-[1.5px] rounded-[8px] border-[#959595] focus:outline-none"
              placeholder="Enter Password"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 flex items-center justify-center cursor-pointer  transform -translateY-1/2">
              {!show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none">
                  <path
                    d="M9.50017 10.0753C11.3736 10.0753 12.8923 8.55658 12.8923 6.68315C12.8923 4.80973 11.3736 3.29102 9.50017 3.29102C7.62674 3.29102 6.10803 4.80973 6.10803 6.68315C6.10803 8.55658 7.62674 10.0753 9.50017 10.0753Z"
                    stroke="#254FD4"
                  />
                  <path
                    d="M17.4356 5.6504C17.8119 6.10717 18 6.33551 18 6.68325C18 7.031 17.8119 7.25934 17.4356 7.71611C16.0593 9.38717 13.0236 12.4983 9.49999 12.4983C5.9763 12.4983 2.94062 9.38717 1.5643 7.71611C1.1881 7.25934 1 7.031 1 6.68325C1 6.33551 1.1881 6.10717 1.5643 5.6504C2.94062 3.97937 5.9763 0.868164 9.49999 0.868164C13.0236 0.868164 16.0593 3.97937 17.4356 5.6504Z"
                    stroke="#254FD4"
                  />
                </svg>
              ) : (
                <FaRegEyeSlash />
              )}
            </span>
            <span className="absolute text-2xl left-4 flex items-center justify-center cursor-pointer  transform -translateY-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none">
                <path
                  d="M1 6.89981C1 4.25994 1 2.94001 1.8201 2.1199C2.6402 1.2998 3.96013 1.2998 6.6 1.2998H9.4C12.0398 1.2998 13.3598 1.2998 14.1799 2.1199C15 2.94001 15 4.25994 15 6.89981C15 9.53965 15 10.8596 14.1799 11.6797C13.3598 12.4998 12.0398 12.4998 9.4 12.4998H6.6C3.96013 12.4998 2.6402 12.4998 1.8201 11.6797C1 10.8596 1 9.53965 1 6.89981Z"
                  stroke="#444444"
                  stroke-width="0.861539"
                />
                <path
                  d="M7.99993 5.49951V8.29951M6.78725 6.19951L9.21212 7.59951M9.21198 6.19951L6.78711 7.59951"
                  stroke="#444444"
                  stroke-width="0.861539"
                  stroke-linecap="round"
                />
                <path
                  d="M4.31272 5.49951V8.29951M3.10001 6.19951L5.52489 7.59951M5.52472 6.19951L3.09985 7.59951"
                  stroke="#444444"
                  stroke-width="0.861539"
                  stroke-linecap="round"
                />
                <path
                  d="M11.6875 5.49951V8.29951M10.4747 6.19951L12.8996 7.59951M12.8995 6.19951L10.4746 7.59951"
                  stroke="#444444"
                  stroke-width="0.861539"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-3 w-3 text-[#162F7F] focus:ring-[#162F7F] border-[#4C4C4C] rounded"
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-xs text-[#444] font-light">
              Remember me
            </label>
          </div>
          <button
            onClick={handleReset}
            className="text-[#C82323] bg-transparent text-xs underline font-medium">
            Forgot Password?
          </button>
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-[342px] cursor-pointer bg-[#254FD4] text-white text-[18px] py-[5px] rounded-[8px] hover:bg-blue-700">
            {loading ? "Logging In..." : "Login"}
          </button>
        </div>
      </form>
      <div className="">
        <p className=" mt-6 text-center text-[#222] text-[16px]">Or, Sign in with</p>
        <div className="flex justify-center gap-2 mt-4">
          <button className="w-[134px] text-xs bg-[#D5DFFF] p-1 rounded-[6px]">
            <div className="flex items-center justify-center gap-[11px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none">
                <g clip-path="url(#clip0_203_6780)">
                  <path
                    d="M19.9501 10.5001C19.9501 5.05007 15.5319 0.631866 10.0819 0.631866C4.63183 0.631866 0.213623 5.05007 0.213623 10.5001C0.213623 15.4256 3.82232 19.5082 8.53997 20.2485V13.3527H6.03435V10.5001H8.53997V8.32603C8.53997 5.85279 10.0133 4.48666 12.2674 4.48666C13.347 4.48666 14.4763 4.6794 14.4763 4.6794V7.10791H13.232C12.0061 7.10791 11.6238 7.86862 11.6238 8.64906V10.5001H14.3607L13.9232 13.3527H11.6238V20.2485C16.3414 19.5082 19.9501 15.4257 19.9501 10.5001Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M13.9232 13.3526L14.3608 10.5001H11.6239V8.649C11.6239 7.86849 12.0062 7.10786 13.2321 7.10786H14.4764V4.67934C14.4764 4.67934 13.3471 4.4866 12.2674 4.4866C10.0133 4.4866 8.54004 5.85274 8.54004 8.32597V10.5001H6.03442V13.3526H8.54004V20.2485C9.05012 20.3284 9.56565 20.3685 10.082 20.3683C10.5983 20.3685 11.1138 20.3284 11.6239 20.2485V13.3526H13.9232Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_203_6780">
                    <rect
                      width="19.7365"
                      height="19.7365"
                      fill="white"
                      transform="translate(0.213379 0.631744)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Facebook
            </div>
          </button>
          <button className="w-[134px] text-xs bg-[#D5DFFF] p-1 rounded-[6px]">
            <div className="flex items-center justify-center gap-[11px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none">
                <path
                  d="M18.1451 8.88921H17.4827V8.85508H10.0815V12.1445H14.729C14.051 14.0594 12.229 15.4339 10.0815 15.4339C7.35659 15.4339 5.14733 13.2247 5.14733 10.4998C5.14733 7.77492 7.35659 5.56567 10.0815 5.56567C11.3393 5.56567 12.4836 6.04016 13.3548 6.81523L15.6809 4.4892C14.2121 3.12039 12.2475 2.27625 10.0815 2.27625C5.54 2.27625 1.85791 5.95834 1.85791 10.4998C1.85791 15.0413 5.54 18.7233 10.0815 18.7233C14.6229 18.7233 18.305 15.0413 18.305 10.4998C18.305 9.94841 18.2483 9.41017 18.1451 8.88921Z"
                  fill="#FFC107"
                />
                <path
                  d="M2.80615 6.67214L5.508 8.65361C6.23907 6.84361 8.0096 5.56567 10.0815 5.56567C11.3393 5.56567 12.4836 6.04016 13.3549 6.81523L15.6809 4.4892C14.2122 3.12039 12.2476 2.27625 10.0815 2.27625C6.92286 2.27625 4.1836 4.05952 2.80615 6.67214Z"
                  fill="#FF3D00"
                />
                <path
                  d="M10.0818 18.7235C12.2059 18.7235 14.136 17.9106 15.5952 16.5886L13.05 14.4349C12.1967 15.0839 11.1539 15.4349 10.0818 15.4341C7.94281 15.4341 6.12664 14.0702 5.44244 12.1668L2.76074 14.233C4.12174 16.8962 6.88568 18.7235 10.0818 18.7235Z"
                  fill="#4CAF50"
                />
                <path
                  d="M18.1454 8.88938H17.483V8.85526H10.0818V12.1447H14.7293C14.405 13.056 13.8208 13.8524 13.0488 14.4353L13.0501 14.4345L15.5953 16.5883C15.4152 16.7519 18.3053 14.6117 18.3053 10.5C18.3053 9.94858 18.2486 9.41034 18.1454 8.88938Z"
                  fill="#1976D2"
                />
              </svg>
              Google
            </div>
          </button>
        </div>
        <p className="text-center font-light text-[16px] text-[#656565] mt-5">
          Already have an account?{" "}
          <a
            onClick={handleSignUp}
            className="text-[#254FD4] font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
