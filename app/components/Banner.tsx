import Image from "next/image";
import React from "react";
import BannerImage from "../../public/Bannerimage.png";

const Banner = () => {
  return (
    <div className="px-3 py-4">
      <div className="bg-linear-to-r from-[#023576] from-30% to-[#549ba7] to-120% flex items-center justify-center pt-24 px-6 xl:px-24 rounded-3xl *:px-3">
        <div className="lg:w-1/2 text-white py-10">
          <h1 className="font-black text-[32px] lg:text-[40px] lg:pr-24 leading-tight py-2 max-md:px-4">
            Desktop as a Service (DaaS) Hosting Solution
          </h1>
          <span className="lg:text-lg py-4 max-md:pl-4">
            Access Your Secure & Reliable Cloud DaaS Infrastructure{" "}
            <span className="font-bold">Solution from Anywhere, Anytime</span>
          </span>

          <div className="flex gap-3 pt-6 max-md:p-4 max-sm:pb-10">
            <button className="border border-white rounded-full bg-[#0151C1] px-4 lg:px-8 py-3 max-md:text-sm font-bold whitespace-nowrap">
              Get a Free 7-Day Trial 
            </button>
            <button className="border border-white rounded-full px-4 lg:px-8 py-3 max-md:text-sm font-bold whitespace-nowrap">
              Request a free demo
            </button>
          </div>
        </div>
        <Image
          className="w-1/2 object-contain h-[400px] max-lg:hidden"
          src={BannerImage}
          alt="bannerImage"
        />
      </div>
    </div>
  );
};

export default Banner;
