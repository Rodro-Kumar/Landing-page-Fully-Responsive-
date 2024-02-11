import React from "react";
import package1 from "../../assets/package1.png";
import { GiRoundStar } from "react-icons/gi";
import user1 from "../../assets/user1.png";

const Packages = ({
  packageImg,
  rating,
  titile,
  userImg1,
  userImg2,
  userImg3,
  userText,
  dollar,
}) => {
  return (
    <>
      <div className="packageMain max-w-[370px] rounded-2xl py-4 px-4 bg-[#ffffff5e] border-2 border-white     cursor-pointer hover:bg-white  hover:shadow-md hover:shadow-[#00000010]">
        <div className="pic max-w-[338px] max-h-[273px] rounded-md relative ">
          <img src={packageImg ? packageImg : package1} alt={packageImg} />
          <div className="rating absolute mr-[14px] mb-[14px] bottom-0 right-0 bg-[#ffffff]  py-[6px] px-3 rounded-xl flex items-center gap-x-1">
            <GiRoundStar className="star text-[#FFBF00]  transition-all" />
            <p className="text-[#060640] font-sans font-medium text-sm">
              {rating ? rating : "4.9"}
            </p>
          </div>
        </div>
        <p className="text-black font-sans font-medium text-xl leading-7 max-w-[291px] pb-[15px] pt-5">
          {titile ? titile : "The basic package to start your promotion"}
        </p>
        <div className="bottom flex items-center justify-between">
          <div className="user flex items-center gap-x-14">
            <div className="all_img relative">
              <img
                src={userImg1 ? userImg1 : user1}
                alt={userImg1}
                className="relative"
              />
              <img
                src={userImg2 ? userImg2 : user1}
                alt={userImg1}
                className="absolute top-0 left-6"
              />
              <img
                src={userImg3 ? userImg3 : user1}
                alt={userImg3}
                className="absolute top-0 left-12"
              />
            </div>
            <div className="div">
              <p className="text-[#9090A7] font-sans font-medium text-sm opacity-[0.8]">
                {userText ? userText : "200K+ users"}
              </p>
            </div>
          </div>
          <div className="dollar">
            <p className="text-[#00E5CC] font-sans font-medium text-sm">
              {dollar ? dollar : "$89.00"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
