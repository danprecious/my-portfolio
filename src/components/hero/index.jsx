import React from "react";
import localFont from "next/font/local";
import { HiArrowCircleRight } from "react-icons/hi";
import CustomButton from "../utilities/button";
import { BiSolidUser, BiUserCircle } from "react-icons/bi";

const myFont = localFont({
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-myFont",
});

const CircleText = ({ text, radius }) => {
  const characters = text.split('');
  const angle = 360 / characters.length;

  return (
    <div className="">
      {characters.map((char, index) => {
        const style = {
          // transform: `rotate(${angle * index}deg) translate(${radius}px) rotate(-${angle * index}deg)`
        };
        return (
          <span key={index} style={style} className="circle-char text-sm ">
            {char}
          </span>
        );
      })}
      
    </div>
  );
};
// "WsParadoseRegular-1jPAe.ttf"
const HeroSection = () => {
  return (
    <div className=" flex justify-center flex-col">
      <div className={`${myFont.variable}`}>
        <h1 className="md:text-[8rem] text-[4rem] text-center md:text-center md:p-3 py-8 px-2  font- font-myFont  flex justify-center items-center">
          Building <br /> Web Products
        </h1>
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="md:w-[27%] text-balance md:mx-12 p-4 text-center md:text-left md:text-sm md:p-4">
          <p className="">
          Through passion, dedication, grit and hardwork, <br /> I strive to
          develop web products that users aren't just pleased with but also want to
          stay on <br /> I am <strong>Dan Precious</strong>, pleased to have you
          here
          
        </p>
        <div className="py-4">
          
          <CustomButton text="Get to know me">
          <BiSolidUser />
        </CustomButton>
          </div>
          </div>
        <div>{/* animation */}</div>
        <div className="items-center relative flex md:mx-12">
          <div className="text-[4rem] rounded-ico">
            <HiArrowCircleRight />
          </div>
          
      
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
