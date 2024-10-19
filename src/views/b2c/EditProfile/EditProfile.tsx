"use client";
import Image from "next/image";
import { LuUpload } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { useGetUserInfoQuery, useUpdateProfileMutation } from "@/redux-store/api/usersApi";
import profileImage from "@assets/profiles/profile.png";
import { getUser } from "@/hooks/hooks";
import { useRef, useState } from "react";
import useAlert from "@/utils/useAlert";
import { Checkbox, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import CustomDatePicker from "@/components/DatePicker/CustomDatePicker";

interface UserInfo {
  id: number;
  isverified: string | null;
  verification_code: string | null;
  user_id: string | null;
  first_name: string | null;
  last_name: string | null;
  gender: string | null;
  nationality: string | null;
  dob: string | null;
  profile_url: string | null;
  email: string;
  phone_country_code: string;
  phone: string;
  email_code: string | null;
  password: string;
  status: string;
  country_code: string | null;
  address1: string | null;
  address2: string | null;
  passport_number: string | null;
  passport_exp_date: string | null;
  company_name: string | null;
  company_phone: string | null;
  company_email: string | null;
  company_commission: string | null;
  created_at: string;
  note: string | null;
  last_login: string;
  currency_id: string | null;
  balance: string;
  user_type: string | null;
  state: string | null;
  city: string | null;
  postal_code: string | null;
}

const EditProfile: React.FC = () => {
  const { id } = getUser();

  console.log(id);
  const { data, isLoading, error } = useGetUserInfoQuery({ id }, { refetchOnMountOrArgChange: true });
  const profileInputRef = useRef<HTMLInputElement>(null);
  const passportInputRef = useRef<HTMLInputElement>(null);
  const visaInputRef = useRef<HTMLInputElement>(null);
  const { showAlert } = useAlert();
  const { register, handleSubmit, setValue } = useForm<UserInfo>();
  const [updateProfile, { isLoading: loading, isSuccess, isError }] = useUpdateProfileMutation();
  const [selectedValue, setSelectedValue] = useState("10");
  const [gen, setGen] = useState("10");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user info</div>;
  }

  // Set form default values when data is loaded
  if (data && data.result) {
    setValue("first_name", data?.result?.first_name);
    setValue("last_name", data?.result?.last_name);
    setValue("email", data?.result?.email);
    setValue("gender", data?.result?.gender);
    setValue("nationality", data?.result?.nationality);
    setValue("dob", data?.result?.dob);
    setValue("phone", data?.result?.phone);
    setValue("address1", data?.result?.address1);
    setValue("address2", data?.result?.address2);
    setValue("postal_code", data?.result?.postal_code);
    setValue("passport_number", data?.result?.passport_number);
    setValue("passport_exp_date", data?.result?.passport_exp_date);
  }

  const onSubmit = async (formData: UserInfo) => {
    console.log(formData);
    try {
      await updateProfile({ formData, id }).unwrap();
      showAlert("success", "Profile updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    inputRef.current?.click();
  };

  const handleGen = (event: any) => {
    setGen(event.target.value);
  };
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="primary-shadow bg-white rounded-md p-[28px] min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full p-2">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="w-full flex items-center justify-center">
              <div className="w-[185px]">
                <Image
                  src={profileImage}
                  alt="profile"
                  width={180}
                  className="rounded-full overflow-hidden object-cover"
                  height={180}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <p className="text-[36px] font-[500] uppercase whitespace-nowrap">
                {data?.result?.first_name ? data?.result?.first_name : "N/A"}{" "}
                {data?.result?.last_name ? data?.result?.last_name : ""}
              </p>

              <div className="w-full mt-3  max-w-[200px] pb-1">
                <button
                  type="button"
                  className="primary-btn "
                  onClick={() => handleUploadClick(profileInputRef)}>
                  Choose Photo
                </button>
                <input
                  type="file"
                  className="hidden"
                  ref={profileInputRef}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className=" mt-[67px] w-full">
          <div className="mb-[27px]">
            <div className="mt-5 flex  w-full items-center gap-9 text-base">
              <FormControl
                variant="outlined"
                className="w-[200px]">
                <Select
                  id="demo-select-small"
                  value={selectedValue}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}>
                  <MenuItem
                    value={10}
                    selected>
                    Mr.
                  </MenuItem>
                  <MenuItem value={20}>Mrs</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                component="fieldset"
                fullWidth>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={gen}
                  className="flex flex-row items-center gap-[18px] w-full"
                  onChange={handleGen}>
                  <FormControlLabel
                    value="10"
                    className="secondary-input"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="20"
                    className="secondary-input"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="grid mb-[27px] grid-cols-2 gap-4 text-lg w-full lg:grid-cols-2">
            <div className="grid grid-cols-2  border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
              <label
                htmlFor="first_name"
                className="text-gray-500 text-[20px] py-3">
                Full Name:
              </label>
              <input
                type="text"
                className="w-full outline-none text-[20px] py-3"
                {...register("first_name")}
              />
            </div>
            <div className="grid grid-cols-2  border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
              <label
                htmlFor="last_name"
                className="text-gray-500 text-[20px] py-3">
                Sur Name:
              </label>
              <input
                type="text"
                className="w-full outline-none text-[20px] py-3"
                {...register("last_name")}
              />
            </div>
          </div>

          <div className="grid mb-[27px] grid-cols-2 w-full  border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
            <label
              htmlFor="number"
              className="text-gray-500 text-[20px] py-3">
              Mobile Number:
            </label>
            <input
              type="number"
              className="w-full outline-none text-[20px] py-3"
              {...register("phone")}
            />
          </div>

          <div className="grid mb-[27px] grid-cols-2 w-full  border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
            <label
              htmlFor="email"
              className="text-gray-500 text-[20px] py-3">
              Email:
            </label>
            <input
              type="email"
              className="w-full outline-none text-[20px] py-3"
              {...register("email")}
            />
          </div>

          <div className="grid mb-[27px] grid-cols-2 gap-4 text-lg w-full lg:grid-cols-2">
            <div className="grid grid-cols-2 items-center  border-[1.5px] border-[#959595] rounded-lg  ps-[26px]">
              <label
                htmlFor="dateofbirth"
                className="text-gray-500 text-[20px] py-3">
                Date of Birth:
              </label>
              <CustomDatePicker />
            </div>
            <div className="grid grid-cols-2  border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
              <label
                htmlFor="last_name"
                className="text-gray-500 text-[20px] py-3">
                Nationality:
              </label>

              <select
                {...register("nationality")}
                className="w-full outline-none text-[20px] py-3 bg-transparent">
                <option
                  className="mt-2 p-2"
                  value="Bangladeshi">
                  Bangladeshi
                </option>
                <option
                  className="mt-2 p-2"
                  value="Others">
                  Others
                </option>
              </select>
            </div>
          </div>

          <div className="grid mb-[27px] grid-cols-2 gap-4 text-lg w-full lg:grid-cols-2">
            <div className="grid grid-cols-2  border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
              <label
                htmlFor="address"
                className="text-gray-500 text-[20px] py-3">
                Address:
              </label>
              <input
                type="text"
                className="w-full outline-none text-[20px] py-3"
                {...register("address1")}
              />
            </div>
            <div className="grid grid-cols-2  border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
              <label
                htmlFor="postCode"
                className="text-gray-500 text-[20px] py-3">
                Post Code:
              </label>

              <input
                type="number"
                className="w-full outline-none text-[20px] py-3"
                {...register("postal_code")}
              />
            </div>
          </div>

          <div className="grid mb-[27px] grid-cols-2 gap-4 text-lg w-full lg:grid-cols-2">
            <div className="flex gap-4 items-center border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
              <label
                htmlFor="passport_number"
                className="text-gray-500 w-full text-[20px] py-3">
                Passport Number:
              </label>
              <input
                type="text"
                className="w-full outline-none text-[20px] py-3"
                {...register("passport_number")}
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
              <label
                htmlFor="passport_exp_date"
                className="text-gray-500 whitespace-nowrap w-full text-[20px] py-3">
                Passport Expiry Date:
              </label>

              <input
                type="text"
                defaultValue={"12/06/25"}
                className="w-full outline-none text-[20px] py-3"
                {...register("passport_exp_date")}
              />
            </div>
          </div>

          <div className="mb-[27px]">
            <div className="flex items-center gap-1">
              <input
                name="alert"
                id="alert"
                className="h-[17px] w-[17px]"
                type="checkbox"
              />
              <label
                htmlFor="alert"
                className="text-[20px]  cursor-pointer    ">
                Passport Expiry Alert
              </label>
              <p className="text-[14px] font-[500] text-[#162F7F]  ">
                (You will be notified via notifications when your passport expire)
              </p>
            </div>
          </div>
          <div className="mb-[35px]">
            <div>
              <p className="text-[14px] font-[400] mb-4">
                Select when you will like to be notified about your passport expiration
              </p>

              <div className="flex items-center gap-5">
                <button
                  type="button"
                  className="cursor-pointer bg-transparent transition-all duration-300 hover:bg-[#D5DFFF]  whitespace-nowrap text-[14px] py-[13px] px-[10px] font-[400] rounded-lg border-[1.5px] border-gray-300 ">
                  6 months before
                </button>
                <button
                  type="button"
                  className="cursor-pointer bg-[#D5DFFF]  transition-all duration-300 hover:bg-[#D5DFFF] whitespace-nowrap text-[14px] py-[13px] px-[10px] font-[400] rounded-lg border-[1.5px] border-gray-300 ">
                  4 months before
                </button>
                <button
                  type="button"
                  className="cursor-pointer bg-transparent transition-all duration-300 hover:bg-[#D5DFFF]  whitespace-nowrap text-[14px] py-[13px] px-[10px] font-[400] rounded-lg border-[1.5px] border-gray-300 ">
                  2 months before
                </button>
                <button
                  type="button"
                  className="cursor-pointer bg-transparent whitespace-nowrap text-[14px] hover:bg-[#D5DFFF] py-[13px] px-[10px] font-[400] rounded-lg border-[1.5px] border-gray-300 ">
                  1 months before
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="grid mb-[50px] grid-cols-2 w-full items-center  border-[1.5px] border-[#959595] rounded-lg  px-[26px]">
              <label
                htmlFor="email"
                className="text-gray-500 text-[20px] py-3">
                Frequent Flyer Number:
              </label>

              <FormControl
                className="outline-none text-[20px]"
                fullWidth>
                <Select
                  id="demo-select-small"
                  value={selectedValue}
                  disableUnderline={false}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    "& fieldset": {
                      border: "none",
                    },
                  }}>
                  <MenuItem
                    value={10}
                    selected>
                    NON-VEG
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="w-full px-10 mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="w-full flex-col flex text-center items-center justify-center">
            <p className="mb-3">Passport Copy (max 2mb)</p>
            <button
              type="button"
              className="py-[18px] flex cursor-pointer items-center gap-2 font-[500] text-[24px]  justify-center rounded-[14px]  place-items-center bg-[#D5DFFF] w-full"
              onClick={() => handleUploadClick(passportInputRef)}>
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
              ref={passportInputRef}
            />
          </div>
          <div className="w-full flex-col flex items-center justify-center text-center">
            <p className="mb-3">Visa Copy (max 2mb)</p>
            <button
              type="button"
              className="py-[18px] font-[500] flex items-center cursor-pointer text-[24px] gap-2  justify-center rounded-[14px]  place-items-center bg-[#D5DFFF] w-full"
              onClick={() => handleUploadClick(visaInputRef)}>
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
              ref={visaInputRef}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-[44px] pb-10">
          <button
            type="submit"
            className="primary-btn text-[24px] font-[500] max-w-[580px] py-3 mx-auto w-full">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
