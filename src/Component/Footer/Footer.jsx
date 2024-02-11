import React from "react";
import logo from "../../assets/footer.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer bg-[#060640]">
        <div className="container">
          <div className="footerwraper pt-20 pb-12 flex justify-between ">
            <div className="left">
              <div className="logo">
                <img src={logo} alt={logo} />
              </div>
              <p className="text-[#9090A7] text-base font-sans font-medium opacity-[0.8] leading-7 pt-5 pb-4 max-w-[350px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                itaque quia
              </p>
              <div className="icon ">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-transparent border-2 border-[#767685] text-[#767685]  m-auto text-center text-xl hover:border-[#00E5CC] hover:text-[#00E5CC] leading-8 mr-2"
                >
                  <FaFacebookF className="inline-block " />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-transparent border-2 border-[#767685] text-[#767685]  m-auto text-center text-xl hover:border-[#00E5CC] hover:text-[#00E5CC] leading-8 mr-2"
                >
                  <FaInstagram className="inline-block " />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-transparent border-2 border-[#767685] text-[#767685]  m-auto text-center text-xl hover:border-[#00E5CC] hover:text-[#00E5CC] leading-8 mr-2"
                >
                  <FaTwitter className="inline-block " />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-transparent border-2 border-[#767685] text-[#767685]  m-auto text-center text-xl hover:border-[#00E5CC] hover:text-[#00E5CC] leading-8"
                >
                  <FaLinkedinIn className="inline-block " />
                </a>
              </div>
            </div>
            <div className="right flex gap-x-36">
              <ul>
                <li>Quick links</li>

                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Appointment</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>

              <ul>
                <li>Quick links</li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Appointment</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>

              <ul>
                {" "}
                <li>Quick links</li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Appointment</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#000020] py-7 footerbt">
          <div className="container">
            <div className="flex items-center justify-between">
              <p className="text-white font-normal text-base">
                Copyright © 2021 <span className="text-[#00E5CC]">B</span>izpro
              </p>
              <p className="text-white font-normal text-base">
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
