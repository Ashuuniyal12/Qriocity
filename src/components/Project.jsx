import React from "react";
import demo from "../assets/demo.png";
export const Project = () => {
  return (
    <div className="my-24 flex flex-col items-center font-figtree">
      <h1 className="font-figtree text-[60px] text-white font-semibold">
        Our Custom Projects{" "}
      </h1>

      <div className="flex flex-row gap-16 my-16">
        <div className=" group w-[388px] h-[574px] flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
          <h3 className="text-white text-[24px] mb- font-bold">Standard</h3>
          <img src={demo} alt="image"  className="grayscale group-hover:grayscale-0 " />
          <h3 className="text-white text-[24px] mb- font-bold">
            Generative AI
          </h3>
          <button className="button w-[220px] group-hover:bg-black">
            <span>Explore More </span>
          </button>
        </div>

        <div className=" group w-[388px] h-[574px] flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
          <h3 className="text-white text-[24px] mb- font-bold">Premium</h3>
          <img src={demo} alt="image" className="grayscale group-hover:grayscale-0 "/>
          <h3 className="text-white text-[24px] mb- font-bold">
            Generative AI
          </h3>
          <button className="button w-[220px] group-hover:bg-black">
            <span>Explore More </span>
          </button>
        </div>

        <div className=" group w-[388px] h-[574px] flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
          <h3 className="text-white text-[24px] mb- font-bold">Standard</h3>
          <img src={demo} alt="image" className="grayscale group-hover:grayscale-0 "/>
          <h3 className="text-white text-[24px] mb- font-bold">
            Generative AI
          </h3>
          <button className="button w-[220px] group-hover:bg-black">
            <span>Explore More </span>
          </button>
        </div>
      </div>
      <button className="button w-[300px]">
        <span>Explore All Projects </span>
      </button>
    </div>
  );
};
