"use client";

import MoonIcon from "@/components/icons/MoonIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SunIcon from "../icons/SunIcon";
import DownloadIcon from "../icons/DownloadIcon";

enum MenuList {
  HOME = "/",
  BLOG = "blog",
}

export default function Header() {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>();
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };

  const toggleDarkMode = () => {
    const htmlEl = document.documentElement;

    setDarkMode(!isDarkMode);

    if (isDarkMode) {
      localStorage.theme = "light";
      htmlEl.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      htmlEl.classList.add("dark");
    }
  };

  useEffect(() => {
    setOpenMenu(false);

    const splittedPath = pathName.split("/");
    const menuName = splittedPath[1] ? splittedPath[1] : "/";

    setActiveMenu(menuName);
  }, [pathName]);

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (localStorage.theme === "dark") {
      setDarkMode(true);
      htmlEl.classList.add("dark");
    } else {
      setDarkMode(false);
      htmlEl.classList.remove("dark");
    }
  }, []);

  return (
    <header className="w-full flex justify-between items-center border-b-4 border-black dark:border-[#9747FF] dark:bg-black">
      <div className="flex justify-between w-full min-h-16 py-3 px-3 border-r-4 border-black dark:border-[#9747FF]">
        <div className="text-2xl my-auto dark:text-[#FFF5EE]">
          <Link href="/">
            shonen<span className="text-sm">dev.</span>
          </Link>
        </div>

        <nav className="hidden md:flex justify-center text-center text-base mr-3 dark:text-[#FFF5EE]">
          <ul className="flex gap-16">
            <li
              className={`p-1 my-auto ${activeMenu === MenuList.HOME ? "bg-[#161313] dark:bg-[#9747FF] text-[#FFF5EE]" : "bg-none text-inherit"}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`p-1 my-auto ${activeMenu === MenuList.BLOG ? "bg-[#161313] dark:bg-[#9747FF] text-[#FFF5EE]" : "bg-none text-inherit"}`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li className="p-1 my-auto">
              <button type="button">Contact Me</button>
            </li>
            <li className="p-1 my-auto">
              <button type="button" className="btn-primary px-3 flex gap-3">
                My Resume
                <DownloadIcon className="max-w-3" />
              </button>
            </li>
          </ul>
        </nav>

        {/* Button Menu (mobile only) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="btn-primary px-4 md:hidden"
        >
          Menu
        </button>
      </div>
      <div className="flex items-center p-3">
        <button
          type="button"
          className="hover:scale-90 transition-all ease-in-out duration-200"
          aria-label="Theme Mode"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <SunIcon className="w-[28px] animate-[fadeInOut_0.3s_ease-in-out]" />
          ) : (
            <MoonIcon className="w-[28px] animate-[fadeInOut_0.3s_ease-in-out]" />
          )}
        </button>
      </div>

      {/* Full Screen Menu (mobile only) */}
      <div
        className={`bg-[#FFF5EE] z-40 h-screen fixed inset-0 transition-all duration-200 delay-0 ease-in-out ${isOpenMenu ? "translate-x-0" : "translate-x-full delay-75"}`}
      >
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Close Menu"
          className="absolute right-0 -top-1 translate-y-7 mr-5 w-7 h-7"
        >
          <div className="bg-red-300 w-full">
            <span
              className={`absolute w-full h-1 bg-[#161313] transition-all ease-in-out duration-300 ${isOpenMenu ? "rotate-45 delay-150" : "rotate-0 delay-0"} top-1/2 -translate-y-1/2 -translate-x-1/2`}
            >
              &nbsp;
            </span>
            <span
              className={`absolute w-full h-1 bg-[#161313] transition-all ease-in-out duration-300 ${isOpenMenu ? "-rotate-45 delay-150" : "rotate-0 delay-0"}  top-1/2 -translate-y-1/2 -translate-x-1/2`}
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
            <li className="py-2 mx-auto">
              <button type="button" className="btn-primary px-3 flex gap-3">
                My Resume
                <DownloadIcon className="max-w-3" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
