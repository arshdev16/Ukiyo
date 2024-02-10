"use client";
import { cardData } from "@/src/lib/interfaces";
import Link from "next/link";
import React from "react";

type Props = {
  cardData: cardData;
};

const CardOne = (props: Props) => {
  const { name, imgUrl, price, slug } = props.cardData;
  return (
    <Link
      href={`/${slug}`}
      className="flex flex-col items-center justify-center w-full max-w-xs mx-auto my-4"
    >
      <div
        className="w-full h-64 bg-white bg-center bg-no-repeat bg-contain rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <div className="w-56 -mt-10 overflow-hidden rounded-b-lg shadow-lg md:w-64 bg-gray-900">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {name}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            {price}/-
          </span>
          <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
            Add to
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CardOne;
