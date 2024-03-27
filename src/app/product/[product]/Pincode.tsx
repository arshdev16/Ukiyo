"use client";
import { notifyLoading } from "@/src/lib/toasts";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoMdPin } from "react-icons/io";

type Props = {};

const Pincode = (props: Props) => {
  const [isServicabel, setIsServicable] = useState<null | boolean>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    //Cheking logic here
    const num = Math.random();
    if (num <= 0.5) {
      notifyLoading("Checking...")
      setIsServicable(false);
    } else {
      setIsServicable(true);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="pincode"
        className="items-center gap-1 text-sm text-gray-500 dark:text-gray-300 flex"
      >
        <IoMdPin />
        Pincode
      </label>
      <div className="flex justify-start items-center gap-4 mt-4">
        <input
          type="text"
          {...register("pincode")}
          placeholder="123456"
          className="block w-full md:w-1/3 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />

        <button className="px-6 py-2 h-max font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-800 rounded-lg hover:bg-violet-500 focus:outline-none">
          Check
        </button>
      </div>
        {isServicabel === null ? (
          <p></p>
        ) : isServicabel ? (
          <p>This pincode is availabe for delivery</p>
        ) : (
          <p>This pincode is not available for delivery</p>
        )}
    </form>
  );
};

export default Pincode;
