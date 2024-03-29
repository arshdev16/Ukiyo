import { CartItemData } from "@/src/lib/interfaces";
import { CartPlus, CartMinus } from "@/src/use-cases/CartFunctions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

type Props = {
  cartData: CartItemData;
  userId: string;
};

const CartCard = (props: Props) => {
  const { id, name, quantity, productImage, total, price } = props.cartData;
  const queryClient = useQueryClient();
  const cartRemove = useMutation({
    mutationFn: () =>
      CartMinus(`/users/${props.userId}/cart/${id}`, quantity, total, price),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const cartAdd = useMutation({
    mutationFn: () =>
      CartPlus(`/users/${props.userId}/cart/${id}`, quantity, total, price),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return (
    <div className="flex m-4 items-center">
      <Image
        src={productImage}
        alt="Product Image"
        width={50}
        height={50}
        className="rounded-2xl"
      />
      <span className="mx-6">{name}</span>
      <div className="flex items-center">
        <button
          onClick={() => {
            cartAdd.mutate();
          }}
        >
          <FaCirclePlus className="text-violet-800 hover:text-violet-600 bg-white rounded-full" />
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          onClick={() => {
            cartRemove.mutate();
          }}
        >
          <FaCircleMinus className="text-violet-800 hover:text-violet-600 bg-white rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
