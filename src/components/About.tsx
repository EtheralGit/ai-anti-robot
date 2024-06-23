import { DESCRIPTION } from "@/information/data";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full flex flex-col 2xl:px-16 px-8 justify-center items-center mb-12"
    >
      <div className="absolute z-[-11] top-12 right-12 w-[20%] h-[30%] rounded-full green_gradient" />
      <div className="absolute z-[-11] bottom-4 left-32 w-[20%] h-[30%] rounded-full green_gradient" />

      <div className="w-full h-full lg:flex-row flex-col flex justify-center lg:items-start items-center gap-x-16 mb-4 ">
        <img
          src="/about.png"
          alt=""
          className="lg:w-1/2 md:w-4/5 w-full object-center pointer-events-none h-full"
        />

        <div className="w-full flex flex-col lg:gap-y-2 xl:pt-36 lg:pt-28 lg:mb-4 justify-center lg:items-start items-center h-full ">
          <h1 className="relative text-center text-white text-3xl font-bold w-fit mb-12">
            About <span className="text-primary">ANTI</span>
            <div className="w-24 h-1 absolute -bottom-2 rounded-r-full rounder-l-md bg-primary lg:block hidden" />
            <div className="w-12 h-1 absolute -bottom-5 rounded-r-full rounder-l-md bg-primary lg:block hidden" />
          </h1>
          <h1 className="text-white md:text-2xl text-xl lg:text-start text-center font-semibold tracking-wider mb-4">
            How <span className="text-primary font-bold">ANTI</span> Treat The
            Environment
          </h1>
          <p className="text-white opacity-90 text-md lg:text-start text-center">
            {DESCRIPTION}
          </p>
          <a
            href="#design"
            className="w-26 h-12 rounded-full bg-primary px-7 py-3 text-black font-bold mt-4 hover:scale-105 active:scale-100 duration-100"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
