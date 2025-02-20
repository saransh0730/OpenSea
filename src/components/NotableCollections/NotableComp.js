import React from "react";
import "./NotableColl.css";
import Category from "../categories/Container";

const categoryData = [
  {
    image: "./images/notableColl/img.avif",
    name: "Azuki Elementals",
    floorPrice: "0.27 ETH",
    totalVolume: "69K",
  },
  {
    image: "./images/notableColl/not2.avif",
    name: "Skyborne - Genesis",
    floorPrice: "0.04 ETH",
    totalVolume: "1,254",
  },
  {
    image: "./images/notableColl/not3.avif",
    name: "Cool Cats",
    floorPrice: "0.42 ETH",
    totalVolume: "155K",
  },
  {
    image: "./images/notableColl/not4.avif",
    name: "Nifty Island",
    floorPrice: "0.15 ETH",
    totalVolume: "2,321",
  },
  {
    image: "./images/notableColl/not5.avif",
    name: "Parallel Alpha",
    floorPrice: "0.20 PRIME",
    totalVolume: "81K",
  },
  {
    image: "./images/notableColl/not6.avif",
    name: "The Ancients of Holdara",
    floorPrice: "0.02 ETH",
    totalVolume: "19",
  },
];

function NotableComp() {
  return (
    <div className="notable-container">
      <h2 className="heading">Notable Collection</h2>
      <div className="category-list">
        {categoryData.map((category, index) => (
          <Category
            key={index}
            image={category.image}
            name={category.name}
            floorPrice={category.floorPrice}
            totalVolume={category.totalVolume}
            volHeading="Total Volume"
          />
        ))}
      </div>
    </div>
  );
}

export default NotableComp;
