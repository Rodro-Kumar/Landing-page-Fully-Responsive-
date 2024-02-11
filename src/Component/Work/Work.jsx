import React from "react";
import WorkCard from "../Common/WorkCard";
import Flex from "../Common/Flex";
import boxImg from "../../assets/box.png";
import calenderImg from "../../assets/calendar.png";
import staticsImg from "../../assets/statistics.png";

const Work = () => {
  return (
    <>
      <div className="work py-32">
        <div className="container">
          <div className="workHeading pb-[70px] flex flex-col justify-center items-center text-center">
            <h3 className="text-[45px] font-bold font-sans text-[#060640] pb-3 relative before:absolute before:content-[''] before:top-0 before:right-[51px] before:w-[44px] before:h-[24px] before:rounded-t-full before:border-b-0 before:border-[#00E5CC] before:border-solid before:border-[8px]">
              How it works
            </h3>
            <p className="text-base font-sans font-normal text-[#9090A7] leading-7 max-w-[431px] inline-block opacity-[0.7] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              ut cum sit necessitatibus
            </p>
          </div>
          <Flex className={"justify-between workwraper"}>
            <WorkCard img={boxImg} />
            <WorkCard img={calenderImg} cardTitle={"Schedule appointment"} />
            <WorkCard img={staticsImg} cardTitle={"Grow together"} />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Work;
