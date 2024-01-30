"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

type Props = {};

const Navbar = (props: Props) => {
  const [opened, isOpened] = useState(false);
  return (
    <header
      className="text-white fixed top-0 w-screen bg-black body-font flex flex-col md:flex-row"
    >
      <div className="flex justify-between items-center my-3 mx-3">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center"
        >
          Logo
          <span className="ml-3 text-xl font-workbench">UKIYO</span>
        </Link>
        <button
          onClick={() => {
            isOpened(!opened);
          }}
          className="inline-flex items-center bg-black focus:outline-none rounded text-base md:hidden "
        >
          <RiMenu3Fill size={20} />
        </button>
      </div>
      <nav
        className={`flex flex-col md:flex-row transition-transform ${
          opened
            ? "h-max w-screen"
            : " h-0 hidden md:flex md:h-max"
        } my-auto items-center`}
      >
        <Link href={"/"} className='text-gray-400 my-2 md:mx-2'>
          First Link
        </Link>
        <Link href={"/"} className='text-gray-400 my-2 md:mx-2'>
          Second Link
        </Link>
        <Link href={"/"} className='text-gray-400 my-2 md:mx-2'>
          Third Link
        </Link>
        <Link href={"/"} className='text-gray-400 my-2 md:mx-2'>
          Fourth Link
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
