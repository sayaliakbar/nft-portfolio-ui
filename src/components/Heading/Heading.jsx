import React from "react";

import "./heading.css";

const Heading = ({ heading, title, body }) => {
  return (
    <div className="yorfy__heading">
      <h6>{heading}</h6>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Heading;
