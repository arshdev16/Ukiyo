import { CartItemData } from "@/src/lib/interfaces";
import { useLoadingStore } from "@/src/lib/store";
import { CartPlus, CartMinus } from "@/src/use-cases/CartFunctions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

type Props = {
  cartData: CartItemData;
  userId: string;
};

//write a function to delete a collection from firesteor


const CartCard = (props: Props) => {
  const { id, name, quantity, productImage, total, price } = props.cartData;
  const {setIsLoading} = useLoadingStore()
  const queryClient = useQueryClient();
  const cartRemove = useMutation({
    mutationFn: () =>
      CartMinus(`/users/${props.userId}/cart/${id}`, quantity, total, price),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      setIsLoading(false)
    },
    onError: (e) => {
      setIsLoading(false);
      console.error(e);
    },
  });

  const cartAdd = useMutation({
    mutationFn: () =>
      CartPlus(`/users/${props.userId}/cart/${id}`, quantity, total, price),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      setIsLoading(false)
    },
    onError: (e) => {
      setIsLoading(false);
      console.error(e);
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
            setIsLoading(true)
            cartAdd.mutate();
          }}
        >
          <FaCirclePlus className="text-[#e76a38] hover:text-[#ff7a45] bg-white rounded-full" />
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          onClick={() => {
            setIsLoading(true)
            cartRemove.mutate();
          }}
        >
          <FaCircleMinus className="text-[#e76a38] hover:text-[#ff7a45] bg-white rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
