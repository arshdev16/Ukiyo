//@ts-nocheck
"use client";
import { Ref } from "react";
import GetCartData from "@/src/data-access/GetCartData";
import { ClearCart } from "@/src/use-cases/CartFunctions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IoIosCloseCircle } from "react-icons/io";
import CartCard from "./CartCard";
import { useUserStore } from "@/src/lib/store";


type Props = {
  userId: string | undefined;
  isCartOpened: boolean;
  setIsCartOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  eleRef: Ref<HTMLDivElement>;
  toggleCart: () => void;
};

const CartSideBar = (props: Props) => {
  let totalCost = 0;
  const {userData} = useUserStore()
  const queryClient = useQueryClient();
  const { data: cartData, isLoading, error } = GetCartData();
  const clearCart = useMutation({
    mutationFn: () => ClearCart(`user/${userData?.uid}/cart`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  if (isLoading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!cartData) {
    return null;
  }

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
          <li className="m-4 my-8">Items in your cart will show here</li>
        ) : (
          cartData.map((data, index) => (
            <CartCard userId={props.userId} cartData={data} key={index} />
          ))
        )}
      </ul>
      <div>
        <span className="self-start mx-4 my-2 font-bold">
          Total: {totalCost}/-
        </span>
        <button className="bg-violet-800 min-w-fit text-white font-semibold px-4 py-2 rounded-xl h-full hover:bg-violet-600">
          Checkout
        </button>

        <button
          className="bg-violet-800 min-w-fit text-white font-semibold px-4 py-2 rounded-xl h-full hover:bg-violet-600 mx-2"
          onClick={clearCart.mutate}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CartSideBar;
