import React from "react";
import "./Queries.css";
import ButtonComp from "../ButtonComponent/ButtonComp";

function Queries() {
  const categoryData = [
    { image: "./images/faq/q1.webp", name: "What is an NFT?" },
    { image: "./images/faq/q2.webp", name: "How to buy an NFT" },
    { image: "./images/faq/q3.webp", name: "What is minting?" },
    { image: "./images/faq/q4.webp", name: "What is a crypto wallet?" },
    { image: "./images/faq/q5.webp", name: "Who is OpenSea" },
    { image: "./images/faq/q6.webp", name: "How to sell an NFT usi.." },
  ];

  return (
    <div className="faq-container">
      <div className="headings">
        <h2>NFT 101</h2>
        <ButtonComp text="Learn more" />
      </div>
      <div className="category-list">
        {categoryData.map((category, index) => (
          <div className="category">
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>
            <div className="category-details-container">
              <div className="category-name">
                <div>
                  <h2>{category.name}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Queries;
