import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="socialMedia__container-main">
      <div className="socialMedia__twitter">
        <a href="https://twitter.com/RehNicholas" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div className="socialMedia__instagram">
        <a href="https://www.instagram.com/nickreh57/" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div className="socialMedia__facebook">
        <a href="https://www.facebook.com/nicholas.reh/" target="_blank">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
