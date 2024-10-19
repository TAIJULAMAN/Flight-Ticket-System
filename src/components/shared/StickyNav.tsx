import Link from "next/link";
import LoginButton from "./LoginButton";
import { AiOutlineLogout } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";

export default function StickyNav({ isNavFixed }: any) {
  return (
    <div className="flex  py-2 main-container  justify-between items-center">
      <div className="flex items-center justify-between w-full gap-10">
        <div className="flex items-center gap-10">
          <Link
            href={"/"}
            className={`primary-text font-bold text-[2rem] `}>
            Travo
          </Link>
          <div className="flex items-center mt-2 gap-10">
            <Link href={"/flights-search"}>Flight</Link>
            <Link href={"/"}>Promotions</Link>
            <Link href={"/flight-status"}>Flight Status</Link>
            <Link href={"/"}>Support</Link>
            <div className="flex text-[18px] items-center lg:gap-10">
              <select
                value={"BDT"}
                className={`text-[16px] bg-transparent cursor-pointer py-4  outline-none`}>
                <option className="mt-2 p-2 text-black">USD</option>
                <option className="mt-2 p-2 text-black">BDT</option>
              </select>
              <div className="relative">
                <MdLanguage className={`absolute left-2 top-1/2 transform -translate-y-1/2 `} />
                <select
                  value={"Language"}
                  className={`text-[16px] bg-transparent cursor-pointer py-4 pl-8  outline-none`}>
                  <option className="mt-2 p-2 text-black">English</option>
                  <option className="mt-2 p-2 text-black">Bangla</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* <LoginButton /> */}
        <div>
          <Link
            href={"/login"}
            className="px-5 rounded-[2rem] bg-[#254fd4] text-white transition-all duration-300 py-1.5  flex items-center justify-center gap-2  ring-gray-50">
            <span className="flex items-center justify-center">
              <AiOutlineLogout />
            </span>
            Log in / Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
