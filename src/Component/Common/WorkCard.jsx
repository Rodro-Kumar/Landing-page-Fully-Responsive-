import React from "react";
import boximg from "../../assets/box.png";

const WorkCard = ({ img, cardTitle, cardDetail }) => {
  return (
    <>
      <div
        className={
          "workcard bg-white shadow-sm shadow-[#0000002d]  max-w-[370px] rounded-lg px-[30px] py-[30px] cursor-pointer transition-all hover:shadow-[#403f0696] hover:bg-[#f1f1f1]"
        }
      >
        <picture className=" rounded-lg py-[15px] px-[15px] inline-block mb-12 transition-all ">
          <img src={img ? img : boximg} alt={boximg} />
        </picture>
        <h3
          className={`font-sans font-medium text-2xl text-[#060640] pb-[10px] `}
        >
          {cardTitle ? cardTitle : "Choose packages"}
        </h3>

        <p
          className={`text-base font-normal font-sans text-[#9090A7] opacity-[0.8] leading-[28px] `}
        >
          {cardDetail
            ? cardDetail
            : "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore natuset sit officia, eligendi iste nam"}
        </p>
      </div>
    </>
  );
};

export default WorkCard;
