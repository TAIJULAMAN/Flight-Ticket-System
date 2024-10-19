import React from "react";
import Image from "@assets/newsletter/newsletter.jpg";

function NewsLetter() {
  return (
    <div
      className="mt-10 h-[300px] text-white pl-[65px]"
      style={{
        background: `linear-gradient(90deg, rgba(15, 30, 77, 0.9) 0%, rgba(23, 75, 237, 0.25) 100%), url(${Image.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="py-[70px] relative w-[1300px] mx-auto">
        <div className="">
          <div>
            <div className="mb-[32px] w-[612px] h-[56px]">
              <p className="text-[25px] font-medium">“Stay updated with our latest news and insights,</p>
              <p className="text-[25px] font-medium">delivering valuable information straight to your inbox”</p>
            </div>
            <p className="text-[18px] font-normal">Subscribe now and never miss a beat!</p>
            <div className="flex-1 mt-6 md:mt-2">
              <form className="flex items-center gap-x-3 md:justify-start">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Example@gmail.com"
                    className="w-[353px] h-[35px] px-[18px]  py-[8px] text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <button className="h-[35px] block w-auto py-[7px] px-[42px] font-medium text-sm text-center text-white bg-[#2C5FFF] rounded-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsLetter;
