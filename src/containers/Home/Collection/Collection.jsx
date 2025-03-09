import React from "react";
import "./collection.css";
import { Heading, Button } from "../../../components/index.js";
import { sixfaces03, sixfaces04, sixfaces05, logo } from "./imports.js";

const Collection = () => {
  return (
    <>
      <div className=" yorfy__home-collection-gradientBlue gradient__bg-blue" />
      <div className=" yorfy__home-collection-gradientPurple gradient__bg-purple" />
      <div className="yorfy__home-collection section__margin">
        <div className="yorfy__home-collection__heading">
          <Heading
            heading="Collections"
            title="Yorfy NFT Collections"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="yorfy__home-collection__content">
          <div className="yorfy__home-collection__content-image">
            <img src={sixfaces03} alt="Six Faces 03" />
            <div>
              <img src={logo} alt="logo" />
              <h5>YorNoose #432</h5>
            </div>
          </div>
          <div className="yorfy__home-collection__content-image">
            <img src={sixfaces04} alt="Six Faces 04" />
            <div>
              <img src={logo} alt="logo" />
              <h5>YorHayr #332</h5>
            </div>
          </div>
          <div className="yorfy__home-collection__content-image">
            <img src={sixfaces05} alt="Six Faces 05" />
            <div>
              <img src={logo} alt="logo" />
              <h5>YorMwoth #765</h5>
            </div>
          </div>
        </div>
        <Button
          type="secondary"
          size="large"
          text="View on OpenSea"
          disabled={false}
          onClick={() => console.log("clicked")}
        />
      </div>
    </>
  );
};

export default Collection;
