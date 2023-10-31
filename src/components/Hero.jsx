import React from "react";
import heroImage from "../assets/Qriocity.png";
export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="bg-[#FF7A00] absolute top-[8rem] left-[18rem] h-[35.25rem]   w-[25rem] rounded-full blur-[10rem]"></div>
      <div className="bg-[#3cffff] absolute top-[12rem] -left-[6rem]  h-[15.25rem] z-10  w-[30.25rem] rounded-2xl blur-[10rem]"></div>
      <img src={heroImage} alt="hero-image absolute " className="mt-20 z-20 " />
      <h1 className="absolute z-50 top-[130px] left-[100px] font-figtree text-[72px] text-white w-[600px] font-semibold ">
        Simple solutions for complex projects
      </h1>

      <div className="group w-[990px] h-[166px] bg-white hover:cursor-pointer font-figtree rounded-[27px] z-[999] flex flex-row px-[150px] justify-between items-center ">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[40px] animate-charcter ">4.1</h2>
          <span className="font-medium text-[16px] animate-charcter">Google Ratings</span>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[40px] animate-charcter ">12 LPA</h2>
          <span className="font-medium text-[16px] animate-charcter">Highest Package</span>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[40px] animate-charcter ">500+</h2>
          <span className="font-medium text-[16px] animate-charcter ">Hiring Partners</span>
        </div>
      </div>
    </div>
  );
};
