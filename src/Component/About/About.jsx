import React from "react";
import safeImg from "../../assets/safe.png";
import expertImg from "../../assets/expert.png";
import aboutimg from "../../assets/about.png";
import starImg from "../../assets/star.png";
import lineImg from "../../assets/line.png";

const About = () => {
  return (
    <>
      <div id="about" className="py-20">
        <div className="container">
          <div className="aboutWraper flex items-center justify-between">
            <div className="left">
              <h3 className="aboutText text-[45px] font-sans font-bold text-[#060640] pb-3 relative before:absolute before:[''] before:top-0 before:left-[75px] before:w-[36px] before:h-[20px] before:rounded-t-full before:border-b-0 before:border-[#00E5CC] before:border-solid before:border-[8px]">
                About us
              </h3>
              <p className="max-w-[431px] text-base font-sans font-normal text-[#9090A7] opacity-[0.8] leading-7 pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                eaque obcaecati aliquam perferendis excepturi porro reiciendis
                necessitatibus iste et. Numquam laudantium provident architecto
                quam rem placeat
              </p>
              <div className="safe flex gap-x-6 mb-7">
                <div className="left">
                  <img src={safeImg} alt={safeImg} />
                </div>
                <div className="right">
                  <h3 className="text-xl font-sans text-[#060640] font-medium pb-2">
                    Safe and secured
                  </h3>
                  <p className="text-[#9090A7] font-sans font-normal text-base leading-7 max-w-[331px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor, optio iste
                  </p>
                </div>
              </div>
              <div className="safe flex gap-x-6">
                <div className="left">
                  <img src={expertImg} alt={expertImg} />
                </div>
                <div className="right">
                  <h3 className="text-xl font-sans text-[#060640] font-medium pb-2">
                    Highly expert team
                  </h3>
                  <p className="text-[#9090A7] font-sans font-normal text-base leading-7 max-w-[331px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor, optio iste
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="main relative">
                <picture>
                  <img src={aboutimg} alt={aboutimg} className="relative" />
                </picture>
                <img
                  src={starImg}
                  alt={starImg}
                  className="absolute top-[-83px] right-[-60px] starImg"
                />
                <img
                  src={lineImg}
                  alt={lineImg}
                  className="absolute bottom-[63px] right-[-49px] lineImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
