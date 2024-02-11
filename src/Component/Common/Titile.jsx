import React from "react";

const Titile = ({ className, text }) => {
  return (
    <h3
      className={`popularText text-[#060640] font-sans font-bold text-[45px] relative before:absolute before:[''] before:top-0 before:left-14 before:w-[45px] before:h-[25px] before:rounded-full before:border-[8px] before:border-solid before:border-[#00E5CC] before:border-b-0 before:rounded-b-none ${className}`}
    >
      {text ? text : "Popular packages"}
    </h3>
  );
};

export default Titile;
