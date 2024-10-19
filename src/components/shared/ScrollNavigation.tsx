import Link from "next/link";
import React from "react";

export default function ScrollNavigation() {
  return (
    <div className="flex   items-center justify-between w-full">
      <div>
        <Link
          href={"/"}
          className="primary-text font-bold text-[2rem]">
          Travo
        </Link>
      </div>

      <div className="w-full text-lg flex items-center justify-between">
        <Link href={"/"}>Flight</Link>
        <Link href={"/"}>Promotions</Link>
        <Link href={"/"}>Support</Link>
        <Link href={"/"}>Search</Link>
      </div>

      <div>
        <Link
          href={"/auth/login"}
          className="px-10 cursor-pointer py-1.5 text-lg font-medium bg-[#254fd4] text-white rounded-md ">
          Login
        </Link>
      </div>
    </div>
  );
}
