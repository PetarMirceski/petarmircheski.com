import Link from "next/link";

export const Header = () => {
  return (
    <header className="z-10 flex justify-between fixed top-0 w-full px-2 lg:px-20 items-center py-4 border-b shadow-lg border-gray-700 backdrop-blur-lg">
      <Link className="hover:text-gray-300" href="/">
        <h1 className="text-3xl font-bold hidden md:block">Petar Mircheski</h1>
        <h1 className="text-3xl font-bold block md:hidden">PM</h1>
      </Link>
      <nav className="flex space-x-4 ml-auto mr-4">
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
    </header>
  );
};
