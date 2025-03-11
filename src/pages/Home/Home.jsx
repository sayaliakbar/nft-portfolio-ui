import React from "react";

import {
  HomeBgGradients,
  Header,
  Featured,
  Collaboration,
  Newsletter,
} from "../../containers/Home/index.js";

import { SaleBar, Collection, Community } from "../../components/index.js";

import { sixfaces01, sixfaces02, sixfaces03, logo } from "./imports.js";

const nftCollectionData = [
  { title: "YorNoose #432", imageSource: sixfaces01, logo },
  { title: "YorHayr #332", imageSource: sixfaces02, logo },
  { title: "YorMwoth #765", imageSource: sixfaces03, logo },
];
const collectionHeading = {
  heading: "Featued",
  title: "Trending Collection",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const Home = () => {
  return (
    <>
      <HomeBgGradients />
      <div className="yorfy__home">
        <Header />
        <SaleBar />
        <Featured />
        <Collection
          nftCollectionData={nftCollectionData}
          heading={collectionHeading}
          button={true}
        />

        <Community />
        <SaleBar />
        <Collaboration />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
