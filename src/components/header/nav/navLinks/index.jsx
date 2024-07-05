"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLinks = () => {
  const [isActive, setIsActive] = useState(false);
  const links = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Open Diary",
      href: "/open_diary",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

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
