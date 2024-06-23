"use client";

import useToggleStore from "@/utils/zustand";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { isToggled, toggle } = useToggleStore();

  return (
    <div className="w-full h-12 flex justify-between items-center bg-black md:bg-opacity-20 bg-opacity-50 md:py-12 py-9 px-8 overflow-hidden">
      {isToggled && (
        <div className="inset-0 bg-black z-[20] w-full absolute bg-opacity-50" />
      )}
      <div className="flex items-center">
        <h1 className="shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary font-bold lg:text-4xl text-2xl md:text-3xl">
          A.N.T.I
        </h1>
      </div>
      <ul className="md:flex hidden items-center gap-x-10">
        <li>
          <a
            href="#hero"
            className="text-white text-md hover:text-lg hover:text-primary duration-150"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white text-md hover:text-lg hover:text-primary duration-150"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#features"
            className="text-white text-md hover:text-lg hover:text-primary duration-150"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#design"
            className="text-white text-md hover:text-lg hover:text-primary duration-150"
          >
            Our Design
          </a>
        </li>
      </ul>
      <a
        href="#about"
        className="md:block hidden bg-black text-white rounded-lg font-semibold hover:opacity-90 duration-100 px-5 py-3"
      >
        Explore
      </a>
      <button className="md:hidden block" onClick={() => toggle()}>
        {!isToggled && <FaBars className="w-6 h-6 text-white" />}
      </button>
      <div
        className={`md:hidden absolute bg-dark bg-opacity-90 h-full top-0 bottom-0 right-0 w-56 duration-100 ${
          isToggled ? "right-0 z-[1000]" : "opacity-0"
        }`}
      >
        <div className="relative flex flex-col px-8 py-24 w-full">
          <button className="absolute top-8 right-8 z-[100000]">
            <IoMdClose
              className="text-white w-8 h-8"
              onClick={() => toggle()}
            />
          </button>
          <ul className="md:hidden flex flex-col justify-center gap-y-8 mt-12">
            <li>
              <a
                href="#hero"
                className="text-white text-lg hover:text-xl font-medium hover:text-primary duration-150"
                onClick={() => toggle()}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white text-lg hover:text-xl font-medium hover:text-primary duration-150"
                onClick={() => toggle()}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-white text-lg hover:text-xl font-medium hover:text-primary duration-150"
                onClick={() => toggle()}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#design"
                className="text-white text-lg hover:text-xl font-medium hover:text-primary duration-150"
                onClick={() => toggle()}
              >
                Our Design
              </a>
            </li>
          </ul>
          <a
            onClick={() => toggle()}
            href="#about"
            className="mt-8 bg-black w-full text-center text-white rounded-lg font-semibold hover:scale-105 active:scale-100 duration-100 px-5 py-3"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
