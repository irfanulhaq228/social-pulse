"use client";

import React, { useState } from "react";

import data from "@/assests/navbar-pages";

import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <div className="navbar justify-between px-[10px] md:px-[20px]">
        <div className="left">
          <p className="text-[23px] font-[600]">FindEZ</p>
        </div>
        <div className="right gap-5 items-center hidden md:flex">
          {data &&
            data?.map((item) => (
              <a
                key={item.id}
                className="text-gray-300 cursor-pointer hover:text-white hover:underline focus:scale-[0.99] capitalize text-[15px]"
              >
                {item.label}
              </a>
            ))}
          <button className="bg-white h-[35px] w-[70px] rounded-md text-black font-[600] active:scale-[0.99]">
            Login
          </button>
        </div>
        <div className="right gap-5 items-center flex md:hidden">
          <button
            className="bg-white h-[35px] w-[35px] rounded-md text-black font-[600] active:scale-[0.99] flex justify-center items-center"
            onClick={() => setShowOptions(!showOptions)}
          >
            <FaBars />
          </button>
        </div>
      </div>
      {showOptions && (
        <div className="flex md:hidden flex-col gap-1 bg-gray-950 p-[10px]">
          {data &&
            data?.map((item) => (
              <a
                key={item.id}
                className="text-gray-300 cursor-pointer hover:text-white hover:underline focus:scale-[0.99] capitalize text-[15px]"
              >
                {item.label}
              </a>
            ))}
          <button className="bg-white h-[35px] w-full rounded-md text-black font-[600] active:scale-[0.99] mt-2">
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
