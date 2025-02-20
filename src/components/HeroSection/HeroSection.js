import React, { useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "./HeroSection.css";

const sectionImages = [
  {
    image: "./images/heroSection/img1.avif",
    title: "Murakami.Flowers Official",
    floor: "0.2 ETH",
  },
  {
    image: "./images/heroSection/img2.avif",
    title: "Letters by Vinnie Hager",
    floor: "0.44 ETH",
  },
  {
    image: "./images/heroSection/img3.avif",
    title: "When Two Stars Collide",
    floor: "N/A",
  },
  {
    image: "./images/heroSection/img4.avif",
    title: "Doodles",
    floor: "3.84 ETH",
  },
];

function HeroSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hero-section-container">
      <div className="hero-background"></div>
      <div className="hero-section">
        <div className="category-btn-container">
          <li>
            <a className="active-btn">All</a>
            <a>Art</a>
            <a>Gaming</a>
            <a>Memberships</a>
            <a>PFPs</a>
            <a>Photography</a>
            <a>Music</a>
          </li>
        </div>
        <div className="nft-slider-container">
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            <MdKeyboardArrowLeft size={22} />
          </button>

          <div className="nft-cards" ref={scrollRef}>
            {sectionImages.map((item, index) => (
              <div key={index} className="nft-card">
                <img src={item.image} alt={item.title} />
                <div className="card-info">
                  <h4>{item.title}</h4>
                  {item.floor && <p>Floor: {item.floor}</p>}
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => scroll("right")}>
            <MdKeyboardArrowRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
