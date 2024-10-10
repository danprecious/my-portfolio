"use client";

import { links } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import {
  FaBriefcase,
  FaHome,
  FaInfo,
  FaPenFancy,
  FaPhoneAlt,
  FaUserCircle,
} from "react-icons/fa";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const path = usePathname();
  console.log(path);

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      href: "/about",
      icon: <FaUserCircle />,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <FaBriefcase />,
    },
    {
      name: "Open Diary",
      href: "/open_diary",
      icon: <FaPenFancy />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <FaPhoneAlt />,
    },
  ];

  return (
    <div className=" fixed bottom-0  w-full py-3">
      {
        modalOpen && <div className=" px-3 py-6 bg-black">
          {links.map((link, index) => {
            return (
              <div
              key={index}
              className="flex items-center justify-cente px-2 mx-5 py-3"
            >
              <Link
                href={link.href}
                className={`${
                  path === link.href ? "opacity-100" : "opacity-30"
                } text-xs flex items-center justify-center`}
              >
                <div className="text-[1.5rem] py-2 pr-8">{link.icon}</div>
                <p className="text-base">

                {link.name}
                </p>
              </Link>
            </div>
            )
          })}
        </div>
      }
      <div className="md:hidden justify-center items-center flex">
        {links.slice(0, 3).map((link, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-2 mx-5"
            >
              <Link
                href={link.href}
                className={`${
                  path === link.href ? "opacity-100" : "opacity-30"
                } text-xs flex flex-col items-center justify-center`}
              >
                <div className="text-[1.2rem] py-2">{link.icon}</div>
                {link.name}
              </Link>
            </div>
          );
        })}
        <div className="md:hidden ">
          <button onClick={() => setModalOpen(!modalOpen)}>
            <BiMenu />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
