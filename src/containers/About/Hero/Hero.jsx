import React from "react";

import "./hero.css";

import { Button, Heading } from "../../../components/index.js";

import {
  logoipsum01,
  logoipsum02,
  logoipsum03,
  logoipsum04,
} from "./imports.js";

const Hero = () => {
  return (
    <div className="yorfy__aboutUs-hero ">
      <div className="yorfy__aboutUs-hero__milestones">
        <div className="yorfy__aboutUs-hero__milestones-items">
          <h3>546</h3>
          <p>NFT Items</p>
        </div>
        <div className="yorfy__aboutUs-hero__milestones-divider" />
        <div className="yorfy__aboutUs-hero__milestones-items">
          <h3>42</h3>
          <p>Owners</p>
        </div>
        <div className="yorfy__aboutUs-hero__milestones-divider" />

        <div className="yorfy__aboutUs-hero__milestones-items">
          <h3>378</h3>
          <p>Items Sold</p>
        </div>
      </div>
      <div className="yorfy__aboutUs-hero__heading">
        <Heading
          heading="About Us"
          title="Let’me Introduce You About Yorfy"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Button text="Read More" size="large" style="secondary" />
      </div>
      <div className="yorfy__aboutUs-hero__brands">
        <img src={logoipsum01} alt="logoipsum01" />
        <img src={logoipsum02} alt="logoipsum02" />
        <img src={logoipsum03} alt="logoipsum03" />
        <img src={logoipsum04} alt="logoipsum04" />
      </div>
    </div>
  );
};

export default Hero;
