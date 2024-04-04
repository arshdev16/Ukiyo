import { User } from "firebase/auth";
import { z } from "zod";
import { create } from "zustand";
import { userDetails } from "./interfaces";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

type loadingState = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

export const useLoadingStore = create<loadingState>()((set) => ({
  isLoading: false,
  setIsLoading: (value) => {
    set({ isLoading: value });
  },
}));

type userDocData = z.infer<typeof userDetails>;
type userState = {
  userData: userDocData | null;
  setUser: (user: User | null) => void;
};

export const useUserStore = create<userState>()((set) => ({
  userData: null,
  setUser: async (firebaseUser) => {
    if (firebaseUser) {
      const userDoc = await getDoc(doc(db, `users/${firebaseUser.uid}`));
      if (userDoc.exists()) {
        const userData = userDoc.data() as userDocData;
        set({ userData: { ...userData, uid: firebaseUser.uid } });
      } else {
        set({ userData: null });
      }
    }
  },
}));
