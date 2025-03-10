import React from "react";
import "./nftcard.css";

const NFTCard = ({ imageSource, title, logo, body }) => {
  return (
    <div className="yorfy__nftcard">
      <img className="yorfy__nftcard-image" src={imageSource} alt="{title}" />
      <div className="yorfy__nftcard-content">
        {logo && <img src={logo} alt="logo" />}
        <h5>{title}</h5>
        {body && <p>{body}</p>}
      </div>
    </div>
  );
};

export default NFTCard;
