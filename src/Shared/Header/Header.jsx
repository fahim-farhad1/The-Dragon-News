import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [open, isOPen] = useState(false);

  const navlink = (
    <>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Career</Link>
    </>
  );
console.log(open)
  const currentDate = moment().format("dddd, MMMM, YYYY");
  return (
    <div>
      {/* Nav-header */}
      <div className="w-full mx-auto text-center fixed z-50 bg-white top-0">
        <p className="font-oldEnglishRegular text-4xl md:text-5xl  pt-5">
          The Dragon News
        </p>
        <p className="text-sm">Journalism Without Fear or Favour</p>
        <p className="font-PoppinsSemiBold">{currentDate}</p>
      </div>
      <div className="flex items-center justify-center mt-[112px]">
        <button className="bg-[#D72050] text-white p-2">Latest</button>
        <Marquee
          speed={80}
          className="text-sm md:text-base font-PoppinsSemiBold"
        >
          Match Highlights: Germany vs Spain — as it happened! Match Highlights:
          Germany vs Spain as...
        </Marquee>
      </div>
      {/* navbar and logins */}
      {
        open ? <IoClose onClick={()=> isOPen(!open)} className="md:hidden w-8 h-8"/> :  <BsList onClick={()=> isOPen(!open)} className="md:hidden w-8 h-8"/>
      }
      <div className={`md:flex items-center static ${open === true ? "absolute h-full w-32 p-2 bg-base-300 md:bg-white":"hidden"}`}>
        <div className={`flex flex-col md:items-center md:flex-row gap-2 md:gap-5 w-7/12 justify-end`}>
          {navlink}
        </div>
        <div className="flex md:flex-row flex-col md:justify-end gap-2 w-6/12">
          <FaRegUserCircle className="h-10 w-10" />
          <button className="bg-gray-500 text-white font-PoppinsBold px-4 py-2 w-fit text-sm md:text-base">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
