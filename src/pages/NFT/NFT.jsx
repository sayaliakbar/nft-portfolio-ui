import React from "react";

import "./nft.css";
import { Heading, Collection, BgGradients } from "../../components/index.js";

import { Benefits, Timeline } from "../../containers/NFT/index.js";

import {
  sixfaces01,
  sixfaces02,
  sixfaces03,
  sixfaces04,
  sixfaces05,
} from "./imports.js";

const nftCollectionData = [
  { title: "YorNoose #432", imageSource: sixfaces01 },
  { title: "YorHayr #332", imageSource: sixfaces02 },
  { title: "YorMwoth #765", imageSource: sixfaces03 },
  {
    title: "YorTyth #646",
    imageSource: sixfaces04,
  },
  { title: "YorLyps #167", imageSource: sixfaces05 },
  { title: "YorEyes #234", imageSource: sixfaces01 },
  { title: "YorTwong #912", imageSource: sixfaces02 },
  { title: "YorCray #348", imageSource: sixfaces03 },
  {
    title: "YorErpon #966",
    imageSource: sixfaces04,
  },
  { title: "YorLup #521", imageSource: sixfaces05 },
  { title: "YorFlo #730", imageSource: sixfaces01 },
  { title: "YorSmyl #309", imageSource: sixfaces02 },
];

const NFT = () => {
  return (
    <>
      <BgGradients />
      <div className="yorfy__nft">
        <Heading
          title="Our Collection"
          heading="NFT"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Collection nftCollectionData={nftCollectionData} />
        <Benefits />
        <Timeline />
      </div>
    </>
  );
};

export default NFT;
