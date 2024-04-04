"use client";
import React from "react";
import { z } from "zod";
import { userDetails } from "@/src/lib/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitUserDetailsForm } from "@/src/use-cases/UserFunctions";
import { useMutation } from "@tanstack/react-query";
import { useLoadingStore } from "@/src/lib/store";
type Props = {};

type FormFields = z.infer<typeof userDetails>;

const UserDetails = (props: Props) => {
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  const { isLoading, setIsLoading } = useLoadingStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(userDetails) });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsLoading(true);
    await SubmitUserDetailsForm(data, uid);
    setIsLoading(false);
    router.push("/");
  };
  return (
    <section className="flex flex-column">
      <div className="container flex items-start justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center mt-6">
            <span className="w-1/3 pb-4 font-medium text-center text--800 capitalize border-b-2 border-[#e76a38]">
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
              className="block w-full px-10 py-3 text-white bg-[#2f2542] rounded-lg border focus:border-[#e76a38] focus:outline-none"
              placeholder="name"
            />
          </div>
          {errors.state && <div>{errors.state.message}</div>}
          <div className="relative flex items-center mt-6">
            <input
              {...register("address")}
              type="text"
              className="block w-full px-10 py-3 text-white bg-[#2f2542] rounded-lg border focus:border-[#e76a38] focus:outline-none"
              placeholder="address"
            />
          </div>
          {errors.address && <div>{errors.address.message}</div>}
          <div className="relative flex items-center mt-4">
            <input
              {...register("pincode")}
              type="text"
              className="block w-full px-10 py-3 text-white bg-[#2f2542] rounded-lg border focus:border-[#e76a38] focus:outline-none"
              placeholder="pincode"
            />
          </div>
          {errors.pincode && <div>{errors.pincode.message}</div>}
          <div className="relative flex items-center mt-4">
            <input
              {...register("state")}
              type="state"
              className="block w-full px-10 py-3 text-white bg-[#2f2542] rounded-lg border focus:border-[#e76a38] focus:outline-none"
              placeholder="State"
            />
          </div>
          {errors.state && <div>{errors.state.message}</div>}
          <div className="relative flex items-center mt-4">
            <input
              {...register("city")}
              type="state"
              className="block w-full px-10 py-3 text-white bg-[#2f2542] rounded-lg border focus:border-[#e76a38] focus:outline-none"
              placeholder="city"
            />
          </div>
          {errors.city && <div>{errors.city.message}</div>}
          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-[#e76a38] rounded-lg hover:bg-[#ff7a45] focus:outline-none">
              Save Details
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserDetails;
