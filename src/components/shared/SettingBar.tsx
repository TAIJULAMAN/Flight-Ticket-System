import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal, Popover } from "@mui/material";
import Login from "@/views/authentication/Login";
import SignUp from "@/views/authentication/SignUp";
import { getUser } from "@/hooks/hooks";
import { AppDispatch } from "@/redux-store";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux-store/slice/userSlice";
import { useRouter } from "next/navigation";

export default function SettingBar({ isNavFixed, pathName }: any) {
  const user = getUser();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);

  const handleOpenLogin = () => {
    setOpenSignUp(false);
    setOpenLogin(true);
  };
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenSignUp = () => {
    setOpenLogin(false);
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => setOpenSignUp(false);

  const toggleSearchDropdown = () => {
    setIsOpenUser(false);
    setIsSearchOpen(!isSearchOpen);
  };
  const toggleUserDropdown = () => {
    setIsSearchOpen(false);
    setIsOpenUser(!isOpenUser);
  };

  const handleLogout = () => {
    dispatch(logoutUser());

    router.push("/");
  };

  return (
    <div>
      <div className="flex py-3 justify-between items-center">
        <div className="flex items-center gap-8">
          <Link
            href={"/"}
            className={`primary-text font-bold text-[2rem] ${pathName === "/" ? (isNavFixed ? "primary-text" : "text-white") : "text-primary"}`}>
            Travo
          </Link>

          <div className="relative inline-block text-left">
            <div
              className={`relative rounded-[4px] flex items-center justify-between gap-[15px] py-1 px-[3px] w-[310px] ${pathName === "/" ? "bg-[#FFFDF8]" : "bg-[#F1F4FF]"}`}>
              <input
                type="text"
                placeholder="Destination, Attraction, Hotel, etc"
                className={` w-[280px] h-[29px] p-2 outline-none text-[14px] rounded-[4px] ${pathName === "/" ? "bg-[#FFFDF8]" : "bg-[#F1F4FF]"}`}
                onClick={toggleSearchDropdown}
              />
              <div className="absolute top-0 right-0 p-[4px]">
                <div className="rounded-[3px] bg-gradient-to-br from-[#2C5FFF] via-[#1A3999] to-[#1A3999] p-[7px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none">
                    <path
                      d="M11.2204 9.43396H10.5429L10.3027 9.2024C11.1723 8.19384 11.6502 6.90626 11.6492 5.57462C11.6492 4.47206 11.3223 3.39427 10.7097 2.47753C10.0972 1.56079 9.22655 0.846274 8.20793 0.424345C7.1893 0.00241539 6.06843 -0.107981 4.98706 0.107117C3.90569 0.322215 2.91239 0.853145 2.13277 1.63277C1.35315 2.41239 0.822215 3.40569 0.607117 4.48706C0.392019 5.56843 0.502415 6.6893 0.924345 7.70793C1.34627 8.72655 2.06079 9.59719 2.97753 10.2097C3.89427 10.8223 4.97206 11.1492 6.07462 11.1492C7.4554 11.1492 8.7247 10.6432 9.7024 9.80275L9.93396 10.0429V10.7204L14.2221 15L15.5 13.7221L11.2204 9.43396ZM6.07462 9.43396C3.93911 9.43396 2.21527 7.71012 2.21527 5.57462C2.21527 3.43911 3.93911 1.71527 6.07462 1.71527C8.21012 1.71527 9.93396 3.43911 9.93396 5.57462C9.93396 7.71012 8.21012 9.43396 6.07462 9.43396Z"
                      fill="#FFFDF8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {isSearchOpen && (
              <div
                id="dropdown-menu"
                className="origin-top-right absolute left-0 mt-2 w-[280px] rounded-[3px] shadow-lg bg-white z-50">
                <div
                  className="py-[6px] px-[6px]"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-button">
                  <a
                    href="#"
                    className="flex items-center gap-[6px]  rounded-[3px] px-[14px] py-[7px] cursor-pointer"
                    role="menuitem">
                    <span className="text-[12px] font-normal ">
                      <span className="text-[#414141]">Popular Destinations</span>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-[6px]  rounded-[3px] px-[14px] py-[7px] bg-[#D2DDFF] cursor-pointer"
                    role="menuitem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="13"
                      viewBox="0 0 9 13"
                      fill="none">
                      <path
                        d="M4.5 0.8125C3.31525 0.813898 2.17941 1.28516 1.34166 2.12291C0.503913 2.96066 0.0326505 4.09649 0.0312528 5.28125C0.0301635 6.24938 0.346384 7.19119 0.931503 7.9625C0.931503 7.9625 1.05338 8.12297 1.07328 8.14612L4.5 12.1875L7.92835 8.14409C7.94622 8.12256 8.0685 7.9625 8.0685 7.9625L8.06891 7.96128C8.65363 7.19025 8.96969 6.24892 8.96875 5.28125C8.96736 4.09649 8.49609 2.96066 7.65834 2.12291C6.82059 1.28516 5.68476 0.813898 4.5 0.8125ZM4.5 6.90625C4.17861 6.90625 3.86443 6.81095 3.5972 6.63239C3.32997 6.45383 3.12169 6.20004 2.9987 5.90311C2.87571 5.60618 2.84353 5.27945 2.90623 4.96423C2.96893 4.64901 3.12369 4.35946 3.35095 4.1322C3.57821 3.90494 3.86776 3.75017 4.18298 3.68747C4.4982 3.62477 4.82493 3.65695 5.12186 3.77995C5.41879 3.90294 5.67258 4.11122 5.85114 4.37845C6.0297 4.64568 6.125 4.95986 6.125 5.28125C6.12446 5.71206 5.95309 6.12507 5.64846 6.4297C5.34383 6.73433 4.93081 6.90571 4.5 6.90625Z"
                        fill="#1D3FAA"
                      />
                    </svg>
                    <p className="text-[12px] font-normal ">
                      <span className="text-[#414141]">Cox’x Bazar,</span>
                      <span className="text-[#808285]"> Bangladesh</span>
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-[6px]  rounded-[3px] px-[14px] py-[7px] cursor-pointer"
                    role="menuitem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="13"
                      viewBox="0 0 9 13"
                      fill="none">
                      <path
                        d="M4.5 0.8125C3.31525 0.813898 2.17941 1.28516 1.34166 2.12291C0.503913 2.96066 0.0326505 4.09649 0.0312528 5.28125C0.0301635 6.24938 0.346384 7.19119 0.931503 7.9625C0.931503 7.9625 1.05338 8.12297 1.07328 8.14612L4.5 12.1875L7.92835 8.14409C7.94622 8.12256 8.0685 7.9625 8.0685 7.9625L8.06891 7.96128C8.65363 7.19025 8.96969 6.24892 8.96875 5.28125C8.96736 4.09649 8.49609 2.96066 7.65834 2.12291C6.82059 1.28516 5.68476 0.813898 4.5 0.8125ZM4.5 6.90625C4.17861 6.90625 3.86443 6.81095 3.5972 6.63239C3.32997 6.45383 3.12169 6.20004 2.9987 5.90311C2.87571 5.60618 2.84353 5.27945 2.90623 4.96423C2.96893 4.64901 3.12369 4.35946 3.35095 4.1322C3.57821 3.90494 3.86776 3.75017 4.18298 3.68747C4.4982 3.62477 4.82493 3.65695 5.12186 3.77995C5.41879 3.90294 5.67258 4.11122 5.85114 4.37845C6.0297 4.64568 6.125 4.95986 6.125 5.28125C6.12446 5.71206 5.95309 6.12507 5.64846 6.4297C5.34383 6.73433 4.93081 6.90571 4.5 6.90625Z"
                        fill="#1D3FAA"
                      />
                    </svg>
                    <p className="text-[12px] font-normal ">
                      <span className="text-[#414141]">Bangkok,</span>
                      <span className="text-[#808285]"> Thailand</span>
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-[6px]  rounded-[3px] px-[14px] py-[7px] cursor-pointer"
                    role="menuitem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="13"
                      viewBox="0 0 9 13"
                      fill="none">
                      <path
                        d="M4.5 0.8125C3.31525 0.813898 2.17941 1.28516 1.34166 2.12291C0.503913 2.96066 0.0326505 4.09649 0.0312528 5.28125C0.0301635 6.24938 0.346384 7.19119 0.931503 7.9625C0.931503 7.9625 1.05338 8.12297 1.07328 8.14612L4.5 12.1875L7.92835 8.14409C7.94622 8.12256 8.0685 7.9625 8.0685 7.9625L8.06891 7.96128C8.65363 7.19025 8.96969 6.24892 8.96875 5.28125C8.96736 4.09649 8.49609 2.96066 7.65834 2.12291C6.82059 1.28516 5.68476 0.813898 4.5 0.8125ZM4.5 6.90625C4.17861 6.90625 3.86443 6.81095 3.5972 6.63239C3.32997 6.45383 3.12169 6.20004 2.9987 5.90311C2.87571 5.60618 2.84353 5.27945 2.90623 4.96423C2.96893 4.64901 3.12369 4.35946 3.35095 4.1322C3.57821 3.90494 3.86776 3.75017 4.18298 3.68747C4.4982 3.62477 4.82493 3.65695 5.12186 3.77995C5.41879 3.90294 5.67258 4.11122 5.85114 4.37845C6.0297 4.64568 6.125 4.95986 6.125 5.28125C6.12446 5.71206 5.95309 6.12507 5.64846 6.4297C5.34383 6.73433 4.93081 6.90571 4.5 6.90625Z"
                        fill="#1D3FAA"
                      />
                    </svg>
                    <span className="text-[12px] font-normal ">
                      <span className="text-[#414141]">Sanghai,</span>
                      <span className="text-[#808285]"> China</span>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-[6px]  rounded-[3px] px-[14px] py-[7px] cursor-pointer"
                    role="menuitem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="13"
                      viewBox="0 0 9 13"
                      fill="none">
                      <path
                        d="M4.5 0.8125C3.31525 0.813898 2.17941 1.28516 1.34166 2.12291C0.503913 2.96066 0.0326505 4.09649 0.0312528 5.28125C0.0301635 6.24938 0.346384 7.19119 0.931503 7.9625C0.931503 7.9625 1.05338 8.12297 1.07328 8.14612L4.5 12.1875L7.92835 8.14409C7.94622 8.12256 8.0685 7.9625 8.0685 7.9625L8.06891 7.96128C8.65363 7.19025 8.96969 6.24892 8.96875 5.28125C8.96736 4.09649 8.49609 2.96066 7.65834 2.12291C6.82059 1.28516 5.68476 0.813898 4.5 0.8125ZM4.5 6.90625C4.17861 6.90625 3.86443 6.81095 3.5972 6.63239C3.32997 6.45383 3.12169 6.20004 2.9987 5.90311C2.87571 5.60618 2.84353 5.27945 2.90623 4.96423C2.96893 4.64901 3.12369 4.35946 3.35095 4.1322C3.57821 3.90494 3.86776 3.75017 4.18298 3.68747C4.4982 3.62477 4.82493 3.65695 5.12186 3.77995C5.41879 3.90294 5.67258 4.11122 5.85114 4.37845C6.0297 4.64568 6.125 4.95986 6.125 5.28125C6.12446 5.71206 5.95309 6.12507 5.64846 6.4297C5.34383 6.73433 4.93081 6.90571 4.5 6.90625Z"
                        fill="#1D3FAA"
                      />
                    </svg>
                    <p className="text-[12px] font-normal ">
                      <span className="text-[#414141]">Chennai,</span>
                      <span className="text-[#808285]"> India</span>
                    </p>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {user?.id ? (
          <div className="relative inline-block text-left">
            <div
              className={`w-[113px] h-[36px] flex items-center gap-[7px] ${pathName === "/" ? "bg-white" : "bg-[#ECF0FF]"}  transition-all px-[8px] rounded-[21px] py-[5px] cursor-pointer`}
              onClick={toggleUserDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5003 0.329285C15.8414 0.329285 20.171 4.65886 20.171 9.99999C20.1744 12.2319 19.4026 14.3957 17.9874 16.1215L18.0067 16.1428L17.8791 16.2511C16.9722 17.3238 15.842 18.1856 14.5675 18.7762C13.293 19.3669 11.905 19.6721 10.5003 19.6707C7.64745 19.6707 5.08471 18.4357 3.31497 16.4726L3.12156 16.2502L2.9939 16.1438L3.01325 16.1206C1.59819 14.395 0.826333 12.2316 0.8296 9.99999C0.8296 4.65886 5.15917 0.329285 10.5003 0.329285ZM10.5003 14.8353C8.70155 14.8353 7.07591 15.4078 5.86514 16.195C7.20203 17.1982 8.82892 17.7392 10.5003 17.7366C12.1717 17.7392 13.7986 17.1982 15.1355 16.195C13.752 15.3085 12.1435 14.8367 10.5003 14.8353ZM10.5003 2.26343C9.0444 2.26338 7.61804 2.67415 6.38515 3.44852C5.15227 4.22289 4.1629 5.32942 3.53078 6.64094C2.89866 7.95245 2.64944 9.41572 2.81176 10.8625C2.97408 12.3094 3.54135 13.681 4.44838 14.8199C6.016 13.6952 8.15516 12.9012 10.5003 12.9012C12.8454 12.9012 14.9846 13.6952 16.5522 14.8199C17.4593 13.681 18.0265 12.3094 18.1889 10.8625C18.3512 9.41572 18.1019 7.95245 17.4698 6.64094C16.8377 5.32942 15.8483 4.22289 14.6155 3.44852C13.3826 2.67415 11.9562 2.26338 10.5003 2.26343ZM10.5003 4.19757C11.5262 4.19757 12.5101 4.60512 13.2356 5.33056C13.961 6.056 14.3686 7.03992 14.3686 8.06585C14.3686 9.09178 13.961 10.0757 13.2356 10.8011C12.5101 11.5266 11.5262 11.9341 10.5003 11.9341C9.47437 11.9341 8.49046 11.5266 7.76502 10.8011C7.03957 10.0757 6.63202 9.09178 6.63202 8.06585C6.63202 7.03992 7.03957 6.056 7.76502 5.33056C8.49046 4.60512 9.47437 4.19757 10.5003 4.19757ZM10.5003 6.13171C9.98734 6.13171 9.49538 6.33548 9.13266 6.6982C8.76994 7.06093 8.56616 7.55288 8.56616 8.06585C8.56616 8.57881 8.76994 9.07077 9.13266 9.43349C9.49538 9.79621 9.98734 9.99999 10.5003 9.99999C11.0133 9.99999 11.5052 9.79621 11.8679 9.43349C12.2307 9.07077 12.4344 8.57881 12.4344 8.06585C12.4344 7.55288 12.2307 7.06093 11.8679 6.6982C11.5052 6.33548 11.0133 6.13171 10.5003 6.13171Z"
                  fill="#162F7F"
                />
              </svg>
              <p className="flex items-center justify-between gap-1">
                <span className="text-[16px] font-medium text-[#162F7F] ">User Z</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  className="mt-1">
                  <path
                    d="M2.23959 0.289978L6.82959 4.87998L11.4196 0.289978L12.8296 1.70998L6.82959 7.70998L0.82959 1.70998L2.23959 0.289978Z"
                    fill="#162F7F"
                  />
                </svg>
              </p>
            </div>
            {isOpenUser && (
              <div
                id="dropdown-menu"
                className="origin-top-right absolute left-0 mt-2 w-[130px] rounded-[6px] shadow-lg bg-white z-50">
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-button"
                  className="py-[11px] px-[17px] space-y-[11px]">
                  <Link
                    href={"/b2c/profile"}
                    className="flex items-center gap-[5px] cursor-pointer"
                    role="menuitem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none">
                      <path
                        d="M6.19187 0.391602C6.9356 0.391602 7.64888 0.687048 8.17478 1.21295C8.70067 1.73885 8.99612 2.45212 8.99612 3.19585C8.99612 3.93958 8.70067 4.65286 8.17478 5.17875C7.64888 5.70465 6.9356 6.0001 6.19187 6.0001C5.44814 6.0001 4.73487 5.70465 4.20897 5.17875C3.68307 4.65286 3.38762 3.93958 3.38762 3.19585C3.38762 2.45212 3.68307 1.73885 4.20897 1.21295C4.73487 0.687048 5.44814 0.391602 6.19187 0.391602ZM6.19187 11.6086C6.19187 11.6086 11.8004 11.6086 11.8004 10.2065C11.8004 8.52392 9.06623 6.70116 6.19187 6.70116C3.31752 6.70116 0.583374 8.52392 0.583374 10.2065C0.583374 11.6086 6.19187 11.6086 6.19187 11.6086Z"
                        fill="#254FD4"
                      />
                    </svg>
                    <p className="text-[14px] font-normal text-[#464646]">Profile</p>
                  </Link>
                  <Link
                    href={"/b2c/my-booking"}
                    className="flex items-center gap-[5px] cursor-pointer"
                    role="menuitem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none">
                      <path
                        d="M11.0559 0.500854H6.84948C6.56064 0.500854 6.15613 0.668408 5.95212 0.872417L0.736917 6.08762C0.63858 6.18642 0.583374 6.32014 0.583374 6.45953C0.583374 6.59893 0.63858 6.73265 0.736917 6.83145L5.25106 11.3456C5.34985 11.4439 5.48357 11.4991 5.62297 11.4991C5.76236 11.4991 5.89609 11.4439 5.99488 11.3456L11.2101 6.13038C11.4148 5.92567 11.5816 5.52186 11.5816 5.23302V1.02665C11.5811 0.887372 11.5255 0.753955 11.427 0.655469C11.3285 0.556982 11.1951 0.501408 11.0559 0.500854ZM8.42687 4.70723C8.28872 4.70718 8.15194 4.67993 8.02433 4.62702C7.89672 4.57411 7.78078 4.49659 7.68313 4.39887C7.58548 4.30116 7.50804 4.18517 7.45521 4.05752C7.40239 3.92988 7.37523 3.79308 7.37527 3.65493C7.37532 3.51679 7.40258 3.38001 7.45548 3.2524C7.50839 3.12479 7.58591 3.00885 7.68363 2.9112C7.78134 2.81355 7.89733 2.7361 8.02498 2.68328C8.15263 2.63046 8.28943 2.60329 8.42757 2.60334C8.70656 2.60343 8.97409 2.71435 9.1713 2.9117C9.36851 3.10904 9.47925 3.37664 9.47916 3.65563C9.47907 3.93463 9.36815 4.20216 9.17081 4.39937C8.97346 4.59658 8.70586 4.70732 8.42687 4.70723Z"
                        fill="#254FD4"
                      />
                    </svg>
                    <p className="text-[14px] font-normal text-[#464646]">My Booking</p>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center bg-transparent gap-[5px] cursor-pointer"
                    role="menuitem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none">
                      <path
                        d="M1.81486 12.0417C1.4762 12.0417 1.18639 11.9212 0.94543 11.6803C0.70447 11.4393 0.583785 11.1493 0.583374 10.8102V2.18986C0.583374 1.8512 0.704059 1.56139 0.94543 1.32043C1.1868 1.07947 1.47661 0.958785 1.81486 0.958374H6.12504V2.18986H1.81486V10.8102H6.12504V12.0417H1.81486ZM8.588 9.57874L7.74136 8.68592L9.3115 7.11578H4.27782V5.8843H9.3115L7.74136 4.31416L8.588 3.42134L11.6667 6.50004L8.588 9.57874Z"
                        fill="#254FD4"
                      />
                    </svg>
                    <p className="text-[14px] font-normal text-[#464646]">Log Out</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button
              className={`px-3 py-[9px] rounded-[22px] transition-all duration-300 flex items-center gap-[7px] ${pathName === "/" ? "bg-white" : "bg-[#ECF0FF]"}`}
              onClick={handleOpenLogin}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none">
                <path
                  d="M9.91675 9.45837V6.33337L15.1251 10.5L9.91675 14.6667V11.5417H0.541748V9.45837H9.91675ZM2.0605 13.625H4.273C5.00013 15.4157 6.32686 16.8982 8.02624 17.8187C9.72563 18.7393 11.6921 19.0408 13.5892 18.6716C15.4863 18.3025 17.1962 17.2857 18.4265 15.7951C19.6567 14.3045 20.3308 12.4327 20.3334 10.5C20.3345 8.56531 19.6623 6.69049 18.4323 5.19715C17.2022 3.7038 15.4908 2.685 13.5917 2.31547C11.6926 1.94595 9.72409 2.24873 8.02381 3.17189C6.32353 4.09505 4.99744 5.58106 4.273 7.37504H2.0605C3.38758 3.149 7.3355 0.083374 12.0001 0.083374C17.7532 0.083374 22.4167 4.74692 22.4167 10.5C22.4167 16.2532 17.7532 20.9167 12.0001 20.9167C7.3355 20.9167 3.38758 17.8511 2.0605 13.625Z"
                  fill="url(#paint0_linear_203_7979)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_203_7979"
                    x1="7.04251"
                    y1="1.10568"
                    x2="18.578"
                    y2="18.4089"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#174BED" />
                    <stop
                      offset="1"
                      stop-color="#00228C"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-[16px] font-medium text-[#222]">Log in / Sign up</span>
            </button>
          </div>
        )}
      </div>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        className="flex justify-center items-center min-h-screen">
        <Login
          handleCloseLogin={handleCloseLogin}
          handleSignUp={handleOpenSignUp}
        />
      </Modal>
      <Modal
        open={openSignUp}
        onClose={handleCloseSignUp}
        className="flex justify-center items-center min-h-screen">
        <SignUp handleLogin={handleOpenLogin} />
      </Modal>
    </div>
  );
}
