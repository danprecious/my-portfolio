import React from "react";
import localFont from "next/font/local";
import { HiArrowCircleRight } from "react-icons/hi";
import CustomButton from "../utilities/button";
import { BiSolidUser, BiUserCircle } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const myFont = localFont({
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-myFont",
});

// "WsParadoseRegular-1jPAe.ttf"
const HeroSection = () => {
  return (
    <div className=" flex justify-center flex-col min-h-[75vh]">
      <div className={`${myFont.variable} relative`}>
        <h1 className="md:text-[7.5rem] text-[3rem] text-center md:text-center md:p-3 my-4 px-2  font- font-myFont  flex flex-col">
          <span>Building</span>
          <p>
            <span className="border-b-[7px] lg:border-b-[10px]  border-lime-500">
              Web
            </span>
            <span> Products</span>
          </p>
        </h1>
        <div className="absolute w-full bottom-0 blur z-30 h-[50%] overlay-shadow"></div>
      </div>
      <div
        className={`${myFont.variable} flex justify-evenly flex-col md:flex-row`}
      >
        <div className="md:w-[30%] text-balance md:mx-12 p-4 my-3 md:text-sm md:p-4">
          <p className="leading-relaxed lg:text-base text-center md:text-left  text-pretty">
            Hi there, I'm{" "}
            <strong className="dark:text-lime-500">Dan Precious</strong>, a
            software engineer with a strong passion for easy-to-use web
            applications.
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-start px-4 lg:w-[40%] my-5 md:my-0 w-full">
          <div>
            <Link href={"/contact"}>
              <CustomButton text={"Let's build"} size={"10"}>
                <FaArrowRight />
              </CustomButton>
            </Link>
          </div>
        </div>
        <div className="items-center relative flex md:mx-12">
          <div className="text-[3rem] rounded   hidden md:flex">
            <Link href={"/about"}>
              <HiArrowCircleRight className="text-lime-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
