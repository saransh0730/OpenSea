import React from "react";
import "./MusicComponent.css";
import Category from "../categories/Container";
import ButtonComp from "../ButtonComponent/ButtonComp";

const categoryData = [
  {
    image: "./images/music/m1.avif",
    name: "Another Life by Violett..",
    floorPrice: "0.01 ETH",
    totalVolume: "0.08",
  },
  {
    image: "./images/music/m2.avif",
    name: "RVLTD Genesis",
    floorPrice: "0.02 ETH",
    totalVolume: "0.07",
  },
  {
    image: "./images/music/m3.avif",
    name: "Moonshit by Violetta ..",
    floorPrice: "0.05 ETH",
    totalVolume: "0.06",
  },
  {
    image: "./images/music/m4.avif",
    name: "Rilla Gang Music Pass",
    floorPrice: "-",
    totalVolume: "0.04",
  },
  {
    image: "./images/music/m5.avif",
    name: "Armin's All-Access",
    floorPrice: "0.01 ETH",
    totalVolume: "0.01",
  },
  {
    image: "./images/music/m6.avif",
    name: "PIXELATED by Sammy ..",
    floorPrice: "0.03 ETH",
    totalVolume: "0.01",
  },
];

function MusicComponent() {
  return (
    <div className="trending-music-container">
      <div className="headings">
        <h2>Trending in Music</h2>
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

export default MusicComponent;
