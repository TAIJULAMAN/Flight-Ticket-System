import React from "react";

export default function ResetPasswordPage() {
  return (
    <div className="max-w-[661px] mt-[140px] primary-shadow rounded-lg mx-auto flex items-center justify-center">
      <div className="py-[71px]   px-[90px] flex flex-col justify-center items-center">
        <p className="text-[2rem] font-[600] text-[#162F7F]">Reset Password</p>
        <p className="text-[16px] mt-[3px] font-[300]">
          A link to reset password will be sent to <span className="primary-text">sohag@gmail.com</span>
        </p>
        <button className="primary-btn mt-[26px]">Check Email</button>
      </div>
    </div>
  );
}
