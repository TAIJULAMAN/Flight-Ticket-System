"use client";
import Image from "next/image";
import { MdFlightTakeoff } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";
import { useGetUserInfoQuery } from "@/redux-store/api/usersApi";

import profileImage from "@assets/profiles/profile.png";
import { getUser } from "@/hooks/hooks";
import { useEffect, useState } from "react";

interface UserInfo {
  name: string;
  email: string;
  countriesVisited: number;
  totalFlights: number;
  gender: string;
  mobileNumber: string;
  dateOfBirth: string;
  nationality: string;
  address: string;
  postCode: string;
  passportNumber: string;
  passportExpiryDate: string;
  profileImage: string;
}

const Profile: React.FC = () => {
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const user = getUser();
    setId(user?.id);
  }, []);

  const { data, isLoading, error } = useGetUserInfoQuery({ id }, { refetchOnMountOrArgChange: true });

  if (isLoading) return <div>Loading...</div>;

  const userInfo: UserInfo = {
    name: `${data?.result?.first_name ? data?.result?.first_name : "N/A"} ${data?.result?.last_name ? data?.result?.last_name : ""}`.trim(),
    email: data?.result?.email,
    countriesVisited: 3, // You can map these values if available in the API response
    totalFlights: 6, // Same as above
    gender: data?.result?.gender || "N/A",
    mobileNumber: data?.result?.phone,
    dateOfBirth: data?.result?.dob || "N/A",
    nationality: data?.result?.nationality || "N/A",
    address: `${data?.result?.address1 || ""} ${data?.result?.address2 || ""}`,
    postCode: data?.result?.postal_code || "N/A",
    passportNumber: data?.result?.passport_number || "N/A",
    passportExpiryDate: data?.result?.passport_exp_date || "N/A",
    profileImage: data?.result?.profile_url || profileImage,
  };

  return (
    <div className="primary-shadow bg-white  rounded-md p-4 min-h-screen">
      {/* profile stat */}
      <div className="w-full">
        <div className="flex relative w-full p-2 items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-[36px] font-[500] uppercase">{userInfo?.name}</p>
            <p className="text-[20px]">{userInfo?.email}</p>
          </div>
          <Link
            href={`/b2c/edit-profile`}
            className="absolute font-[600] primary-text text-[20px] bg-white cursor-pointer top-6 right-2 flex items-center justify-center gap-2">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 20.5H19C19.2652 20.5 19.5196 20.6054 19.7071 20.7929C19.8946 20.9804 20 21.2348 20 21.5C20 21.7652 19.8946 22.0196 19.7071 22.2071C19.5196 22.3946 19.2652 22.5 19 22.5H5C4.73478 22.5 4.48043 22.3946 4.29289 22.2071C4.10536 22.0196 4 21.7652 4 21.5C4 21.2348 4.10536 20.9804 4.29289 20.7929C4.48043 20.6054 4.73478 20.5 5 20.5ZM4 15.5L14 5.5L17 8.5L7 18.5H4V15.5ZM15 4.5L17 2.5L20 5.5L17.999 7.501L15 4.5Z"
                fill="#1D3FAA"
              />
            </svg>
            <span className="mb-[2px]"> Edit</span>
          </Link>
        </div>
        <div className="grid p-6 lg:p-2 mt-4 lg:grid-cols-3 gap-6 lg:gap-0 rounded-lg grid-cols-1 lg:divide-x-2 divide-white primary-bg">
          <div className="relative w-full flex items-center justify-center">
            <div className="lg:absolute w-[185px] bottom-0 lg:left-1/2 transform lg:-translate-x-1/2">
              <Image
                src={userInfo?.profileImage}
                alt="profile"
                width={172}
                className="rounded-full ring-8 ring-white overflow-hidden object-cover"
                height={172}
              />
            </div>
          </div>

          <div className="flex flex-col text-white items-center justify-center">
            <p className="flex items-center text-[20px] justify-center gap-1">
              <span className="flex text-[20px] items-center justify-center">
                <TbWorld />
              </span>
              Countries Visited
            </p>
            <p className="text-[36px]">{userInfo.countriesVisited}</p>
          </div>
          <div className="flex flex-col text-white items-center justify-center">
            <p className="flex text-[20px] items-center justify-center gap-1">
              <span>
                <MdFlightTakeoff />
              </span>
              Total Flights
            </p>
            <p className="text-[36px]">{userInfo.totalFlights}</p>
          </div>
        </div>
      </div>

      {/* user info */}
      <div className="divide-y-2 mt-5 w-full">
        {/* name  */}
        <div className="grid p-4 grid-cols-1 w-full lg:grid-cols-2">
          <div className="w-full">
            <p className="text-[20px]">Full Name</p>
          </div>
          <div className="w-full">
            <p className="text-[20px]">{userInfo?.name}</p>
          </div>
        </div>

        {/* Gender  */}
        <div className="grid p-4 grid-cols-1 w-full lg:grid-cols-2">
          <div className="w-full">
            <p className="text-[20px]">Gender</p>
          </div>
          <div className="w-full">
            <p className="text-[20px]">{userInfo?.gender}</p>
          </div>
        </div>

        {/* phone  */}
        <div className="grid p-4 grid-cols-1 w-full lg:grid-cols-2">
          <div className="w-full">
            <p className="text-[20px]">Mobile Number</p>
          </div>
          <div className="w-full">
            <p className="text-[20px]">{userInfo?.mobileNumber}</p>
          </div>
        </div>

        {/* birth  */}
        <div className="grid p-4 grid-cols-1 w-full lg:grid-cols-2">
          <div className="w-full">
            <p className="text-[20px]">Date of Birth</p>
          </div>
          <div className="w-full">
            <p className="text-[20px]">{userInfo?.dateOfBirth}</p>
          </div>
        </div>

        {/* nationality  */}
        <div className="grid p-4 grid-cols-1 w-full lg:grid-cols-2">
          <div className="w-full">
            <p className="text-[20px]">Nationality</p>
          </div>
          <div className="w-full">
            <p className="text-[20px]">{userInfo?.nationality}</p>
          </div>
        </div>

        <div className="grid p-4 grid-cols-1 w-full lg:grid-cols-2">
          <div className="w-full">
            <p className="text-[20px]">Address</p>
          </div>
          <div className="w-full">
            <p className="text-[20px]">{userInfo?.address}</p>
          </div>
        </div>

        <div className="grid p-4 grid-cols-1 w-full lg:grid-cols-2">
          <div className="w-full">
            <p className="text-[20px]">Post Code</p>
          </div>
          <div className="w-full">
            <p className="text-[20px]">{userInfo?.postCode}</p>
          </div>
        </div>

        <div className="grid p-4 grid-cols-1 w-full lg:grid-cols-2">
          <div className="w-full">
            <p className="text-[20px]">Passport Number</p>
          </div>
          <div className="w-full">
            <p className="text-[20px]">{userInfo?.passportNumber}</p>
          </div>
        </div>

        <div className="grid p-4 grid-cols-1 w-full lg:grid-cols-2">
          <div className="w-full">
            <p className="text-[20px]">Passport Expire Date</p>
          </div>
          <div className="w-full">
            <p className="text-[20px]">{userInfo?.passportExpiryDate}</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-6 px-4 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <button className="py-[16px] font-[500] flex items-center cursor-pointer text-[24px] gap-2  justify-center rounded-[14px]  place-items-center bg-[#D5DFFF] w-full">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 20.5C18.2091 20.5 20 18.7091 20 16.5C20 14.2909 18.2091 12.5 16 12.5C13.7909 12.5 12 14.2909 12 16.5C12 18.7091 13.7909 20.5 16 20.5Z"
              fill="#162F7F"
            />
            <path
              d="M30.9396 16.16C29.7634 13.1176 27.7216 10.4866 25.0664 8.59209C22.4112 6.69756 19.2591 5.62257 15.9996 5.5C12.7401 5.62257 9.58796 6.69756 6.93278 8.59209C4.27759 10.4866 2.23574 13.1176 1.05957 16.16C0.980142 16.3797 0.980142 16.6203 1.05957 16.84C2.23574 19.8824 4.27759 22.5134 6.93278 24.4079C9.58796 26.3024 12.7401 27.3774 15.9996 27.5C19.2591 27.3774 22.4112 26.3024 25.0664 24.4079C27.7216 22.5134 29.7634 19.8824 30.9396 16.84C31.019 16.6203 31.019 16.3797 30.9396 16.16ZM15.9996 23C14.714 23 13.4573 22.6188 12.3884 21.9046C11.3194 21.1903 10.4863 20.1752 9.99436 18.9874C9.50239 17.7997 9.37367 16.4928 9.62447 15.2319C9.87527 13.971 10.4943 12.8128 11.4034 11.9038C12.3124 10.9948 13.4706 10.3757 14.7315 10.1249C15.9924 9.87409 17.2993 10.0028 18.487 10.4948C19.6747 10.9868 20.6899 11.8199 21.4041 12.8888C22.1184 13.9577 22.4996 15.2144 22.4996 16.5C22.4969 18.2231 21.8113 19.8749 20.5928 21.0933C19.3744 22.3117 17.7227 22.9974 15.9996 23Z"
              fill="#162F7F"
            />
          </svg>
          <span className="mb-1"> View Passport</span>
        </button>
        <button className="py-[16px] font-[500] flex items-center cursor-pointer text-[24px] gap-2  justify-center rounded-[14px]  place-items-center bg-[#D5DFFF] w-full">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 20.5C18.2091 20.5 20 18.7091 20 16.5C20 14.2909 18.2091 12.5 16 12.5C13.7909 12.5 12 14.2909 12 16.5C12 18.7091 13.7909 20.5 16 20.5Z"
              fill="#162F7F"
            />
            <path
              d="M30.9396 16.16C29.7634 13.1176 27.7216 10.4866 25.0664 8.59209C22.4112 6.69756 19.2591 5.62257 15.9996 5.5C12.7401 5.62257 9.58796 6.69756 6.93278 8.59209C4.27759 10.4866 2.23574 13.1176 1.05957 16.16C0.980142 16.3797 0.980142 16.6203 1.05957 16.84C2.23574 19.8824 4.27759 22.5134 6.93278 24.4079C9.58796 26.3024 12.7401 27.3774 15.9996 27.5C19.2591 27.3774 22.4112 26.3024 25.0664 24.4079C27.7216 22.5134 29.7634 19.8824 30.9396 16.84C31.019 16.6203 31.019 16.3797 30.9396 16.16ZM15.9996 23C14.714 23 13.4573 22.6188 12.3884 21.9046C11.3194 21.1903 10.4863 20.1752 9.99436 18.9874C9.50239 17.7997 9.37367 16.4928 9.62447 15.2319C9.87527 13.971 10.4943 12.8128 11.4034 11.9038C12.3124 10.9948 13.4706 10.3757 14.7315 10.1249C15.9924 9.87409 17.2993 10.0028 18.487 10.4948C19.6747 10.9868 20.6899 11.8199 21.4041 12.8888C22.1184 13.9577 22.4996 15.2144 22.4996 16.5C22.4969 18.2231 21.8113 19.8749 20.5928 21.0933C19.3744 22.3117 17.7227 22.9974 15.9996 23Z"
              fill="#162F7F"
            />
          </svg>
          <span className="mb-1">View Visa</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
