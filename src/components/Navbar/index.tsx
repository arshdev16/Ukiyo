"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <nav className="fixed top-0 w-screen shadow bg-transparent backdrop-blur-md ">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <Link href="/">UKIYO</Link>
          <div className="flex lg:hidden">
            <button
              onClick={() => {
                setIsOpened(!isOpened);
              }}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 md:hidden"
              aria-label="toggle menu"
            >
              {!isOpened ? <RiMenu3Fill size={20} /> : <RxCross2 size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpened
              ? "translate-x-0 opacity-100 "
              : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between `}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            <Link
              onClick={() => setIsOpened(false)}
              href="/"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpened(false)}
              href="/tshirts"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2"
            >
              T-shirts
            </Link>
            <Link
              onClick={() => setIsOpened(false)}
              href="#"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2"
            >
              Contact
            </Link>
          </div>

          <div className="relative mt-4 md:mt-0">
            <span className="text-gray-600 absolute inset-y-0 left-0 flex items-center pl-3">
              <FaMagnifyingGlass />
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
