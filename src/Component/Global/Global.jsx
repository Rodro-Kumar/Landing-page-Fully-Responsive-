import React from "react";
import Titile from "../Common/Titile";
import Globalimg from "../../assets/GlobalCommunication.png";

const Global = () => {
  return (
    <>
      <div className="global">
        <div className="container">
          <div className="py-24 items-center justify-center flex flex-col">
            <div className="globalHeading flex flex-col justify-center items-center pb-8">
              <Titile
                className={"pb-5 before:left-[176px] globaltitle"}
                text={"Global promotion"}
              />
              <p className="max-w-[764px] text-[#9090A7] text-base font-sans opacity-[0.8] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, ullam neque impedit placeat modi ut pariatur
                numquam maxime deserunt officiis fugit libero omnis in corrupti
              </p>
            </div>
            <div className="globalImg">
              <img src={Globalimg} alt={Globalimg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Global;
