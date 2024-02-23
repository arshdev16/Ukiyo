//@ts-nocheck
import React, { Ref, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import CartCard from "./CartCard";
import { getTotalCost } from "@/src/lib/helpers";

type Props = {
  isCartOpened: boolean;
  setIsCartOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  eleRef: Ref<HTMLDivElement>;
  toggleCart: () => void;
};

const cartData = [
  {
    id: 1,
    name: "Product A",
    price: 19.99,
    quantity: 2,
    total: 39.98,
    productImage: "https://m.media-amazon.com/images/I/41bqEPB6-gL._SY741_.jpg",
  },
  {
    id: 2,
    name: "Product B",
    price: 29.95,
    quantity: 1,
    total: 29.95,
    productImage: "https://m.media-amazon.com/images/I/41bqEPB6-gL._SY741_.jpg",
  },
  {
    id: 3,
    name: "Product C",
    price: 14.5,
    quantity: 3,
    total: 43.5,
    productImage: "https://m.media-amazon.com/images/I/41bqEPB6-gL._SY741_.jpg",
  },
];

const CartSideBar = (props: Props) => {
  let totalCost = 0;
  for (const obj of cartData) {
    totalCost += obj.total;
  }

  return (
    <div
      ref={props.eleRef}
      className={`translate-x-full
      transform transition-transform absolute sidebar top-5 border-[1px] rounded-s-lg bg-black p-4 z-20 px-6 flex flex-col items-center right-0`}
    >
      <button onClick={props.toggleCart}>
        <span className="absolute top-3 right-3 cursor-pointer">
          <IoIosCloseCircle size={20} />
        </span>
      </button>
      <h1 className="font-bold text-xl">Cart</h1>
      <ul>
        {cartData.length === 0 ? (
          <li>Items in your cart will show here</li>
        ) : (
          cartData.map((data, index) => (
            <CartCard cartData={data} key={index} />
          ))
        )}
      </ul>
      <div>
        <span className="self-start mx-4 my-2 font-bold">
          Total: {totalCost.toFixed(2)}/-
        </span>
        <button className="bg-violet-800 min-w-fit text-white font-semibold px-4 py-2 rounded-xl h-full hover:bg-violet-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSideBar;
