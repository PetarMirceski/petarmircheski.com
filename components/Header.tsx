"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const links = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
    { text: "Music", href: "/music" },
    { text: "Photos", href: "/photos" },
  ];

  return (
    <header className="z-10 flex max-sm:flex-col sm:justify-between fixed top-0 w-full px-3 lg:px-20 items-center border-b shadow-lg backdrop-blur-lg">
      <div className="flex justify-between w-full py-3">
        <Link href="/">
          <div className="flex-1">
            <h1 className="text-3xl font-bold hidden md:block">
              Petar Mircheski
            </h1>
            <h1 className="text-3xl font-bold block md:hidden">
              Petar Mircheski
            </h1>
          </div>
        </Link>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <nav className="hidden sm:flex justify-between items-center gap-4 ">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
      </nav>

      <nav className="sm:hidden flex flex-col items-center gap-1 font-semibold">
        {showMenu &&
          links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.text}
            </Link>
          ))}
      </nav>
    </header>
  );
};
