"use client";
import React from "react";
import { z } from "zod";
import { userDetails } from "@/src/lib/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitUserDetailsForm } from "@/src/use-cases/UserFunctions";
type Props = {};

type FormFields = z.infer<typeof userDetails>;

const UserDetails = (props: Props) => {
  const searchParams = useSearchParams()
  const uid = searchParams.get("uid")
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(userDetails) });
  const onSubmit: SubmitHandler<FormFields> =async (data) => {
   await SubmitUserDetailsForm(data, uid)
   router.push('/')
  };
  return (
    <section className="flex flex-column">
      <div className="container flex items-start justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center mt-6">
            <span className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white cursor-pointer">
              User Details
            </span>
          </div>
          <div className="flex justify-center mx-auto">
            {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
          </div>
          <div className="relative flex items-center mt-4">
            <input
              {...register("name")}
              type="text"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="name"
            />
          </div>
          {errors.state && <div>{errors.state.message}</div>}
          <div className="relative flex items-center mt-6">
            <input
              {...register("address")}
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="address"
            />
          </div>
          {errors.address && <div>{errors.address.message}</div>}
          <div className="relative flex items-center mt-4">
            <input
              {...register("pincode")}
              type="text"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="pincode"
            />
          </div>
          {errors.pincode && <div>{errors.pincode.message}</div>}
          <div className="relative flex items-center mt-4">
            <input
              {...register("state")}
              type="state"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="State"
            />
          </div>
          {errors.state && <div>{errors.state.message}</div>}
          <div className="relative flex items-center mt-4">
            <input
              {...register("city")}
              type="state"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="city"
            />
          </div>
          {errors.city && <div>{errors.city.message}</div>}
          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Save Details
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserDetails;
