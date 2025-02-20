import React from "react";
import "./TrendingGames.css";
import Category from "../categories/Container";
import ButtonComp from "../ButtonComponent/ButtonComp";

const categoryData = [
  {
    image: "./images/gaming/gam1.avif",
    name: "Footium Players",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.57",
  },
  {
    image: "./images/gaming/gam2.avif",
    name: "Parallel Aftermath",
    floorPrice: "0.14 ETH",
    totalVolume: "19",
  },
  {
    image: "./images/gaming/gam4.avif",
    name: "Honey Comb",
    floorPrice: "0.14 ETH",
    totalVolume: "19",
  },
  {
    image: "./images/gaming/gam5.avif",
    name: "ZED RUN",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.34",
  },
  {
    image: "./images/gaming/gam3.avif",
    name: "ORL Ocean Racers",
    floorPrice: "15 POL",
    totalVolume: "0.19",
  },
  {
    image: "./images/gaming/gam6.avif",
    name: "Wolf Game (Blast)",
    floorPrice: "0.02 ETH",
    totalVolume: "9",
  },
];

function TrendingGames() {
  return (
    <div className="trending-games-container">
      <div className="headings">
        <h2>Trending in Gaming</h2>
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

export default TrendingGames;
