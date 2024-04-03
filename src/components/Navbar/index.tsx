"use client";
import Link from "next/link";
import React, { Ref, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import CartSideBar from "../CartSideBar";
import { useUserStore } from "@/src/lib/store";
// import Logo from "@/public/logo.svg";
import Image from "next/image";

type Props = {
  isCartOpened: boolean;
  setIsCartOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  eleRef: Ref<HTMLDivElement>;
  toggleCart: () => void;
};

const Navbar = (props: Props) => {
  const { userData } = useUserStore();
  const [isOpened, setIsOpened] = useState(false);
  const { isCartOpened, setIsCartOpened, eleRef, toggleCart } = props;
  return (
    <nav className="text-[#e76a38] fixed top-0 w-screen right-0">
      <div className="container px-6 py-3 min-w-full md:flex bg-[#211a2e]">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[#e76a38]">
            {/* <Image priority src={Logo} alt="logo" width={100} height={10}/> */}
          </Link>
          <div className="flex lg:hidden">
            <button onClick={toggleCart} className="mx-3  md:hidden ">
              <FaCartShopping size={20} />
            </button>
            <button
              onClick={() => {
                setIsOpened(!isOpened);
              }}
              type="button"
              className="md:hidden"
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
          } bg-[#211a2e] md:bg-transparent md:backdrop-blur-0 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between mt-[.75rem]`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            <Link
              onClick={() => setIsOpened(false)}
              href="/"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2 mix-blend-exclusion"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpened(false)}
              href="/shop"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2"
            >
              Shop
            </Link>
            <Link
              onClick={() => setIsOpened(false)}
              href="/hoodies"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2"
            >
              Hoodie
            </Link>
            <Link
              onClick={() => setIsOpened(false)}
              href="/user"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2"
            >
              User
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
        <button onClick={toggleCart} className="mx-3 hidden md:inline">
          <FaCartShopping size={25} />
        </button>
        <CartSideBar
          userId={userData?.uid}
          isCartOpened={isCartOpened}
          setIsCartOpened={setIsCartOpened}
          eleRef={eleRef}
          toggleCart={toggleCart}
        />
      </div>
    </nav>
  );
};

export default Navbar;
