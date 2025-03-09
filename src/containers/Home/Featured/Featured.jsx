import React from "react";
import "./featured.css";

import { Heading } from "../../../components/index.js";

const Featured = () => {
  return (
    <div className="yorfy__home__featured section__margin">
      <div className="yorfy__home__featured-heading">
        <Heading
          heading="Featured"
          title="Hot Trending On This Week from Yorfy"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="yorfy__home__featured-container">
        <div className="yorfy__home__featured-container__content"></div>
      </div>
    </div>
  );
};

export default Featured;
