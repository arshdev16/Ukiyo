"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Pincode from "./Pincode";
import { useQuery } from "@tanstack/react-query";
import { GetDocClientSide } from "@/src/data-access/GetDocClientSide";
import { DocumentData, doc, setDoc } from "firebase/firestore";
import Loading from "../../../components/Loading/Loading";
import SizeSelector from "./SizeSelector";
type Props = {};

const Product = (props: Props) => {
  const path = usePathname().slice(8);
  const [docData, setDocData] = useState<DocumentData | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState<string>("");
  const [amount, setAmount] = useState(1);
  const [sizes, setSizes] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState<string>();
  const {
    data: documentData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shirts", path],
    queryFn: () => GetDocClientSide(`shirts${path}`),
  });
  useEffect(() => {
    if (documentData) {
      setDocData(documentData);
      setSizes(documentData.sizes)
      setImages(documentData.imgUrl);
      setActiveImage(documentData.imgUrl[0] || "");
    }
  }, [documentData]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const changeSize = (option: string) => {
    setSelectedSize(option);
  };

  return (
    <div className="flex flex-col my-5 justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        {activeImage && (
          <Image
            src={`${activeImage}`}
            alt=""
            className="w-3/4 aspect-square object-cover rounded-xl justify-self-center self-center"
            width={200}
            height={200}
          />
        )}
        <div className="flex flex-row justify-evenly h-24 items-center">
          {images[0] && images[1] && images[2] && images[3] && (
            <>
              <Image
                src={images![0]}
                alt=""
                className="w-16 h-16 md:w-24 md:h-24 mx-3 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images![0])}
                width={50}
                height={50}
              />
              <Image
                src={images![1]}
                alt=""
                className="w-16 h-16 md:w-24 md:h-24 mx-3 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images![1])}
                width={50}
                height={50}
              />
              <Image
                src={images![2]}
                alt=""
                className="w-16 h-16 md:w-24 md:h-24 mx-3 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images![2])}
                width={50}
                height={50}
              />
              <Image
                src={images![3]}
                alt=""
                className="w-16 h-16 md:w-24 md:h-24 mx-3 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images![3])}
                width={50}
                height={50}
              />
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4 mx-8">
        <div>
          <span className=" text-violet-600 font-semibold">
            Special Sneaker
          </span>
          <h1 className="text-3xl font-bold">{docData?.name}</h1>
        </div>
        <p className="text-gray-700">
          Con unammortizzazione incredibile per sostenerti in tutti i tuoi
          chilometri, Invincible 3 offre un livello di comfort elevatissimo
          sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
          Questo modello incredibilmente elastico e sostenitivo, è pensato per
          dare il massimo lungo il tuo percorso preferito e fare ritorno a casa
          carico di energia, in attesa della prossima corsa.
        </p>
        <h6 className="text-2xl font-semibold">{docData?.price}/-</h6>
        <Pincode />
        <div className="flex flex-row items-center justify-start gap-8">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl">
              +
            </button>
          </div>
          <SizeSelector sizes={sizes} changeSize={changeSize}/>
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
