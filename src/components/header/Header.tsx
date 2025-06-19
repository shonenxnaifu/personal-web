"use client";

import MoonIcon from "@/components/icons/MoonIcon";
import Button from "@/components/shared/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

enum MenuList {
  HOME = "/",
  BLOG = "blog",
}

export default function Header() {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>();
  const pathName = usePathname();

  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    setOpenMenu(false);

    const splittedPath = pathName.split("/");
    const menuName = splittedPath[1] ? splittedPath[1] : "/";

    setActiveMenu(menuName);
  }, [pathName]);

  return (
    <header className="w-full flex justify-between items-center border-b-4 border-black">
      <div className="flex justify-between w-full py-3 px-3 border-r-4 border-black">
        <div className="text-2xl my-auto">
          <Link href="/">
            shonen<span className="text-sm">dev.</span>
          </Link>
        </div>
        <Button
          onClick={toggleMenu}
          type="button"
          text="Menu"
          className="px-4"
        />
      </div>
      <div className="p-3">
        <MoonIcon className="w-6" />
      </div>

      {/* Full Screen Menu */}
      <div
        className={`bg-[#FFF5EE] h-screen absolute inset-0 transition-all duration-200 delay-0 ease-in-out ${isOpenMenu ? "translate-x-0" : "translate-x-full delay-75"}`}
      >
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Close Menu"
          className="absolute right-0 -top-1 translate-y-7 mr-5 w-7 h-7"
        >
          <div className="bg-red-300 w-full">
            <span
              className={`absolute w-full h-1 bg-[#161313] transition-all ease-in-out duration-300 delay-150 ${isOpenMenu ? "rotate-45" : "rotate-0 delay-0"} top-1/2 -translate-y-1/2 -translate-x-1/2`}
            >
              &nbsp;
            </span>
            <span
              className={`absolute w-full h-1 bg-[#161313] transition-all ease-in-out duration-300 delay-150 ${isOpenMenu ? "-rotate-45" : "rotate-0 delay-0"}  top-1/2 -translate-y-1/2 -translate-x-1/2`}
            >
              &nbsp;
            </span>
          </div>
        </button>
        <nav className="flex justify-center text-center text-2xl mt-16">
          <ul className="flex flex-col gap-5">
            <li
              className={`py-2 ${activeMenu === MenuList.HOME ? "bg-[#161313] text-white" : "bg-none text-inherit"}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`py-2 ${activeMenu === MenuList.BLOG ? "bg-[#161313] text-white" : "bg-none text-inherit"}`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li className="py-2">
              <button type="button">Contact Me</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
