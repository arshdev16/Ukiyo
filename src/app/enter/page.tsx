"use client";
import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";

type Props = {};

const Enter = (props: Props) => {
  //True = signup, False = login
  const [isLoginOrSignup, setIsLoginOrSignup] = useState(true);
  const changeFormState = () => {
    setIsLoginOrSignup(!isLoginOrSignup);
  };
  return (
    <>
      {isLoginOrSignup ? (
        <SignupForm changeFormState={changeFormState} />
      ) : (
        <SigninForm changeFormState={changeFormState} />
      )}
    </>
  );
};

export default Enter;
