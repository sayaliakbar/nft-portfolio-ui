import React from "react";

import "./nft.css";
import { Heading, Collection, Header } from "../../components/index.js";

import { Benefits, Timeline } from "../../containers/NFT/index.js";

import {
  sixfaces01,
  sixfaces02,
  sixfaces03,
  sixfaces04,
  sixfaces05,
  logo,
} from "./imports.js";

const nftCollectionData = [
  { title: "YorNoose #432", imageSource: sixfaces01, logo },
  { title: "YorHayr #332", imageSource: sixfaces02, logo },
  { title: "YorMwoth #765", imageSource: sixfaces03, logo },
  {
    title: "YorTyth #646",
    imageSource: sixfaces04,
    logo,
  },
  { title: "YorLyps #167", imageSource: sixfaces05, logo },
  { title: "YorEyes #234", imageSource: sixfaces01, logo },
  { title: "YorTwong #912", imageSource: sixfaces02, logo },
  { title: "YorCray #348", imageSource: sixfaces03, logo },
  { title: "YorErpon #966", imageSource: sixfaces04, logo },
  { title: "YorLup #521", imageSource: sixfaces05, logo },
  { title: "YorFlo #730", imageSource: sixfaces01, logo },
  { title: "YorSmyl #309", imageSource: sixfaces02, logo },
];

const nftCollectionHeading = {
  heading: "Our Team",
  title: "Behind the Yorfy NFT",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const NFT = () => {
  return (
    <>
      <div className="yorfy__nft">
        <Header
          title="Our Collection"
          heading="NFT"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Collection
          nftCollectionData={nftCollectionData}
          heading={nftCollectionHeading}
          button={true}
        />
        <Benefits />
        <Timeline />
      </div>
    </>
  );
};

export default NFT;
