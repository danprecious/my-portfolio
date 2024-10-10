"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBriefcase, FaHome, FaInfo, FaPenFancy, FaUserCircle } from "react-icons/fa";
import { links } from "@/utils/constants";

const NavLinks = () => {
  const [isActive, setIsActive] = useState(false);
  
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex justify-between font-semibold">
      {links.map(({ href, name }, index) => {
        return (
          <Link
            key={name}
            href={href}
            className={`${
              path === href ? "opacity-100" : "opacity-30"
            } text-xs `}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
