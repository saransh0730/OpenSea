import React from "react";
import "./TopCollection.css";
import Category from "../categories/Container";

const categoryData = [
  {
    image: "./images/topCollector/top1.avif",
    name: "Gemesis",
    floorPrice: "0.06 ETH",
    totalVolume: "577",
  },
  {
    image: "./images/topCollector/top2.avif",
    name: "Kaito Genesis",
    floorPrice: "4.23 ETH",
    totalVolume: "2,262",
  },
  {
    image: "./images/topCollector/top3.avif",
    name: "Doodles",
    floorPrice: "3.83 ETH",
    totalVolume: "1,960",
  },
  {
    image: "./images/topCollector/top4.avif",
    name: "Mutant Ape Yacht Club",
    floorPrice: "2.07 ETH",
    totalVolume: "261",
  },
  {
    image: "./images/topCollector/top5.avif",
    name: "Redacted Remilio Babies",
    floorPrice: "0.79 ETH",
    totalVolume: "202",
  },
  {
    image: "./images/topCollector/top6.avif",
    name: "Dooplicator",
    floorPrice: "0.20 ETH",
    totalVolume: "64",
  },
];

function TopCollection() {
  return (
    <div className="top-coll-container">
      <h2 className="heading">Top Collector Buys Today</h2>
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

export default TopCollection;
