import { CartItemData } from "@/src/lib/interfaces";
import Image from "next/image";
import React from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

type Props = {
  cartData: CartItemData;
};

const CartCard = (props: Props) => {
  const { id, name, price, total, quantity, productImage } = props.cartData;
  return (
    <div className="flex m-4 items-center">
      <Image
        src={productImage}
        alt="Product Image"
        width={50}
        height={50}
        className=""
      />
      <span className="mx-6">{name}</span>
      <div className="flex items-center">
        <button>
          <FaCirclePlus className="text-violet-800 hover:text-violet-600 bg-white rounded-full" />
        </button>
        <span className="mx-2">{quantity}</span>
        <button >
          <FaCircleMinus className="text-violet-800 hover:text-violet-600 bg-white rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
