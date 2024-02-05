import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

type Props = {};

const CartSideBar = (props: Props) => {
  return (
    <div className=" transform transition-transform translate-x-full absolute sidebar top-5 border-[1px] rounded-s-lg right-1 bg-black p-4 z-20 px-6 flex flex-col items-center">
      <button>
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
