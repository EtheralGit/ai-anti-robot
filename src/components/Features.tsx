"use client";
import React from "react";
import { Div } from "./ui/moving-border";
import { TYPEONE, TYPETWO } from "@/information/data";

const Features = () => {
  return (
    <section
      id="features"
      className="relative max-w-6xl mx-auto lg:px-0 md:px-16 sm:px-4 px-16 py-16"
    >
      <div className="absolute z-[-11] bottom-4 left-12 w-[20%] h-[30%] rounded-full green_gradient" />
      <div className="absolute z-[-11] top-12 right-12 w-[20%] h-[40%] rounded-full green_gradient" />

      <h1 className="text-center text-white text-3xl font-bold">
        Main <span className="text-primary">Features</span>
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 md:mt-14 mt-10">
        <Div className="border-2 border-primary lg:col-span-1 col-span-2 rounded-none bg-transparent flex flex-col justify-between overflow-hidden">
          <div>
            <h1 className="text-[1.4rem] font-semibold text-primary text-start sm:pl-5 pl-3 pt-4 leading-7">
              Automatic Trash Collection
            </h1>
            <p className="text-white text-lg font-light opacity-70 text-start sm:px-5 px-3 mb-2 mt-2">
              {TYPEONE}
            </p>
          </div>

          <img
            src="/ai.jpg"
            alt=""
            className="object-center object-fill opacity-70"
          />
        </Div>
        <div className="border-2 border-primary sm:col-span-1 col-span-2 rounded-lg flex flex-col overflow-hidden">
          <img
            src="/ai2.jpg"
            alt=""
            className="object-center object-fill h-56 opacity-80"
          />
          <div className="gap-y-12">
            <h1 className="text-[1.4rem] font-semibold text-primary text-start sm:pl-5 pl-3 pt-4">
              Human Interaction
            </h1>
            <p className="text-white text-lg font-light opacity-70 text-start sm:px-5 px-3 mb-2">
              {TYPETWO}
            </p>
          </div>
        </div>
        <div className="border-2 border-primary sm:col-span-1 col-span-2 rounded-lg flex flex-col overflow-hidden">
          <h1 className="text-primary font-semibold text-[1.4rem] text-start sm:pl-5 pl-3 pt-4 mb-2">
            Environmentally Friendly
          </h1>
          <img src="/ai3.jpg" alt="" className="object-center h-96" />
        </div>
      </div>
    </section>
  );
};

export default Features;
