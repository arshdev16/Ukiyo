"use client";
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import QueryClientWrapper from "./QueryClientWrapper";

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
  return (
    <QueryClientWrapper>
      <section className="bg-NavHomeImg">
        <Navbar
          eleRef={ref}
          isCartOpened={isCartOpened}
          setIsCartOpened={setIsCartOpened}
          toggleCart={toggleCart}
        />
        <div className="pt-14" />
        {children}
      </section>
    </QueryClientWrapper>
  );
}
