import React from "react";
import Button from "../Common/Button";
import { FaStar } from "react-icons/fa6";
import BizproLogo from "../../assets/Bizpro.png";
import parent from "../../assets/parent.png";
import child1 from "../../assets/child1.png";
import child2 from "../../assets/child2.png";
import child3 from "../../assets/child3.png";
import quotes from "../../assets/quotes.png";
import { IoPlay } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="header bg-headerImg  bg-cover bg-no-repeat pt-12 pb-[170px]">
        <div className="container">
          <div className="nav bg-[#FFFFFF] py-[22px] px-[22px] rounded-lg items-center flex justify-between mb-24">
            <div className="logo">
              <a href="#">
                <picture>
                  <img src={BizproLogo} alt={BizproLogo} title="Bizpro" />
                </picture>
              </a>
            </div>
            <ul className="list flex gap-x-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
            <div className="navBtn flex">
              <Button
                className={
                  "text-black font-medium font-sans text-sm py-4 px-[28px] rounded-xl hover:bg-[#060640] hover:text-white transition-all"
                }
              >
                Sign In
              </Button>
              <Button
                className={
                  " text-black font-sans font-medium text-sm py-4 px-[28px] rounded-xl hover:bg-[#060640] hover:text-white transition-all"
                }
              >
                Free Trial
              </Button>
            </div>
          </div>
          <div className="hero flex items-center justify-between ">
            <div className="left">
              <h1 className="pb-5 text-5xl text-[#060640] font-sans font-bold leading-[65px] max-w-[423px] relative before:absolute before:content-[''] before:top-0 before:left-[103px] before:w-[36px] before:h-[20px] before:rounded-t-full before:border-b-0 before:border-[#00E5CC] before:border-solid before:border-[8px] ">
                Perfect pplace for your business promotion✌️
              </h1>
              <p className="w-[402px] text-base leading-7 font-normal text-[#9090A7] pb-[30px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                voluptatem vero harum fugit natus
              </p>
              <div className="heroBtn flex items-center gap-x-7">
                <Button
                  className={
                    "text-white text-sm font-medium bg-[#060640] rounded-xl py-[22px] px-[35px] hover:bg-[#262666] transition-all hover:shadow-md hover:shadow-[#06064079] hover:-translate-y-2"
                  }
                >
                  Get Started
                </Button>
                <div className="play h-[60px] w-[60px] rounded-full bg-white relative cursor-pointer transition-all ">
                  <IoPlay className="playbtn text-[#00E5CC] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-2xl" />
                </div>
              </div>
              <div className="rating bg-white rounded-lg max-w-[418px] pt-[29px] pb-[23px] px-[21px] mt-[70px] ">
                <div className="top flex items-center justify-between pb-[10px]">
                  <img src={quotes} alt={quotes} />
                  <p className="flex items-center gap-x-1">
                    <FaStar className="text-[#FFBF00]" />
                    <span className="text-[#060640] font-medium text-[14px] font-sans">
                      4.9
                    </span>
                  </p>
                </div>
                <p className="text-[#9090A7] text-sm font-sans font-normal opacity-[0.8] leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  ut ea odio quo quam cum
                </p>
                <div className="details"></div>
              </div>
            </div>
            <div className="right">
              <div className="main relative">
                <div className="img-1 relative">
                  <img src={parent} alt={parent} />
                </div>

                <div className="child1 absolute bottom-[80px] left-[-107px]">
                  <img src={child1} alt={child1} />
                </div>
                <div className="child2 absolute bottom-[50px] right-[-60px]">
                  <img src={child2} alt={child2} />
                </div>
                <div className="child3 absolute bottom-[-146px] left-[190px]">
                  <img src={child3} alt={child3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
