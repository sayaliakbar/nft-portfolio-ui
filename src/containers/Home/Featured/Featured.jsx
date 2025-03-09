import React from "react";
import "./featured.css";

import { Heading, Button } from "../../../components/index.js";
import logo from "../../../assets/logo.svg";
import sixfaces02 from "../../../assets/images/sixfaces02.png";

const Featured = () => {
  return (
    <div className="yorfy__home__featured section__padding">
      <div className="yorfy__home__featured-heading">
        <Heading
          heading="Featured"
          title="Hot Trending On This Week from Yorfy"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="yorfy__home__featured-container">
        <div className="yorfy__home__featured-container__content">
          <img src={logo} alt="logo" />
          <h3>YorEyes #234</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="yorfy__home__featured-container__image">
          <img src={sixfaces02} alt="Six Faces" />
        </div>
        <div className="yorfy__home__featured-container__content">
          <h3>Interesting with This Item?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            text="But on OpenSea"
            style="primary"
            size="large"
            onClick={() => console.log("clicked")}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
