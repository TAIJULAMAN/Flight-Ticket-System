"use client";
import MyBookingCard from "./MyBookingCard";
import MyComBooking from "./MyComBooking";
import { useGetUsersQuery } from "@/redux-store/api/usersApi";
export default function MyBooking() {
  const { data } = useGetUsersQuery();
  return (
    <div>
      <div className="text-center flex justify-center items-center ">
        <p className="text-[2rem] font-[500] text-center w-full ">My Booking</p>
      </div>

      <div className="mt-[33px] space-y-4">
        <MyBookingCard />
        <MyComBooking />
        <MyBookingCard />
        <MyComBooking />
        <MyComBooking />
      </div>
    </div>
  );
}
