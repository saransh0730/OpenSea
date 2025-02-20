import React from "react";
import "./PhotoComponent.css";
import Category from "../categories/Container";
import ButtonComp from "../ButtonComponent/ButtonComp";

const categoryData = [                                      
  {
    image: "./images/photography/photo1.avif",
    name: "DRIP DROP BY DAVE K..",
    floorPrice: "0.15 ETH",
    totalVolume: "0.97",
  },
  {
    image: "./images/photography/photo2.avif",
    name: "Editions x Guido",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.77",
  },
  {
    image: "./images/photography/photo3.avif",
    name: "Cybernetic Drift",
    floorPrice: "-",
    totalVolume: "1,362",
  },
  {
    image: "./images/photography/photo4.webp",
    name: "Women Unite - 10k As..",
    floorPrice: "0.04 ETH",
    totalVolume: "0.08",
  },
  {
    image: "./images/photography/photo5.avif",
    name: "Storms by Mitch Dobra..",
    floorPrice: "0.11 ETH",
    totalVolume: "0.05",
  },
  {
    image: "./images/photography/photo6.avif",
    name: "Pudgy Penguins",
    floorPrice: "22 APE",
    totalVolume: "142",
  },
];

function PhotoComponent() {
  return (
    <div className="trending-photo-container">
    <div className="headings">
      <h2>Trending in Photography</h2>
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

export default PhotoComponent;
