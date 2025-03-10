import React from "react";

import "./nft.css";
import { Heading } from "../../components/index.js";

const NFT = () => {
  return (
    <>
      <div className="yorfy__nft-header__gradient-purple gradient__bg-purple" />
      <div className="yorfy__nft-header__gradient-blue gradient__bg-blue" />
      <div className="yorfy__nft">
        <Heading
          title="Our Collection"
          heading="NFT"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </>
  );
};

export default NFT;
