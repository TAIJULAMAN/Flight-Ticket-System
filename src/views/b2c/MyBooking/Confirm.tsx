import Link from "next/link";
import React from "react";

export default function Confirm() {
  return (
    <div className="flex items-center justify-center py-[122px]">
      <div className="max-w-[810px] ">
        <div className="primary-shadow p-[56px]">
          <p className="flex items-center justify-center text-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0ZM21.8857 29.9321L16.3321 24.375C16.133 24.1759 15.8967 24.018 15.6366 23.9102C15.3764 23.8025 15.0976 23.747 14.8161 23.747C14.5345 23.747 14.2557 23.8025 13.9956 23.9102C13.7355 24.018 13.4991 24.1759 13.3 24.375C12.8979 24.7771 12.672 25.3224 12.672 25.8911C12.672 26.4597 12.8979 27.0051 13.3 27.4071L20.3714 34.4786C20.57 34.6787 20.8061 34.8375 21.0663 34.9459C21.3265 35.0543 21.6056 35.1101 21.8875 35.1101C22.1694 35.1101 22.4485 35.0543 22.7087 34.9459C22.9689 34.8375 23.205 34.6787 23.4036 34.4786L38.0464 19.8321C38.2482 19.6339 38.4087 19.3976 38.5187 19.137C38.6287 18.8764 38.686 18.5966 38.6873 18.3137C38.6886 18.0309 38.6339 17.7505 38.5263 17.4889C38.4188 17.2273 38.2605 16.9896 38.0606 16.7894C37.8607 16.5893 37.6231 16.4307 37.3616 16.3228C37.1001 16.215 36.8199 16.1599 36.537 16.1609C36.2542 16.1619 35.9743 16.2189 35.7135 16.3286C35.4528 16.4383 35.2164 16.5985 35.0179 16.8L21.8857 29.9321Z"
                fill="#254FD4"
              />
            </svg>
          </p>
          <p className="flex items-center text-[24px] font-[500] mt-[10px] justify-center text-center">
            Refund Request Successful
          </p>
          <div>
            <p className="text-[14px] font-[400]">Dear Zahir Uddin</p>
            <p className="text-[14px] font-[400]">
              Thank you for reaching out to us. We have received your refund request and are currently processing it.{" "}
            </p>
            <p className="text-[14px] font-[400] mt-6">
              Please allow up to 7-10 business days for our team to complete the necessary procedures. We will notify
              you once the refund has been processed and the amount has been credited to your original method of
              payment. If we require any additional information to process your refund, we will contact you using the
              details you provided.
            </p>

            <p className="text-[15px] font-[500] mt-6">Check your mail and notifications for further details</p>

            <div className="mt-[64px] flex items-center justify-center">
              <Link
                href={"/b2c/my-booking"}
                className="underline text-[#254FD4] font-[500]">
                Go back to My Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
