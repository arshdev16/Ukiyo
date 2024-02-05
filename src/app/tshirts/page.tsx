import CardOne from "@/src/components/Cards/CardOne";
import React from "react";

type Props = {};

const Tshirts = (props: Props) => {
  const dummyshirtdata = [
    {
      name: "JOJO's Joraro Kujo star platinum Tshirt",
      price: 499,
      imgUrl: "https://m.media-amazon.com/images/I/41bqEPB6-gL._SY741_.jpg",
    },
    {
      name: "Naruto Uzumaki NineTails T-shirt",
      price: 499,
      imgUrl: "https://example.com/naruto-uzumaki-shirt.jpg",
    },
    {
      name: "Dragon Ball Z Goku T-shirt",
      price: 499,
      imgUrl: "https://example.com/dragon-ball-goku-shirt.jpg",
    },
    {
      name: "One Piece Straw Hat Crew T-shirt",
      price: 499,
      imgUrl: "https://example.com/one-piece-straw-hat-shirt.jpg",
    },
    {
      name: "My Hero Academia All Might T-shirt",
      price: 499,
      imgUrl: "https://example.com/my-hero-academia-all-might-shirt.jpg",
    },
    {
      name: "Attack on Titan Survey Corps T-shirt",
      price: 499,
      imgUrl: "https://example.com/attack-on-titan-survey-corps-shirt.jpg",
    },
    {
      name: "Demon Slayer Tanjiro Kamado T-shirt",
      price: 499,
      imgUrl: "https://example.com/demon-slayer-tanjiro-shirt.jpg",
    },
    {
      name: "Fullmetal Alchemist Brotherhood T-shirt",
      price: 499,
      imgUrl: "https://example.com/fullmetal-alchemist-brotherhood-shirt.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap mx-3 justify-center">
      {dummyshirtdata.length !== 0 ? (
        dummyshirtdata.map((cardData, index) => (
          <CardOne key={index} cardData={cardData} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tshirts;
