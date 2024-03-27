import { auth, db } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { z } from "zod";
import {
  signinFormSchema,
  signupFormSchema,
  userDetails,
} from "../lib/interfaces";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { notifyError, notifySuccess } from "../lib/toasts";

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
      notifySuccess("Signup successfull");
      return user.uid;
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

type userdetailsformfields = z.infer<typeof userDetails>;

export const SubmitUserDetailsForm = async (
  formvalues: userdetailsformfields,
  uid: string|null
) => {
  const { name, address, pincode, state, city } = formvalues;
  try {
    const docRef = doc(db, `/users/${uid}`);
    await setDoc(docRef, {
      name,
      address,
      pincode,
      state,
      city,
    }, {merge: true});
    notifySuccess("Added User Details")

  } catch (e: any) {
    console.error(e);
  }
};
