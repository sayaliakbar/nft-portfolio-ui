import React from "react";
import "./pointcard.css";
import { Button } from "../index.js";

const PointCard = ({ imageSource, title, body, button = false }) => {
  console.log(button);
  return (
    <div className="yorfy__nft-pointcard">
      <div className="yorfy__nft-pointcard__logo">
        <img src={imageSource} alt="benefits check" />
      </div>
      <div className="yorfy__nft-pointcard__text">
        <div className="yorfy__nft-pointcard__text-content">
          <h5>{title}</h5>
          {button && <Button text={button} />}
        </div>

        <p className="paragraph-label">{body}</p>
      </div>
    </div>
  );
};

export default PointCard;
