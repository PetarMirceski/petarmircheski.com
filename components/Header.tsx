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
    <header className="fixed top-0 z-20 w-full border-b bg-white/80 shadow-sm backdrop-blur-lg">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-3 sm:flex-row">
        {/* Logo & Toggle */}
        <div className="flex w-full items-center justify-between sm:w-auto">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900">
              Petar Mircheski
            </h1>
          </Link>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl text-gray-800 sm:hidden"
            aria-label="Toggle Menu"
          >
            {showMenu ? <GrClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="mt-4 hidden gap-6 sm:mt-0 sm:flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        {showMenu && (
          <nav className="mt-4 flex w-full flex-col items-center gap-2 sm:hidden">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="w-full rounded-md py-2 text-center text-gray-800 transition-colors hover:bg-gray-100"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
