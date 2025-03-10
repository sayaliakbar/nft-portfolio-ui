import React from "react";
import "./imagecard.css";
import { Button, Heading } from "../index.js";

const ImageCard = ({ imageSource, button, heading, title, body }) => {
  return (
    <div className="yorfy__imageCard section__padding">
      <div className="yorfy__imageCard-image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="yorfy__imageCard-content">
        <Button text={button} />
        <Heading heading={heading} title={title} body={body} />
      </div>
    </div>
  );
};

export default ImageCard;
