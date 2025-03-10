import React from "react";
import "./nftcard.css";

import logo from "../../assets/logo.svg";

const NFTCard = ({ imageSource, title }) => {
  return (
    <div className="yorfy__nftcard">
      <img className="yorfy__nftcard-image" src={imageSource} alt="{title}" />
      <div>
        <img src={logo} alt="logo" />
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default NFTCard;
