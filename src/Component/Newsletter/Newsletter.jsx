import React from "react";
import Titile from "../Common/Titile";
import Button from "../Common/Button";
import student from "../../assets/student.png";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter py-36">
        <div className="container">
          <div className=" bg-[url('src/assets/Newsletter.png')] bg-cover bg-no-repeat py-12 pl-14 relative subscribeWraper">
            <div className="left">
              <Titile text={"Subscribe newsletter"} />
              <p className="text-[#9090A7] text-base font-sans font-medium opacity-[0.8] leading-7 pt-5 max-w-[668px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit saepe recusandae animi atque repellat dolorum
                cupiditate officiis obcaecati consectetur quas fugit distinctio
              </p>
              <div className="subscribe pt-10 ">
                <div className="input relative inline-block">
                  <input
                    type="Email"
                    placeholder="Enter your email"
                    className=" rounded-md bg-white py-8 pl-5 pr-[436px] relative"
                  />
                  <div className="subBtn absolute top-0 right-0 py-[16px] pr-4">
                    <Button
                      className={
                        "bg-[#060640] text-white font-sans text-sm rounded-md py-5 px-10 "
                      }
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="student absolute top-[-70px] right-0">
              <img src={student} alt={student} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
