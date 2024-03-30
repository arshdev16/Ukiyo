"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ReactQueryProvider from "./ReactQueryProvider";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "../lib/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const toggleCart = () => {
    setIsCartOpened(isCartOpened);
    if (ref.current?.classList.contains("translate-x-0")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    } else if (ref.current?.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-0");
      ref.current.classList.remove("translate-x-full");
    }
  };
  const { userData, setUser } = useUserStore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, [setUser]);
  return (
    <ReactQueryProvider>
      <Script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js" />
      <section className="bg-NavHomeImg">
        <Navbar
          eleRef={ref}
          isCartOpened={isCartOpened}
          setIsCartOpened={setIsCartOpened}
          toggleCart={toggleCart}
        />
        <div className="pt-20" />
        {children}
      </section>
      <Toaster />
    </ReactQueryProvider>
  );
}
