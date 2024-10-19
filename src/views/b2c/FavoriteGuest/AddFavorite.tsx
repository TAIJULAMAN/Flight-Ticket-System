import Image from "next/image";
import { MdFlightTakeoff } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import profileImage from "@assets/profiles/profile.jpeg";
import { LuUpload } from "react-icons/lu";
import { FormControl, MenuItem, Select } from "@mui/material";
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

const userInfo: UserInfo = {
  name: "Sohag Sheik",
  email: "sohagsheik@gmail.com",
  countriesVisited: 3,
  totalFlights: 6,
  gender: "Male",
  mobileNumber: "018846675778",
  dateOfBirth: "23rd February, 1999",
  nationality: "Bangladeshi",
  address: "Dhaka, Bangladesh",
  postCode: "1234",
  passportNumber: "3456478989",
  passportExpiryDate: "12/06/25",
  profileImage: "/path/to/profile/image.jpg", // replace with the actual path
};

const AddFavorite: React.FC = () => {
  return (
    <div className="primary-shadow p-4 rounded-lg ">
      <h1 className="text-[1.5rem]">Please fill up the following fields</h1>
      <div className="divide-y-2 mt-5 w-full">
        <div className="grid grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="title"
            className="p-4 text-gray-700">
            Title
          </label>
          <select
            value={"Mr"}
            className="bg-white text-lg cursor-pointer py-4 outline-none ">
            <option className="mt-2 p-2">Mr.</option>
            <option className="mt-2 p-2">Mrs.</option>
          </select>
        </div>
        {/* name  */}
        <div className="grid p-4 grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="name"
            className=" text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="w-full outline-none text-lg"
            defaultValue={userInfo?.name}
          />
        </div>

        {/* Gender  */}
        <div className="grid grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="name"
            className="p-4 text-gray-700">
            Gender
          </label>
          <select
            value={userInfo?.gender}
            className="bg-white text-lg cursor-pointer py-4 outline-none ">
            <option className="mt-2 p-2">Male</option>
            <option className="mt-2 p-2">Female</option>
          </select>
        </div>

        {/* phone  */}
        <div className="grid  grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="name"
            className="p-4 text-gray-700">
            Phone Number
          </label>
          <input
            type="number"
            min={0}
            className="w-full outline-none text-lg py-4"
            defaultValue={userInfo?.mobileNumber}
          />
        </div>

        {/* birth  */}
        <div className="grid  grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="name"
            className="p-4 text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full outline-none text-lg py-4"
            defaultValue={userInfo?.dateOfBirth}
          />
        </div>

        {/* nationality  */}
        <div className="grid grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="name"
            className="p-4 text-gray-700">
            Nationality
          </label>
          <select
            value={userInfo?.nationality}
            className="bg-white text-lg cursor-pointer py-4 outline-none ">
            <option className="mt-2 p-2">Bangladeshi</option>
            <option className="mt-2 p-2">Others</option>
          </select>
        </div>

        <div className="grid grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="name"
            className="p-4  text-gray-700">
            Address
          </label>
          <select
            value={userInfo?.address}
            className="bg-white text-lg cursor-pointer py-4 outline-none ">
            <option className="mt-2 p-2">Dhaka, Bangladesh</option>
            <option className="mt-2 p-2">Khulna, Bangladesh</option>
          </select>
        </div>
        <div className="grid  grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="postCode"
            className="p-4 text-gray-700">
            Post Code
          </label>
          <input
            type="number"
            min={0}
            className="w-full outline-none text-lg py-4"
            defaultValue={userInfo?.postCode}
          />
        </div>
        <div className="grid  grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="passport"
            className="p-4 text-gray-700">
            Passport Number
          </label>
          <input
            type="number"
            min={0}
            className="w-full outline-none text-lg py-4"
            defaultValue={userInfo?.passportNumber}
          />
        </div>

        <div className="grid  grid-cols-1 text-lg w-full lg:grid-cols-2">
          <label
            htmlFor="name"
            className="p-4 text-gray-700">
            Passport Expiry Date
          </label>
          <input
            type="date"
            className="w-full outline-none text-lg py-4"
            defaultValue={userInfo?.passportExpiryDate}
          />
        </div>
      </div>

      <div className="w-full px-10 mt-[45px] mb-[50px]  grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full flex-col flex text-center items-center justify-center">
          <p className="mb-3">Passport Copy (max 2mb)</p>
          <button
            type="button"
            className="py-[18px] flex cursor-pointer items-center gap-2 font-[500] text-[24px]  justify-center rounded-[14px]  place-items-center bg-[#D5DFFF] w-full">
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_221_3760)">
                <path
                  d="M11.5 12.3749V15.1249H7.375V27.4999H26.625V15.1249H22.5V12.3749H26.625C27.3543 12.3749 28.0538 12.6646 28.5695 13.1803C29.0853 13.696 29.375 14.3955 29.375 15.1249V27.4999C29.375 28.2292 29.0853 28.9287 28.5695 29.4444C28.0538 29.9601 27.3543 30.2499 26.625 30.2499H7.375C6.64565 30.2499 5.94618 29.9601 5.43046 29.4444C4.91473 28.9287 4.625 28.2292 4.625 27.4999V15.1249C4.625 14.3955 4.91473 13.696 5.43046 13.1803C5.94618 12.6646 6.64565 12.3749 7.375 12.3749H11.5ZM18.2155 3.39473L22.8341 8.01198C23.0921 8.26999 23.2371 8.61992 23.2371 8.98479C23.2371 9.34967 23.0921 9.6996 22.8341 9.9576C22.5761 10.2156 22.2262 10.3606 21.8613 10.3606C21.4964 10.3606 21.1465 10.2156 20.8885 9.9576L18.375 7.44273V20.6249C18.375 20.9895 18.2301 21.3393 17.9723 21.5971C17.7144 21.855 17.3647 21.9999 17 21.9999C16.6353 21.9999 16.2856 21.855 16.0277 21.5971C15.7699 21.3393 15.625 20.9895 15.625 20.6249V7.44273L13.1115 9.9576C12.9837 10.0854 12.8321 10.1867 12.6652 10.2558C12.4983 10.325 12.3194 10.3606 12.1387 10.3606C11.958 10.3606 11.7791 10.325 11.6122 10.2558C11.4453 10.1867 11.2936 10.0854 11.1659 9.9576C11.0381 9.82985 10.9368 9.67819 10.8676 9.51127C10.7985 9.34436 10.7629 9.16546 10.7629 8.98479C10.7629 8.80412 10.7985 8.62522 10.8676 8.45831C10.9368 8.29139 11.0381 8.13973 11.1659 8.01198L15.7859 3.39473C16.1082 3.07272 16.5451 2.89185 17.0007 2.89185C17.4563 2.89185 17.8932 3.07272 18.2155 3.39473Z"
                  fill="#162F7F"
                />
              </g>
              <defs>
                <clipPath id="clip0_221_3760">
                  <rect
                    width="33"
                    height="33"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Upload
          </button>
          <input
            type="file"
            className="hidden"
          />
        </div>
        <div className="w-full flex-col flex items-center justify-center text-center">
          <p className="mb-3">Visa Copy (max 2mb)</p>
          <button
            type="button"
            className="py-[18px] font-[500] flex items-center cursor-pointer text-[24px] gap-2  justify-center rounded-[14px]  place-items-center bg-[#D5DFFF] w-full">
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_221_3760)">
                <path
                  d="M11.5 12.3749V15.1249H7.375V27.4999H26.625V15.1249H22.5V12.3749H26.625C27.3543 12.3749 28.0538 12.6646 28.5695 13.1803C29.0853 13.696 29.375 14.3955 29.375 15.1249V27.4999C29.375 28.2292 29.0853 28.9287 28.5695 29.4444C28.0538 29.9601 27.3543 30.2499 26.625 30.2499H7.375C6.64565 30.2499 5.94618 29.9601 5.43046 29.4444C4.91473 28.9287 4.625 28.2292 4.625 27.4999V15.1249C4.625 14.3955 4.91473 13.696 5.43046 13.1803C5.94618 12.6646 6.64565 12.3749 7.375 12.3749H11.5ZM18.2155 3.39473L22.8341 8.01198C23.0921 8.26999 23.2371 8.61992 23.2371 8.98479C23.2371 9.34967 23.0921 9.6996 22.8341 9.9576C22.5761 10.2156 22.2262 10.3606 21.8613 10.3606C21.4964 10.3606 21.1465 10.2156 20.8885 9.9576L18.375 7.44273V20.6249C18.375 20.9895 18.2301 21.3393 17.9723 21.5971C17.7144 21.855 17.3647 21.9999 17 21.9999C16.6353 21.9999 16.2856 21.855 16.0277 21.5971C15.7699 21.3393 15.625 20.9895 15.625 20.6249V7.44273L13.1115 9.9576C12.9837 10.0854 12.8321 10.1867 12.6652 10.2558C12.4983 10.325 12.3194 10.3606 12.1387 10.3606C11.958 10.3606 11.7791 10.325 11.6122 10.2558C11.4453 10.1867 11.2936 10.0854 11.1659 9.9576C11.0381 9.82985 10.9368 9.67819 10.8676 9.51127C10.7985 9.34436 10.7629 9.16546 10.7629 8.98479C10.7629 8.80412 10.7985 8.62522 10.8676 8.45831C10.9368 8.29139 11.0381 8.13973 11.1659 8.01198L15.7859 3.39473C16.1082 3.07272 16.5451 2.89185 17.0007 2.89185C17.4563 2.89185 17.8932 3.07272 18.2155 3.39473Z"
                  fill="#162F7F"
                />
              </g>
              <defs>
                <clipPath id="clip0_221_3760">
                  <rect
                    width="33"
                    height="33"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Upload
          </button>
          <input
            type="file"
            className="hidden"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-6 pb-10">
        <button className="primary-btn max-w-sm mx-auto w-full">Save</button>
      </div>
    </div>
  );
};

export default AddFavorite;
