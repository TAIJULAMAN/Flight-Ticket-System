import React from "react";
import { FaClock } from "react-icons/fa6";

function NotificationPage() {
  return (
    <div className="primary-shadow px-7 rounded-lg pt-[21px] pb-[40px] min-h-screen">
      <h3 className="text-2xl">Notifications</h3>
      <div className="bg-[#d5dfff] rounded-lg px-5 pt-5 pb-2 mt-5 mb-2">
        <p>
          Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique travel
          experiences.Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique
          travel experiences.
        </p>
        <p className="mt-2 flex justify-start text-center items-center gap-1">
          <FaClock className="text-[#254fd5]" />
          <span className="text-[#254fd5]">Today, 5:30 PM</span>
        </p>
      </div>
      <div className="border border-[#A8B5AD] rounded-lg p-5 mt-2 mb-5">
        <p>
          Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique travel
          experiences.Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique
          travel experiences. Escape the ordinary and discover extraordinary experiences. Browse our curated selection
          of unique travel experiences.Escape the ordinary and discover extraordinary experiences. Browse our curated
          selection of unique travel experiences.
        </p>
      </div>
      <div className="bg-[#E8E8E8] rounded-lg px-5 pt-5 pb-2 mt-5">
        <p>
          Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique travel
          experiences.Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique
          travel experiences.
        </p>
        <p className="mt-2 flex justify-start text-center items-center gap-1">
          <FaClock />
          <span>A week ago, 5:30 PM</span>
        </p>
      </div>
      <div className="bg-[#d5dfff] rounded-lg px-5 pt-5 pb-2 mt-5">
        <p>
          Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique travel
          experiences.Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique
          travel experiences.
        </p>
        <p className="mt-2 flex justify-start text-center items-center gap-1">
          <FaClock className="text-[#254fd5]" />
          <span className="text-[#254fd5]">Today, 5:30 PM</span>
        </p>
      </div>
      <div className="bg-[#E8E8E8] rounded-lg px-5 pt-5 pb-2 my-5">
        <p>
          Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique travel
          experiences.Escape the ordinary and discover extraordinary experiences. Browse our curated selection of unique
          travel experiences.
        </p>
        <p className="mt-2 flex justify-start text-center items-center gap-1">
          <FaClock />
          <span>Yesterday, 5:30 PM</span>
        </p>
      </div>
    </div>
  );
}

export default NotificationPage;
