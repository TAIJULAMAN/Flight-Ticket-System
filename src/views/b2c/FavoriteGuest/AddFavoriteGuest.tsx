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

const AddFavoriteGuest: React.FC = () => {
  return (
    <div className="primary-shadow p-4 rounded-lg overflow-hidden   ">
      <h1 className="text-[2rem]">Please fill up the following fields</h1>
      <div className="divide-y-2 mt-5 w-full">
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

      <div className="w-full mt-8 px-4 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full flex-col flex text-center items-center justify-center">
          <p className="mb-3">Passport Copy (max 2mb)</p>
          <button className="secondary-btn w-full">
            <LuUpload />
            Upload
          </button>
        </div>
        <div className="w-full flex-col flex items-center justify-center text-center">
          <p className="mb-3">Visa Copy (max 2mb)</p>
          <button className="secondary-btn w-full">
            {" "}
            <LuUpload /> Upload
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-6 pb-10">
        <button className="primary-btn max-w-sm mx-auto w-full">Save</button>
      </div>
    </div>
  );
};

export default AddFavoriteGuest;
