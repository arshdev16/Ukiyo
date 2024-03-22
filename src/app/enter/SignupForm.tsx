import React from "react";
import { FaMobile } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { signupFormSchema } from "@/src/lib/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitOnSignupForm } from "@/src/use-cases/UserFunctions";

type FormFields = z.infer<typeof signupFormSchema>;

type Props = {
  changeFormState: () => void;
};

const SignupForm = (props: Props) => {
  const { changeFormState } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(signupFormSchema) });
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    SubmitOnSignupForm(data)
  };

  return (
    <section>
      <div className="container flex items-start justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center mx-auto">
            {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
          </div>

          <div className="flex items-center justify-center mt-6">
            <span className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white cursor-pointer">
              sign up
            </span>
            <span
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
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
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Password"
            />
          </div>
          {errors.confirmPassword && (
            <div>{errors.confirmPassword.message}</div>
          )}

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
