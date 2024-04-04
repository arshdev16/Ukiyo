import React from "react";
import { FaMobile } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { signupFormSchema } from "@/src/lib/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitOnSignupForm } from "@/src/use-cases/UserFunctions";
import { useRouter } from "next/navigation";
import { notifySuccess } from "@/src/lib/toasts";
import { useLoadingStore } from "@/src/lib/store";

type FormFields = z.infer<typeof signupFormSchema>;

type Props = {
  changeFormState: () => void;
};

const SignupForm = (props: Props) => {
  const { changeFormState } = props;
  const router = useRouter();
  const { setIsLoading } = useLoadingStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(signupFormSchema) });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsLoading(true);
    const uid = await SubmitOnSignupForm(data);
    notifySuccess("Be sure to verify your email");
    setIsLoading(false);
    router.push(`/enter/userdetails?uid=${uid}`);
  };

  return (
    <section>
      <div className="container flex items-start justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center mx-auto">
            {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
          </div>

          <div className="flex items-center justify-center mt-6">
            <span className="w-1/3 pb-4 font-medium text-center text--800 capitalize border-b-2 border-[#e76a38]">
              sign up
            </span>
            <span
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b-2 dark:border-gray-400 dark:text-gray-300"
              onClick={changeFormState}
            >
              sign in
            </span>
          </div>
          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <span className="absolute">
                <FaMobile
                  width={20}
                  height={20}
                  className="text-gray-600 mx-3"
                />
              </span>
            </span>
            <input
              {...register("phoneNumber")}
              type="tel"
              className="block w-full px-10 py-3 text-white bg-[#2f2542] rounded-lg border focus:border-[#e76a38] focus:outline-none"
              placeholder="Phone number"
            />
          </div>
          {errors.phoneNumber && <div>{errors.phoneNumber.message}</div>}
          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <IoMail width={20} height={20} className="text-gray-600 mx-3" />
            </span>

            <input
              {...register("email")}
              type="email"
              className="block w-full px-10 py-3 text-white bg-[#2f2542] rounded-lg border focus:border-[#e76a38] focus:outline-none"
              placeholder="Email address"
            />
          </div>
          {errors.email && <div>{errors.email.message}</div>}
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <RiLockPasswordFill
                width={20}
                height={20}
                className="text-gray-600 mx-3"
              />
            </span>
            <input
              {...register("password")}
              type="password"
              className="block w-full px-10 py-3 text-white bg-[#2f2542] rounded-lg border focus:border-[#e76a38] focus:outline-none"
              placeholder="Password"
            />
          </div>
          {errors.password && <div>{errors.password.message}</div>}

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <RiLockPasswordFill
                width={20}
                height={20}
                className="text-gray-600 mx-3"
              />
            </span>
            <input
              {...register("confirmPassword")}
              type="password"
              className="block w-full px-10 py-3 text-white bg-[#2f2542] rounded-lg border focus:border-[#e76a38] focus:outline-none"
              placeholder="Confirm Password"
            />
          </div>
          {errors.confirmPassword && (
            <div>{errors.confirmPassword.message}</div>
          )}

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-[#e76a38] rounded-lg hover:bg-[#ff7a45] focus:outline-none">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
