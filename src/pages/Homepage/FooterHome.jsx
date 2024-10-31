import cl from "../../assets/cl5.svg";
import logo from "../../assets/logoss.svg";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";


import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import v4 from '../../assets/vertor4.svg'
const FooterHome = () => {
  return (
    <footer className=" mt-20 relative">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-teal-600 flex justify-center md:justify-start">
              <Link  to={'/'}><img  src={logo} className="w-[250px]" alt="Logo" /></Link>
            </div>

            <p className="mt-4 text-center md:text-left mx-auto md:mx-0 max-w-xs text-[#000000]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>

            
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-1 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-2xl text-[#000000] text-center md:text-left">Quick Links</p>

              <ul className="mt-4 flex flex-col items-center md:items-start space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#000000] text-lg transition hover:opacity-75"
                  >
                    {" "}
                   Lorem
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] text-lg transition hover:opacity-75"
                  >
                    {" "}
                   Lorem
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] text-lg transition hover:opacity-75"
                  >
                    {" "}
                   Lorem
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] text-lg transition hover:opacity-75"
                  >
                    {" "}
                   Lorem
                  </a>
                </li>
           

              
              </ul>
            </div>

            <div>
              <p className="font-medium text-2xl text-[#000000] text-center md:text-left">Follow Us</p>
            <div className=" flex items-center justify-center md:justify-start gap-6 mt-4">
                <RiTwitterXLine className=" text-[#0F172A]" size={32}/>
                <AiFillInstagram className=" text-[#0F172A]" size={38}/>
                <FaFacebook className=" text-[#0F172A]" size={30}/>
            </div>
            </div>

            <div  className=" ">
              <p className="font-medium text-center md:text-left text-2xl text-[#000000]">Contact</p>

              <ul className="mt-4 flex flex-col items-center md:items-start text-[#000000] space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#000000] flex items-center gap-2 transition hover:opacity-75 text-xl"
                  >
                   <FaPhone size={20} className="text-[#22C55E]"/>
                   0123456789                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] flex items-center gap-2 transition hover:opacity-75 text-xl"
                  >
                   <MdEmail size={20} className="text-[#22C55E]"/>
                   Lorem@gmail.com                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] flex items-center gap-2 transition hover:opacity-75 text-xl"
                  >
                   <FaLocationDot size={20} className="text-[#22C55E]"/>
                   1230, Lorem Ipsum                  </a>
                </li>

              
              </ul>
            </div>

           
          </div>
        </div>

        <div className=" relative bg-[#1E293B] rounded-lg z-20 py-4 flex justify-center ">
          <p className="z-20 text-white">
            &copy; Copyright 2024, All Rights Reserved
          </p>
        </div>
      </div>
      <img src={cl} className=" absolute left-0 z-10 h-[300px]  bottom-0" alt="" />
      <img src={v4} className=" absolute hidden lg:inline-block right-0 z-10   -bottom-4" alt="" />
    </footer>
  );
};

export default FooterHome;
