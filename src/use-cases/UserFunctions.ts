import { auth, db } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { z } from "zod";
import { signinFormSchema, signupFormSchema } from "../lib/interfaces";
import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { notifyError, notifyLoading, notifySuccess } from "../lib/toasts";

type signupformfields = z.infer<typeof signupFormSchema>;

export const SubmitOnSignupForm = async (formValues: signupformfields) => {
  const { email, password, phoneNumber } = formValues;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      await sendEmailVerification(user);
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: email,
        phoneNumber,
        createdAt: serverTimestamp(),
      });
      notifySuccess("Signup successfull")
    }
  } catch (error) {
    console.error(error);
  }
};

type signinformfields = z.infer<typeof signinFormSchema>;

export const SubmitOnSigninForm = async (formValues: signinformfields) => {
  const { email, password } = formValues;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    notifySuccess("Signin Successfull");
  } catch (e) {
    notifyError("Some Error Occured");
    return { success: false, e };
  }
};
