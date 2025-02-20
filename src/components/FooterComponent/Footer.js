// import React from "react";
// import "./FooterComp.css";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { BsDiscord } from "react-icons/bs";
// import { FaRedditAlien } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa6";
// import { FiMail } from "react-icons/fi";

// function Footer() {
//   return (
//     <footer>
//       <div className="footer-container">
//         <div className="upper-footer">
//           <div className="upper-footer-content">
//             <h3>Stay in the loop</h3>
//             <p>
//               Join our mailing list to stay in the loop with our newest feature
//               releases, NFT drops, and tips and tricks for navigating OpenSea.
//             </p>
//             <div className="footer-input">
//               <input type="text" placeholder="Your email address" />
//               <button>Sign up</button>
//             </div>
//           </div>
//           <div className="upper-footer-content">
//             <h3>Join the community</h3>
//             <div className="footer-input">
//               <div className="social-icon">
//                 <FaTwitter size={24}/>
//               </div>
//               <div className="social-icon">
//               <FaInstagram size={24}/>
//               </div>
//               <div className="social-icon">
//                 <BsDiscord size={24}/>
//               </div>
//               <div className="social-icon">
//                 <FaRedditAlien size={24}/>
//               </div>
//               <div className="social-icon">
//                 <FaYoutube size={24}/>
//               </div>
//               <div className="social-icon">
//                 <FaTiktok size={24}/>
//               </div>
//               <div className="social-icon">
//                 <FiMail size={24}/>
//               </div>
//             </div>
//           </div>
//           <div className="upper-footer-content">
//             <h3>Need help?</h3>
//             <button>Contact Support</button>         
//             </div>
//         </div>
//         <div className="bottom-footer"></div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "./FooterComp.css";
import { FaTwitter, FaInstagram, FaRedditAlien, FaYoutube, FaTiktok } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="upper-footer">
          <div className="upper-footer-content">
            <h3>Stay in the loop</h3>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>
            <div className="footer-input">
              <input type="text" placeholder="Your email address" />
              <button>Sign up</button>
            </div>
          </div>
          <div className="upper-footer-content">
            <h3>Join the community</h3>
            <div className="footer-input">
              <div className="social-icon"><FaTwitter size={24} /></div>
              <div className="social-icon"><FaInstagram size={24} /></div>
              <div className="social-icon"><BsDiscord size={24} /></div>
              <div className="social-icon"><FaRedditAlien size={24} /></div>
              <div className="social-icon"><FaYoutube size={24} /></div>
              <div className="social-icon"><FaTiktok size={24} /></div>
              <div className="social-icon"><FiMail size={24} /></div>
            </div>
          </div>
          <div className="upper-footer-content">
            <h3>Need help?</h3>
            <button>Contact Support</button>         
          </div>
        </div>
        <hr/>
        
        <div className="bottom-footer">
          <div className="footer-description">
          <img src="../images/footerImage.svg"/>
            <h3>OpenSea</h3>
            <p>
              The world’s first and largest digital marketplace for crypto collectibles
              and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Marketplace</h4>
              <ul>
                <li>Art</li>
                <li>Gaming</li>
                <li>Memberships</li>
                <li>PFPs</li>
                <li>Photography</li>
                <li>Music</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>My Account</h4>
              <ul>
                <li>Profile</li>
                <li>Favorites</li>
                <li>Watchlist</li>
                <li>Studio</li>
                <li>OpenSea Pro</li>
                <li>Settings</li>
              </ul>
              <h4>Stats</h4>
              <ul>
                <li>Rankings</li>
                <li>Activity</li>
                
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>Blog</li>
                <li>Learn</li>
                <li>Help Center</li>
                <li>Community Standards</li>
                <li>Taxes</li>
                <li>Partners</li>
                <li>Developer Platform</li>
                <li>Platform Status</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Ventures</li>
              </ul>
              <h4>Learn</h4>
              <ul>
                <li>What is an NFT?</li>
                <li>How to buy an NFT</li>
                <li>What are NFT drops?</li>
                <li>How to sell an NFT using OpenSea</li>
                <li>How to create an NFT on OpenSea</li>
                <li>What is a crypto wallet?</li>
                <li>What is cryptocurrency?</li>
                <li>What are blockchain gas fees?</li>
                <li>What is a blockchain?</li>
                <li>What is web3?</li>
                <li>How to stay protected in web3</li>
              </ul>
            </div>
          </div>
        <hr />
        </div>
      </div>
      <div className="company-tnc">
          <div>
            <p>© 2018 - 2025 Ozone Networks, Inc</p>
          </div>
          <div className="policy-terms">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
