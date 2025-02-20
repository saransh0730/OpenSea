import React from "react";
import "./TrendingMemberships.css";
import Category from "../categories/Container";
import ButtonComp from "../ButtonComponent/ButtonComp";

const categoryData = [
  {
    image: "./images/memberships/m1.avif",
    name: "SuperFrens",
    floorPrice: "< 0.01 ETH",
    totalVolume: "1",
  },
  {
    image: "./images/memberships/m2.avif",
    name: "Gemesis",
    floorPrice: "0.05 ETH",
    totalVolume: "72",
  },
  {
    image: "./images/memberships/m3.avif",
    name: "Oracle Patron NFT",
    floorPrice: "0.19 ETH",
    totalVolume: "21",
  },
  {
    image: "./images/memberships/m4.avif",
    name: "Story Protocol - Onchain..",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.58",
  },
  {
    image: "./images/memberships/m5.avif",
    name: "Asc11 Phunks",
    floorPrice: "< 0.01 ETH",
    totalVolume: "0.02",
  },
  {
    image: "./images/memberships/m6.avif",
    name: "Kaito Genesis",
    floorPrice: "4.30 ETH",
    totalVolume: "210",
  },
];

function TrendingMemberships() {
  return (
    <div className="trending-games-container">
      <div className="headings">
        <h2>Trending in Memberships</h2>
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

export default TrendingMemberships;
