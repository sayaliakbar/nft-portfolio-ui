import React from "react";

import "./home.css";

import {
  Gradients,
  Header,
  Featured,
  Collection,
  Community,
  Collaboration,
  Newsletter,
} from "../../containers/Home/index.js";
import { SaleBar } from "../../components/index.js";

const Home = () => {
  return (
    <>
      <Gradients />
      <div className="yorfy__home">
        <Header />
        <SaleBar />
        <Featured />
        <Collection />
        <Community />
        <SaleBar />
        <Collaboration />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
