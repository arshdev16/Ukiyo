"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Pincode from "./Pincode";

type Props = {};

const Product = (props: Props) => {
  const router = useRouter();
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col my-5 justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <Image
          src={activeImg}
          alt=""
          className="w-3/4 aspect-square object-cover rounded-xl justify-self-center self-center"
          width={200}
          height={200}
        />
        <div className="flex flex-row justify-evenly h-24 items-center">
          <Image
            src={images.img1}
            alt=""
            className="w-16 h-16 md:w-24 md:h-24 mx-3 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
            width={50}
            height={50}
          />
          <Image
            src={images.img2}
            alt=""
            className="w-16 h-16 md:w-24 md:h-24 mx-3 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
            width={50}
            height={50}
          />
          <Image
            src={images.img3}
            alt=""
            className="w-16 h-16 md:w-24 md:h-24 mx-3 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
            width={50}
            height={50}
          />
          <Image
            src={images.img4}
            alt=""
            className="w-16 h-16 md:w-24 md:h-24 mx-3 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
            width={50}
            height={50}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4 mx-8">
        <div>
          <span className=" text-violet-600 font-semibold">
            Special Sneaker
          </span>
          <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
        </div>
        <p className="text-gray-700">
          Con unammortizzazione incredibile per sostenerti in tutti i tuoi
          chilometri, Invincible 3 offre un livello di comfort elevatissimo
          sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
          Questo modello incredibilmente elastico e sostenitivo, è pensato per
          dare il massimo lungo il tuo percorso preferito e fare ritorno a casa
          carico di energia, in attesa della prossima corsa.
        </p>
        <h6 className="text-2xl font-semibold">$ 199.00</h6>
        <Pincode />
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          <button className="bg-violet-800 min-w-fit text-white font-semibold py-3 px-4 md:px-16 rounded-xl h-full hover:bg-violet-600">
            Add to Cart
          </button>

          <button className="bg-violet-800 min-w-fit text-white font-semibold py-3 px-4 md:px-16 rounded-xl h-full hover:bg-violet-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
