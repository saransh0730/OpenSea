import React, { useState } from "react";
import { FaWallet, FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { LiaHandshake } from "react-icons/lia";
import { RiPencilRuler2Line } from "react-icons/ri";
import { SiOpensea } from "react-icons/si";
import { RiSettings4Line } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import Switch from "@mui/material/Switch";
import { PiGraduationCapBold } from "react-icons/pi";
import { MdHelpOutline } from "react-icons/md";
import { LuHandHelping } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa";
import {
  FaTwitter,
  FaInstagram,
  FaRedditAlien,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { ImPencil } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import "./Navbar.css";

function NavbarComp() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const toggleSidebar = () => {
    setisMenuOpen(!isMenuOpen);
  };


  const connectWallet = async (e) => {
    e.preventDefault(); 
    
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        }); 
        console.log(accounts);
      } else {
        console.log("Please install MetaMask or another Web3 wallet");
      }
    } catch (err) {
      if (err.code === 4001) {
        console.log("Wallet connection rejected by user");
      } else if (err.code === -32002) {
        console.log("Wallet connection request already pending");
      } else {
        console.log("Wallet connection failed: " + err.message);
      }
      console.error("Connection error:", err);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div className="company-details">
            <ul>
              <li className="logo">
                <img src="./images/opensea.svg" />
                <h2>OpenSea</h2>
              </li>
              <li className="dropdown">
                Drops
                <div className="dropdown-menu">
                  <a href="#">Featured</a>
                  <a href="#">Learn more</a>
                </div>
              </li>
              <li className="dropdown">
                Stats
                <div className="dropdown-menu">
                  <a href="#">Rankings</a>
                  <a href="#">Activity</a>
                </div>
              </li>
              <li className="dropdown">Create</li>
            </ul>
            <div className="searchbar">
              <IoSearchSharp size={18} className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="interactive-options">
              <button>
                <FaWallet /> &nbsp;&nbsp; Login
              </button>
              <div
                className="profile-dropdown"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <a>
                  <FaRegUserCircle size={19} />
                </a>
                {showDropdown && (
                  <div className="profile-menu">
                    <a href="#">
                      <FaRegUser size={21} /> Profile
                    </a>
                    <a href="#" onClick={connectWallet}>
                      <FaBitcoin size={21} /> 
                     Connect Wallet
                    </a>
                    <a href="#">
                      <IoEyeOutline size={22} /> Watchlist
                    </a>
                    <a href="#">
                      <LiaHandshake size={22} />
                      Deals
                    </a>
                    <a href="#">
                      <RiPencilRuler2Line size={22} />
                      Studio
                    </a>
                    <a href="#">
                      <SiOpensea size={22} />
                      OpenSea Pro
                    </a>
                    <hr />
                    <a href="#">
                      <RiSettings4Line size={22} />
                      Settings
                    </a>
                    <a href="#">
                      <BsGlobe size={22} />
                      Language
                    </a>
                    <a href="#">
                      <FaRegMoon size={22} />
                      Night Mode <Switch {...label} defaultChecked />
                    </a>
                    <hr />
                    <a href="#">
                      <PiGraduationCapBold size={22} />
                      Learn
                    </a>
                    <a href="#">
                      <LuHandHelping size={22} />
                      Help Center
                    </a>
                    <a href="#">
                      <MdHelpOutline size={22} />
                      Support
                    </a>
                  </div>
                )}
              </div>
              <button>
                <FaCartShopping size={19} />
              </button>
            </div>
            <div className="phone-menu">
              <button>
                <FaWallet />
                &nbsp; Login
              </button>
              <button className="hamburger-menu">
                <IoSearchSharp />
              </button>
              <button className="hamburger-menu" onClick={toggleSidebar}>
                {isMenuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
              </button>
              <div className={`sidebar ${isMenuOpen ? "open" : "close"}`}>
                <a href="#">
                  <div className="options">
                    <FaRegCalendarAlt size={22} />
                    Drops
                  </div>
                  <MdKeyboardArrowRight size={22} />
                </a>
                <a href="#">
                  <div className="options">
                    <IoStatsChartSharp size={22} />
                    Stats
                  </div>
                  <MdKeyboardArrowRight size={22} />
                </a>
                <a href="#">
                  <div className="options">
                    <GrResources size={22} />
                    Resources
                  </div>
                  <MdKeyboardArrowRight size={22} />
                </a>
                <a href="#">
                  <div className="options">
                    <ImPencil size={22} />
                    Create
                  </div>
                </a>
                <a href="#">
                  <div className="options">
                    <img
                      src="../images/openSeaPro.svg"
                      style={{ width: "22px", height: "22px" }}
                    />
                    OpenSea Pro
                  </div>
                </a>
                <a href="#">
                  <div className="options">
                    <BsGlobe size={22} />
                    Language
                  </div>
                </a>
                <a href="#">
                  <div className="options">
                    <FaRegMoon size={22} />
                    Night Mode
                  </div>
                  <Switch {...label} defaultChecked />
                </a>
                <hr />
                <div className="footer-input">
                  <div className="social-icon">
                    <FaTwitter size={24} />
                  </div>
                  <div className="social-icon">
                    <FaInstagram size={24} />
                  </div>
                  <div className="social-icon">
                    <BsDiscord size={24} />
                  </div>
                  <div className="social-icon">
                    <FaRedditAlien size={24} />
                  </div>
                  <div className="social-icon">
                    <FaYoutube size={24} />
                  </div>
                  <div className="social-icon">
                    <FaTiktok size={24} />
                  </div>
                  <div className="social-icon">
                    <FiMail size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavbarComp;
