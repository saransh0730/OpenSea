import React from "react";
import "./Container.css";

function Category({ image, name, floorPrice, totalVolume, volHeading }) {
  return (
    <div className="category">
      <div className="category-image">
        <img src={image} alt={name} />
      </div>
      <div className="category-details-container">
        <div className="category-name">
          <div>
            <h2>{name}</h2>
          </div>
          <div>
            <img src="./images/verified.svg" alt="verified" />
          </div>
        </div>
        <div className="category-details">
          <div className="category-price">
            <p>Floor</p>
            <h2>{floorPrice}</h2>
          </div>
          <div className="category-volume">
            <p>{volHeading}</p>
            <h2>{totalVolume} ETH</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
