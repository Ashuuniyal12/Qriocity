import React from 'react'
import demo from "../assets/demo.png";

const Projects = () => {
  return (
    <div className="relative">
      <div className="bg-[#FF7A00] absolute top-[34rem] left-[-15rem] h-[35.25rem]   w-[20rem] rounded-full blur-[10rem]"></div>
      <div className="bg-[#3cffff] absolute top-[20rem] right-[-20rem]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[10rem]"></div>
      <h1 className="font-figtree  text-[32px]  z-10 md:text-[60px] mt-8 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-semibold">
        Our Custom Projects
      </h1>

      <div className="flex lg:flex-row flex-col gap-16 my-16 justify-center items-center">
        <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px] flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
          <h3 className="text-white text-[24px] mb- font-bold">Standard</h3>
          <img
            src={demo}
            alt="image"
            className="grayscale group-hover:grayscale-0 "
          />
          <h3 className="text-white text-[24px] mb- font-bold">
            Generative AI
          </h3>
          <button className="button w-[220px] group-hover:bg-black">
            <span>Explore More </span>
          </button>
        </div>

        <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
          <h3 className="text-white text-[24px] mb- font-bold">Premium</h3>
          <img
            src={demo}
            alt="image"
            className="grayscale group-hover:grayscale-0 "
          />
          <h3 className="text-white text-[24px] mb- font-bold">
            Generative AI
          </h3>
          <button className="button w-[220px] group-hover:bg-black">
            <span>Explore More </span>
          </button>
        </div>

        <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
          <h3 className="text-white text-[24px] mb- font-bold">Standard</h3>
          <img
            src={demo}
            alt="image"
            className="grayscale group-hover:grayscale-0 "
          />
          <h3 className="text-white text-[24px] mb- font-bold">
            Generative AI
          </h3>
          <button className="button w-[220px] group-hover:bg-black">
            <span>Explore More </span>
          </button>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-16 my-16 justify-center items-center">
        <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px] flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
          <h3 className="text-white text-[24px] mb- font-bold">Standard</h3>
          <img
            src={demo}
            alt="image"
            className="grayscale group-hover:grayscale-0 "
          />
          <h3 className="text-white text-[24px] mb- font-bold">
            Generative AI
          </h3>
          <button className="button w-[220px] group-hover:bg-black">
            <span>Explore More </span>
          </button>
        </div>

        <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
          <h3 className="text-white text-[24px] mb- font-bold">Premium</h3>
          <img
            src={demo}
            alt="image"
            className="grayscale group-hover:grayscale-0 "
          />
          <h3 className="text-white text-[24px] mb- font-bold">
            Generative AI
          </h3>
          <button className="button w-[220px] group-hover:bg-black">
            <span>Explore More </span>
          </button>
        </div>

        <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
          <h3 className="text-white text-[24px] mb- font-bold">Standard</h3>
          <img
            src={demo}
            alt="image"
            className="grayscale group-hover:grayscale-0 "
          />
          <h3 className="text-white text-[24px] mb- font-bold">
            Generative AI
          </h3>
          <button className="button w-[220px] group-hover:bg-black">
            <span>Explore More </span>
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default Projects