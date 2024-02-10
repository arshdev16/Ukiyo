import CardOne from "@/src/components/Cards/CardOne";
import React from "react";

type Props = {};

const Tshirts = (props: Props) => {
  const dummyshirtdata = [
    {
      name: "JOJO's Joraro Kujo star platinum Tshirt",
      price: 499,
      imgUrl: "https://m.media-amazon.com/images/I/41bqEPB6-gL._SY741_.jpg",
      slug: "jojos-jotaro-kujo-stat-platinum-tshirt",
    },
    {
      name: "Naruto Uzumaki NineTails T-shirt",
      price: 499,
      imgUrl: "https://example.com/naruto-uzumaki-shirt.jpg",
      slug: "naruto-uzumaki-t-shirt",
    },
    {
      name: "Dragon Ball Z Goku T-shirt",
      price: 499,
      imgUrl: "https://example.com/dragon-ball-goku-shirt.jpg",
      slug: "dragon-ball-z-goku-t-shirt",
    },
    {
      name: "One Piece Straw Hat Crew T-shirt",
      price: 499,
      imgUrl: "https://example.com/one-piece-straw-hat-shirt.jpg",
      slug: "one-piece-straw-hat-crew-t-shirt",
    },
    {
      name: "My Hero Academia All Might T-shirt",
      price: 499,
      imgUrl: "https://example.com/my-hero-academia-all-might-shirt.jpg",
      slug: "my-hero-academia-all-might-t-shirt",
    },
    {
      name: "Attack on Titan Survey Corps T-shirt",
      price: 499,
      imgUrl: "https://example.com/attack-on-titan-survey-corps-shirt.jpg",
      slug: "attack-on-titan-survey-corps-t-shirt",
    },
    {
      name: "Demon Slayer Tanjiro Kamado T-shirt",
      price: 499,
      imgUrl: "https://example.com/demon-slayer-tanjiro-shirt.jpg",
      slug: "demon-slayer-tanjiro-kamado-t-shirt",
    },
    {
      name: "Fullmetal Alchemist Brotherhood T-shirt",
      price: 499,
      imgUrl: "https://example.com/fullmetal-alchemist-brotherhood-shirt.jpg",
      slug: "fullmetal-alchemist-brotherhood-t-shirt",
    },
  ];

  return (
    <div className="container mx-auto flex justify-center flex-wrap">
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
