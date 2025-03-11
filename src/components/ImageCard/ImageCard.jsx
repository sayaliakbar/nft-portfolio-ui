import React from "react";
import "./imagecard.css";
import { Button, Heading } from "../index.js";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ imageSource, button, heading, title, body }) => {
  const Navigate = useNavigate();
  return (
    <div className="yorfy__imageCard section__padding">
      <div className="yorfy__imageCard-image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="yorfy__imageCard-content">
        {button && <Button onClick={() => Navigate("/error")} text={button} />}
        <Heading heading={heading} title={title} body={body} />
      </div>
    </div>
  );
};

export default ImageCard;
