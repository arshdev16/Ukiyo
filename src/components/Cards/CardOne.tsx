"use client";
import { productData } from "@/src/lib/interfaces";
import Link from "next/link";
import React from "react";

type Props = {
  cardData: productData;
};

const CardOne = (props: Props) => {
  const { name, imgUrl, price, slug } = props.cardData;

  return (
    <Link
      href={`/product/${slug}`}
      className="flex flex-col items-center justify-center w-full max-w-xs text-white"
    >
      <div
        className="w-full h-64 bg-white bg-center bg-no-repeat bg-contain rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <div className="w-56 -mt-10 overflow-hidden rounded-lg shadow-lg md:w-64 bg-[#000814]">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {name}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-[#2f2542]">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            {price}/-
          </span>
          <button className="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-300 transform bg-[#e76a38] rounded focus:outline-none">
            Add to
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CardOne;
