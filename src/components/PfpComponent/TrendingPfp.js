import React from "react";
import "./TrendingPfp.css";
import Category from "../categories/Container";
import ButtonComp from "../ButtonComponent/ButtonComp";

const categoryData = [                                      
  {
    image: "./images/pfp/p1.avif",
    name: "Lil Pudgys",
    floorPrice: "0.90 ETH",
    totalVolume: "141",
  },
  {
    image: "./images/pfp/p2.avif",
    name: "Azuki Elementals",
    floorPrice: "0.26 ETH",
    totalVolume: "63",
  },
  {
    image: "./images/pfp/p3.avif",
    name: "bullas",
    floorPrice: "32.48 BERA",
    totalVolume: "4,728",
  },
  {
    image: "./images/pfp/p4.avif",
    name: "Dojo Kidz",
    floorPrice: "25 APE",
    totalVolume: "6,022",
  },
  {
    image: "./images/pfp/p5.avif",
    name: "BitmapPunks",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.16",
  },
  {
    image: "./images/pfp/p6.avif",
    name: "Pudgy Penguins",
    floorPrice: "8.63 ETH",
    totalVolume: "503",
  },
];

function TrendingPfp() {
  return (
    <div className="trending-pfp-container">
    <div className="headings">
      <h2>Trending in PFPs</h2>
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

export default TrendingPfp;
