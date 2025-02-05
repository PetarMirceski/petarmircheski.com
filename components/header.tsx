"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="z-10 flex max-sm:flex-col sm:justify-between fixed top-0 w-full px-3 lg:px-20 items-center border-b shadow-lg border-gray-700 backdrop-blur-lg">
      <div className="flex justify-between w-full">
        <Link className="hover:text-gray-300" href="/">
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
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <nav className="hidden sm:flex justify-between items-center gap-4 ">
        <Link className="hover:text-gray-300" href="/blog">
          Blog
        </Link>
        <Link className="hover:text-gray-300" href="/music">
          Music
        </Link>
        <Link className="hover:text-gray-300" href="/photos">
          Photos
        </Link>
      </nav>

      <nav className="sm:hidden flex flex-col items-center gap-1 font-semibold">
        {showMenu && (
          <>
            <Link className="hover:text-gray-300" href="/blog">
              Blog
            </Link>
            <Link className="hover:text-gray-300" href="/music">
              Music
            </Link>
            <Link className="hover:text-gray-300" href="/photos">
              Photos
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
