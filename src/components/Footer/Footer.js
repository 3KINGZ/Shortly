import React from "react";
import facebookIcon from "./images/icon-facebook.svg";
import twitterIcon from "./images/icon-twitter.svg";
import pininterestIcon from "./images/icon-pinterest.svg";
import instagramIcon from "./images/icon-instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>Shortly</div>
      <div className="other-div">
        <h5>Features</h5>
        <div>Link shortening</div>
        <div>Branded Links</div>
        <div>Analyses</div>
      </div>
      <div className="other-div">
        <h5>Resources</h5>
        <div>Blog</div>
        <div>Developers</div>
        <div>Support</div>
      </div>
      <div className="other-div">
        <h5>Company</h5>
        <div>About</div>
        <div>Our Team</div>
        <div>Careers</div>
        <div>Contact</div>
      </div>
      <div className="icon-container">
        <div className="other-div">
          <a href="..">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
        </div>
        <div className="other-div">
          <a href="..">
            <img src={twitterIcon} alt="twitter-icon" />
          </a>
        </div>
        <div className="other-div">
          <a href="..">
            <img src={pininterestIcon} alt="pininterest-icon" />
          </a>
        </div>
        <div className="other-div">
          <a href="..">
            <img src={instagramIcon} alt="instagram-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
