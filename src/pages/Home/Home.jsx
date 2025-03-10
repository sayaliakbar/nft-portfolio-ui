import React from "react";

import "./home.css";

import {
  HomeBgGradients,
  Header,
  Featured,
  Community,
  Collaboration,
  Newsletter,
} from "../../containers/Home/index.js";

import { SaleBar, Collection } from "../../components/index.js";

import { sixfaces01, sixfaces02, sixfaces03 } from "./imports.js";

const nftCollectionData = [
  { title: "YorNoose #432", imageSource: sixfaces01 },
  { title: "YorHayr #332", imageSource: sixfaces02 },
  { title: "YorMwoth #765", imageSource: sixfaces03 },
];

const Home = () => {
  return (
    <>
      <HomeBgGradients />
      <div className="yorfy__home">
        <Header />
        <SaleBar />
        <Featured />
        <Collection nftCollectionData={nftCollectionData} />

        <Community />
        <SaleBar />
        <Collaboration />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
