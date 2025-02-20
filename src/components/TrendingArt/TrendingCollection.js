import React from "react";
import "./TrendingCollection.css";
import Category from "../categories/Container";
import ButtonComp from "../ButtonComponent/ButtonComp";

const categoryData = [
  {
    image: "./images/trending/t1.webp",
    name: "Yes/Yes",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.95",
  },
  {
    image: "./images/trending/t2.avif",
    name: "Rare Pepe (2016-2018)",
    floorPrice: "< 0.01 ETH",
    totalVolume: "2",
  },
  {
    image: "./images/trending/t3.avif",
    name: "BasePaint",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.21",
  },
  {
    image: "./images/trending/t4.avif",
    name: "BredApeYuriClub",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.12",
  },
  {
    image: "./images/trending/t5.avif",
    name: "SeRuham",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.11",
  },
  {
    image: "./images/trending/t6.avif",
    name: "BEEPLE - SPRING/SUM...",
    floorPrice: "< 6.98 ETH",
    totalVolume: "25",
  },
];

function TrendCollection() {
  return (
    <div className="trending-container">
    <div className="headings">
      <h2>Trending in Art</h2>
    <ButtonComp text="View Category" />
    </div>
      <div className="category-list">
        {categoryData.map((category, index) => (
          <Category
            key={index}
            image={category.image}
            name={category.name}
            floorPrice={category.floorPrice}
            totalVolume={category.totalVolume}
            volHeading="24h volume"
          />
        ))}
      </div>
    </div>
  );
}

export default TrendCollection;
