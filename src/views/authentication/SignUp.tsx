"use client";

type FormState = {
  phone?: string;
  country?: string;
};

import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import PhoneInput from "./PhoneInput";
import { useRouter } from "next/navigation";
import useAlert from "@/utils/useAlert";

interface SignUpProps {
  handleLogin: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ handleLogin }) => {
  const { showAlert } = useAlert();
  const [isShow, setIsShow] = useState(false);
  const [show, setShow] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>({
    phone: "",
    country: "",
  });

  const handleSingup = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const from = e.target;
    const email = from?.email.value;
    const phone = from?.phone.value;
    const phone_country_code = '+880'
    const password = from?.password.value;

    if (!phone) {
      showAlert("error", "Phone number not valid");
      return;
    }

    // console.log(email, formState?.phone, formState?.country);
    try {
      const response = await fetch("https://darktechteam.com/fts/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone, phone_country_code, password }),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("Signup failed");
        setLoading(false);
      }

      setLoading(false);
      router.push("/login");
      showAlert("success", "Signup successful! Redirecting to login...");
    } catch (error) {
      setLoading(false);
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="bg-white px-[14px] py-9 rounded-[12px]	shadow-md max-w-[489px] max-h-[612px] w-full ">
      <h2 className="text-[24px] font-[600] mb-6 text-center text-[#162F7F]">Welcome to Travo</h2>
      <form
        onSubmit={handleSingup}
        className="space-y-2 px-8">
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
              placeholder="Example@gmail.com"
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
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <div className="relative flex mt-2  items-center">
            {/* <PhoneInput
              formState={formState}
              setFormState={setFormState}
            /> */}
            <input
              type="number"
              id="phone"
              name="phone"
              className="block w-full pl-10 p-3  border-[1.5px] rounded-[8px] border-[#959595] focus:outline-none"
              placeholder="0142346657778"
              required
            />
            <span className="absolute text-2xl left-4 flex items-center justify-center cursor-pointer  transform -translateY-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none">
                <path
                  d="M7.42584 13.3743L7.3562 13.3564C-0.575053 10.8339 0.0198471 3.74943 0.390447 1.6357C0.41881 1.47124 0.479345 1.314 0.568585 1.17297C0.657824 1.03195 0.774013 0.909917 0.910494 0.813873C1.04698 0.71783 1.20107 0.64966 1.36394 0.613271C1.52681 0.576881 1.69526 0.572987 1.85964 0.601812L4.11684 1.17934C4.28097 1.22117 4.42876 1.31131 4.54106 1.4381C4.65337 1.56489 4.72502 1.72248 4.74673 1.89046L4.97739 3.58189C4.99924 3.74616 4.97234 3.91322 4.90005 4.06234C4.82775 4.21145 4.71324 4.33604 4.57074 4.42062L3.47283 5.07812C3.41095 5.88755 3.59919 6.69645 4.01209 7.39538C4.42499 8.09432 5.04261 8.64956 5.78141 8.98599L6.89571 8.33268C7.03973 8.25001 7.2049 8.21156 7.37063 8.22214C7.53635 8.23272 7.6953 8.29185 7.82763 8.39217L9.21376 9.4059C9.34788 9.50695 9.44888 9.64564 9.5039 9.80429C9.55891 9.96295 9.56545 10.1344 9.52267 10.2968L8.96925 12.4598C8.88585 12.7857 8.67639 13.0652 8.38695 13.2367C8.0975 13.4082 7.75178 13.4577 7.42584 13.3743ZM1.74833 1.44628C1.63968 1.41848 1.52444 1.43498 1.42796 1.49214C1.33148 1.54931 1.26166 1.64247 1.23386 1.75111L1.22548 1.78389C0.793412 4.25725 0.534479 10.3016 7.61089 12.5487C7.66386 12.5658 7.71968 12.5722 7.77516 12.5677C7.83063 12.5632 7.88466 12.5478 7.93416 12.5223C7.98366 12.4969 8.02764 12.4619 8.06359 12.4194C8.09954 12.3769 8.12675 12.3277 8.14365 12.2747L8.70337 10.0871L7.31724 9.07342L5.84281 9.94011L5.65247 9.86522C2.20273 8.50681 2.63123 4.81914 2.64066 4.78227L2.66639 4.57935L4.13063 3.70132L3.9113 1.9997L1.74833 1.44628Z"
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
              type={`${show ? "text" : "password"}`}
              id="password"
              name="password"
              className="block w-full pl-10 p-3  border-[1.5px] rounded-[8px] border-[#959595] focus:outline-none"
              placeholder="Somepass@123"
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
          <p className="mt-[10px] text-xs text-[#162F7F]">
            Your password must contain at least one uppercase (A), one lowercase (a), one special character (#,$,%)
            and one digit (2)
          </p>
        </div>
        <div className="flex items-center mt-[2px] ">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 text-[#162F7F] focus:ring-[#162F7F] border-[#4C4C4C] rounded"
            required
          />
          <label
            htmlFor="terms"
            className="ml-2 cursor-pointer block text-sm text-gray-900">
            By signing up you agree to the{" "}
            <a
              href="#"
              className="text-[#162F7F] font-medium">
              Terms & Conditions
            </a>
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-[342px] cursor-pointer bg-[#254FD4] text-white text-[18px] py-[5px] rounded-[8px] shadow hover:bg-blue-700">
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>

      </form>
      <div className="space-y-[15px] mt-[15px]">
        <p className="text-center text-[#222] text-[16px]">Or, Sign in with</p>
        <div className="flex justify-center gap-2">
          <button className="w-[134px] text-xs bg-[#D5DFFF] p-1 rounded-[6px]">
            <div className="flex items-center justify-center gap-[11px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <g clip-path="url(#clip0_203_6780)">
                  <path d="M19.9501 10.5001C19.9501 5.05007 15.5319 0.631866 10.0819 0.631866C4.63183 0.631866 0.213623 5.05007 0.213623 10.5001C0.213623 15.4256 3.82232 19.5082 8.53997 20.2485V13.3527H6.03435V10.5001H8.53997V8.32603C8.53997 5.85279 10.0133 4.48666 12.2674 4.48666C13.347 4.48666 14.4763 4.6794 14.4763 4.6794V7.10791H13.232C12.0061 7.10791 11.6238 7.86862 11.6238 8.64906V10.5001H14.3607L13.9232 13.3527H11.6238V20.2485C16.3414 19.5082 19.9501 15.4257 19.9501 10.5001Z" fill="#1877F2" />
                  <path d="M13.9232 13.3526L14.3608 10.5001H11.6239V8.649C11.6239 7.86849 12.0062 7.10786 13.2321 7.10786H14.4764V4.67934C14.4764 4.67934 13.3471 4.4866 12.2674 4.4866C10.0133 4.4866 8.54004 5.85274 8.54004 8.32597V10.5001H6.03442V13.3526H8.54004V20.2485C9.05012 20.3284 9.56565 20.3685 10.082 20.3683C10.5983 20.3685 11.1138 20.3284 11.6239 20.2485V13.3526H13.9232Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_203_6780">
                    <rect width="19.7365" height="19.7365" fill="white" transform="translate(0.213379 0.631744)" />
                  </clipPath>
                </defs>
              </svg>
              Facebook
            </div>
          </button>
          <button className="w-[134px] text-xs bg-[#D5DFFF] p-1 rounded-[6px]">
            <div className="flex items-center justify-center gap-[11px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M18.1451 8.88921H17.4827V8.85508H10.0815V12.1445H14.729C14.051 14.0594 12.229 15.4339 10.0815 15.4339C7.35659 15.4339 5.14733 13.2247 5.14733 10.4998C5.14733 7.77492 7.35659 5.56567 10.0815 5.56567C11.3393 5.56567 12.4836 6.04016 13.3548 6.81523L15.6809 4.4892C14.2121 3.12039 12.2475 2.27625 10.0815 2.27625C5.54 2.27625 1.85791 5.95834 1.85791 10.4998C1.85791 15.0413 5.54 18.7233 10.0815 18.7233C14.6229 18.7233 18.305 15.0413 18.305 10.4998C18.305 9.94841 18.2483 9.41017 18.1451 8.88921Z" fill="#FFC107" />
                <path d="M2.80615 6.67214L5.508 8.65361C6.23907 6.84361 8.0096 5.56567 10.0815 5.56567C11.3393 5.56567 12.4836 6.04016 13.3549 6.81523L15.6809 4.4892C14.2122 3.12039 12.2476 2.27625 10.0815 2.27625C6.92286 2.27625 4.1836 4.05952 2.80615 6.67214Z" fill="#FF3D00" />
                <path d="M10.0818 18.7235C12.2059 18.7235 14.136 17.9106 15.5952 16.5886L13.05 14.4349C12.1967 15.0839 11.1539 15.4349 10.0818 15.4341C7.94281 15.4341 6.12664 14.0702 5.44244 12.1668L2.76074 14.233C4.12174 16.8962 6.88568 18.7235 10.0818 18.7235Z" fill="#4CAF50" />
                <path d="M18.1454 8.88938H17.483V8.85526H10.0818V12.1447H14.7293C14.405 13.056 13.8208 13.8524 13.0488 14.4353L13.0501 14.4345L15.5953 16.5883C15.4152 16.7519 18.3053 14.6117 18.3053 10.5C18.3053 9.94858 18.2486 9.41034 18.1454 8.88938Z" fill="#1976D2" />
              </svg>
              Google
            </div>
          </button>
        </div>
        <p className="text-center font-light text-[16px] text-[#656565]">
          Already have an account?{" "}
          <a
            onClick={handleLogin}
            className="text-[#254FD4] font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
