"use client";
import useToggleStore from "@/utils/zustand";
import React, { useState } from "react";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [wordOne, setWordOne] = useState(false);
  const [wordTwo, setWordTwo] = useState(false);
  const [wordThree, setWordThree] = useState(false);
  const [wordFour, setWordFour] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <section
      className="text-white relative h-[80vh] flex lg:flex-row justify-center items-center  gap-y-4 flex-col-reverse lg:px-20 sm:mt-0 mt-12"
      id="hero"
    >
      <div className="absolute z-[-11] top-4 right-2 w-[70%] h-[30%] rounded-full green_gradient" />
      <div className="absolute z-[-11] bottom-4 left-2 w-[20%] h-[30%] rounded-full green_gradient" />
      <div className={`w-3/5 duration-500 lg:block hidden ml-20`}>
        <h1 className="xl:text-5xl lg:text-4xl text-3xl text-white font-medium tracking-wider">
          <span
            className={`${
              done ? "font-bold text-primary" : "text-white"
            }   duration-700 `}
          >
            A
          </span>
          <Typewriter
            words={["utomated"]}
            typeSpeed={50}
            onType={() => {
              setTimeout(() => {
                setWordOne(true);
              }, 400);
            }}
          />
        </h1>
        <h1 className="xl:text-5xl lg:text-4xl text-3xl text-white font-medium tracking-wider">
          {wordOne && (
            <>
              <span
                className={`${
                  done ? "font-bold text-primary" : null
                }   duration-700 -ml-1 `}
              >
                N
              </span>

              <Typewriter
                words={["avigation &"]}
                typeSpeed={50}
                onType={() => {
                  setTimeout(() => {
                    setWordTwo(true);
                  }, 650);
                }}
              />
            </>
          )}
        </h1>
        <h1 className="xl:text-5xl lg:text-4xl text-3xl text-white font-medium tracking-wider">
          {wordTwo && (
            <>
              {" "}
              <span
                className={`${
                  done ? "font-bold text-primary" : null
                } duration-700`}
              >
                T
              </span>
              <Typewriter
                words={["rash"]}
                typeSpeed={50}
                onType={() => {
                  setTimeout(() => {
                    setWordThree(true);
                  }, 300);
                }}
              />
            </>
          )}
        </h1>
        <h1
          className={` xl:text-5xl lg:text-4xl text-3xl text-white font-medium tracking-wider duration-1000 lg:ml-2 ml-1`}
        >
          {wordThree && (
            <>
              <span
                className={`${
                  done ? "font-bold text-primary" : null
                } duration-700`}
              >
                I
              </span>
              <Typewriter
                typeSpeed={50}
                words={["dentification"]}
                onType={() => {
                  setTimeout(() => {
                    setDone(true);
                  }, 730);
                  setTimeout(() => {
                    setWordFour(true);
                  }, 1700);
                }}
              />
            </>
          )}
        </h1>
        <p className="text-white text-opacity-90 font-medium md:text-2xl text-xl tracking-widest py-8 duration-300">
          {wordFour && (
            <Typewriter
              typeSpeed={50}
              cursor={true}
              cursorBlinking={true}
              cursorColor="white"
              words={["For Habits, Cleaner Environment"]}
            />
          )}
        </p>
      </div>
      <div className="lg:hidden block text-center mt-12">
        <h1 className="text-center font-bold tracking-wider text-3xl text-white">
          <span className="font-extrabold text-primary">A</span>utomated{" "}
          <span className="font-extrabold text-primary">N</span>avigation &{" "}
          <span className="font-extrabold text-primary">T</span>rash{" "}
          <span className="font-extrabold text-primary">I</span>dentification
        </h1>
        <p className="text-white text-opacity-90 font-medium md:text-2xl text-xl tracking-widest py-8 duration-300">
          For Habits, Cleaner Environment
        </p>
      </div>
      {/* 3d object model */}

      <img src="/depan.png" alt="" className="sm:w-1/2 pointer-events-none" />
    </section>
  );
};

export default Hero;
