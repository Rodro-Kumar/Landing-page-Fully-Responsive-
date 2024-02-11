import React from "react";
import Titile from "../Common/Titile";
import Packages from "../Common/Packages";
import Flex from "../Common/Flex";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import package1 from "../../assets/package1.png";
import package2 from "../../assets/package2.png";
import package3 from "../../assets/package3.png";

const Popular = () => {
  return (
    <>
      <div className="popular bg-[url('/src/assets/Services.png')] bg-cover bg-no-repeat py-28">
        <div className="container">
          <div className="heading pb-[75px]">
            <Flex className={"justify-between items-center popularHeading"}>
              <div className="left">
                <Titile />
              </div>
              <div className="right">
                <div className="iconMain flex items-center bg-white rounded-xl py-2 px-2">
                  <div className="left py-3 px-3 cursor-pointer hover:bg-[#00E5CC] hover:text-white rounded-xl transition-all">
                    <GoChevronLeft className="text-2xl" />
                  </div>
                  <div className="right py-3 px-3 cursor-pointer hover:bg-[#00E5CC] hover:text-white rounded-xl transition-all">
                    <GoChevronRight className="text-2xl" />
                  </div>
                </div>
              </div>
            </Flex>
          </div>
          <div className="packages">
            <Flex className={"justify-between packages"}>
              <Packages
                packageImg={package1}
                rating={"5.0"}
                userImg2={user2}
                userImg3={user3}
              />
              <Packages
                packageImg={package2}
                rating={"4.8"}
                titile={"The standard package to grow your business"}
                userImg2={user2}
                userImg3={user3}
                userText={"140K+ users"}
                dollar={"$109.00"}
              />
              <Packages
                packageImg={package3}
                rating={"4.8"}
                titile={"The premium package to boost your promotion"}
                userImg2={user2}
                userImg3={user3}
                userText={"99K+ users"}
                dollar={"$149.00"}
              />
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
