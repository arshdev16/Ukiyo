import CardOne from "@/src/components/Cards/CardOne";
import { GetCollection } from "@/src/data-access/GetCollection";
import React from "react";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const Shop = async (props: Props) => {
  const shirtData = await GetCollection("shirts");
  return (
    <div className="container mx-auto flex justify-center flex-wrap gap-4 ">
      {shirtData.length !== 0 ? (
        shirtData.map((cardData, index) => (
          <CardOne key={index} cardData={cardData} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Shop;
