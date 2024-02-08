//@ts-nocheck
import React, { Ref, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";

type Props = {
  isCartOpened: boolean;
  setIsCartOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  eleRef: Ref<HTMLDivElement>;
  toggleCart: () => void
};

const CartSideBar = (props: Props) => {
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
        <li>
          <span>Your cart items will be displayed here</span>
        </li>
      </ul>
    </div>
  );
};

export default CartSideBar;
