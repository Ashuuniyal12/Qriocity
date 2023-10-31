import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Progressbar from "./utils/Progressbar";

export const Courses = () => {
  const numberProps = useSpring({
    from: { number: 0 },
    to: { number: 1489032 }, // Define your target number here
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const number2Props = useSpring({
    from: { number: 0 },
    to: { number: 273928397 }, // Define your target number here
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const number3Props = useSpring({
    from: { number: 0 },
    to: { number: 287 }, // Define your target number here
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div className="mt-24 flex flex-col items-center font-figtree">
      <h1 className="font-figtree text-[60px] text-white font-semibold">
        We are Proud of{" "}
      </h1>
      <div className="flex flex-row gap-8 mt-8 text-white">
        <div className="w-[254px] h-[130px] bg-[#414141] rounded-xl items-start pl-10 flex flex-col justify-center">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {numberProps.number.to((value) =>
              Math.floor(value).toLocaleString()
            )}
          </animated.h2>
          <span className="text-[16px] ">Learners</span>
        </div>
        <div className="w-[304px] h-[130px] bg-[#414141] rounded-xl items-start p-10 flex flex-col justify-center">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {number2Props.number.to((value) =>
              Math.floor(value).toLocaleString()
            )}
          </animated.h2>
          <span className="text-[16px] ">Lines of Codes</span>
        </div>

        <div className="w-[254px] h-[130px] bg-[#414141] rounded-xl items-start p-10 flex flex-col justify-center">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {number3Props.number.to((value) =>
              Math.floor(value).toLocaleString()
            )}
          </animated.h2>
          <span className="text-[16px] ">Mentors</span>
        </div>
      </div>

      <div className="flex flex-row gap-8 mt-8 text-white">
        <div className="w-[530px] h-[120px] bg-[#414141] rounded-xl items-start pl-10 flex flex-col justify-center">
          <div className="flex gap-4 items-center ">
            <h className="text-[40px] font-figtree font-bold">78%</h>
            <span className="text-[16px] font-figtree ">New Users</span>
          </div>
          <div className="w-[90%]">
            <Progressbar totalno={78} />
          </div>
        </div>
        <div className="w-[530px] h-[120px] bg-[#414141] rounded-xl items-start pl-10 flex flex-col justify-center">
          <div className="flex gap-4 items-center ">
            <h className="text-[40px] font-figtree font-bold">95%</h>
            <span className="text-[16px] font-figtree ">Placement Rate</span>
          </div>
          <div className="w-[90%]">
            <Progressbar totalno={95} />
          </div>
        </div>
      </div>
    </div>
  );
};
