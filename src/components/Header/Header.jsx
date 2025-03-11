import React from "react";
import "./header.css";

import { BgGradients, Heading } from "../index.js";
const Header = ({ title, heading, body }) => {
  return (
    <div className="yorfy__hero section__margin">
      <BgGradients />
      <Heading title={title} heading={heading} body={body} />
    </div>
  );
};

export default Header;
